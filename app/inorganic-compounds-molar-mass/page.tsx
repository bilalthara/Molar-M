export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCompoundList } from "@/components/sections/category-compound-list";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Inorganic Compounds Molar Mass",
  description: "Browse inorganic compounds with molar mass values and links to detailed compound breakdown pages.",
  alternates: { canonical: "/inorganic-compounds-molar-mass" },
};

const inorganicCompounds = compounds.filter((compound) => compound.category !== "organic").slice(0, 500);

export default function InorganicCompoundsMolarMassPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Inorganic Compounds Molar Mass</h1>
        <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
          This inorganic molar mass hub includes acids, bases, salts, and gas compounds with direct page links. Cross-check with
          the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
            molar mass calculator
          </Link>{" "}
          and reference elemental values in the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
            periodic table
          </Link>
          .
        </p>
        <CategoryCompoundList compounds={inorganicCompounds} />
      </article>
    </main>
  );
}
