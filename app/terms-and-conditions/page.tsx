export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using Molar Mass Lab.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: robotsNoIndex,
};

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-muted">
          This website is provided for educational use. You agree to use Molar Mass Lab responsibly and verify outputs
          before high-stakes academic or laboratory decisions.
        </p>
      </main>
  );
}
