import React from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY_INFO } from "@/data/siteData";

const FOOTER_LINKS = [
  { href: "/catalog", label: "Uniforms & Duty Gear" },
  { href: "/production", label: "Workshop & Size Charts" },
  { href: "/sectors", label: "Security & Estate Sectors" },
  { href: "/quote", label: "Order & Reorder Quote" },
];

export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 lg:pt-24 lg:pb-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:items-start">
            {/* Left Large Brand Block */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-4 group">
                <div className="flex h-20 items-center justify-center rounded-2xl bg-white px-4 py-2 shadow-md">
                  <img
                    src="/images/logo.png"
                    alt="Exceptional Kits And Wears Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <div>
                <p className="text-xl font-extrabold tracking-tight text-white">
                  {COMPANY_INFO.name}
                </p>
                <p className="mt-1 text-sm italic text-emerald-300">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
              <p className="max-w-md text-sm text-slate-400 leading-relaxed">
                Direct workshop production of security uniforms, tactical vests,
                branded caps, and duty accessories with saved company size charts
                and single-piece replacement support.
              </p>
            </div>

            {/* Center Navigation Directory */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-lg font-bold text-white">Our Services</h3>
              <ul className="space-y-3 text-sm">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition"
                    >
                      <span className="text-emerald-400 font-bold">&gt;</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Contact & Workshop Details */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-lg font-bold text-white">Contact Us</h3>
              <div className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
                <p className="font-semibold text-white">{COMPANY_INFO.location}</p>
                <p>
                  <span className="text-slate-400">Tel / WhatsApp: </span>
                  <a
                    href="tel:08032392875"
                    className="font-bold text-emerald-300 hover:text-emerald-200 transition"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </p>
                <p className="text-slate-400">
                  Uniform Production • Security Kits • Branding Services
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    "Hello Exceptional Kits And Wears, I would like to inquire about uniforms / security kits."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#20bd5a] transition"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Centered Copyright Strip */}
          <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs sm:text-sm text-slate-400">
            <p>
              Copyright © {new Date().getFullYear()} {COMPANY_INFO.name}. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom-Right Floating WhatsApp Pill */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
          "Hello Exceptional Kits And Wears, how can we help you?"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="How can we help you on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-black/25 hover:bg-[#20bd5a] hover:-translate-y-0.5 transition"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>How can we help you?</span>
      </a>
    </>
  );
}
