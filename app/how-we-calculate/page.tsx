import type { Metadata } from "next";
import Link from "next/link";

import { Formula } from "@/components/ui/formula";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How We Calculate Molar Mass",
  description: `Reference standards and calculation method used by the ${SITE_NAME} calculator and compound profiles.`,
  alternates: { canonical: "/how-we-calculate" },
};

export default function HowWeCalculatePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">How we calculate</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>
          The same engine powers the live calculator and every compound profile. It parses chemical formulas, expands
          parentheses, multiplies atomic masses by atom counts, and sums the contributions.
        </p>
        <h2 className="text-2xl text-foreground">Reference standards</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Atomic masses from our site periodic table (standard atomic weights for education).</li>
          <li>
            Parentheses multiply the enclosed group: <Formula value="Ca(OH)2" /> → Ca + 2 O + 2 H.
          </li>
          <li>Results display in g/mol with three decimals on profiles for transparent arithmetic.</li>
        </ul>
        <h2 className="text-2xl text-foreground">Worked micro-example</h2>
        <p>
          Water <Formula value="H2O" />: (2 × 1.008) + 15.999 = 18.015 g/mol. Oxygen contributes most of the mass even
          though hydrogen atoms are more numerous—mass percent is not the same as atom percent.
        </p>
        <p>
          Learn the pedagogy in <Link href="/learn/how-to-calculate-molar-mass">How to calculate molar mass</Link> and
          browse the <Link href="/compounds">Top 50 library</Link>.
        </p>
      </div>
    </main>
  );
}
