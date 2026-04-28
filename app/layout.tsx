import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PrimaryHeader } from "@/components/layout/primary-header";
import { SITE_URL } from "@/lib/site-config";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SecondaryHeader } from "@/components/layout/secondary-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Molar Mass Calculator & Compound Database",
    template: "%s | MolarMass",
  },
  description:
    "Premium molar mass calculator and compound knowledge base with structured chemistry data, step-by-step calculations, and internal linking for fast navigation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Molar Mass Calculator & Compound Database",
    description: "Compute molar mass quickly and explore structured compound pages.",
    url: "/",
    siteName: "MolarMass",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molar Mass Calculator & Compound Database",
    description: "Fast chemistry answers with premium UX and structured pages.",
  },
  icons: {
    icon: [{ url: "/Favicon-v2.webp", type: "image/webp", sizes: "any" }],
    shortcut: ["/Favicon-v2.webp"],
    apple: [{ url: "/Favicon-v2.webp", type: "image/webp", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-base text-[#0a0f1a]">
        <ScrollToTop />
        <PrimaryHeader />
        <SecondaryHeader />
        <div className="min-w-0 flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
