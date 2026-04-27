"use client";

import jsPDF from "jspdf";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { calculateMolarMass } from "@/lib/molar-mass";
import { drawPremiumPdfChrome, loadPdfLogoDataUrl } from "@/lib/pdf-template";

type WorksheetLevelPdfDownloadProps = {
  levelTitle: string;
  formulas: string[];
  withAnswers?: boolean;
};

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function drawChemicalFormula(doc: jsPDF, text: string, x: number, y: number) {
  let cursorX = x;
  for (const char of text) {
    const isDigit = /\d/.test(char);
    const fontSize = isDigit ? 9 : 11;
    const yOffset = isDigit ? 1.7 : 0;
    doc.setFontSize(fontSize);
    doc.text(char, cursorX, y + yOffset);
    const width = doc.getTextWidth(char);
    cursorX += width + 0.2;
  }
}

export function WorksheetLevelPdfDownload({ levelTitle, formulas, withAnswers = false }: WorksheetLevelPdfDownloadProps) {
  const onDownload = async () => {
    const doc = new jsPDF();
    const logoDataUrl = await loadPdfLogoDataUrl();
    const subtitle = withAnswers ? "Questions with answers" : "Questions only";
    let y = 40;
    const pageBottom = 274;
    const questionGap = 4;
    const spaceLines = 3;
    const left = 14;
    const right = doc.internal.pageSize.getWidth() - 14;

    const drawHeader = () => {
      drawPremiumPdfChrome(doc, `${levelTitle} Worksheet`, subtitle, logoDataUrl);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(20, 24, 30);
    };

    drawHeader();

    formulas.forEach((formula, index) => {
      const estimatedHeight = 6 + spaceLines * 9 + questionGap;
      if (y + estimatedHeight > pageBottom) {
        doc.addPage();
        drawHeader();
        y = 40;
      }

      doc.setFontSize(11);
      doc.text(`${index + 1}.`, left, y);
      drawChemicalFormula(doc, formula, left + 8, y);
      y += 6;

      if (withAnswers) {
        const result = calculateMolarMass(formula);
        const answerText = result ? `${result.molarMass.toFixed(2)} g/mol` : "Invalid formula";
        doc.setFontSize(10);
        doc.setTextColor(31, 163, 122);
        doc.text(`Answer: ${answerText}`, left, y + 1);
        doc.setTextColor(20, 24, 30);
        doc.setFontSize(11);
        y += 10;
      } else {
        for (let line = 0; line < spaceLines; line += 1) {
          doc.setDrawColor(208, 216, 225);
          doc.line(left, y + 2.5, right, y + 2.5);
          y += 9;
        }
      }

      y += questionGap;
    });

    const suffix = withAnswers ? "with-answers" : "questions-only";
    doc.save(`${toSlug(levelTitle)}-worksheet-${suffix}.pdf`);
  };

  return (
    <Button onClick={onDownload} variant="default">
      <Download className="h-4 w-4" />
      {withAnswers ? "Download PDF (With Answers)" : "Download PDF (Questions Only)"}
    </Button>
  );
}
