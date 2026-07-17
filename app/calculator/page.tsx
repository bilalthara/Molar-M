import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { MolarMassCalculator } from "@/components/calculator/molar-mass-calculator";
import { HandbookDownloadButton } from "@/components/downloads/page-pdf-buttons";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqAccordion } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Formula } from "@/components/ui/formula";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  softwareApplicationSchema,
} from "@/lib/seo/schema";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Molar Mass Calculator — Free Formula Tool | Molar Mass Lab",
  },
  description:
    "Free molar mass calculator with step-by-step explanations, worked examples, chemistry guides, practice problems, and downloadable study sheets.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "Molar Mass Calculator — Free Formula Tool",
    description:
      "Calculate molar mass from any formula with element breakdowns, worked examples, and study resources.",
    url: "/calculator",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molar Mass Calculator — Free Formula Tool",
    description:
      "Calculate molar mass from any formula with element breakdowns, worked examples, and study resources.",
  },
};

const calculatorFaq = [
  {
    question: "What is a molar mass calculator?",
    answer:
      "A molar mass calculator converts a chemical formula into grams per mole (g/mol) by adding the atomic masses of every atom in the formula. It is the fastest way to check homework and prepare laboratory solutions.",
  },
  {
    question: "How does this molar mass calculator work?",
    answer:
      "Enter a formula such as H2O, NaCl, or Ca(OH)2, or type a common compound name. The calculator expands parentheses, counts atoms, multiplies by standard atomic masses, and reports the total with an element-by-element breakdown.",
  },
  {
    question: "Can I calculate molar mass of H₂O and water the same way?",
    answer:
      "Yes. Water and H₂O refer to the same substance. Searching either name or formula returns 18.015 g/mol and the same atom contributions.",
  },
  {
    question: "Does the calculator handle parentheses and hydrates?",
    answer:
      "Yes. Parentheses multiply every atom inside the group, and formulas such as CuSO4·5H2O can be entered when supported by the parser. Always expand hydrates carefully on paper too.",
  },
  {
    question: "Is molar mass the same as molecular weight?",
    answer:
      "They are numerically equal for a given formula. Chemistry courses usually expect molar mass in g/mol, while molecular weight is often treated as a relative, unitless number.",
  },
];

