"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, Calculator } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/catalog", label: "Catalog" },
  { href: "/production", label: "Workshop & QC" },
  { href: "/sectors", label: "Sectors" },
  { href: "/quote", label: "Order Quote" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Exceptional Kits And Wears Logo"
            className="h-14 w-auto object-contain transition group-hover:scale-[1.02]"
          />
          <span className="hidden sm:block text-base xl:text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap">
            EXCEPTIONAL KITS AND WEARS
          </span>
        </Link>

        {/* Bigger Single-Line Desktop Menu */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-2"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm xl:text-base font-bold whitespace-nowrap transition ${
                  active
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 whitespace-nowrap hover:border-slate-400 hover:bg-slate-50 transition"
          >
            <Calculator className="h-4 w-4 text-emerald-700" />
            <span>Get Quote</span>
          </Link>

          <a
            href="tel:08032392875"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white whitespace-nowrap shadow-xs hover:bg-emerald-700 transition"
          >
            <PhoneCall className="h-4 w-4" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white p-3 text-slate-900 hover:bg-slate-50 cursor-pointer"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-2.5">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-3.5 text-base font-bold ${
                  active
                    ? "bg-emerald-600 text-white"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 grid grid-cols-2 gap-3">
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3.5 text-sm font-bold text-slate-900"
            >
              <Calculator className="h-4 w-4 text-emerald-700" />
              <span>Get Quote</span>
            </Link>
            <a
              href="tel:08032392875"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Workshop</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
