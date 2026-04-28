export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCompoundList } from "@/components/sections/category-compound-list";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Salts Molar Mass List",
  description: "Browse salts and ionic compounds with direct links to molar mass pages and breakdown tables.",
  alternates: { canonical: "/salts-molar-mass-list" },
};

const saltCompounds = compounds.filter((compound) => compound.category === "salt").slice(0, 500);

export default function SaltsMolarMassListPage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Salts Molar Mass List</h1>
        <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
          This salts hub organizes ionic compounds with direct links to their molar mass pages. Use the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
            calculate molar mass
          </Link>{" "}
          flow for custom formulas and the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
            periodic table with molar mass
          </Link>{" "}
          for element-level reference.
        </p>
        <CategoryCompoundList compounds={saltCompounds} />
      </article>
    </main>
  );
}
