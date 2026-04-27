"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useMemo, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { Button } from "@/components/ui/button";
import { FormulaSub } from "@/components/ui/formula-sub";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CompoundEntry } from "@/lib/compound-data";
import { getCompoundHref, highVolumeMolarMassFormulas } from "@/lib/compound-data";
import { drawPremiumPdfChrome, loadPdfLogoDataUrl } from "@/lib/pdf-template";

type HomeCompoundsTableProps = {
  compounds: CompoundEntry[];
  fullPage?: boolean;
};

const filterOptions = [
  { value: "most-popular", label: "Most popular" },
  { value: "alphabet", label: "Alphabet (A-Z)" },
  { value: "molar-amount", label: "Molar amount (low to high)" },
  { value: "molar-amount-desc", label: "Molar amount (high to low)" },
] as const;

export function HomeCompoundsTable({ compounds, fullPage = false }: HomeCompoundsTableProps) {
  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState<(typeof filterOptions)[number]["value"]>("alphabet");

  const popularityOrder = useMemo(() => {
    const map = new Map<string, number>();
    highVolumeMolarMassFormulas.forEach((formula, index) => {
      map.set(formula.toLowerCase(), index);
    });
    return map;
  }, []);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = compounds.filter((compound) => {
      if (!q) return true;
      return compound.name.toLowerCase().includes(q) || compound.formula.toLowerCase().includes(q);
    });

    const sorted = [...filtered];
    if (filterBy === "alphabet") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    } else if (filterBy === "molar-amount") {
      sorted.sort((a, b) => a.molarMass - b.molarMass || a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    } else if (filterBy === "molar-amount-desc") {
      sorted.sort((a, b) => b.molarMass - a.molarMass || a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    } else {
      sorted.sort((a, b) => {
        const aRank = popularityOrder.get(a.formula.toLowerCase());
        const bRank = popularityOrder.get(b.formula.toLowerCase());
        if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
        if (aRank !== undefined) return -1;
        if (bRank !== undefined) return 1;
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
      });
    }
    return sorted;
  }, [compounds, filterBy, popularityOrder, query]);

  const onDownloadPdf = async () => {
    const doc = new jsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    drawPremiumPdfChrome(doc, "Popular Compounds Molar Mass Table", `${rows.length} filtered records`, logoDataUrl);
    autoTable(doc, {
      startY: 36,
      head: [["#", "Compound", "Formula", "Molar Mass (g/mol)"]],
      body: rows.map((row, index) => [String(index + 1), row.name, row.formula, row.molarMass.toFixed(2)]),
      headStyles: {
        fillColor: [31, 163, 122],
      },
      margin: { top: 36, bottom: 16 },
      didDrawPage: () => {
        drawPremiumPdfChrome(doc, "Popular Compounds Molar Mass Table", `${rows.length} filtered records`, logoDataUrl);
      },
    });
    doc.save("popular-compounds-molar-mass-table.pdf");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          aria-label="Search compounds"
          className="w-full sm:max-w-md"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by compound name or formula"
          value={query}
        />
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-[#0a0f1a]" htmlFor="home-table-filter">
            Filter by
          </label>
          <select
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-[#0a0f1a] outline-none transition-colors focus:border-[#0F766E]"
            id="home-table-filter"
            onChange={(event) => setFilterBy(event.target.value as (typeof filterOptions)[number]["value"])}
            value={filterBy}
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <div className={fullPage ? "overflow-auto" : "max-h-[28rem] overflow-auto"}>
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-white">
              <TableRow>
                <TableHead>S.No.</TableHead>
                <TableHead>Compound</TableHead>
                <TableHead>Formula</TableHead>
                <TableHead>Molar Mass</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((compound, index) => (
                <TableRow key={compound.formula}>
                  <TableCell className="text-xs text-[#0a0f1a]/70">{index + 1}</TableCell>
                  <TableCell>
                    <Link
                      className="font-medium text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                      href={getCompoundHref(compound.formula)}
                      prefetch={false}
                    >
                      {compound.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <FormulaSub formula={compound.formula} />
                  </TableCell>
                  <TableCell>{compound.molarMass.toFixed(2)} g/mol</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-[#0a0f1a]/80">{rows.length} compounds shown</p>
        <Button onClick={onDownloadPdf} type="button">
          <Download className="h-4 w-4" />
          Download Table as PDF
        </Button>
      </div>
    </div>
  );
}