const howToSteps = [
  {
    name: "Enter the formula or name",
    text: "Type a chemical formula such as H2SO4 or a compound name such as sulfuric acid.",
  },
  {
    name: "Confirm atom counts",
    text: "Check that parentheses and subscripts expand correctly for every element.",
  },
  {
    name: "Read the molar mass",
    text: "Add each element contribution to obtain the total molar mass in g/mol.",
  },
  {
    name: "Use the result",
    text: "Apply the value in stoichiometry, molarity calculations, or laboratory sample prep.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Molar Mass Calculator", path: "/calculator" },
          ]),
          softwareApplicationSchema(),
          howToSchema({
            name: "How to calculate molar mass with the online calculator",
            description:
              "Use the Molar Mass Lab calculator to find grams per mole from any chemical formula.",
            steps: howToSteps,
          }),
          faqSchema(calculatorFaq),
        ]}
      />
      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8">
          <h1 className="text-4xl text-foreground sm:text-5xl">Molar Mass Calculator</h1>
          <p className="mt-3 max-w-3xl text-lg text-muted">
            Calculate molar mass from any chemical formula or compound name. Get an instant result in g/mol, an
            element-by-element breakdown, and links to full study pages for water, NaCl, H₂SO₄, and other common
            compounds.
          </p>
        </header>

        <Card>
          <CardHeader>
            <h2 className="text-xl text-foreground">Live molar mass calculator</h2>
            <CardDescription>
              Supports parentheses, polyatomic groups, and common names such as water, sodium chloride, and ethanol.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div className="h-48 animate-pulse rounded-xl bg-surface-2" />}>
              <MolarMassCalculator />
            </Suspense>
          </CardContent>
        </Card>

        <div className="mt-6">
          <HandbookDownloadButton />
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">What is a molar mass calculator?</h2>
          <p className="text-muted">
            A molar mass calculator is an educational tool that converts a chemical formula into the mass of one mole of
            that substance. Chemists report that value in grams per mole (g/mol). Students use it to check homework,
            prepare solutions, and solve stoichiometry problems without looking up every atomic mass by hand.
          </p>
          <p className="text-muted">
            This calculator is designed for learning: it shows how each element contributes to the total, so you can see
            why the molar mass of H₂O is about 18 g/mol and why NaCl is about 58.4 g/mol.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">How does the calculator work?</h2>
          <ol className="list-decimal space-y-2 pl-5 text-muted">
            <li>Parse the formula and expand parentheses.</li>
            <li>Count atoms of each element.</li>
            <li>Multiply atom counts by standard atomic masses.</li>
            <li>Add the contributions to report total molar mass in g/mol.</li>
          </ol>
          <p className="text-muted">
            The same method works whether you search for “water” or enter <Formula value="H2O" />, and whether you study{" "}
            <Formula value="CO2" />, <Formula value="NH3" />, or <Formula value="CaCO3" />.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">How to calculate molar mass manually</h2>
          <p className="text-muted">
            Use the periodic table, count atoms carefully, and keep units. For a full walkthrough, read{" "}
            <Link href="/learn/how-to-calculate-molar-mass">how to calculate molar mass</Link> and{" "}
            <Link href="/learn/what-is-molar-mass">what is molar mass</Link>.
          </p>
          <h3 className="text-lg text-foreground">Step-by-step method</h3>
          <ol className="list-decimal space-y-2 pl-5 text-muted">
            <li>Write the chemical formula clearly.</li>
            <li>List each element and its atom count.</li>
            <li>Look up each atomic mass.</li>
            <li>Multiply, then add all contributions.</li>
            <li>Report the answer with the unit g/mol.</li>
          </ol>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Worked examples</h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-lg text-foreground">Example 1: Molar mass of water (H₂O)</h3>
              <p className="mt-2 text-muted">
                <Formula value="H2O" /> has 2 H and 1 O. (2 × 1.008) + 15.999 = <strong className="text-foreground">18.015 g/mol</strong>.
                Oxygen contributes most of the mass even though hydrogen atoms are more numerous.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Example 2: Molar mass of sodium chloride (NaCl)</h3>
              <p className="mt-2 text-muted">
                <Formula value="NaCl" /> has 1 Na and 1 Cl. 22.990 + 35.45 = <strong className="text-foreground">58.44 g/mol</strong>.
                This value is used constantly in solution preparation and saline calculations.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Example 3: Molar mass of sulfuric acid (H₂SO₄)</h3>
              <p className="mt-2 text-muted">
                <Formula value="H2SO4" /> has 2 H, 1 S, and 4 O. (2 × 1.008) + 32.06 + (4 × 15.999) ≈{" "}
                <strong className="text-foreground">98.07 g/mol</strong>. Parentheses are not required here, but atom
                counting still matters.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Example 4: Parentheses — Ca(OH)₂</h3>
              <p className="mt-2 text-muted">
                In <Formula value="Ca(OH)2" />, the subscript 2 multiplies both O and H. Atom counts: 1 Ca, 2 O, 2 H.
                Students who forget to expand parentheses undercount the molar mass.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Common student mistakes</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>Forgetting that parentheses multiply every atom inside the group.</li>
            <li>Rounding atomic masses too early on multi-element formulas.</li>
            <li>Reporting a number without the unit g/mol.</li>
            <li>Confusing elemental atomic mass with the molar mass of a diatomic gas such as O₂ or Cl₂.</li>
            <li>Dropping hydrate water from formulas such as CuSO₄·5H₂O.</li>
          </ul>
          <p className="text-muted">
            Study the full list in our{" "}
            <Link href="/learn/common-molar-mass-mistakes">common molar mass mistakes</Link> guide.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Applications in chemistry</h2>
          <h3 className="text-lg text-foreground">Laboratory uses</h3>
          <p className="text-muted">
            Laboratory work depends on converting grams on a balance into moles for titration, buffer preparation, and
            limiting-reactant experiments. Accurate molar mass is the bridge between those units.
          </p>
          <h3 className="text-lg text-foreground">Industrial uses</h3>
          <p className="text-muted">
            Industrial batching, fertilizer grades, and quality-control assays scale the same mole arithmetic from grams
            to kilograms and tonnes. See also{" "}
            <Link href="/learn/stoichiometry-basics">stoichiometry basics</Link> and{" "}
            <Link href="/learn/laboratory-calculations">laboratory calculations</Link>.
          </p>
          <h3 className="text-lg text-foreground">Why molar mass matters</h3>
          <p className="text-muted">
            Without molar mass, balanced equations cannot be connected to weighable amounts of chemicals. It is the
            conversion students use in nearly every quantitative chemistry problem after the mole concept itself.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Practice examples</h2>
          <ol className="list-decimal space-y-2 pl-5 text-muted">
            <li>
              Calculate the molar mass of <Formula value="CH4" /> and of methane by name — confirm both routes match.
            </li>
            <li>
              Find the molar mass of <Formula value="NH3" />, then compute grams in 0.50 mol of ammonia.
            </li>
            <li>
              Expand <Formula value="Al2(SO4)3" /> carefully and total the molar mass.
            </li>
          </ol>
          <p className="text-muted">
            More worksheets are available on the <Link href="/practice">practice hub</Link>.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Related chemistry guides</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>
              <Link href="/learn/what-is-molar-mass">What is molar mass?</Link>
            </li>
            <li>
              <Link href="/learn/how-to-calculate-molar-mass">How to calculate molar mass</Link>
            </li>
            <li>
              <Link href="/learn/mole-concept">The mole concept</Link>
            </li>
            <li>
              <Link href="/learn/percent-composition">Percent composition</Link>
            </li>
            <li>
              <Link href="/learn/molarity-molality-normality">Molarity, molality, and normality</Link>
            </li>
            <li>
              <Link href="/how-we-calculate">How we calculate on this site</Link>
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Related compounds</h2>
          <p className="text-muted">
            Open a full profile when you need properties, reactions, and practice beyond the calculator result:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-muted">
            {[
              ["/molar-mass-of-water", "Water (H₂O)"],
              ["/molar-mass-of-sodium-chloride", "Sodium chloride (NaCl)"],
              ["/molar-mass-of-sodium-hydroxide", "Sodium hydroxide (NaOH)"],
              ["/molar-mass-of-carbon-dioxide", "Carbon dioxide (CO₂)"],
              ["/molar-mass-of-sulfuric-acid", "Sulfuric acid (H₂SO₄)"],
              ["/molar-mass-of-ammonia", "Ammonia (NH₃)"],
              ["/molar-mass-of-calcium-carbonate", "Calcium carbonate (CaCO₃)"],
              ["/molar-mass-of-methane", "Methane (CH₄)"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            Browse the full <Link href="/compounds">compound library</Link>,{" "}
            <Link href="/periodic-table">periodic table</Link>, and{" "}
            <Link href="/reference">reference tables</Link>.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">Frequently asked questions</h2>
          <FaqAccordion items={calculatorFaq} />
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl text-foreground">References</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>IUPAC standard atomic weights for classroom and laboratory molar mass calculations.</li>
            <li>
              Site method notes: <Link href="/how-we-calculate">How we calculate</Link> and{" "}
              <Link href="/accuracy">scientific accuracy policy</Link>.
            </li>
            <li>
              Supporting articles in the <Link href="/articles">chemistry articles</Link> library.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
