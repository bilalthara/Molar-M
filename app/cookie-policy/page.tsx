export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie usage information for Molar Mass Lab.",
  alternates: { canonical: "/cookie-policy" },
  robots: robotsNoIndex,
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-muted">
          Molar Mass Lab may use essential and analytical cookies to maintain session quality and improve page experience.
          You can manage cookie behavior through your browser settings.
        </p>
      </main>
  );
}
