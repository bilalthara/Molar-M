"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  downloadAtomicMassTablePdf,
  downloadGuidePdf,
  downloadPeriodicTablePdf,
  downloadPracticeHubPdf,
  downloadTop50Handbook,
} from "@/lib/pdf/downloads";
import type { LearningGuide } from "@/data/learning/guides";

export function HandbookDownloadButton() {
  return (
    <Button type="button" variant="soft" onClick={() => downloadTop50Handbook()}>
      <Download className="h-4 w-4" aria-hidden />
      Download Top 50 Compound Handbook
    </Button>
  );
}

export function GuidePdfButton({ guide }: { guide: LearningGuide }) {
  return (
    <Button type="button" variant="outline" size="sm" className="no-print" onClick={() => downloadGuidePdf(guide)}>
      <Download className="h-4 w-4" aria-hidden />
      Download complete guide PDF
    </Button>
  );
}

export function PeriodicTablePdfButton() {
  return (
    <Button type="button" variant="outline" onClick={() => downloadPeriodicTablePdf()}>
      <Download className="h-4 w-4" aria-hidden />
      Download printable periodic table
    </Button>
  );
}

export function AtomicMassTablePdfButton() {
  return (
    <Button type="button" variant="outline" onClick={() => downloadAtomicMassTablePdf()}>
      <Download className="h-4 w-4" aria-hidden />
      Download atomic mass table
    </Button>
  );
}

export function PracticePackPdfButton() {
  return (
    <Button type="button" variant="outline" onClick={() => downloadPracticeHubPdf()}>
      <Download className="h-4 w-4" aria-hidden />
      Download practice worksheet
    </Button>
  );
}
