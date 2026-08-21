var TYPE_META = {
  system:      { icon:'🧭', label:'System Entry Point' },
  shelter:     { icon:'🌙', label:'Overnight Shelter' },
  village:     { icon:'🏡', label:'Tiny House Village' },
  daycenter:   { icon:'🛋️', label:'Day Center' },
  meal:        { icon:'🍲', label:'Free Meal' },
  foodbank:    { icon:'🥫', label:'Food Bank' },
  shower:      { icon:'🚿', label:'Shower / Laundry' },
  clothing:    { icon:'👕', label:'Clothing' },
  medical:     { icon:'⚕️', label:'Medical Clinic' },
  dental:      { icon:'🦷', label:'Dental Clinic' },
  mentalhealth:{ icon:'💬', label:'Mental Health' },
  recovery:    { icon:'🌱', label:'Recovery Support' },
  outreach:    { icon:'🤝', label:'Case Mgmt / Outreach' },
  housinghelp: { icon:'🔑', label:'Housing Navigation' },
  documents:   { icon:'🪪', label:'ID / Documents' },
  mail:        { icon:'✉️', label:'Mail Service' },
  storage:     { icon:'🔐', label:'Storage Lockers' },
  charging:    { icon:'🔌', label:'Charging / Wi-Fi' },
  water:       { icon:'💧', label:'Water' },
  work:        { icon:'💵', label:'Day Labor / Work' },
  legal:       { icon:'⚖️', label:'Legal Aid' },
  pets:        { icon:'🐾', label:'Pet-Friendly' },
  warming:     { icon:'🔥', label:'Warming / Cooling' },
  library:     { icon:'📚', label:'Library Services' },
  benefits:    { icon:'📝', label:'Benefits Enrollment' },
  transport:   { icon:'🚌', label:'Transportation Help' },
  safeparking: { icon:'🚗', label:'Safe Parking / Vehicle' }
};

// Fallback-safe lookup — never returns undefined, so UI never shows "undefined undefined"
function typeMeta(type) {
  return TYPE_META[type] || { icon:'📍', label:'Resource' };
}

// Stable display order for filter chips (system first, then roughly by how
// often each category is the FIRST thing someone needs on the street)
var TYPE_ORDER = [
  'system', 'shelter', 'safeparking', 'village', 'daycenter',
  'meal', 'foodbank', 'shower', 'clothing', 'water',
  'medical', 'dental', 'mentalhealth', 'recovery',
  'outreach', 'housinghelp', 'documents', 'benefits',
  'mail', 'storage', 'charging', 'library',
  'work', 'legal', 'transport', 'pets', 'warming'
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TYPE_META, typeMeta, TYPE_ORDER };
}
