export default function BrandLogo({
  variant = "light",
  showWordmark = true,
}: {
  variant?: "light" | "dark";
  showWordmark?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div className="group inline-flex items-center gap-4 select-none">
      {/* Captivating Multi-Layered Shield Crest */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px] shrink-0 items-center justify-center">
        {/* Soft ambient aura on hover */}
        <div
          className={`pointer-events-none absolute inset-1 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isDark ? "bg-sky-400/25" : "bg-sky-500/20"
          }`}
        />

        <svg
          viewBox="0 0 84 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-full w-full drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.04]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwBodyGrad" x1="14" y1="8" x2="70" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="38%" stopColor="#0E295E" />
              <stop offset="78%" stopColor="#071530" />
              <stop offset="100%" stopColor="#040B1A" />
            </linearGradient>

            <linearGradient id="ekwBevelRim" x1="12" y1="6" x2="72" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>

            <linearGradient id="ekwAccentArc" x1="6" y1="54" x2="78" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="45%" stopColor="#7DD3FC" />
              <stop offset="75%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <linearGradient id="ekwSheenGrad" x1="0" y1="0" x2="84" y2="84" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Shield */}
          <path
            d="M42 6L69 17V39C69 57.6 57.4 71.5 42 77.5C26.6 71.5 15 57.6 15 39V17L42 6Z"
            fill="url(#ekwBodyGrad)"
            stroke="url(#ekwBevelRim)"
            strokeWidth="2.6"
          />

          {/* Top-left metallic highlight facet */}
          <path
            d="M42 8.5L17.5 18.6V38.5C17.5 43.5 18.8 48.3 21 52.5L42 41V8.5Z"
            fill="url(#ekwSheenGrad)"
          />

          {/* Tailored inner stitch border */}
          <path
            d="M42 12L63.5 20.8V38.6C63.5 54.4 53.9 66.2 42 71.4C30.1 66.2 20.5 54.4 20.5 38.6V20.8L42 12Z"
            stroke="#7DD3FC"
            strokeOpacity="0.38"
            strokeWidth="1.1"
            strokeDasharray="3 2.2"
          />

          {/* Twin Rank Chevrons at Crown */}
          <path
            d="M32 22.5L42 18L52 22.5"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 27L42 23.8L49 27"
            stroke="#E0F2FE"
            strokeOpacity="0.85"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Monogram Framing Rules */}
          <line
            x1="25"
            y1="32.5"
            x2="59"
            y2="32.5"
            stroke="#38BDF8"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <line
            x1="25"
            y1="52.5"
            x2="59"
            y2="52.5"
            stroke="#38BDF8"
            strokeOpacity="0.45"
            strokeWidth="1"
          />

          {/* EKW Monogram */}
          <text
            x="42"
            y="47.8"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="17"
            letterSpacing="1.6"
          >
            EKW
          </text>

          {/* Dynamic Orbital Arc */}
          <path
            d="M8 50C16.5 60 51.5 59.5 76 32"
            stroke="url(#ekwAccentArc)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Base Emblem Star */}
          <path
            d="M42 56.5L43.6 59.8L47.2 60.3L44.6 62.8L45.2 66.4L42 64.7L38.8 66.4L39.4 62.8L36.8 60.3L40.4 59.8L42 56.5Z"
            fill="#38BDF8"
          />
        </svg>
      </div>

      {/* Editorial Wordmark */}
      {showWordmark && (
        <div className={isDark ? "block" : "hidden sm:block"}>
          <span
            className={`block text-base sm:text-lg lg:text-xl font-black tracking-tight leading-none transition-colors duration-300 ${
              isDark
                ? "text-white group-hover:text-sky-200"
                : "text-slate-950 group-hover:text-[#0B1F4C]"
            }`}
          >
            EXCEPTIONAL KITS AND WEARS
          </span>
          <span
            className={`mt-1.5 block text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] ${
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
