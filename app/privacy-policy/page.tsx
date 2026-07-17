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
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted">
          Molar Mass Lab collects minimal analytics to improve navigation and performance. We do not sell personal data.
          By using this site, you agree to this policy and any updates published on this page.
        </p>
      </main>
  );
}
