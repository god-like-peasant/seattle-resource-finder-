#!/usr/bin/env node
/**
 * Seattle Resource Finder — repository validation
 * -------------------------------------------------
 * Zero dependencies, runs anywhere Node runs. Intended for a maintainer (or
 * CI) to run before deploying any change to seattle_data.js, app.js,
 * type_meta.js, or onboarding_and_filter.js.
 *
 *   node validate.js
 *
 * Exits with a non-zero code if anything marked FAIL is found, so it can be
 * wired into a pre-deploy check. WARN items don't fail the run but are worth
 * a maintainer's attention.
 *
 * This intentionally does NOT try to verify real-world facts (whether a
 * phone number still rings, whether an address is current) — that requires
 * a human or an external source, not a script. It only catches the kind of
 * mechanical mistakes that are easy to introduce while hand-editing a large
 * JS data file: duplicate IDs, bad coordinates, missing required fields,
 * unknown category types, broken JS syntax, and translation-key drift.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = __dirname;
let failures = 0;
let warnings = 0;

function ok(msg) { console.log('  OK   ' + msg); }
function fail(msg) { console.log('  FAIL ' + msg); failures++; }
function warn(msg) { console.log('  WARN ' + msg); warnings++; }
function section(title) { console.log('\n== ' + title + ' =='); }

// ---------------------------------------------------------------------
section('1. JavaScript syntax');
// ---------------------------------------------------------------------
['app.js', 'seattle_data.js', 'type_meta.js', 'onboarding_and_filter.js', 'sw.js', 'validate.js'].forEach((f) => {
  const p = path.join(DIR, f);
  if (!fs.existsSync(p)) { fail(f + ' is missing'); return; }
  try {
    execFileSync(process.execPath, ['--check', p], { stdio: 'pipe' });
    ok(f + ' parses');
  } catch (e) {
    fail(f + ' has a syntax error:\n' + e.stderr.toString());
  }
});

// ---------------------------------------------------------------------
section('2. manifest.json');
// ---------------------------------------------------------------------
try {
  const manifest = JSON.parse(fs.readFileSync(path.join(DIR, 'manifest.json'), 'utf8'));
  ok('manifest.json is valid JSON');
  ['name', 'short_name', 'start_url', 'display', 'icons'].forEach((k) => {
    if (manifest[k] === undefined) fail('manifest.json is missing "' + k + '"');
  });
  if (Array.isArray(manifest.icons)) {
    const sizes = manifest.icons.map((i) => i.sizes).join(',');
    if (!/192x192/.test(sizes)) warn('manifest.json has no 192x192 icon');
    if (!/512x512/.test(sizes)) warn('manifest.json has no 512x512 icon');
  }
} catch (e) {
  fail('manifest.json failed to parse: ' + e.message);
}

// ---------------------------------------------------------------------
section('3. Resource dataset integrity (seattle_data.js)');
// ---------------------------------------------------------------------
let SEATTLE_RESOURCES = [];
try {
  const code = fs.readFileSync(path.join(DIR, 'seattle_data.js'), 'utf8');
  const sandbox = {};
  // eslint-disable-next-line no-new-func
  new Function('sandbox', code + '\nsandbox.SEATTLE_RESOURCES = SEATTLE_RESOURCES; if (typeof SEATTLE_WORK !== "undefined") sandbox.SEATTLE_WORK = SEATTLE_WORK;')(sandbox);
  SEATTLE_RESOURCES = sandbox.SEATTLE_RESOURCES || [];
  ok('seattle_data.js evaluated (' + SEATTLE_RESOURCES.length + ' resources)');
  if (sandbox.SEATTLE_WORK !== undefined) {
    fail('SEATTLE_WORK still exists — there must be exactly one dataset (SEATTLE_RESOURCES). See README "Data architecture".');
  } else {
    ok('no SEATTLE_WORK (single authoritative dataset confirmed)');
  }
} catch (e) {
  fail('seattle_data.js failed to evaluate: ' + e.message);
}

let TYPE_META = {};
try {
  const tm = require('./type_meta.js');
  TYPE_META = tm.TYPE_META || {};
  ok('type_meta.js loaded (' + Object.keys(TYPE_META).length + ' categories)');
} catch (e) {
  fail('type_meta.js failed to load: ' + e.message);
}

if (SEATTLE_RESOURCES.length) {
  const ids = {};
  const dupeIds = [];
  SEATTLE_RESOURCES.forEach((r) => {
    if (ids[r.id]) dupeIds.push(r.id);
    ids[r.id] = true;
  });
  dupeIds.length ? fail('duplicate resource ids: ' + dupeIds.join(', ')) : ok('no duplicate resource ids');

  const missingRequired = SEATTLE_RESOURCES.filter((r) => !r.id || !r.type || !r.name || r.lat == null || r.lon == null);
  missingRequired.length
    ? fail(missingRequired.length + ' resources missing a required field (id/type/name/lat/lon): ' + missingRequired.map((r) => r.id || r.name).join(', '))
    : ok('all resources have id, type, name, lat, lon');

  const unknownType = SEATTLE_RESOURCES.filter((r) => !TYPE_META[r.type]);
  unknownType.length
    ? fail(unknownType.length + ' resources use a type not defined in type_meta.js: ' + unknownType.map((r) => r.id + ' (' + r.type + ')').join(', '))
    : ok('every resource type is defined in type_meta.js');

  // King County / greater Seattle area sanity box — catches a mistyped
  // coordinate (e.g. missing a minus sign) rather than validating precision.
  const badCoord = SEATTLE_RESOURCES.filter((r) => r.lat < 47.0 || r.lat > 48.0 || r.lon < -123.0 || r.lon > -121.5);
  badCoord.length
    ? fail(badCoord.length + ' resources have coordinates outside the greater Seattle/King County area: ' + badCoord.map((r) => r.id).join(', '))
    : ok('all coordinates fall within the greater Seattle/King County area');

  const noPhone = SEATTLE_RESOURCES.filter((r) => !r.phone || !r.phone.trim());
  if (noPhone.length) warn(noPhone.length + ' resources have no phone number: ' + noPhone.map((r) => r.id).join(', '));

  const verified = SEATTLE_RESOURCES.filter((r) => r.verificationStatus === 'verified');
  const withSource = SEATTLE_RESOURCES.filter((r) => r.sourceUrl);
  console.log('  INFO ' + verified.length + '/' + SEATTLE_RESOURCES.length + ' resources explicitly marked verified (with a source); the rest render as "unconfirmed" by default (see normalizeResource() in app.js) — this is expected, not a failure.');
  const verifiedNoSource = verified.filter((r) => !r.sourceUrl);
  verifiedNoSource.length
    ? fail('resources marked verified but with no sourceUrl: ' + verifiedNoSource.map((r) => r.id).join(', '))
    : ok('every resource marked "verified" has a sourceUrl');
}

// ---------------------------------------------------------------------
section('3b. Maintainer dashboard — where the next hour of work matters most');
// ---------------------------------------------------------------------
// This section is deliberately NOT just a count of problems. A maintainer with
// one free hour needs to know which specific records to work on first, not a
// tally. Priority = how many people a category likely serves × how safety-
// critical it is × how stale/unverified it currently is.
if (SEATTLE_RESOURCES.length) {
  const now = new Date('2026-08-29'); // pinned to this run's DATA_LAST_REVIEWED, not wall-clock, so re-runs are reproducible
  function daysSince(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (isNaN(d)) return null;
    return Math.round((now - d) / 86400000);
  }
  function freshnessBucket(r) {
    const days = daysSince(r.verifiedAt);
    if (days === null) return 'UNKNOWN'; // never checked — not the same as "old", just never confirmed
    if (days <= 90) return 'CURRENT';
    if (days <= 365) return 'AGING';
    return 'STALE';
  }
  const buckets = { CURRENT: 0, AGING: 0, STALE: 0, UNKNOWN: 0 };
  SEATTLE_RESOURCES.forEach((r) => { buckets[freshnessBucket(r)]++; });

  console.log('  TOTAL RESOURCES: ' + SEATTLE_RESOURCES.length);
  console.log('  CURRENT (checked \u226490 days ago):   ' + buckets.CURRENT);
  console.log('  AGING (checked 91\u2013365 days ago):  ' + buckets.AGING);
  console.log('  STALE (checked >365 days ago):     ' + buckets.STALE);
  console.log('  UNKNOWN (never independently checked): ' + buckets.UNKNOWN);
  console.log('  MISSING PHONE:  ' + SEATTLE_RESOURCES.filter((r) => !r.phone || !r.phone.trim()).length);
  console.log('  MISSING SOURCE: ' + SEATTLE_RESOURCES.filter((r) => !r.sourceUrl).length);
  console.log('  MISSING HOURS:  ' + SEATTLE_RESOURCES.filter((r) => !r.hours || !r.hours.trim()).length);

  // High-leverage categories: these are the types a person in crisis is most
  // likely to need immediately, and where wrong information costs the most.
  const HIGH_LEVERAGE_TYPES = ['system', 'shelter', 'medical', 'housinghelp', 'work', 'meal', 'foodbank', 'shower'];
  const HIGH_LEVERAGE_TAGS = ['dv', 'youth', 'family', 'veteran'];

  function priorityScore(r) {
    let score = 0;
    if (HIGH_LEVERAGE_TYPES.indexOf(r.type) !== -1) score += 5;
    if (r.type === 'system') score += 5; // crisis/system entries matter most of all
    (r.tags || []).forEach((tg) => { if (HIGH_LEVERAGE_TAGS.indexOf(tg) !== -1) score += 3; });
    if (!r.phone || !r.phone.trim()) score += 4;
    if (!r.sourceUrl) score += 2;
    if (freshnessBucket(r) === 'STALE') score += 3;
    if (freshnessBucket(r) === 'UNKNOWN') score += 1;
    if (!r.hours || !r.hours.trim()) score += 1;
    return score;
  }

  const ranked = SEATTLE_RESOURCES
    .map((r) => ({ r, score: priorityScore(r) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  console.log('\n  URGENT REVIEW PRIORITY (top ' + ranked.length + ' — highest real-world impact per hour of maintainer time):');
  ranked.forEach((x, i) => {
    const r = x.r;
    const reasons = [];
    if (!r.phone || !r.phone.trim()) reasons.push('missing phone');
    if (!r.sourceUrl) reasons.push('no source recorded');
    if (freshnessBucket(r) === 'STALE') reasons.push('checked >1yr ago');
    if (freshnessBucket(r) === 'UNKNOWN') reasons.push('never independently checked');
    if (!r.hours || !r.hours.trim()) reasons.push('missing hours');
    if (HIGH_LEVERAGE_TYPES.indexOf(r.type) !== -1 || r.type === 'system') reasons.push('high-traffic category: ' + r.type);
    console.log('    ' + (i + 1) + '. [' + r.id + '] ' + r.name + ' \u2014 ' + reasons.join(', '));
  });
  if (!ranked.length) console.log('    (nothing scored above zero \u2014 nice work)');
}

// ---------------------------------------------------------------------
section('4. Translation key coverage (en vs es, app.js I18N)');
// ---------------------------------------------------------------------
try {
  const appSrc = fs.readFileSync(path.join(DIR, 'app.js'), 'utf8');
  const i18nMatch = appSrc.match(/var I18N = \{([\s\S]*?)\n  \};/);
  const block = i18nMatch ? i18nMatch[1] : '';
  let enMatch = null, esMatch = null;
  if (!i18nMatch) {
    warn('could not locate the I18N block in app.js (regex may need updating if the code moved)');
  } else {
    enMatch = block.match(/en:\s*\{([\s\S]*?)\n    \},\s*\n\s*es:/);
    esMatch = block.match(/es:\s*\{([\s\S]*?)\n    \}\s*\n\s*\};?$/) || block.match(/es:\s*\{([\s\S]*)\}\s*$/);
    function keysOf(str) {
      const keys = [];
      const re = /\n?\s*([A-Za-z0-9_]+):\s*'/g;
      let m;
      while ((m = re.exec(str))) keys.push(m[1]);
      return keys;
    }
    const enKeys = enMatch ? keysOf(enMatch[1]) : [];
    const esKeys = esMatch ? keysOf(esMatch[1]) : [];
    if (!enKeys.length || !esKeys.length) {
      warn('could not reliably extract en/es keys via regex — skipping key-parity check. (This is a static-analysis limitation, not a code bug; check manually if you touch I18N.)');
    } else {
      const enSet = new Set(enKeys), esSet = new Set(esKeys);
      const missingInEs = enKeys.filter((k) => !esSet.has(k));
      const missingInEn = esKeys.filter((k) => !enSet.has(k));
      missingInEs.length ? fail('keys present in en but missing in es: ' + missingInEs.join(', ')) : ok('every en key has an es counterpart');
      missingInEn.length ? fail('keys present in es but missing in en: ' + missingInEn.join(', ')) : ok('every es key has an en counterpart');
      console.log('  INFO ' + enKeys.length + ' en keys, ' + esKeys.length + ' es keys checked');
    }
  }

  // Every t('someKey') call site should resolve to a real key in at least 'en'.
  const usedKeys = new Set();
  const callRe = /\bt\('([A-Za-z0-9_]+)'\)/g;
  let cm;
  while ((cm = callRe.exec(appSrc))) usedKeys.add(cm[1]);
  if (enMatch) {
    const enSet = new Set(keysOfSafe(enMatch[1]));
    const unresolved = [...usedKeys].filter((k) => !enSet.has(k));
    unresolved.length
      ? fail('t() is called with keys that don\'t exist in I18N.en: ' + unresolved.join(', '))
      : ok('every t() call resolves to a defined key');
  }
  function keysOfSafe(str) {
    const keys = [];
    const re = /\n?\s*([A-Za-z0-9_]+):\s*'/g;
    let m;
    while ((m = re.exec(str))) keys.push(m[1]);
    return keys;
  }
} catch (e) {
  warn('translation key check failed to run: ' + e.message);
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
section('5a. Overlay/script DOM ordering (structural regression check)');
// ---------------------------------------------------------------------
// Narrow, deliberately non-general check: app.js wires up several things
// (a MutationObserver-based focus-trap system, and plain `if ($('id')) ...`
// guarded event-listener registrations for elements like #emergencyClose)
// synchronously, as part of its own top-level execution. A classic
// non-deferred <script> blocks HTML parsing while it runs, so any
// `class="overlay"` element that appears AFTER the first app.js <script>
// tag in the raw HTML source does not exist in the DOM yet at that point —
// its focus-trap is silently never attached, and any guarded listener
// registration for a button inside it silently no-ops. This bit the app
// for real (#appAlertOverlay, #emergencyOverlay) once already; this check
// exists so it can't happen again unnoticed. Deliberately just two
// substring searches, not an HTML parser — see the file's own guidance.
try {
  const htmlSrc = fs.readFileSync(path.join(DIR, 'index.html'), 'utf8');
  const scriptMatch = htmlSrc.match(/<script[^>]+src=["']app\.js["'][^>]*>/);
  if (!scriptMatch) {
    warn('could not locate <script src="app.js"> in index.html — skipping overlay-ordering check');
  } else {
    const scriptPos = scriptMatch.index;
    const overlayRe = /<div class="overlay" id="([^"]+)"/g;
    const overlaysAfterScript = [];
    let m;
    while ((m = overlayRe.exec(htmlSrc))) {
      if (m.index > scriptPos) overlaysAfterScript.push(m[1]);
    }
    overlaysAfterScript.length
      ? fail('overlay element(s) appear AFTER <script src="app.js"> in index.html, so app.js\'s synchronous init code (focus-trap MutationObserver setup, guarded `if ($(\'id\'))` listener registrations) will silently miss them: ' + overlaysAfterScript.join(', ') + '. Move this markup above the <script> tags.')
      : ok('every .overlay element appears before <script src="app.js"> in index.html');
  }
} catch (e) {
  warn('overlay-ordering check failed to run: ' + e.message);
}

// ---------------------------------------------------------------------
section('6. Onboarding question i18n completeness');
// ---------------------------------------------------------------------
try {
  const ob = fs.readFileSync(path.join(DIR, 'onboarding_and_filter.js'), 'utf8');
  const qBlocks = ob.split(/\{\s*\n\s*id:/).slice(1);
  let missingEs = 0;
  qBlocks.forEach((b, i) => {
    if (/question:/.test(b) && !/questionEs:/.test(b)) { warn('onboarding question #' + (i + 1) + ' has no questionEs'); missingEs++; }
  });
  if (!missingEs) ok('every onboarding question has a Spanish translation');
} catch (e) {
  warn('onboarding i18n check failed to run: ' + e.message);
}

// ---------------------------------------------------------------------
console.log('\n' + '='.repeat(50));
console.log(failures === 0 ? 'RESULT: PASS (' + warnings + ' warning(s))' : 'RESULT: FAIL (' + failures + ' failure(s), ' + warnings + ' warning(s))');
console.log('='.repeat(50));
process.exit(failures === 0 ? 0 : 1);
