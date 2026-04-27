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
    <Button onClick={onCopy} size="default" type="button" variant="outline">
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : "Copy Answer"}
    </Button>
  );
}
