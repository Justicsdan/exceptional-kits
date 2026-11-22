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
    description:
      "Full operational guard uniform engineered for daily patrol durability, crisp collar structure, and batch-to-batch color consistency.",
    image: "/images/cap-line.jpeg",
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
    description:
      "High-authority dark patrol uniform tailored for night shifts, VIP escort units, and corporate facility guards.",
    image: "/images/workshop-view.jpeg",
    badge: "Executive Patrol",
    minOrder: "Custom & Batch Orders",
  },
  {
    id: "single-duty-shirt",
    name: "Single Replacement Guard Shirt",
    category: "Uniforms & Sets",
    priceLabel: "Single-Piece Restock",
    unitPrice: 4500,
    fabricSpec: "Color-Matched 220–240 GSM Twill • Saved Client Dye Lot",
    stitchingSpec: "Structured fused collar, reinforced shoulder straps, custom chest embroidery ready",
    description:
      "Order individual replacement shirts using your saved company size chart without waiting for a full team bulk run.",
    image: "/images/visor-cap.jpeg",
    badge: "Single-Piece Restock",
    minOrder: "1 Piece",
  },
  {
    id: "single-duty-trouser",
    name: "Single Replacement Duty Trousers",
    category: "Uniforms & Sets",
    priceLabel: "Single-Piece Restock",
    unitPrice: 6000,
    fabricSpec: "Heavy-Duty Abrasion-Resistant Twill • Deep Pocket Bags",
    stitchingSpec: "Heavy-duty brass/nylon zipper, wide belt loops for tactical duty belts, triple-stitched seat",
    description:
      "Built to withstand daily sitting, kneeling, and patrol movement without seam splits or premature knee fade.",
    image: "/images/web-belt.jpeg",
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
    description:
      "Structured load-bearing tactical vest designed for estate patrol teams, armed escort support, and event security supervisors.",
    image: "/images/duty-gear.jpeg",
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
    description:
      "Peak caps, face caps, and berets finished with crisp agency crests and clean stitching that holds its crown shape.",
    image: "/images/field-belt.jpeg",
    badge: "In-House Embroidery",
    minOrder: "5 Pieces",
  },
  {
    id: "agency-patches-epaulettes",
    name: "Woven & Embroidered Agency Badges, Crests & Epaulettes",
    category: "Headwear & Branding",
    priceLabel: "Included / Add-On",
    fabricSpec: "Colorfast Madeira/Polyester Embroidery Thread on Twill Backing",
    stitchingSpec: "Merrowed overlock borders, sew-on or hook-and-loop backing, rank bars",
    description:
      "Precision chest badges, shoulder flashes, and rank epaulettes digitized directly from your organization logo.",
    image: "/images/crew-shirt.jpeg",
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
    description:
      "Everything required to deploy a guard in full regalia from day one without sourcing accessories from multiple vendors.",
    image: "/images/guard-set.jpeg",
    badge: "Full Kit Ready",
    minOrder: "1 Kit",
  },
];

