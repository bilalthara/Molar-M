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
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cookie Policy</h1>
        <p className="text-sm leading-relaxed text-[#0a0f1a]/85">
          Molar Mass Lab may use essential and analytical cookies to maintain session quality and improve page experience.
          You can manage cookie behavior through your browser settings.
        </p>
      </div>
    </main>
  );
}
