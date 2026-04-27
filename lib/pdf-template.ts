"use client";

import jsPDF from "jspdf";

const FOOTER_URL = "MolarMassLab.com";

type PdfLogoAsset = {
  dataUrl: string;
  width: number;
  height: number;
};

const BRAND_GREEN: [number, number, number] = [31, 163, 122];
let logoDataUrlPromise: Promise<PdfLogoAsset | null> | null = null;

function formatNow() {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export async function loadPdfLogoDataUrl() {
  if (typeof window === "undefined") {
    return null;
  }
  if (!logoDataUrlPromise) {
    logoDataUrlPromise = (async () => {
      try {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = "/molar-mass-lab-logo-v2.webp";
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;
        ctx.drawImage(image, 0, 0);
        return {
          dataUrl: canvas.toDataURL("image/png"),
          width: image.naturalWidth,
          height: image.naturalHeight,
        };
      } catch {
        return null;
      }
    })();
  }
  return logoDataUrlPromise;
}

export function drawPremiumPdfChrome(
  doc: jsPDF,
  title: string,
  subtitle?: string,
  logoAsset?: PdfLogoAsset | null,
) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const logoPanelWidth = 64;
  doc.setFillColor(...BRAND_GREEN);
  doc.rect(0, 0, pageWidth, 28, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth - logoPanelWidth, 0, logoPanelWidth, 28, 0, 0, "F");
  doc.setDrawColor(225, 232, 238);
  doc.line(pageWidth - logoPanelWidth, 0, pageWidth - logoPanelWidth, 28);

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(title, 14, 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`Generated: ${formatNow()}`, 14, 19);
  if (subtitle) {
    doc.text(subtitle, 14, 24);
  }

  if (logoAsset) {
    try {
      const maxLogoWidth = 42;
      const maxLogoHeight = 15;
      const ratio = logoAsset.width / logoAsset.height || 1;
      const drawWidth = Math.min(maxLogoWidth, maxLogoHeight * ratio);
      const drawHeight = drawWidth / ratio;
      const drawX = pageWidth - logoPanelWidth + (logoPanelWidth - drawWidth) / 2;
      const drawY = 6.5 + (maxLogoHeight - drawHeight) / 2;
      doc.addImage(logoAsset.dataUrl, "PNG", drawX, drawY, drawWidth, drawHeight);
    } catch {
      // Ignore logo rendering errors, keep document generation resilient.
    }
  }

  doc.setFillColor(...BRAND_GREEN);
  doc.rect(0, pageHeight - 12, pageWidth, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text(FOOTER_URL, pageWidth / 2, pageHeight - 4.5, { align: "center" });
  doc.setTextColor(20, 24, 30);
}

export function drawFormulaText(
  doc: jsPDF,
  formula: string,
  x: number,
  y: number,
  options?: {
    baseFontSize?: number;
    subscriptScale?: number;
    subscriptYOffset?: number;
  },
) {
  const baseFontSize = options?.baseFontSize ?? 12;
  const subscriptScale = options?.subscriptScale ?? 0.75;
  const subscriptYOffset = options?.subscriptYOffset ?? 1.8;
  const prevFontSize = doc.getFontSize();
  let cursorX = x;

  for (const ch of formula) {
    const isDigit = /[0-9]/.test(ch);
    const fontSize = isDigit ? baseFontSize * subscriptScale : baseFontSize;
    const yPos = isDigit ? y + subscriptYOffset : y;
    doc.setFontSize(fontSize);
    doc.text(ch, cursorX, yPos);
    cursorX += doc.getTextWidth(ch);
  }

  doc.setFontSize(prevFontSize);
  return cursorX;
}
