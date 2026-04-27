import type { Metadata } from "next";

import { HeroCalculator } from "@/components/sections/hero-calculator";

export const metadata: Metadata = {
  title: "Molar Mass Calculator",
  description: "Compute molar mass from any formula or compound name with step-by-step element breakdown.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <main className="bg-white text-[#0a0f1a]">
      <HeroCalculator />
    </main>
  );
}
