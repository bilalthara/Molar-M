import type { Metadata } from "next";
import Link from "next/link";

import { SiteLogo } from "@/components/layout/site-logo";
import { robotsNoIndex } from "@/lib/robots-noindex";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About ${SITE_NAME}`,
  description: `Mission, trust standards, and educational approach of ${SITE_NAME}.`,
  alternates: { canonical: "/about-us" },
  robots: robotsNoIndex,
};

export default function AboutUsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <SiteLogo />
      <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">About {SITE_NAME}</h1>
      <div className="mt-6 space-y-4 text-muted">
        <h2 className="text-2xl text-foreground">Our mission</h2>
        <p>
          Help students, teachers, and laboratory learners convert chemical formulas into clear understanding. We
          combine an accurate molar mass calculator with compound profiles and guides that remain useful after the
          number is found.
        </p>
        <h2 className="text-2xl text-foreground">How we approach content</h2>
        <p>
          Compound pages include clear calculation steps, properties, reactions, safety notes, and practice questions.
          The goal is a page a student can trust for both the number and the chemistry behind it.
        </p>
        <h2 className="text-2xl text-foreground">Trust and standards</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link href="/editorial-policy">Editorial policy</Link>
          </li>
          <li>
            <Link href="/content-review">Content review process</Link>
          </li>
          <li>
            <Link href="/accuracy">Scientific accuracy policy</Link>
          </li>
          <li>
            <Link href="/fact-checking">Fact-checking policy</Link>
          </li>
          <li>
            <Link href="/how-we-calculate">How we calculate</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
