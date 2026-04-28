"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { FormulaSub } from "@/components/ui/formula-sub";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CompoundEntry } from "@/lib/compound-data";
import { getCompoundHref, highVolumeMolarMassFormulas } from "@/lib/compound-data";
import { drawFormulaText, drawPremiumPdfChrome, loadPdfLogoDataUrl } from "@/lib/pdf-template";

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
    const [{ default: JsPDF }, { default: autoTable }] = await Promise.all([import("jspdf"), import("jspdf-autotable")]);
    const doc = new JsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    drawPremiumPdfChrome(doc, "Popular Compounds Molar Mass Table", `${rows.length} filtered records`, logoDataUrl);

    const prevLineHeightFactor =
      typeof doc.getLineHeightFactor === "function" ? doc.getLineHeightFactor() : undefined;
    if (typeof doc.setLineHeightFactor === "function") {
      doc.setLineHeightFactor(1.5);
    }

    autoTable(doc, {
      startY: 36,
      head: [["#", "Compound", "Formula", "Molar Mass (g/mol)"]],
      body: rows.map((row, index) => [
        String(index + 1),
        row.name,
        row.formula,
        `${row.molarMass.toFixed(2)} g/mol`,
      ]),
      styles: {
        halign: "left",
        valign: "middle",
        cellPadding: { top: 5.5, right: 4, bottom: 5.5, left: 4 },
      },
      bodyStyles: {
        fontSize: 10,
        minCellHeight: 10,
      },
      headStyles: {
        fillColor: [31, 163, 122],
        textColor: [255, 255, 255],
        halign: "left",
        valign: "middle",
        fontStyle: "bold",
        cellPadding: { top: 5, right: 4, bottom: 5, left: 4 },
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 16 },
        1: { halign: "left" },
        2: { halign: "left", cellWidth: 42 },
        3: { halign: "right" },
      },
      margin: { top: 36, bottom: 16 },
      /** Helvetica cannot render Unicode subscripts; skip default text, then draw with `drawFormulaText`. */
      willDrawCell: (data) => {
        if (data.section === "body" && data.column.index === 2) {
          data.cell.text = [""];
        }
      },
      didDrawCell: (data) => {
        if (data.section !== "body" || data.column.index !== 2) return;
        const entry = rows[data.row.index];
        if (!entry) return;
        const pos = data.cell.getTextPos();
        data.doc.setFont("helvetica", "normal");
        data.doc.setTextColor(20, 24, 30);
        const baseSize = Math.min(data.cell.styles.fontSize ?? 10, 10);
        drawFormulaText(data.doc, entry.formula, pos.x, pos.y, {
          baseFontSize: baseSize,
          subscriptScale: 0.72,
          subscriptYOffset: 1.35,
          charGap: 0.42,
        });
      },
      didDrawPage: () => {
        drawPremiumPdfChrome(doc, "Popular Compounds Molar Mass Table", `${rows.length} filtered records`, logoDataUrl);
      },
    });

    if (prevLineHeightFactor !== undefined && typeof doc.setLineHeightFactor === "function") {
      doc.setLineHeightFactor(prevLineHeightFactor);
    }

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

      <div className="min-w-0 overflow-hidden rounded-lg border border-slate-200">
        <div
          className={
            fullPage
              ? "min-w-0 overflow-x-auto overflow-y-visible"
              : "max-h-[28rem] min-w-0 overflow-x-auto overflow-y-auto overscroll-contain"
          }
        >
          <Table className="w-full min-w-0 table-fixed text-left text-[10px] leading-normal text-[#0F172A] sm:text-xs md:text-sm lg:text-[15px] lg:leading-relaxed xl:text-base [&_sub]:text-[0.7em] lg:[&_sub]:text-[0.68em] [&_td]:font-normal [&_th]:font-semibold [&_th]:normal-case [&_th]:tracking-normal">
            <TableHeader className="sticky top-0 z-10 bg-white shadow-[0_1px_0_0_rgb(226_232_240)]">
              <TableRow>
                <TableHead className="w-9 text-center sm:w-11">#</TableHead>
                <TableHead className="min-w-0">Compound</TableHead>
                <TableHead className="w-[26%] min-w-0 sm:w-[23%]">Formula</TableHead>
                <TableHead className="w-[24%] text-right sm:w-[22%]">Molar mass</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((compound, index) => (
                <TableRow key={compound.formula}>
                  <TableCell className="text-center tabular-nums text-[#0a0f1a]/70">{index + 1}</TableCell>
                  <TableCell className="min-w-0 break-words leading-normal">
                    <Link
                      className="font-normal text-inherit text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                      href={getCompoundHref(compound.formula)}
                      prefetch={false}
                    >
                      {compound.name}
                    </Link>
                  </TableCell>
                  <TableCell className="min-w-0 break-words leading-normal text-[#0F766E]">
                    <FormulaSub formula={compound.formula} />
                  </TableCell>
                  <TableCell className="text-right tabular-nums leading-normal">{compound.molarMass.toFixed(2)} g/mol</TableCell>
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
