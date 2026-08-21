# Roadmap

This app is intentionally a static, zero-backend, single-purpose tool —
that's a feature, not a limitation, for the person using it on the street
with a cracked phone and patchy signal. But several real needs from
outreach workers, nonprofit directors, and city/county partners can't be
solved without *some* server-side component. This document separates
"things worth building now" from "things that need infrastructure," with
enough detail that someone else could pick this up.

Everything here is written from four perspectives, per the brief:
- **Outreach worker** — what would save time in the field?
- **Nonprofit director** — what would justify paying for this?
- **City/county government** — what would justify adopting this platform?
- **Five-years-from-now maintainer** — what architecture will I wish existed?

---

## Tier 1 — High value, low complexity (do these next)

### 1.1 Data versioning + "last verified" timestamps
**Who wants this:** outreach workers, nonprofit directors, the person using the app.
Add a `lastVerified: '2026-01-15'` field to every resource and surface it
in the card ("Checked Jan 15, 2026"). Add a top-level `DATA_VERSION` and
`DATA_UPDATED_AT` constant in `seattle_data.js`. Trivial to implement —
pure data-shape change, no new infrastructure — but it meaningfully
increases trust and gives maintainers a way to flag stale entries.

### 1.2 CSV/spreadsheet round-trip for data editing
**Who wants this:** nonprofit staff who don't want to hand-edit JS.
Ship a small Node or Python script (`tools/csv_to_js.py`) that converts a
spreadsheet (Google Sheets export → CSV) into `seattle_data.js`, and the
reverse. This lets a non-technical staffer maintain the source of truth in
a spreadsheet while the app keeps its zero-backend, static-file nature.
Low complexity: it's a data transform, not a service.

### 1.3 "Report an issue" mailto/SMS link per resource
**Who wants this:** everyone. Right now the only way to flag "this shelter
closed" is informal. Add a small "Something wrong?" link on each card that
opens a pre-filled `mailto:` or `sms:` to a maintainer inbox with the
resource ID and name included. No backend required — just better use of
what the browser already provides. Ten-minute addition.

### 1.4 Structured print/export (PDF-ready, not just print CSS)
**Who wants this:** outreach teams making paper handouts for people
without working phones.
Current `window.print()` support is real but browser-dependent. A cleaner
version would generate a single-page, pre-formatted PDF client-side using
a small library, so outreach staff get consistent printed output
regardless of what printer/browser they use. Moderate complexity; can
still be done with zero backend (a bundled JS PDF library).

---

## Shipped: practical progression system

A local-only, utility-first progression system now ships in `app.js`
(`srf_progress` in `localStorage`). It rewards 10 approved real-world
actions with small XP amounts, tracks a 7-level ladder (Scout through
Anchor), a few short practical missions, and soft per-category "stability"
counters (food, hygiene, shelter, health, work, planning, transportation).
Reachable via **More → Missions & Progress**. Two things worth recording
for anyone touching this later:

**Two action types were deliberately never implemented, on purpose —
don't add them back via a heuristic guess:**

