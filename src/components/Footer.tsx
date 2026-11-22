import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex h-20 w-32 items-center justify-center rounded-2xl border border-slate-700/80 bg-white p-2 shadow-md">
              <img
                src="/images/logo.png?v=3"
                alt="EKW — Exceptional Kits and Wears"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                Exceptional Kits And Wears
              </h3>
              <p className="mt-1 text-xs italic text-emerald-400">
                ...Quality. Style. Professionalism.
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Direct workshop production of security uniforms, tactical vests,
              branded caps, and duty accessories with saved company size charts
              and single-piece replacement support.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/catalog" className="hover:text-emerald-400 transition-colors">
                  &gt; Uniforms &amp; Duty Gear
                </Link>
              </li>
              <li>
                <Link href="/production" className="hover:text-emerald-400 transition-colors">
                  &gt; Workshop &amp; Size Charts
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-emerald-400 transition-colors">
                  &gt; Security &amp; Estate Sectors
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-emerald-400 transition-colors">
                  &gt; Order &amp; Reorder Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <p className="text-sm font-semibold text-white">
              Nigeria • Nationwide Dispatch
            </p>
            <p className="text-sm text-slate-400">
              Tel / WhatsApp:{" "}
              <a
                href="tel:08032392875"
                className="font-semibold text-emerald-400 hover:underline"
              >
                0803 239 2875
              </a>
            </p>
            <p className="text-xs text-slate-400">
              Uniform Production • Security Kits • Branding Services
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/2348032392875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-500">
          Copyright © 2026 Exceptional Kits And Wears. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
