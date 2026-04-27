const formulaNameMap: Record<string, string> = {
  H2O: "Water",
  CO2: "Carbon Dioxide",
  O2: "Oxygen",
  NaCl: "Sodium Chloride",
  H2SO4: "Sulfuric Acid",
  NH3: "Ammonia",
  C6H12O6: "Glucose",
  CH4: "Methane",
  CaCO3: "Calcium Carbonate",
  KCl: "Potassium Chloride",
  O3: "Ozone",
  HCl: "Hydrochloric Acid",
  N2: "Nitrogen",
  H2: "Hydrogen",
  NaOH: "Sodium Hydroxide",
  C6H6: "Benzene",
  "Mg(OH)2": "Magnesium Hydroxide",
  "Ca(OH)2": "Calcium Hydroxide",
  HNO3: "Nitric Acid",
  H3PO4: "Phosphoric Acid",
  BaCl2: "Barium Chloride",
  Fe2O3: "Iron(III) Oxide",
  CuSO4: "Copper(II) Sulfate",
  Al2O3: "Aluminum Oxide",
  ZnO: "Zinc Oxide",
  Na2CO3: "Sodium Carbonate",
};

const subscriptMap: Record<string, string> = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
};

export function toSubscriptFormula(formula: string) {
  return formula.replace(/\d/g, (digit) => subscriptMap[digit] ?? digit);
}

export function formatFormula(formula: string) {
  return toSubscriptFormula(formula).replace(/->/g, "→");
}

export function getCompoundName(formula: string) {
  return formulaNameMap[formula] ?? "Compound";
}
