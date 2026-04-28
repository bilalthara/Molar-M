export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCompoundList } from "@/components/sections/category-compound-list";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Bases Molar Mass List",
  description: "Browse base compounds with molar mass links and quick access to calculation tools.",
  alternates: { canonical: "/bases-molar-mass-list" },
};

const baseCompounds = compounds.filter((compound) => compound.category === "base").slice(0, 400);

export default function BasesMolarMassListPage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Bases Molar Mass List</h1>
        <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
          This base-compound list is optimized for quick formula-to-page lookup and revision workflows. Open the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
            molar mass calculator
          </Link>{" "}
          for instant totals and use the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
            periodic table
          </Link>{" "}
          for atomic-mass confirmation.
        </p>
        <CategoryCompoundList compounds={baseCompounds} />
      </article>
    </main>
  );
}
