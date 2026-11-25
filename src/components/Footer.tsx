import Link from "next/link";

const PHONE_DISPLAY = "0803 239 2875";
const PHONE_TEL = "+2348032392875";
const WA_HREF = `https://wa.me/2348032392875?text=${encodeURIComponent(
  "Hello Exceptional Kits and Wears, I'd like to request a quote."
)}`;

const SERVICES = [
  { label: "Uniforms & Duty Gear", href: "/catalog" },
  { label: "Workshop & Size Charts", href: "/production" },
  { label: "Security & Estate Sectors", href: "/sectors" },
  { label: "Order & Reorder Quote", href: "/quote" },
];

const linkClass =
  "text-slate-300 underline decoration-transparent underline-offset-4 transition-colors hover:text-white hover:decoration-sky-400";

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-slate-300">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to kit out your team?
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Send your brief and request a custom quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#0B1F4C] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a custom quote
            </Link>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img
              src="/icon.png"
              alt="EKW logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl bg-white p-1.5"
            />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-white">
                Exceptional Kits and Wears
              </p>
              <p className="text-sm text-slate-400">Quality. Style. Professionalism.</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-400">
            Direct workshop production of security uniforms, tactical vests, branded caps and
            duty accessories, with saved company size charts and single-piece replacement
            support.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
            Our services
          </h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={linkClass}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
            Contact us
          </h3>
          <p className="mt-5 text-[15px] font-semibold text-white">
            Nigeria · Nationwide dispatch
          </p>
          <p className="mt-3 text-[15px]">
            Tel / WhatsApp:{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-semibold text-sky-300 underline decoration-sky-300/40 underline-offset-4 hover:decoration-sky-300"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Uniform production · Security kits · Branding services
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Exceptional Kits and Wears. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made in our workshop. Delivered nationwide.</p>
        </div>
      </div>
    </footer>
  );
}
