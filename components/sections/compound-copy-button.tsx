"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { toSubscriptFormula } from "@/lib/chemistry-format";

type CompoundCopyAnswerButtonProps = {
  name: string;
  formula: string;
  molarMass: number;
};

export function CompoundCopyAnswerButton({ name, formula, molarMass }: CompoundCopyAnswerButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(
      `Molar Mass of ${name} (${toSubscriptFormula(formula)}) is ${molarMass.toFixed(2)} g/mol`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Button className="h-8 border-slate-200/90 px-2.5 text-xs" onClick={onCopy} type="button" variant="outline">
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy Answer"}
    </Button>
  );
}
