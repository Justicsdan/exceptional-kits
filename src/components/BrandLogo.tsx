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
      {/* Shield Crest + Circle-Like Crescent Ring + Bold Slanted EKW */}
      <div
        className={`relative flex h-16 w-22 sm:h-[70px] sm:w-[98px] lg:h-[76px] lg:w-[106px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5 ${
          isDark
            ? "border-sky-400/35 bg-[#0A1B38]/95 shadow-lg shadow-sky-950/50 group-hover:border-sky-300/75"
            : "border-sky-200/90 bg-gradient-to-br from-white via-sky-50/45 to-blue-50/35 shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md"
        }`}
      >
        <svg
          viewBox="0 0 124 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[94%] w-[94%] overflow-visible transition-transform duration-300 group-hover:scale-[1.03]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwShieldOuter" x1="42" y1="6" x2="96" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#144496" />
              <stop offset="55%" stopColor="#081C47" />
              <stop offset="100%" stopColor="#040E24" />
            </linearGradient>

            <linearGradient id="ekwShieldInner" x1="46" y1="12" x2="90" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="ekwCircleRing" x1="12" y1="22" x2="88" y2="66" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="80%" stopColor="#0B2354" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="ekwMonogramFill" x1="38" y1="28" x2="100" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#092154"} />
              <stop offset="65%" stopColor={isDark ? "#E0F2FE" : "#07193E"} />
              <stop offset="100%" stopColor={isDark ? "#7DD3FC" : "#134E9E"} />
            </linearGradient>
          </defs>

          {/* Outer Shield */}
          <path
            d="M68 5L100 17.5V39C100 58.5 86.5 72.5 68 79C49.5 72.5 36 58.5 36 39V17.5L68 5Z"
            fill={isDark ? "#081C47" : "#F8FAFC"}
            stroke="url(#ekwShieldOuter)"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Inner Shield Trim */}
          <path
            d="M68 11.5L93.5 21.5V38.5C93.5 54.2 82.7 65.5 68 71C53.3 65.5 42.5 54.2 42.5 38.5V21.5L68 11.5Z"
            stroke="url(#ekwShieldInner)"
            strokeWidth="2.4"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Circle-Like Crescent Loop Beside & Under EKW */}
          <ellipse
            cx="43"
            cy="45"
            rx="28"
            ry="19"
            transform="rotate(-14 43 45)"
            stroke="url(#ekwCircleRing)"
            strokeWidth="5.5"
            strokeDasharray="118 34"
            strokeLinecap="round"
            fill="none"
          />

          {/* Clean Backdrop Cutout Behind EKW */}
          <text
            x="68"
            y="54.5"
            textAnchor="middle"
            transform="skewX(-10)"
            fill={isDark ? "#0A1B38" : "#FFFFFF"}
            stroke={isDark ? "#0A1B38" : "#FFFFFF"}
            strokeWidth="7"
            strokeLinejoin="round"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="30"
            letterSpacing="-0.4"
          >
            EKW
          </text>

          {/* Bold Slanted EKW Text */}
          <text
            x="68"
            y="54.5"
            textAnchor="middle"
            transform="skewX(-10)"
            fill="url(#ekwMonogramFill)"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="30"
            letterSpacing="-0.4"
          >
            EKW
          </text>
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
