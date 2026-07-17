import Link from "next/link";
import { Suspense } from "react";

import { MolarMassCalculator } from "@/components/calculator/molar-mass-calculator";
import { HandbookDownloadButton } from "@/components/downloads/page-pdf-buttons";
import { InstantSearch } from "@/components/search/instant-search";
import { FaqAccordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Formula } from "@/components/ui/formula";
import { articles } from "@/data/learning/articles";
import { learningGuides } from "@/data/learning/guides";
import { categoryLabel, compoundHref, formatMolarMass } from "@/lib/chemistry/format";
import { getFeaturedProfiles, getPopularProfiles } from "@/lib/chemistry/registry";
import { calculateMolarMass } from "@/lib/molar-mass";
import { CATEGORY_LINKS, SITE_NAME } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const homeFaq = [
  {
    question: "What is molar mass?",
    answer:
      "Molar mass is the mass of one mole of a substance, expressed in grams per mole (g/mol). For a compound, add the atomic masses of every atom in the chemical formula.",
  },
  {
    question: "How do I calculate molar mass from a formula?",
    answer:
      "Count the atoms of each element, look up each atomic mass on the periodic table, multiply atoms by atomic mass, then add the contributions. Expand parentheses before you multiply.",
  },
  {
    question: "Is molar mass the same as molecular weight?",
    answer:
      "They are numerically equal for a given formula. Molar mass uses units of g/mol; molecular weight is a relative quantity without those units. Chemistry courses usually expect answers in g/mol.",
  },
  {
    question: "Which compounds have full study pages?",
    answer:
      "Fifty commonly studied compounds have full pages with properties, reactions, safety notes, and practice. Any other valid formula can still be calculated instantly on the calculator page.",
  },
];

