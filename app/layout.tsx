import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Source_Serif_4 } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

import "./globals.css";

const dmSans = DM_Sans({
  display: "swap",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  display: "swap",
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  display: "swap",
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo-light-v2.png", width: 944, height: 179, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
    description: SITE_DESCRIPTION,
    images: ["/logo-light-v2.png"],
  },
  icons: {
    icon: [{ url: "/Favicon-v2.webp", type: "image/webp", sizes: "any" }],
    shortcut: ["/Favicon-v2.webp"],
    apple: [{ url: "/Favicon-v2.webp", type: "image/webp", sizes: "any" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSerif.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full max-w-[100vw] flex-col overflow-x-clip bg-background text-foreground">
        <ThemeProvider>
          <SiteHeader />
          <div className="min-w-0 max-w-full flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
