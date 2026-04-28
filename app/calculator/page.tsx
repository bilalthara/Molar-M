export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { HeroCalculator } from "@/components/sections/hero-calculator";

export const metadata: Metadata = {
  title: "Molar Mass Calculator",
  description:
    "Molar mass calculator: type a chemical formula or a compound name (for example O2 or glucose) and get the mass in g/mol with step-by-step element contributions.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "Molar Mass Calculator",
    description:
      "Calculate molar mass from a formula or compound name. Results in g/mol with an element-by-element breakdown.",
    url: "/calculator",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-w-0 max-w-full bg-white text-[#0a0f1a]">
      <HeroCalculator variant="calculator" />
    </main>
  );
}
