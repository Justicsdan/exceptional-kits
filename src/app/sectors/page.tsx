import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SECTORS } from "@/data/siteData";

const SECTOR_PHOTOS = [
  "/images/img-16.jpeg",
  "/images/img-17.jpeg",
  "/images/img-18.jpeg",
  "/images/office-seating.jpeg",
];

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Lead Image Banner */}
      <section className="border-b border-slate-200 bg-slate-50/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Sectors Served
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Outfitting Built for Every Sector
              </h1>
              <p className="text-base sm:text-lg text-slate-700">
                Tailored uniform and kit programs for private security agencies, estates, corporate spaces, and event teams.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                <img
                  src="/images/img-18.jpeg"
                  alt="Patrol uniform outfitting across sectors"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">Institutional Outfitting</p>
                  <p className="text-xl font-extrabold text-white">Guard Forces, Estates & Facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Cards */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {SECTORS.map((sector, idx) => (
            <div
              key={sector.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={SECTOR_PHOTOS[idx % SECTOR_PHOTOS.length]}
                  alt={sector.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">{sector.recommendedKit}</p>
                  <h2 className="mt-1 text-2xl font-extrabold text-white">{sector.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-700">{sector.solution}</p>
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
      </section>

      <Footer />
    </div>
  );
}
