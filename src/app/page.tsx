"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Ruler, Sparkles, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WORKSHOP_GALLERY } from "@/data/siteData";

const FALLBACK_PHOTO = "/images/tactical-vest.jpeg";

const HERO_SLIDES = [
  {
    kicker: "Workshop Lookbook",
    tabLabel: "Tactical",
    lead: "Security",
    accent: "Uniforms",
    tail: "& Tactical Kits",
    summary:
      "Built for daily field wear—durable patrol sets, tactical vests, reinforced belts, and sharp custom cresting made straight from our workshop.",
    image: "/images/tactical-vest.jpeg",
    ctaHref: "/catalog",
    ctaLabel: "View Catalog",
  },
  {
    kicker: "Direct Production",
    tabLabel: "Cresting",
    lead: "Custom",
    accent: "Cresting",
    tail: "& Duty Wear",
    summary:
      "Put your organization's identity front and center with clean embroidery, badges, and branded caps tailored to your exact brand colors.",
    image: "/images/tactical-vest.jpeg",
    ctaHref: "/production",
    ctaLabel: "Workshop & QC",
  },
  {
    kicker: "Institutional Supply",
    tabLabel: "Batches",
    lead: "Tailored",
    accent: "Batch Runs",
    tail: "Ready to Issue",
    summary:
      "From new security intakes and estates to school and corporate teams—order full batches with saved size records for effortless reorders.",
    image: "/images/guard-set.jpeg",
    ctaHref: "/quote",
    ctaLabel: "Request Quote",
  },
];

const SIGNATURE_LINES = [
  {
    title: "Uniform Sets",
    tag: "Duty",
    note: "Structured shirts and trousers built for all-day presence and movement.",
    image: "/images/work-shirt.jpeg",
    href: "/catalog",
  },
  {
    title: "Tactical Vests",
    tag: "Field",
    note: "Utility and tactical layers designed for practical gear carry and durability.",
    image: "/images/tactical-vest.jpeg",
    href: "/catalog",
  },
  {
    title: "Branded Caps",
    tag: "Cresting",
    note: "Clean headwear and crests that keep teams looking unified and sharp.",
    image: "/images/visor-cap.jpeg",
    href: "/catalog",
  },
  {
    title: "Field Gear",
    tag: "Utility",
    note: "Heavy-duty belts, pouches, and accessories ready for active shifts.",
    image: "/images/field-belt.jpeg",
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
    text: "We keep your organization's sizing on record so adding new recruits or re-kitting teams stays fast.",
  },
  {
    icon: Sparkles,
    title: "Sharp Brand Identity",
    text: "Coordinated crests, patches, and uniform styling that help clients recognize your team on sight.",
  },
  {
    icon: Truck,
    title: "Single-Piece & Batch Ready",
    text: "Start with sample specs or batch runs, with single-piece replacement support and nationwide dispatch.",
  },
];

function cleanDisplayTitle(rawTitle: string, index: number): string {
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
 "Reinforced Duty Belt",
 "Cargo Field Trousers",
 "Guard Shirt & Trouser Set",
 "Institutional Uniform",
 "Workshop Batch Run",
 ];
 return fallbackTitles[index % fallbackTitles.length];
}

