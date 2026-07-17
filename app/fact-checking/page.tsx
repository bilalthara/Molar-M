import type { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fact-Checking Policy",
  description: `How ${SITE_NAME} checks chemical formulas, CAS identifiers, and educational claims.`,
  alternates: { canonical: "/fact-checking" },
};

export default function FactCheckingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Fact-checking policy</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>
          Formulas and molar masses are validated against our calculator engine. Identifiers such as CAS numbers and
          PubChem CIDs are cross-checked against public chemical databases when included on a profile.
        </p>
        <p>
          Historical anecdotes and industrial process outlines are written for education. Where a detail is simplified
          for students, we prefer clear wording over false precision.
        </p>
        <p>
          If you find an error, email <a href="mailto:hello@molarmasslab.com">hello@molarmasslab.com</a>. Include the
          page URL, the incorrect statement, the corrected statement, and a reliable reference when possible. We
          prioritize math and safety corrections.
        </p>
        <p>
          Related: <Link href="/editorial-policy">editorial policy</Link>,{" "}
          <Link href="/content-review">content review</Link>, <Link href="/accuracy">accuracy</Link>.
        </p>
      </div>
    </main>
  );
}
