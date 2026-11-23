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
      {/* Crest Badge Card with Bold Monogram, Arrow & Graceful Accents */}
      <div
        className={`relative flex h-16 w-20 sm:h-[70px] sm:w-[88px] lg:h-[74px] lg:w-[92px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5 ${
          isDark
            ? "border-sky-400/35 bg-[#0A1B38]/95 shadow-lg shadow-sky-950/50 group-hover:border-sky-300/70"
            : "border-sky-200/90 bg-gradient-to-br from-white via-sky-50/50 to-indigo-50/40 shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md"
        }`}
      >
        <svg
          viewBox="0 0 96 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[92%] w-[92%] overflow-visible transition-transform duration-300 group-hover:scale-[1.03]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ekwCardShield" x1="22" y1="6" x2="74" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="50%" stopColor="#0C2352" />
              <stop offset="100%" stopColor="#061224" />
            </linearGradient>

            <linearGradient id="ekwTrimGoldSky" x1="18" y1="8" x2="78" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#7DD3FC" />
              <stop offset="75%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <linearGradient id="ekwArrowFlow" x1="8" y1="54" x2="88" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Graceful outer curve accent */}
          <path
            d="M14 58C28 65 62 63 82 34"
            stroke="url(#ekwTrimGoldSky)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Main Shield Body */}
          <path
            d="M48 6L72 15.5V36.5C72 52.8 61.6 64.8 48 70C34.4 64.8 24 52.8 24 36.5V15.5L48 6Z"
            fill="url(#ekwCardShield)"
            stroke="url(#ekwTrimGoldSky)"
            strokeWidth="2.4"
          />

          {/* Delicate inner contour line */}
          <path
            d="M48 10.5L67.5 18.2V36C67.5 50.1 58.6 60.5 48 65C37.4 60.5 28.5 50.1 28.5 36V18.2L48 10.5Z"
            stroke="#BAE6FD"
            strokeOpacity="0.32"
            strokeWidth="1"
          />

          {/* Forward Arrow / Chevron */}
          <path
            d="M10 49C26 52 54 44 79 23"
            stroke="url(#ekwArrowFlow)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M72 22.5L80.5 21.8L78.2 30"
            stroke="#FDE68A"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Big, Bold EKW Lettering */}
          <text
            x="48"
            y="45.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="0.8"
          >
            EKW
          </text>

          {/* Delicate Star / Sparkle Accent */}
          <path
            d="M48 51.5L49.1 54L51.8 54.3L49.8 56.1L50.3 58.8L48 57.4L45.7 58.8L46.2 56.1L44.2 54.3L46.9 54L48 51.5Z"
            fill="#FDE68A"
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
