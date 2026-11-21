"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATALOG_ITEMS, WORKSHOP_GALLERY } from "@/data/siteData";

const CATEGORIES = [
  "All Lines",
  "Uniforms & Sets",
  "Tactical & Duty Gear",
  "Headwear & Branding",
  "Field Accessories",
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Lines");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const filteredItems =
    selectedCategory === "All Lines"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((item) => item.category === selectedCategory);

  const filteredGallery =
    selectedCategory === "All Lines"
      ? WORKSHOP_GALLERY
      : WORKSHOP_GALLERY.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Lead Image Banner */}
      <section className="border-b border-slate-200 bg-slate-50/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Product Catalog
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Uniforms, Tactical Gear & Kits
              </h1>
              <p className="text-base sm:text-lg text-slate-700">
                Browse complete sets, single-piece restocks, tactical vests, custom caps, and field accessories.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition cursor-pointer ${
                        active
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                <img
                  src="/images/img-17.jpeg"
                  alt="Featured tactical duty gear and uniforms"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">Catalog Lead Showcase</p>
                  <p className="text-xl font-extrabold text-white">Tactical Duty & Uniform Line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Line Cards */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-extrabold text-slate-950">
                    {item.priceLabel}
                  </span>
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-semibold text-emerald-300">{item.category}</p>
                    <h2 className="mt-0.5 text-xl sm:text-2xl font-extrabold text-white">
                      {item.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-slate-700">{item.fabricSpec}</p>
                  <Link
                    href="/quote"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition"
                  >
                    <span>Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Archive */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-10">
            Sample Archive ({filteredGallery.length})
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGallery.map((sample) => (
              <button
                key={sample.code}
                type="button"
                onClick={() =>
                  setLightboxImage({ src: sample.image, title: `${sample.code} — ${sample.title}` })
                }
                className="group relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-left shadow-sm hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-bold text-emerald-300">{sample.code}</p>
                  <p className="text-sm font-extrabold text-white">{sample.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[75vh] w-full object-contain bg-slate-950"
            />
            <div className="flex items-center justify-between px-6 py-4">
              <p className="font-bold text-white text-sm sm:text-base">{lightboxImage.title}</p>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="rounded-lg bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
