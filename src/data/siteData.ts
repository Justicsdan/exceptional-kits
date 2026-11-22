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
    image: "/images/img-16.jpeg",
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
    image: "/images/img-18.jpeg",
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
    image: "/images/img-08.jpeg",
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
    image: "/images/img-09.jpeg",
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
    image: "/images/img-17.jpeg",
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
    image: "/images/img-01.jpeg",
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
    image: "/images/img-06.jpeg",
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
    image: "/images/img-04.jpeg",
    badge: "Full Kit Ready",
    minOrder: "1 Kit",
  },
];

export const WORKSHOP_GALLERY = [
  {
    code: "KIT-01",
    title: "WhatsApp Image 2026 10 01 at 6.20.39 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-20-39-pm.jpeg",
  },
  {
    code: "KIT-02",
    title: "WhatsApp Image 2026 10 01 at 6.20.41 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-20-41-pm.jpeg",
  },
  {
    code: "KIT-03",
    title: "WhatsApp Image 2026 10 01 at 6.21.02 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-02-pm.jpeg",
  },
  {
    code: "KIT-04",
    title: "WhatsApp Image 2026 10 01 at 6.21.11 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-11-pm-1.jpeg",
  },
  {
    code: "KIT-05",
    title: "WhatsApp Image 2026 10 01 at 6.21.11 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-11-pm.jpeg",
  },
  {
    code: "KIT-06",
    title: "WhatsApp Image 2026 10 01 at 6.21.12 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-12-pm.jpeg",
  },
  {
    code: "KIT-07",
    title: "WhatsApp Image 2026 10 01 at 6.21.13 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-13-pm.jpeg",
  },
  {
    code: "KIT-08",
    title: "WhatsApp Image 2026 10 01 at 6.21.14 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-14-pm.jpeg",
  },
  {
    code: "KIT-09",
    title: "WhatsApp Image 2026 10 01 at 6.21.15 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-15-pm.jpeg",
  },
  {
    code: "KIT-10",
    title: "WhatsApp Image 2026 10 01 at 6.21.16 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-16-pm.jpeg",
  },
  {
    code: "KIT-11",
    title: "WhatsApp Image 2026 10 01 at 6.21.18 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-18-pm.jpeg",
  },
  {
    code: "KIT-12",
    title: "WhatsApp Image 2026 10 01 at 6.21.19 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-19-pm.jpeg",
  },
  {
    code: "KIT-13",
    title: "WhatsApp Image 2026 10 01 at 6.21.20 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-20-pm-1.jpeg",
  },
  {
    code: "KIT-14",
    title: "WhatsApp Image 2026 10 01 at 6.21.20 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-20-pm.jpeg",
  },
  {
    code: "KIT-15",
    title: "WhatsApp Image 2026 10 01 at 6.21.21 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-21-pm.jpeg",
  },
  {
    code: "KIT-16",
    title: "WhatsApp Image 2026 10 01 at 6.21.22 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-22-pm-1.jpeg",
  },
  {
    code: "KIT-17",
    title: "WhatsApp Image 2026 10 01 at 6.21.22 PM (2)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-22-pm-2.jpeg",
  },
  {
    code: "KIT-18",
    title: "WhatsApp Image 2026 10 01 at 6.21.22 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-6-21-22-pm.jpeg",
  },
  {
    code: "KIT-19",
    title: "WhatsApp Image 2026 10 01 at 9.34.45 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-10-01-at-9-34-45-pm.jpeg",
  },
  {
    code: "KIT-20",
    title: "WhatsApp Image 2026 11 21 at 1.17.34 AM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-1-17-34-am.jpeg",
  },
  {
    code: "KIT-21",
    title: "WhatsApp Image 2026 11 21 at 3.33.26 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-26-pm.jpeg",
  },
  {
    code: "KIT-22",
    title: "WhatsApp Image 2026 11 21 at 3.33.30 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-30-pm.jpeg",
  },
  {
    code: "KIT-23",
    title: "WhatsApp Image 2026 11 21 at 3.33.34 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-34-pm.jpeg",
  },
  {
    code: "KIT-24",
    title: "WhatsApp Image 2026 11 21 at 3.33.35 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-35-pm-1.jpeg",
  },
  {
    code: "KIT-25",
    title: "WhatsApp Image 2026 11 21 at 3.33.35 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-35-pm.jpeg",
  },
  {
    code: "KIT-26",
    title: "WhatsApp Image 2026 11 21 at 3.33.36 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-36-pm-1.jpeg",
  },
  {
    code: "KIT-27",
    title: "WhatsApp Image 2026 11 21 at 3.33.36 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-36-pm.jpeg",
  },
  {
    code: "KIT-28",
    title: "WhatsApp Image 2026 11 21 at 3.33.37 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-37-pm-1.jpeg",
  },
  {
    code: "KIT-29",
    title: "WhatsApp Image 2026 11 21 at 3.33.37 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-37-pm.jpeg",
  },
  {
    code: "KIT-30",
    title: "WhatsApp Image 2026 11 21 at 3.33.38 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-38-pm-1.jpeg",
  },
  {
    code: "KIT-31",
    title: "WhatsApp Image 2026 11 21 at 3.33.38 PM (2)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-38-pm-2.jpeg",
  },
  {
    code: "KIT-32",
    title: "WhatsApp Image 2026 11 21 at 3.33.38 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-38-pm.jpeg",
  },
  {
    code: "KIT-33",
    title: "WhatsApp Image 2026 11 21 at 3.33.39 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-33-39-pm.jpeg",
  },
  {
    code: "KIT-34",
    title: "WhatsApp Image 2026 11 21 at 3.39.53 PM (1)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-39-53-pm-1.jpeg",
  },
  {
    code: "KIT-35",
    title: "WhatsApp Image 2026 11 21 at 3.39.53 PM (2)",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-39-53-pm-2.jpeg",
  },
  {
    code: "KIT-36",
    title: "WhatsApp Image 2026 11 21 at 3.39.53 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-39-53-pm.jpeg",
  },
  {
    code: "KIT-37",
    title: "WhatsApp Image 2026 11 21 at 3.39.54 PM",
    category: "Uniforms & Sets",
    image: "/images/whatsapp-image-2026-11-21-at-3-39-54-pm.jpeg",
  },
  {
    code: "KIT-38",
    title: "apple icon",
    category: "Uniforms & Sets",
    image: "/images/apple-icon.png",
  },
  {
    code: "KIT-39",
    title: "icon",
    category: "Uniforms & Sets",
    image: "/images/icon.png",
  },
  { title: "Branded Agency Cap & Crest", category: "Headwear & Branding", image: "/images/img-01.jpeg", code: "EKW-01" },
  { title: "Structured Patrol Headwear", category: "Headwear & Branding", image: "/images/img-02.jpeg", code: "EKW-02" },
  { title: "Embroidered Emblem Cap", category: "Headwear & Branding", image: "/images/img-03.jpeg", code: "EKW-03" },
  { title: "Tactical Belt & Duty Hardware", category: "Field Accessories", image: "/images/img-04.jpeg", code: "EKW-04" },
  { title: "Guard Lanyard & Whistle Kit", category: "Field Accessories", image: "/images/img-05.jpeg", code: "EKW-05" },
  { title: "Custom Crest & Patch Work", category: "Headwear & Branding", image: "/images/img-06.jpeg", code: "EKW-06" },
  { title: "Shoulder Epaulettes & Trim", category: "Uniforms & Sets", image: "/images/img-07.jpeg", code: "EKW-07" },
  { title: "Tailored Guard Duty Shirt", category: "Uniforms & Sets", image: "/images/img-08.jpeg", code: "EKW-08" },
  { title: "Reinforced Duty Trousers", category: "Uniforms & Sets", image: "/images/img-09.jpeg", code: "EKW-09" },
  { title: "Protective Duty Pads & Gear", category: "Tactical & Duty Gear", image: "/images/img-10.jpeg", code: "EKW-10" },
  { title: "Field Operations Kit Sample", category: "Tactical & Duty Gear", image: "/images/img-11.jpeg", code: "EKW-11" },
  { title: "Custom Agency Outfitting Sample", category: "Uniforms & Sets", image: "/images/img-12.jpeg", code: "EKW-12" },
  { title: "Heavy-Duty Stitching Detail", category: "Uniforms & Sets", image: "/images/img-13.jpeg", code: "EKW-13" },
  { title: "Security Kit Component", category: "Field Accessories", image: "/images/img-14.jpeg", code: "EKW-14" },
  { title: "Branded Uniform Finish", category: "Headwear & Branding", image: "/images/img-15.jpeg", code: "EKW-15" },
  { title: "Khaki Shirt & Duty Trousers Set", category: "Uniforms & Sets", image: "/images/img-16.jpeg", code: "EKW-16" },
  { title: "Black Tactical Duty Vest", category: "Tactical & Duty Gear", image: "/images/img-17.jpeg", code: "EKW-17" },
  { title: "Dark Patrol Uniform Set", category: "Uniforms & Sets", image: "/images/img-18.jpeg", code: "EKW-18" },
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
