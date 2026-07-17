import type { Metadata } from "next";
import Link from "next/link";

import { AtomicMassTablePdfButton } from "@/components/downloads/page-pdf-buttons";
import { Formula } from "@/components/ui/formula";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatMolarMass } from "@/lib/chemistry/format";
import { getAllProfiles } from "@/lib/chemistry/registry";
import { calculateMolarMass } from "@/lib/molar-mass";
import { periodicElements } from "@/lib/periodic-table-data";

export const metadata: Metadata = {
  title: "Atomic Mass & Molar Mass Reference Tables",
  description:
    "Quick-reference atomic masses and compound molar masses for lab work, homework checks, and exam revision.",
  alternates: { canonical: "/reference" },
};

export default function ReferencePage() {
  const compounds = getAllProfiles()
    .map((profile) => ({
      profile,
      mass: calculateMolarMass(profile.formula)?.molarMass,
    }))
    .sort((a, b) => a.profile.name.localeCompare(b.profile.name));

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14 md:max-w-6xl">
      <h1 className="text-4xl text-foreground sm:text-5xl">Reference tables</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Atomic masses and curated compound molar masses. For interactive exploration, open the{" "}
        <Link href="/periodic-table">periodic table</Link> or <Link href="/calculator">calculator</Link>.
      </p>
      <div className="mt-4">
        <AtomicMassTablePdfButton />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl text-foreground">Common atomic masses</h2>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead scope="col">Element</TableHead>
                <TableHead scope="col">Symbol</TableHead>
                <TableHead scope="col">Atomic mass (g/mol)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {periodicElements.slice(0, 36).map((element) => (
                <TableRow key={element.symbol}>
                  <TableCell>{element.name}</TableCell>
                  <TableCell className="font-mono font-semibold">{element.symbol}</TableCell>
                  <TableCell className="font-mono">{element.molarMass}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-foreground">Compound molar masses</h2>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead scope="col">Compound</TableHead>
                <TableHead scope="col">Formula</TableHead>
                <TableHead scope="col">Molar mass</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {compounds.map(({ profile, mass }) => (
                <TableRow key={profile.slug}>
                  <TableCell>
                    <Link href={`/${profile.slug}`} className="font-semibold no-underline">
                      {profile.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Formula value={profile.formula} />
                  </TableCell>
                  <TableCell className="font-mono">{mass ? formatMolarMass(mass) : "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
