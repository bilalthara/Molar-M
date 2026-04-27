import type { Metadata } from "next";
import Link from "next/link";

import { PeriodicTableGrid } from "@/components/sections/periodic-table-grid";
import { getInternalLink } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Periodic Table with Molar Mass",
  description:
    "Use a searchable periodic table with molar masses for all elements, category colors, and quick reference details.",
  alternates: { canonical: "/periodic-table-with-molar-mass" },
};

export default function PeriodicTableWithMolarMassPage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Periodic Table with Molar Mass</h1>
          <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
            Search all elements by name, symbol, or atomic number and check molar mass values quickly for classroom, exam, and
            lab calculations.
          </p>
        </header>

        <PeriodicTableGrid />

        <section className="grid gap-6 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-[#0a0f1a]">What is molar mass</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/85">
              Molar mass is the mass of one mole of a substance, expressed in grams per mole (g/mol). Element molar masses come
              directly from periodic-table atomic masses.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0f1a]">How to use the periodic table</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/85">
              Find each element in your formula, multiply by atom count, and sum all contributions. Use search to locate
              symbols quickly and open element details on click.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0f1a]">Why molar mass matters</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/85">
              It converts grams to moles and moles to grams, making stoichiometry, solution prep, and reactant planning
              accurate and repeatable.
            </p>
          </div>
        </section>

        <p className="text-sm text-[#0a0f1a]/85">
          Continue with the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getInternalLink("calculator")} prefetch={false}>
            Molar Mass Calculator
          </Link>{" "}
          or explore more{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getInternalLink("home")} prefetch={false}>
            molar mass calculations
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
