export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Variants", href: "#variants" },
  { label: "App", href: "#app" },
  { label: "Agents", href: "#agents" },
  { label: "Contact", href: "#contact" },
];

export const PROBLEM_STATS = [
  {
    value: 50,
    suffix: "%",
    label: "Food lost pre-market",
    sublabel: "Avg. across West African supply chain",
  },
  {
    prefix: "$",
    value: 9,
    suffix: "B+",
    label: "Annual loss in Nigeria",
    sublabel: "Post-harvest food losses per year",
  },
  {
    value: 25,
    suffix: "%",
    label: "Vaccines spoiled in SSA",
    sublabel: "Due to cold chain failure",
  },
  {
    prefix: "$",
    value: 37,
    suffix: "/day",
    label: "Diesel generator cost",
    sublabel: "For small cold room operators",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Site visit",
    description: "We assess your location, solar irradiance, and cooling needs before any commitment.",
  },
  {
    number: "02",
    title: "Install day",
    description: "One technician, one day. No grid connection needed — solar panel included.",
  },
  {
    number: "03",
    title: "Lease begins",
    description: "Fixed monthly EaaS fee. Zero capex, no hidden costs, no fuel bills.",
  },
  {
    number: "04",
    title: "Always monitored",
    description: "GSM alerts and a remote dashboard track temperature, battery, and door events 24/7.",
  },
  {
    number: "05",
    title: "Renew or upgrade",
    description: "Swap your module, add units for neighbours, and earn a referral bonus.",
  },
];

export const VARIANTS = [
  {
    id: "market",
    label: "Chilla° Market",
    color: "#2D5A3D",
    accentClass: "bg-chilla-green",
    tempRange: "2°C – 10°C",
    description:
      "Built for market vendors and food aggregators who need reliable fresh-food storage without a generator.",
    bullets: [
      "300-litre modular compartments",
      "Holds 80 kg of fruits, vegetables, fish or meat",
      "Whisper-quiet compressor — no noise pollution",
      "Serves up to 18 traders from a single unit",
      "Optional produce-display shelf add-on",
    ],
    audience: "Food vendors · Market cooperatives · Aggregators",
  },
  {
    id: "pharma",
    label: "Chilla° Pharma",
    color: "#1A4A7A",
    accentClass: "bg-chilla-navy",
    tempRange: "2°C – 8°C ±0.5°",
    description:
      "WHO PQS-aligned cold storage for pharmacies and community drug stores requiring precise temperature integrity.",
    bullets: [
      "Calibrated ±0.5°C precision across compartments",
      "Dual-zone configuration (2–8°C / 15–25°C)",
      "Data-logger export for regulatory audit",
      "99.2% uptime on 4-hour battery backup",
      "Tamper-evident door seal with GSM alert",
    ],
    audience: "Retail pharmacies · LMIS facilities · Dispensaries",
  },
  {
    id: "clinic",
    label: "Chilla° Clinic",
    color: "#5A3C00",
    accentClass: "bg-chilla-clinic",
    tempRange: "-15°C – +8°C",
    description:
      "Dual-temperature vaccine and sample storage for primary health care centres and remote health posts.",
    bullets: [
      "Freezer compartment for OPV/rotavirus vaccines",
      "Refrigerator compartment for blood samples",
      "Designed to WHO EPI cold chain standards",
      "Offline-first: works 48 hrs without sun",
      "Compatible with health facility HMIS reporting",
    ],
    audience: "PHCs · Health posts · NGO clinics",
  },
];

export const IMPACT_STATS = [
  { value: 21, suffix: " days", label: "Shelf life vs 2 days without cold chain", prefix: "" },
  { value: 80, suffix: "%", label: "Spoilage reduction per kiosk", prefix: "" },
  { value: 37, suffix: "/day", label: "Diesel spend displaced", prefix: "$" },
  { value: 3.2, suffix: "T", label: "CO₂ avoided per kiosk / year", prefix: "" },
  { value: 18, suffix: "", label: "Traders served per Market unit", prefix: "" },
  { value: 0, suffix: "", label: "Vaccine failures at Clinic sites", prefix: "Zero " },
];

export const SDG_BADGES = [
  { number: "2", label: "Zero Hunger" },
  { number: "3", label: "Good Health" },
  { number: "5", label: "Gender Equality" },
  { number: "7", label: "Clean Energy" },
  { number: "8", label: "Decent Work" },
  { number: "13", label: "Climate Action" },
];

export const AGENTS = [
  {
    initials: "MN",
    name: "Mama Ngozi",
    role: "Market agent",
    location: "Mile 12 Lagos",
    headerColor: "#2D5A3D",
    quote:
      "Manages 2 units for 18 traders. Earns ₦22,000/month commission on top of her own stall.",
    segment: "Market",
    segmentColor: "bg-chilla-green",
  },
  {
    initials: "PA",
    name: "Pharmacist Amina",
    role: "Pharma agent",
    location: "Kano",
    headerColor: "#1A4A7A",
    quote:
      "No insulin storage failure in 11 months. Her pharmacy went from 3 complaints a week to zero.",
    segment: "Pharma",
    segmentColor: "bg-chilla-navy",
  },
  {
    initials: "NY",
    name: "Nurse Yetunde",
    role: "Clinic agent",
    location: "Ogun State",
    headerColor: "#5A3C00",
    quote:
      "Zero vaccine failures since install. The PHC now serves twice the catchment population.",
    segment: "Clinic",
    segmentColor: "bg-chilla-clinic",
  },
];

export const APP_FEATURES = [
  {
    title: "Live temperature monitoring",
    body:
      "View real-time temperature readings and get instant GSM alerts if the kiosk goes out of range.",
  },
  {
    title: "Lease payment management",
    body:
      "Pay monthly fees via USSD or card. View payment history and upcoming due dates.",
  },
  {
    title: "Maintenance & support",
    body:
      "Request a technician in-app. Track open tickets and get WhatsApp updates on resolution.",
  },
  {
    title: "Cold chain reports",
    body:
      "Download certified temperature logs for regulatory audits, donor reporting, or NAFDAC compliance.",
  },
];
