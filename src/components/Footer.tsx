import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex rounded-xl bg-white p-2">
              <img
                src="/images/logo.png"
                alt="Exceptional Kits And Wears"
                className="h-12 w-auto object-contain"
              />
            </div>
            <h2 className="text-base font-bold text-white">
              Exceptional Kits And Wears
            </h2>
            <p className="text-xs italic text-sky-400">
              ...Quality. Style. Professionalism.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Direct workshop production of security uniforms, tactical vests,
              branded caps, and duty accessories with saved company size charts
              and single piece replacement support.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  &gt; Uniforms &amp; Duty Gear
                </Link>
              </li>
              <li>
                <Link href="/production" className="hover:text-white transition-colors">
                  &gt; Workshop &amp; Size Charts
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors">
                  &gt; Security &amp; Estate Sectors
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  &gt; Order &amp; Reorder Quote
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              CONTACT US
            </h3>
            <p className="text-sm font-semibold text-white">
              Nigeria &bull; Nationwide Dispatch
            </p>
            <p className="text-sm text-slate-400">
              Tel / WhatsApp:{" "}
              <a
                href="tel:+2348032392875"
                className="text-sky-400 hover:underline"
              >
                0803 239 2875
              </a>
            </p>
            <p className="text-xs text-slate-400">
              Uniform Production &bull; Security Kits &bull; Branding Services
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/2348032392875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0B1F4C] px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/80 pt-8 text-center text-sm text-slate-500">
          Copyright &copy; 2026 Exceptional Kits And Wears. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
