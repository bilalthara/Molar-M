/** Subscript digits that follow an element symbol or closing parenthesis — not leading coefficients. */
export function formatFormula(formula: string): string {
  return formula.replace(/([A-Za-z)])(\d+)/g, (_match, prev: string, digits: string) => {
    const sub = digits
      .split("")
      .map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)] ?? d)
      .join("");
    return `${prev}${sub}`;
  });
}

/** Format a reaction equation or mixed chemistry string for display. */
export function formatChemistryDisplay(text: string): string {
  return formatFormula(text);
}

export function formatMolarMass(value: number, digits = 2): string {
  return `${value.toFixed(digits)} g/mol`;
}

export function compoundHref(slug: string): string {
  return `/${slug}`;
}

export function categoryLabel(category: string): string {
  const labels: Record<string, string> = {
    acid: "Acid",
    base: "Base",
    salt: "Salt",
    oxide: "Oxide",
    gas: "Gas",
    organic: "Organic",
    inorganic: "Inorganic",
    hydrocarbon: "Hydrocarbon",
    element: "Element",
  };
  return labels[category] ?? category;
}
