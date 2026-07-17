import type { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Scientific Accuracy Policy",
  description: `Atomic mass sources, rounding, and accuracy standards used by ${SITE_NAME}.`,
  alternates: { canonical: "/accuracy" },
};

export default function AccuracyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Scientific accuracy policy</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>
          Atomic masses on {SITE_NAME} come from a consistent internal periodic table aligned with commonly taught
          standard atomic weights. Classroom answer keys may differ slightly when a course requires rounded textbook
          values (for example O = 16.00 exactly).
        </p>
        <p>
          We report molar masses to three decimals in compound profiles so students can see intermediate arithmetic.
          Your teacher may ask for two decimals—round only at the end.
        </p>
        <p>
          Safety and industrial process descriptions are educational summaries, not workplace SOPs. Always follow your
          institution&apos;s procedures. See the <Link href="/disclaimer">disclaimer</Link>.
        </p>
        <p>
          Fact-checking preferences and citation expectations are described in our{" "}
          <Link href="/fact-checking">fact-checking policy</Link>.
        </p>
      </div>
    </main>
  );
}
