import type { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Content Review Process",
  description: `How ${SITE_NAME} reviews compound profiles and learning guides before publication.`,
  alternates: { canonical: "/content-review" },
};

export default function ContentReviewPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Content review process</h1>
      <ol className="mt-6 list-decimal space-y-4 pl-5 text-muted">
        <li>
          <strong className="text-foreground">Draft for clarity.</strong> Every profile must include
          compound-specific chemistry that helps a student learn how and why the substance behaves.
        </li>
        <li>
          <strong className="text-foreground">Verify the formula math.</strong> Molar mass is recomputed from the same
          atomic mass table used by the live calculator (
          <Link href="/how-we-calculate">how we calculate</Link>).
        </li>
        <li>
          <strong className="text-foreground">Check reactions and safety.</strong> Equations should be balanced and
          hazards stated clearly for student and lab readers.
        </li>
        <li>
          <strong className="text-foreground">Beginner pass.</strong> Calculation steps must be readable by a first-year
          chemistry student.
        </li>
        <li>
          <strong className="text-foreground">Link with chemical sense.</strong> Related compounds and guides must share
          real chemical relationships.
        </li>
      </ol>
      <p className="mt-8 text-muted">
        Corrections: <a href="mailto:hello@molarmasslab.com">hello@molarmasslab.com</a> with URL, expected value, and
        source.
      </p>
    </main>
  );
}
