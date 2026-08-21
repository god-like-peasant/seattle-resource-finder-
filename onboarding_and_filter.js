/**
 * Seattle Resource App — First-run onboarding + smart filtering
 * ---------------------------------------------------------------
 * On first launch the app asks a short set of questions.
 * Answers become a user profile object that filters SEATTLE_RESOURCES
 * so the person only sees relevant services (no redundancy).
 *
 * System entry points (type === 'system') are ALWAYS shown at the top.
 */

// ---------- 1. Onboarding questions (exact copy ready for UI) ----------
var ONBOARDING_QUESTIONS = [
  {
    id: 'ageGroup',
    question: 'Which best describes you?',
    type: 'single',
    options: [
      { value: 'youth', label: 'Youth or young adult (under 25)' },
      { value: 'adult', label: 'Adult (25–59)' },
      { value: 'senior', label: 'Senior (60+)' }
    ]
  },
  {
    id: 'gender',
    question: 'Gender (optional — helps show women-only or men-only spaces)',
    type: 'single',
    options: [
      { value: 'woman', label: 'Woman / identifies as female' },
      { value: 'man', label: 'Man / identifies as male' },
      { value: 'nonbinary', label: 'Non-binary / another identity' },
      { value: 'preferNot', label: 'Prefer not to say' }
    ]
  },
  {
    id: 'hasKids',
    question: 'Are you with children under 18?',
    type: 'boolean',
    yesLabel: 'Yes — I have kids with me',
    noLabel: 'No'
  },
  {
    id: 'dv',
    question: 'Are you fleeing domestic violence or need a confidential safe place?',
    type: 'boolean',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'veteran',
    question: 'Are you a veteran (any branch, including National Guard / Reserves)?',
    type: 'boolean',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'vehicle',
    question: 'Are you currently living in a car, van, or RV?',
    type: 'boolean',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'pet',
    question: 'Do you have a pet with you?',
    type: 'boolean',
    yesLabel: 'Yes',
    noLabel: 'No'
  },
  {
    id: 'native',
    question: 'Do you identify as Native American, Alaska Native, or Indigenous?',
    type: 'boolean',
    yesLabel: 'Yes',
    noLabel: 'No / Prefer not to say'
  }
];

// ---------- 2. Default empty profile ----------
function createEmptyProfile() {
  return {
    ageGroup: null,      // 'youth' | 'adult' | 'senior'
    gender: null,        // 'woman' | 'man' | 'nonbinary' | 'preferNot'
    hasKids: false,
    dv: false,
    veteran: false,
    vehicle: false,
    pet: false,
    native: false,
    completedAt: null
  };
}

// ---------- 3. Filter logic ----------
/**
 * Returns resources appropriate for the given profile.
 * Rules (highest leverage):
 *  - type === 'system' → ALWAYS included (and should be sorted to top in UI)
 *  - If profile.hasKids → prioritize / keep family & Mary's Place style; de-emphasize single-adult-only
 *  - If profile.dv → strongly surface confidential DV shelters + DV hotline
 *  - If profile.veteran → surface all tags:['veteran'] + general
 *  - If profile.ageGroup === 'youth' → surface youth/YA shelters & day centers
 *  - If profile.vehicle → surface safe-parking + vehicle outreach
 *  - If profile.pet → keep pet-friendly notes visible
 *  - Gender filters only hide clearly restricted programs (women-only day centers when user is man, etc.)
 *  - Everything else that is general stays visible unless a hard restriction conflicts
 */
function filterResources(allResources, profile) {
  if (!profile || !profile.completedAt) {
    // First run not finished — show only system entry points + a short “complete profile” prompt
    return allResources.filter(r => r.type === 'system');
  }

  return allResources.filter(r => {
    // 1. System entry points always pass
    if (r.type === 'system') return true;

    const tags = r.tags || [];
    const name = (r.name || '').toLowerCase();
    const notes = (r.notes || '').toLowerCase();

    // 2. Hard restrictions by gender (only hide clearly single-gender programs)
    if (profile.gender === 'man') {
      if (name.includes('angeline') || name.includes('elizabeth gregory') ||
          (notes.includes('women only') && !notes.includes('all gender'))) {
        return false;
      }
    }
    if (profile.gender === 'woman') {
      if ((notes.includes("men's only") || notes.includes('men only') || notes.includes('men\'s overnight')) &&
          !notes.includes('women') && !notes.includes('all gender')) {
        // Keep most mixed; only drop pure men's shelters if we want strict filtering
        // For safety we still show them unless clearly exclusive — adjust if desired
      }
    }

    // 3. Youth path
    if (profile.ageGroup === 'youth') {
      // Prefer youth resources; still allow general adult resources
      // (no exclusion — youth can use many adult services)
    } else {
      // Adults/seniors: hide pure youth-only programs (ages 12-17 or 18-24 only)
      if (tags.includes('youthOnly') ||
          (notes.includes('ages 12') && notes.includes('17')) ||
          (name.includes('adolescent shelter') && !name.includes('young adult'))) {
        return false;
      }
    }

    // 4. DV path — when user is fleeing DV we keep everything but the UI should boost DV resources
    // (no exclusion of general resources)

    // 5. Veteran path — no exclusion; UI boosts veteran-tagged items
    // 6. Vehicle path — no exclusion
    // 7. Kids path — when hasKids, we can optionally de-prioritize pure single-adult shelters in the UI sort

    // 8. Native path — boost Chief Seattle Club / Seattle Indian Center in UI; no exclusion

    // Default: keep the resource
    return true;
  });
}

