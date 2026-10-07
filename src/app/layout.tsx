import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FAF9F6] text-[#0F172A] antialiased selection:bg-[#0F172A] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
