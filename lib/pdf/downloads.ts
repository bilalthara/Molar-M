"use client";

import { handbookCatalog } from "@/data/compounds/catalog-slim";
import type { LearningGuide } from "@/data/learning/guides";
import { elementName } from "@/lib/chemistry/element-names";
import { formatMolarMass } from "@/lib/chemistry/format";
import type { CompoundProfile } from "@/lib/chemistry/types";
import { calculateMolarMass } from "@/lib/molar-mass";
import type { FormulaResult } from "@/lib/molar-mass";
import { PDF_LOGO_BASE64 } from "@/lib/pdf/logo-base64";
import { periodicElements } from "@/lib/periodic-table-data";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const BRAND: [number, number, number] = [15, 118, 110];
const INK: [number, number, number] = [20, 30, 40];
const MUTED: [number, number, number] = [90, 100, 110];
const MARGIN = 18;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE = 5.4;
const HEADER_H = 22;
const FOOTER_Y = 287;
const CONTENT_BOTTOM = 278;
const DOMAIN = "MolarMassLab.com";

/** Strip Unicode that breaks Helvetica kerning; keep ASCII formulas like H2O. */
function pdfSafe(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (ch) => "0123456789"["₀₁₂₃₄₅₆₇₈₉".indexOf(ch)] ?? ch)
    .replace(/[−–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/×/g, "x")
    .replace(/→/g, "->")
    .replace(/↔/g, "<->")
    .replace(/·/g, ".")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}

function slugPart(text: string): string {
  return pdfSafe(text)
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** e.g. Molar-Mass-of-Water-H2O-MolarMassLab.com.pdf */
export function compoundPdfFilename(profile: CompoundProfile, sheetLabel?: string): string {
  const name = slugPart(profile.name);
  const formula = slugPart(profile.formula);
  const sheet = sheetLabel ? `-${slugPart(sheetLabel)}` : "";
  return `Molar-Mass-of-${name}-${formula}${sheet}-${DOMAIN}.pdf`;
}

function createDoc() {
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  doc.setFont("helvetica", "normal");
  doc.setCharSpace(0);
  return doc;
}

function generationDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function brandHeader(doc: jsPDF, pageTitle: string, pageWidth = PAGE_WIDTH) {
  doc.setFillColor(...BRAND);
  doc.rect(0, 0, pageWidth, HEADER_H, "F");

  try {
    doc.addImage(PDF_LOGO_BASE64, "PNG", MARGIN, 4.5, 42, 8);
  } catch {
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(SITE_NAME, MARGIN, 10);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(DOMAIN, MARGIN, 18);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(pdfSafe(pageTitle), pageWidth - MARGIN, 13, { align: "right" });
  doc.setTextColor(...INK);
}

function brandFooter(doc: jsPDF, pageTitle: string, pageWidth = PAGE_WIDTH, footerY = FOOTER_Y) {
  const pageCount = doc.getNumberOfPages();
  const date = generationDate();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setDrawColor(210, 215, 220);
    doc.line(MARGIN, footerY - 5, pageWidth - MARGIN, footerY - 5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text(`\u00A9 ${DOMAIN}`, MARGIN, footerY);
    doc.textWithLink(SITE_URL, MARGIN, footerY + 4, { url: SITE_URL });
    doc.text(pdfSafe(pageTitle), pageWidth / 2, footerY, { align: "center" });
    doc.text(`Generated ${date}`, pageWidth / 2, footerY + 4, { align: "center" });
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - MARGIN, footerY + 2, { align: "right" });
  }
}

function ensureSpace(doc: jsPDF, y: number, needed: number, title: string): number {
  if (y + needed <= CONTENT_BOTTOM) return y;
  doc.addPage();
  brandHeader(doc, title);
  return HEADER_H + 8;
}

function writeParagraph(doc: jsPDF, text: string, y: number, title: string, size = 10): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  doc.setTextColor(...INK);
  doc.setCharSpace(0);
  const lines = doc.splitTextToSize(pdfSafe(text), CONTENT_WIDTH) as string[];
  for (const line of lines) {
    y = ensureSpace(doc, y, LINE, title);
    doc.text(line, MARGIN, y);
    y += LINE;
  }
  return y + 3;
}

function writeHeading(doc: jsPDF, text: string, y: number, title: string, size = 13): number {
  y = ensureSpace(doc, y, 12, title);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.setTextColor(...BRAND);
  doc.setCharSpace(0);
  doc.text(pdfSafe(text), MARGIN, y);
  doc.setTextColor(...INK);
  return y + 7.5;
}

