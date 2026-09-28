export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Nodes", href: "#nodes" },
  { label: "Intelligence", href: "#app" },
  { label: "Network", href: "#agents" },
  { label: "Contact", href: "#contact" },
];

export const PROBLEM_STATS = [
  {
    value: 45,
    suffix: "%",
    label: "of African produce lost before sale",
    sublabel: "Post-harvest losses across the supply chain",
  },
  {
    prefix: "$",
    value: 48,
    suffix: "B",
    label: "annual post-harvest losses in Africa",
    sublabel: "FAO estimate, food value lost annually",
  },
  {
    value: 3,
    suffix: "days",
    label: "average shelf life without cold storage",
    sublabel: "vs. 21 days with reliable cold chain",
  },
  {
    prefix: "",
    value: 70,
    suffix: "%",
    label: "of small farmers lack cold access",
    sublabel: "Selling immediately after harvest at low prices",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Find storage",
    description: "Search for available cold-storage capacity near your farm, market or business. Filter by commodity, quantity and duration.",
  },
  {
    number: "02",
    title: "Store your goods",
    description: "Book capacity and deposit your produce. Every kilogram is logged with commodity, quantity, and entry temperature.",
  },
  {
    number: "03",
    title: "Monitor in real time",
    description: "Track temperature, humidity, energy status and door events from your phone. Get alerts if anything changes.",
  },
  {
    number: "04",
    title: "Sell when ready",
    description: "Retrieve your goods when market prices are favorable. Every storage session generates a verified cold-chain record.",
  },
];

export const NODE_CLASSES = [
  {
    id: "mini",
    label: "Chilla° Mini",
    color: "#2D5A3D",
    tempRange: "0°C – 12°C",
    capacity: "100 – 300 kg",
    description:
      "Compact, solar-powered cold storage for individual market traders and small-scale farmers. Fits in a market stall.",
    bullets: [
      "100–300 kg capacity",
      "Designed for individual traders",
      "Tomatoes, leafy vegetables, fruits",
      "Pay-per-kg-per-day",
      "GSM monitoring included",
    ],
    audience: "Market traders · Smallholder farmers",
  },
  {
    id: "market",
    label: "Chilla° Market",
    color: "#B07800",
    tempRange: "0°C – 10°C",
    capacity: "0.5 – 2 tonnes",
    description:
      "Shared cold-storage node serving a cluster of traders in a market. Managed by a local operator. Highest utilization model.",
    bullets: [
      "500 kg – 2 tonne capacity",
      "Serves 10–40 traders per node",
      "Multi-commodity compartments",
      "Shared subscription model",
      "Inventory management per customer",
    ],
    audience: "Market clusters · Aggregators",
  },
  {
    id: "hub",
    label: "Chilla° Hub",
    color: "#1A4A7A",
    tempRange: "-5°C – +8°C",
    capacity: "2 – 10 tonnes",
    description:
      "Large-capacity cold-storage node for aggregators, food processors and institutional buyers. Full IoT stack and API access.",
    bullets: [
      "2–10 tonne capacity",
      "Multi-temperature zones",
      "Inventory and batching software",
      "Enterprise contracts available",
      "API integration for ERP / supply chain",
    ],
    audience: "Aggregators · Food processors · Exporters",
  },
];

export const FLYWHEEL_STEPS = [
  { label: "Deploy cold nodes", icon: "◉" },
  { label: "Attract produce", icon: "↓" },
  { label: "Generate transactions", icon: "↓" },
  { label: "Collect cold-chain data", icon: "↓" },
  { label: "Improve utilisation & pricing", icon: "↓" },
  { label: "Attract buyers & logistics", icon: "↓" },
  { label: "Better node economics", icon: "↓" },
  { label: "Deploy more nodes", icon: "↺" },
];

export const IMPACT_STATS = [
  { value: 21, suffix: " days", label: "shelf life vs 3 days without cold chain", prefix: "" },
  { value: 45, suffix: "%", label: "reduction in post-harvest losses per node", prefix: "Up to " },
  { value: 37, suffix: "/day", label: "diesel spend displaced per site", prefix: "$" },
  { value: 3.2, suffix: "T", label: "CO₂ avoided per node per year", prefix: "" },
  { value: 30, suffix: "+", label: "traders served per Market node", prefix: "" },
  { value: 99, suffix: ".2%", label: "network uptime across monitored nodes", prefix: "" },
];

export const SDG_BADGES = [
  { number: "2", label: "Zero Hunger" },
  { number: "8", label: "Decent Work" },
  { number: "9", label: "Industry & Innovation" },
  { number: "11", label: "Sustainable Cities" },
  { number: "12", label: "Responsible Consumption" },
  { number: "13", label: "Climate Action" },
];

export const AGENTS = [
  {
    initials: "AO",
    name: "Adeola Okafor",
    role: "Market node operator",
    location: "Bodija Market, Ibadan",
    headerColor: "#B07800",
    quote:
      "I manage 2 nodes for 28 traders. They used to sell tomatoes the same day. Now they wait for Friday prices.",
    segment: "Market",
    segmentColor: "bg-chilla-amber-dark",
  },
  {
    initials: "FK",
    name: "Fatima Kwari",
    role: "Hub operator",
    location: "Kano State",
    headerColor: "#1A4A7A",
    quote:
      "The aggregators I work with now move 3× more volume because they can hold inventory through the week.",
    segment: "Hub",
    segmentColor: "bg-chilla-navy",
  },
  {
    initials: "CN",
    name: "Chisom Nwosu",
    role: "Mini node operator",
    location: "Mile 12, Lagos",
    headerColor: "#2D5A3D",
    quote:
      "Every trader I onboard becomes a repeat customer. The monitoring app builds trust because the temperature is always visible.",
    segment: "Mini",
    segmentColor: "bg-chilla-green",
  },
];

export const APP_FEATURES = [
  {
    title: "Real-time temperature & humidity",
    body:
      "Every kilogram in the network is monitored continuously. Instant alerts if temperature exceeds safe thresholds.",
  },
  {
    title: "Inventory management",
    body:
      "Log commodity, quantity, owner and expected retrieval date. Every storage session generates a verified cold-chain record.",
  },
  {
    title: "Storage payments",
    body:
      "Pay-per-kg-per-day via USSD or card. View payment history, active storage and upcoming charges.",
  },
  {
    title: "Cold-chain record",
    body:
      "Every batch produces a tamper-evident record: temperature range, door events, storage duration. Useful for buyers, insurers and financiers.",
  },
];
