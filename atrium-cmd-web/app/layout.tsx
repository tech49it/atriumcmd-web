import type { Metadata } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://atrium-cmd.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atrium CMD — The AI Command Center for Modern Law Firms",
    template: "%s · Atrium CMD",
  },
  description:
    "Atrium CMD is an intelligence layer that reads across the tools your firm already uses and hands each attorney one evidence-backed brief every morning. AI assists. Attorneys decide.",
  keywords: [
    "legal AI",
    "law firm software",
    "AI command center",
    "morning brief",
    "legal operations",
    "workflow automation for law firms",
  ],
  authors: [{ name: "Atrium CMD" }],
  openGraph: {
    title: "Atrium CMD — The AI Command Center for Modern Law Firms",
    description:
      "One intelligent workspace. Every morning. Every matter. An intelligence layer on top of the tools your firm already uses.",
    url: siteUrl,
    siteName: "Atrium CMD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atrium CMD",
    description: "The AI Command Center for Modern Law Firms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
