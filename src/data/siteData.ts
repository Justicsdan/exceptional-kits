export interface ProductItem {
  id: string;
  name: string;
  category: "Uniforms & Sets" | "Tactical & Duty Gear" | "Headwear & Branding" | "Field Accessories";
  priceLabel: string;
  unitPrice?: number;
  fabricSpec: string;
  stitchingSpec: string;
  description: string;
  image: string;
  badge: string;
  minOrder: string;
}

export const COMPANY_INFO = {
  name: "Exceptional Kits And Wears",
  shortName: "EKW",
  tagline: "...Quality. Style. Professionalism.",
  phoneDisplay: "0803 239 2875",
  phoneRaw: "2348032392875",
  location: "Nigeria • Nationwide Dispatch",
  pillars: ["Uniform Production", "Security Kits", "Branding Services"],
};

export const CATALOG_ITEMS: ProductItem[] = [
  {
    id: "complete-guard-set",
    name: "Complete Guard Uniform Set (Shirt + Trousers)",
    category: "Uniforms & Sets",
    priceLabel: "Quote on Request",
    unitPrice: 15000,
    fabricSpec: "Heavyweight Poly-Cotton Twill (240 GSM) • Fade-Resistant Dye",
    stitchingSpec: "Double-needle reinforced stress seams, bar-tacked pockets, shoulder epaulettes",
    description: "Full operational guard uniform engineered for daily patrol durability, crisp collar structure, and batch-to-batch colour consistency.",
    image: "/images/review-04-c206e0.jpeg",
    badge: "Most Ordered",
    minOrder: "Custom & Batch Orders",
  },
  {
    id: "dark-patrol-set",
    name: "Dark Tactical Patrol Uniform Set",
    category: "Uniforms & Sets",
    priceLabel: "Quote on Request",
    unitPrice: 15000,
    fabricSpec: "65/35 Polyester-Cotton Ripstop / Twill Blend • Sweat-Wicking",
    stitchingSpec: "Reinforced crotch gusset, button-down chest flaps, pen slot & badge tab",
    description: "High authority dark patrol uniform tailored for night shifts, VIP escort units, and corporate facility guards.",
    image: "/images/review-29-ee60b9.jpeg",
    badge: "Executive Patrol",
    minOrder: "Custom & Batch Orders",
  },
  {
    id: "single-duty-shirt",
    name: "Single Replacement Guard Shirt",
    category: "Uniforms & Sets",
    priceLabel: "Single-Piece Restock",
    unitPrice: 4500,
    fabricSpec: "Colour-Matched 220 to 240 GSM Twill • Saved Client Dye Lot",
    stitchingSpec: "Structured fused collar, reinforced shoulder straps, custom chest embroidery ready",
    description: "Order individual replacement shirts using your saved company size chart without waiting for a full team bulk run.",
    image: "/images/review-05-1d3205.jpeg",
    badge: "Single-Piece Restock",
    minOrder: "1 Piece",
  },
  {
    id: "tactical-duty-vest",
    name: "Black Multi-Pouch Tactical Duty Vest",
    category: "Tactical & Duty Gear",
    priceLabel: "Quote by Spec",
    fabricSpec: "600D / 1000D High-Tenacity Oxford Nylon • Breathable Mesh Lining",
    stitchingSpec: "Heavy-duty webbing, quick-release side buckles, radio & flashlight holsters, back ID panel",
    description: "Structured load bearing tactical vest designed for estate patrol teams, armed escort support, and event security supervisors.",
    image: "/images/review-08-96de4b.jpeg",
    badge: "Heavy-Duty Field Gear",
    minOrder: "1 Piece",
  },
  {
    id: "branded-security-caps",
    name: "Custom Embroidered Security & Patrol Caps",
    category: "Headwear & Branding",
    priceLabel: "Custom Branding",
    fabricSpec: "Brushed Heavy Cotton Bull Denim / Twill • Reinforced Peak",
    stitchingSpec: "High-density 3D/flat embroidery, sweatband lining, adjustable brass buckle or Velcro strap",
    description: "Peak caps, face caps, and berets finished with crisp agency crests and clean stitching that holds its crown shape.",
    image: "/images/review-09-4e0868.jpeg",
    badge: "In-House Embroidery",
    minOrder: "5 Pieces",
  },
  {
    id: "agency-patches-epaulettes",
    name: "Woven & Embroidered Agency Badges, Crests & Epaulettes",
    category: "Headwear & Branding",
    priceLabel: "Included / Add-On",
    fabricSpec: "Colourfast Madeira/Polyester Embroidery Thread on Twill Backing",
    stitchingSpec: "Merrowed overlock borders, sew-on or hook-and-loop backing, rank bars",
    description: "Precision chest badges, shoulder flashes, and rank epaulettes digitized directly from your organisation logo.",
    image: "/images/review-07-938787.jpeg",
    badge: "Brand Identity",
    minOrder: "10 Pieces",
  },
  {
    id: "field-accessories-kit",
    name: "Complete Duty Accessories (Belts, Lanyards, Whistles & Pads)",
    category: "Field Accessories",
    priceLabel: "Bundle / Unit",
    fabricSpec: "Heavy Webbing Belts, Chrome Pealess Whistles, Braided Lanyards, Knee/Elbow Pads",
    stitchingSpec: "Riveted belt hardware, reinforced lanyard clips, impact-resistant polymer shells",
    description: "Everything required to deploy a guard in full regalia from day one without sourcing accessories from multiple vendors.",
    image: "/images/review-11-332315.jpeg",
    badge: "Full Kit Ready",
    minOrder: "1 Kit",
  },
];

