"use client";
import Image from "next/image";
import FallbackImage from "@/components/FallbackImage";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Ruler, Sparkles, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WORKSHOP_GALLERY } from "@/data/siteData";

const FALLBACK_PHOTO = "/images/review-13-4eb26e.jpeg";

const HERO_SLIDES = [
  {
    kicker: "Workshop Lookbook",
    tabLabel: "Tactical",
    lead: "Security",
    accent: "Uniforms",
    tail: "& Tactical Kits",
    summary: "Built for daily field wear, durable patrol sets, tactical vests, reinforced belts, and sharp custom cresting made straight from our workshop.",
    image: "/images/review-13-4eb26e.jpeg",
    ctaHref: "/catalog",
    ctaLabel: "View Catalog",
  },
  {
    kicker: "Direct Production",
    tabLabel: "Cresting",
    lead: "Custom",
    accent: "Cresting",
    tail: "& Duty Wear",
    summary: "Put your organization's identity front and center with clean embroidery, badges, and branded caps tailored to your exact brand colors.",
    image: "/images/review-13-4eb26e.jpeg",
    ctaHref: "/production",
    ctaLabel: "Workshop & QC",
  },
  {
    kicker: "Institutional Supply",
    tabLabel: "Batches",
    lead: "Tailored",
    accent: "Batch Runs",
    tail: "Ready to Issue",
    summary: "From new security intakes and estates to school and corporate teams, order full batches with saved size records for effortless reorders.",
    image: "/images/review-11-332315.jpeg",
    ctaHref: "/quote",
    ctaLabel: "Request Quote",
  },
];

const SIGNATURE_LINES = [
  {
    title: "Uniform Sets",
    tag: "Duty",
    note: "Structured shirts and trousers built for all day presence and movement.",
    image: "/images/bagged-uniform-batch.jpeg",
    href: "/catalog",
  },
  {
    title: "Tactical Vests",
    tag: "Field",
    note: "Utility and tactical layers designed for practical gear carry and durability.",
    image: "/images/review-13-4eb26e.jpeg",
    href: "/catalog",
  },
  {
    title: "Branded Caps",
    tag: "Cresting",
    note: "Clean headwear and crests that keep teams looking unified and sharp.",
    image: "/images/black-knee-elbow-pads.jpeg",
    href: "/catalog",
  },
  {
    title: "Field Gear",
    tag: "Utility",
    note: "Heavy duty belts, pouches, and accessories ready for active shifts.",
    image: "/images/review-09-4e0868.jpeg",
    href: "/catalog",
  },
];

const CLIENT_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Built for Real Duty",
    text: "Practical fabrics, neat stitching, and dependable finishes that hold up across daily shifts.",
  },
  {
    icon: Ruler,
    title: "Saved Size Charts",
    text: "We keep your organization's sizing on record so adding new recruits or re kitting teams stays fast.",
  },
  {
    icon: Sparkles,
    title: "Sharp Brand Identity",
    text: "Coordinated crests, patches, and uniform styling that help clients recognize your team on sight.",
  },
  {
    icon: Truck,
    title: "Single-Piece & Batch Ready",
    text: "Start with sample specs or batch runs, with single piece replacement support and nationwide dispatch.",
  },
];

