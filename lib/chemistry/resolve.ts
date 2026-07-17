import { calculateMolarMass, type FormulaResult } from "@/lib/molar-mass";
import { getAllProfiles, getProfileByFormula, getProfileBySlug } from "@/lib/chemistry/registry";
import type { CompoundProfile } from "@/lib/chemistry/types";

export type ResolvedCompound = {
  profile: CompoundProfile;
  calculation: FormulaResult;
};

export function resolveCompoundBySlug(slug: string): ResolvedCompound | null {
  const profile = getProfileBySlug(slug);
  if (!profile) return null;
  const calculation = calculateMolarMass(profile.formula);
  if (!calculation) return null;
  return { profile, calculation };
}

export function resolveCompoundByFormula(formula: string): ResolvedCompound | null {
  const profile = getProfileByFormula(formula);
  if (!profile) return null;
  const calculation = calculateMolarMass(profile.formula);
  if (!calculation) return null;
  return { profile, calculation };
}

/** Map common typos and names to formulas for the live calculator. */
const formulaAliasMap: Record<string, string> = {
  water: "H2O",
  "dihydrogen monoxide": "H2O",
  "h20": "H2O",
  "carbon dioxide": "CO2",
  "c02": "CO2",
  "table salt": "NaCl",
  "sodium chloride": "NaCl",
  "naci": "NaCl",
  ammonia: "NH3",
  methane: "CH4",
  glucose: "C6H12O6",
  "sulfuric acid": "H2SO4",
  "hydrochloric acid": "HCl",
  "hci": "HCl",
  "nitric acid": "HNO3",
  "phosphoric acid": "H3PO4",
  "acetic acid": "C2H4O2",
  "ethanoic acid": "C2H4O2",
  ch3cooh: "C2H4O2",
  "calcium carbonate": "CaCO3",
  "sodium hydroxide": "NaOH",
  "na0h": "NaOH",
  ethanol: "C2H6O",
  "c2h5oh": "C2H6O",
  alcohol: "C2H6O",
  oxygen: "O2",
  "02": "O2",
  nitrogen: "N2",
  hydrogen: "H2",
  ozone: "O3",
  benzene: "C6H6",
  "copper sulfate": "CuSO4",
  "copper(ii) sulfate": "CuSO4",
};

for (const profile of getAllProfiles()) {
  formulaAliasMap[profile.formula.toLowerCase()] = profile.formula;
  formulaAliasMap[profile.name.toLowerCase()] = profile.formula;
  for (const alias of [...profile.aliases, ...profile.commonNames, profile.iupacName]) {
    formulaAliasMap[alias.toLowerCase()] = profile.formula;
  }
}

export function resolveFormulaInput(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const alias = formulaAliasMap[trimmed.toLowerCase()];
  if (alias) return alias;
  const calculated = calculateMolarMass(trimmed);
  return calculated ? calculated.formula : null;
}

export function getStaticCompoundParams() {
  return getAllProfiles().map((profile) => ({ slug: profile.slug }));
}