/**
 * Sort key for UI:
 *  1. System entry points first
 *  2. Then resources that match the user's special tags (dv, veteran, youth, vehicle, pet, native)
 *  3. Then everything else by type priority or distance (distance handled by map layer)
 */
function sortResourcesForProfile(resources, profile) {
  const typePriority = {
    system: 0,
    shelter: 1,
    safeparking: 2,
    daycenter: 3,
    shower: 4,
    meal: 5,
    foodbank: 6,
    medical: 7,
    recovery: 8,
    mentalhealth: 9,
    housinghelp: 10,
    outreach: 11,
    // ... rest lower
  };

  return [...resources].sort((a, b) => {
    // System always top
    if (a.type === 'system' && b.type !== 'system') return -1;
    if (b.type === 'system' && a.type !== 'system') return 1;

    // Boost matching specialty tags
    const aBoost = specialtyBoost(a, profile);
    const bBoost = specialtyBoost(b, profile);
    if (aBoost !== bBoost) return bBoost - aBoost;

    // Then by type priority
    const pa = typePriority[a.type] ?? 50;
    const pb = typePriority[b.type] ?? 50;
    return pa - pb;
  });
}

function specialtyBoost(resource, profile) {
  if (!profile) return 0;
  let score = 0;
  const tags = resource.tags || [];
  const name = (resource.name || '').toLowerCase();
  const notes = (resource.notes || '').toLowerCase();

  if (profile.dv && (tags.includes('dv') || name.includes('dawn') || name.includes('new beginnings') ||
      name.includes('lifewire') || name.includes('broadview') || name.includes('adwas') ||
      name.includes('dv hotline') || notes.includes('domestic violence') || notes.includes('confidential shelter'))) {
    score += 10;
  }
  if (profile.veteran && (tags.includes('veteran') || name.includes('veteran') || name.includes('ssvf') || name.includes('vash'))) {
    score += 10;
  }
  if (profile.ageGroup === 'youth' && (tags.includes('youth') || name.includes('youth') || name.includes('young adult') ||
      name.includes('roots') || name.includes('new horizons') || name.includes('orion') || name.includes('lambert'))) {
    score += 8;
  }
  if (profile.vehicle && (resource.type === 'safeparking' || name.includes('vehicle resident') || name.includes('safe parking'))) {
    score += 8;
  }
  if (profile.pet && (tags.includes('pet') || notes.includes('pet') || name.includes('pet'))) {
    score += 5;
  }
  if (profile.native && (name.includes('chief seattle') || name.includes('indian center') || name.includes('indian health') || name.includes('duwamish'))) {
    score += 6;
  }
  if (profile.hasKids && (name.includes("mary's place") || name.includes('family') || notes.includes('families with children'))) {
    score += 8;
  }
  if (profile.ageGroup === 'senior' && (notes.includes('50+') || notes.includes('62+') || notes.includes('senior') || name.includes('st. martin'))) {
    score += 5;
  }
  return score;
}

// ---------- 4. Suggested UI flow ----------
/*
  1. App opens → check localStorage for 'userProfile'
  2. If missing or !completedAt → show ONBOARDING_QUESTIONS one at a time (or as a short form)
  3. On finish → save profile with completedAt = Date.now()
  4. Call filterResources(SEATTLE_RESOURCES, profile)
  5. Call sortResourcesForProfile(filtered, profile)
  6. Render list with system cards sticky at top
  7. Provide a “Update my situation” button that re-opens the questionnaire
*/

// ---------- 5. Export for app ----------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ONBOARDING_QUESTIONS,
    createEmptyProfile,
    filterResources,
    sortResourcesForProfile
  };
}