const IMAGE_TITLE_MAP: Record<string, string> = {
  "/images/review-13-4eb26e.jpeg": "Tactical Utility Vest",
  "/images/review-09-4e0868.jpeg": "Heavy-Duty Duty Belt",
  "/images/review-14-1b968e.jpeg": "Packaged Uniform Batch",
  "/images/review-05-1d3205.jpeg": "Patrol Shirt & Trouser Kit",
  "/images/review-11-332315.jpeg": "Guard Uniform Set",
  "/images/review-07-938787.jpeg": "Uniform & Duty Belt Set",
  "/images/review-18-046a5a.jpeg": "Crested Duty Shirt & Lanyard",
  "/images/black-knee-elbow-pads.jpeg": "Protective Knee & Elbow Pads",
  "/images/review-02-504304.jpeg": "Duty Cord, Lanyard & Trim",
  "/images/review-06-25fc05.jpeg": "Embroidered Crest & Trim",
  "/images/bagged-uniform-batch.jpeg": "Structured Duty Shirt",
  "/images/yellow-cord-white-trim.jpeg": "Braided Cord & Fabric Trim",
  "/images/review-28-93fd58.jpeg": "Workshop Garment Batch",
  "/images/review-08-96de4b.jpeg": "Duty Uniform Set",
  "/images/review-29-ee60b9.jpeg": "Field Gear & Accessories",
  "/images/review-04-c206e0.jpeg": "Tailored Uniform Kit",
  "/images/review-31-4a1a55.jpeg": "Workshop Uniform Sample",
  "/images/plaid-school-pinafore.jpeg": "Plaid School Pinafore",
  "/images/review-33-eb498f.jpeg": "Security Uniform Set",
  "/images/review-34-7763f8.jpeg": "Field Kit & Accessories",
  "/images/review-35-6f71c0.jpeg": "Tailored Garment Batch",
  "/images/review-36-6a0f9e.jpeg": "Duty Wear & Trim",
  "/images/review-37-32cbe6.jpeg": "Uniform Batch Pack",
  "/images/review-38-271124.jpeg": "Workshop Kit Finish",
  "/images/review-12-5e50d6.jpeg": "Academy Uniform Detail",
  "/images/review-15-a6308d.jpeg": "Duty Shirt & Kit Set",
  "/images/review-16-d9ba20.jpeg": "Complete Uniform Set",
  "/images/review-17-51baac.jpeg": "Crested Shirt & Belt Set",
};

