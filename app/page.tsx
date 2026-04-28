export const dynamic = "force-static";
export const revalidate = false;

import Link from "next/link";
import { Link2 } from "lucide-react";
import type { Metadata } from "next";

import { FeaturedCompoundsList } from "@/components/sections/featured-compounds-list";
import { FormulaWritingTips } from "@/components/sections/formula-writing-tips";
import { HeroCalculator } from "@/components/sections/hero-calculator";
import { HomeCompoundsTable } from "@/components/sections/home-compounds-table";
import { HomeMolarMassGuide } from "@/components/sections/home-molar-mass-guide";
import { Reveal } from "@/components/sections/reveal";
import { StructuredData } from "@/components/sections/structured-data";
import { FaqAccordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormulaSub } from "@/components/ui/formula-sub";
import { homeFaq } from "@/lib/home-faq";
import { compounds, getCompoundHref, getHighVolumeMolarMassPageLinks } from "@/lib/compound-data";

const exploreMolarMassHub = getHighVolumeMolarMassPageLinks();
const allCompoundsTableRows = [...compounds];
const popularStudentSearches = exploreMolarMassHub.slice(0, 20);

export const metadata: Metadata = {
  title: "Molar Mass Calculator, Formula & Compound List Guide",
  description:
    "Calculate molar mass instantly with formula, calculator, and periodic table. Find molar mass of NaCl, H2O, CO2, NaOH and more compounds.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-w-0 max-w-full bg-white text-[#0a0f1a]">
      <StructuredData isHome />
      <HeroCalculator />

      <HomeMolarMassGuide />

      <section
        className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6"
        id="compounds-table"
      >
        <Reveal>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Common Molar Mass Reference Chart (All Compounds)</CardTitle>
            </CardHeader>
            <CardContent>
              <HomeCompoundsTable compounds={allCompoundsTableRows} />
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section
        className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200/90 px-4 py-6 sm:px-6"
        id="formula-format"
      >
        <Reveal>
          <FormulaWritingTips />
        </Reveal>
      </section>

      <section
        className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200/90 px-4 py-6 sm:px-6"
        id="featured"
      >
        <h2 className="mb-2 text-[1.8rem] font-bold tracking-tight text-[#0a0f1a] sm:mb-3">Featured compounds</h2>
        <div className="mt-4 sm:mt-5">
          <FeaturedCompoundsList />
        </div>
      </section>

      <section className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6">
        <Reveal>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Why Molar Mass Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-base text-[#0a0f1a]">
              <p>Students use molar mass to convert grams to moles in exam questions.</p>
              <p>Lab work uses it to measure exact reactant amounts for accurate results.</p>
              <p>It also helps check reaction balance and reduce calculation mistakes.</p>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6">
        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <CardTitle>How Molar Mass is Used in Real Life</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base text-[#0a0f1a]">
              <p>
                In chemistry labs, students use molar mass to decide exact sample quantities before reactions start. For
                example, preparing solutions for{" "}
                <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getCompoundHref("NaCl")}>
                  Sodium Chloride (<FormulaSub formula="NaCl" />)
                </Link>{" "}
                and{" "}
                <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getCompoundHref("H2SO4")}>
                  Sulfuric Acid (<FormulaSub formula="H2SO4" />)
                </Link>{" "}
                always depends on molar-mass accuracy.
              </p>
              <p>
                In medicine and industry, measured compounds are converted between grams and moles to keep dosage and production
                consistent. That is why molar mass is treated as a core skill, not just an exam topic.
              </p>
              <p>
                The lightest possible chemical that one can have under normal conditions is hydrogen gas, or{" "}
                <FormulaSub formula="H2" />. There is no limit to how heavy a chemical compound can be - it is not uncommon for
                macromolecules (large organic or bioorganic compounds such as DNA) to weigh thousands of grams per mole.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6">
        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <CardTitle>Popular Compounds Students Search</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-x-10 gap-y-2 text-base md:grid-cols-2">
                {popularStudentSearches.map((item) => (
                  <li key={`popular-${item.formula}`}>
                    <Link
                      className="text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                      href={getCompoundHref(item.formula)}
                      prefetch={false}
                    >
                      {item.name} (<FormulaSub formula={item.formula} />)
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6">
        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <CardTitle>Beginner Chemistry Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base text-[#0a0f1a]">
              <p>
                New to molar mass? Read the short definition, work through the step-by-step guide, then try{" "}
                <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getCompoundHref("H2O")}>
                  Water (<FormulaSub formula="H2O" />)
                </Link>
                ,{" "}
                <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getCompoundHref("CO2")}>
                  Carbon dioxide (<FormulaSub formula="CO2" />)
                </Link>
                , or{" "}
                <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getCompoundHref("NaCl")}>
                  Sodium chloride (<FormulaSub formula="NaCl" />)
                </Link>{" "}
                from the chart above.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6">
        <Reveal>
        <Card className="border-slate-200/90 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[17px]">
              <Link2 className="h-5 w-5 shrink-0 text-[#0F766E]" aria-hidden />
              Popular molar mass lookup pages &amp; formulas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreMolarMassHub.map(({ formula, name }) => (
                <li key={formula}>
                  <Link
                    className="text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                    href={getCompoundHref(formula)}
                    prefetch={false}
                  >
                    {name} (<FormulaSub formula={formula} />)
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        </Reveal>
      </section>

      <section
        className="cv-auto mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 pb-9 sm:px-6"
        id="faq"
      >
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a0f1a]">FAQ</h2>
        <FaqAccordion items={homeFaq} />
      </section>
    </main>
  );
}