const tableStyles = {
  font: "helvetica" as const,
  fontSize: 9,
  cellPadding: { top: 2.8, right: 3, bottom: 2.8, left: 3 },
  textColor: INK,
  lineColor: [220, 225, 230] as [number, number, number],
  lineWidth: 0.2,
  overflow: "linebreak" as const,
  minCellHeight: 7,
};

const tableHeadStyles = {
  fillColor: BRAND,
  textColor: 255 as const,
  fontStyle: "bold" as const,
  cellPadding: { top: 3, right: 3, bottom: 3, left: 3 },
};

function save(doc: jsPDF, pageTitle: string, filename: string) {
  brandFooter(doc, pageTitle);
  doc.save(filename);
}

export function downloadCompoundSummary(profile: CompoundProfile, calculation: FormulaResult) {
  const doc = createDoc();
  const sheet = `Molar Mass of ${profile.name}`;
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, `Molar Mass of ${profile.name} (${profile.formula})`, y, sheet, 15);
  y = writeParagraph(
    doc,
    `The molar mass of ${profile.name} (${profile.formula}) is ${formatMolarMass(calculation.molarMass, 3)}. Use this value for stoichiometry, solution preparation, and laboratory calculations.`,
    y,
    sheet,
    10.5,
  );
  if (profile.casNumber) y = writeParagraph(doc, `CAS Registry Number: ${profile.casNumber}`, y, sheet, 9.5);
  y += 1;
  const overview = profile.overview.replace(/\n+/g, " ").slice(0, 900);
  y = writeParagraph(doc, overview, y, sheet, 10);
  y += 2;
  y = ensureSpace(doc, y, 40, sheet);
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Element", "Atoms", "Atomic mass", "Contribution"]],
    body: calculation.breakdown.map((row) => [
      `${elementName(row.element)} (${row.element})`,
      String(row.count),
      row.atomicMass.toFixed(3),
      `${row.contribution.toFixed(3)} g/mol`,
    ]),
    styles: tableStyles,
    headStyles: tableHeadStyles,
    rowPageBreak: "avoid",
  });
  save(doc, sheet, compoundPdfFilename(profile));
}

export function downloadCompoundRevision(profile: CompoundProfile, calculation: FormulaResult) {
  const doc = createDoc();
  const sheet = `${profile.name} Revision Notes`;
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, `Molar Mass of ${profile.name} (${profile.formula}) - Revision Notes`, y, sheet, 13);
  y = writeParagraph(doc, `Molar mass = ${formatMolarMass(calculation.molarMass, 3)}`, y, sheet, 10.5);
  const blocks = [
    ["Exam notes", profile.examNotes],
    ["Student tips", profile.studentTips],
    ["Common mistakes", profile.commonMistakes],
    ["Misconceptions", profile.misconceptions],
  ] as const;
  for (const [label, items] of blocks) {
    y = writeHeading(doc, label, y, sheet, 12);
    for (const item of items) {
      y = writeParagraph(doc, `- ${item}`, y, sheet, 9.5);
    }
  }
  save(doc, sheet, compoundPdfFilename(profile, "Revision-Notes"));
}

export function downloadCompoundPractice(profile: CompoundProfile) {
  const doc = createDoc();
  const sheet = `${profile.name} Practice`;
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, `Practice: Molar Mass of ${profile.name} (${profile.formula})`, y, sheet, 13);
  y = writeParagraph(
    doc,
    `Work each problem for ${profile.name} (${profile.formula}), then check the answer key on the next page.`,
    y,
    sheet,
    10,
  );
  profile.practiceQuestions.forEach((q, index) => {
    y = writeParagraph(doc, `${index + 1}. ${q.question}`, y, sheet, 10);
    y += 10;
  });
  doc.addPage();
  brandHeader(doc, "Answer Key");
  y = HEADER_H + 8;
  y = writeHeading(doc, "Answer key", y, "Answer Key", 13);
  profile.practiceQuestions.forEach((q, index) => {
    y = writeParagraph(doc, `${index + 1}. ${q.answer}`, y, "Answer Key", 9.5);
  });
  save(doc, sheet, compoundPdfFilename(profile, "Practice"));
}

export function downloadCompoundLabReference(profile: CompoundProfile, calculation: FormulaResult) {
  const doc = createDoc();
  const sheet = `${profile.name} Lab Reference`;
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, `Laboratory Reference: ${profile.name} (${profile.formula})`, y, sheet, 13);
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Property", "Value"]],
    body: [
      ["Compound", profile.name],
      ["Formula", profile.formula],
      ["Molar mass", formatMolarMass(calculation.molarMass, 3)],
      ["CAS", profile.casNumber ?? "-"],
      ["State (STP)", pdfSafe(profile.physical.stateAtSTP ?? "-")],
      ["Density", pdfSafe(profile.physical.density ?? "-")],
      ["Solubility", pdfSafe((profile.physical.solubility ?? "-").slice(0, 160))],
      ["Storage", pdfSafe(profile.storage.slice(0, 200))],
      ["Safety", pdfSafe(profile.safety.summary.slice(0, 200))],
    ],
    styles: tableStyles,
    columnStyles: { 0: { cellWidth: 42, fontStyle: "bold" }, 1: { cellWidth: CONTENT_WIDTH - 42 } },
    headStyles: tableHeadStyles,
    rowPageBreak: "avoid",
  });
  save(doc, sheet, compoundPdfFilename(profile, "Lab-Reference"));
}

