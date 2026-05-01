export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { CategoryCompoundList } from "@/components/sections/category-compound-list";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Acids Molar Mass List",
  description: "Find common and advanced acids with molar mass links for fast study and calculation practice.",
  alternates: { canonical: "/acids-molar-mass-list" },
};

const acidCompounds = compounds.filter((compound) => compound.category === "acid").slice(0, 400);

export default function AcidsMolarMassListPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto w-full max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Acids Molar Mass List</h1>
        <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
          Use this acids hub to open detailed molar mass pages quickly. For custom inputs, open the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
            molar mass calculator
          </Link>{" "}
          and verify elemental masses from the{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
            periodic table with molar mass
          </Link>
          .
        </p>
        <CategoryCompoundList compounds={acidCompounds} />
      </article>
    </main>
  );
}
