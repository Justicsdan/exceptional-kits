"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/catalog", label: "Catalog" },
  { href: "/production", label: "Workshop & QC" },
  { href: "/sectors", label: "Sectors" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="group flex items-center gap-4 shrink-0">
          <div className="relative flex h-14 w-24 sm:h-16 sm:w-28 items-center justify-center rounded-2xl border border-sky-200/90 bg-gradient-to-b from-white to-sky-50/40 px-2.5 py-1.5 shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-300">
            <img
              src="/images/logo.png?v=4"
              alt="EKW — Exceptional Kits and Wears"
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="hidden sm:block">
            <span className="block text-base lg:text-lg font-extrabold tracking-tight text-slate-950 leading-none">
              EXCEPTIONAL KITS AND WEARS
            </span>
            <span className="mt-1.5 block text-sm font-bold uppercase tracking-[0.24em] text-sky-700">
              Uniforms • Tactical • Cresting
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  active
                    ? "rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-4 py-1.5 text-white shadow-xs"
                    : "text-slate-700 hover:text-[#134E9E]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm sm:text-sm font-bold text-slate-900 hover:border-[#BFD3EE] hover:text-[#134E9E] transition-colors whitespace-nowrap"
          >
            <FileText className="h-4 w-4 text-[#134E9E]" />
            <span>Get Quote</span>
          </Link>

          <a
            href="tel:08032392875"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-4 py-2 text-sm sm:text-sm font-bold text-white hover:bg-[#0B1F4C] hover:bg-[#134E9E] transition-colors whitespace-nowrap"
          >
            <Phone className="h-4 w-4" />
            <span>0803 239 2875</span>
          </a>
        </div>
      </div>
    </header>
  );
}