- `resource_viewed` — the app has no distinct "view details" interaction
  separate from the resource card itself (the card *is* the full detail
  view; there's no expand/detail-modal step to hook). Wiring this to
  `render()` firing would have violated the system's own anti-farm rule,
  since `render()` runs on every filter change and search keystroke. If a
  genuine "view details" UI is ever added, this action type can be wired
  to it then — not before.
- `weekly_plan_created` — the planner (`srf_planner`) is a per-day
  goal/needs object with no "I finished planning this week" UI action.
  Rather than guess at a heuristic (e.g. "all 7 days have a need set"),
  this was left out entirely. If a real "Save Week" action is ever added
  to the Planner overlay, this action type can be wired to that button
  directly.

**`trusted_place_added` was considered and rejected**, not deferred —
favoriting a resource (`resource_saved`, 3 XP) already is the "I want to
keep track of this place" gesture. A second, separate "trusted" concept
would have meant two toggles for one real action, which is exactly the
kind of duplicate system this app avoids everywhere else (see the
Favorites, Planner, and Schedule systems, none of which have a shadow
twin either).

If any of the above changes — a real view-details UI ships, or a Save
Week action gets built — revisit this section before wiring new action
types, rather than approximating the missing trigger with a guess.

---

## Shipped: four level-gated utility capabilities

Built on top of the progression system above, gated by level (not by the
earlier five-letter tier system, which was replaced — see below):

- **Level 2 — Smart Day Plan** (`suggestResourcesForNeed()`). Surfaces
  nearby matching resources for a checked planner need, inside both
  `renderTodayPlan()` (Home) and `renderPlanner()` (the Planner overlay).
  Built entirely from data that already existed for other purposes:
  `NEED_KEY_TO_STABILITY` and `TYPE_TO_STABILITY` (originally added for
  the progression system's stability tracking) turned out to share a
  vocabulary, so bridging them was the whole implementation — no new
  data model was needed. Acting on a suggestion (tapping Call or Map)
  reuses the existing `plan_created` action type with `feature`,
  `category`, `needKey`, and `resourceId` metadata — not a new action
  type. Two need keys (`charge`, `other`) correctly show no suggestions,
  since neither maps to a real resource category.
- **Level 3 — Narrow Next Best Action** (`getNextBestAction()`). A
  single, deterministic suggestion built only from today's unmet planner
  needs (in a fixed, declared order — never object-key order, which
  isn't guaranteed stable) plus `suggestResourcesForNeed()` plus GPS
  distance. Renders the suggested resource using the *exact* same
  `renderCard()` function every other resource card uses, via a newly
  extracted `bindCardActionHandlers(container)` helper — so its Call,
  Map, Favorite, Visit, Schedule, and Note buttons are the real,
  unmodified production buttons, not a second implementation. This means
  following the suggestion earns XP through the already-existing
  `resource_saved` / `appointment_created` / `service_checked_in`
  pathways — there is no "recommendation used" event of any kind.
- **Level 4 — Routine Builder** (`copyPlanToDay()`). Copies one day's
  goal and needs onto another day within the existing `srf_planner`
  schema — no second planner, no new storage key. Confirms before
  overwriting a day that already has data, and the confirmation can be
  cancelled with nothing changed. Reuses `plan_created` with
  `feature: 'routine_copy'` metadata.
- **Level 4 — Worked Before**. A passive `renderCard()` addition showing
  "Saved" and/or "Visited before" based only on the existing
  `srf_favorites` / `srf_visited` data — no new state, no visit history,
  no frequency or reliability claim, and no progression event of any
  kind (this one is intentionally silent).

**The earlier five-letter tier placeholder system (`UNLOCK_TIERS`,
`TIER_ORDER`, tier keys `A`–`E`) has been fully removed and replaced**
with a direct numeric-level gate (`FEATURE_UNLOCK_LEVEL`,
`isFeatureUnlocked()`). The placeholder system mapped mostly to
non-existent or already-universal features (see the earlier audit in
this file); the real four capabilities above map cleanly onto specific
levels instead. Tier A's always-unlocked list (`ALWAYS_UNLOCKED`) is
unchanged and still hard-guarantees the "never gate" list regardless of
level.

**Additional capabilities considered and explicitly deferred in this
pass** (see the README's "Deliberately deferred" section for the
person-facing version of this list):

- **Open Now** — blocked on `hours` being free text rather than
  structured data (roughly a fifth of listings explicitly say "call
  ahead" instead of giving firm hours).
- **Leave By** / **Work Route** — both need a real travel-time source;
  straight-line GPS distance was judged too inaccurate to present as a
  real ETA in a hilly, water-crossed city with significant transit-only
  routes.
- **The full, multi-signal Next Best Action** — deferred until Open Now
  and a real travel-time source both exist; the shipped version is
  deliberately the narrow 3-signal subset only.
- **Personal Offline Pack** — not a real gap: the service worker already
  precaches the entire `seattle_data.js` dataset for every user, so
  there is nothing to selectively prioritize.

---

## Tier 2 — Needs light infrastructure (a small backend, but still simple)

### 2.1 Admin CMS for data updates
**Who wants this:** nonprofit directors, city/county partners.
**Why it matters for monetization:** this is the single highest-leverage
feature for turning this from "a nice free app" into "a platform an
organization would pay a subscription for." Right now every data update
requires editing a JS file and redeploying. A real admin panel would let
verified staff at partner organizations update their own listings (hours,
capacity, temporary closures) without touching code.

**Suggested architecture:**
- Keep the public app exactly as-is: static files, no backend dependency
  for the end user. This is non-negotiable — the person on the street
  should never depend on a database being up.
- Add a lightweight backend (e.g. a small Postgres + REST API, or even a
  headless CMS like Directus/Strapi) that *generates* `seattle_data.js`
  as a build artifact and pushes it to the static host on save.
- Authentication scoped per-organization (an admin at DESC can only edit
  DESC's listings, not Plymouth Housing's) — this is both a security
  requirement and a natural per-organization pricing unit.
- Keep a public, unauthenticated read-only API alongside the generated
  static file, so other developers/cities can build on the same data
  (see 3.2, Open Data API).

**This is the natural home for a paid tier**: free public app stays free
forever; organizations pay for verified "manage your own listing" access,
priority placement flags (e.g. "currently has beds" real-time status),
and usage analytics about their own listing (see 2.2).

### 2.2 Aggregate, privacy-safe analytics for funders
**Who wants this:** nonprofit directors need to show funders impact;
cities need utilization data to plan capacity.
**Constraint:** must not compromise the zero-tracking promise made to
end users in this README. The right design is *aggregate-only,
client-side-batched, no individual tracking*:
- The app can locally count "resource card viewed," "call tapped,"
  "directions tapped" events per session, batch them, and — only if a
  person has NOT opted out and only in aggregate — send anonymized counts
  like `{ resourceId: 'r19', event: 'call', date: '2026-01-15' }` with no
  device ID, IP logging disabled at the edge, and no cross-session
  correlation possible.
- Dashboard for orgs: "Your shelter listing was viewed 340 times and
  called 28 times this week." This is genuinely valuable for grant
  reporting and is a defensible reason for a paid tier, without violating
  the privacy commitments made to the vulnerable end users.
- Ship this as strictly opt-in with a clear one-time prompt, defaulting
  to OFF, not opt-out.

### 2.3 Real-time bed/capacity status
**Who wants this:** outreach workers and case managers, most of all.
The single most-requested real feature in homelessness-services apps is
usually "does this shelter actually have space tonight," which no static
dataset can answer. This requires either (a) manual staff check-in via
the Tier 2.1 CMS ("mark full / mark open" toggle, timestamped), or (b)
integration with each shelter's existing bed-management system if one
exists (many use HMIS — Homeless Management Information System). Start
with (a): it's much lower complexity and still delivers real value.

### 2.4 Multi-language beyond English/Spanish
**Who wants this:** the app's own users — Seattle has significant
Vietnamese, Somali, Amharic, Tigrinya, Chinese, and Ukrainian-speaking
homeless and at-risk populations.
Current Spanish toggle is hardcoded string pairs in `app.js`. Refactor
into a proper i18n structure (`/locales/en.json`, `/locales/es.json`,
etc.) so adding a language is a translation task, not a code change. Then
add languages based on what King County's actual demographic data shows
is highest-need. This is moderate effort now, but avoiding it gets
*more* expensive later as more strings accumulate.

---

## Tier 3 — Platform-level investment (multi-city, real infrastructure)

### 3.1 Multi-city / multi-region configuration
**Who wants this:** any city or county government evaluating this as a
platform, not just a Seattle app.
Right now "Seattle" is hardcoded throughout (`seattle_data.js`, strings
like "King County," lat/lon centered on Seattle, the neighborhood picker
list). To become a genuine multi-city platform:
- Extract a `city.config.js` per deployment: name, default map center,
  neighborhood list, crisis-line phone numbers (these differ by state —
  988 is national but DV/veteran regional lines are not), and a pointer
  to that city's own `*_data.js` file.
  - This is the architecture change a five-years-from-now maintainer will
    be grateful for — the current single-city hardcoding is fine for a v1
    but is real technical debt for anything beyond one city.
- This is also the natural foundation for a government licensing model:
  a county pays to have their own branded, config-driven instance
  maintained and hosted, while the core app logic (this codebase) stays
  a shared, actively-maintained open-source core.

### 3.2 Open Data API
**Who wants this:** other developers, 211 systems, researchers, city open
data portals.
Once data lives in a real backend (Tier 2.1), expose a simple public
read-only REST/GraphQL API (`GET /api/resources?type=shelter&near=lat,lon`).
This turns the project from "an app" into "infrastructure other apps and
211 systems can build on," which is a much stronger position for
long-term institutional adoption and funding.

### 3.3 Native app wrapper (iOS/Android app store presence)
**Who wants this:** users who don't find PWAs intuitively installable,
and organizations that want App Store/Play Store legitimacy for handouts.
The current PWA (manifest.json + service worker) already gets most of the
way there. Wrapping with Capacitor or a similar tool would get real app
store listings with minimal code change, since the core app is already a
well-behaved installable PWA. Low-to-moderate effort *given* the current
architecture — this is a payoff from having built it PWA-first.

### 3.4 Offline map tiles
**Who wants this:** users without any connectivity who still want a
visual map, not just a list with distances.
Bundle a compressed offline tile set (e.g. via MapLibre + a pre-baked
`.pmtiles` file for the Seattle metro area) so the map view works fully
offline, not just the list view. This is a meaningful storage tradeoff
(tens of MB) and should be an optional download the user opts into, not
a forced part of the initial app load — respects that many users have
limited device storage and are on metered/limited data plans.

### 3.5 Verified-data pipeline with organization sign-off
**Who wants this:** nonprofit directors and city partners who need to
trust the data enough to hand it to their own staff.
Beyond the admin CMS (2.1), a "verified" workflow: each organization gets
a dashboard showing their own listings, with a one-click "confirm this is
still accurate" action that timestamps and displays a trust badge
("Verified by DESC staff, Jan 2026") on the public listing. This is the
kind of institutional trust signal that turns "a scraped directory" into
"a platform a county human services department is willing to officially
recommend."

---

## Explicitly out of scope / anti-goals

Worth stating clearly so future contributors don't accidentally erode
what makes this app trustworthy to a vulnerable population:

- **No user accounts or login for the public-facing app**, ever — even if
  the admin CMS (Tier 2.1) requires org-staff login, the end-user
  experience must remain anonymous and account-free.
- **No behavioral tracking or ad tech**, even "anonymized" versions,
  beyond the strictly opt-in aggregate analytics described in 2.2.
- **No monetization that touches the end-user experience** — no ads, no
  "sponsored" resource placement above genuinely-better-matching results,
  no upsells. Monetization lives entirely on the organization/government
  side (data management tools, analytics, hosting/support contracts).
- **Never make the core app depend on a live backend to function.** Even
  as Tier 2/3 features are added, the resource list and every safety-
  critical feature (crisis bar, calling, directions) must keep working
  from a fully static, offline-cached bundle.
