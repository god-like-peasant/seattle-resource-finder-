// label = English display label. labelEs = Spanish display label.
// These are the ONLY place category display names are defined — app.js reads
// them through typeLabel()/typeMeta() rather than hardcoding English text, so
// switching languages actually translates every card's category line too.
var TYPE_META = {
  system:      { icon:'🧭', label:'System Entry Point',       labelEs:'Punto de acceso del sistema' },
  shelter:     { icon:'🌙', label:'Overnight Shelter',         labelEs:'Albergue nocturno' },
  village:     { icon:'🏡', label:'Tiny House Village',        labelEs:'Aldea de casas pequeñas' },
  daycenter:   { icon:'🛋️', label:'Day Center',                labelEs:'Centro de día' },
  meal:        { icon:'🍲', label:'Free Meal',                 labelEs:'Comida gratuita' },
  foodbank:    { icon:'🥫', label:'Food Bank',                 labelEs:'Banco de alimentos' },
  shower:      { icon:'🚿', label:'Shower / Laundry',          labelEs:'Ducha / Lavandería' },
  clothing:    { icon:'👕', label:'Clothing',                  labelEs:'Ropa' },
  medical:     { icon:'⚕️', label:'Medical Clinic',            labelEs:'Clínica médica' },
  dental:      { icon:'🦷', label:'Dental Clinic',              labelEs:'Clínica dental' },
  mentalhealth:{ icon:'💬', label:'Mental Health',              labelEs:'Salud mental' },
  recovery:    { icon:'🌱', label:'Recovery Support',           labelEs:'Apoyo de recuperación' },
  outreach:    { icon:'🤝', label:'Case Mgmt / Outreach',       labelEs:'Gestión de casos / Alcance' },
  housinghelp: { icon:'🔑', label:'Housing Navigation',         labelEs:'Navegación de vivienda' },
  documents:   { icon:'🪪', label:'ID / Documents',             labelEs:'Identificación / Documentos' },
  mail:        { icon:'✉️', label:'Mail Service',               labelEs:'Servicio de correo' },
  storage:     { icon:'🔐', label:'Storage Lockers',            labelEs:'Casilleros de almacenamiento' },
  charging:    { icon:'🔌', label:'Charging / Wi-Fi',           labelEs:'Carga / Wi-Fi' },
  water:       { icon:'💧', label:'Water',                      labelEs:'Agua' },
  work:        { icon:'💵', label:'Day Labor / Work',           labelEs:'Trabajo diario / Empleo' },
  legal:       { icon:'⚖️', label:'Legal Aid',                  labelEs:'Ayuda legal' },
  pets:        { icon:'🐾', label:'Pet-Friendly',               labelEs:'Acepta mascotas' },
  warming:     { icon:'🔥', label:'Warming / Cooling',          labelEs:'Centro de calor / frío' },
  library:     { icon:'📚', label:'Library Services',           labelEs:'Servicios de biblioteca' },
  benefits:    { icon:'📝', label:'Benefits Enrollment',        labelEs:'Inscripción a beneficios' },
  transport:   { icon:'🚌', label:'Transportation Help',        labelEs:'Ayuda de transporte' },
  safeparking: { icon:'🚗', label:'Safe Parking / Vehicle',     labelEs:'Estacionamiento seguro' }
};

// Fallback-safe lookup — never returns undefined, so UI never shows "undefined undefined"
function typeMeta(type) {
  return TYPE_META[type] || { icon:'📍', label:'Resource', labelEs:'Recurso' };
}

// Language-aware label lookup. Falls back to English if a Spanish label is
// ever missing, so a translation gap never shows a blank category.
function typeLabel(type, lang) {
  var meta = typeMeta(type);
  if (lang === 'es') return meta.labelEs || meta.label;
  return meta.label;
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
  module.exports = { TYPE_META, typeMeta, typeLabel, TYPE_ORDER };
}
