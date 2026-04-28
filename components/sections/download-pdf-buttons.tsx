"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CompoundEntry } from "@/lib/compound-data";
import { getElementDisplay } from "@/lib/element-names";
import { drawFormulaText, drawPremiumPdfChrome, loadPdfLogoDataUrl } from "@/lib/pdf-template";

type DownloadPdfButtonsProps = {
  compound: CompoundEntry;
};

export function DownloadPdfButtons({ compound }: DownloadPdfButtonsProps) {
  const fileBase = `Molar Mass of ${compound.name} (${compound.formula})`;

  const onDownloadAnswer = async () => {
    const [{ default: JsPDF }, { default: autoTable }] = await Promise.all([import("jspdf"), import("jspdf-autotable")]);
    const doc = new JsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    drawPremiumPdfChrome(doc, "Molar Mass Answer:", compound.name, logoDataUrl);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    drawFormulaText(doc, compound.formula, 94, 12, { baseFontSize: 14, subscriptYOffset: 1.6 });

    doc.setTextColor(20, 24, 30);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const compoundPrefix = `Compound: ${compound.name} (`;
    doc.text(compoundPrefix, 14, 40);
    const afterPrefixX = 14 + doc.getTextWidth(compoundPrefix);
    const afterFormulaX = drawFormulaText(doc, compound.formula, afterPrefixX, 40, {
      baseFontSize: 12,
      subscriptYOffset: 1.5,
    });
    doc.text(")", afterFormulaX, 40);
    doc.text(`Molar Mass: ${compound.molarMass.toFixed(2)} g/mol`, 14, 48);
    doc.text(`Category: ${compound.category}`, 14, 56);

    doc.setFont("helvetica", "bold");
    doc.text("Calculation steps", 14, 67);
    doc.setFont("helvetica", "normal");
    doc.text("1) Count each element and atom count from the formula.", 14, 74);
    doc.text("2) Multiply atomic mass by atom count for each element.", 14, 81);
    doc.text("3) Add all contributions to get final g/mol.", 14, 88);
    const pdfPerElementSum = compound.breakdown.map((row) => row.contribution.toFixed(2)).join(" + ");

    autoTable(doc, {
      startY: 97,
      head: [["Element", "Count", "Atomic Mass", "Calculation", "Contribution"]],
      body: [
        ...compound.breakdown.map((row) => [
          getElementDisplay(row.element),
          row.count.toString(),
          row.atomicMass.toFixed(2),
          `${row.count} x ${row.atomicMass.toFixed(2)}`,
          `= ${row.contribution.toFixed(2)} g/mol`,
        ]),
        ["Final molar mass", "-", "-", pdfPerElementSum, `= ${compound.molarMass.toFixed(2)} g/mol`],
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
        drawPremiumPdfChrome(doc, "Molar Mass Answer:", compound.name, logoDataUrl);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255);
        drawFormulaText(doc, compound.formula, 94, 12, { baseFontSize: 14, subscriptYOffset: 1.6 });
        doc.setTextColor(20, 24, 30);
      },
      margin: { top: 36, bottom: 16 },
    });

    doc.save(`${fileBase} - Answer.pdf`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onDownloadAnswer} variant="default">
        <Download className="h-4 w-4" />
        Download Answer as PDF
      </Button>
    </div>
  );
}
