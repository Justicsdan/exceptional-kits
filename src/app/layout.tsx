import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exceptional Kits And Wears | Uniforms, Tactical Vests & Security Kits",
  description:
    "Durable security uniforms, duty trousers, branded caps, tactical vests, pads, and kits backed by saved company size charts and single-piece replacements.",
  icons: {
    icon: [
      { url: "/images/logo.png?v=2", type: "image/png" },
    ],
    shortcut: "/images/logo.png?v=2",
    apple: "/images/logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
