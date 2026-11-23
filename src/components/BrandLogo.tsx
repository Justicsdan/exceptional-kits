export default function BrandLogo({
  variant = "light",
  showWordmark = true,
}: {
  variant?: "light" | "dark";
  showWordmark?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div className="group inline-flex items-center gap-3.5 sm:gap-4 select-none">
      {/* Crest Card with Sweeping Crescent, Shield & Bold Slanted EKW */}
      <div
        className={`relative flex h-15 w-22 sm:h-[68px] sm:w-[96px] lg:h-[74px] lg:w-[104px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5 ${
          isDark
            ? "border-sky-400/35 bg-[#0A1B38]/95 shadow-lg shadow-sky-950/50 group-hover:border-sky-300/75"
            : "border-sky-200/90 bg-gradient-to-br from-white via-sky-50/45 to-blue-50/35 shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md"
        }`}
      >
        <svg
          viewBox="0 0 120 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[92%] w-[94%] overflow-visible transition-transform duration-300 group-hover:scale-[1.03]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwNavyGrad" x1="36" y1="6" x2="94" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#123E8A" />
              <stop offset="55%" stopColor="#081C47" />
              <stop offset="100%" stopColor="#040E24" />
            </linearGradient>

            <linearGradient id="ekwBrightBlue" x1="12" y1="14" x2="102" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="ekwCrescentGrad" x1="10" y1="42" x2="88" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="35%" stopColor="#38BDF8" />
              <stop offset="72%" stopColor="#0B2354" />
              <stop offset="100%" stopColor="#134E9E" />
            </linearGradient>

            <linearGradient id="ekwTextGrad" x1="34" y1="26" x2="98" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#0A2254"} />
              <stop offset="60%" stopColor={isDark ? "#E0F2FE" : "#07193E"} />
              <stop offset="100%" stopColor={isDark ? "#7DD3FC" : "#134E9E"} />
            </linearGradient>
          </defs>

          {/* Outer Shield Frame */}
          <path
            d="M66 5L98 17.5V39C98 58.5 84.5 72.5 66 79C47.5 72.5 34 58.5 34 39V17.5L66 5Z"
            stroke="url(#ekwNavyGrad)"
            strokeWidth="4.5"
            strokeLinejoin="round"
            fill={isDark ? "rgba(8, 28, 71, 0.55)" : "rgba(255, 255, 255, 0.72)"}
          />

          {/* Inner Sky/Cobalt Shield Accent */}
          <path
            d="M66 11.5L91.5 21.5V38.5C91.5 54.2 80.7 65.5 66 71C51.3 65.5 40.5 54.2 40.5 38.5V21.5L66 11.5Z"
            stroke="url(#ekwBrightBlue)"
            strokeWidth="2.4"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Sweeping Crescent / Arc Beside & Under EKW */}
          <path
            d="M49 26.5C27.5 27.5 14 38.5 14 50.5C14 63.5 33.5 70 67.5 56.5C45 62.5 23.5 58 23.5 46.5C23.5 38.5 34 31.5 51.5 29.5L49 26.5Z"
            fill="url(#ekwCrescentGrad)"
          />

          {/* Crisp White/Light Cutout Halo Behind EKW for Legibility */}
          <text
            x="66"
            y="54.5"
            textAnchor="middle"
            transform="skewX(-10)"
            fill={isDark ? "#0A1B38" : "#FFFFFF"}
            stroke={isDark ? "#0A1B38" : "#FFFFFF"}
            strokeWidth="6.5"
            strokeLinejoin="round"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="31"
            letterSpacing="-0.5"
          >
            EKW
          </text>

          {/* Bold Slanted EKW Monogram */}
          <text
            x="66"
            y="54.5"
            textAnchor="middle"
            transform="skewX(-10)"
            fill="url(#ekwTextGrad)"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="31"
            letterSpacing="-0.5"
          >
            EKW
          </text>

          {/* Forward Accent Tip on the Crescent */}
          <path
            d="M65 57.5L78 52.2L67.5 54.2Z"
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