export const WORKSHOP_GALLERY = [
{
    code: "KIT-29",
    title: "Corporate Security Guard Pair & Cap Set",
    category: "Uniforms & Sets",
    image: "/images/tactical-vest.jpeg",
  },
{
    code: "KIT-01",
    title: "Workshop Sample 01",
    category: "Uniforms & Sets",
    image: "/images/stitch-work.jpeg",
  },
{
    code: "KIT-02",
    title: "Workshop Sample 02",
    category: "Uniforms & Sets",
    image: "/images/kit-bundle.jpeg",
  },
{
    code: "KIT-03",
    title: "Workshop Sample 03",
    category: "Uniforms & Sets",
    image: "/images/kit-a.jpeg",
  },
{
    code: "KIT-04",
    title: "Workshop Sample 04",
    category: "Uniforms & Sets",
    image: "/images/kit-b.jpeg",
  },
{
    code: "KIT-05",
    title: "Workshop Sample 05",
    category: "Uniforms & Sets",
    image: "/images/kit-c.jpeg",
  },
{
    code: "KIT-06",
    title: "Workshop Sample 06",
    category: "Uniforms & Sets",
    image: "/images/kit-d.jpeg",
  },
{
    code: "KIT-07",
    title: "Workshop Sample 07",
    category: "Uniforms & Sets",
    image: "/images/kit-e.jpeg",
  },
{
    code: "KIT-08",
    title: "Workshop Sample 08",
    category: "Uniforms & Sets",
    image: "/images/kit-f.jpeg",
  },
{
    code: "KIT-09",
    title: "Workshop Sample 09",
    category: "Uniforms & Sets",
    image: "/images/kit-g.jpeg",
  },
{
    code: "KIT-10",
    title: "Workshop Sample 10",
    category: "Uniforms & Sets",
    image: "/images/kit-h.jpeg",
  },
{
    code: "KIT-11",
    title: "Workshop Sample 11",
    category: "Uniforms & Sets",
    image: "/images/kit-i.jpeg",
  },
{
    code: "KIT-12",
    title: "Workshop Sample 12",
    category: "Uniforms & Sets",
    image: "/images/kit-j.jpeg",
  },
{
    code: "KIT-13",
    title: "Workshop Sample 13",
    category: "Uniforms & Sets",
    image: "/images/kit-k.jpeg",
  },
{
    code: "KIT-14",
    title: "Workshop Sample 14",
    category: "Uniforms & Sets",
    image: "/images/kit-l.jpeg",
  },
{
    code: "KIT-15",
    title: "Workshop Sample 15",
    category: "Uniforms & Sets",
    image: "/images/kit-m.jpeg",
  },
{
    code: "KIT-16",
    title: "Workshop Sample 16",
    category: "Uniforms & Sets",
    image: "/images/kit-n.jpeg",
  },
{
    code: "KIT-17",
    title: "Workshop Sample 17",
    category: "Uniforms & Sets",
    image: "/images/kit-o.jpeg",
  },
{
    code: "KIT-18",
    title: "Workshop Sample 18",
    category: "Uniforms & Sets",
    image: "/images/kit-p.jpeg",
  },
{
    code: "KIT-21",
    title: "Workshop Sample 19",
    category: "Uniforms & Sets",
    image: "/images/kit-s.jpeg",
  },
{
    code: "KIT-22",
    title: "Workshop Sample 20",
    category: "Uniforms & Sets",
    image: "/images/kit-t.jpeg",
  },
{
    code: "KIT-23",
    title: "Workshop Sample 21",
    category: "Uniforms & Sets",
    image: "/images/kit-u.jpeg",
  },
{
    code: "KIT-24",
    title: "Workshop Sample 22",
    category: "Uniforms & Sets",
    image: "/images/kit-v.jpeg",
  },
{
    code: "KIT-25",
    title: "Workshop Sample 23",
    category: "Uniforms & Sets",
    image: "/images/kit-w.jpeg",
  },
{
    code: "KIT-26",
    title: "Workshop Sample 24",
    category: "Uniforms & Sets",
    image: "/images/kit-x.jpeg",
  },
{
    code: "KIT-27",
    title: "Workshop Sample 25",
    category: "Uniforms & Sets",
    image: "/images/kit-y.jpeg",
  },
{
    code: "KIT-28",
    title: "Workshop Sample 26",
    category: "Uniforms & Sets",
    image: "/images/kit-z.jpeg",
  },
{
    code: "KIT-29",
    title: "Workshop Sample 27",
    category: "Uniforms & Sets",
    image: "/images/kit-a-alt.jpeg",
  },
{
    code: "KIT-31",
    title: "Workshop Sample 28",
    category: "Uniforms & Sets",
    image: "/images/kit-c-alt.jpeg",
  },
{
    code: "KIT-32",
    title: "Workshop Sample 29",
    category: "Uniforms & Sets",
    image: "/images/kit-d-alt.jpeg",
  },
{
    code: "KIT-33",
    title: "Workshop Sample 30",
    category: "Uniforms & Sets",
    image: "/images/kit-e-alt.jpeg",
  },
];

export const PRODUCTION_STAGES = [
  {
    step: "01",
    title: "Fabric Sourcing & Shade-Lock Verification",
    detail:
      "We test fabric weight (GSM), weave tightness, and colorfastness before cutting—logging your organization's exact fabric shade so reorders 6–12 months later match seamlessly.",
  },
  {
    step: "02",
    title: "Digital & Physical Client Size Chart Archiving",
    detail:
      "Every guard measurement or standard size breakdown (S–3XL) is saved under your company profile, eliminating re-measurement delays when onboarding new staff.",
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
    challenge: "High guard turnover forces constant small reorders that off-the-rack vendors refuse or mismatch in color.",
    solution:
      "Saved company size charts + single-piece replacement shirts (single-piece) and trousers (single-piece) matched to your exact agency shade.",
    recommendedKit: "Complete Guard Set + Embroidered Peak Cap + Lanyard/Whistle + Saved Size Registry",
  },
  {
    title: "Gated Residential Estates & Facility Management",
    challenge: "Estate boards require sharp, recognizable patrol officers and tactical visibility for night gates.",
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
