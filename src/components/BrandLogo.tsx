export default function BrandLogo({
  variant = "light",
  showWordmark = true,
}: {
  variant?: "light" | "dark";
  showWordmark?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div className="group inline-flex items-center gap-2.5 sm:gap-4 min-w-0 select-none">
      {/* Matching Crest Card Frame for Both Header & Footer */}
      <div
        className={`relative flex h-14 w-[72px] sm:h-[70px] sm:w-[98px] lg:h-[74px] lg:w-[106px] shrink-0 items-centre justify-centre rounded-2xl border p-1.5 transition-all duration-300 ease-out group-hover:-translate-y-0.5 ${
          isDark
            ? "border-sky-300/60 bg-white shadow-md shadow-sky-950/50 ring-1 ring-sky-400/25 group-hover:border-sky-200 group-hover:shadow-lg"
            : "border-sky-200/90 bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md"
        }`}
      >
        <svg
          viewBox="0 0 140 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwRefNavy" x1="48" y1="6" x2="108" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0C2966" />
              <stop offset="100%" stopColor="#051436" />
            </linearGradient>

            <linearGradient id="ekwRefCyan" x1="12" y1="22" x2="114" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Outer Thick Navy Shield (Open Centre) */}
          <path
            d="M82 6L116 19.5V44C116 66.5 101.2 81.5 82 89C62.8 81.5 48 66.5 48 44V19.5L82 6Z"
            stroke="url(#ekwRefNavy)"
            strokeWidth="6.5"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Inner Bright Cyan Shield Trim */}
          <path
            d="M82 13.5L108.5 24V43.5C108.5 61.5 96.8 73.8 82 79.8C67.2 73.8 55.5 61.5 55.5 43.5V24L82 13.5Z"
            stroke="url(#ekwRefCyan)"
            strokeWidth="3.6"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Sweeping Crescent / Arc Wrapping Around Left & Under EKW */}
          <path
            d="M64 31C33 32 13 43.5 13 57.5C13 72.5 39 79.5 78 64.5C51 71.5 24.5 66.5 24.5 53C24.5 43.5 38 35.5 66.5 33.5L64 31Z"
            fill="url(#ekwRefNavy)"
          />
          <path
            d="M22 39.5C11.5 45.5 7.5 52.5 9.5 60.5C13 74.5 39.5 81 81 66C46.5 75.5 20.5 70 17.5 57.5C16 51.5 19.5 45.5 26.5 41.2L22 39.5Z"
            fill="url(#ekwRefCyan)"
          />

          {/* Clean White Padding Behind Slanted EKW */}
          <text
            x="83"
            y="61"
            textAnchor="middle"
            transform="skewX(-12)"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="8"
            strokeLinejoin="round"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="36"
            letterSpacing="-1"
          >
            EKW
          </text>

          {/* Bold Slanted EKW Monogram */}
          <text
            x="83"
            y="61"
            textAnchor="middle"
            transform="skewX(-12)"
            fill="url(#ekwRefNavy)"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="36"
            letterSpacing="-1"
          >
            EKW
          </text>
        </svg>
      </div>

      {/* Editorial Wordmark */}
      {showWordmark && (
        <div className="min-w-0 overflow-visible">
          <span
            className={`block text-xs sm:text-base lg:text-lg font-black tracking-tight leading-tight sm:leading-snug transition-colours duration-300 ${
              isDark
                ? "text-white group-hover:text-sky-200"
                : "text-slate-950 group-hover:text-[#0C2966]"
            }`}
          >
            EXCEPTIONAL KITS AND WEARS
          </span>
          <span
            className={`mt-1 hidden sm:flex flex-wrap items-centre gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] ${
              isDark ? "text-sky-400" : "text-sky-700"
            }`}
          >
            <span>Uniforms</span>
            <span className="h-1 w-1 rounded-full bg-sky-500" aria-hidden="true" />
            <span>Tactical</span>
            <span className="h-1 w-1 rounded-full bg-sky-500" aria-hidden="true" />
            <span>Cresting</span>
          </span>
        </div>
      )}
    </div>
  );
}
