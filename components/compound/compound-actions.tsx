"use client";

import { useState } from "react";
import { Check, Copy, Printer, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type CompoundActionsProps = {
  name: string;
  formula: string;
  molarMass: number;
};

export function CompoundActions({ name, formula, molarMass }: CompoundActionsProps) {
  const [copied, setCopied] = useState(false);
  const text = `Molar mass of ${name} (${formula}) = ${molarMass.toFixed(3)} g/mol`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: text, text, url: window.location.href });
        return;
      } catch {
        /* fall through */
      }
    }
    await copy();
  }

  return (
    <div className="flex w-full max-w-full flex-wrap gap-2">
      <Button type="button" variant="outline" size="sm" onClick={copy} aria-label="Copy molar mass result">
        {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        {copied ? "Copied" : "Copy result"}
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={share} aria-label="Share this page">
        <Share2 className="h-4 w-4" aria-hidden />
        Share page
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={() => window.print()} aria-label="Print this page">
        <Printer className="h-4 w-4" aria-hidden />
        Print page
      </Button>
    </div>
  );
}
