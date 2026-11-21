"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WORKSHOP_GALLERY } from "@/data/siteData";

const HERO_SLIDES = [
  {
    title: "Khaki Shirt & Duty Trousers",
    badge: "Complete Uniform Set",
    image: "/images/img-16.jpeg",
  },
  {
    title: "Black Tactical Duty Vest",
    badge: "Field & Patrol Gear",
    image: "/images/img-17.jpeg",
  },
  {
    title: "In-House Sewing Workshop",
    badge: "Direct Manufacturing",
    image: "/images/workshop-floor.jpeg",
  },
  {
    title: "Dark Patrol Uniform Set",
    badge: "Complete Uniform Set",
    image: "/images/img-18.jpeg",
  },
];

const CORE_SHOWCASE = [
  {
    title: "Guard Uniform Sets & Restocks",
    meta: "₦15,000 Set • ₦4,500 Shirt • ₦6,000 Trouser",
    image: "/images/img-16.jpeg",
    href: "/catalog",
  },
  {
    title: "Tactical & Duty Vests",
    meta: "Reinforced Field Protection",
    image: "/images/img-17.jpeg",
    href: "/catalog",
  },
  {
    title: "Branded Caps & Crests",
    meta: "Embroidered Agency Identity",
    image: "/images/img-01.jpeg",
    href: "/catalog",
  },
  {
    title: "Belts, Whistles & Kits",
    meta: "Turnkey Duty Accessories",
    image: "/images/img-04.jpeg",
    href: "/catalog",
  },
];

export default function HomePage() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  const active = HERO_SLIDES[slideIdx];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Big Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                <span>Exceptional Kits And Wears</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.04]">
                Uniforms & Kits Built to Command.
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Security uniforms, tactical vests, branded caps, and field accessories with saved company size charts and single-piece restocks.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1 tabular-nums">
                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                  <p className="text-lg sm:text-xl font-extrabold text-slate-950">Custom Sets</p>
                  <p className="text-[11px] font-medium text-slate-600">Tailored to Spec</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                  <p className="text-lg sm:text-xl font-extrabold text-emerald-700">Single Pieces</p>
                  <p className="text-[11px] font-medium text-slate-600">Easy Replacements</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs">
                  <p className="text-lg sm:text-xl font-extrabold text-slate-950">Saved Sizes</p>
                  <p className="text-[11px] font-medium text-slate-600">Repeat Reorders</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-4 text-sm sm:text-base font-bold text-white shadow-md hover:bg-emerald-700 transition"
                >
                  <Calculator className="h-4 w-4" />
                  <span>Build Quote</span>
                </Link>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  <span>Full Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              className="lg:col-span-7"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative h-96 sm:h-[34rem] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                {HERO_SLIDES.map((s, i) => {
                  const isCurrent = i === slideIdx;
                  return (
                    <div
                      key={s.image}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isCurrent
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    </div>
                  );
                })}

                <div className="relative z-20 flex h-full flex-col justify-between p-7">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-extrabold text-slate-950 shadow-sm">
                      {active.badge}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {active.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      {HERO_SLIDES.map((s, i) => (
                        <button
                          key={s.title}
                          type="button"
                          onClick={() => setSlideIdx(i)}
                          aria-label={s.title}
                          className={`h-2.5 rounded-full transition-all cursor-pointer ${
                            i === slideIdx ? "w-8 bg-emerald-400" : "w-2.5 bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Product Lines */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Core Lines
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-950">
                Signature Uniforms & Duty Gear
              </h2>
            </div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>View All Lines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SHOWCASE.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative h-80 sm:h-96 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">{card.meta}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">{card.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Workshop & Sector Feature Band */}
      <section className="border-t border-slate-200 bg-slate-50/80 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Link
              href="/production"
              className="group relative h-96 sm:h-[28rem] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/images/workshop-floor.jpeg"
                alt="In-house industrial sewing workshop"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Workshop & Size Charts
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                  In-House Stitching & Saved Sizes
                </h3>
              </div>
            </Link>

            <Link
              href="/sectors"
              className="group relative h-96 sm:h-[28rem] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/images/office-seating.jpeg"
                alt="Corporate and estate outfitting"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Sectors Served
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                  Security Firms, Estates & Facilities
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Full Workshop Photo Grid */}
      <section className="border-t border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Workshop Sample Gallery
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {WORKSHOP_GALLERY.map((item) => (
              <Link
                key={item.code}
                href="/catalog"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xs hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
