# Seattle Resource Finder

A free, offline-first web app that helps people experiencing homelessness in
Seattle and King County find shelter, food, hygiene, medical care, housing
help, and more — plus a private on-device space for their own documents,
contact info, and daily planning.

No accounts. No tracking. No backend server. Everything a person enters
(contact card, document photos, favorites, notes, planner) stays on their
own device in `localStorage` / `IndexedDB` and is never sent anywhere.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The entire app shell — markup, styles, and overlay panels |
| `app.js` | All application logic: rendering, filtering, storage, onboarding flow, planner, vault, etc. |
| `seattle_data.js` | The resource database (see **Data** below) |
| `type_meta.js` | Icon + display label for every resource category |
| `onboarding_and_filter.js` | First-run questionnaire + the logic that personalizes what's shown |
| `manifest.json` | Makes the app installable as a home-screen PWA |
| `sw.js` | Service worker — caches the app so it works with no signal |
| `README.md` | This file |
| `ROADMAP.md` | Larger features that are documented but not yet built |

That's the whole app. No build step, no `node_modules`, no bundler.

---

## Running it

**Option A — just open it (quick check, limited offline support):**
Double-click `index.html`. Everything works except the service worker
(browsers restrict `file://` service workers), so full offline caching
won't kick in until you serve it over HTTP.

**Option B — local server (recommended):**
```bash
cd seattle-resource-finder
python3 -m http.server 8080
# then open http://localhost:8080 on your phone or computer
```
Any static file server works — `npx serve`, VS Code's Live Server, etc.

**Option C — real deployment (production):**
Upload all 8 files as-is to any static host: GitHub Pages, Netlify,
Cloudflare Pages, S3 + CloudFront, or a nonprofit's existing web server.
No server-side code, database, or environment variables are required.

Once a person visits the page while online, the service worker caches the
app shell so it keeps working with no signal — this matters a lot for the
people this app is built for.

---

## Updating the resource data

Nonprofits and outreach teams will want to keep `seattle_data.js` current.
It's a plain JavaScript file with exactly **one** array — `SEATTLE_RESOURCES`.
(A previous version of this file also had a `SEATTLE_WORK` constant.
Nothing in `app.js` ever read it, so it was dead code and has been
removed. Work/day-labor listings live in `SEATTLE_RESOURCES` with
`type:'work'`, exactly like every other category. If you're editing an
older copy of this file and still see `SEATTLE_WORK`, delete it — do not
add new listings there.)

**To add a resource**, copy an existing entry and edit it:

```js
{ id:'r999', type:'meal', name:'Example Community Kitchen',
  hours:'Mon–Fri, 11am–1pm', addr:'123 Example St, Seattle, WA',
  phone:'(206) 555-0100', notes:'Walk-in, no ID needed.',
  free:true, lat:47.6062, lon:-122.3321 }
```

Field notes:
- `id` must be unique across the whole file. Use a new number. Run
  `node validate.js` after editing — it will catch a duplicate id, a bad
  coordinate, a missing required field, or an unknown `type` before you
  ship the change.
- `type` must match one of the keys in `type_meta.js` (see table below) or
  the entry will fall back to a generic pin icon.
- `lat`/`lon` are used for distance sorting and the neighborhood picker. If
  you don't know exact coordinates, use the nearest cross-street or
  neighborhood center — precision to ~3 decimal places is plenty.
- `tags` (optional array) drives personalized boosting — current values in
  use: `dv`, `veteran`, `youth`, `pet`, `native`, `lgbtq`, `family`,
  `woman`, `senior`, `hasKids`. Add a resource to a tag array if it
  specifically serves that population.
- `free:false` shows a "may have a cost" indicator instead of "Free."

**Trust / provenance fields** (optional, additive — see the full schema
comment at the top of `seattle_data.js`):
- `sourceName` / `sourceUrl` — the organization/page you actually checked
  this entry against.
- `verifiedAt` — `'YYYY-MM-DD'`, the date you checked it. **Only set this
  when it's true.** An entry with no `verifiedAt` is automatically shown
  in the app as "not independently verified — call before you go" (via
  `normalizeResource()` in `app.js`) — that is the correct, honest default
  for anything you haven't personally checked. Do not backfill a
  `verifiedAt` date to make a resource look more trustworthy than it is.
- `verificationStatus: 'verified'` — only set this alongside `sourceUrl`;
  `validate.js` will fail the build if a resource claims `'verified'` with
  no source.