export const WORKSHOP_GALLERY = [
{
    code: "KIT-29",
    title: "Supervisor Long-Sleeve Duty Shirt",
    category: "Uniforms & Sets",
    image: "/images/review-13-4eb26e.jpeg",
  },
{
    code: "KIT-01",
    title: "Two-Way Patrol Radios & Earpieces",
    category: "Field Accessories",
    image: "/images/two-way-radio-set.png",
  },
{
    code: "KIT-02",
    title: "Structured Patrol Duty Shirt",
    category: "Uniforms & Sets",
    image: "/images/review-14-1b968e.jpeg",
  },
{
    code: "KIT-04",
    title: "Short-Sleeve Epaulette Security Duty Shirt",
    category: "Uniforms & Sets",
    image: "/images/black-duty-shirt-epaulettes.png",
  },
{
    code: "KIT-05",
    title: "Handheld Security Wand Metal Detector",
    category: "Field Accessories",
    image: "/images/handheld-metal-detector.png",
  },
{
    code: "KIT-06",
    title: "Rechargeable LED Security Patrol Searchlight",
    category: "Field Accessories",
    image: "/images/led-security-searchlight.png",
  },
{
    code: "KIT-07",
    title: "Reinforced Security Patrol Trousers",
    category: "Uniforms & Sets",
    image: "/images/review-18-046a5a.jpeg",
  },
{
    code: "KIT-08",
    title: "Reflective Duty & Field Vest",
    category: "Tactical & Duty Gear",
    image: "/images/review-23-cacef7.jpeg",
  },
{
    code: "KIT-10",
    title: "Embroidered Security Peak Cap",
    category: "Headwear & Branding",
    image: "/images/review-02-504304.jpeg",
  },
{
    code: "KIT-11",
    title: "Shoulder Epaulettes & Rank Slides",
    category: "Headwear & Branding",
    image: "/images/review-06-25fc05.jpeg",
  },
{
    code: "KIT-12",
    title: "Heavy-Duty Webbing Duty Belt",
    category: "Field Accessories",
    image: "/images/review-16-d9ba20.jpeg",
  },
{
    code: "KIT-13",
    title: "Polybagged Bulk Guard Uniform Batch",
    category: "Uniforms & Sets",
    image: "/images/bagged-uniform-batch.jpeg",
  },
{
    code: "KIT-14",
    title: "Ceremonial Cord & White Trim Kit",
    category: "Field Accessories",
    image: "/images/yellow-cord-white-trim.jpeg",
  },
{
    code: "KIT-15",
    title: "Custom Chest Crest & Name Patch",
    category: "Headwear & Branding",
    image: "/images/review-28-93fd58.jpeg",
  },
{
    code: "KIT-16",
    title: "Black Multi-Pouch Tactical Duty Vest",
    category: "Tactical & Duty Gear",
    image: "/images/black-tactical-vest.png",
  },
{
    code: "KIT-17",
    title: "High-Visibility Reflective Security Vest",
    category: "Tactical & Duty Gear",
    image: "/images/hi-vis-security-vest.png",
  },
{
    code: "KIT-18",
    title: "Navy Security Cargo Trousers & Patrol Boots",
    category: "Uniforms & Sets",
    image: "/images/navy-cargo-pants-boots.png",
  },
{
    code: "KIT-21",
    title: "Facility & Estate Guard Uniform Set",
    category: "Uniforms & Sets",
    image: "/images/review-31-4a1a55.jpeg",
  },
{
    code: "KIT-22",
    title: "Tartan Plaid School Pinafore",
    category: "Uniforms & Sets",
    image: "/images/plaid-school-pinafore.jpeg",
  },
{
    code: "KIT-23",
    title: "Student Day Uniform & Skirt Set",
    category: "Uniforms & Sets",
    image: "/images/review-33-eb498f.jpeg",
  },
{
    code: "KIT-24",
    title: "Tailored School Shirt & Trouser Set",
    category: "Uniforms & Sets",
    image: "/images/review-34-7763f8.jpeg",
  },
{
    code: "KIT-25",
    title: "Institutional Polo & Sports Kit",
    category: "Uniforms & Sets",
    image: "/images/review-35-6f71c0.jpeg",
  },
{
    code: "KIT-26",
    title: "Custom Embroidered School Crest",
    category: "Headwear & Branding",
    image: "/images/review-36-6a0f9e.jpeg",
  },
{
    code: "KIT-27",
    title: "Guardian Lanyard & ID Holder Pack",
    category: "Field Accessories",
    image: "/images/review-37-32cbe6.jpeg",
  },
{
    code: "KIT-28",
    title: "All-Weather Patrol Outer Jacket",
    category: "Tactical & Duty Gear",
    image: "/images/review-38-271124.jpeg",
  },
{
    code: "KIT-29",
    title: "Supervisor Long-Sleeve Duty Shirt",
    category: "Uniforms & Sets",
    image: "/images/review-12-5e50d6.jpeg",
  },
{
    code: "KIT-31",
    title: "Guard Utility Pouch & Belt Loop",
    category: "Field Accessories",
    image: "/images/review-15-a6308d.jpeg",
  },
{
    code: "KIT-32",
    title: "Night Patrol Tactical Gear Set",
    category: "Tactical & Duty Gear",
    image: "/images/review-24-56ce73.jpeg",
  },
{
    code: "KIT-33",
    title: "Quality-Checked Institutional Kit",
    category: "Uniforms & Sets",
    image: "/images/review-17-51baac.jpeg",
  },
];

