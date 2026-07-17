import type { Metadata } from "next";

import { PeriodicTablePdfButton } from "@/components/downloads/page-pdf-buttons";
import { PeriodicTableGrid } from "@/components/periodic/periodic-table-grid";

export const metadata: Metadata = {
  title: "Periodic Table with Atomic Masses",
  description:
    "Interactive periodic table with atomic masses for molar mass calculations, color-coded by element category.",
  alternates: { canonical: "/periodic-table" },
};

export default function PeriodicTablePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl text-foreground sm:text-5xl">Periodic table</h1>
        <p className="mt-3 text-lg text-muted">
          Atomic masses for molar mass work. Tap an element to see its details. Use these values consistently when
          checking calculator results.
        </p>
        <div className="mt-4">
          <PeriodicTablePdfButton />
        </div>
      </header>
      <div className="mt-8">
        <PeriodicTableGrid />
      </div>
    </main>
  );
}