export default function HomePage() {
 const [activeSlide, setActiveSlide] = useState(0);
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
 displayTitle: cleanDisplayTitle(item.title, idx),
 }));

 const peopleItems = normalizedGallery
 .filter((item) =>
 /guard|pair|student|uniform|academy|school|officer|team|person|human/i.test(
 `${item.displayTitle} ${item.category}`
 )
 )
 .slice(0, 2);

 const galleryItems = normalizedGallery.filter(
 (item) =>
 !peopleItems.some((p) => p.image === item.image) &&
 !/(logo|brand|mark|icon|badge|crest)/i.test(
 `${item.image} ${item.displayTitle}`
 )
 );

 const lookbookBands = [
 {
 key: "patrol",
 lead: "Patrol &",
 accent: "Tactical",
 caption:
 "Field ready kits and tactical layers tailored for security agencies, estates, and active patrols.",
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
 "Finishing details, caps, belts, and crests, that tie an entire uniform kit together.",
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
                <div className="inline-flex items-center gap-2 rounded-full border border-[#BFD3EE] bg-[#EEF4FC]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#134E9E]">
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

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
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
 className={`rounded full px 4 py 1.5 text xs font bold uppercase tracking wider transition all cursor pointer ${
 active
 ? "bg slate 950 text white shadow xs"
 : "border border slate 200 bg white text slate 600 hover:border-[#BFD3EE] hover:text-[#134E9E]"
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
                  {HERO_SLIDES.map((s, idx) => (
                    <img
                      key={s.image}
                      src={s.image}
                      alt={`${s.lead} ${s.accent}`}
                      onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className={`absolute inset 0 h full w full object cover animate slow zoom transition all duration 700 ease out ${
 activeSlide === idx
 ? "opacity 100 scale 100"
 : "opacity 0 scale 105 pointer events none"
 }`}
 />
 ))}

 </div>
              </div>
            </div>
          </div>
        </section>

                {/* Band 2: Signature Lines */}
        <section className="border-t border-slate-200 bg-slate-50/70 py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                  Core{" "}
                  <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                    Collections
                  </span>
                </h2>
                <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
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
                    className="group block h-[24rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={line.image}
                      alt={line.title}
                      onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className="h full w full object cover group hover:scale 105 transition transform duration 700"
 />
 </Link>
                  <div className="px-1 pt-1 space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#134E9E]">
                      {line.tag}
                    </p>
                    <h3 className="text-xl font-bold text-slate-950">
                      {line.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {line.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

 {/* Band 3: Dedicated People & On Body Fit */}
 {peopleItems.length > 0 && (
 <section className="border-t border-slate-200 bg-white py-28 lg:py-40">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
 On Body{" "}
 <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                      Showcase
                    </span>
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
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
                    <div className="h-[28rem] sm:h-[34rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-500">
                      <img
                        src={person.image}
                        alt={person.displayTitle}
                        onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className="h full w full object cover group hover:scale 105 transition transform duration 700"
 />
 </div>
                    <div className="px-1 space-y-1">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#134E9E]">
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
        <section className="border-t border-slate-200 bg-slate-50/50 py-28 lg:py-44">
          <div className="mx-auto max-w-7xl px-6 space-y-36 lg:space-y-48">
            {lookbookBands.map((band) => (
              <div key={band.key} className="space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                      {band.lead}{" "}
                      <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                        {band.accent}
                      </span>
                    </h2>
                    <p className="max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
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
                      <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xs group-hover:shadow-2xl transition-all duration-500">
                        <img
                          src={item.image}
                          alt={item.displayTitle}
                          onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className="h full w full object cover group hover:scale 105 transition transform duration 700"
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

 {/* Band 6: Full Width Visual Closing Banner */}
 <section className="border-t border-slate-200 bg-white py-28 lg:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-[26rem] sm:h-[32rem] overflow-hidden rounded-3xl bg-slate-950">
              <img
                src="/images/workshop-view.jpeg"
                alt="Exceptional Kits workshop"
                onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className="h full w full object cover opacity 55"
 />
 <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 max-w-2xl space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Direct Workshop
                </p>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-white">
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
        <section className="border-t border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white py-32 lg:py-44">
          <div className="mx-auto max-w-7xl px-6 space-y-24 lg:space-y-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end border-b border-slate-200 pb-10">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#134E9E]">
                  Why Organizations Partner With Us
                </p>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-[1.05]">
                  Dependable Supply{" "}
                  <span className="font-editorial text-[#134E9E] text-5xl sm:text-7xl">
                    Made Simple
                  </span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm sm:text-base text-slate-600 leading-relaxed">
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
                        <span className="text-xs font-extrabold tracking-[0.22em] text-slate-400 group-hover:text-[#134E9E] transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#BFD3EE]/80 bg-[#EEF4FC]/70 text-[#134E9E] shadow-2xs group-hover:bg-[#0B1F4C] hover:bg-[#134E9E] group-hover:text-white transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
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

 {/* Long form Split Editorial Feature: Clean Photo Separate From Structured Specs */}
 <div className="grid gap-10 lg:grid-cols-12 lg:items-center pt-4">
              <div className="lg:col-span-7">
                <div className="h-[24rem] sm:h-[31rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                  <img
                    src="/images/stitch-work.jpeg"
                    alt="Precision workshop stitching and uniform finishing"
                    onError={(e) => {
 const el = e.currentTarget;
 if (!el.dataset.fb) {
 el.dataset.fb = "1";
 el.src = FALLBACK_PHOTO;
 }
 }}
 className="h full w full object cover hover:scale 105 transition transform duration 700"
 />
 </div>
              </div>

              <div className="lg:col-span-5 rounded-3xl bg-slate-950 p-8 sm:p-10 text-white shadow-xl space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1D4ED8]">
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
