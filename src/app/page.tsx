"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    image: "/images/patrol-kit.jpeg",
    ctaHref: "/production",
    ctaLabel: "Workshop & QC",
  },
  {
    kicker: "Institutional Supply",
    tabLabel: "Batches",
    lead: "Tailored",
    accent: "Batch Runs",
    tail: "Ready to Issue",
    image: "/images/guard-set.jpeg",
    ctaHref: "/quote",
    ctaLabel: "Request Quote",
  },
];

const SIGNATURE_LINES = [
  {
    title: "Uniform Sets",
    tag: "Duty",
    image: "/images/guard-set.jpeg",
    href: "/catalog",
  },
  {
    title: "Tactical Vests",
    tag: "Field",
    image: "/images/batch-pack.jpeg",
    href: "/catalog",
  },
  {
    title: "Branded Caps",
    tag: "Cresting",
    image: "/images/cap-line.jpeg",
    href: "/catalog",
  },
  {
    title: "Field Gear",
    tag: "Utility",
    image: "/images/cargo-pant.jpeg",
    href: "/catalog",
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
      !/(logo|brand|mark|icon|badge|crest)/i.test(`${item.image} ${item.displayTitle}`)
  );

  const lookbookBands = [
    {
      key: "patrol",
      lead: "Patrol &",
      accent: "Tactical",
      items: galleryItems.slice(0, 3),
    },
    {
      key: "institutional",
      lead: "Institutional &",
      accent: "Tailored",
      items: galleryItems.slice(3, 6),
    },
    {
      key: "cresting",
      lead: "Cresting &",
      accent: "Accessories",
      items: galleryItems.slice(6, 9),
    },
    {
      key: "batch",
      lead: "Batch Finishing &",
      accent: "Dispatch",
      items: galleryItems.slice(9, 12),
    },
    {
      key: "archive",
      lead: "Workshop",
      accent: "Archive",
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
          className="relative py-14 lg:py-24 bg-gradient-to-b from-slate-50/90 via-white to-white overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>{slide.kicker}</span>
                </div>

                <h1
                  key={slide.accent}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 transition-all duration-500"
                >
                  {slide.lead}{" "}
                  <span className="font-editorial text-emerald-700 text-6xl sm:text-7xl lg:text-8xl">
                    {slide.accent}
                  </span>{" "}
                  {slide.tail}
                </h1>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={slide.ctaHref}
                    className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 hover:shadow-md transition-all"
                  >
                    <span>{slide.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/sectors"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 hover:border-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Sectors</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-3">
                  {HERO_SLIDES.map((s, idx) => {
                    const active = activeSlide === idx;
                    return (
                      <button
                        key={s.tabLabel}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          active
                            ? "bg-slate-950 text-white shadow-xs"
                            : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-700"
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
                      className={`absolute inset-0 h-full w-full object-cover animate-slow-zoom transition-all duration-700 ease-out ${
                        activeSlide === idx
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    />
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        {slide.tabLabel}
                      </p>
                      <p className="mt-1 font-editorial text-3xl sm:text-4xl text-white">
                        {slide.accent}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      Direct Workshop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Signature Lines */}
        <section className="border-t border-slate-200 bg-slate-50/70 py-28 lg:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-4 mb-14">
              <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                Core{" "}
                <span className="font-editorial text-emerald-700 text-5xl sm:text-7xl">
                  Collections
                </span>
              </h2>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNATURE_LINES.map((line) => (
                <Link
                  key={line.title}
                  href={line.href}
                  className="group relative h-[26rem] overflow-hidden rounded-3xl bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500"
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
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                      {line.tag}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {line.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Band 3: Dedicated People & On-Body Fit */}
        {peopleItems.length > 0 && (
          <section className="border-t border-slate-200 bg-white py-28 lg:py-44">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex items-end justify-between gap-4 mb-14">
                <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                  On-Body{" "}
                  <span className="font-editorial text-emerald-700 text-5xl sm:text-7xl">
                    Showcase
                  </span>
                </h2>
                <Link
                  href="/sectors"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
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
                    className="group relative h-[28rem] sm:h-[34rem] overflow-hidden rounded-3xl bg-slate-950 shadow-md hover:shadow-2xl transition-all duration-500"
                  >
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
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                        {person.category}
                      </p>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                        {person.displayTitle}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Band 4: Spaced Editorial Lookbook Chapters */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-28 lg:py-44">
          <div className="mx-auto max-w-7xl px-6 space-y-36 lg:space-y-48">
            {lookbookBands.map((band) => (
              <div key={band.key} className="space-y-12">
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-6">
                  <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                    {band.lead}{" "}
                    <span className="font-editorial text-emerald-700 text-5xl sm:text-7xl">
                      {band.accent}
                    </span>
                  </h2>
                  <Link
                    href="/quote"
                    className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-emerald-700"
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
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* Band 5: Full-Width Visual Closing Banner */}
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
                className="h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 max-w-2xl space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                  Direct Workshop
                </p>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-white">
                  Ready for Your{" "}
                  <span className="font-editorial text-emerald-300 text-5xl sm:text-7xl">
                    Custom Batch
                  </span>
                </h2>
                <div>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
                  >
                    <span>Start Quote</span>
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
