"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATALOG_ITEMS, type ProductItem } from "@/data/siteData";

const CATEGORIES = [
  "All Lines",
  "Uniforms & Sets",
  "Tactical & Duty Gear",
  "Headwear & Branding",
  "Field Accessories",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Lines");

  const filteredItems = useMemo<ProductItem[]>(() => {
    if (selectedCategory === "All Lines") {
      return CATALOG_ITEMS;
    }
    return CATALOG_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 pb-7 border-b border-slate-200">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#134E9E]">
              Batch &amp; Custom Supply
            </p>
            <h1 className="mt-1.5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#061224]">
              Product Catalogue
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Browse uniforms, tactical gear, crests, and accessories available for custom batch runs and restocks.
            </p>
          </div>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-[#061224] px-5 py-2.5 text-sm font-semibold text-white shadow-2xs hover:bg-[#134E9E] transition-colors shrink-0"
          >
            Request Batch Quote →
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-[#061224] text-white shadow-2xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#134E9E]/40 hover:text-[#061224]"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-slate-500">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>

        <section
          aria-label="Catalogue items"
          className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden flex flex-col shadow-2xs hover:border-[#134E9E]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-300" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider text-[#134E9E]">
                    <span>{item.category}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-2 text-base font-bold text-[#061224] leading-snug">
                    {item.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  {item.fabricSpec ? (
                    <p className="mt-2.5 text-xs font-medium text-slate-500 leading-relaxed">
                      {item.fabricSpec}
                    </p>
                  ) : null}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <span className="font-semibold text-slate-700">
                    {item.minOrder || item.priceLabel || "Quote on Request"}
                  </span>
                  <Link
                    href={`/quote?item=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 font-semibold text-[#061224] hover:bg-[#061224] hover:text-white transition-colors"
                  >
                    Quote →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
