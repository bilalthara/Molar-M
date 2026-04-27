const atomicMasses: Record<string, number> = {
  H: 1.008,
  He: 4.003,
  Li: 6.94,
  Be: 9.012,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.18,
  Na: 22.99,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  Ar: 39.948,
  K: 39.098,
  Ca: 40.078,
  Sc: 44.956,
  Ti: 47.867,
  V: 50.942,
  Cr: 51.996,
  Mn: 54.938,
  Fe: 55.845,
  Co: 58.933,
  Ni: 58.693,
  Cu: 63.546,
  Zn: 65.38,
  Ga: 69.723,
  Ge: 72.63,
  As: 74.922,
  Se: 78.971,
  Br: 79.904,
  Kr: 83.798,
  Ag: 107.868,
  I: 126.904,
  Ba: 137.327,
  Pt: 195.084,
  Au: 196.967,
  Hg: 200.592,
  Pb: 207.2,
};

export type FormulaBreakdown = {
  element: string;
  count: number;
  atomicMass: number;
  contribution: number;
};

export type FormulaResult = {
  formula: string;
  molarMass: number;
  breakdown: FormulaBreakdown[];
};

function normalizeSymbol(rawSymbol: string) {
  return rawSymbol[0].toUpperCase() + rawSymbol.slice(1).toLowerCase();
}

export function calculateMolarMass(formula: string): FormulaResult | null {
  const cleaned = formula.replace(/\s+/g, "");
  if (!cleaned) {
    return null;
  }

  const stack: Array<Record<string, number>> = [{}];
  let index = 0;

  const mergeCounts = (target: Record<string, number>, source: Record<string, number>, multiplier = 1) => {
    Object.entries(source).forEach(([element, count]) => {
      target[element] = (target[element] ?? 0) + count * multiplier;
    });
  };

  while (index < cleaned.length) {
    const char = cleaned[index];
    if (!char) {
      break;
    }

    if (char === "(") {
      stack.push({});
      index += 1;
      continue;
    }

    if (char === ")") {
      if (stack.length === 1) {
        return null;
      }

      index += 1;
      let countText = "";
      while (index < cleaned.length && /\d/.test(cleaned[index] ?? "")) {
        countText += cleaned[index];
        index += 1;
      }

      const multiplier = countText ? Number(countText) : 1;
      if (Number.isNaN(multiplier) || multiplier <= 0) {
        return null;
      }

      const group = stack.pop() as Record<string, number>;
      const parent = stack[stack.length - 1] as Record<string, number>;
      mergeCounts(parent, group, multiplier);
      continue;
    }

    if (!/[A-Za-z]/.test(char)) {
      return null;
    }

    let symbolText = char;
    index += 1;
    while (index < cleaned.length && /[a-z]/.test(cleaned[index] ?? "")) {
      symbolText += cleaned[index];
      index += 1;
    }

    let countText = "";
    while (index < cleaned.length && /\d/.test(cleaned[index] ?? "")) {
      countText += cleaned[index];
      index += 1;
    }

    const symbol = normalizeSymbol(symbolText);
    const count = countText ? Number(countText) : 1;
    if (!atomicMasses[symbol] || Number.isNaN(count) || count <= 0) {
      return null;
    }

    const current = stack[stack.length - 1] as Record<string, number>;
    current[symbol] = (current[symbol] ?? 0) + count;
  }

  if (stack.length !== 1) {
    return null;
  }

  const counts = stack[0] as Record<string, number>;
  if (Object.keys(counts).length === 0) {
    return null;
  }

  const breakdown = Object.entries(counts).map(([element, count]) => {
    const atomicMass = atomicMasses[element];
    return {
      element,
      count,
      atomicMass,
      contribution: atomicMass * count,
    };
  });

  const molarMass = breakdown.reduce((sum, row) => sum + row.contribution, 0);
  return {
    formula: cleaned,
    molarMass,
    breakdown,
  };
}