- `appointmentRequired` / `walkIn` / `referralRequired` — `true`/`false`,
  or omit if genuinely unknown. This drives the status badge on the card
  ("Appointment required" / "Walk-in" / "Call to confirm" / etc. — see
  `resourceStatusBadge()` in `app.js`). Leave it unset rather than
  guessing; the app shows "Call to confirm" for anything with no signal
  either way, which is the safe default.

**How resource data should be reviewed.** There is no live feed behind
this app — every phone number, address, and hours string is a point-in-
time snapshot someone typed in or copied from a source. A workable
process for a maintaining nonprofit:
1. Pick a batch (start with the `system`-type entries and anything a lot
   of people will call — shelters, food, DV, veterans).
2. Call or check the organization's own site/page for each one.
3. Update the fields that changed, and set `sourceUrl` + `verifiedAt` to
   today's date on anything you just confirmed.
4. Bump `DATA_LAST_REVIEWED` near the top of `app.js`'s `I18N` block (this
   date is what's shown in the app's disclaimer footer as "Data last
   reviewed").
5. Run `node validate.js`, fix anything it flags, then deploy.
6. Repeat on a schedule — monthly for the small number of highest-traffic
   system entries is far more valuable than a rare full pass over all 155.

**Marking something stale or closed.** There's no "closed" flag today —
if an organization has shut down or a program ended, delete the entry (or
change its `notes` to say so clearly and set `free`/`hours` accordingly)
rather than leaving a listing that will send someone to a dead end.

### Current data snapshot

