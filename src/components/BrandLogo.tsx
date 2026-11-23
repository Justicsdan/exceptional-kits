export default function BrandLogo({
  variant = "light",
  showWordmark = true,
}: {
  variant?: "light" | "dark";
  showWordmark?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      {/* Custom Precision Crest SVG */}
      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwShieldGrad" x1="12" y1="8" x2="68" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#134E9E" />
              <stop offset="55%" stopColor="#0B1F4C" />
              <stop offset="100%" stopColor="#050E24" />
            </linearGradient>
            <linearGradient id="ekwRimGrad" x1="14" y1="10" x2="66" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="ekwSwooshGrad" x1="6" y1="52" x2="74" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Outer Shield */}
          <path
            d="M40 6L66 16.5V37.5C66 55.2 54.9 68.4 40 74C25.1 68.4 14 55.2 14 37.5V16.5L40 6Z"
            fill="url(#ekwShieldGrad)"
            stroke="url(#ekwRimGrad)"
            strokeWidth="2.5"
          />

          {/* Inner Tailored Stitch Line */}
          <path
            d="M40 11.5L60.5 19.8V37.2C60.5 52.1 51.4 63.3 40 68.2C28.6 63.3 19.5 52.1 19.5 37.2V19.8L40 11.5Z"
            stroke="#93C5FD"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="2.5 2"
          />

          {/* Top Chevron Accent */}
          <path
            d="M31 23.5L40 19.5L49 23.5"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Orbital Dynamic Arc */}
          <path
            d="M9 47.5C15.5 56.5 48.5 56.5 71 31.5"
            stroke="url(#ekwSwooshGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Crisp EKW Monogram */}
          <text
            x="40"
            y="45.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="16.5"
            letterSpacing="1.2"
          >
            EKW
          </text>

          {/* Bottom Rank Star / Diamond */}
          <path
            d="M40 53.5L42.2 56L40 58.5L37.8 56L40 53.5Z"
            fill="#38BDF8"
          />
        </svg>
      </div>

      {/* Editorial Wordmark */}
      {showWordmark && (
        <div className={isDark ? "block" : "hidden sm:block"}>
          <span
            className={`block text-sm sm:text-base lg:text-lg font-extrabold tracking-tight leading-none ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            EXCEPTIONAL KITS AND WEARS
          </span>
          <span
            className={`mt-1.5 block text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] ${
              isDark ? "text-sky-400" : "text-sky-700"
            }`}
          >
            Uniforms &bull; Tactical &bull; Cresting
          </span>
        </div>
      )}
    </div>
  );
}
