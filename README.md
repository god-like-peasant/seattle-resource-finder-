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
It's a plain JavaScript file with two arrays:

- `SEATTLE_RESOURCES` — every shelter, meal, clinic, etc.
- `SEATTLE_WORK` — day-labor and temp work leads

**To add a resource**, copy an existing entry and edit it:

```js
{ id:'r999', type:'meal', name:'Example Community Kitchen',
  hours:'Mon–Fri, 11am–1pm', addr:'123 Example St, Seattle, WA',
  phone:'(206) 555-0100', notes:'Walk-in, no ID needed.',
  free:true, lat:47.6062, lon:-122.3321 }
```

Field notes:
- `id` must be unique across the whole file. Use a new number.
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

After editing, open the app and confirm the entry appears under the right
category filter before publishing.

### Current data snapshot

155 resources across 27 categories, including 5 day-labor/temp-work
listings, each with GPS coordinates so they sort by distance like every
other category. Every entry was
written with real, named Seattle-area organizations where possible (DESC,
Mary's Place, LIHI, Plymouth Housing, Urban Rest Stop, Chief Seattle Club,
YouthCare, SSVF, and others). **Hours, phone numbers, and program rules
change** — this data should be reviewed and refreshed regularly by someone
with local knowledge, not treated as permanently accurate. The app itself
reminds users to call or check 211 before traveling to any listing.

| Category | Count | | Category | Count |
|---|---|---|---|---|
| Shelter | 21 | | Recovery Support | 8 |
| Day Center | 18 | | Housing Navigation | 13 |
| Free Meal | 10 | | Case Mgmt / Outreach | 5 |
| Food Bank | 9 | | Safe Parking / Vehicle | 5 |
| System Entry Point | 9 | | Day Labor / Work | 5 |
| Shower / Laundry | 7 | | Clothing | 4 |
| Medical Clinic | 6 | | Legal Aid | 3 |
| ID / Documents | 3 | | Library Services | 3 |
| Storage Lockers | 3 | | Mail Service | 3 |
| Transportation Help | 3 | | Pet-Friendly | 3 |
| Tiny House Village | 3 | | Benefits Enrollment | 2 |
| Charging / Wi-Fi | 2 | | Mental Health | 2 |
| Warming / Cooling | 2 | | Water | 2 |
| Dental Clinic | 1 | | | |

---

## Features

**Personalized, not gatekept.** A short optional onboarding (age group,
gender, kids, DV situation, veteran status, vehicle living, pets, Native
identity) reorders results to surface what's most relevant first — it
never hides the general resource list, and can be skipped or redone at
any time via the **Me** button.

**Always-visible crisis bar.** 988, 211, the DV hotline, and the veterans
line are one tap away from every screen, regardless of onboarding status.

**Severe weather mode.** The **Weather** button reprioritizes warming or
cooling centers to the top of the list during cold snaps or heat waves.

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
  loading the app's own files, (2) an optional weather lookup, and (3)
  standard `tel:`, `sms:`, and map links the person explicitly taps
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