export function downloadGuidePdf(guide: LearningGuide) {
  const doc = createDoc();
  const sheet = guide.title;
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, guide.title, y, sheet, 15);
  y = writeParagraph(doc, guide.summary, y, sheet, 10);
  y += 2;
  for (const section of guide.sections) {
    y = writeHeading(doc, section.heading, y, sheet, 12);
    for (const para of section.body.split(/\n\n+/)) {
      y = writeParagraph(doc, para.trim(), y, sheet, 9.5);
    }
  }
  const filename = `${slugPart(guide.title)}-${DOMAIN}.pdf`;
  save(doc, sheet, filename);
}

export function downloadTop50Handbook() {
  const doc = createDoc();
  const sheet = "Top 50 Compound Handbook";
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, "Top 50 Compound Handbook", y, sheet, 15);
  y = writeParagraph(
    doc,
    "Molar masses for the curated compound library on Molar Mass Lab. Open each profile on the website for full explanations, reactions, and practice.",
    y,
    sheet,
    10,
  );
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Compound", "Formula", "M (g/mol)", "Category"]],
    body: handbookCatalog.map((row) => {
      const mass = calculateMolarMass(row.formula)?.molarMass;
      return [row.name, row.formula, mass ? mass.toFixed(2) : "-", row.category];
    }),
    styles: { ...tableStyles, fontSize: 8 },
    headStyles: tableHeadStyles,
    rowPageBreak: "avoid",
  });
  save(doc, sheet, `Top-50-Compound-Handbook-${DOMAIN}.pdf`);
}

export function downloadPeriodicTablePdf() {
  const landscape = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4", compress: true });
  landscape.setFont("helvetica", "normal");
  landscape.setCharSpace(0);
  const title = "Periodic Table - Atomic Masses";
  brandHeader(landscape, title, 297);
  landscape.setFontSize(13);
  landscape.setFont("helvetica", "bold");
  landscape.setTextColor(...BRAND);
  landscape.text(title, MARGIN, HEADER_H + 8);
  autoTable(landscape, {
    startY: HEADER_H + 12,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Z", "Symbol", "Name", "Atomic mass (g/mol)", "Category"]],
    body: periodicElements.map((el) => [
      String(el.atomicNumber),
      el.symbol,
      el.name,
      String(el.molarMass),
      el.category,
    ]),
    styles: { ...tableStyles, fontSize: 7, cellPadding: 1.8 },
    headStyles: tableHeadStyles,
    rowPageBreak: "avoid",
  });
  brandFooter(landscape, title, 297, 200);
  landscape.save(`Periodic-Table-Atomic-Masses-${DOMAIN}.pdf`);
}

export function downloadAtomicMassTablePdf() {
  const doc = createDoc();
  const sheet = "Atomic Mass Reference Table";
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, "Atomic Mass Reference Table", y, sheet, 14);
  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Element", "Symbol", "Atomic mass (g/mol)"]],
    body: periodicElements.map((el) => [el.name, el.symbol, String(el.molarMass)]),
    styles: { ...tableStyles, fontSize: 8 },
    headStyles: tableHeadStyles,
    rowPageBreak: "avoid",
  });
  save(doc, sheet, `Atomic-Mass-Reference-Table-${DOMAIN}.pdf`);
}

export function downloadPracticeHubPdf() {
  const doc = createDoc();
  const sheet = "Molar Mass Practice Pack";
  brandHeader(doc, sheet);
  let y = HEADER_H + 8;
  y = writeHeading(doc, "Molar Mass Practice Pack", y, sheet, 14);
  y = writeParagraph(
    doc,
    "Work these problems, then open the matching compound page on MolarMassLab.com for full answers and explanations.",
    y,
    sheet,
    10,
  );
  handbookCatalog.slice(0, 20).forEach((row, index) => {
    const prompt =
      row.practiceQuestion ?? `Calculate the molar mass of ${row.name} (${row.formula}).`;
    y = writeParagraph(doc, `${index + 1}. ${prompt}`, y, sheet, 10);
    y += 5;
  });
  save(doc, sheet, `Molar-Mass-Practice-Pack-${DOMAIN}.pdf`);
}