176 resources across 27 categories (up from an initial 155 — see "Data
expansion" below), including 5 day-labor/temp-work listings, each with GPS
coordinates so they sort by distance like every other category. Every
entry was written with real, named Seattle-area organizations where
possible (DESC, Mary's Place, LIHI, Plymouth Housing, Urban Rest Stop,
Chief Seattle Club, YouthCare, SSVF, KCRHA, and others).

**What has actually been independently verified as of 2026-08-30** (phone
and/or hours checked against a current, named source this session): 19 of
176 entries carry `verificationStatus:'verified'` and a `sourceUrl` —
Washington 211, Crisis Connections, KCRHA Coordinated Entry, the Family
Emergency Shelter Access Line, the National Call Center for Homeless
Veterans, the Veterans Crisis Line, VA Puget Sound CHOS, the King County
and national DV hotlines, KCSARC, Washington Teen Link, two Regional
Access Points (Catholic Community Services Seattle, Solid Ground North
Seattle), ROOTS, and two youth shelter lines (The Landing, Nexus). **The
other ~157 entries were not independently re-checked in this pass** and
are correctly shown in the app as "not independently verified" rather
than labeled verified. A real rollout needs someone with local knowledge
(ideally a partner nonprofit or 211 itself) to work through the rest —
see "How resource data should be reviewed" above, and run
`node validate.js` for a prioritized list of which ones matter most.

### Data expansion (2026-08-30)

An uploaded "expansion pack" file (45 candidate records, citing KCRHA's
public page and Washington 211 as sources) was reviewed and selectively
merged in, not pasted in wholesale:

- **Deduplicated by hand.** An automated name/phone match caught most
  overlaps with the existing dataset, but missed several near-duplicates
  with different naming conventions (e.g. "VA Community Resource &
  Referral Center (CRRC)" vs. the file's "Community Resource and Referral
  Center (CRRC)" — same address, different word order). Automated
  deduplication on this kind of data is necessarily approximate; a human
  pass is still required before merging.
- **21 genuinely new entries were added** (new Regional Access Points,
  DV/sexual-assault crisis lines, youth shelter lines, and a handful of
  web-only resources), and **~6 existing entries were updated in place**
  with corrected/expanded phone numbers and source metadata rather than
  duplicated.
- **A real, unresolved conflict was found and preserved rather than
  silently resolved:** Crisis Connections' own site states 211 live
  specialists are available Mon–Fri 9am–5pm; KCRHA's current page states
  Mon–Fri 8am–6pm. The `sys1` entry's `hours` field says so explicitly
  instead of picking one.
- **What was deliberately NOT done:** the source file's own
  `important_limitations` field states it does not contain KCRHA's full
  400+-program Regional Services Database or Washington 211's 17,000+
  statewide listings — those were not fabricated or approximated here
  either. Instead, both are represented as **escalation pointers** (`r153b`
  for the KCRHA database, the 211 entry's notes for WA 211's full
  directory) rather than as claims that this app contains them.

### KCRHA / 211 relationship

This app's curated dataset is a small, hand-maintained subset. KCRHA's own
Regional Services Database and Washington 211's directory are both much
larger and more current than anything a static offline app can keep in
sync with by hand. Treat this app as a fast, offline-first front door —
211 and the KCRHA database are the broader system behind it, not
competitors to it. See "What this app does NOT guarantee" below.

| Category | Count | | Category | Count |
|---|---|---|---|---|
| Shelter | 23 | | Recovery Support | 10 |
| Day Center | 20 | | Housing Navigation | 16 |
| System Entry Point | 19 | | Case Mgmt / Outreach | 6 |
| Free Meal | 10 | | Day Labor / Work | 5 |
| Food Bank | 9 | | Safe Parking / Vehicle | 5 |
| Shower / Laundry | 7 | | Clothing | 4 |
| Medical Clinic | 7 | | Legal Aid | 3 |
| ID / Documents | 3 | | Library Services | 3 |
| Storage Lockers | 3 | | Mail Service | 3 |
| Transportation Help | 3 | | Pet-Friendly | 3 |
| Tiny House Village | 3 | | Benefits Enrollment | 2 |
| Charging / Wi-Fi | 2 | | Mental Health | 2 |
| Warming / Cooling | 2 | | Water | 2 |
| Dental Clinic | 1 | | **Total** | **176** |

---

## What this app does NOT guarantee

Read this before describing the app to anyone, and keep this list in mind
when writing any new UI copy:

- **It does not know real-time availability.** No shelter bed count, no
  "open right now" signal. "Usually open — published hours" means exactly
  that: the hours are what's published, not a live status. See
  `resourceStatusBadge()` for the exact vocabulary used and why.
- **It is not a complete list of every service in King County.** It's a
  curated offline guide. 211 (Washington 211 / Crisis Connections) covers
  the full regional service network and is always presented as the
  fallback when this app's dataset doesn't have a good match — an empty
  search result is worded to say "no matches in this offline guide," never
  "no help exists."
- **Coordinated Entry does not guarantee housing**, and completing an
  assessment does not guarantee a referral or placement — this app's
  Coordinated Entry entry uses KCRHA's own current wording on that point.
- **"Nearest" is not "best," "open," or "available."** Distance is shown
  as straight-line miles, explicitly labeled as such — never a walking-
  time or transit-time estimate, which this app has no data source for.
- **Local storage is not encrypted secure storage.** Contact info, vault
  photos, notes, and onboarding answers stay on the device and are never
  uploaded — but anyone with access to the unlocked device/browser could
  potentially see them. This app does not implement its own encryption on
  top of the browser's storage, and does not claim to.
- **The onboarding profile is not proof of eligibility for anything.** It
  only reorders what's shown; every organization contacted will do its
  own eligibility screening.

---

## Testing & validation

Run before deploying any change:

```bash
node validate.js
```

This checks (zero dependencies, plain Node): every JS file parses; no
duplicate resource ids; every resource has its required fields and a
coordinate inside the greater Seattle/King County area; every resource
`type` is defined in `type_meta.js`; every resource marked `'verified'`
has a `sourceUrl`; the English and Spanish translation dictionaries have
the same keys; every `t('key')` call in `app.js` resolves to a real key;
and every onboarding question has a Spanish translation. It exits non-zero
on any FAIL, so it can be wired into a CI step or a pre-deploy hook.

It intentionally does **not** try to verify real-world facts (whether a
phone number still rings) — that needs a human, not a script. See
"How resource data should be reviewed" above for that process.

**What this does not replace:** an actual test on a real low-end Android
phone and a real screen reader (this repository has no headless-browser
tooling available in the environment it was last edited in, so DOM/UI
behavior was reviewed by code inspection and manual ID cross-checking
against `index.html`, not by driving a real or headless browser). Before
a production rollout, test manually: first launch, onboarding (both
completed and skipped), English and Spanish, search, every category tab
including Work, GPS granted/denied, neighborhood picker, offline mode
(load once online, then turn off networking and reload), a service-worker
update, favorites, visited, the planner, an appointment with calendar
export, the document vault, and a screen reader pass (VoiceOver or
TalkBack) through onboarding and a resource card.

---

## Deployment

This is a static site — any static host works (GitHub Pages, Netlify,
Cloudflare Pages, a plain nginx directory). There is no build step and no
environment configuration.

**Cache invalidation:** `sw.js` has a `CACHE` version string
(`srf-vN`). Bump it whenever you change any file listed in `ASSETS` inside
`sw.js` — this is still a manual step; see the comment in `sw.js` for why
(a fully automatic content-hash cache-buster would need a build step,
which this project deliberately doesn't have). Returning users get an
in-app "Update available — Refresh now?" prompt instead of the update
applying silently underneath an open tab.

---



## Features

**Personalized, not gatekept.** A short optional onboarding (age group,
gender, kids, DV situation, veteran status, vehicle living, pets, Native
identity) reorders results to surface what's most relevant first — it
never hides the general resource list, and can be skipped or redone at
any time via the **Me** button.

**Always-visible crisis bar + Emergency (SOS) mode.** 988, 211, the DV
hotline, and the veterans line are one tap away from every screen,
regardless of onboarding status. The red **SOS** button opens a
zero-network, zero-image, large-tap-target screen with just those five
numbers — built for the specific case of very low battery or very little
time.

**Cold/Heat mode (manually set — not live weather).** The **Cold/Heat**
button (formerly labeled "Weather") lets a person manually reprioritize
warming or cooling centers to the top of the list. It is explicitly
labeled as manual in the UI and in this doc: this app has no live weather
data source, and does not claim to. See "What this app does NOT
guarantee" below.

**Works with no signal.** The service worker caches the whole app after
first load. The resource list, filters, search, planner, vault, and
contact card all work completely offline. Only the live weather banner
and the optional map/geolocation features need a connection.

**Spanish toggle.** Full UI translation via the **ES** button, top right.

**Distance sorting, including a dedicated Work tab.** Every category —
including day-labor and temp work listings — sorts by distance. Uses GPS
when granted (tap **Area → Use GPS**), or a manual neighborhood picker
when it isn't — many users won't or can't grant location access, so this
always has a non-GPS path.

**Local, private notes.** Anyone can jot a note on any resource ("line was
long Tuesday") that's saved only on their device.

**One-tap Call / Map / Share.** Every card with a phone number or address
gets working `tel:` and map links; every card can be shared via SMS.

**Favorites & "I was here today."** Heart a resource to save it to a
dedicated Favorites view; mark a visit to keep a same-day private log.

**My Contact.** A permanent name/phone/email/backup-contact card a person
can keep even as their living situation changes — useful to show a case
worker or give out for callbacks.

**My Vault.** Photos of ID, benefit letters, or other documents, stored in
IndexedDB on-device only. Never uploaded anywhere. Camera capture works
directly from the panel.

**Weekly Planner & Goals.** A daily money goal and a simple needs
checklist (shower, laundry, meal, phone charge, documents, work, housing
paperwork). Today's plan surfaces on the home screen automatically.

**My Schedule — real dated appointments, calendar sync, and reminders.**
Beyond the simple daily goals above, **More → My Schedule** is a full
day/week planner for actual timed appointments (a specific shower slot, a
clinic visit, a day-labor check-in time). Every resource card also has a
one-tap **"📅 Schedule"** button that pre-fills a new appointment with
that resource's name and address, so planning a visit takes two taps from
any listing.

Each appointment supports:
- A specific date, time, duration, location, and free-text notes
- A reminder lead time (15 min / 30 min / 1 hr / 2 hr / 1 day before, or none)
- **Export as `.ics`** — a standard calendar file with a real alarm
  (`VALARM`) baked in, so Apple Calendar, Google Calendar, and Outlook
  all show a native notification at the chosen lead time once imported
- **One-tap "Add to Google Calendar"** — opens Google Calendar pre-filled
  with the event, no login flow or account linking required in this app
- **Best-effort in-app reminder** — if notification permission is
  granted, the app will also try to fire a browser notification at the
  right time while the app/tab stays open, as a backup to the calendar
  alarm

See **Known limitations (calendar & alarms)** below for exactly what this
can and can't guarantee — it's important to understand before relying on
it for something time-sensitive.

**Printable / screenshot list.** The **More → Print** option produces a
clean, high-contrast, black-on-white printable summary of the currently
filtered list — useful for outreach workers printing handouts, or for a
person without a working phone to carry a paper copy.

**Skills.** Five short, plain-language offline lessons: interview basics,
budgeting with irregular income, getting the most from a basic phone,
replacing a lost ID, and getting healthcare without insurance.

**Progress & Missions.** A small, practical progression system that
rewards real actions someone actually takes in the app — saving a
resource, adding a note, using GPS, scheduling and completing an
appointment, exporting to a calendar, planning today's needs — with a
little XP and a level (Scout through Anchor). It's meant to make the app
feel worth returning to, not to gamify hardship. A few things worth
knowing about how it works:

- **Nothing important is ever locked behind it.** Search, filters,
  favorites, nearby sorting, basic GPS, the map/list views, scheduling,
  reminders, work listings, calendar export, and every emergency/crisis
  resource are available to every person from the very first time they
  open the app, regardless of level. The four capabilities below are
  genuinely new things that appear as someone reaches a level — they add
  to the baseline app, they never take anything away or gate it.
- **It only counts real actions, not taps.** Repeatedly favoriting and
  un-favoriting the same resource, or checking a completed appointment
  box on and off, doesn't earn XP more than once for the same real-world
  action — there's a built-in guard against that. Just having a
  suggestion appear on screen never earns anything; only actually acting
  on it does.
- **It's entirely local.** All progress (`srf_progress` in
  `localStorage`) stays on the person's own device, same as everything
  else in this app — no accounts, no server, no tracking.
- **Reach it from More → Missions & Progress.** That panel shows active
  missions (short, practical suggestions like "Find one meal" or
  "Schedule a visit"), what's been completed, and what each level
  actually unlocks — no hidden mechanics.

**What actually unlocks, by level:**

- **Level 2 — Smart Day Plan.** Check a need in the daily planner (meal,
  shower, laundry, work, documents, or housing paperwork) and a few
  nearby matching resources appear right there, inline, in both the Home
  screen's Today card and the Planner overlay. Uses GPS distance sorting
  when location is available, and falls back to a stable default order
  when it isn't — never fails, just doesn't sort by distance. Two need
  types (phone charge, and the free-text "other") intentionally show no
  suggestions, since there's no resource category that honestly matches
  either one.
- **Level 3 — Next Best Action.** A single, plainly-worded suggestion on
  the Home screen — something like "You planned a meal today. Here's the
  closest matching option." — built only from today's planner needs, a
  matching resource, and GPS distance when available. It deliberately
  does not guess at whether somewhere is currently open, how long it
  would take to get there, or how urgent anything is, since the app
  doesn't have reliable data for any of that yet (see *Known
  limitations* below).
- **Level 4 — Routine Builder & Worked Before.** Routine Builder adds a
  "copy this day's plan to another day" option inside the Planner
  overlay — handy for repeating a Tuesday routine without re-entering it
  every week. It asks before overwriting a day that already has a plan,
  and can be cancelled with no changes made. Worked Before adds a small
  "Saved" and/or "Visited before" label to resource cards, built only
  from the same favorites and check-in data used elsewhere in the app —
  no new history is tracked, and no claim about frequency or reliability
  is ever made.

---

## Known limitations (calendar & alarms)

Read this before telling someone "the app will remind you" — it's
important to be accurate about what's actually guaranteed versus
best-effort, especially for something like making it to a shelter bed
cutoff or a medical appointment.

- **This is a web app with no background process of its own.** It cannot
  set a true native phone alarm the way the Clock app can. What it *can*
  do is hand a properly-formed reminder off to something that can:
  either the phone's own calendar app (via `.ics` + `VALARM`, which is a
  real, standard alarm the calendar app itself will fire) or Google
  Calendar (via the one-tap add link).
- **The in-app "best-effort" notification only fires if the browser tab
  or installed PWA is still open** (or, on some Android/Chrome setups,
  briefly after closing). If the person closes the app or the phone
  restarts, that specific reminder path is gone. **The `.ics`/Google
  Calendar reminder is the reliable path** — always recommend exporting
  or adding to Google Calendar for anything that actually matters, not
  just relying on the in-app notification.
- **The Google Calendar one-tap link needs an internet connection at the
  moment it's tapped**, and the person needs to be signed into a Google
  account in that browser. It will not work fully offline. The `.ics`
  export, by contrast, works completely offline — it's generated on-
  device and just needs the phone's calendar app to open the file.
- **Google Calendar's own reminder setting, not this app's chosen lead
  time, governs the alarm once an event is added via the Google Calendar
  link.** The `.ics` file's `VALARM` is respected by most calendar apps
  on import, but Google Calendar's web "quick add" flow uses its own
  default reminder unless the person adjusts it after adding — this is a
  constraint of Google's template-link API, not something this app can
  control.
- **No true two-way sync.** Editing or deleting an appointment inside
  this app does not reach back into a calendar app or Google Calendar
  once it's been exported/added there — they become independent copies.
  Real two-way sync would require a backend with OAuth (see
  `ROADMAP.md`).
- **Timezone handling assumes the phone's local timezone at the moment
  the appointment is created is the correct timezone for the
  appointment.** This is correct for the overwhelmingly common case
  (scheduling a Seattle appointment while physically in Seattle). If
  someone is traveling and scheduling an appointment for a different
  timezone, the exported time could be off — a rare edge case, but worth
  knowing.

---

## Deliberately deferred / not implemented

These were considered and explicitly left out of this version, on
purpose — not forgotten. See `ROADMAP.md` for the reasoning behind each
and what would need to be true before revisiting them.

- **Open Now** — showing which resources are currently open. The
  `hours` field in the data is free text, not structured, and about a
  fifth of listings explicitly say "call ahead" rather than list firm
  hours. Deferred until that data is normalized into something
  trustworthy enough to act on.
- **Leave By** — a "leave now to arrive on time" prompt. Would require a
  real travel-time estimate; straight-line distance isn't a reliable
  stand-in for walking or transit time in a hilly, water-crossed city.
- **Work Route** — prioritizing day-labor opportunities by location and
  timing. Depends on the same missing travel-time data as Leave By.
- **The full, multi-signal Next Best Action** — a richer version
  combining hours, travel time, urgency, and more. What's shipped is
  deliberately narrow (today's planner needs + a matching resource + GPS
  distance only) because the additional signals aren't reliable yet.
- **Personal Offline Pack** — prioritizing which resources are available
  offline. Not needed: the service worker already caches the entire
  resource dataset for every user, so there's nothing to selectively
  prioritize.
- **A "resource viewed" progress event** — there's no separate "view
  details" step in this app (the card is the full detail view), so
  there's no distinct action to attach this to without rewarding routine
  scrolling and searching.
- **A "weekly plan created" progress event** — the planner has no
  distinct "I finished planning this week" action today; only per-day
  goals and needs.
- **A separate "trusted place" concept** — favoriting a resource already
  is that gesture. A second system for the same idea would mean two
  toggles for one real action.

---

## Accessibility

- Minimum 44×44px touch targets throughout
- Full keyboard focus states (`:focus-visible`)
- Respects `prefers-reduced-motion`
- High-contrast dark theme designed to be readable in direct sunlight and
  to conserve battery on OLED screens
- No feature requires reading small print to operate — every primary
  action (Call, Map, Add) is a single large button with an icon and label

---

## Privacy & data handling

- No accounts, no login, no analytics, no third-party trackers
- All personal data (contact card, vault photos, notes, favorites,
  planner, visited history, onboarding profile) is stored only in the
  browser's `localStorage` and `IndexedDB` on the person's own device
- Nothing is transmitted to any server operated by this project
- The only outbound network calls this app makes on its own are: (1)
  loading the app's own files, and (2) standard `tel:`, `sms:`, and map
  links the person explicitly taps. There is no weather API call — the
  Cold/Heat mode is a manual, on-device toggle only (an earlier version of
  this document incorrectly listed "an optional weather lookup" as a
  network call; that was never accurate and has been corrected here).
- Clearing browser data/site data on the device will permanently erase
  everything stored by this app — there is no cloud backup by design

---

## Browser support

Built with vanilla JavaScript (ES5-leaning syntax, no build step) for
maximum compatibility with older phones and budget Android devices, which
are common among the app's target users. Tested logic patterns work in
any modern browser from the last ~6 years. `IndexedDB` (Vault) and
`Notification` (Planner reminders) degrade gracefully — the app detects
their absence and simply hides or disables those specific features
without breaking anything else.

---

## License / attribution

Resource data was compiled from publicly available information about real
Seattle-area service providers. Organization names belong to their
respective organizations. This project is not affiliated with or endorsed
by any organization listed in the data unless otherwise noted.

See `ROADMAP.md` for planned features and architectural notes for anyone
extending this into a multi-city or multi-organization platform.
