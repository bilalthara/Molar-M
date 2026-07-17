"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  downloadCompoundLabReference,
  downloadCompoundPractice,
  downloadCompoundRevision,
  downloadCompoundSummary,
} from "@/lib/pdf/downloads";
import type { CompoundProfile } from "@/lib/chemistry/types";
import type { FormulaResult } from "@/lib/molar-mass";

type CompoundPdfDownloadsProps = {
  profile: CompoundProfile;
  calculation: FormulaResult;
};

export function CompoundPdfDownloads({ profile, calculation }: CompoundPdfDownloadsProps) {
  return (
    <div className="no-print flex flex-wrap gap-2">
      <Button type="button" variant="outline" size="sm" onClick={() => downloadCompoundSummary(profile, calculation)}>
        <Download className="h-4 w-4" aria-hidden />
        Download summary PDF
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={() => downloadCompoundRevision(profile, calculation)}>
        <Download className="h-4 w-4" aria-hidden />
        Download revision notes
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={() => downloadCompoundPractice(profile)}>
        <Download className="h-4 w-4" aria-hidden />
        Download practice worksheet
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => downloadCompoundLabReference(profile, calculation)}
      >
        <Download className="h-4 w-4" aria-hidden />
        Download lab reference
      </Button>
    </div>
  );
}
