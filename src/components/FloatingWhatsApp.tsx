import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const href =
    "https://wa.me/2348032392875?text=" +
    encodeURIComponent(
      "Hello Exceptional Kits And Wears, I would like to inquire about uniforms, kits, or a batch quote."
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#061224] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg border border-white/15 hover:bg-slate-800 transition"
    >
      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
      <span>WhatsApp</span>
    </a>
  );
}
