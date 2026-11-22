"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WORKSHOP_GALLERY } from "@/data/siteData";

const CATEGORIES = [
  "All Lines",
  "Uniforms & Sets",
  "Tactical & Duty Gear",
  "Headwear & Branding",
  "Field Accessories",
] as const;

type Category = (typeof CATEGORIES)[number];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All Lines");

  const filteredItems =
    selectedCategory === "All Lines"
      ? WORKSHOP_GALLERY
      : WORKSHOP_GALLERY.filter((item) => item.category === selectedCategory);

  const leadItem = filteredItems[0] ?? WORKSHOP_GALLERY[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-slate-50/70 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 leading-[0.95]">
                  Uniforms,{" "}
                  <span className="font-editorial text-emerald-700 text-6xl sm:text-7xl lg:text-8xl">
                    Tactical
                  </span>{" "}
                  Gear &amp; Kits
                </h1>

                <p className="text-sm font-semibold text-slate-600">
                  Custom crests • Batch runs • Direct restocks
                </p>

                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => {
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                          active
                            ? "bg-emerald-600 text-white"
                            : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-1">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="group relative h-80 sm:h-[29rem] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-lg">
                  <img
                    src={leadItem?.image || "/images/patrol-kit.jpeg"}
                    alt={leadItem?.title || "Tactical Duty & Uniform Line"}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                      {selectedCategory}
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                      {leadItem?.title || "Tactical Duty & Uniform Line"}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-baseline justify-between gap-4 mb-12 border-b border-slate-200 pb-5">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950">
                <span className="font-editorial text-emerald-700 text-4xl sm:text-6xl">
                  {selectedCategory}
                </span>
              </h2>
              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.map((item) => (
                <article
                  key={`${item.code}-${item.image}`}
                  className="group space-y-3"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xs group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="px-1 text-sm font-bold text-slate-950 line-clamp-1">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