export function HomePage() {
  const featured = getFeaturedProfiles();
  const popular = getPopularProfiles();

  return (
    <main>
      <section className="hero-atmosphere border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="animate-rise text-sm font-semibold tracking-[0.14em] text-brand uppercase">
              {SITE_NAME}
            </p>
            <h1 className="animate-rise delay-1 mt-4 max-w-xl text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Molar mass calculator and chemistry learning platform
            </h1>
            <p className="animate-rise delay-2 mt-5 max-w-lg text-lg text-muted">
              Calculate molar mass from any chemical formula, then explore clear explanations, properties, reactions,
              and practice for the compounds you study most.
            </p>
            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <Link href="/calculator" className={cn(buttonVariants({ size: "lg" }), "no-underline")}>
                Open calculator
              </Link>
              <Link
                href="/learn/what-is-molar-mass"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "no-underline")}
              >
                Learn molar mass
              </Link>
            </div>
            <div className="animate-rise delay-3 mt-4">
              <HandbookDownloadButton />
            </div>
          </div>
          <Card className="animate-rise delay-2">
            <CardHeader>
              <CardTitle>Search or calculate</CardTitle>
              <CardDescription>
                Enter a compound name or formula such as water, <Formula value="NaCl" />, or{" "}
                <Formula value="H2SO4" />.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <InstantSearch placeholder="Search compounds or formulas…" />
              <Suspense fallback={<div className="h-40 animate-pulse rounded-xl bg-surface-2" aria-hidden />}>
                <MolarMassCalculator compact />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6" id="featured">
        <SectionHeading
          title="Featured compound library"
          description="Explore detailed molar mass calculations, physical and chemical properties, reactions, applications, and educational explanations for commonly studied chemical compounds."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((profile) => {
            const mass = calculateMolarMass(profile.formula)?.molarMass;
            return (
              <Link
                key={profile.slug}
                href={compoundHref(profile.slug)}
                className="surface-card group rounded-2xl p-5 no-underline transition-transform hover:-translate-y-0.5"
              >
                <Badge tone="brand">{categoryLabel(profile.category)}</Badge>
                <h3 className="mt-3 text-xl text-foreground group-hover:text-brand">{profile.name}</h3>
                <p className="mt-1 text-muted">
                  <Formula value={profile.formula} />
                  {mass ? ` · ${formatMolarMass(mass)}` : null}
                </p>
                <p className="mt-3 line-clamp-3 text-sm text-muted">{profile.overview}</p>
              </Link>
            );
          })}
        </div>
        <Link href="/compounds" className="mt-6 inline-flex text-sm font-semibold">
          Browse all 50 compound pages →
        </Link>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            title="What is molar mass?"
            description="Understand what molar mass is, how it is calculated, why it matters, and how chemists use it in stoichiometry, laboratory work, and scientific research."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Clear definition",
                body: "Molar mass is the mass of one mole of a substance in grams per mole. It equals the sum of the atomic masses of every atom in the formula.",
              },
              {
                title: "Why chemists rely on it",
                body: "Solution preparation, titration, limiting-reactant problems, and industrial batching all depend on converting accurately between grams and moles.",
              },
              {
                title: "How to calculate it",
                body: "Count atoms, look up atomic masses, multiply, add the contributions, and report the total with units of g/mol.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted">{item.body}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-background p-5 sm:p-6">
            <h3 className="text-xl text-foreground">Worked example: water</h3>
            <p className="mt-3 text-muted">
              <Formula value="H2O" /> contains two hydrogen atoms and one oxygen atom. Using atomic masses, (2 × 1.008) +
              15.999 = <strong className="text-foreground">18.015 g/mol</strong>. Oxygen contributes most of the mass
              even though hydrogen atoms are more numerous.
            </p>
            <Link href="/learn/how-to-calculate-molar-mass" className="mt-4 inline-flex text-sm font-semibold">
              Read the full calculation guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          title="Popular chemical compounds"
          description="Browse compounds frequently studied in chemistry courses, laboratories, research, and industrial applications."
        />
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-surface-2 text-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Compound
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Formula
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Molar mass
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {popular.map((profile) => {
                const mass = calculateMolarMass(profile.formula)?.molarMass;
                return (
                  <tr key={profile.slug} className="hover:bg-surface-2/70">
                    <td className="px-4 py-3">
                      <Link href={compoundHref(profile.slug)} className="font-semibold no-underline">
                        {profile.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <Formula value={profile.formula} />
                    </td>
                    <td className="px-4 py-3 font-mono">{mass ? formatMolarMass(mass) : "—"}</td>
                    <td className="px-4 py-3 text-muted">{categoryLabel(profile.category)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            title="Periodic table of atomic masses"
            description="Use standard atomic masses as you calculate molar mass, check homework, and prepare laboratory samples."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {["H", "C", "N", "O", "Na", "Mg", "S", "Cl", "K", "Ca", "Fe", "Cu"].map((symbol) => (
              <span
                key={symbol}
                className="inline-flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-border bg-background font-mono text-sm font-semibold"
              >
                {symbol}
              </span>
            ))}
          </div>
          <Link href="/periodic-table" className="mt-6 inline-flex text-sm font-semibold">
            Open the interactive periodic table →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          title="Common calculation mistakes"
          description="Avoid the errors that most often reduce accuracy on exams and in the laboratory."
        />
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Forgetting that parentheses multiply every atom inside the group.",
            "Rounding atomic masses too early and drifting from the accepted answer.",
            "Reporting a number without the unit g/mol.",
            "Confusing an element’s mass percent with the compound’s total molar mass.",
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-border bg-surface px-5 py-4 text-muted">
              {item}
            </li>
          ))}
        </ul>
        <Link href="/learn/common-molar-mass-mistakes" className="mt-6 inline-flex text-sm font-semibold">
          Study the full mistakes guide →
        </Link>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Chemistry learning center"
              description="Guides on the mole concept, stoichiometry, percent composition, solution calculations, and more."
            />
            <ul className="mt-6 space-y-3">
              {learningGuides.slice(0, 8).map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/learn/${guide.slug}`}
                    className="block rounded-2xl border border-border bg-background px-4 py-4 no-underline hover:border-brand"
                  >
                    <p className="font-semibold text-foreground">{guide.title}</p>
                    <p className="mt-1 text-sm text-muted">{guide.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/learn" className="mt-4 inline-flex text-sm font-semibold">
              View all guides →
            </Link>
          </div>
          <div>
            <SectionHeading
              title="Educational articles"
              description="Longer reading on laboratory practice, industrial chemistry, and composition analysis."
            />
            <ul className="mt-6 space-y-3">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="block rounded-2xl border border-border bg-background px-4 py-4 no-underline hover:border-brand"
                  >
                    <Badge>{article.topic}</Badge>
                    <p className="mt-2 font-semibold text-foreground">{article.title}</p>
                    <p className="mt-1 text-sm text-muted">{article.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          title="Browse by chemical category"
          description="Find acids, bases, salts, oxides, organic compounds, gases, and hydrocarbons with full educational profiles."
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-border bg-surface px-4 py-5 text-center font-semibold text-foreground no-underline hover:border-brand hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            title="Frequently asked questions"
            description="Short answers about molar mass, formulas, units, and how to use this library."
          />
          <div className="mt-8">
            <FaqAccordion items={homeFaq} />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 text-muted">{description}</p>
    </div>
  );
}
