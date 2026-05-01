export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Educational-use disclaimer for Molar Mass Lab.",
  alternates: { canonical: "/disclaimer" },
  robots: robotsNoIndex,
};

export default function DisclaimerPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Disclaimer</h1>
        <p className="text-sm leading-relaxed text-[#0a0f1a]/85">
          Content on Molar Mass Lab is educational and informational. Always cross-check procedures, concentration targets,
          and safety protocols with your institution or laboratory supervisor.
        </p>
      </div>
    </main>
  );
}
