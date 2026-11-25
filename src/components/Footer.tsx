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
    <footer className="flow-root bg-[#061224] text-slate-300">
      <div className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#134E9E] via-[#0F3A7D] to-[#0B1F4C] p-8 shadow-[0_30px_80px_-20px_rgba(6,18,36,0.7)] ring-1 ring-white/10 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_0%,rgba(125,211,252,0.28),transparent_60%)]"
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Ready to kit out{" "}
                <span className="font-serif font-normal italic text-sky-200">your team?</span>
              </h2>
              <p className="mt-3 max-w-md text-base text-slate-200">
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
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img
              src="/icon.png"
              alt="EKW logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl bg-white p-1.5"
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 pb-24 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8 lg:pb-6">
          <p>
            © {new Date().getFullYear()} Exceptional Kits and Wears · Made in our workshop,
            delivered nationwide.
          </p>
          <a href="#" className="text-slate-300 transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
