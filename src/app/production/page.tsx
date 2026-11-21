import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTION_STAGES } from "@/data/siteData";

const STAGE_IMAGES = [
  "/images/img-13.jpeg",
  "/images/img-07.jpeg",
  "/images/workshop-floor.jpeg",
  "/images/img-06.jpeg",
  "/images/img-16.jpeg",
];

const SIZE_CHART = [
  { size: "S", chest: '36" – 38"', waist: '28" – 30"', shirtLen: '28"', trouserLen: '40"' },
  { size: "M", chest: '38" – 40"', waist: '31" – 33"', shirtLen: '29"', trouserLen: '41"' },
  { size: "L", chest: '41" – 43"', waist: '34" – 36"', shirtLen: '30"', trouserLen: '42"' },
  { size: "XL", chest: '44" – 46"', waist: '37" – 39"', shirtLen: '31"', trouserLen: '43"' },
  { size: "2XL", chest: '47" – 49"', waist: '40" – 42"', shirtLen: '32"', trouserLen: '44"' },
  { size: "3XL", chest: '50" – 52"', waist: '43" – 46"', shirtLen: '33"', trouserLen: '44"' },
];

export default function ProductionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Lead Image Banner */}
      <section className="border-b border-slate-200 bg-slate-50/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Workshop & Quality Control
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Precision Stitching & Saved Sizes
              </h1>
              <p className="text-base sm:text-lg text-slate-700">
                In-house workshop stations, shade-locked fabric, and archived size charts for clean repeat orders.
              </p>
              <div className="pt-1">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition"
                >
                  <span>Start Order Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                <img
                  src="/images/workshop-floor.jpeg"
                  alt="Exceptional Kits And Wears sewing floor"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">Workshop Proof</p>
                  <p className="text-xl font-extrabold text-white">Industrial Sewing & QC Floor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage Production Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-10">
            5-Stage Workshop Process
          </h2>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTION_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={STAGE_IMAGES[idx % STAGE_IMAGES.length]}
                    alt={stage.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-slate-950">
                    Step {stage.step}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-950">{stage.title}</h3>
                  <p className="text-sm text-slate-700">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saved Size Matrix */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-8">
            Standard Guard Size Matrix
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase text-slate-600">
                  <th className="py-3.5 pr-4">Size</th>
                  <th className="py-3.5 px-4">Chest</th>
                  <th className="py-3.5 px-4">Waist</th>
                  <th className="py-3.5 px-4">Shirt Length</th>
                  <th className="py-3.5 pl-4">Trouser Outseam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 tabular-nums">
                {SIZE_CHART.map((row) => (
                  <tr key={row.size} className="hover:bg-slate-50">
                    <td className="py-4 pr-4 font-extrabold text-emerald-700">{row.size}</td>
                    <td className="py-4 px-4">{row.chest}</td>
                    <td className="py-4 px-4">{row.waist}</td>
                    <td className="py-4 px-4">{row.shirtLen}</td>
                    <td className="py-4 pl-4">{row.trouserLen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
