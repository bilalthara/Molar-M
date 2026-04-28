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
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="text-sm leading-relaxed text-[#0a0f1a]/85">
          This website is provided for educational use. You agree to use Molar Mass Lab responsibly and verify outputs
          before high-stakes academic or laboratory decisions.
        </p>
      </div>
    </main>
  );
}
