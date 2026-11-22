import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTION_STAGES } from "@/data/siteData";

const QC_PILLARS = [
  {
    key: "seam",
    title: "Seam & Stress Check",
    caption: "Reinforced stitching & fabric check",
    image: "/images/duty-shirt.jpeg",
  },
  {
    key: "crest",
    title: "Crest & Badge Finish",
    caption: "Crisp embroidery & emblem alignment",
    image: "/images/branded-cap.jpeg",
  },
  {
    key: "pack",
    title: "Batch Sizing & Pack",
    caption: "Sorted, pressed & ready for dispatch",
    image: "/images/field-belt.jpeg",
  },
];

export default function ProductionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <section className="relative bg-slate-950 text-white py-24 lg:py-32 overflow-hidden">
          <img
            src="/images/workshop-view.jpeg"
            alt="Exceptional Kits production floor"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              In-House Workshop
            </p>
            <h1 className="mt-4 text-5xl sm:text-7xl font-extrabold leading-[0.95] max-w-4xl">
              Workshop{" "}
              <span className="font-editorial text-emerald-300 text-6xl sm:text-8xl">
                Craft
              </span>{" "}
              &amp; Quality Control
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <span>Start Batch Run</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colors"
              >
                <span>View Catalog</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-36 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="border-b border-slate-200 pb-8 mb-14">
              <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">
                Production{" "}
                <span className="font-editorial text-emerald-700 text-5xl sm:text-7xl">
                  Stages
                </span>
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {PRODUCTION_STAGES.map((stage) => (
                <div
                  key={stage.title}
                  className="py-9 lg:py-12 grid gap-4 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {stage.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm sm:text-base text-slate-600">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50/70 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 mb-14">
              Quality{" "}
              <span className="font-editorial text-emerald-700 text-5xl sm:text-7xl">
                Inspection
              </span>
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {QC_PILLARS.map((pillar) => (
                <article key={pillar.key} className="group space-y-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {pillar.caption}
                    </p>
                    <h3 className="mt-0.5 text-xl font-bold text-slate-950">
                      {pillar.title}
                    </h3>
                  </div>
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
