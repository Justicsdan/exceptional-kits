import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SECTORS } from "@/data/siteData";

const SECTOR_VISUALS = [
  "/images/plaid-school-pinafore.jpeg",
  "/images/bagged-uniform-batch.jpeg",
  "/images/bagged-uniform-batch.jpeg",
  "/images/black-knee-elbow-pads.jpeg",
];

export default function SectorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-slate-50/70 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#134E9E]">
              Client Sectors
            </p>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-950 leading-[0.95]">
              Sectors We{" "}
              <span className="font-editorial text-[#134E9E] text-6xl sm:text-8xl">
                Outfit
              </span>
            </h1>
          </div>
        </section>

        <section className="py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 space-y-28 lg:space-y-40">
            {SECTORS.map((sector, idx) => {
              const imageSrc = SECTOR_VISUALS[idx % SECTOR_VISUALS.length];
              const isReversed = idx % 2 === 1;

              return (
                <div
                  key={sector.title}
                  className="grid gap-12 lg:grid-cols-12 lg:items-center"
                >
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-md">
                      <img
                        src={imageSrc}
                        alt={sector.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
                      {sector.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {sector.solution}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#134E9E]">
                      {sector.recommendedKit}
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-[#0B1F4C] hover:bg-[#134E9E] transition-colors"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
