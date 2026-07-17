import type { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `How ${SITE_NAME} creates, reviews, and updates educational chemistry content.`,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Editorial policy</h1>
      <p className="mt-4 text-muted">
        {SITE_NAME} publishes chemistry education that helps students calculate molar mass correctly and understand the
        compounds they study. We prioritize clear explanations, worked examples, and classroom usefulness.
      </p>
      <section className="mt-8 space-y-3 text-muted">
        <h2 className="text-2xl text-foreground">What we publish</h2>
        <p>
          Compound profiles, learning guides, reference tools, and practice materials. Each page should include accurate
          calculations and enough chemistry context for a student to use the result with confidence.
        </p>
        <h2 className="text-2xl text-foreground">What we do not publish</h2>
        <p>
          Pages that only restate a formula and a molar mass without teaching properties, reactions, safety, or how to
          apply the value in real problems.
        </p>
        <h2 className="text-2xl text-foreground">Updates</h2>
        <p>
          When atomic mass standards, safety guidance, or teaching practice improve, we revise pages and keep URLs
          stable. See also our <Link href="/accuracy">scientific accuracy policy</Link> and{" "}
          <Link href="/content-review">content review process</Link>.
        </p>
      </section>
    </main>
  );
}
