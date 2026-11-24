"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, FileText, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const NAV_LINKS = [
{ href: "/", label: "Overview" },
{ href: "/catalog", label: "Catalog" },
{ href: "/production", label: "Workshop & QC" },
{ href: "/sectors", label: "Sectors" },
];

export default function Navbar() {
const pathname = usePathname();
const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
setMobileOpen(false);
}, [pathname]);

return (
<header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
  <div className="mx-auto flex h-22 sm:h-26 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
    <Link
      href="/"
      className="group shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <BrandLogo variant="light" />
    </Link>

    <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-3 lg:gap-4">
      {NAV_LINKS.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4.5 py-2.5 text-sm lg:text-[15px] font-bold transition-all whitespace-nowrap ${
              active
                ? "bg-[#0B1F4C] hover:bg-[#134E9E] text-white shadow-sm"
                : "border border-slate-200/80 bg-slate-50/70 text-slate-800 hover:border-[#BFD3EE] hover:bg-sky-50/60 hover:text-[#134E9E]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>

    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
      <Link
        href="/quote"
        className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white px-3.5 sm:px-4.5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-900 hover:border-[#BFD3EE] hover:text-[#134E9E] transition-colors whitespace-nowrap"
      >
        <FileText className="h-4 w-4 text-[#134E9E]" />
        <span>Get Quote</span>
      </Link>

      <a
        href="tel:08032392875"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0B1F4C] hover:bg-[#134E9E] px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors whitespace-nowrap"
      >
        <Phone className="h-4 w-4" />
        <span>0803 239 2875</span>
      </a>

      <button
        type="button"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
        className="inline-flex md:hidden items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-800 hover:bg-slate-50 hover:text-[#134E9E] transition-colors"
      >
        {mobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </div>
  </div>

  {mobileOpen && (
    <div className="md:hidden border-t border-slate-200/80 bg-white px-4 py-4 space-y-2 shadow-sm">
      <nav aria-label="Mobile navigation" className="flex flex-col space-y-1.5">
        {NAV_LINKS.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                active
                  ? "bg-[#0B1F4C] text-white"
                  : "bg-slate-50 text-slate-800 hover:bg-slate-100 hover:text-[#134E9E]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-2 border-t border-slate-100">
        <a
          href="tel:08032392875"
          onClick={() => setMobileOpen(false)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1F4C] hover:bg-[#134E9E] px-4 py-3 text-sm font-bold text-white transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span>Call 0803 239 2875</span>
        </a>
      </div>
    </div>
  )}
</header>
);
}
