import { Reveal } from "@/components/sections/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function WhatIsMolarMassCard() {
  return (
    <Reveal>
      <Card className="border-slate-200/90 bg-white" id="molar-mass-definition">
        <CardHeader>
          <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">What is Molar Mass?</h2>
        </CardHeader>
        <CardContent className="space-y-3 text-base leading-relaxed text-[#0a0f1a]">
          <p>Molar mass is the mass of one mole of a substance. It is expressed in grams per mole (g/mol).</p>
          <p>
            It acts as a conversion factor between grams and moles, allowing you to convert between the amount of a substance
            and its mass.
          </p>
        </CardContent>
      </Card>
    </Reveal>
  );
}
