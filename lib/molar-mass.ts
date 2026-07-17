import { periodicElements } from "@/lib/periodic-table-data";

const atomicMasses: Record<string, number> = Object.fromEntries(
  periodicElements.map((element) => [element.symbol, element.molarMass]),
);

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

export function getAtomicMass(symbol: string): number | undefined {
  return atomicMasses[normalizeSymbol(symbol)];
}
