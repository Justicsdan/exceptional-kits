"use client";

import React, { useState } from "react";
import { Calculator, Printer, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY_INFO } from "@/data/siteData";

export default function QuotePage() {
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryState, setDeliveryState] = useState("Nationwide Dispatch");
  const [completeSets, setCompleteSets] = useState<number>(10);
  const [extraShirts, setExtraShirts] = useState<number>(0);
  const [extraTrousers, setExtraTrousers] = useState<number>(0);
  const [tacticalVests, setTacticalVests] = useState<number>(0);
  const [brandedCaps, setBrandedCaps] = useState<number>(10);
  const [sizeNotes, setSizeNotes] = useState(
    "Specify sizes (S–3XL), uniform color, tactical gear, or agency branding requirements"
  );

  const totalUnits =
    completeSets + extraShirts + extraTrousers + tacticalVests + brandedCaps;

  const whatsappMessage = [
    `*QUOTE REQUEST — ${COMPANY_INFO.name.toUpperCase()}*`,
    `Organization: ${orgName || "Not specified"}`,
    `Contact Person: ${contactName || "Not specified"}`,
    `Phone: ${phone || "Not specified"}`,
    `Delivery Location: ${deliveryState}`,
    `--------------------------------`,
    `• Complete Uniform Sets: ${completeSets}`,
    `• Single Replacement Shirts: ${extraShirts}`,
    `• Single Replacement Trousers: ${extraTrousers}`,
    `• Tactical Duty Vests: ${tacticalVests}`,
    `• Branded Security Caps / Gear: ${brandedCaps}`,
    `Total Requested Units: ${totalUnits}`,
    `--------------------------------`,
    `Specs & Size Notes: ${sizeNotes}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-slate-200 bg-slate-50/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700">
                <Calculator className="h-3.5 w-3.5" />
                <span>Order & Reorder Request</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
                Request a Custom Uniform & Kit Quote
              </h1>
              <p className="text-base sm:text-lg text-slate-700">
                Enter your item counts, size details, and branding notes to send a structured request directly to our workshop.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                <img
                  src="/images/img-06.jpeg"
                  alt="Custom agency crest and kit branding"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-xs font-semibold text-emerald-300">Direct Workshop Request</p>
                  <p className="text-xl font-extrabold text-white">Tailored Sets, Vests & Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-950">
                1. Organization & Contact Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Organization / Estate / Firm
                  </label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Organization name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="080X XXX XXXX"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    value={deliveryState}
                    onChange={(e) => setDeliveryState(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <h2 className="text-xl font-extrabold text-slate-950 pt-4">
                2. Requested Quantities
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <label className="block text-xs font-extrabold text-slate-950">
                    Complete Uniform Sets
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={completeSets}
                    onChange={(e) => setCompleteSets(Math.max(0, Number(e.target.value)))}
                    className="mt-2.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-950"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <label className="block text-xs font-extrabold text-slate-950">
                    Single Replacement Shirts
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={extraShirts}
                    onChange={(e) => setExtraShirts(Math.max(0, Number(e.target.value)))}
                    className="mt-2.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-950"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <label className="block text-xs font-extrabold text-slate-950">
                    Single Replacement Trousers
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={extraTrousers}
                    onChange={(e) => setExtraTrousers(Math.max(0, Number(e.target.value)))}
                    className="mt-2.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-950"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <label className="block text-xs font-extrabold text-slate-950">
                    Tactical Duty Vests
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={tacticalVests}
                    onChange={(e) => setTacticalVests(Math.max(0, Number(e.target.value)))}
                    className="mt-2.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-950"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:col-span-2">
                  <label className="block text-xs font-extrabold text-slate-950">
                    Branded Caps & Duty Accessories
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={brandedCaps}
                    onChange={(e) => setBrandedCaps(Math.max(0, Number(e.target.value)))}
                    className="mt-2.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Sizes, Fabric Color & Branding Notes
                </label>
                <textarea
                  rows={3}
                  value={sizeNotes}
                  onChange={(e) => setSizeNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Request Sheet
                    </p>
                    <h3 className="text-xl font-extrabold text-slate-950 mt-0.5">
                      Order Specification Summary
                    </h3>
                  </div>
                  <ShieldCheck className="h-7 w-7 text-emerald-700" />
                </div>

                <div className="space-y-3 text-sm tabular-nums">
                  <div className="flex justify-between text-slate-700">
                    <span>Complete Uniform Sets</span>
                    <span className="font-bold text-slate-950">{completeSets}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Single Replacement Shirts</span>
                    <span className="font-bold text-slate-950">{extraShirts}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Single Replacement Trousers</span>
                    <span className="font-bold text-slate-950">{extraTrousers}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Tactical Duty Vests</span>
                    <span className="font-bold text-slate-950">{tacticalVests}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Branded Caps & Accessories</span>
                    <span className="font-bold text-slate-950">{brandedCaps}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-slate-700">Total Requested Items</span>
                  <span className="text-3xl font-extrabold text-slate-950 tabular-nums">
                    {totalUnits}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm sm:text-base font-extrabold text-white shadow-md hover:bg-[#20bd5a] transition"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span>Send Request via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
                  >
                    <Printer className="h-4 w-4" />
                    <span>Print / Save Request Sheet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
