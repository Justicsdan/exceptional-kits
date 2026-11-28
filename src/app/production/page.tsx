import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTION_STAGES } from "@/data/siteData";

const QC_PILLARS = [
  {
    key: "crest",
    title: "Crest & Badge Finish",
    caption: "Crisp embroidery & emblem alignment",
    image: "/images/review-13-4eb26e.jpeg",
  },
  {
    key: "pack",
    title: "Batch Sizing & Pack",
    caption: "Sorted, pressed & ready for dispatch",
    image: "/images/yellow-cord-white-trim.jpeg",
  },
];

export default function ProductionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <section className="relative bg-slate-950 text-white py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/review-11-332315.jpeg"
            alt="Exceptional Kits production floor"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
              In House Workshop
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
                className="inline-flex items-centre gap-2 rounded-full bg-[#0B1F4C] hover:bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition-colours"
              >
                <span>Start Batch Run</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex items-centre gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colours"
              >
                <span>View Catalogue</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="border-b border-slate-200 pb-6 mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#134E9E]">
                Step-by-Step Workflow
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Production{" "}
                <span className="font-editorial italic text-[#134E9E]">Stages</span>
              </h2>
            </div>

            <div className="space-y-5">
              {PRODUCTION_STAGES.map((stage) => (
                <article
                  key={stage.step}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 shadow-2xs transition-colours hover:border-[#134E9E]/40 hover:bg-white"
                >
                  <div className="grid gap-4 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5 flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-centre justify-centre rounded-xl bg-[#0B1F4C] text-sm font-extrabold tracking-wider text-white">
                        {stage.step}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold leading-snug text-slate-950">
                        {stage.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-7 lg:pl-4">
                      <p className="text-base leading-7 text-slate-700">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50/70 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#134E9E]">
                Final Verification
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Quality{" "}
                <span className="font-editorial italic text-[#134E9E]">Inspection</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {QC_PILLARS.map((pillar) => (
                <article
                  key={pillar.key}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#134E9E]">
                      {pillar.caption}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-slate-950">
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
