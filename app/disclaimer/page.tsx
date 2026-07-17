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
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Disclaimer</h1>
        <p className="mt-4 text-muted">
          Content on Molar Mass Lab is educational and informational. Always cross-check procedures, concentration targets,
          and safety protocols with your institution or laboratory supervisor.
        </p>
      </main>
  );
}
