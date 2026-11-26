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

const QUANTITY_OPTIONS = [
  "10–24 Sets (Starter Batch)",
  "25–50 Sets",
  "51–150 Sets",
  "150+ Sets (Institutional Rollout)",
  "Single / Restock Pieces",
];

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#134E9E] focus:outline-none";

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
    `Hello Exceptional Kits and Wears, I would like a quote.\n` +
      `Organization: ${organization || "Not specified"}\n` +
      `Contact: ${contactName || "Not specified"} (${phone || "No phone"})\n` +
      `Items: ${selectedLines.join(", ") || "General Uniform Inquiry"}\n` +
      `Estimated Quantity: ${quantity}\n` +
      `Notes: ${notes || "None"}`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#134E9E]">
              Direct Workshop Desk
            </p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.02]">
              Request a{" "}
              <span className="font-editorial italic text-[#134E9E]">Custom</span>{" "}
              Batch Quote
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Select your kit lines, enter your organization details, and send a ready-to-review
              brief straight to our team.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs space-y-8">
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-600 mb-3">
                  1. Select Product Lines
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {KIT_OPTIONS.map((option) => {
                    const active = selectedLines.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleLine(option)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                          active
                            ? "bg-[#0B1F4C] text-white shadow-2xs hover:bg-[#134E9E]"
                            : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#134E9E]/40 hover:bg-white"
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
                  <label
                    htmlFor="quote-org"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Company / School / Agency
                  </label>
                  <input
                    id="quote-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Avid Security Services"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-contact"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Contact Person
                  </label>
                  <input
                    id="quote-contact"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 000 0000"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-qty"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Estimated Quantity
                  </label>
                  <select
                    id="quote-qty"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={fieldClass}
                  >
                    {QUANTITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-notes"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Branding, Fabric &amp; Sizing Notes
                </label>
                <textarea
                  id="quote-notes"
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share preferred colors, chest/sleeve embroidery, reflective strips, or delivery timeline..."
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={`https://wa.me/2348032392875?text=${whatsappSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-7 py-3.5 text-sm font-bold text-white transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Send Quote via WhatsApp</span>
                </a>

                <a
                  href="tel:+2348032392875"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:border-[#134E9E]"
                >
                  <PhoneCall className="h-4 w-4 text-[#134E9E]" />
                  <span>Call 0803 239 2875</span>
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5 rounded-3xl bg-[#061224] text-white p-8 sm:p-10 space-y-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
                Specification Summary
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Ready for{" "}
                <span className="font-editorial italic text-sky-200">Workshop</span>{" "}
                Review
              </h2>

              <div className="space-y-4 border-t border-white/15 pt-5 text-sm">
                <div>
                  <span className="text-slate-300 block text-xs font-semibold uppercase tracking-wider">
                    Selected Lines
                  </span>
                  <p className="mt-1 font-semibold text-white leading-6">
                    {selectedLines.length > 0
                      ? selectedLines.join(" · ")
                      : "None selected yet"}
                  </p>
                </div>

                <div>
                  <span className="text-slate-300 block text-xs font-semibold uppercase tracking-wider">
                    Batch Size
                  </span>
                  <p className="mt-1 font-semibold text-white">{quantity}</p>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/15 pt-5 text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>Custom embroidery &amp; woven badge sampling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>Size run confirmation prior to bulk cutting</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Send className="h-4 w-4 text-sky-300 shrink-0 mt-0.5" />
                  <span>Workshop walk-in in Ipaja, Lagos &amp; nationwide dispatch</span>
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
