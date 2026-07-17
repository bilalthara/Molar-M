import { formatFormula } from "@/lib/chemistry/format";

/** Clamp text for meta tags without cutting mid-word when possible. */
export function clampMeta(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}

/** Unique compound title ≤60 chars (absolute — do not append site template). */
export function compoundMetaTitle(name: string, formula: string): string {
  const displayFormula = formatFormula(formula);
  const candidates = [
    `Molar Mass of ${name} (${displayFormula}) | Calculator`,
    `Molar Mass of ${name} (${displayFormula})`,
    `Molar Mass of ${displayFormula} | ${name}`,
    `Molar Mass of ${displayFormula}`,
  ];
  for (const candidate of candidates) {
    if (candidate.length <= 60) return candidate;
  }
  return clampMeta(`Molar Mass of ${displayFormula}`, 60);
}

/** Unique compound description ≤155 chars — natural phrasing. */
export function compoundMetaDescription(name: string, formula: string, molarMass: number): string {
  const displayFormula = formatFormula(formula);
  return clampMeta(
    `Find the molar mass of ${name} (${displayFormula}): ${molarMass.toFixed(3)} g/mol, with a step-by-step breakdown, properties, reactions, and study notes.`,
    155,
  );
}
