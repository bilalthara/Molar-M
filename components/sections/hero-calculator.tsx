import { Badge } from "@/components/ui/badge";
import { HeroCalculatorClient } from "@/components/sections/hero-calculator-client";
import { WhatIsMolarMassCard } from "@/components/sections/what-is-molar-mass-card";

type HeroCalculatorProps = {
  /** `calculator` = dedicated /calculator page (H1 and copy focus on the tool only). */
  variant?: "home" | "calculator";
};

export function HeroCalculator({ variant = "home" }: HeroCalculatorProps) {
  return (
    <section className="mx-auto w-full max-w-6xl border-b border-slate-200/90 px-4 pb-8 pt-[7.5rem] sm:px-6 md:pt-24">
      <div className="space-y-4">
        <Badge>Accurate molar mass data for homework, exams &amp; labs</Badge>
        {variant === "calculator" ? (
          <>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0f1a] sm:text-[3.15rem] sm:leading-[1.05]">
              Molar Mass Calculator
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#0a0f1a]">
              Enter a chemical formula or a compound name and get the molar mass in g/mol, with a clear element-by-element
              breakdown.
            </p>
          </>
        ) : (
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0f1a] sm:text-[3.15rem] sm:leading-[1.05]">
            Molar Mass Calculator, Formula &amp; Compound List
          </h1>
        )}

        {variant === "home" ? (
          <div className="mt-5">
            <WhatIsMolarMassCard />
          </div>
        ) : null}
        <HeroCalculatorClient />
      </div>
    </section>
  );
}
