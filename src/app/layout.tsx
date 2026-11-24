import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"),
  title: {
    default: "Exceptional Kits and Wears | Security Uniforms & Tactical Kits, Abuja",
    template: "%s | Exceptional Kits and Wears",
  },
  description:
    "Direct workshop production of security uniforms, duty shirts, tactical vests, branded caps and crested school kits. Request a custom quote.",
  openGraph: {
    type: "website",
    siteName: "Exceptional Kits and Wears",
    locale: "en_NG",
    title: "Exceptional Kits and Wears",
    description: "Security uniforms, tactical kits and crested duty wear made direct from our workshop.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-slate-900">
        {children}
              <FloatingWhatsApp />
      </body>
    </html>
  );
}
