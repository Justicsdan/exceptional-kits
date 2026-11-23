"use client";

import { useMemo, useState } from "react";
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Batch &amp; Custom Supply
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#061224]">
              Product Catalog
            </h1>
            <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">
              Browse uniforms, tactical gear, crests, and accessories available for custom batch runs and restocks.
            </p>
          </div>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-[#061224] px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition shrink-0"
          >
            Request Batch Quote →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition cursor-pointer ${
                  active
                    ? "bg-[#061224] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto text-xs text-slate-500">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>

        <section
          aria-label="Catalog items"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col hover:border-slate-300 transition"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-300"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    <span>{item.category}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] text-slate-700">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-1.5 text-base font-bold text-[#061224] leading-snug">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                  {item.fabricSpec ? (
                    <p className="mt-2 text-[11px] text-slate-500 line-clamp-1">
                      {item.fabricSpec}
                    </p>
                  ) : null}
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    {item.minOrder || item.priceLabel || "Quote on Request"}
                  </span>
                  <Link
                    href={`/quote?item=${encodeURIComponent(item.name)}`}
                    className="font-semibold text-[#061224] hover:underline"
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
