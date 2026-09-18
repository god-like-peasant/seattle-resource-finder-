(function () {
  'use strict';

  var I18N = {
    en: {
      appTitle: 'Seattle Resource Finder',
      appSub: 'Shelters · Meals · Showers · Medical · Housing',
      searchPh: 'Search… (e.g. "food tonight", "shelter with dog")', me: 'Me', area: 'Area', list: 'List', clear: 'Clear',
      skip: 'Skip', cont: 'Continue', finish: 'Finish', cancel: 'Cancel',
      useGps: 'Use GPS', close: 'Close', copy: 'Copy', save: 'Save',
      offline: 'You are offline — showing saved data',
      callFirst: 'Hours and availability can change — call to confirm before you go',
      disclaimer: 'This is a curated offline guide, not a complete list of every service. Hours and beds change and are not live. Always call before you go. Dial <strong>211</strong> for live help with anything not listed here.',
      matched: 'resources matched to you', resources: 'resources',
      startHere: 'Start here — critical numbers', forYou: 'Resources for you',
      noMatch: 'No matches in this offline guide — that does not mean no help exists.',
      weatherCold: 'Cold mode ON (set by you, not live weather) — warming centers shown first',
      weatherHeat: 'Heat mode ON (set by you, not live weather) — cooling centers shown first',
      weatherBtnOff: 'Cold/Heat', weatherBtnCold: 'Cold mode', weatherBtnHeat: 'Heat mode',
      weatherBtnTitle: 'Manually prioritize warming or cooling centers — this is not live weather data',
      nextSteps: 'Your best next steps',
      hoodTitle: 'Where are you?', hoodHint: 'Rough area helps sort nearby resources. This is approximate, not exact.',
      cheatTitle: 'My list', notePrivate: 'Private note on this device only.',
      crisis988: '988 Crisis', crisis211: '211 Help', crisisDV: 'DV Hotline', crisisVet: 'Vets 877',
      navAll: 'All', navShelter: 'Shelter', navFood: 'Food', navHygiene: 'Hygiene', navHealth: 'Health', navWork: 'Work',
      favLabel: 'Favorite', visitLabel: 'I was here today', callLabel: 'Call', mapLabel: 'Map', shareLabel: 'Share',
      noteLabel: 'Note', scheduleLabel: 'Schedule a visit', removeLabel: 'Remove', toggleLangLabel: 'Toggle language',
      moreOptionsLabel: 'More options', markCompleteLabel: 'Mark appointment complete', noFavorites: 'No favorites yet. Tap the heart on any resource to save it here.',
      gpsUnavailable: 'GPS is not available on this device/browser. You can still pick a neighborhood instead.',
      gpsFailed: 'Could not get your location. Pick a neighborhood instead — it still helps sort nearby resources.',
      copied: 'Copied to your clipboard.',
      copyManually: 'Could not copy automatically. Please select and copy the text manually.',
      confirmOverwriteDay: 'already has a plan. Overwrite it with',
      plansQ: '\u2019s plan?',
      cancelledNoChange: 'Cancelled — nothing was changed.',
      copiedTo: 'Copied to',
      nothingToCopy: 'Nothing to copy.',
      couldNotCopyDay: 'Could not copy.',
      notifNotSupported: 'Reminders are not supported in this browser.',
      notifOff: 'Notifications are off. Check the Home screen for today\u2019s plan instead.',
      notifBlocked: 'Notifications are blocked in your browser settings.',
      remindersOnBestEffort: 'Reminder set for today — best-effort only while this app stays open. For anything important, use "Add to calendar" instead.',
      distanceApprox: 'straight-line distance, not walking or transit time',
      statusApptRequired: 'Appointment required', statusWalkIn: 'Walk-in', statusReferral: 'Referral required',
      statusCallConfirm: 'Call to confirm', statusPublished: 'Usually open — published hours', statusUnknown: 'Availability unknown',
      dataReviewedLabel: 'Data last reviewed', unconfirmedLabel: 'Not independently verified — call before you go',
      verifiedLabel: 'Checked against source', dvExit: 'Leave this screen quickly', dvExitConfirm: 'This will immediately leave the app and open a neutral page. Continue?',
      ok: 'OK', updateAvailable: 'A new version of this app is ready.', updateNow: 'Refresh now', updateLater: 'Later',
      removeVaultDocConfirm: 'Remove this document from your Vault? This cannot be undone.',
      deleteAppointmentConfirm: 'Delete this appointment?',
      vaultLabelPrompt: 'What is this document? (e.g. "ID card", "Birth certificate")',
      vaultDefaultLabel: 'Document',
      vaultSaveFailed: 'Could not save this document. Your device may be low on storage, or private/incognito mode may be blocking it. Nothing was saved — please try again or free up space.',
      vaultDeleteFailed: 'Could not remove this document. Please try again.'
    },
    es: {
      appTitle: 'Recursos de Seattle',
      appSub: 'Albergues · Comidas · Duchas · Médico · Vivienda',
      searchPh: 'Buscar… (ej. "comida hoy", "albergue con perro")', me: 'Yo', area: 'Zona', list: 'Lista', clear: 'Borrar',
      skip: 'Saltar', cont: 'Continuar', finish: 'Listo', cancel: 'Cancelar',
      useGps: 'Usar GPS', close: 'Cerrar', copy: 'Copiar', save: 'Guardar',
      offline: 'Sin conexión — mostrando datos guardados',
      callFirst: 'Los horarios y la disponibilidad pueden cambiar — llama para confirmar antes de ir',
      disclaimer: 'Esta es una guía curada sin conexión, no una lista completa de todos los servicios. Los horarios y camas cambian y no son en tiempo real. Llama antes de ir. Marca el <strong>211</strong> para ayuda en vivo con cualquier cosa que no esté aquí.',
      matched: 'recursos para ti', resources: 'recursos',
      startHere: 'Empieza aquí — números críticos', forYou: 'Recursos para ti',
      noMatch: 'Sin resultados en esta guía sin conexión — eso no significa que no exista ayuda.',
      weatherCold: 'Modo frío ACTIVADO (elegido por ti, no es clima en vivo) — se muestran primero los centros de calor',
      weatherHeat: 'Modo calor ACTIVADO (elegido por ti, no es clima en vivo) — se muestran primero los centros de enfriamiento',
      weatherBtnOff: 'Frío/Calor', weatherBtnCold: 'Modo frío', weatherBtnHeat: 'Modo calor',
      weatherBtnTitle: 'Prioriza manualmente centros de calor o enfriamiento — esto no es información del clima en vivo',
      nextSteps: 'Tus mejores próximos pasos',
      hoodTitle: '¿Dónde estás?', hoodHint: 'La zona ayuda a ordenar recursos cercanos. Esto es aproximado, no exacto.',
      cheatTitle: 'Mi lista', notePrivate: 'Nota privada solo en este dispositivo.',
      crisis988: '988 Crisis', crisis211: '211 Ayuda', crisisDV: 'Línea DV', crisisVet: 'Veteranos',
      navAll: 'Todo', navShelter: 'Albergue', navFood: 'Comida', navHygiene: 'Higiene', navHealth: 'Salud', navWork: 'Empleo',
      favLabel: 'Favorito', visitLabel: 'Estuve aquí hoy', callLabel: 'Llamar', mapLabel: 'Mapa', shareLabel: 'Compartir',
      noteLabel: 'Nota', scheduleLabel: 'Programar una visita', removeLabel: 'Eliminar', toggleLangLabel: 'Cambiar idioma',
      moreOptionsLabel: 'Más opciones', markCompleteLabel: 'Marcar cita como completada', noFavorites: 'Aún no tienes favoritos. Toca el corazón en cualquier recurso para guardarlo aquí.',
      gpsUnavailable: 'El GPS no está disponible en este dispositivo/navegador. Aún puedes elegir un vecindario.',
      gpsFailed: 'No se pudo obtener tu ubicación. Elige un vecindario en su lugar — igual ayuda a ordenar recursos cercanos.',
      copied: 'Copiado al portapapeles.',
      copyManually: 'No se pudo copiar automáticamente. Selecciona y copia el texto manualmente.',
      confirmOverwriteDay: 'ya tiene un plan. ¿Sobrescribirlo con el de',
      plansQ: '?',
      cancelledNoChange: 'Cancelado — no se cambió nada.',
      copiedTo: 'Copiado a',
      nothingToCopy: 'Nada que copiar.',
      couldNotCopyDay: 'No se pudo copiar.',
      notifNotSupported: 'Los recordatorios no son compatibles con este navegador.',
      notifOff: 'Las notificaciones están desactivadas. Revisa la pantalla de inicio para ver el plan de hoy.',
      notifBlocked: 'Las notificaciones están bloqueadas en la configuración de tu navegador.',
      remindersOnBestEffort: 'Recordatorio activado para hoy — solo es un intento, funciona mientras esta app esté abierta. Para algo importante, usa "Agregar al calendario".',
      distanceApprox: 'distancia en línea recta, no tiempo caminando ni en transporte',
      statusApptRequired: 'Se requiere cita', statusWalkIn: 'Sin cita previa', statusReferral: 'Se requiere referencia',
      statusCallConfirm: 'Llama para confirmar', statusPublished: 'Usualmente abierto — horario publicado', statusUnknown: 'Disponibilidad desconocida',
      dataReviewedLabel: 'Datos revisados por última vez', unconfirmedLabel: 'No verificado de forma independiente — llama antes de ir',
      verifiedLabel: 'Verificado contra la fuente', dvExit: 'Salir rápidamente de esta pantalla', dvExitConfirm: 'Esto saldrá inmediatamente de la app y abrirá una página neutral. ¿Continuar?',
      ok: 'Aceptar', updateAvailable: 'Hay una nueva versión de esta app lista.', updateNow: 'Actualizar ahora', updateLater: 'Más tarde',
      removeVaultDocConfirm: '¿Eliminar este documento de tu Bóveda? Esto no se puede deshacer.',
      deleteAppointmentConfirm: '¿Eliminar esta cita?',
      vaultLabelPrompt: '¿Qué documento es? (ej. "Identificación", "Acta de nacimiento")',
      vaultDefaultLabel: 'Documento',
      vaultSaveFailed: 'No se pudo guardar este documento. Tu dispositivo puede tener poco almacenamiento, o el modo privado/incógnito puede estar bloqueándolo. No se guardó nada — intenta de nuevo o libera espacio.',
      vaultDeleteFailed: 'No se pudo eliminar este documento. Intenta de nuevo.'
    }
  };

  // Single source of truth for the app's "as of" review date, shown in the
  // disclaimer / More panel so people (and maintainers) know how fresh the
  // resource data is. Update this whenever seattle_data.js is reviewed.
  var DATA_LAST_REVIEWED = '2026-08-29';

  var NEIGHBORHOODS = [
    { id: 'downtown', label: 'Downtown / Pioneer Square', lat: 47.603, lon: -122.332 },
    { id: 'capitol', label: 'Capitol Hill / First Hill', lat: 47.625, lon: -122.321 },
    { id: 'udistrict', label: 'University District', lat: 47.660, lon: -122.310 },
    { id: 'ballard', label: 'Ballard / Fremont', lat: 47.668, lon: -122.380 },
    { id: 'south', label: 'South Seattle / Rainier', lat: 47.550, lon: -122.290 },
    { id: 'west', label: 'West Seattle', lat: 47.570, lon: -122.385 },
    { id: 'north', label: 'North Seattle', lat: 47.700, lon: -122.330 },
    { id: 'eastside', label: 'Eastside (Bellevue area)', lat: 47.610, lon: -122.200 },
    { id: 'southking', label: 'South King (Burien / FW)', lat: 47.400, lon: -122.300 },
    { id: 'any', label: 'Anywhere / skip', lat: null, lon: null }
  ];

  var profile = null;
  var viewFilter = 'all';
  var searchQuery = '';
  var lang = localStorage.getItem('srf_lang') || 'en';
  var weatherMode = localStorage.getItem('srf_weather') || 'off';
  var userLat = null, userLon = null;
  var neighborhoodId = localStorage.getItem('srf_hood') || null;
  var obStep = 0, obDraft = null, noteTargetId = null;

  function $(id) { return document.getElementById(id); }
  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function loadProfile() {
    try {
      var raw = localStorage.getItem('srf_profile');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return createEmptyProfile();
  }
  function saveProfile(p) {
    localStorage.setItem('srf_profile', JSON.stringify(p));
    profile = p;
  }
  function loadNotes() {
    try { return JSON.parse(localStorage.getItem('srf_notes') || '{}'); } catch (e) { return {}; }
  }
  function saveNote(id, text) {
    var notes = loadNotes();
    if (text && text.trim()) notes[id] = { text: text.trim(), at: Date.now() };
    else delete notes[id];
    localStorage.setItem('srf_notes', JSON.stringify(notes));
  }
  function loadFavorites() {
    try { return JSON.parse(localStorage.getItem('srf_favorites') || '{}'); } catch (e) { return {}; }
  }
  function toggleFavorite(id) {
    var favs = loadFavorites();
    if (favs[id]) delete favs[id]; else favs[id] = Date.now();
    localStorage.setItem('srf_favorites', JSON.stringify(favs));
    return !!favs[id];
  }
  function loadVisited() {
    try { return JSON.parse(localStorage.getItem('srf_visited') || '{}'); } catch (e) { return {}; }
  }
  function isVisitedToday(id) {
    var v = loadVisited()[id];
    if (!v) return false;
    return new Date(v).toDateString() === new Date().toDateString();
  }
  function toggleVisitedToday(id) {
    var visited = loadVisited();
    if (isVisitedToday(id)) delete visited[id];
    else visited[id] = Date.now();
    localStorage.setItem('srf_visited', JSON.stringify(visited));
    return isVisitedToday(id);
  }

  // ---------- My Contact (permanent contact card) ----------
  function loadContact() {
    try { return JSON.parse(localStorage.getItem('srf_contact') || 'null') || { name: '', phone: '', email: '', contact2: '', notes: '' }; }
    catch (e) { return { name: '', phone: '', email: '', contact2: '', notes: '' }; }
  }
  function saveContact(c) { localStorage.setItem('srf_contact', JSON.stringify(c)); }

  // ---------- Weekly Planner (daily money goal + needs checklist) ----------
  var NEED_OPTIONS = [
    { key: 'shower', label: 'Shower', icon: '\uD83D\uDEBF' },
    { key: 'laundry', label: 'Laundry', icon: '\uD83E\uDDFA' },
    { key: 'meal', label: 'Meal', icon: '\uD83C\uDF72' },
    { key: 'charge', label: 'Phone charge', icon: '\uD83D\uDD0C' },
    { key: 'documents', label: 'Documents', icon: '\uD83E\uDEAA' },
    { key: 'work', label: 'Work', icon: '\uD83D\uDCB5' },
    { key: 'housing', label: 'Housing paperwork', icon: '\uD83D\uDD11' },
    { key: 'other', label: 'Other', icon: '\uD83D\uDCCC' }
  ];
  var NEED_KEY_TO_STABILITY = {
    shower: 'hygiene', laundry: 'hygiene',
    meal: 'food',
    documents: 'planning', housing: 'planning',
    work: 'work'
    // charge, other: intentionally unmapped — no clear single stability category
  };
  function defaultPlanner() {
    var p = {};
    for (var i = 0; i < 7; i++) p[i] = { goal: 0, needs: {} };
    return p;
  }
  function loadPlanner() {
    try {
      var raw = JSON.parse(localStorage.getItem('srf_planner') || 'null');
      return raw || defaultPlanner();
    } catch (e) { return defaultPlanner(); }
  }
  function savePlanner(p) { localStorage.setItem('srf_planner', JSON.stringify(p)); }

  /**
   * Routine Builder: copy one day's plan (goal + needs) onto another day, using the
   * existing planner schema exactly — no second planner, no new storage key.
   *   sourceDay / targetDay: 0-6 (Sunday-Saturday), matching the existing plannerDay index.
   *   force: if true, overwrite targetDay even if it already has data. If false and
   *          targetDay already has data, this function does nothing and returns
   *          { needsConfirm: true } so the caller can prompt before retrying with force.
   * Returns { ok: true } on a real copy, or { needsConfirm: true } if a confirmation
   * step is required first, or { ok: false, reason: 'empty-source' } if there is
   * nothing meaningful to copy.
   */
  function dayHasData(dayPlan) {
    if (!dayPlan) return false;
    return (dayPlan.goal && dayPlan.goal > 0) || (dayPlan.needs && Object.keys(dayPlan.needs).length > 0);
  }
  function copyPlanToDay(sourceDay, targetDay, force) {
    if (sourceDay === targetDay) return { ok: false, reason: 'same-day' };
    var planner = loadPlanner();
    var sourcePlan = planner[sourceDay];
    if (!dayHasData(sourcePlan)) return { ok: false, reason: 'empty-source' };
    var targetPlan = planner[targetDay];
    if (dayHasData(targetPlan) && !force) return { needsConfirm: true };

    // Deep-copy so the two days never share the same nested needs object by reference
    // (mutating one day's needs later must never silently mutate the other).
    planner[targetDay] = {
      goal: sourcePlan.goal || 0,
      needs: JSON.parse(JSON.stringify(sourcePlan.needs || {}))
    };
    savePlanner(planner);

    // Reuses the existing 'plan_created' vocabulary via feature metadata, exactly like
    // Smart Day Plan — this is a real planning action (building tomorrow's plan from
    // today's), not a new action type. Dedup is per source+target+day-of-copy so
    // repeated clicks/re-copies on the same day don't farm XP, but copying again
    // tomorrow (a genuinely new planning session) counts again.
    var category = null; // a whole-day copy spans multiple needs/categories; no single category applies
    logAction('plan_created', {
      dedupKey: 'routine:' + sourceDay + ':' + targetDay + ':' + dateToStr(new Date()),
      category: category,
      feature: 'routine_copy',
      sourceDay: sourceDay,
      targetDay: targetDay
    });

    return { ok: true };
  }

  // ---------- Scheduled Events (real dated appointments — day & week planning) ----------
  // Stored as a flat array, each event keyed to a specific calendar date (YYYY-MM-DD),
  // not just a day-of-week, so a user can plan today, tomorrow, and the rest of the week
  // distinctly (e.g. two different showers on two different Tuesdays).
  function loadEvents() {
    try { return JSON.parse(localStorage.getItem('srf_events') || '[]'); } catch (e) { return []; }
  }
  function saveEvents(list) { localStorage.setItem('srf_events', JSON.stringify(list)); }
  function addEvent(ev) {
    var list = loadEvents();
    ev.id = 'ev' + Date.now() + Math.floor(Math.random() * 1000);
    if (ev.completed === undefined) ev.completed = false;
    list.push(ev);
    saveEvents(list);
    return ev;
  }
  function updateEvent(id, patch) {
    var list = loadEvents();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) { list[i] = Object.assign({}, list[i], patch); break; }
    }
    saveEvents(list);
  }
  function isEventCompleted(ev) {
    // Backward-compat: any event saved before this field existed reads as false, never throws.
    return !!(ev && ev.completed);
  }
  function toggleEventCompleted(id) {
    var list = loadEvents();
    var nowCompleted = null;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        var wasCompleted = isEventCompleted(list[i]);
        list[i].completed = !wasCompleted;
        nowCompleted = list[i].completed;
        break;
      }
    }
    saveEvents(list);
    return nowCompleted; // true, false, or null if event not found
  }
  function deleteEvent(id) {
    saveEvents(loadEvents().filter(function (e) { return e.id !== id; }));
  }
  function eventsForDate(dateStr) {
    return loadEvents().filter(function (e) { return e.date === dateStr; })
      .sort(function (a, b) { return (a.time || '').localeCompare(b.time || ''); });
  }
  function eventsForWeek(startDateStr) {
    var start = new Date(startDateStr + 'T00:00:00');
    var days = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(dateToStr(d));
    }
    var all = loadEvents();
    var byDay = {};
    days.forEach(function (ds) { byDay[ds] = []; });
    all.forEach(function (e) { if (byDay.hasOwnProperty(e.date)) byDay[e.date].push(e); });
    Object.keys(byDay).forEach(function (ds) { byDay[ds].sort(function (a, b) { return (a.time || '').localeCompare(b.time || ''); }); });
    return { days: days, byDay: byDay };
  }
  function dateToStr(d) {
    var y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }
  function startOfWeek(d) {
    var copy = new Date(d);
    var day = copy.getDay(); // 0 = Sunday
    copy.setDate(copy.getDate() - day);
    return copy;
  }

  // ---------- Progression system (practical, utility-first — see README) ----------
  // Approved action types (exactly 10, locked):
  //   resource_saved, resource_note_added, gps_used, appointment_created,
  //   appointment_completed, reminder_created, calendar_exported, plan_created,
  //   service_checked_in, work_resource_viewed
  // Storage: one key, 'srf_progress'. No other new keys. 'srf_favorites' is reused
  // as-is for "trusted places" — there is no separate trusted-place action or field.

  var XP_RULES = {
    resource_saved: 3,
    resource_note_added: 5,
    gps_used: 2,
    appointment_created: 10,
    appointment_completed: 15,
    reminder_created: 5,
    calendar_exported: 5,
    plan_created: 10,
    service_checked_in: 3,
    work_resource_viewed: 1
  };

  // Category each action can affect in the stability object, when meta.category is
  // supplied. Actions without a natural category (e.g. gps_used) leave stability alone.
  var STABILITY_CATEGORIES = ['food', 'hygiene', 'shelter', 'health', 'work', 'planning', 'transportation'];

  // Maps a resource's `type` (from seattle_data.js / type_meta.js) onto one of the 7
  // stability categories above, so resource-based actions (save, checked-in, etc.) can
  // update the right category without touching type_meta.js. Types with no natural
  // stability mapping (documents, mail, storage, charging, library, legal, benefits,
  // pets, warming, system) are intentionally left unmapped — they still earn XP, they
  // just don't move a stability category.
  var TYPE_TO_STABILITY = {
    shelter: 'shelter', village: 'shelter', safeparking: 'shelter',
    meal: 'food', foodbank: 'food',
    shower: 'hygiene', daycenter: 'hygiene', clothing: 'hygiene',
    medical: 'health', dental: 'health', mentalhealth: 'health', recovery: 'health', water: 'health',
    work: 'work', outreach: 'work',
    housinghelp: 'planning',
    transport: 'transportation'
  };
  function stabilityCategoryForResource(resource) {
    if (!resource) return null;
    return TYPE_TO_STABILITY[resource.type] || null;
  }

  // Reverse index of TYPE_TO_STABILITY: category -> array of resource types. Built
  // once from the existing map so there is exactly one place (TYPE_TO_STABILITY) that
  // defines this vocabulary — this is a derived view, not a second source of truth.
  var STABILITY_TO_TYPES = (function () {
    var out = {};
    Object.keys(TYPE_TO_STABILITY).forEach(function (type) {
      var cat = TYPE_TO_STABILITY[type];
      if (!out[cat]) out[cat] = [];
      out[cat].push(type);
    });
    return out;
  })();

  /**
   * Smart Day Plan: given a planner need key (one of NEED_OPTIONS' keys), return a
   * small set of nearby/relevant resources that satisfy it.
   *
   *  1. Translate the need key into the existing stability category via
   *     NEED_KEY_TO_STABILITY (reused, not reimplemented).
   *  2. Look up which resource types map to that category via STABILITY_TO_TYPES
   *     (derived from the existing TYPE_TO_STABILITY, reused, not reimplemented).
   *  3. Filter SEATTLE_RESOURCES to those types only (excludes irrelevant types).
   *  4. Sort by distance via the existing distMiles() when userLat/userLon are set;
   *     degrade gracefully (stable original order) when GPS is unavailable.
   *  5. De-duplicate by resource id (defensive; SEATTLE_RESOURCES has no duplicate
   *     ids today, but this keeps the function correct even if that ever changes).
   *  6. Return at most `limit` results.
   *
   * Needs with no category mapping (e.g. 'charge', 'other') correctly return [] —
   * that is accurate behavior, not a bug, since there is no sensible resource type
   * to suggest for "phone charge" or a free-text "other" need today.
   */
  function suggestResourcesForNeed(needKey, limit) {
    limit = limit || 3;
    var category = NEED_KEY_TO_STABILITY[needKey];
    if (!category) return [];
    var types = STABILITY_TO_TYPES[category];
    if (!types || !types.length) return [];
    if (typeof SEATTLE_RESOURCES === 'undefined') return [];

    var seen = {};
    var matches = SEATTLE_RESOURCES.filter(function (r) {
      if (types.indexOf(r.type) === -1) return false;
      if (seen[r.id]) return false; // de-dup guard
      seen[r.id] = true;
      return true;
    });

    if (userLat != null && userLon != null) {
      matches = matches.slice().sort(function (a, b) {
        return distMiles(userLat, userLon, a.lat, a.lon) - distMiles(userLat, userLon, b.lat, b.lon);
      });
    }
    // No GPS: leave in the existing SEATTLE_RESOURCES order (stable, deterministic,
    // not a failure state) rather than attempting any other heuristic ordering.

    return matches.slice(0, limit);
  }

  // XP thresholds for the 7-level ladder (Scout .. Anchor). Kept simple and monotonic.
  var LEVEL_THRESHOLDS = [0, 30, 80, 160, 280, 450, 700]; // index 0 -> level 1 ... index 6 -> level 7

  /**
   * Narrow Next Best Action: a small, explainable suggestion for what to do next,
   * built ONLY from signals that are already reliable in this app today:
   *   - today's planner needs (loadPlanner(), the existing plannerDay-indexed schema)
   *   - matching resources (via the existing suggestResourcesForNeed(), reused)
   *   - GPS distance when available (via the existing distMiles(), reused)
   *
   * Deliberately does NOT use: parsed opening hours, routing/travel-time, transit
   * data, or any urgency scoring — none of that data is reliable in this app yet
   * (see ROADMAP.md, "Open Now" / "Leave By" — both explicitly deferred).
   *
   * Deterministic: given the same planner state, GPS state, and resource data, this
   * always returns the same result — no randomness, no hidden state.
   *
   * context: { todayOverride: 0-6 } — optional, for testing a specific day without
   * depending on the real current date.
   *
   * Returns null when there is nothing useful to suggest (no unmet need, or an unmet
   * need with no matching resource type) — never a fabricated or low-confidence guess.
   */
  // ---------- Next-Step engine (deterministic, ungated, no LLM) ----------
  // This is deliberately separate from the Level-3 "Smart Day Plan" / planner-based
  // suggestion above: that one is opt-in and tied to the planner + progress system.
  // This one is always available to everyone from first launch (per "never gate
  // survival resources"), takes a plain need, and returns ONE clear next step plus
  // an honest fallback — the "NEXT ACTION CARD" concept.
  var NEED_TO_TYPES = {
    shelter: ['shelter', 'village', 'safeparking'],
    food: ['meal', 'foodbank'],
    hygiene: ['shower', 'daycenter'],
    medical: ['medical', 'dental', 'mentalhealth', 'recovery'],
    housing: ['housinghelp'],
    transportation: ['transport'],
    documents: ['documents', 'benefits', 'legal'],
    employment: ['work'],
    dv: ['system'],
    youth: ['shelter', 'daycenter', 'housinghelp'],
    family: ['shelter', 'housinghelp'],
    veteran: ['housinghelp', 'system'],
    pet: ['shelter', 'daycenter'],
    weather: ['warming']
  };

  // Confidence/trust ranking used only to break ties and order candidates — never
  // hidden from the person (the badge on the eventual card shows the same signal).
  function trustRank(r) {
    return r.verificationStatus === 'verified' ? 2 : 1; // 'unconfirmed' and anything else = 1
  }
  function accessibilityRank(r) {
    // Known walk-in or known appointment-required both beat total uncertainty —
    // knowing what to expect is itself useful, regardless of which one it is.
    if (r.walkIn === true || r.appointmentRequired === true || r.referralRequired === true) return 2;
    return 1;
  }
  function eligibilityRank(r, constraints) {
    var score = 0;
    var tags = r.tags || [];
    if (constraints.pet && tags.indexOf('pet') !== -1) score += 3;
    if (constraints.hasKids && (tags.indexOf('family') !== -1 || tags.indexOf('hasKids') !== -1)) score += 3;
    if (constraints.veteran && tags.indexOf('veteran') !== -1) score += 3;
    if (constraints.youth && tags.indexOf('youth') !== -1) score += 3;
    if (constraints.dv && tags.indexOf('dv') !== -1) score += 3;
    if (constraints.native && tags.indexOf('native') !== -1) score += 3;
    // A resource that specifically excludes what the person needs never wins on
    // eligibility grounds, but is not removed outright — the person can still see
    // and choose it; this app doesn't have reliable enough per-resource exclusion
    // data to safely hide options rather than merely de-prioritize them.
    return score;
  }
  // How many of the person's stated constraints actually matter for this need
  // (i.e. would move the score) — used below to decide whether a match is
  // confident or whether the engine should admit it can't tell.
  function relevantConstraintCount(constraints) {
    return ['pet', 'hasKids', 'veteran', 'youth', 'dv', 'native'].filter(function (k) { return !!constraints[k]; }).length;
  }
  function scoreResource(r, constraints) {
    // Priority order, high to low: safety/urgency, eligibility match, accessibility
    // clarity, trust/freshness, geographic proximity. Distance is deliberately last
    // and contributes the smallest weight — see "NEAREST must not mean BEST".
    var safety = (r.type === 'system') ? 10 : 0;
    var elig = eligibilityRank(r, constraints);
    var access = accessibilityRank(r);
    var trust = trustRank(r);
    var dist = (constraints.userLat != null && r.lat != null) ? distMiles(constraints.userLat, constraints.userLon, r.lat, r.lon) : 9999;
    // Distance folded in as a small tiebreaker: up to ~2 points, shrinking as
    // distance grows, so it can only ever nudge between otherwise-similar options.
    var distScore = Math.max(0, 2 - dist / 10);
    return safety * 100 + elig * 10 + access * 5 + trust * 3 + distScore;
  }

  /**
   * Returns a Next-Step result for a plain-language need key, or null if this
   * curated dataset genuinely has nothing for it — callers must render the 211
   * fallback in that case, never "no help exists" (see NO_MATCH copy elsewhere).
   * constraints: { pet, hasKids, veteran, youth, dv, native, userLat, userLon }
   */
  function getNextStepForNeed(needKey, constraints) {
    constraints = constraints || {};
    if (constraints.userLat === undefined) { constraints.userLat = userLat; constraints.userLon = userLon; }
    var types = NEED_TO_TYPES[needKey];
    if (!types || !types.length || typeof SEATTLE_RESOURCES === 'undefined') return null;
    var candidates = SEATTLE_RESOURCES.filter(function (r) { return types.indexOf(r.type) !== -1; }).map(normalizeResource);
    if (!candidates.length) return null;
    candidates.sort(function (a, b) { return scoreResource(b, constraints) - scoreResource(a, constraints); });
    var top = candidates[0];
    var alt = candidates.length > 1 ? candidates[1] : null;

    var reasons = [];
    var tags = top.tags || [];
    var matchedConstraint = false;
    if (constraints.pet && tags.indexOf('pet') !== -1) { reasons.push(lang === 'es' ? 'Acepta mascotas' : 'Accepts pets'); matchedConstraint = true; }
    if (constraints.hasKids && (tags.indexOf('family') !== -1 || tags.indexOf('hasKids') !== -1)) { reasons.push(lang === 'es' ? 'Acepta familias' : 'Accepts families'); matchedConstraint = true; }
    if (constraints.veteran && tags.indexOf('veteran') !== -1) { reasons.push(lang === 'es' ? 'Específico para veteranos' : 'Veteran-specific'); matchedConstraint = true; }
    if (constraints.youth && tags.indexOf('youth') !== -1) { reasons.push(lang === 'es' ? 'Específico para jóvenes' : 'Youth-specific'); matchedConstraint = true; }
    if (constraints.dv && tags.indexOf('dv') !== -1) { reasons.push(lang === 'es' ? 'Servicio confidencial' : 'Confidential service'); matchedConstraint = true; }
    if (constraints.native && tags.indexOf('native') !== -1) { reasons.push(lang === 'es' ? 'Programa cultural específico' : 'Culturally-specific program'); matchedConstraint = true; }
    var badge = resourceStatusBadge(top);
    reasons.push(t(badge.key));
    reasons.push(top.verificationStatus === 'verified' ? t('verifiedLabel') : t('unconfirmedLabel'));

    // Conservative-uncertainty guard: if the person told us something that
    // matters for this need (has a pet, has kids, is a veteran, etc.) and the
    // top-ranked resource doesn't actually match on any of it, this is NOT a
    // confident recommendation — it's just the best of an uninformative set.
    // Say so plainly rather than presenting it with false confidence, per the
    // product principle: never pretend to know more than the data supports.
    var relevantCount = relevantConstraintCount(constraints);
    var uncertain = relevantCount > 0 && !matchedConstraint;

    return {
      needKey: needKey,
      resource: top,
      alternate: alt,
      reasons: reasons,
      uncertain: uncertain,
      distanceMiles: (constraints.userLat != null && top.lat != null) ? distMiles(constraints.userLat, constraints.userLon, top.lat, top.lon) : null
    };
  }

  // Renders the "NEXT ACTION CARD" — deliberately short: what, best next step,
  // why (max ~3 reasons), before-you-go caveat, and an explicit failure path to
  // an alternate resource or 211. Never more text than fits one glance.
  function renderNextStepCard(needKey) {
    var labels = {
      shelter: { en: 'A place to sleep tonight', es: 'Un lugar para dormir esta noche' },
      food: { en: 'Food', es: 'Comida' }, hygiene: { en: 'A shower', es: 'Una ducha' },
      medical: { en: 'Medical care', es: 'Atención médica' }, housing: { en: 'Housing help', es: 'Ayuda de vivienda' },
      transportation: { en: 'Transportation', es: 'Transporte' }, documents: { en: 'ID / documents', es: 'Identificación / documentos' },
      employment: { en: 'Work', es: 'Trabajo' }, dv: { en: 'A confidential safe place', es: 'Un lugar seguro y confidencial' },
      youth: { en: 'Youth services', es: 'Servicios para jóvenes' }, family: { en: 'Family shelter', es: 'Albergue familiar' },
      veteran: { en: 'Veteran services', es: 'Servicios para veteranos' }, pet: { en: 'Shelter with a pet', es: 'Albergue con mascota' },
      weather: { en: 'Warming/cooling center', es: 'Centro de calor/frío' }
    };
    var constraints = { pet: !!(profile && profile.pet), hasKids: !!(profile && profile.hasKids), veteran: !!(profile && profile.veteran), youth: !!(profile && profile.ageGroup === 'youth'), dv: !!(profile && profile.dv), native: !!(profile && profile.native) };
    var result = getNextStepForNeed(needKey, constraints);
    var lbl = (labels[needKey] && labels[needKey][lang]) || needKey;
    var el = $('nextStepResult');
    if (!el) return;
    if (!result) {
      el.innerHTML = '<div class="empty">' + escapeHtml(t('noMatch')) +
        '<div style="margin-top:10px"><a class="call" href="tel:211">' + escapeHtml(t('crisis211')) + '</a></div></div>';
      return;
    }
    var r = result.resource;
    var call = phoneHref(r.phone);
    var whatNext = (call ? ('<a class="call" href="' + call + '">' + escapeHtml(t('callLabel')) + ' ' + escapeHtml(r.phone) + '</a>') :
      '<div class="meta">' + escapeHtml(r.phone || '') + '</div>');
    var fallbackHtml = (result.alternate)
      ? ('<div class="meta">' + escapeHtml(lang === 'es' ? 'Si no funciona:' : 'If that doesn\u2019t work:') + ' ' + escapeHtml(result.alternate.name) +
         (phoneHref(result.alternate.phone) ? (' \u2014 <a class="call" href="' + phoneHref(result.alternate.phone) + '">' + escapeHtml(t('callLabel')) + '</a>') : '') + '</div>')
      : '';
    var uncertainHtml = result.uncertain
      ? ('<div class="call-first" style="background:#78350f;color:#fef3c7">' +
         escapeHtml(lang === 'es'
           ? 'No se pudo determinar con confianza la mejor coincidencia para tu situación específica a partir de la información disponible. Esto es la opción general más cercana, no una coincidencia confirmada.'
           : 'Best match for your specific situation can\u2019t be confidently determined from the information available. This is the closest general option, not a confirmed match.') +
         '</div>')
      : '';
    el.innerHTML =
      '<div class="card system">' +
      '<div class="meta" style="text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;color:var(--muted)">' + escapeHtml(lang === 'es' ? 'NECESITAS' : 'YOU NEED') + '</div>' +
      '<h2 style="margin:2px 0 8px">' + escapeHtml(lbl) + '</h2>' +
      uncertainHtml +
      '<div class="meta" style="text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;color:var(--muted);margin-top:6px">' + escapeHtml(lang === 'es' ? 'MEJOR PRÓXIMO PASO' : 'BEST NEXT STEP') + '</div>' +
      '<div style="font-weight:800;font-size:1.05rem">' + escapeHtml(r.name) + '</div>' +
      (r.addr ? '<div class="meta">' + escapeHtml(r.addr) + '</div>' : '') +
      '<div class="meta" style="text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;color:var(--muted);margin-top:6px">' + escapeHtml(lang === 'es' ? 'POR QUÉ' : 'WHY') + '</div>' +
      '<div class="flags">' + result.reasons.map(function (rs) { return '<span class="flag tag">' + escapeHtml(rs) + '</span>'; }).join('') + '</div>' +
      '<div class="actions" style="margin-top:8px">' + whatNext + '</div>' +
      '<div class="call-first" style="margin-top:8px">' + escapeHtml(lang === 'es' ? 'ANTES DE IR: ' : 'BEFORE YOU GO: ') + escapeHtml(t('callFirst')) + '</div>' +
      '<div class="meta" style="text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;color:var(--muted);margin-top:6px">' + escapeHtml(lang === 'es' ? 'SI NO FUNCIONA' : 'IF THAT DOESN\u2019T WORK') + '</div>' +
      (fallbackHtml || ('<div class="meta">' + escapeHtml(lang === 'es' ? 'Llama al ' : 'Call ') + '211.</div>')) +
      '<div class="actions" style="margin-top:4px"><a class="call" href="tel:211">' + escapeHtml(t('crisis211')) + '</a></div>' +
      '</div>';
  }

  function renderNeedPicker() {
    var el = $('nextStepPicker');
    if (!el) return;
    var needs = [
      ['shelter', '\uD83C\uDF19'], ['food', '\uD83C\uDF72'], ['hygiene', '\uD83D\uDEBF'], ['medical', '\u2695\uFE0F'],
      ['housing', '\uD83D\uDD11'], ['documents', '\uD83E\uDEAA'], ['employment', '\uD83D\uDCB5'], ['transportation', '\uD83D\uDE8C'],
      ['dv', '\uD83D\uDEE1\uFE0F'], ['veteran', '\uD83C\uDF96\uFE0F'], ['youth', '\uD83E\uDDD2'], ['pet', '\uD83D\uDC3E'], ['weather', '\uD83D\uDD25']
    ];
    var labels = { shelter: 'navShelter', food: 'navFood', hygiene: 'navHygiene', medical: 'navHealth', employment: 'navWork' };
    el.innerHTML = needs.map(function (n) {
      var key = n[0], icon = n[1];
      var text = labels[key] ? t(labels[key]) : key;
      return '<button type="button" class="btn btn-ghost" data-need="' + key + '" style="font-size:.75rem;padding:8px 10px;min-height:36px">' + icon + ' ' + escapeHtml(text) + '</button>';
    }).join('');
    var btns = el.querySelectorAll('[data-need]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', (function (key) {
        return function () { renderNextStepCard(key); };
      })(btns[i].getAttribute('data-need')));
    }
  }

  function getNextBestAction(context) {
    context = context || {};
    var today = (context.todayOverride != null) ? context.todayOverride : new Date().getDay();
    var planner = loadPlanner();
    var plan = planner[today] || { goal: 0, needs: {} };

    // Unmet needs, in NEED_OPTIONS' fixed declared order (not object key order, which
    // is not guaranteed stable across engines) -- this is what makes the result
    // deterministic rather than dependent on insertion order.
    var unmetInOrder = NEED_OPTIONS
      .map(function (o) { return o.key; })
      .filter(function (k) { return plan.needs && plan.needs.hasOwnProperty(k) && !plan.needs[k]; });

    for (var i = 0; i < unmetInOrder.length; i++) {
      var needKey = unmetInOrder[i];
      var matches = suggestResourcesForNeed(needKey, 1);
      if (matches.length) {
        var opt = NEED_OPTIONS.filter(function (o) { return o.key === needKey; })[0];
        var resource = matches[0];
        var dist = (userLat != null && resource.lat != null) ? distMiles(userLat, userLon, resource.lat, resource.lon) : null;
        return {
          needKey: needKey,
          needLabel: opt ? opt.label : needKey,
          needIcon: opt ? opt.icon : '',
          resource: resource,
          distanceMiles: dist
        };
      }
      // This unmet need has no matching resource type (e.g. 'charge' or 'other') --
      // correctly skip it and try the next unmet need, rather than fabricating a match.
    }
    return null; // no outstanding need has a real match right now
  }

  // Tier A is always unlocked for every user regardless of progress — this list is the
  // "never gated" set from the spec. isUnlocked() hard-defaults every one of these to
  // true before consulting unlockedTier at all, so a bug in tier math can never lock
  // out a safety-critical feature.
  var ALWAYS_UNLOCKED = [
    'search', 'filters', 'favorites', 'nearby_sorting', 'basic_gps', 'basic_list_view',
    'schedule_creation', 'reminders', 'work_listings', 'emergency_resources',
    'crisis_support', 'core_map_view'
  ];

  // Real, approved feature-to-level map (replaces the earlier placeholder tier list,
  // which mapped no genuine code — see ROADMAP.md). Gating is by numeric level, since
  // that is what the locked architecture specifies (Level 2, 3, 4), not by the letter
  // tier system, which had coarser granularity than these features need.
  //   Level 2 (Planner)    -> smart_day_plan
  //   Level 3 (Navigator)  -> next_best_action
  //   Level 4 (Stabilizer) -> routine_day_copy, worked_before
  //   Level 5-7            -> intentionally empty; no fake unlocks (see ROADMAP.md)
  var FEATURE_UNLOCK_LEVEL = {
    smart_day_plan: 2,
    next_best_action: 3,
    routine_day_copy: 4,
    worked_before: 4
  };

  function isFeatureUnlocked(featureKey) {
    var required = FEATURE_UNLOCK_LEVEL[featureKey];
    if (required == null) return true; // unknown key: fail open, never accidentally gate something real
    var p = loadProgress();
    return (p.level || 1) >= required;
  }


  // Missions: short, practical, category-tagged. completeWhen is an action type this
  // mission listens for; category (if set) must match meta.category passed to logAction.
  var MISSION_DEFS = [
    { id: 'm_find_meal', title: 'Find one meal', category: 'food', completeWhen: 'resource_saved', xp: 10 },
    { id: 'm_plan_hygiene', title: 'Plan hygiene today', category: 'hygiene', completeWhen: 'plan_created', xp: 10 },
    { id: 'm_check_work', title: 'Check work leads', category: 'work', completeWhen: 'work_resource_viewed', xp: 10 },
    { id: 'm_schedule_visit', title: 'Schedule a visit', category: null, completeWhen: 'appointment_created', xp: 10 },
    { id: 'm_export_calendar', title: 'Export one appointment to calendar', category: null, completeWhen: 'calendar_exported', xp: 10 },
    { id: 'm_complete_visit', title: 'Complete a planned visit', category: null, completeWhen: 'appointment_completed', xp: 20 },
    { id: 'm_use_gps', title: 'Find nearby services with GPS', category: null, completeWhen: 'gps_used', xp: 5 }
  ];

  function defaultProgress() {
    var stability = {};
    STABILITY_CATEGORIES.forEach(function (c) { stability[c] = 0; });
    return {
      xp: 0,
      level: 1,
      stability: stability,
      momentum: { current: 0, best: 0, lastCompletedAt: null, graceUntil: null },
      missions: { active: MISSION_DEFS.map(function (m) { return m.id; }), completed: [] },
      actionDedup: {},
      unlockedTier: 'A',
      updatedAt: null
    };
  }
  function loadProgress() {
    try {
      var raw = JSON.parse(localStorage.getItem('srf_progress') || 'null');
      if (!raw) return defaultProgress();
      // Defensive merge so a future field addition never crashes on an older saved object.
      var base = defaultProgress();
      raw.stability = Object.assign({}, base.stability, raw.stability || {});
      raw.momentum = Object.assign({}, base.momentum, raw.momentum || {});
      raw.missions = Object.assign({}, base.missions, raw.missions || {});
      raw.actionDedup = raw.actionDedup || {};
      raw.unlockedTier = raw.unlockedTier || 'A';
      raw.xp = raw.xp || 0;
      raw.level = raw.level || 1;
      return raw;
    } catch (e) { return defaultProgress(); }
  }
  function saveProgress(p) {
    p.updatedAt = Date.now();
    localStorage.setItem('srf_progress', JSON.stringify(p));
  }

  function isUnlocked(featureKey) {
    if (ALWAYS_UNLOCKED.indexOf(featureKey) !== -1) return true;
    return isFeatureUnlocked(featureKey);
  }

  function levelForXp(xp) {
    var lvl = 1;
    for (var i = 0; i < LEVEL_THRESHOLDS.length; i++) {
      if (xp >= LEVEL_THRESHOLDS[i]) lvl = i + 1;
    }
    return lvl;
  }
  function tierForLevel(lvl) {
    // Simple, monotonic mapping: level 1 -> A, 2 -> B, 3 -> C, 4-5 -> D, 6-7 -> E
    if (lvl <= 1) return 'A';
    if (lvl === 2) return 'B';
    if (lvl === 3) return 'C';
    if (lvl <= 5) return 'D';
    return 'E';
  }

  function updateMomentum(p) {
    var now = Date.now();
    var ONE_DAY = 24 * 60 * 60 * 1000;
    var GRACE = 2 * ONE_DAY; // missing a single day should not reset progress
    if (p.momentum.lastCompletedAt && (now - p.momentum.lastCompletedAt) <= GRACE) {
      // still within grace window of the last action — treat as continuing momentum,
      // but only increment "current" once per calendar day to avoid inflating it via
      // rapid repeated actions in the same session.
      var lastDay = new Date(p.momentum.lastCompletedAt).toDateString();
      var today = new Date(now).toDateString();
      if (lastDay !== today) p.momentum.current += 1;
    } else {
      p.momentum.current = 1; // grace expired or first-ever action: restart softly at 1, not 0
    }
    if (p.momentum.current > p.momentum.best) p.momentum.best = p.momentum.current;
    p.momentum.lastCompletedAt = now;
    p.momentum.graceUntil = now + GRACE;
  }

  function checkMissionProgress(p, actionType, meta) {
    var newlyCompleted = [];
    MISSION_DEFS.forEach(function (m) {
      if (p.missions.completed.indexOf(m.id) !== -1) return; // already done
      if (p.missions.active.indexOf(m.id) === -1) return; // not active
      if (m.completeWhen !== actionType) return;
      if (m.category && m.category !== (meta && meta.category)) return;
      // Mission satisfied.
      p.missions.active = p.missions.active.filter(function (id) { return id !== m.id; });
      p.missions.completed.push(m.id);
      p.xp += m.xp;
      newlyCompleted.push(m.id);
    });
    return newlyCompleted;
  }

  /**
   * Single event pipeline entry point for the progression system.
   * actionType: one of the 10 approved action types.
   * meta: { dedupKey: string (required for dedup-eligible actions), category: string (optional) }
   *
   * Anti-farm rule: if meta.dedupKey is provided and already present in actionDedup,
   * this is a no-op (no XP, no mission/level/momentum changes). Callers are responsible
   * for choosing a dedupKey that represents the real-world action, not the UI click
   * (e.g. one calendar export per event ID, not per button tapped).
   */
  function logAction(actionType, meta) {
    if (XP_RULES[actionType] === undefined) return; // unknown/unapproved action type — ignore silently
    meta = meta || {};
    var p = loadProgress();

    if (meta.dedupKey) {
      var dedupFullKey = actionType + ':' + meta.dedupKey;
      if (p.actionDedup[dedupFullKey]) return; // already counted — anti-farm guard
      p.actionDedup[dedupFullKey] = Date.now();
    }

    p.xp += XP_RULES[actionType];

    if (meta.category && STABILITY_CATEGORIES.indexOf(meta.category) !== -1) {
      p.stability[meta.category] = (p.stability[meta.category] || 0) + 1;
    }

    updateMomentum(p);
    checkMissionProgress(p, actionType, meta);

    var newLevel = levelForXp(p.xp);
    if (newLevel !== p.level) {
      p.level = newLevel;
      p.unlockedTier = tierForLevel(newLevel);
    }

    saveProgress(p);
    if (typeof renderProgressHeader === 'function') renderProgressHeader();
  }

  // ---------- My Vault (IndexedDB document photos — never uploaded) ----------
  var VAULT_DB_NAME = 'srf_vault_db';
  var VAULT_STORE = 'documents';
  var vaultDb = null;
  function openVaultDb() {
    return new Promise(function (resolve, reject) {
      if (!('indexedDB' in window)) { reject(new Error('IndexedDB unavailable')); return; }
      var req = indexedDB.open(VAULT_DB_NAME, 1);
      req.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains(VAULT_STORE)) db.createObjectStore(VAULT_STORE, { keyPath: 'id' });
      };
      req.onsuccess = function (e) { vaultDb = e.target.result; resolve(vaultDb); };
      req.onerror = function (e) { reject(e); };
    });
  }
  function vaultAdd(record) {
    return new Promise(function (resolve, reject) {
      var tx = vaultDb.transaction(VAULT_STORE, 'readwrite');
      tx.objectStore(VAULT_STORE).put(record);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function (e) { reject(e); };
    });
  }
  function vaultGetAll() {
    return new Promise(function (resolve, reject) {
      var tx = vaultDb.transaction(VAULT_STORE, 'readonly');
      var req = tx.objectStore(VAULT_STORE).getAll();
      req.onsuccess = function () { resolve(req.result.sort(function (a, b) { return b.at - a.at; })); };
      req.onerror = function (e) { reject(e); };
    });
  }
  function vaultDelete(id) {
    return new Promise(function (resolve, reject) {
      var tx = vaultDb.transaction(VAULT_STORE, 'readwrite');
      tx.objectStore(VAULT_STORE).delete(id);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function (e) { reject(e); };
    });
  }

  // ---------- In-app alert/confirm (replaces native alert()/confirm()) ----------
  // Native browser dialogs can't be styled or localized and look jarring next to the
  // rest of this app's UI. These reuse the existing overlay/sheet pattern instead.
  //
  // Serialization guard: there is exactly one appAlertOverlay in the DOM, shared by
  // showAlert/showConfirm/showPrompt. Without this queue, a call that fires from a
  // background event (e.g. the service-worker "update available" prompt, which can
  // arrive at any time regardless of what the person is doing) could silently
  // overwrite an already-open dialog's text/buttons — orphaning the first dialog's
  // promise forever and making the person unknowingly answer a different question
  // than the one they're looking at. Found during a Phase 3 adversarial re-audit;
  // not caught in the original Phase 2 pass. Every show*() call now waits its turn.
  var dialogQueue = Promise.resolve();
  function queueDialog(showFn) {
    var result = dialogQueue.then(showFn);
    dialogQueue = result.catch(function () {}); // one dialog failing must never jam the queue for the rest
    return result;
  }
  function showAlert(msg) {
    return queueDialog(function () { return showAlertNow(msg); });
  }
  function showConfirm(msg) {
    return queueDialog(function () { return showConfirmNow(msg); });
  }
  function showPrompt(msg, defaultValue) {
    return queueDialog(function () { return showPromptNow(msg, defaultValue); });
  }
  function showAlertNow(msg) {
    return new Promise(function (resolve) {
      var overlay = $('appAlertOverlay');
      if (!overlay) { window.alert(msg); resolve(); return; } // defensive fallback
      $('appAlertMsg').textContent = msg;
      if ($('appAlertInput')) $('appAlertInput').style.display = 'none'; // reset any leftover showPrompt() state
      var actions = $('appAlertActions');
      actions.innerHTML = '<button class="btn btn-accent" id="appAlertOk" type="button">' + escapeHtml(t('ok')) + '</button>';
      overlay.style.display = 'flex';
      $('appAlertOk').focus();
      $('appAlertOk').addEventListener('click', function handler() {
        overlay.style.display = 'none';
        $('appAlertOk').removeEventListener('click', handler);
        resolve();
      });
    });
  }
  function showConfirmNow(msg) {
    return new Promise(function (resolve) {
      var overlay = $('appAlertOverlay');
      if (!overlay) { resolve(window.confirm(msg)); return; } // defensive fallback
      $('appAlertMsg').textContent = msg;
      if ($('appAlertInput')) $('appAlertInput').style.display = 'none'; // reset any leftover showPrompt() state
      var actions = $('appAlertActions');
      actions.innerHTML =
        '<button class="btn btn-ghost" id="appAlertCancel" type="button">' + escapeHtml(t('cancel')) + '</button>' +
        '<button class="btn btn-accent" id="appAlertOk" type="button">' + escapeHtml(t('ok')) + '</button>';
      overlay.style.display = 'flex';
      $('appAlertOk').focus();
      function cleanup(result) {
        overlay.style.display = 'none';
        resolve(result);
      }
      $('appAlertOk').addEventListener('click', function () { cleanup(true); }, { once: true });
      $('appAlertCancel').addEventListener('click', function () { cleanup(false); }, { once: true });
    });
  }
  // Text-input variant of the same in-app dialog — replaces native prompt().
  // Returns a Promise resolving to the trimmed string, or null if the person
  // cancelled (never silently substitutes a default on Cancel — only an
  // explicit OK with empty text falls back to the caller's default).
  function showPromptNow(msg, defaultValue) {
    return new Promise(function (resolve) {
      var overlay = $('appAlertOverlay');
      var input = $('appAlertInput');
      if (!overlay || !input) { resolve(window.prompt(msg, defaultValue || '')); return; } // defensive fallback
      $('appAlertMsg').textContent = msg;
      input.value = defaultValue || '';
      input.style.display = 'block';
      var actions = $('appAlertActions');
      actions.innerHTML =
        '<button class="btn btn-ghost" id="appAlertCancel" type="button">' + escapeHtml(t('cancel')) + '</button>' +
        '<button class="btn btn-accent" id="appAlertOk" type="button">' + escapeHtml(t('ok')) + '</button>';
      overlay.style.display = 'flex';
      input.focus();
      function cleanup(result) {
        input.style.display = 'none';
        overlay.style.display = 'none';
        resolve(result);
      }
      $('appAlertOk').addEventListener('click', function () { cleanup(input.value.trim()); }, { once: true });
      $('appAlertCancel').addEventListener('click', function () { cleanup(null); }, { once: true });
      input.addEventListener('keydown', function onKey(e) {
        if (e.key === 'Enter') { e.preventDefault(); input.removeEventListener('keydown', onKey); $('appAlertOk').click(); }
      });
    });
  }

  // ---------- DV quick exit ----------
  // Standard domestic-violence-site pattern: immediately replace this tab's history
  // entry with a neutral page, so a "back" button press can't reveal this app was
  // open. Only wired to the DV onboarding question itself (not shown globally),
  // per the goal of not permanently signaling "this phone has DV content" to anyone
  // who might later pick up the device.
  function quickExit() {
    try { window.location.replace('https://www.weather.gov'); } catch (e) { window.location.href = 'https://www.weather.gov'; }
  }

  // ---------- Emergency / low-battery mode ----------
  // Pure DOM, zero network calls, zero images — the fastest possible path to the
  // handful of numbers that matter most when someone has minutes of battery left.
  function renderEmergency() {
    var items = [
      { label: '911 — ' + (lang === 'es' ? 'Emergencia que amenaza la vida' : 'Life-threatening emergency'), href: 'tel:911' },
      { label: t('crisis211') + ' — ' + (lang === 'es' ? 'Todas las necesidades básicas' : 'All basic needs'), href: 'tel:211' },
      { label: '988 — ' + (lang === 'es' ? 'Crisis / suicidio' : 'Crisis / suicide'), href: 'tel:988' },
      { label: t('crisisDV') + ' — 1-877-737-0242', href: 'tel:18777370242' },
      { label: t('crisisVet') + ' — 1-877-424-3838', href: 'tel:18774243838' }
    ];
    $('emergencyList').innerHTML = items.map(function (i) {
      return '<a href="' + i.href + '" style="display:block;text-align:center;font-size:1.1rem;padding:14px;background:#7f1d1d;border-radius:12px;color:#fff;font-weight:800">' + escapeHtml(i.label) + '</a>';
    }).join('');
  }
  function distMiles(lat1, lon1, lat2, lon2) {
    if (lat1 == null || lat2 == null) return 9999;
    var R = 3958.8;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function phoneHref(phone) {
    if (!phone) return null;
    if (String(phone).trim() === '211') return 'tel:211';
    if (String(phone).indexOf('988') !== -1) return 'tel:988';
    var m = String(phone).match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/);
    if (m) {
      var n = m[0].replace(/\D/g, '');
      if (n.length === 10) n = '1' + n;
      if (n.length >= 10) return 'tel:+' + n;
    }
    return null;
  }
  function mapsHref(addr) {
    if (!addr || /phone|multiple|citywide|confirm|varies|confidential|not published|given at intake|call the access line/i.test(addr)) return null;
    // Google Maps' web search URL works reliably in any mobile browser (Android
    // Chrome, budget-phone browsers, and iOS Safari alike) without needing the
    // Apple Maps app installed — more universal than an apple.com link for a
    // majority-Android low-cost-phone audience.
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addr);
  }

  // ---------- Resource status badge (standardized vocabulary) ----------
  // Heuristic, deterministic, and honest: it only ever downgrades to "call to
  // confirm" or "unknown" rather than upgrading to a stronger claim than the
  // data supports. Never claims a resource is open right now — this app has
  // no live availability feed (see README "What this app does NOT guarantee").
  function resourceStatusBadge(r) {
    if (r.appointmentRequired === true) return { key: 'statusApptRequired', cls: 'id' };
    if (r.referralRequired === true) return { key: 'statusReferral', cls: 'id' };
    if (r.walkIn === true) return { key: 'statusWalkIn', cls: 'low' };
    var notes = ((r.notes || '') + ' ' + (r.hours || '')).toLowerCase();
    if (/appointment only|appointment-only|by appointment|call to screen|call for appointment|screen(ing)? call/.test(notes)) {
      return { key: 'statusApptRequired', cls: 'id' };
    }
    if (/referral only|referral required|referred by/.test(notes)) {
      return { key: 'statusReferral', cls: 'id' };
    }
    if (/walk-?in/.test(notes)) {
      return { key: 'statusWalkIn', cls: 'low' };
    }
    if (/call ahead|call first|call to confirm|call before|see individual|confirm|varies/.test(notes)) {
      return { key: 'statusCallConfirm', cls: 'tag' };
    }
    if (r.hours && r.hours.trim()) {
      return { key: 'statusPublished', cls: 'tag' };
    }
    return { key: 'statusUnknown', cls: 'tag' };
  }

  // Fills in honest defaults for the new trust/provenance schema fields when a
  // resource entry doesn't set them explicitly. This is applied at render time
  // — it never mutates seattle_data.js — so "no verifiedAt" always and only
  // ever means "shown as unconfirmed," never silently treated as verified.
  function normalizeResource(r) {
    if (!r) return r;
    if (r.verificationStatus === undefined) r.verificationStatus = 'unconfirmed';
    return r;
  }

  // ---------- Search synonyms (deterministic, offline, no backend) ----------
  // Maps common plain-language terms a person might actually type to the
  // resource `type` values they should match, layered on top of the existing
  // substring search over name/notes/addr/type/tags (search() below still runs
  // the literal query too, so this only ever widens results, never narrows).
  var SEARCH_SYNONYMS = {
    dog: ['pets'], cat: ['pets'], pet: ['pets'],
    doctor: ['medical'], nurse: ['medical'], sick: ['medical'], clinic: ['medical'],
    teeth: ['dental'], dentist: ['dental'],
    therapy: ['mentalhealth'], counseling: ['mentalhealth'], depressed: ['mentalhealth'], anxiety: ['mentalhealth'],
    bus: ['transport'], orca: ['transport'], ride: ['transport'],
    phone: ['charging'], charge: ['charging'], wifi: ['charging'], internet: ['charging'],
    id: ['documents'], identification: ['documents'], birth: ['documents'],
    job: ['work'], jobs: ['work'], employment: ['work'], hire: ['work'], labor: ['work'],
    housing: ['housinghelp'], apartment: ['housinghelp'], rent: ['housinghelp'],
    lawyer: ['legal'], court: ['legal'],
    money: ['benefits'], cash: ['benefits'], snap: ['benefits'], foodstamps: ['benefits'],
    laundry: ['shower'], wash: ['shower'], hygiene: ['shower'],
    hungry: ['meal', 'foodbank'], food: ['meal', 'foodbank'], eat: ['meal', 'foodbank'],
    sleep: ['shelter', 'village'], bed: ['shelter', 'village'], night: ['shelter', 'village'],
    car: ['safeparking'], van: ['safeparking'], rv: ['safeparking'],
    cold: ['warming'], hot: ['warming'], heat: ['warming'],
    detox: ['recovery'], sober: ['recovery'], addiction: ['recovery'],
    mail: ['mail'], locker: ['storage'], library: ['library'], book: ['library']
  };
  function expandSearchTypes(q) {
    var words = q.split(/\s+/);
    var types = {};
    words.forEach(function (w) {
      var syn = SEARCH_SYNONYMS[w];
      if (syn) syn.forEach(function (t) { types[t] = true; });
    });
    return Object.keys(types);
  }
  function smsShareBody(r) {
    return [r.name, r.addr, r.phone, r.hours].filter(Boolean).join('\n');
  }
  function iconFor(r) {
    var meta = (typeof TYPE_META !== 'undefined' && TYPE_META[r.type]) || { icon: '*' };
    return meta.icon;
  }
  function labelFor(r) {
    var meta = (typeof TYPE_META !== 'undefined' && TYPE_META[r.type]) || { label: r.type };
    return meta.label;
  }
  function detectFlags(r) {
    var flags = [];
    var notes = (r.notes || '').toLowerCase();
    if (r.free === true || notes.indexOf('no id') !== -1 || notes.indexOf('low-barrier') !== -1 ||
        notes.indexOf('low barrier') !== -1 || notes.indexOf('no sobriety') !== -1) {
      flags.push({ cls: 'low', text: 'Low-barrier' });
    }
    if (notes.indexOf('id required') !== -1 || notes.indexOf('valid id') !== -1 ||
        notes.indexOf('state id required') !== -1 || notes.indexOf('photo id') !== -1) {
      flags.push({ cls: 'id', text: 'ID may be required' });
    }
    if ((r.tags || []).indexOf('pet') !== -1 || notes.indexOf('pet-friendly') !== -1 ||
        notes.indexOf('pets allowed') !== -1 || notes.indexOf('service animals') !== -1) {
      flags.push({ cls: 'tag', text: 'Pets' });
    }
    return flags;
  }
  function isBoosted(r) {
    if (!profile || !profile.completedAt) return false;
    return specialtyBoost(r, profile) > 0;
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function applyI18n() {
    $('appTitle').textContent = t('appTitle');
    $('appSub').textContent = t('appSub');
    $('search').placeholder = t('searchPh');
    $('btnProfile').textContent = t('me');
    $('btnNeighborhood').textContent = t('area');
    $('btnCheat').textContent = t('list');
    $('btnResetFilters').textContent = t('clear');
    $('disclaimer').innerHTML = t('disclaimer') + ' <span style="opacity:.75">(' + t('dataReviewedLabel') + ': ' + DATA_LAST_REVIEWED + ')</span>';
    $('offlineBanner').textContent = t('offline');
    $('crisis988').textContent = t('crisis988');
    $('crisis211').textContent = t('crisis211');
    $('crisisDV').textContent = t('crisisDV');
    $('crisisVet').textContent = t('crisisVet');
    $('obSkip').textContent = t('skip');
    $('hoodCancel').textContent = t('cancel');
    $('hoodGeo').textContent = t('useGps');
    $('hoodTitle').textContent = t('hoodTitle');
    $('hoodHint').textContent = t('hoodHint');
    $('cheatClose').textContent = t('close');
    $('cheatCopy').textContent = t('copy');
    $('cheatTitle').textContent = t('cheatTitle');
    $('noteHint').textContent = t('notePrivate');
    $('noteCancel').textContent = t('cancel');
    $('noteSave').textContent = t('save');
    $('btnLang').textContent = lang === 'en' ? 'ES' : 'EN';
    $('btnLang').setAttribute('aria-label', t('toggleLangLabel'));
    $('btnMore').setAttribute('aria-label', t('moreOptionsLabel'));
    if ($('btnEmergency')) $('btnEmergency').setAttribute('title', lang === 'es' ? 'Números de emergencia' : 'Emergency numbers');
    var map = { all: 'navAll', shelter: 'navShelter', meal: 'navFood', shower: 'navHygiene', medical: 'navHealth', work: 'navWork' };
    document.querySelectorAll('nav.bottom button').forEach(function (btn) {
      var label = btn.querySelector('.nav-label');
      if (label && map[btn.dataset.view]) label.textContent = t(map[btn.dataset.view]);
    });
    updateWeatherBanner();
    renderNeedPicker();
  }

  function updateWeatherBanner() {
    var el = $('weatherBanner');
    var btn = $('btnWeather');
    if (weatherMode === 'cold') {
      el.className = 'weather-banner on';
      el.textContent = t('weatherCold');
      if (btn) { btn.textContent = t('weatherBtnCold'); btn.title = t('weatherBtnTitle'); }
    } else if (weatherMode === 'heat') {
      el.className = 'weather-banner on heat';
      el.textContent = t('weatherHeat');
      if (btn) { btn.textContent = t('weatherBtnHeat'); btn.title = t('weatherBtnTitle'); }
    } else {
      el.className = 'weather-banner';
      el.textContent = '';
      if (btn) { btn.textContent = t('weatherBtnOff'); btn.title = t('weatherBtnTitle'); }
    }
  }

  function renderSystems(list) {
    var systems = list.filter(function (r) { return r.type === 'system'; }).slice(0, 10);
    $('systems').innerHTML = systems.map(function (r) {
      var href = phoneHref(r.phone) || '#';
      var short = r.name.replace(/ — .*/, '').replace(/King County |Washington |National |Call Center for Homeless /g, '').slice(0, 26);
      return '<a class="sys-chip" href="' + href + '">' + escapeHtml(short) + '</a>';
    }).join('');
  }

  var LEVEL_NAMES = ['', 'Scout', 'Planner', 'Navigator', 'Stabilizer', 'Connector', 'Advocate', 'Anchor'];

  function renderProgressHeader() {
    var el = $('progressHeader');
    if (!el) return;
    var p = loadProgress();
    var levelName = LEVEL_NAMES[p.level] || 'Scout';
    var currentThresh = LEVEL_THRESHOLDS[p.level - 1] || 0;
    var nextThresh = LEVEL_THRESHOLDS[p.level] != null ? LEVEL_THRESHOLDS[p.level] : null;
    var pct = nextThresh
      ? Math.max(0, Math.min(100, Math.round(((p.xp - currentThresh) / (nextThresh - currentThresh)) * 100)))
      : 100;
    var nextLabel = nextThresh ? ((nextThresh - p.xp) + ' XP to ' + (LEVEL_NAMES[p.level + 1] || 'next level')) : 'Highest level reached';
    var momentumLabel = p.momentum.current > 0 ? p.momentum.current + '-day momentum' : 'Get started today';
    el.innerHTML =
      '<div class="progress-head-row">' +
        '<span class="progress-level-badge">Lv ' + p.level + ' \u00B7 ' + escapeHtml(levelName) + '</span>' +
        '<span class="progress-xp">' + p.xp + ' XP</span>' +
      '</div>' +
      '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="progress-sub-row">' +
        '<span>' + escapeHtml(nextLabel) + '</span>' +
        '<span>' + escapeHtml(momentumLabel) + '</span>' +
      '</div>';
  }

  function renderTodayPlan() {
    var el = $('todayPlan');
    if (!el) return;
    var today = new Date().getDay();
    var planner = loadPlanner();
    var plan = planner[today] || { goal: 0, needs: {} };
    var goalHtml = plan.goal > 0
      ? '\uD83D\uDCB5 Today\u2019s goal: <b>$' + plan.goal + '</b>'
      : 'Set a daily goal in the Planner \u2192';
    var needKeys = Object.keys(plan.needs || {});
    var needsHtml = needKeys.length
      ? needKeys.map(function (k) {
          var opt = NEED_OPTIONS.filter(function (o) { return o.key === k; })[0];
          var done = plan.needs[k];
          return '<span class="home-need-pill' + (done ? ' done' : '') + '">' + (done ? '\u2713 ' : '') + (opt ? opt.icon + ' ' + opt.label : k) + '</span>';
        }).join('')
      : '<span class="home-need-pill">No tasks set for today yet</span>';

    var smartPlanHtml = '';
    if (isFeatureUnlocked('smart_day_plan')) {
      var unmetKeys = needKeys.filter(function (k) { return !plan.needs[k]; });
      var suggestionBlocks = unmetKeys.map(function (k) {
        var opt = NEED_OPTIONS.filter(function (o) { return o.key === k; })[0];
        var matches = suggestResourcesForNeed(k, 3);
        if (!matches.length) return '';
        var cardsHtml = matches.map(function (r) {
          var call = phoneHref(r.phone);
          var dir = mapsHref(r.addr);
          return '<div class="smart-suggestion" data-suggest-id="' + r.id + '" data-suggest-need="' + k + '">' +
            '<div class="smart-suggestion-name">' + escapeHtml(r.name) + '</div>' +
            (r.addr ? '<div class="smart-suggestion-addr">' + escapeHtml(r.addr) + '</div>' : '') +
            '<div class="smart-suggestion-actions">' +
            (call ? '<a href="' + call + '" data-suggest-action="call">Call</a>' : '') +
            (dir ? '<a href="' + dir + '" target="_blank" rel="noopener" data-suggest-action="map">Map</a>' : '') +
            '</div></div>';
        }).join('');
        return '<div class="smart-suggestion-group"><div class="smart-suggestion-label">' +
          (opt ? opt.icon + ' Nearby for ' + opt.label : 'Nearby matches') + '</div>' + cardsHtml + '</div>';
      }).filter(Boolean).join('');
      if (suggestionBlocks) {
        smartPlanHtml = '<div class="smart-day-plan">' + suggestionBlocks + '</div>';
      }
    }

    el.innerHTML = '<h2>\uD83D\uDCC5 Today\u2019s plan</h2>' +
      '<div class="goal-line">' + goalHtml + '</div>' +
      '<div class="home-today-needs">' + needsHtml + '</div>' +
      smartPlanHtml +
      '<button type="button" class="btn-mini" id="todayPlanOpen">Open Planner</button>';
    var openBtn = $('todayPlanOpen');
    if (openBtn) openBtn.addEventListener('click', function () { renderPlanner(); $('plannerOverlay').style.display = 'flex'; });

    if (smartPlanHtml) {
      var groupEls = el.querySelectorAll('.smart-suggestion');
      for (var gi = 0; gi < groupEls.length; gi++) {
        (function (cardEl) {
          var resId = cardEl.getAttribute('data-suggest-id');
          var needKey = cardEl.getAttribute('data-suggest-need');
          var category = NEED_KEY_TO_STABILITY[needKey] || null;
          var actionLinks = cardEl.querySelectorAll('[data-suggest-action]');
          for (var ai = 0; ai < actionLinks.length; ai++) {
            actionLinks[ai].addEventListener('click', function () {
              // Reuses the existing 'plan_created' vocabulary — this is a real planning
              // action (turning a checked need into a concrete place to go), not a new
              // action type. Dedup is per resource+need+day so re-clicking Call/Map on
              // the same suggestion later the same day doesn't farm XP, but a genuinely
              // new day (or a different suggested resource) counts again, same as the
              // existing plan_created dedup pattern used elsewhere in renderPlanner().
              logAction('plan_created', {
                dedupKey: 'smart:' + resId + ':' + needKey + ':' + dateToStr(new Date()),
                category: category,
                feature: 'smart_day_plan',
                needKey: needKey,
                resourceId: resId
              });
            });
          }
        })(groupEls[gi]);
      }
    }
  }

  /**
   * Narrow Next Best Action (Level 3): a single, explainable suggestion for what to
   * do next, built from getNextBestAction() (today's planner needs + matching
   * resource + GPS distance only -- no hours, no travel time, no urgency).
   *
   * The suggested resource is rendered with the EXACT SAME renderCard() used
   * everywhere else in the app, so its Call/Map/Save/Visit/Schedule/Note buttons are
   * the real, unmodified production buttons -- not a second implementation. Displaying
   * the suggestion itself never calls logAction(); only actually using one of those
   * real buttons does, through the same code that already handles every other card.
   */
  function renderNextBestAction() {
    var el = $('nextBestAction');
    if (!el) return;
    if (!isFeatureUnlocked('next_best_action')) { el.innerHTML = ''; return; }

    var suggestion = getNextBestAction();
    if (!suggestion) { el.innerHTML = ''; return; }

    var distLabel = (suggestion.distanceMiles != null)
      ? ' \u00B7 ~' + (suggestion.distanceMiles < 10 ? suggestion.distanceMiles.toFixed(1) : Math.round(suggestion.distanceMiles)) + ' mi away'
      : '';
    var sentence = 'You planned ' + (suggestion.needLabel || suggestion.needKey).toLowerCase() +
      ' today. Here\u2019s the closest matching option' + distLabel + '.';

    el.innerHTML =
      '<h2>\uD83C\uDFAF Next best action</h2>' +
      '<p class="nba-sentence">' + escapeHtml(sentence) + '</p>' +
      renderCard(suggestion.resource);

    // Bind the SAME action handlers used for every other rendered card, scoped to
    // this container instead of #list -- this calls the existing toggleFavorite(),
    // toggleVisitedToday(), openNote(), and prefillEventFormFromResource() functions
    // directly; it does not reimplement any of their logic or their logAction() calls.
    bindCardActionHandlers(el);
  }

  function renderNextSteps() {
    var el = $('nextSteps');
    if (!profile || !profile.completedAt) { el.innerHTML = ''; return; }
    var steps = [];
    if (profile.dv) {
      steps.push('Call the <a href="tel:18777370242">DV Hotline 1-877-737-0242</a> for confidential shelter.');
      steps.push('Dial <a href="tel:211">211</a> and say you need domestic violence shelter.');
    }
    if (profile.veteran) {
      steps.push('Call <a href="tel:18774243838">National Homeless Veterans 877-424-3838</a>.');
      steps.push('Or King County Veterans Program <a href="tel:12062638387">(206) 263-8387</a>.');
    }
    if (profile.ageGroup === 'youth') {
      steps.push('Youth/YA line: <a href="tel:18004957802">800-495-7802</a> (YouthCare).');
      steps.push('New Horizons <a href="tel:12063740866">(206) 374-0866</a> · ROOTS <a href="tel:12066321635">(206) 632-1635</a>.');
    }
    if (profile.hasKids) {
      steps.push('Family Shelter Access: <a href="tel:12062451026">(206) 245-1026</a> — call every day from 9am.');
    }
    if (profile.vehicle) {
      steps.push('Vehicle Resident Outreach: <a href="tel:12066008486">(206) 600-8486</a>.');
      steps.push('Ask about safe parking lots (Urban League / churches).');
    }
    if (!steps.length) {
      steps.push('Start with <a href="tel:211">211</a> for personalized navigation.');
      steps.push('For crisis: <a href="tel:988">988</a>.');
    }
    el.innerHTML = '<div class="next-steps"><h3>' + t('nextSteps') + '</h3><ol>' +
      steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol></div>';
  }

  function renderCard(r) {
    var call = phoneHref(r.phone);
    var dir = mapsHref(r.addr);
    var boost = isBoosted(r);
    var flags = detectFlags(r);
    var notesMap = loadNotes();
    var localNote = notesMap[r.id];
    var d = (userLat != null && r.lat != null) ? distMiles(userLat, userLon, r.lat, r.lon) : null;
    // "mi" here is always straight-line distance (see distMiles()), never a route or
    // walking-time estimate — the app has no travel-time data (see README "Leave By").
    var distStr = (d != null && d < 9000) ? ' · ~' + (d < 10 ? d.toFixed(1) : Math.round(d)) + ' mi (straight-line)' : '';
    var flagHtml = flags.map(function (f) { return '<span class="flag ' + f.cls + '">' + f.text + '</span>'; }).join('');
    if (boost) flagHtml += '<span class="flag boost">For you</span>';
    (r.tags || []).forEach(function (tg) {
      if (tg !== 'pet') flagHtml += '<span class="flag tag">' + escapeHtml(tg) + '</span>';
    });
    var shareHref = 'sms:?&body=' + encodeURIComponent(smsShareBody(r));
    var favs = loadFavorites();
    var isFav = !!favs[r.id];
    var visited = isVisitedToday(r.id);

    // Worked Before (Level 4): a purely passive label built only from the existing
    // srf_favorites / srf_visited data that already exists for other UI (the heart and
    // checkmark icons). No new state, no history, no frequency claim — exactly "Saved"
    // and/or "Visited before", per the approved wording, nothing stronger.
    var workedBeforeHtml = '';
    if (isFeatureUnlocked('worked_before')) {
      var everVisited = !!(loadVisited() || {})[r.id];
      var wbLabels = [];
      if (isFav) wbLabels.push('Saved');
      if (everVisited) wbLabels.push('Visited before');
      if (wbLabels.length) {
        workedBeforeHtml = '<span class="worked-before">' + wbLabels.join(' \u00B7 ') + '</span>';
      }
    }

    var badge = resourceStatusBadge(r);
    var badgeHtml = '<div class="call-first">' + escapeHtml(t(badge.key)) + ' \u00B7 ' + escapeHtml(t('callFirst')) + '</div>';
    var trustHtml = (r.verificationStatus === 'verified')
      ? '<div class="meta" style="color:var(--accent2)">\u2713 ' + escapeHtml(t('verifiedLabel')) + (r.verifiedAt ? ' (' + escapeHtml(r.verifiedAt) + ')' : '') + '</div>'
      : '';

    return '<article class="card' + (r.type === 'system' ? ' system' : '') + (boost ? ' boosted' : '') + '" data-id="' + r.id + '">' +
      '<div class="card-top"><span class="icon" aria-hidden="true">' + iconFor(r) + '</span><div style="flex:1;min-width:0">' +
      '<h2>' + escapeHtml(r.name) + '</h2>' +
      '<div class="meta">' + escapeHtml(typeLabel(r.type, lang)) + (r.hours ? ' · ' + escapeHtml(r.hours) : '') + distStr + '</div>' +
      (r.addr ? '<div class="meta">' + escapeHtml(r.addr) + '</div>' : '') +
      (r.pay ? '<div class="meta pay-line">\uD83D\uDCB0 ' + escapeHtml(r.pay) + '</div>' : '') +
      trustHtml +
      workedBeforeHtml +
      '</div>' +
      '<div class="card-icon-actions">' +
      '<button type="button" class="icon-toggle fav' + (isFav ? ' on' : '') + '" data-fav="' + r.id + '" aria-label="' + escapeHtml(t('favLabel')) + '" aria-pressed="' + isFav + '">' + (isFav ? '\u2665' : '\u2661') + '</button>' +
      '<button type="button" class="icon-toggle visit' + (visited ? ' on' : '') + '" data-visit="' + r.id + '" aria-label="' + escapeHtml(t('visitLabel')) + '" aria-pressed="' + visited + '">' + (visited ? '\u2713' : '\u25CB') + '</button>' +
      '</div></div>' +
      (r.notes ? '<p class="notes">' + escapeHtml(r.notes) + '</p>' : '') +
      badgeHtml +
      (flagHtml ? '<div class="flags">' + flagHtml + '</div>' : '') +
      (localNote ? '<div class="local-note">Note: ' + escapeHtml(localNote.text) + '</div>' : '') +
      '<div class="actions">' +
      (call ? '<a class="call" href="' + call + '" aria-label="' + escapeHtml(t('callLabel')) + '">' + escapeHtml(t('callLabel')) + '</a>' : '') +
      (dir ? '<a class="dir" href="' + dir + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHtml(t('mapLabel')) + '">' + escapeHtml(t('mapLabel')) + '</a>' : '') +
      '<a class="share" href="' + shareHref + '" aria-label="' + escapeHtml(t('shareLabel')) + '">' + escapeHtml(t('shareLabel')) + '</a>' +
      '<button type="button" class="note-btn" data-note="' + r.id + '" aria-label="' + escapeHtml(t('noteLabel')) + '">' + escapeHtml(t('noteLabel')) + '</button>' +
      (r.type !== 'system' ? '<button type="button" class="note-btn" data-schedule="' + r.id + '" aria-label="' + escapeHtml(t('scheduleLabel')) + '">\uD83D\uDCC6 ' + escapeHtml(t('scheduleLabel')) + '</button>' : '') +
      '</div></article>';
  }

  function getVisible() {
    if (typeof SEATTLE_RESOURCES === 'undefined') return [];
    var list = filterResources(SEATTLE_RESOURCES, profile);
    list = sortResourcesForProfile(list, profile);

    if (weatherMode === 'cold' || weatherMode === 'heat') {
      var key = weatherMode === 'cold' ? 'warming' : 'cooling';
      list = list.slice().sort(function (a, b) {
        if (a.type === 'system') return -1;
        if (b.type === 'system') return 1;
        var aW = a.type === 'warming' || (a.name || '').toLowerCase().indexOf(key) !== -1 ? 1 : 0;
        var bW = b.type === 'warming' || (b.name || '').toLowerCase().indexOf(key) !== -1 ? 1 : 0;
        return bW - aW;
      });
    }

    if (userLat != null) {
      var systems = list.filter(function (r) { return r.type === 'system'; });
      var rest = list.filter(function (r) { return r.type !== 'system'; });
      rest.sort(function (a, b) {
        return distMiles(userLat, userLon, a.lat, a.lon) - distMiles(userLat, userLon, b.lat, b.lon);
      });
      list = systems.concat(rest);
    }

    if (viewFilter === 'favorites') {
      var favIds = loadFavorites();
      list = list.filter(function (r) { return !!favIds[r.id]; });
    } else if (viewFilter !== 'all') {
      var foodTypes = ['meal', 'foodbank'];
      var healthTypes = ['medical', 'dental', 'mentalhealth', 'recovery'];
      var hygieneTypes = ['shower', 'daycenter'];
      if (viewFilter === 'meal') list = list.filter(function (r) { return foodTypes.indexOf(r.type) !== -1 || r.type === 'system'; });
      else if (viewFilter === 'medical') list = list.filter(function (r) { return healthTypes.indexOf(r.type) !== -1 || r.type === 'system'; });
      else if (viewFilter === 'shower') list = list.filter(function (r) { return hygieneTypes.indexOf(r.type) !== -1 || r.type === 'system'; });
      else list = list.filter(function (r) {
        return r.type === viewFilter || r.type === 'system' || (r.type === 'safeparking' && viewFilter === 'shelter');
      });
    }

    if (searchQuery.trim()) {
      var q = searchQuery.trim().toLowerCase();
      var synTypes = expandSearchTypes(q);
      list = list.filter(function (r) {
        return (r.name || '').toLowerCase().indexOf(q) !== -1 ||
          (r.notes || '').toLowerCase().indexOf(q) !== -1 ||
          (r.addr || '').toLowerCase().indexOf(q) !== -1 ||
          (r.type || '').toLowerCase().indexOf(q) !== -1 ||
          (r.tags || []).some(function (tg) { return String(tg).indexOf(q) !== -1; }) ||
          synTypes.indexOf(r.type) !== -1 || r.type === 'system';
      });
    }
    return list.map(normalizeResource);
  }

  function render() {
    var list = getVisible();
    var nonSystem = list.filter(function (r) { return r.type !== 'system'; });
    $('countLabel').textContent = nonSystem.length + ' ' + (profile && profile.completedAt ? t('matched') : t('resources'));
    $('btnResetFilters').style.display = searchQuery ? 'inline-block' : 'none';

    renderSystems(filterResources(typeof SEATTLE_RESOURCES !== 'undefined' ? SEATTLE_RESOURCES : [], profile));
    renderNextSteps();
    renderProgressHeader();
    renderTodayPlan();
    renderNextBestAction();

    var systems = list.filter(function (r) { return r.type === 'system'; });
    var rest = list.filter(function (r) { return r.type !== 'system'; });
    var html = '';
    if (systems.length && viewFilter === 'all' && !searchQuery) {
      html += '<div class="section-label">' + t('startHere') + '</div>';
      html += systems.map(renderCard).join('');
      html += '<div class="section-label">' + t('forYou') + '</div>';
    }
    var emptyMsg = viewFilter === 'favorites'
      ? '<div class="empty">' + escapeHtml(t('noFavorites')) + '</div>'
      // Per design principle: an empty search result must never read as "there is no
      // help" — it means this curated offline list has no match, not that no help
      // exists. Always give a live escalation path (211) rather than a dead end.
      : '<div class="empty">' + escapeHtml(t('noMatch')) +
        '<div style="margin-top:10px"><a class="call" href="tel:211" style="display:inline-block">' +
        escapeHtml(t('crisis211')) + ': ' + escapeHtml(t('callLabel')) + ' 211</a></div></div>';
    html += rest.map(renderCard).join('') || emptyMsg;
    $('list').innerHTML = html;

    bindCardActionHandlers($('list'));
  }

  /**
   * Binds the four real, production card-action handlers (Note, Favorite, Visit,
   * Schedule) to every matching button inside the given container. This is the exact
   * same logic that has always driven #list's cards -- extracted here so
   * renderNextBestAction() can reuse it verbatim for its own container instead of
   * reimplementing toggleFavorite()/toggleVisitedToday()/openNote()/
   * prefillEventFormFromResource() a second time.
   */
  function bindCardActionHandlers(container) {
    if (!container) return;
    var noteBtns = container.querySelectorAll('[data-note]');
    for (var i = 0; i < noteBtns.length; i++) {
      noteBtns[i].addEventListener('click', (function (id) {
        return function () { openNote(id); };
      })(noteBtns[i].getAttribute('data-note')));
    }
    var favBtns = container.querySelectorAll('[data-fav]');
    for (var j = 0; j < favBtns.length; j++) {
      favBtns[j].addEventListener('click', (function (id, btn) {
        return function () {
          var on = toggleFavorite(id);
          btn.classList.toggle('on', on);
          btn.setAttribute('aria-pressed', String(on));
          btn.textContent = on ? '\u2665' : '\u2661';
          if (on) {
            var resource = (typeof SEATTLE_RESOURCES !== 'undefined' ? SEATTLE_RESOURCES : []).filter(function (r) { return r.id === id; })[0];
            logAction('resource_saved', { dedupKey: id, category: stabilityCategoryForResource(resource) });
          }
          if (viewFilter === 'favorites') render();
        };
      })(favBtns[j].getAttribute('data-fav'), favBtns[j]));
    }
    var visitBtns = container.querySelectorAll('[data-visit]');
    for (var k = 0; k < visitBtns.length; k++) {
      visitBtns[k].addEventListener('click', (function (id, btn) {
        return function () {
          var on = toggleVisitedToday(id);
          btn.classList.toggle('on', on);
          btn.setAttribute('aria-pressed', String(on));
          btn.textContent = on ? '\u2713' : '\u25CB';
          if (on) {
            var resource = (typeof SEATTLE_RESOURCES !== 'undefined' ? SEATTLE_RESOURCES : []).filter(function (r) { return r.id === id; })[0];
            var todayKey = new Date().toDateString();
            logAction('service_checked_in', { dedupKey: id + ':' + todayKey, category: stabilityCategoryForResource(resource) });
          }
        };
      })(visitBtns[k].getAttribute('data-visit'), visitBtns[k]));
    }
    var schedBtns = container.querySelectorAll('[data-schedule]');
    for (var s = 0; s < schedBtns.length; s++) {
      schedBtns[s].addEventListener('click', (function (id) {
        return function () {
          var resource = (typeof SEATTLE_RESOURCES !== 'undefined' ? SEATTLE_RESOURCES : []).filter(function (r) { return r.id === id; })[0];
          if (resource) {
            prefillEventFormFromResource(resource);
            if (resource.type === 'work') {
              logAction('work_resource_viewed', { dedupKey: resource.id + ':' + new Date().toDateString() });
            }
          }
        };
      })(schedBtns[s].getAttribute('data-schedule')));
    }
  }

  function openOnboarding(force) {
    if (!force && profile && profile.completedAt) return;
    obStep = 0;
    obDraft = Object.assign(createEmptyProfile(), profile || {});
    $('onboard').style.display = 'flex';
    showObStep();
  }

  function showObStep() {
    var q = ONBOARDING_QUESTIONS[obStep];
    if (!q) { finishOnboarding(); return; }
    $('obTitle').textContent = (lang === 'es' && q.questionEs) ? q.questionEs : q.question;
    var whyText = (lang === 'es' && q.whyEs) ? q.whyEs : (q.why || '');
    $('obHint').textContent = 'Question ' + (obStep + 1) + ' of ' + ONBOARDING_QUESTIONS.length + (whyText ? ' \u2014 ' + whyText : '');
    var body = '';
    if (q.type === 'single') {
      body = '<div class="q"><div class="opts">' + q.options.map(function (o) {
        var sel = obDraft[q.id] === o.value ? ' selected' : '';
        var lbl = (lang === 'es' && o.labelEs) ? o.labelEs : o.label;
        return '<label class="opt' + sel + '"><input type="radio" name="ob" value="' + o.value + '" ' +
          (sel ? 'checked' : '') + '/> ' + escapeHtml(lbl) + '</label>';
      }).join('') + '</div></div>';
    } else {
      var yesSel = obDraft[q.id] === true ? ' selected' : '';
      var noSel = obDraft[q.id] === false ? ' selected' : '';
      var yesLbl = (lang === 'es' && q.yesLabelEs) ? q.yesLabelEs : q.yesLabel;
      var noLbl = (lang === 'es' && q.noLabelEs) ? q.noLabelEs : q.noLabel;
      body = '<div class="q"><div class="opts">' +
        '<label class="opt' + yesSel + '"><input type="radio" name="ob" value="yes" ' +
        (obDraft[q.id] === true ? 'checked' : '') + '/> ' + escapeHtml(yesLbl) + '</label>' +
        '<label class="opt' + noSel + '"><input type="radio" name="ob" value="no" ' +
        (obDraft[q.id] === false ? 'checked' : '') + '/> ' + escapeHtml(noLbl) + '</label></div></div>';
    }
    if (q.quickExit) {
      body += '<button type="button" id="obQuickExit" style="width:100%;margin-top:14px;padding:12px;border-radius:10px;border:1px solid var(--surface2);background:transparent;color:var(--muted);font-weight:700;font-size:.8rem">' + escapeHtml(t('dvExit')) + '</button>';
    }
    $('obBody').innerHTML = body;
    if (q.quickExit && $('obQuickExit')) {
      $('obQuickExit').addEventListener('click', function () {
        showConfirm(t('dvExitConfirm')).then(function (ok) { if (ok) quickExit(); });
      });
    }
    var opts = $('obBody').querySelectorAll('.opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', function () {
        var all = $('obBody').querySelectorAll('.opt');
        for (var j = 0; j < all.length; j++) all[j].classList.remove('selected');
        this.classList.add('selected');
        var input = this.querySelector('input');
        if (input) input.checked = true;
      });
    }
    $('obNext').textContent = obStep === ONBOARDING_QUESTIONS.length - 1 ? t('finish') : t('cont');
  }

  function readObAnswer() {
    var q = ONBOARDING_QUESTIONS[obStep];
    var checked = $('obBody').querySelector('input[name="ob"]:checked');
    if (!checked) return false;
    if (q.type === 'single') obDraft[q.id] = checked.value;
    else obDraft[q.id] = checked.value === 'yes';
    return true;
  }

  function finishOnboarding() {
    obDraft.completedAt = Date.now();
    saveProfile(obDraft);
    $('onboard').style.display = 'none';
    render();
  }

  function openHood() {
    $('hoodTitle').textContent = t('hoodTitle');
    $('hoodHint').textContent = t('hoodHint');
    $('hoodOpts').innerHTML = NEIGHBORHOODS.map(function (n) {
      var sel = neighborhoodId === n.id ? ' selected' : '';
      return '<label class="opt' + sel + '" data-hood="' + n.id + '"><input type="radio" name="hood" value="' +
        n.id + '" ' + (sel ? 'checked' : '') + '/> ' + n.label + '</label>';
    }).join('');
    var opts = $('hoodOpts').querySelectorAll('.opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', function () {
        var all = $('hoodOpts').querySelectorAll('.opt');
        for (var j = 0; j < all.length; j++) all[j].classList.remove('selected');
        this.classList.add('selected');
        this.querySelector('input').checked = true;
        var id = this.getAttribute('data-hood');
        var n = null;
        for (var k = 0; k < NEIGHBORHOODS.length; k++) if (NEIGHBORHOODS[k].id === id) n = NEIGHBORHOODS[k];
        neighborhoodId = id;
        localStorage.setItem('srf_hood', id);
        if (n && n.lat != null) { userLat = n.lat; userLon = n.lon; }
        else { userLat = null; userLon = null; }
        $('hoodOverlay').style.display = 'none';
        render();
      });
    }
    $('hoodOverlay').style.display = 'flex';
  }

  function useGps() {
    if (!navigator.geolocation) { showAlert(t('gpsUnavailable')); return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      userLat = pos.coords.latitude;
      userLon = pos.coords.longitude;
      neighborhoodId = 'gps';
      localStorage.setItem('srf_hood', 'gps');
      localStorage.setItem('srf_lat', String(userLat));
      localStorage.setItem('srf_lon', String(userLon));
      logAction('gps_used', { dedupKey: new Date().toDateString() });
      $('hoodOverlay').style.display = 'none';
      render();
    }, function () {
      showAlert(t('gpsFailed'));
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
  }

  function openCheat() {
    var list = getVisible().filter(function (r) { return r.type !== 'system'; }).slice(0, 40);
    var lines = list.map(function (r) {
      return [r.name, r.addr || '', r.phone || '', r.hours || '', '---'].join('\n');
    });
    $('cheatTitle').textContent = t('cheatTitle');
    $('cheatBody').textContent = lines.join('\n\n') || 'No resources';
    $('cheatOverlay').style.display = 'flex';
  }

  function openNote(id) {
    noteTargetId = id;
    var notes = loadNotes();
    $('noteInput').value = (notes[id] && notes[id].text) || '';
    $('noteHint').textContent = t('notePrivate');
    $('noteOverlay').style.display = 'flex';
    $('noteInput').focus();
  }

  // ---------- More menu ----------
  function openMore() {
    $('moreOverlay').style.display = 'flex';
  }
  function closeMore() {
    $('moreOverlay').style.display = 'none';
  }

  // ---------- My Contact panel ----------
  function openContact() {
    var c = loadContact();
    $('contactName').value = c.name || '';
    $('contactPhone').value = c.phone || '';
    $('contactEmail').value = c.email || '';
    $('contactBackup').value = c.contact2 || '';
    $('contactNotes').value = c.notes || '';
    $('contactSavedNote').textContent = '';
    $('contactOverlay').style.display = 'flex';
  }
  function submitContact() {
    saveContact({
      name: $('contactName').value.trim(),
      phone: $('contactPhone').value.trim(),
      email: $('contactEmail').value.trim(),
      contact2: $('contactBackup').value.trim(),
      notes: $('contactNotes').value.trim()
    });
    $('contactSavedNote').textContent = 'Saved on this phone.';
  }

  // ---------- My Vault panel ----------
  function vaultCardHtml(item) {
    return '<div class="vault-item"><img src="' + item.dataUrl + '" alt="' + escapeHtml(item.label) + '"/>' +
      '<button type="button" class="vault-del" data-vault-del="' + item.id + '" aria-label="' + escapeHtml(t('removeLabel')) + '">\u2715</button>' +
      '<div class="vault-label">' + escapeHtml(item.label) + '</div></div>';
  }
  function renderVault() {
    var grid = $('vaultGrid');
    grid.innerHTML = '<button type="button" class="vault-add" id="vaultAddBtn">' +
      '<span style="font-size:28px">+</span><span>Add a photo</span></button>';
    $('vaultAddBtn').addEventListener('click', function () { $('vaultFileInput').click(); });
    if (!vaultDb) {
      openVaultDb().then(function () { fillVaultGrid(); }).catch(function () {
        grid.insertAdjacentHTML('beforeend', '<p class="hint">Photo storage is not available in this browser.</p>');
      });
    } else {
      fillVaultGrid();
    }
  }
  function fillVaultGrid() {
    vaultGetAll().then(function (items) {
      var grid = $('vaultGrid');
      items.forEach(function (item) { grid.insertAdjacentHTML('beforeend', vaultCardHtml(item)); });
      var delBtns = grid.querySelectorAll('[data-vault-del]');
      for (var i = 0; i < delBtns.length; i++) {
        delBtns[i].addEventListener('click', (function (id) {
          return function () {
            showConfirm(t('removeVaultDocConfirm')).then(function (ok) {
              if (!ok) return;
              vaultDelete(id).then(renderVault).catch(function () {
                showAlert(t('vaultDeleteFailed'));
                renderVault(); // reflect actual DB state either way
              });
            });
          };
        })(delBtns[i].getAttribute('data-vault-del')));
      }
    }).catch(function () {});
  }
  function openVault() {
    $('vaultOverlay').style.display = 'flex';
    renderVault();
  }
  function handleVaultFile(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = reader.result;
      showPrompt(t('vaultLabelPrompt'), '').then(function (label) {
        if (label === null) return; // person cancelled — do not save anything
        label = label.trim() ? label.trim() : t('vaultDefaultLabel');
        var record = { id: 'v' + Date.now(), label: label, dataUrl: dataUrl, at: Date.now() };
        var ready = vaultDb ? Promise.resolve() : openVaultDb();
        ready.then(function () { return vaultAdd(record); })
          .then(function () { renderVault(); })
          .catch(function () {
            // Persistence genuinely failed (quota exceeded, IndexedDB unavailable, etc.) — the
            // record was never written, so we must not let the UI imply otherwise. No document
            // content, filename, or label is included in this message or logged anywhere.
            showAlert(t('vaultSaveFailed'));
            renderVault(); // re-render from actual DB state; the failed item correctly won't appear
          });
      });
    };
    reader.onerror = function () {
      showAlert(t('vaultSaveFailed'));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }

  // ---------- Weekly Planner panel ----------
  var plannerDay = new Date().getDay();
  var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var DAY_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  function renderPlanner() {
    var today = new Date().getDay();
    var pills = $('dayPillRow');
    pills.innerHTML = '';
    for (var i = 0; i < 7; i++) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'day-pill' + (plannerDay === i ? ' active' : '') + (today === i ? ' today-marker' : '');
      b.textContent = DAY_SHORT[i];
      b.setAttribute('aria-label', DAY_NAMES[i]);
      b.addEventListener('click', (function (idx) { return function () { plannerDay = idx; renderPlanner(); }; })(i));
      pills.appendChild(b);
    }
    $('plannerDayTitle').textContent = DAY_NAMES[plannerDay] + (plannerDay === today ? ' (today)' : '');

    var planner = loadPlanner();
    var plan = planner[plannerDay] || { goal: 0, needs: {} };
    $('goalAmount').value = plan.goal || 0;

    var grid = $('needGrid');
    grid.innerHTML = '';
    NEED_OPTIONS.forEach(function (n) {
      var checked = !!(plan.needs && (plan.needs[n.key] !== undefined));
      var done = checked && plan.needs[n.key];
      var label = document.createElement('label');
      label.className = 'need-chip' + (checked ? ' checked' : '') + (done ? ' done' : '');
      label.innerHTML = '<input type="checkbox" ' + (checked ? 'checked' : '') + '/> <span>' + n.icon + ' ' + n.label + '</span>';
      label.querySelector('input').addEventListener('change', function (evChecked, key) {
        return function (e) {
          var planner2 = loadPlanner();
          if (!planner2[plannerDay]) planner2[plannerDay] = { goal: 0, needs: {} };
          if (e.target.checked) {
            planner2[plannerDay].needs[key] = false;
            var weekKey = dateToStr(startOfWeek(new Date())) + ':' + plannerDay + ':' + key;
            logAction('plan_created', { dedupKey: weekKey, category: NEED_KEY_TO_STABILITY[key] || null });
          }
          else delete planner2[plannerDay].needs[key];
          savePlanner(planner2);
          renderPlanner();
        };
      }(checked, n.key));
      label.addEventListener('click', function (key, wasChecked) {
        return function (e) {
          if (e.target.tagName === 'INPUT') return;
          if (!wasChecked) return;
          e.preventDefault();
          var planner2 = loadPlanner();
          var cur = planner2[plannerDay].needs[key];
          planner2[plannerDay].needs[key] = !cur;
          savePlanner(planner2);
          renderPlanner();
        };
      }(n.key, checked));
      grid.appendChild(label);
    });

    var smartEl = $('plannerSmartSuggestions');
    if (smartEl) {
      if (isFeatureUnlocked('smart_day_plan')) {
        var unmetKeys2 = Object.keys(plan.needs || {}).filter(function (k) { return !plan.needs[k]; });
        var blocks = unmetKeys2.map(function (k) {
          var opt = NEED_OPTIONS.filter(function (o) { return o.key === k; })[0];
          var matches = suggestResourcesForNeed(k, 3);
          if (!matches.length) return '';
          var cardsHtml = matches.map(function (r) {
            var call = phoneHref(r.phone);
            var dir = mapsHref(r.addr);
            return '<div class="smart-suggestion" data-suggest-id="' + r.id + '" data-suggest-need="' + k + '">' +
              '<div class="smart-suggestion-name">' + escapeHtml(r.name) + '</div>' +
              (r.addr ? '<div class="smart-suggestion-addr">' + escapeHtml(r.addr) + '</div>' : '') +
              '<div class="smart-suggestion-actions">' +
              (call ? '<a href="' + call + '" data-suggest-action="call">Call</a>' : '') +
              (dir ? '<a href="' + dir + '" target="_blank" rel="noopener" data-suggest-action="map">Map</a>' : '') +
              '</div></div>';
          }).join('');
          return '<div class="smart-suggestion-group"><div class="smart-suggestion-label">' +
            (opt ? opt.icon + ' Nearby for ' + opt.label : 'Nearby matches') + '</div>' + cardsHtml + '</div>';
        }).filter(Boolean).join('');
        smartEl.innerHTML = blocks;
        if (blocks) {
          var pGroupEls = smartEl.querySelectorAll('.smart-suggestion');
          for (var pgi = 0; pgi < pGroupEls.length; pgi++) {
            (function (cardEl) {
              var resId = cardEl.getAttribute('data-suggest-id');
              var needKey = cardEl.getAttribute('data-suggest-need');
              var category = NEED_KEY_TO_STABILITY[needKey] || null;
              var actionLinks = cardEl.querySelectorAll('[data-suggest-action]');
              for (var pai = 0; pai < actionLinks.length; pai++) {
                actionLinks[pai].addEventListener('click', function () {
                  logAction('plan_created', {
                    dedupKey: 'smart:' + resId + ':' + needKey + ':' + dateToStr(new Date()),
                    category: category,
                    feature: 'smart_day_plan',
                    needKey: needKey,
                    resourceId: resId
                  });
                });
              }
            })(pGroupEls[pgi]);
          }
        }
      } else {
        smartEl.innerHTML = '';
      }
    }

    var routineSection = $('routineCopySection');
    if (routineSection) {
      if (isFeatureUnlocked('routine_day_copy') && dayHasData(plan)) {
        routineSection.style.display = 'block';
        var targetSelect = $('routineCopyTarget');
        targetSelect.innerHTML = '';
        for (var td = 0; td < 7; td++) {
          if (td === plannerDay) continue; // can't copy a day onto itself
          var opt2 = document.createElement('option');
          opt2.value = String(td);
          opt2.textContent = DAY_NAMES[td];
          targetSelect.appendChild(opt2);
        }
        $('routineCopyStatus').textContent = '';
      } else {
        routineSection.style.display = 'none';
      }
    }
  }
  function adjustGoal(delta) {
    var input = $('goalAmount');
    var val = parseInt(input.value || '0', 10) + delta;
    if (val < 0) val = 0;
    input.value = val;
    onGoalChange();
  }
  function onGoalChange() {
    var val = parseInt($('goalAmount').value || '0', 10);
    var planner = loadPlanner();
    if (!planner[plannerDay]) planner[plannerDay] = { goal: 0, needs: {} };
    planner[plannerDay].goal = isNaN(val) ? 0 : val;
    savePlanner(planner);
  }
  // ---------- Scheduled event -> .ics (with VALARM) and Google Calendar link ----------
  function icsDate(d) { return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; }

  function buildEventIcs(ev) {
    // ev: { title, date: 'YYYY-MM-DD', time: 'HH:MM', durationMin, location, notes, alarmMinutesBefore }
    var start = new Date(ev.date + 'T' + (ev.time || '09:00') + ':00');
    var end = new Date(start.getTime() + (ev.durationMin || 60) * 60000);
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Seattle Resource Finder//Scheduled Event//EN',
      'BEGIN:VEVENT',
      'UID:' + (ev.id || ('ev' + Date.now())) + '@srf.app',
      'DTSTAMP:' + icsDate(new Date()),
      'DTSTART:' + icsDate(start),
      'DTEND:' + icsDate(end),
      'SUMMARY:' + escapeIcsText(ev.title || 'Appointment'),
    ];
    if (ev.location) lines.push('LOCATION:' + escapeIcsText(ev.location));
    if (ev.notes) lines.push('DESCRIPTION:' + escapeIcsText(ev.notes));
    // VALARM: this is what lets Google Calendar / Apple Calendar / Outlook fire a real
    // notification some number of minutes before the event, even though this web app
    // itself cannot set a native phone alarm directly (see README/known limitations).
    var alarmMin = (ev.alarmMinutesBefore != null) ? ev.alarmMinutesBefore : 60;
    if (alarmMin > 0) {
      lines.push('BEGIN:VALARM');
      lines.push('ACTION:DISPLAY');
      lines.push('DESCRIPTION:Reminder: ' + escapeIcsText(ev.title || 'Appointment'));
      lines.push('TRIGGER:-PT' + alarmMin + 'M');
      lines.push('END:VALARM');
    }
    lines.push('END:VEVENT');
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }
  function escapeIcsText(s) {
    return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }
  function downloadIcsForEvent(ev) {
    var ics = buildEventIcs(ev);
    var blob = new Blob([ics], { type: 'text/calendar' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = (ev.title || 'appointment').replace(/[^a-z0-9]/gi, '-').toLowerCase() + '.ics';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  }
  function googleCalendarLink(ev) {
    // One-tap "add to Google Calendar" via URL template — works with no OAuth/backend,
    // but requires the device to be online at the moment the link is tapped, and the
    // person needs a Google account signed in. This is a real, honest limitation: there
    // is no way to do a true background two-way sync without a server component (see
    // ROADMAP.md). Google Calendar's own reminder settings apply once added this way,
    // NOT the alarmMinutesBefore value baked into the .ics VALARM — the person should
    // check/set the reminder time inside Google Calendar after adding.
    var start = new Date(ev.date + 'T' + (ev.time || '09:00') + ':00');
    var end = new Date(start.getTime() + (ev.durationMin || 60) * 60000);
    function gfmt(d) { return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; }
    var params = [
      'action=TEMPLATE',
      'text=' + encodeURIComponent(ev.title || 'Appointment'),
      'dates=' + gfmt(start) + '/' + gfmt(end),
      'details=' + encodeURIComponent(ev.notes || ''),
      'location=' + encodeURIComponent(ev.location || '')
    ];
    return 'https://calendar.google.com/calendar/render?' + params.join('&');
  }

  // In-page alarm: while this browser tab/installed PWA stays open (or, on platforms
  // that support it, while a Service Worker can still run a timed task), fire a
  // Notification at the requested lead time before the event. This is a best-effort
  // supplement to the .ics VALARM, not a replacement — see README for platform caveats.
  var scheduledAlarms = {}; // eventId -> timeout handle, so we can clear/reschedule
  function scheduleInPageAlarm(ev) {
    if (!('Notification' in window)) return false;
    var start = new Date(ev.date + 'T' + (ev.time || '09:00') + ':00');
    var alarmMin = (ev.alarmMinutesBefore != null) ? ev.alarmMinutesBefore : 60;
    var fireAt = new Date(start.getTime() - alarmMin * 60000);
    var msUntil = fireAt.getTime() - Date.now();
    if (msUntil <= 0) return false; // already past — nothing to schedule
    if (scheduledAlarms[ev.id]) clearTimeout(scheduledAlarms[ev.id]);
    scheduledAlarms[ev.id] = setTimeout(function () {
      try {
        new Notification('Upcoming: ' + (ev.title || 'Appointment'), {
          body: (alarmMin >= 60 ? Math.round(alarmMin / 60) + ' hr' : alarmMin + ' min') + ' from now' +
            (ev.location ? ' · ' + ev.location : '')
        });
      } catch (e) {}
    }, msUntil);
    return true;
  }
  function rescheduleAllInPageAlarms() {
    Object.keys(scheduledAlarms).forEach(function (id) { clearTimeout(scheduledAlarms[id]); });
    scheduledAlarms = {};
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    var now = new Date();
    var horizon = new Date(now.getTime() + 8 * 24 * 60 * 60000); // only schedule within ~8 days out
    loadEvents().forEach(function (ev) {
      var start = new Date(ev.date + 'T' + (ev.time || '09:00') + ':00');
      if (start > now && start < horizon) scheduleInPageAlarm(ev);
    });
  }

  // ---------- My Schedule panel (dated appointments across the week) ----------
  var schedSelectedDate = dateToStr(new Date());
  var eventFormEditingId = null;
  var eventFormPendingCategory = null;

  function renderSchedule() {
    var todayStr = dateToStr(new Date());
    var weekStartStr = dateToStr(startOfWeek(new Date(schedSelectedDate + 'T00:00:00')));
    var week = eventsForWeek(weekStartStr);

    var pills = $('schedDayPillRow');
    pills.innerHTML = '';
    week.days.forEach(function (ds) {
      var d = new Date(ds + 'T00:00:00');
      var b = document.createElement('button');
      b.type = 'button';
      var count = week.byDay[ds].length;
      b.className = 'day-pill' + (ds === schedSelectedDate ? ' active' : '') + (ds === todayStr ? ' today-marker' : '');
      b.textContent = DAY_SHORT[d.getDay()] + (count ? ' \u2022' : '');
      b.setAttribute('aria-label', DAY_NAMES[d.getDay()] + (count ? ', ' + count + ' appointment' + (count > 1 ? 's' : '') : ''));
      b.addEventListener('click', function () { schedSelectedDate = ds; renderSchedule(); });
      pills.appendChild(b);
    });

    var selD = new Date(schedSelectedDate + 'T00:00:00');
    $('schedDayTitle').textContent = DAY_NAMES[selD.getDay()] + ', ' + (selD.getMonth() + 1) + '/' + selD.getDate() +
      (schedSelectedDate === todayStr ? ' (today)' : '');

    var listEl = $('schedEventList');
    var dayEvents = eventsForDate(schedSelectedDate);
    if (!dayEvents.length) {
      listEl.innerHTML = '<p class="sched-empty">Nothing scheduled this day. Tap "Add appointment" below, or use the Note/Share actions on any resource card to plan a visit.</p>';
      return;
    }
    listEl.innerHTML = dayEvents.map(function (ev) {
      var timeLabel = formatTime12h(ev.time);
      var alarmLabel = (ev.alarmMinutesBefore > 0)
        ? '\u23F0 Reminder ' + (ev.alarmMinutesBefore >= 60 ? (ev.alarmMinutesBefore / 60) + ' hr' : ev.alarmMinutesBefore + ' min') + ' before'
        : '';
      var isDone = isEventCompleted(ev);
      return '<div class="sched-event' + (isDone ? ' completed' : '') + '" data-ev="' + ev.id + '">' +
        '<div class="sched-event-top">' +
        '<input type="checkbox" class="sched-complete-check" data-complete="' + ev.id + '"' + (isDone ? ' checked' : '') + ' aria-label="Mark appointment complete"/>' +
        '<span class="sched-event-time">' + timeLabel + '</span>' +
        '<span class="sched-event-title">' + escapeHtml(ev.title || 'Appointment') + '</span>' +
        '</div>' +
        (ev.location ? '<div class="sched-event-loc">\uD83D\uDCCD ' + escapeHtml(ev.location) + '</div>' : '') +
        (alarmLabel ? '<div class="sched-event-alarm">' + alarmLabel + '</div>' : '') +
        '<div class="sched-event-actions">' +
        '<button type="button" class="sched-btn" data-ics="' + ev.id + '">\uD83D\uDCC5 .ics</button>' +
        '<button type="button" class="sched-btn" data-gcal="' + ev.id + '">G Calendar</button>' +
        '<button type="button" class="sched-btn edit" data-edit="' + ev.id + '">Edit</button>' +
        '</div></div>';
    }).join('');

    dayEvents.forEach(function (ev) {
      var icsBtn = listEl.querySelector('[data-ics="' + ev.id + '"]');
      if (icsBtn) icsBtn.addEventListener('click', function () {
        downloadIcsForEvent(ev);
        logAction('calendar_exported', { dedupKey: ev.id });
      });
      var gcalBtn = listEl.querySelector('[data-gcal="' + ev.id + '"]');
      if (gcalBtn) gcalBtn.addEventListener('click', function () {
        window.open(googleCalendarLink(ev), '_blank');
        logAction('calendar_exported', { dedupKey: ev.id });
      });
      var editBtn = listEl.querySelector('[data-edit="' + ev.id + '"]');
      if (editBtn) editBtn.addEventListener('click', function () { openEventForm(ev); });
      var completeCheck = listEl.querySelector('[data-complete="' + ev.id + '"]');
      if (completeCheck) completeCheck.addEventListener('change', function (e) {
        var nowCompleted = toggleEventCompleted(ev.id);
        // Only the incomplete -> complete transition ever earns XP. Unchecking
        // (complete -> incomplete) must never call logAction, per the locked rule —
        // logAction's own dedupKey guard also prevents any re-award if the box is
        // checked, unchecked, and re-checked again later.
        if (nowCompleted === true) {
          logAction('appointment_completed', { dedupKey: ev.id, category: ev.category || null });
        }
        var card = listEl.querySelector('[data-ev="' + ev.id + '"]');
        if (card) card.classList.toggle('completed', !!nowCompleted);
      });
    });
  }

  function formatTime12h(hhmm) {
    if (!hhmm) return '';
    var parts = hhmm.split(':');
    var h = parseInt(parts[0], 10);
    var m = parts[1] || '00';
    var suffix = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12; if (h12 === 0) h12 = 12;
    return h12 + ':' + m + ' ' + suffix;
  }

  function openEventForm(existingEvent) {
    eventFormEditingId = existingEvent ? existingEvent.id : null;
    eventFormPendingCategory = existingEvent ? (existingEvent.category || null) : null;
    $('eventFormTitle').textContent = existingEvent ? 'Edit appointment' : 'Add appointment';
    $('evTitle').value = existingEvent ? (existingEvent.title || '') : '';
    $('evDate').value = existingEvent ? existingEvent.date : schedSelectedDate;
    $('evTime').value = existingEvent ? (existingEvent.time || '09:00') : '09:00';
    $('evDuration').value = existingEvent ? (existingEvent.durationMin || 60) : 60;
    $('evLocation').value = existingEvent ? (existingEvent.location || '') : '';
    $('evAlarm').value = String(existingEvent ? (existingEvent.alarmMinutesBefore != null ? existingEvent.alarmMinutesBefore : 60) : 60);
    $('evNotes').value = existingEvent ? (existingEvent.notes || '') : '';
    $('eventFormHint').textContent = '';
    $('eventFormDeleteRow').style.display = existingEvent ? 'flex' : 'none';
    $('scheduleOverlay').style.display = 'none';
    $('eventFormOverlay').style.display = 'flex';
  }

  function prefillEventFormFromResource(resource) {
    // Called from a resource card's "Schedule a visit" action so a person can turn any
    // shelter/clinic/day-labor listing directly into a dated, timed appointment.
    openEventForm(null);
    $('evTitle').value = 'Visit: ' + (resource.name || '');
    $('evLocation').value = resource.addr || resource.name || '';
    if (resource.notes) $('evNotes').value = resource.notes;
    eventFormPendingCategory = stabilityCategoryForResource(resource);
  }

  function submitEventForm() {
    var title = $('evTitle').value.trim();
    var date = $('evDate').value;
    if (!title) { $('eventFormHint').textContent = 'Please enter what this appointment is.'; return; }
    if (!date) { $('eventFormHint').textContent = 'Please choose a date.'; return; }
    var payload = {
      title: title,
      date: date,
      time: $('evTime').value || '09:00',
      durationMin: parseInt($('evDuration').value, 10) || 60,
      location: $('evLocation').value.trim(),
      alarmMinutesBefore: parseInt($('evAlarm').value, 10),
      notes: $('evNotes').value.trim(),
      category: eventFormPendingCategory || null
    };
    var saved;
    var isNew = !eventFormEditingId;
    if (eventFormEditingId) {
      updateEvent(eventFormEditingId, payload);
      saved = Object.assign({ id: eventFormEditingId }, payload);
    } else {
      saved = addEvent(payload);
    }
    if (isNew) {
      logAction('appointment_created', { dedupKey: saved.id, category: payload.category });
    }
    // Best-effort in-page alarm alongside the .ics VALARM (see scheduleInPageAlarm notes)
    if (Notification && Notification.permission === 'granted') scheduleInPageAlarm(saved);
    schedSelectedDate = date;
    $('eventFormOverlay').style.display = 'none';
    $('scheduleOverlay').style.display = 'flex';
    renderSchedule();
  }

  function deleteEventFromForm() {
    if (!eventFormEditingId) return;
    showConfirm(t('deleteAppointmentConfirm')).then(function (ok) {
      if (!ok) return;
      if (scheduledAlarms[eventFormEditingId]) { clearTimeout(scheduledAlarms[eventFormEditingId]); delete scheduledAlarms[eventFormEditingId]; }
      deleteEvent(eventFormEditingId);
      $('eventFormOverlay').style.display = 'none';
      $('scheduleOverlay').style.display = 'flex';
      renderSchedule();
    });
  }

  function addPlanToCalendar() {
    var today = new Date().getDay();
    var planner = loadPlanner();
    var plan = planner[today] || { goal: 0, needs: {} };
    var needsList = Object.keys(plan.needs || {}).map(function (k) {
      var opt = NEED_OPTIONS.filter(function (o) { return o.key === k; })[0];
      return opt ? opt.label : k;
    });
    var desc = '';
    if (plan.goal) desc += 'Money goal: $' + plan.goal + '\\n';
    if (needsList.length) desc += 'Tasks: ' + needsList.join(', ');
    if (!desc) desc = 'Daily plan';

    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0);
    function fmt(d) { return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; }
    var ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Seattle Resource Finder//Daily Plan//EN',
      'BEGIN:VEVENT', 'UID:' + Date.now() + '@srf.app', 'DTSTAMP:' + fmt(new Date()),
      'DTSTART:' + fmt(start), 'DTEND:' + fmt(end), 'SUMMARY:My daily plan',
      'DESCRIPTION:' + desc, 'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    var blob = new Blob([ics], { type: 'text/calendar' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'my-plan-today.ics';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  }
  function setPlanReminder() {
    var status = $('reminderStatus');
    if (!('Notification' in window)) { status.textContent = 'Reminders are not supported in this browser.'; return; }
    function schedule() {
      status.textContent = 'Reminder set for later today, while this tab stays open.';
      logAction('reminder_created', { dedupKey: new Date().toDateString() });
      setTimeout(function () {
        try { new Notification('Your daily plan', { body: 'Check in on your goals and tasks for today.' }); } catch (e) {}
      }, 3 * 60 * 60 * 1000);
    }
    if (Notification.permission === 'granted') schedule();
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (perm) {
        if (perm === 'granted') schedule();
        else status.textContent = 'Notifications are off. Check the Home screen for today\u2019s plan instead.';
      });
    } else {
      status.textContent = 'Notifications are blocked in your browser settings.';
    }
  }

  // ---------- Skills (short offline lessons) ----------
  var SKILLS = [
    { id: 'sk1', icon: '\uD83D\uDDE3\uFE0F', title: 'Interview basics', minutes: 3, body:
      '<ul><li>Arrive 10 minutes early if you can.</li>' +
      '<li>A firm handshake and eye contact go a long way \u2014 even a simple "Thanks for meeting with me" helps.</li>' +
      '<li>When asked "Tell me about yourself," give 2\u20133 sentences: what you\u2019ve done, what you\u2019re good at, why this job fits.</li>' +
      '<li>If asked about gaps in work history, keep it short and honest.</li>' +
      '<li>Always ask one question back, like "What does a typical day look like in this role?"</li></ul>' },
    { id: 'sk2', icon: '\uD83D\uDCB0', title: 'Budgeting with any income', minutes: 4, body:
      '<ol><li><b>Write down what comes in.</b> Even irregular cash \u2014 estimate a weekly average.</li>' +
      '<li><b>List must-haves first:</b> food, phone, transportation, any savings for an ID or deposit.</li>' +
      '<li><b>Round down, not up.</b> If you\u2019re not sure you\u2019ll have $50, plan for $40.</li>' +
      '<li><b>Small goals work:</b> saving $5 a week adds up to $260 in a year.</li></ol>' },
    { id: 'sk3', icon: '\uD83D\uDCF1', title: 'Getting the most from a basic phone', minutes: 3, body:
      '<ul><li>Save this app to your home screen so it opens fast, even offline.</li>' +
      '<li>Turn on low battery mode early in the day, not at 5%.</li>' +
      '<li>Libraries and many shelters offer free charging and Wi-Fi.</li>' +
      '<li>Save important numbers under simple names: "Shelter," "Case Worker," "Clinic."</li></ul>' },
    { id: 'sk4', icon: '\uD83E\uDEAA', title: 'Replacing a lost ID', minutes: 3, body:
      '<ol><li>Start with the WA Department of Licensing or vital records \u2014 ask a library or shelter staff for the nearest one.</li>' +
      '<li>You\u2019ll usually need one other document: a birth certificate, an old ID photo, or a case worker\u2019s letter.</li>' +
      '<li>Washington offers a reduced or waived fee for people experiencing homelessness \u2014 always ask.</li>' +
      '<li>Once you get a new ID, take a photo and save it in your Vault right away.</li></ol>' },
    { id: 'sk5', icon: '\uD83E\uDE7A', title: 'Getting basic healthcare without insurance', minutes: 3, body:
      '<ul><li>Community health centers see patients on a sliding scale, often free, regardless of insurance.</li>' +
      '<li>Emergency rooms cannot turn you away for urgent, life-threatening issues.</li>' +
      '<li>King County has mobile health vans that visit shelters on set days \u2014 ask staff.</li>' +
      '<li>Bring whatever ID you have, but you can usually still be seen without one.</li></ul>' }
  ];
  function renderSkills() {
    var wrap = $('skillsList');
    wrap.innerHTML = SKILLS.map(function (s) {
      return '<div class="card skill-card">' +
        '<div class="card-top skill-head" data-skill="' + s.id + '"><span class="icon">' + s.icon + '</span>' +
        '<div style="flex:1"><h2>' + escapeHtml(s.title) + '</h2><div class="meta">' + s.minutes + ' min read</div></div>' +
        '<span class="chev" id="chev_' + s.id + '">\u2304</span></div>' +
        '<div class="skill-body" id="body_' + s.id + '">' + s.body + '</div></div>';
    }).join('');
    SKILLS.forEach(function (s) {
      $('skillsList').querySelector('[data-skill="' + s.id + '"]').addEventListener('click', function () {
        var body = $('body_' + s.id);
        var chev = $('chev_' + s.id);
        var open = body.classList.toggle('open');
        chev.textContent = open ? '\u2303' : '\u2304';
      });
    });
  }
  // ---------- Missions / Achievements / Unlocks (combined panel) ----------
  function renderMissions() {
    var el = $('missionsBody');
    if (!el) return;
    var p = loadProgress();

    var activeHtml = MISSION_DEFS
      .filter(function (m) { return p.missions.active.indexOf(m.id) !== -1; })
      .map(function (m) {
        return '<div class="mission-item"><span class="mission-title">' + escapeHtml(m.title) + '</span>' +
          '<span class="mission-xp">+' + m.xp + ' XP</span></div>';
      }).join('') || '<p class="hint">No missions left to start \u2014 nice work.</p>';

    var completedHtml = MISSION_DEFS
      .filter(function (m) { return p.missions.completed.indexOf(m.id) !== -1; })
      .map(function (m) {
        return '<div class="mission-item done"><span class="mission-title">\u2713 ' + escapeHtml(m.title) + '</span>' +
          '<span class="mission-xp">+' + m.xp + ' XP</span></div>';
      }).join('') || '<p class="hint">Completed missions will show up here.</p>';

    var LEVEL_UNLOCK_LABELS = {
      2: { name: 'Smart Day Plan', desc: 'Nearby matches shown right inside your daily plan' },
      3: { name: 'Next Best Action', desc: 'A quick suggestion for what to do next' },
      4: { name: 'Routine Builder + Worked Before', desc: 'Copy a day\u2019s plan to another day; see which places you\u2019ve saved or visited' }
    };
    var userLevel = p.level || 1;
    var unlocksHtml = LEVEL_NAMES.map(function (name, lvl) {
      if (lvl === 0) return ''; // LEVEL_NAMES[0] is the empty placeholder, levels are 1-indexed
      var reached = userLevel >= lvl;
      var info = LEVEL_UNLOCK_LABELS[lvl];
      var body = info
        ? escapeHtml(info.name) + ' \u2014 ' + escapeHtml(info.desc)
        : (lvl === 1 ? 'Everything in the app, from the start' : 'Nothing new here yet \u2014 more practical tools may come later');
      return '<div class="unlock-tier' + (reached ? ' reached' : '') + '">' +
        '<div class="unlock-tier-head">' + (reached ? '\u2713' : '\u{1F512}') + ' Level ' + lvl + ' \u2014 ' + escapeHtml(name) + '</div>' +
        '<div class="unlock-tier-items">' + body + '</div></div>';
    }).join('');

    el.innerHTML =
      '<h3 class="missions-sub-head">Missions</h3>' + activeHtml +
      '<h3 class="missions-sub-head">Achievements</h3>' + completedHtml +
      '<h3 class="missions-sub-head">Unlocks</h3>' + unlocksHtml;
  }
  function openMissions() {
    renderMissions();
    $('missionsOverlay').style.display = 'flex';
  }

  function openSkills() {
    renderSkills();
    $('skillsOverlay').style.display = 'flex';
  }

  // ---------- Printable / screenshot list ----------
  function openPrint() {
    var list = getVisible().filter(function (r) { return r.type !== 'system'; }).slice(0, 60);
    var html = '<h1>' + t('appTitle') + ' \u2014 My List</h1>' +
      '<p class="print-date">' + new Date().toLocaleDateString() + ' \u2014 ' + t('callFirst') + '</p>' +
      list.map(function (r) {
        return '<div class="print-item"><strong>' + iconFor(r) + ' ' + escapeHtml(r.name) + '</strong><br/>' +
          escapeHtml(labelFor(r)) + (r.hours ? ' \u00b7 ' + escapeHtml(r.hours) : '') + '<br/>' +
          (r.addr ? escapeHtml(r.addr) + '<br/>' : '') +
          (r.phone ? 'Phone: ' + escapeHtml(r.phone) : '') + '</div>';
      }).join('');
    $('printArea').innerHTML = html;
    window.print();
  }

  // Events
  $('obNext').addEventListener('click', function () {
    if (!readObAnswer()) {
      var q = ONBOARDING_QUESTIONS[obStep];
      if (q.type === 'single') obDraft[q.id] = 'preferNot';
      else obDraft[q.id] = false;
    }
    obStep++;
    if (obStep >= ONBOARDING_QUESTIONS.length) finishOnboarding();
    else showObStep();
  });
  $('obSkip').addEventListener('click', finishOnboarding);
  $('btnProfile').addEventListener('click', function () { openOnboarding(true); });
  $('btnNeighborhood').addEventListener('click', openHood);
  $('hoodCancel').addEventListener('click', function () { $('hoodOverlay').style.display = 'none'; });
  $('hoodGeo').addEventListener('click', useGps);
  $('btnCheat').addEventListener('click', openCheat);
  $('cheatClose').addEventListener('click', function () { $('cheatOverlay').style.display = 'none'; });
  $('cheatCopy').addEventListener('click', function () {
    var text = $('cheatBody').textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { showAlert(t('copied')); }).catch(function () { showAlert(t('copyManually')); });
    else showAlert(t('copyManually'));
  });
  $('noteCancel').addEventListener('click', function () { $('noteOverlay').style.display = 'none'; });
  $('noteSave').addEventListener('click', function () {
    var text = $('noteInput').value;
    saveNote(noteTargetId, text);
    if (text && text.trim()) {
      logAction('resource_note_added', { dedupKey: noteTargetId });
    }
    $('noteOverlay').style.display = 'none';
    render();
  });
  $('btnWeather').addEventListener('click', function () {
    if (weatherMode === 'off') weatherMode = 'cold';
    else if (weatherMode === 'cold') weatherMode = 'heat';
    else weatherMode = 'off';
    localStorage.setItem('srf_weather', weatherMode);
    updateWeatherBanner();
    render();
  });
  if ($('btnEmergency')) $('btnEmergency').addEventListener('click', function () {
    renderEmergency();
    $('emergencyOverlay').style.display = 'flex';
  });
  if ($('emergencyClose')) $('emergencyClose').addEventListener('click', function () { $('emergencyOverlay').style.display = 'none'; });
  $('btnLang').addEventListener('click', function () {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('srf_lang', lang);
    applyI18n();
    render();
  });
  $('search').addEventListener('input', function (e) {
    searchQuery = e.target.value;
    render();
  });
  $('btnResetFilters').addEventListener('click', function () {
    searchQuery = '';
    $('search').value = '';
    render();
  });

  // ---- More menu + new panels ----
  if ($('btnMore')) $('btnMore').addEventListener('click', openMore);
  if ($('moreClose')) $('moreClose').addEventListener('click', closeMore);
  if ($('moreOverlay')) $('moreOverlay').addEventListener('click', function (e) { if (e.target.id === 'moreOverlay') closeMore(); });
  if ($('moreFavorites')) $('moreFavorites').addEventListener('click', function () {
    closeMore();
    document.querySelectorAll('nav.bottom button').forEach(function (b) { b.classList.remove('active'); });
    viewFilter = 'favorites';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  if ($('moreContact')) $('moreContact').addEventListener('click', function () { closeMore(); openContact(); });
  if ($('moreVault')) $('moreVault').addEventListener('click', function () { closeMore(); openVault(); });
  if ($('morePlanner')) $('morePlanner').addEventListener('click', function () { closeMore(); renderPlanner(); $('plannerOverlay').style.display = 'flex'; });
  if ($('moreSchedule')) $('moreSchedule').addEventListener('click', function () { closeMore(); schedSelectedDate = dateToStr(new Date()); renderSchedule(); $('scheduleOverlay').style.display = 'flex'; });
  if ($('moreMissions')) $('moreMissions').addEventListener('click', function () { closeMore(); openMissions(); });
  if ($('moreSkills')) $('moreSkills').addEventListener('click', function () { closeMore(); openSkills(); });
  if ($('morePrint')) $('morePrint').addEventListener('click', function () { closeMore(); openPrint(); });

  if ($('contactClose')) $('contactClose').addEventListener('click', function () { $('contactOverlay').style.display = 'none'; });
  if ($('contactSave')) $('contactSave').addEventListener('click', submitContact);

  if ($('vaultClose')) $('vaultClose').addEventListener('click', function () { $('vaultOverlay').style.display = 'none'; });
  if ($('vaultFileInput')) $('vaultFileInput').addEventListener('change', handleVaultFile);

  if ($('plannerClose')) $('plannerClose').addEventListener('click', function () { $('plannerOverlay').style.display = 'none'; });
  if ($('goalAmount')) $('goalAmount').addEventListener('change', onGoalChange);
  if ($('goalMinus')) $('goalMinus').addEventListener('click', function () { adjustGoal(-5); });
  if ($('goalPlus')) $('goalPlus').addEventListener('click', function () { adjustGoal(5); });
  if ($('addToCalendar')) $('addToCalendar').addEventListener('click', addPlanToCalendar);
  if ($('setReminder')) $('setReminder').addEventListener('click', setPlanReminder);
  if ($('routineCopyBtn')) $('routineCopyBtn').addEventListener('click', function () {
    var targetDay = parseInt($('routineCopyTarget').value, 10);
    var status = $('routineCopyStatus');
    var result = copyPlanToDay(plannerDay, targetDay, false);
    if (result.ok) {
      status.textContent = t('copiedTo') + ' ' + DAY_NAMES[targetDay] + '.';
    } else if (result.needsConfirm) {
      showConfirm(DAY_NAMES[targetDay] + ' ' + t('confirmOverwriteDay') + ' ' + DAY_NAMES[plannerDay] + t('plansQ')).then(function (proceed) {
        if (proceed) {
          var forced = copyPlanToDay(plannerDay, targetDay, true);
          status.textContent = forced.ok ? (t('copiedTo') + ' ' + DAY_NAMES[targetDay] + '.') : t('couldNotCopyDay');
        } else {
          status.textContent = t('cancelledNoChange');
        }
      });
    } else {
      status.textContent = t('nothingToCopy');
    }
  });

  if ($('scheduleClose')) $('scheduleClose').addEventListener('click', function () { $('scheduleOverlay').style.display = 'none'; });
  if ($('schedAddBtn')) $('schedAddBtn').addEventListener('click', function () { openEventForm(null); });
  if ($('eventFormCancel')) $('eventFormCancel').addEventListener('click', function () {
    $('eventFormOverlay').style.display = 'none';
    $('scheduleOverlay').style.display = 'flex';
  });
  if ($('eventFormSave')) $('eventFormSave').addEventListener('click', submitEventForm);
  if ($('eventFormDelete')) $('eventFormDelete').addEventListener('click', deleteEventFromForm);

  if ($('skillsClose')) $('skillsClose').addEventListener('click', function () { $('skillsOverlay').style.display = 'none'; });
  if ($('missionsClose')) $('missionsClose').addEventListener('click', function () { $('missionsOverlay').style.display = 'none'; });

  document.querySelectorAll('nav.bottom button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('nav.bottom button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      viewFilter = btn.dataset.view;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  window.addEventListener('online', function () { $('offlineBanner').classList.remove('on'); });
  window.addEventListener('offline', function () { $('offlineBanner').classList.add('on'); });
  if (!navigator.onLine) $('offlineBanner').classList.add('on');

  if (localStorage.getItem('srf_lat')) {
    userLat = parseFloat(localStorage.getItem('srf_lat'));
    userLon = parseFloat(localStorage.getItem('srf_lon'));
  } else if (neighborhoodId) {
    for (var i = 0; i < NEIGHBORHOODS.length; i++) {
      if (NEIGHBORHOODS[i].id === neighborhoodId && NEIGHBORHOODS[i].lat != null) {
        userLat = NEIGHBORHOODS[i].lat;
        userLon = NEIGHBORHOODS[i].lon;
      }
    }
  }

  profile = loadProfile();
  applyI18n();
  if (!profile.completedAt) openOnboarding();
  render();

  // ---------- Generic dialog focus management (all .overlay elements) ----------
  // Retrofits focus-trap / Escape-to-close / focus-restore onto every existing
  // overlay open/close site (~30 scattered `X.style.display = 'flex'/'none'`
  // calls) via a single MutationObserver, rather than rewriting each call site
  // individually. Handles nested overlays (e.g. the DV quick-exit confirm
  // opening appAlertOverlay on top of the still-open onboarding overlay) with
  // a simple stack: only the top-most open overlay traps Tab/Escape.
  var overlayStack = [];
  function focusableIn(el) {
    return Array.prototype.slice.call(
      el.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(function (n) { return n.offsetParent !== null; }); // visible only
  }
  function onOverlayOpened(el) {
    if (overlayStack.some(function (o) { return o.el === el; })) return; // already tracked
    overlayStack.push({ el: el, returnFocus: document.activeElement });
    // Only move focus if the dialog's own open code hasn't already placed focus
    // somewhere inside it (showAlert/showConfirm/showPrompt already focus a
    // specific default button/field synchronously; this observer callback runs
    // after that, so we must not clobber a deliberate choice like "focus OK").
    if (!el.contains(document.activeElement)) {
      var f = focusableIn(el);
      if (f.length) f[0].focus();
    }
  }
  function onOverlayClosed(el) {
    var idx = -1;
    for (var i = 0; i < overlayStack.length; i++) { if (overlayStack[i].el === el) { idx = i; break; } }
    if (idx === -1) return;
    var entry = overlayStack[idx];
    overlayStack.splice(idx, 1);
    // If another overlay is still open (e.g. this one closed only because a
    // different overlay is replacing it, like closeMore()+openVault() in the
    // same click handler), that overlay owns focus now — restoring focus to
    // this one's trigger element would yank focus to a control now hidden
    // behind the new overlay. Only restore when nothing else is open.
    if (overlayStack.length > 0) return;
    if (entry.returnFocus && document.body.contains(entry.returnFocus) && typeof entry.returnFocus.focus === 'function') {
      entry.returnFocus.focus();
    }
  }
  document.querySelectorAll('.overlay').forEach(function (el) {
    var mo = new MutationObserver(function () {
      var visible = el.style.display !== 'none' && el.style.display !== '';
      if (visible) onOverlayOpened(el); else onOverlayClosed(el);
    });
    mo.observe(el, { attributes: true, attributeFilter: ['style'] });
    // Initialize overlays that were already visible before the observer existed
    // (e.g. first-launch onboarding opens during startup).
    var visible = el.style.display !== 'none' && el.style.display !== '';
    if (visible) onOverlayOpened(el);
  });
  document.addEventListener('keydown', function (e) {
    if (!overlayStack.length) return;
    var top = overlayStack[overlayStack.length - 1].el;
    if (e.key === 'Tab') {
      var f = focusableIn(top);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!top.contains(document.activeElement)) { e.preventDefault(); first.focus(); } // focus escaped somehow
    } else if (e.key === 'Escape') {
      // Escape only ever triggers the panel's own existing Cancel/Close control
      // (never a Save/Delete/OK-on-a-destructive-confirm), so it can never bypass
      // a required confirmation — it's equivalent to the person tapping Cancel.
      var safeBtn = top.querySelector('#appAlertCancel') ||
        top.querySelector('[id$="Cancel"]') ||
        top.querySelector('[id$="Close"]');
      if (safeBtn) safeBtn.click();
      else top.style.display = 'none';
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      // Update-available flow: a new SW is deliberately held in 'waiting'
      // (see sw.js — skipWaiting is no longer automatic) until the person
      // confirms, so code never changes out from under an open tab silently.
      function promptUpdate(waitingWorker) {
        showConfirm(t('updateAvailable') + ' ' + t('updateNow') + '?').then(function (yes) {
          if (yes) waitingWorker.postMessage('SKIP_WAITING');
        });
      }
      if (reg.waiting) promptUpdate(reg.waiting);
      reg.addEventListener('updatefound', function () {
        var installing = reg.installing;
        if (!installing) return;
        installing.addEventListener('statechange', function () {
          if (installing.state === 'installed' && navigator.serviceWorker.controller) {
            promptUpdate(installing);
          }
        });
      });
      var reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (reloading) return;
        reloading = true;
        window.location.reload();
      });
    }).catch(function () {});
  }
})();
