"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CompoundEntry } from "@/lib/compound-data";
import { getElementDisplay } from "@/lib/element-names";
import { drawPremiumPdfChrome, loadPdfLogoDataUrl } from "@/lib/pdf-template";

type DownloadPdfButtonsProps = {
  compound: CompoundEntry;
};

export function DownloadPdfButtons({ compound }: DownloadPdfButtonsProps) {
  const fileBase = `Molar Mass of ${compound.name} (${compound.formula})`;

  const onDownloadTable = async () => {
    const doc = new jsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    drawPremiumPdfChrome(doc, `Molar Mass Table: ${compound.formula}`, compound.name, logoDataUrl);

    autoTable(doc, {
      startY: 36,
      head: [["Element", "Count", "Atomic Mass", "Contribution"]],
      body: [
        ...compound.breakdown.map((row) => [
          getElementDisplay(row.element),
          row.count.toString(),
          row.atomicMass.toFixed(2),
          `${row.contribution.toFixed(2)} g/mol`,
        ]),
        ["Final molar mass", "-", "-", `${compound.molarMass.toFixed(2)} g/mol`],
      ],
      headStyles: {
        fillColor: [31, 163, 122],
      },
      didParseCell: (hookData) => {
        const row = hookData.row.raw as string[] | undefined;
        if (row?.[0] === "Final molar mass") {
          hookData.cell.styles.fontStyle = "bold";
          if (hookData.column.index === 3) {
            hookData.cell.styles.textColor = [15, 118, 110];
          }
        }
      },
      didDrawPage: () => {
        drawPremiumPdfChrome(doc, `Molar Mass Table: ${compound.formula}`, compound.name, logoDataUrl);
      },
      margin: { top: 36, bottom: 16 },
    });

    doc.save(`${fileBase} - Table.pdf`);
  };

  const onDownloadSummary = async () => {
    const doc = new jsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    drawPremiumPdfChrome(doc, `Molar Mass Summary: ${compound.formula}`, compound.name, logoDataUrl);
    doc.setFontSize(12);
    doc.text(`Compound: ${compound.name} (${compound.commonName})`, 14, 40);
    doc.text(`Molar Mass: ${compound.molarMass.toFixed(2)} g/mol`, 14, 48);
    doc.text(`Category: ${compound.category}`, 14, 56);
    doc.text("Description:", 14, 66);
    doc.text(compound.summary, 14, 74, { maxWidth: 180 });
    doc.save(`${fileBase} - Key Sections.pdf`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onDownloadTable} variant="default">
        <Download className="h-4 w-4" />
        Download Table as PDF
      </Button>
      <Button onClick={onDownloadSummary} variant="default">
        <Download className="h-4 w-4" />
        Download Key Sections as PDF
      </Button>
    </div>
  );
}