export const PRODUCTION_STAGES = [
  {
    step: "01",
    title: "Fabric Sourcing & Shade-Lock Verification",
    detail:
      "We check fabric weight (GSM), weave tightness, and colourfastness before cutting, and log your shade so reorders 6 to 12 months later match.",
  },
  {
    step: "02",
    title: "Digital & Physical Client Size Chart Archiving",
    detail:
      "We save guard measurements and size breakdowns (S to 3XL) under your company profile so onboarding new staff does not slow you down.",
  },
  {
    step: "03",
    title: "Industrial Pattern Cutting & Reinforced Stitching",
    detail:
      "Double-needle seams, bar-tacked pocket corners, reinforced crotch gussets, and structured collars engineered for active 12-hour shifts.",
  },
  {
    step: "04",
    title: "In-House Embroidery, Badges & Screen Branding",
    detail:
      "High-density chest crests, shoulder flashes, reflective back prints, and custom cap embroidery executed in-house without third-party middlemen.",
  },
  {
    step: "05",
    title: "Piece-by-Piece QC Inspection & Size Tagging",
    detail:
      "Every shirt, trouser, vest, and cap is thread-trimmed, pressed, inspected against your size sheet, and packed by guard name or size bundle for instant distribution.",
  },
];

export const SECTORS = [
  {
    title: "Private Security Companies (Guard Forces)",
    challenge: "High guard turnover forces constant small reorders that off-the-rack vendors refuse or mismatch in colour.",
    solution:
      "Saved company size charts + single-piece replacement shirts (single-piece) and trousers (single-piece) matched to your exact agency shade.",
    recommendedKit: "Complete Guard Set + Embroidered Peak Cap + Lanyard/Whistle + Saved Size Registry",
  },
  {
    title: "Gated Residential Estates & Facility Management",
    challenge: "Estate boards require sharp, recognisable patrol officers and tactical visibility for night gates.",
    solution:
      "Tailored khaki or dark patrol sets paired with multi-pouch tactical vests, reflective lettering, and durable duty belts.",
    recommendedKit: "Patrol Uniform Set + Black Tactical Duty Vest + Branded Cap + Duty Belt",
  },
  {
    title: "Corporate Headquarters, Banks & Industrial Plants",
    challenge: "Front-of-house security and technical support staff must look crisp, structured, and executive.",
    solution:
      "Precision-fitted shirts with clean collar stays, crisp chest embroidery, and fade-resistant tailored trousers.",
    recommendedKit: "Executive Guard Set + Woven Chest Crest + Shoulder Epaulettes",
  },
  {
    title: "Event Security, Protocol & Crowd Control Teams",
    challenge: "Fast turnaround times for high-visibility team identification across concerts, conferences, and VIP details.",
    solution:
      "Rapid batch production of branded tactical vests, caps, and uniform sets with high-contrast agency branding.",
    recommendedKit: "Tactical Duty Vest + Branded Face Cap + Custom Back ID Panel",
  },
];