export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for Molar Mass Lab.",
  alternates: { canonical: "/privacy-policy" },
  robots: robotsNoIndex,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="text-sm leading-relaxed text-[#0a0f1a]/85">
          Molar Mass Lab collects minimal analytics to improve navigation and performance. We do not sell personal data.
          By using this site, you agree to this policy and any updates published on this page.
        </p>
      </div>
    </main>
  );
}
