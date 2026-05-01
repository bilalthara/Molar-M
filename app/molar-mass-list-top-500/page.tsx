export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { HomeCompoundsTable } from "@/components/sections/home-compounds-table";
import { compounds } from "@/lib/compound-data";

export const metadata: Metadata = {
  title: "Molar Mass List (Top 500 Compounds)",
  description:
    "Browse the top 500 compounds by molar mass with search, sorting, and filtering using the same table logic as the molar mass page.",
  alternates: { canonical: "/molar-mass-list-top-500" },
};

const top500Compounds = compounds.slice(0, 500);

export default function MolarMassListTop500Page() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-10 text-[#0a0f1a] sm:px-6">
      <section className="mx-auto w-full max-w-[1200px] space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Molar Mass List (Top 500 Compounds)</h1>
          <p className="max-w-4xl text-base leading-relaxed text-[#0a0f1a]/85">
            Explore 500 high-value compound entries with live search, sorting, and filters. Open the{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/calculator" prefetch={false}>
              Molar Mass Calculator
            </Link>{" "}
            for instant formula results or use the{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/periodic-table-with-molar-mass" prefetch={false}>
              Periodic Table with Molar Mass
            </Link>{" "}
            to check atomic data.
          </p>
        </header>

        <HomeCompoundsTable compounds={top500Compounds} fullPage />
      </section>
    </main>
  );
}
