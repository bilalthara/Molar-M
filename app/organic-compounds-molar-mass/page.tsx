import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCompoundList } from "@/components/sections/category-compound-list";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Organic Compounds Molar Mass",
  description: "Explore organic compounds and their molar masses with direct links to compound pages and calculator tools.",
  alternates: { canonical: "/organic-compounds-molar-mass" },
};

const organicCompounds = compounds.filter((compound) => compound.category === "organic").slice(0, 500);

export default function OrganicCompoundsMolarMassPage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Organic Compounds Molar Mass</h1>
        <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
          Browse high-coverage organic compound pages with formula-level molar mass breakdowns. You can use the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
            molar mass calculator
          </Link>{" "}
          for quick checks and the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
            periodic table with molar mass
          </Link>{" "}
          for atomic values.
        </p>
        <CategoryCompoundList compounds={organicCompounds} />
      </article>
    </main>
  );
}
