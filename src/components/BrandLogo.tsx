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
      {/* Artistic & Premium Crest Emblem */}
      <div
        className={`relative flex h-16 w-24 sm:h-[74px] sm:w-[106px] lg:h-[80px] lg:w-[116px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ease-out group-hover:-translate-y-0.5 ${
          isDark
            ? "border-sky-400/40 bg-gradient-to-br from-[#0B2044] via-[#07152E] to-[#040B1A] shadow-lg shadow-sky-950/60 group-hover:border-sky-300/80 group-hover:shadow-sky-500/15"
            : "border-sky-200/90 bg-gradient-to-br from-white via-[#F6FAFF] to-[#EAF2FF] shadow-sm ring-1 ring-slate-900/5 group-hover:border-sky-400 group-hover:shadow-md"
        }`}
      >
        {/* Subtle Corner Registration / Tailor Ticks */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-1.5 left-1.5 h-2 w-2 border-t border-l rounded-tl-xs ${
            isDark ? "border-sky-400/45" : "border-sky-600/35"
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r rounded-br-xs ${
            isDark ? "border-sky-400/45" : "border-sky-600/35"
          }`}
        />

        <svg
          viewBox="0 0 132 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[95%] w-[95%] overflow-visible transition-transform duration-300 ease-out group-hover:scale-[1.035]"
          aria-hidden="true"
        >
          <defs>
            {/* Deep Architectural Navy Shield */}
            <linearGradient id="ekwArtShieldFill" x1="44" y1="6" x2="104" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B4FA8" />
              <stop offset="48%" stopColor="#0A2254" />
              <stop offset="100%" stopColor="#040D22" />
            </linearGradient>

            {/* Luminous Cobalt-to-Sky Trim */}
            <linearGradient id="ekwArtRim" x1="38" y1="6" x2="108" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="45%" stopColor="#1D4ED8" />
              <stop offset="85%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>

            {/* Graceful Orbital Ring Gradient */}
            <linearGradient id="ekwArtOrbit" x1="10" y1="20" x2="96" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="32%" stopColor="#38BDF8" />
              <stop offset="62%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#134E9E" />
            </linearGradient>

            {/* High-Contrast Slanted EKW Monogram Gradient */}
            <linearGradient id="ekwArtType" x1="40" y1="26" x2="106" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#0A245C"} />
              <stop offset="55%" stopColor={isDark ? "#E0F2FE" : "#071A42"} />
              <stop offset="100%" stopColor={isDark ? "#7DD3FC" : "#1554B0"} />
            </linearGradient>

            {/* Diagonal Light Facet */}
            <linearGradient id="ekwArtFacet" x1="42" y1="8" x2="86" y2="62" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Shield Silhouette */}
          <path
            d="M72 5L106 18V40.5C106 61 91.8 75.5 72 82.5C52.2 75.5 38 61 38 40.5V18L72 5Z"
            fill={isDark ? "#07152E" : "#F8FBFF"}
            stroke="url(#ekwArtRim)"
            strokeWidth="4.4"
            strokeLinejoin="round"
          />

          {/* Inner Sculpted Shield Band */}
          <path
            d="M72 11.5L99 22V39.8C99 56.5 87.6 68.2 72 74C56.4 68.2 45 56.5 45 39.8V22L72 11.5Z"
            fill="url(#ekwArtShieldFill)"
            fillOpacity={isDark ? "0.85" : "0.08"}
            stroke="url(#ekwArtOrbit)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Delicate Tailored Stitch Accent Along Inner Shield */}
          <path
            d="M72 15.5L95 24.5V39.5C95 53.6 85.3 63.6 72 68.5C58.7 63.6 49 53.6 49 39.5V24.5L72 15.5Z"
            stroke="#38BDF8"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="2.5 2.5"
            fill="none"
          />

          {/* Subtle Diagonal Sheen Facet */}
          <path
            d="M40 19L72 6.8V46L40 58V19Z"
            fill="url(#ekwArtFacet)"
          />

          {/* Secondary Hairline Halo Ring */}
          <ellipse
            cx="45"
            cy="46.5"
            rx="33"
            ry="22.5"
            transform="rotate(-15 45 46.5)"
            stroke="#38BDF8"
            strokeOpacity="0.28"
            strokeWidth="1.1"
            fill="none"
          />

          {/* Primary Sweeping Circle / Crescent Arc */}
          <ellipse
            cx="45"
            cy="46.5"
            rx="30"
            ry="20"
            transform="rotate(-15 45 46.5)"
            stroke="url(#ekwArtOrbit)"
            strokeWidth="5.6"
            strokeDasharray="126 36"
            strokeLinecap="round"
            fill="none"
          />

          {/* Crisp Cutout Aura Behind EKW so Letterforms Pop Artistically */}
          <text
            x="72"
            y="56.5"
            textAnchor="middle"
            transform="skewX(-11)"
            fill={isDark ? "#07152E" : "#FFFFFF"}
            stroke={isDark ? "#07152E" : "#FFFFFF"}
            strokeWidth="7.5"
            strokeLinejoin="round"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="32"
            letterSpacing="-0.5"
          >
            EKW
          </text>

          {/* Bold Slanted EKW Monogram */}
          <text
            x="72"
            y="56.5"
            textAnchor="middle"
            transform="skewX(-11)"
            fill="url(#ekwArtType)"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="32"
            letterSpacing="-0.5"
          >
            EKW
          </text>

          {/* Fine Spark / Crest Accent at Top Apex */}
          <path
            d="M72 18.5L73.2 21L75.7 22.2L73.2 23.4L72 25.9L70.8 23.4L68.3 22.2L70.8 21L72 18.5Z"
            fill="#7DD3FC"
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
                : "text-slate-950 group-hover:text-[#0A2254]"
            }`}
          >
            EXCEPTIONAL KITS AND WEARS
          </span>
          <span
            className={`mt-1.5 flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] ${
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
