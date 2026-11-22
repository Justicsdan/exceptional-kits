"use client";

import { useState } from "react";
import { CheckCircle2, PhoneCall, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const KIT_OPTIONS = [
  "Complete Security Uniform Sets",
  "Tactical Vests & Utility Gear",
  "Branded Caps & Headwear",
  "Duty Belts, Lanyards & Accessories",
  "School & Academy Uniforms",
  "Corporate & Facility Wear",
];

export default function QuotePage() {
  const [organization, setOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("25–50 Sets");
  const [selectedLines, setSelectedLines] = useState<string[]>([
    "Complete Security Uniform Sets",
  ]);
  const [notes, setNotes] = useState("");

  function toggleLine(line: string) {
    setSelectedLines((prev) =>
      prev.includes(line) ? prev.filter((item) => item !== line) : [...prev, line]
    );
  }

  const whatsappSummary = encodeURIComponent(
    `Hello Exceptional Kits And Wears, I would like a quote.\n` +
      `Organization: ${organization || "Not specified"}\n` +
      `Contact: ${contactName || "Not specified"} (${phone || "No phone"})\n` +
      `Items: ${selectedLines.join(", ") || "General Uniform Inquiry"}\n` +
      `Estimated Quantity: ${quantity}\n` +
      `Notes: ${notes || "None"}`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Direct Workshop Desk
            </p>
            <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-slate-950 leading-[0.96]">
              Request a{" "}
              <span className="font-editorial text-emerald-700 text-6xl sm:text-7xl">
                Custom
              </span>{" "}
              Batch Quote
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Form Workspace */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">
                  1. Select Product Lines
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {KIT_OPTIONS.map((option) => {
                    const active = selectedLines.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleLine(option)}
                        className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          active
                            ? "bg-emerald-600 text-white"
                            : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-500"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Company / School / Agency
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Avid Security Services"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 000 0000"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                  >
                    <option>10–24 Sets (Starter Batch)</option>
                    <option>25–50 Sets</option>
                    <option>51–150 Sets</option>
                    <option>150+ Sets (Institutional Rollout)</option>
                    <option>Single / Restock Pieces</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Branding, Fabric &amp; Sizing Notes
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share preferred colors, chest/sleeve embroidery, reflective strips, or delivery timeline..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/2348032392875?text=${whatsappSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Send Quote via WhatsApp</span>
                </a>

                <a
                  href="tel:+2348032392875"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-900 hover:border-emerald-600"
                >
                  <PhoneCall className="h-4 w-4 text-emerald-600" />
                  <span>Call 0803 239 2875</span>
                </a>
              </div>
            </div>

            {/* Right Live Specification Summary */}
            <aside className="lg:col-span-5 rounded-3xl bg-slate-950 text-white p-8 sm:p-10 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                Specification Summary
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Ready for{" "}
                <span className="font-editorial text-emerald-300 text-4xl sm:text-5xl">
                  Workshop
                </span>{" "}
                Review
              </h2>

              <div className="space-y-4 border-t border-white/15 pt-5 text-sm">
                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider">
                    Selected Lines
                  </span>
                  <p className="mt-1 font-semibold text-white">
                    {selectedLines.length > 0
                      ? selectedLines.join(" • ")
                      : "None selected yet"}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wider">
                    Batch Size
                  </span>
                  <p className="mt-1 font-semibold text-white">{quantity}</p>
                </div>
              </div>

              <div className="space-y-2.5 border-t border-white/15 pt-5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom embroidery &amp; woven badge sampling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Size-run confirmation prior to bulk cutting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Direct workshop coordination in Abuja &amp; nationwide</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