function cleanDisplayTitle(rawTitle: string, index: number, imagePath?: string): string {
  if (imagePath && IMAGE_TITLE_MAP[imagePath]) {
    return IMAGE_TITLE_MAP[imagePath];
  }

  const cleaned = rawTitle
    .replace(/^workshop\s*sample\s*\d+\s*[-–:]?\s*/i, "")
    .replace(/\b(kit|sample)\s*[-#]?\s*\d+\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (cleaned.length > 1) return cleaned;

  const fallbackTitles = [
    "Patrol Duty Kit",
    "Tactical Utility Vest",
    "Crested Agency Cap",
    "Tailored Uniform Set",
    "School Uniform Kit",
    "Workshop Batch Run",
  ];
  return fallbackTitles[index % fallbackTitles.length];
}


const WORLD_CLASS_SLIDES = [
  {
    kicker: "Workshop Lookbook",
    tabLabel: "Tactical & Patrol",
    lead: "Security",
    accent: "Uniforms",
    tail: "& Tactical Kits",
    summary:
      "Built for daily field wear with durable patrol sets, tactical vests, reinforced belts, and sharp custom cresting crafted straight from our workshop.",
    image: "/images/review-13-4eb26e.jpeg",
    ctaHref: "/catalog",
    ctaLabel: "Explore Catalog",
  },
  {
    kicker: "Direct Production",
    tabLabel: "Custom Cresting",
    lead: "Custom",
    accent: "Cresting",
    tail: "& Duty Wear",
    summary:
      "Put your organization identity front and center with clean embroidery, woven badges, and branded caps tailored to your exact brand colors.",
    image: "/images/bagged-uniform-batch.jpeg",
    ctaHref: "/production",
    ctaLabel: "Workshop & QC",
  },
  {
    kicker: "Institutional Supply",
    tabLabel: "Batch Runs",
    lead: "Tailored",
    accent: "Batch Runs",
    tail: "Ready to Issue",
    summary:
      "From new security intakes and estates to school and corporate teams, order full batches with saved size records for effortless reorders.",
    image: "/images/review-11-332315.jpeg",
    ctaHref: "/quote",
    ctaLabel: "Request a Quote",
  },
];


const MOTION_HERO_SLIDES = [
  {
    badge: "Tactical & Patrol",
    kicker: "Workshop Lookbook",
    lead: "Tactical",
    accent: "Utility Vests",
    tail: "& Field Gear",
    summary: "Front and back tactical utility vest construction with reinforced pouches, MOLLE webbing, and field-ready durability.",
    image: "/images/review-08-96de4b.jpeg",
    caption: "Tactical Vest Front & Back View",
    ctaHref: "/catalog",
    ctaLabel: "Explore Catalog",
  },
  {
    badge: "Duty Shirts",
    kicker: "Direct Workshop Finish",
    lead: "Tailored",
    accent: "Duty Shirts",
    tail: "& Belts",
    summary: "Structured navy duty shirts with crisp collar and cuff detailing, custom crests, duty belts, and lanyards finished on our table.",
    image: "/images/review-37-32cbe6.jpeg",
    caption: "Folded Duty Shirt, Crest, Belt & Lanyard",
    ctaHref: "/production",
    ctaLabel: "Workshop & QC",
  },
  {
    badge: "Uniform Kits",
    kicker: "Complete Turnout Sets",
    lead: "Full",
    accent: "Uniform Kits",
    tail: "From the Line",
    summary: "Coordinated shirt, trouser, belt, beret, and lanyard sets crafted right beside our industrial sewing line.",
    image: "/images/review-36-6a0f9e.jpeg",
    caption: "Complete Uniform Set on Workshop Table",
    ctaHref: "/production",
    ctaLabel: "See Production",
  },
  {
    badge: "Security & Guard",
    kicker: "Active Duty Presentation",
    lead: "Sharp",
    accent: "Security Kits",
    tail: "& Branded Caps",
    summary: "Uniformed guard shirts, arm badges, duty belts, boots, and branded caps built for confident presence on post.",
    image: "/images/review-13-4eb26e.jpeg",
    caption: "Uniformed Security & Branded Headwear",
    ctaHref: "/sectors",
    ctaLabel: "View Sectors",
  },
  {
    badge: "School Uniforms",
    kicker: "Institutional & Academy",
    lead: "Academy",
    accent: "School Kits",
    tail: "& Crested Shirts",
    summary: "Clean collared shirts, embroidered school crests, and tailored plaid sets made for schools and academies.",
    image: "/images/review-23-cacef7.jpeg",
    caption: "Academy Uniforms & Embroidered Crests",
    ctaHref: "/sectors",
    ctaLabel: "Explore Sectors",
  },
  {
    badge: "Pinafore & Batch",
    kicker: "Batch Tailoring",
    lead: "Custom",
    accent: "Pinafores",
    tail: "& Batch Runs",
    summary: "Structured plaid pinafores paired with crisp collared shirts, tailored in repeatable batches for schools and organizations.",
    image: "/images/review-24-56ce73.jpeg",
    caption: "Plaid Pinafore & Shirt Batch Tailoring",
    ctaHref: "/quote",
    ctaLabel: "Request a Quote",
  },
];
export default function HomePage() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % MOTION_HERO_SLIDES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeHero = MOTION_HERO_SLIDES[slideIdx] ?? MOTION_HERO_SLIDES[0];
  const goPrev = () => setSlideIdx((prev) => (prev - 1 + MOTION_HERO_SLIDES.length) % MOTION_HERO_SLIDES.length);
  const goNext = () => setSlideIdx((prev) => (prev + 1) % MOTION_HERO_SLIDES.length);

  const [activeSlide, setActiveSlide] = useState(0);
  const [brokenSlides, setBrokenSlides] = useState<Record<number, boolean>>({});
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = HERO_SLIDES[activeSlide] ?? HERO_SLIDES[0];

  const normalizedGallery = WORKSHOP_GALLERY.map((item, idx) => ({
    ...item,
    displayTitle: cleanDisplayTitle(item.title, idx, item.image),
  }));

  const schoolShowcaseItem = {
    code: "SCH-01",
    title: "Academy School Uniform Kit",
    displayTitle: "Academy School Uniform Kit",
    category: "School & Institutional",
    image: "/images/review-24-56ce73.jpeg",
  };

  const peopleItems = [
    schoolShowcaseItem,
    ...normalizedGallery.filter(
      (item) =>
        item.image !== "/images/review-24-56ce73.jpeg" &&
        /guard|pair|student|uniform|academy|school|officer|team|person|human/i.test(
          `${item.displayTitle} ${item.category}`
        )
    ),
  ].slice(0, 2);

  const baseGalleryItems = normalizedGallery.filter(
    (item) =>
      !peopleItems.some((p) => p.image === item.image) &&
      !/(logo|brand|mark|icon|badge|crest)/i.test(
        `${item.image} ${item.displayTitle}`
      )
  );

  const pinaforeEntry = {
    code: "SCH-PINAFORE",
    title: "Plaid School Pinafore",
    displayTitle: "Plaid School Pinafore",
    category: "School & Institutional",
    image: "/images/plaid-school-pinafore.jpeg",
  };

  const galleryItems = baseGalleryItems.some((i) => i.image === "/images/plaid-school-pinafore.jpeg")
    ? baseGalleryItems
    : [pinaforeEntry, ...baseGalleryItems];

  const lookbookBands = [
    {
      key: "patrol",
      lead: "Patrol &",
      accent: "Tactical",
      caption:
        "Field-ready kits and tactical layers tailored for security agencies, estates, and active patrols.",
      items: galleryItems.slice(0, 3),
    },
    {
      key: "institutional",
      lead: "Institutional &",
      accent: "Tailored",
      caption:
        "Consistent, tidy uniforms crafted for schools, facilities, and structured organizational teams.",
      items: galleryItems.slice(3, 6),
    },
    {
      key: "cresting",
      lead: "Cresting &",
      accent: "Accessories",
      caption:
        "Caps, belts, and crests that complete the uniform kit.",
      items: galleryItems.slice(6, 9),
    },
    {
      key: "batch",
      lead: "Batch Finishing &",
      accent: "Dispatch",
      caption:
        "Organized workshop cuts and quality checks prepared for smooth handover and nationwide delivery.",
      items: galleryItems.slice(9, 12),
    },
    {
      key: "archive",
      lead: "Workshop",
      accent: "Archive",
      caption:
        "A closer look at real cuts, variations, and pieces produced on our workshop floor.",
      items: galleryItems.slice(12),
    },
  ].filter((band) => band.items.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">

      <section
        aria-label="Motion Hero Showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="ekw-hero-bg w-full overflow-x-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-white border-b border-slate-200 py-5 sm:py-10 lg:py-9"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          <div key={`copy-${slideIdx}`} className="min-w-0 lg:col-span-6 space-y-4 ekw-copy-enter">
            <div className="flex flex-wrap items-center gap-2">
              {MOTION_HERO_SLIDES.map((item, idx) => {
                const isCurrent = idx === slideIdx;
                return (
                  <button
                    key={item.badge}
                    type="button"
                    onClick={() => setSlideIdx(idx)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? "bg-[#0B1F4C] text-white shadow-sm scale-105"
                        : "bg-[#EEF4FC] text-[#134E9E] border border-[#BFD3EE] hover:bg-[#DCE8FA]"
                    }`}
                  >
                    {item.badge}
                  </button>
                );
              })}
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-[#134E9E]">
              {activeHero.kicker}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F4C] leading-tight">
              {activeHero.lead} {activeHero.accent} {activeHero.tail}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              {activeHero.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 pb-14 sm:pb-0">
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-[#0B1F4C] hover:bg-[#134E9E] text-white font-semibold text-base px-6 py-3.5 transition-transform duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                Get Custom Quote
              </a>
              <a
                href={activeHero.ctaHref}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:border-[#0B1F4C] text-[#0B1F4C] font-semibold text-base px-6 py-3.5 transition-colors"
              >
                {activeHero.ctaLabel}
              </a>
            </div>

            <div className="flex items-center justify-between max-w-md pt-3">
              <div className="flex items-center gap-2 flex-1 pr-4">
                {MOTION_HERO_SLIDES.map((item, idx) => (
                  <button
                    key={item.badge}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}: ${item.badge}`}
                    onClick={() => setSlideIdx(idx)}
                    className="relative h-2.5 flex-1 max-w-[56px] rounded-full bg-slate-200 overflow-hidden cursor-pointer"
                  >
                    {idx === slideIdx ? (
                      <span
                        key={`bar-${slideIdx}-${isPaused}`}
                        style={{ animationPlayState: isPaused ? "paused" : "running" }}
                        className="block h-full w-full bg-[#0B1F4C] ekw-bar-fill"
                      />
                    ) : null}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="h-9 w-9 rounded-full border border-slate-300 bg-white hover:bg-[#EEF4FC] text-[#0B1F4C] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next slide"
                  className="h-9 w-9 rounded-full border border-slate-300 bg-white hover:bg-[#EEF4FC] text-[#0B1F4C] font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last min-w-0 lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-slate-100 ring-1 ring-[#0B1F4C]/10 shadow-[0_30px_80px_-20px_rgba(11,31,76,0.45)] h-[240px] sm:h-[450px] lg:h-[500px]">
              {MOTION_HERO_SLIDES.map((item, idx) => {
                const current = idx === slideIdx;
                return (
                  <div
                    key={item.badge}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      current
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-6 scale-105 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading={idx === 0 ? "eager" : "lazy"}
                      fetchPriority={idx === 0 ? "high" : "auto"}
                      style={{ animationPlayState: isPaused ? "paused" : "running" }}
                      className={`w-full h-full object-cover object-center ${
                        current ? "ekw-photo-drift" : ""
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1F4C]/85 via-[#0B1F4C]/35 to-transparent p-5">
                      <p className="text-sm font-semibold tracking-wide text-white">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Why choose us" className="bg-[#0B1F4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
          {[
            "Made direct in our workshop",
            "Custom crests & embroidery",
            "Batches with saved size records",
            "Serving Lagos & nationwide",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold tracking-wide">
              <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>


      


      

        {/* Band 1: Motion Spotlight Hero Stage */}
        <section
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
 className="relative py 14 lg:py 24 bg gradient to b from slate 50/90 via white to white overflow hidden"
 >
 <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#BFD3EE] bg-[#EEF4FC]/90 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.22em] text-[#134E9E]">
                  <span className="h-2 w-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] animate-pulse" />
                  <span>{slide.kicker}</span>
                </div>

                <h1
                  key={slide.accent}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 transition-all duration-500"
                >
                  {slide.lead}{" "}
                  <span className="font-editorial text-[#134E9E] text-6xl sm:text-7xl lg:text-8xl">
                    {slide.accent}
                  </span>{" "}
                  {slide.tail}
                </h1>

                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-md">
                  {slide.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href={slide.ctaHref}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#0B1F4C] hover:bg-[#134E9E] hover:shadow-md transition-all"
                  >
                    <span>{slide.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/sectors"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 hover:border-[#BFD3EE] hover:text-[#134E9E] transition-colors"
                  >
                    <span>Sectors</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  {HERO_SLIDES.map((s, idx) => {
                    const active = activeSlide === idx;
                    return (
                      <button
                        key={s.tabLabel}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        className={`rounded-full px-5 py-2.5 text-sm sm:text-[15px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          active
                            ? "bg-slate-950 text-white shadow-xs"
                            : "border border-slate-200 bg-white text-slate-800 font-medium hover:border-[#BFD3EE] hover:text-[#134E9E]"
                        }`}
                      >
                        {s.tabLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative h-[27rem] sm:h-[35rem] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-2xl">
                  {HERO_SLIDES.map((s, idx) => {
                    const isActive = activeSlide === idx;
                    const imgSrc = brokenSlides[idx] ? FALLBACK_PHOTO : s.image;

                    return (
                      <Image
                        key={`${s.tabLabel}-${s.image}`}
                        src={imgSrc}
                        alt={`${s.lead} ${s.accent}`}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                        onError={() => {
                          setBrokenSlides((prev) =>
                            prev[idx] ? prev : { ...prev, [idx]: true }
                          );
                        }}
                        className={`object-cover transition-all duration-700 ease-out ${
                          isActive
                            ? "opacity-100 scale-100 animate-slow-zoom"
                            : "opacity-0 scale-105 pointer-events-none"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Band 2: Signature Lines */}
        <section className="border-t border-slate-200 bg-slate-50/70 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                  Core{" "}
                  <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                    Collections
                  </span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
 Explore our core uniform and gear categories, each configurable
 with your company branding and batch requirements.
 </p>
              </div>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#134E9E] hover:text-[#134E9E] shrink-0"
              >
                <span>Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-10">
              {SIGNATURE_LINES.map((line) => (
                <div key={line.title} className="space-y-3">
                  <Link
                    href={line.href}
                    className="group relative block h-[24rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <FallbackImage
                      src={line.image}
                      fallbackSrc={FALLBACK_PHOTO}
                      alt={line.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="px-1 pt-1 space-y-1.5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#134E9E]">
                      {line.tag}
                    </p>
                    <h3 className="text-xl font-bold text-slate-950">
                      {line.title}
                    </h3>
                    <p className="text-sm sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {line.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Band 3: Dedicated People & On-Body Fit */}
        {peopleItems.length > 0 && (
          <section className="border-t border-slate-200 bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                    On-Body{" "}
                    <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                      Showcase
                    </span>
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
 See how our uniforms and gear wear in practice, balanced fit,
 clean lines, and practical coverage for active personnel.
 </p>
                </div>
                <Link
                  href="/sectors"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#134E9E] hover:text-[#134E9E] shrink-0"
                >
                  <span>Sectors</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                {peopleItems.map((person) => (
                  <Link
                    key={`${person.code}-${person.image}`}
                    href="/sectors"
                    className="group block space-y-4"
                  >
                    <div className="relative h-[28rem] sm:h-[34rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-500">
                      <FallbackImage
                        src={person.image}
                        fallbackSrc={FALLBACK_PHOTO}
                        alt={person.displayTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="px-1 space-y-1">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#134E9E]">
                        {person.category}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-950">
                        {person.displayTitle}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Band 5: Spaced Editorial Lookbook Chapters */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 space-y-36 lg:space-y-48">
            {lookbookBands.map((band) => (
              <div key={band.key} className="space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                      {band.lead}{" "}
                      <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                        {band.accent}
                      </span>
                    </h2>
                    <p className="max-w-xl text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                      {band.caption}
                    </p>
                  </div>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-[#134E9E] shrink-0"
                  >
                    <span>Order Spec</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-10 md:grid-cols-3">
                  {band.items.map((item) => (
                    <Link
                      key={`${item.code}-${item.image}`}
                      href="/catalog"
                      className="group space-y-4"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xs group-hover:shadow-2xl transition-all duration-500">
                        <FallbackImage
                          src={item.image}
                          fallbackSrc={FALLBACK_PHOTO}
                          alt={item.displayTitle}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="px-1 text-base font-bold text-slate-950">
                        {item.displayTitle}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Dedicated Band: Academy & School Uniforms */}
        <section className="border-t border-slate-200 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#134E9E]">
                  School &amp; Academy Tailoring
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                  Academy &amp; School Uniforms Built for Daily Wear
                </h2>
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  Clean collared shirts, custom embroidered crests, and tailored plaid sets crafted for schools and academies with consistent sizing across every class and term.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#134E9E]" />
                    <span>Crisp shirts, plaid sets, and pinafores tailored to spec</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#134E9E]" />
                    <span>Embroidered school crests &amp; uniform trim consistency</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#134E9E]" />
                    <span>Saved size charts for smooth new-intake &amp; term reorders</span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-6 py-3 text-sm font-bold text-white transition-colors"
                  >
                    <span>Request School Quote</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/sectors"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:border-[#BFD3EE] hover:text-[#134E9E] transition-colors"
                  >
                    <span>View Sectors</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid gap-6 sm:grid-cols-12 items-center">
                <div className="sm:col-span-7 relative h-[25rem] sm:h-[31rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                  <FallbackImage
                    src="/images/review-24-56ce73.jpeg"
                    fallbackSrc={FALLBACK_PHOTO}
                    alt="Academy students in collared shirts, crests, and plaid uniforms"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-5 space-y-6">
                  <div className="relative h-[15rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <FallbackImage
                      src="/images/review-11-332315.jpeg"
                      fallbackSrc={FALLBACK_PHOTO}
                      alt="Academy uniform tailoring and fabric finish"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 30vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#134E9E]">
                      Batch Ready
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Pupil &amp; Student Batch Runs
                    </p>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">
                      Produced in repeatable runs with clear delivery schedules for schools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Band 6: Full-Width Visual Closing Banner */}
        <section className="border-t border-slate-200 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-[26rem] sm:h-[32rem] overflow-hidden rounded-3xl bg-slate-950">
              <FallbackImage
                src="/images/review-29-ee60b9.jpeg"
                fallbackSrc={FALLBACK_PHOTO}
                alt="Exceptional Kits workshop"
                fill
                sizes="100vw"
                className="object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 max-w-2xl space-y-5">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Direct Workshop
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Ready for Your{" "}
                  <span className="font-editorial text-emerald-300 text-5xl sm:text-7xl">
                    Custom Batch
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-200/90 max-w-lg leading-relaxed">
                  Share your uniform quantities, branding preferences, or sector
                  needs and get a clear workshop quote without middleman delays.
                </p>
                <div className="pt-1">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
                  >
                    <span>Start Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Band 4: Long Editorial Client Value & Workshop Standard Showcase */}
        <section aria-label="How it works" className="bg-[#0B1F4C] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">How it works</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">From brief to delivery</h2>
            <div className="ekw-marquee-wrap mt-12 overflow-hidden">
              <ol className="ekw-marquee-track gap-6 pr-6">
                {(() => {
                  const steps = [
                    ["Send your brief", "Tell us the item, quantity, colours and crest or logo."],
                    ["Approve a sample", "Check the cut, colour and embroidery before the batch starts."],
                    ["Batch production", "Your order is made in our workshop to the approved sample."],
                    ["Quality check", "Every piece is inspected for stitching, sizing and finish."],
                    ["Delivery", "Collect from us or have it delivered to your location."],
                  ];
                  return [...steps, ...steps].map(([title, text], i) => (
                    <li
                      key={`${title}-${i}`}
                      className="w-[260px] sm:w-[290px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1F4C] font-extrabold">
                        {(i % 5) + 1}
                      </span>
                      <h3 className="mt-4 text-lg font-bold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
                    </li>
                  ));
                })()}
              </ol>
            </div>
            <a href="/quote" className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#0B1F4C] shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
              Start with a quote
            </a>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 space-y-24 lg:space-y-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end border-b border-slate-200 pb-10">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#134E9E]">
                  Why Organizations Partner With Us
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.05]">
                  Dependable Supply{" "}
                  <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                    Made Simple
                  </span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
 Designed for security agencies, estates, schools, and growing
 teams that need consistent fit, clean branding, and reliable
 follow through from first batch to future reorders.
 </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {CLIENT_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="group relative flex flex-col justify-between border-t-2 border-slate-900 pt-6 space-y-6 transition-colors duration-300 hover:border-[#BFD3EE]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold tracking-[0.22em] text-slate-400 group-hover:text-[#134E9E] transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#BFD3EE]/80 bg-[#EEF4FC]/70 text-[#134E9E] shadow-2xs group-hover:bg-[#0B1F4C] hover:bg-[#134E9E] group-hover:text-white transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-slate-800 font-medium leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="inline-block h-1 w-10 rounded-full bg-slate-200 group-hover:w-20 group-hover:bg-[#0B1F4C] hover:bg-[#134E9E] transition-all duration-300" />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Long-form Split Editorial Feature: Clean Photo Separate From Structured Specs */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center pt-4">
              <div className="lg:col-span-7">
                <div className="relative h-[24rem] sm:h-[31rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                  <FallbackImage
                    src="/images/review-09-4e0868.jpeg"
                    fallbackSrc={FALLBACK_PHOTO}
                    alt="Precision workshop stitching and uniform finishing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 rounded-3xl bg-slate-950 p-8 sm:p-10 text-white shadow-xl space-y-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#1D4ED8]">
                  Workshop Advantage
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Built to Scale With{" "}
                  <span className="font-editorial text-emerald-300 text-4xl sm:text-5xl">
                    Your Team
                  </span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
 Every intake brings new recruits, size adjustments, and
 replacement needs. Because we produce directly and keep your
 specifications organized, expanding or re kitting stays
 straightforward.
 </p>
                <ul className="space-y-3 border-t border-slate-800 pt-5 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Consistent cut and finish across full batch runs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Company specific sizing archived for rapid reorders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Single piece replacements supported without full batch minimums</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/production"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    <span>Explore Workshop Process</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}