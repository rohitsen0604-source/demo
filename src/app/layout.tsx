import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "MAHTO.ORG — Lifelong Operating System for Founders",
  description:
    "Evidence-driven founder identity, startup evaluation, campus innovation network, and investor readiness platform. Build your founder profile from Year 1.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-[#D97706] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}

