import { calculateMolarMass, type FormulaResult } from "@/lib/molar-mass";
import { compoundsData } from "@/data/compounds";

export type CompoundBreakdown = {
  element: string;
  count: number;
  atomicMass: number;
  contribution: number;
};

export type CompoundEntry = {
  slug: string;
  canonicalSlug: string;
  formula: string;
  name: string;
  commonName: string;
  category: "acid" | "base" | "salt" | "organic" | "gas";
  molarMass: number;
  summary: string;
  sameElementCompounds: string[];
  relatedCompounds: string[];
  breakdown: CompoundBreakdown[];
  faqs: { question: string; answer: string }[];
  interestingFacts: string[];
  structures: { type: "Chemical" | "Lewis" | "3D"; title: string; description: string }[];
  reactions: { equation: string; type: string }[];
};

const categoryLabelMap: Record<CompoundEntry["category"], string> = {
  acid: "Acids",
  base: "Bases",
  salt: "Salts",
  organic: "Organic",
  gas: "Gases",
};

function toTitleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

const formulaAliasMap: Record<string, string> = {
  water: "H2O",
  "dihydrogen monoxide": "H2O",
  oxygen: "O2",
  "oxygen gas": "O2",
  "carbon dioxide": "CO2",
  "sodium chloride": "NaCl",
  "table salt": "NaCl",
  ammonia: "NH3",
  methane: "CH4",
  glucose: "C6H12O6",
  "sulfuric acid": "H2SO4",
  "hydrochloric acid": "HCl",
  "nitric acid": "HNO3",
  "phosphoric acid": "H3PO4",
  "acetic acid": "CH3COOH",
  "calcium carbonate": "CaCO3",
  "potassium chloride": "KCl",
  ozone: "O3",
  "sodium hydroxide": "NaOH",
  aluminum: "Al",
  magnesium: "Mg",
  iron: "Fe",
  copper: "Cu",
  chlorine: "Cl2",
  nitrogen: "N2",
  hydrogen: "H2",
  air: "N2",
};

for (const record of compoundsData) {
  formulaAliasMap[record.formula.toLowerCase()] = record.formula;
  formulaAliasMap[record.name.toLowerCase()] = record.formula;
  for (const alias of record.aliases) {
    formulaAliasMap[alias.toLowerCase()] = record.formula;
  }
}

const formulaTypos: Record<string, string> = {
  "h20": "H2O",
  "02": "O2",
  "c02": "CO2",
  "hci": "HCl",
  "naci": "NaCl",
  "na0h": "NaOH",
};
const knownSymbols = new Set([
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Ag",
  "I",
  "Ba",
  "Pt",
  "Au",
  "Hg",
  "Pb",
]);

function makeCanonicalSlug(formula: string) {
  const match = compoundsData.find((record) => record.formula.toLowerCase() === formula.toLowerCase());
  const name = toTitleCase(match?.name ?? formula);
  return makeNameBasedPath(name);
}

function toNameSlug(name: string) {
  return toTitleCase(name)
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeNameBasedPath(name: string) {
  return `molar-mass-of-${toNameSlug(name).toLowerCase()}`;
}

/** URL path segment for a compound hub page, aligned with each entry's `canonicalSlug`. */
export function compoundNameToMolarMassPath(name: string) {
  return makeNameBasedPath(name.trim());
}

function decodeRouteValue(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function cleanKeyword(raw: string) {
  return raw
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/what is the /g, "")
    .replace(/molar mass of/g, "")
    .replace(/[?.,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeFormulaToken(token: string) {
  const stripped = token.replace(/[^a-z0-9()]/gi, "");
  if (!stripped) {
    return "";
  }

  if (formulaTypos[stripped.toLowerCase()]) {
    return formulaTypos[stripped.toLowerCase()];
  }

  let normalized = "";
  let index = 0;

  while (index < stripped.length) {
    const char = stripped[index];
    if (!char) {
      break;
    }
    if (/[0-9()]/.test(char)) {
      normalized += char;
      index += 1;
      continue;
    }
    const two = stripped.slice(index, index + 2);
    if (two.length === 2) {
      const twoSymbol = two[0].toUpperCase() + two[1].toLowerCase();
      if (knownSymbols.has(twoSymbol)) {
        normalized += twoSymbol;
        index += 2;
        continue;
      }
    }
    normalized += char.toUpperCase();
    index += 1;
  }

  return normalized;
}

function buildFaqs(formula: string, molarMass: number) {
  return [
    {
      question: `What is the molar mass of ${formula}?`,
      answer: `The molar mass of ${formula} is ${molarMass.toFixed(2)} g/mol based on atomic masses and atom counts.`,
    },
    {
      question: `How do I calculate ${formula} molar mass quickly?`,
      answer: `Count atoms in ${formula}, multiply each by atomic mass, then add every contribution.`,
    },
    {
      question: `Where is ${formula} molar mass used?`,
      answer: `It is used in lab measurements, exam stoichiometry questions, and mole-to-gram conversions.`,
    },
    {
      question: `How do I convert between grams and moles for ${formula}?`,
      answer: `Use moles = mass (g) / molar mass. With ${molarMass.toFixed(2)} g/mol, divide grams by ${molarMass.toFixed(2)} to get moles.`,
    },
    {
      question: `Does rounding affect my final ${formula} answer?`,
      answer: `Keep extra digits while multiplying, then round the final molar mass to match your course rules (commonly 2 decimal places).`,
    },
  ];
}
type CompoundSeed = {
  formula: string;
  name: string;
  category: CompoundEntry["category"];
};

function toDisplayFormula(formula: string) {
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
  return formula.replace(/\d/g, (digit) => subscriptMap[digit] ?? digit);
}

function buildStructures(formula: string, name: string): CompoundEntry["structures"] {
  return [
    {
      type: "Chemical",
      title: `${name} Chemical Formula`,
      description: `${formula} (${toDisplayFormula(formula)}) is rendered using normalized element symbols and atom counts.`,
    },
    {
      type: "Lewis",
      title: `${name} Lewis Representation`,
      description:
        "Electron-dot representation is generated from the element composition to show bonding intent and valence relationships.",
    },
    {
      type: "3D",
      title: `${name} 3D Geometry`,
      description:
        "A simplified 3D molecular layout is generated programmatically from parsed atoms for learning-oriented geometry context.",
    },
  ];
}

function buildGeneratedReactions(formula: string, category: CompoundEntry["category"]): { equation: string; type: string }[] {
  const simpleHydrocarbon = formula.match(/^C(\d+)H(\d+)$/);
  const simpleAlcohol = formula.match(/^C(\d+)H(\d+)O$/);
  if (simpleHydrocarbon) {
    const carbon = Number(simpleHydrocarbon[1]);
    const hydrogen = Number(simpleHydrocarbon[2]);
    const oxygenCoeffTimes2 = 2 * carbon + hydrogen / 2;
    const leftFuel = oxygenCoeffTimes2 % 2 === 0 ? `${formula}` : `2${formula}`;
    const o2 = oxygenCoeffTimes2 % 2 === 0 ? `${oxygenCoeffTimes2 / 2}O2` : `${oxygenCoeffTimes2}O2`;
    const co2 = oxygenCoeffTimes2 % 2 === 0 ? `${carbon}CO2` : `${2 * carbon}CO2`;
    const h2o = oxygenCoeffTimes2 % 2 === 0 ? `${hydrogen / 2}H2O` : `${hydrogen}H2O`;
    return [
      { equation: `${leftFuel} + ${o2} -> ${co2} + ${h2o}`, type: "Combustion" },
      { equation: `${formula} + H2 -> ${formula.replace(/^C(\d+)H(\d+)$/, (_m, c, h) => `C${c}H${Number(h) + 2}`)}`, type: "Hydrogenation" },
    ];
  }
  if (simpleAlcohol) {
    const carbon = Number(simpleAlcohol[1]);
    const hydrogen = Number(simpleAlcohol[2]);
    const oxygenNeeded = (2 * carbon + hydrogen / 2 - 1) / 2;
    return [
      {
        equation: `${formula} + ${oxygenNeeded}O2 -> ${carbon}CO2 + ${hydrogen / 2}H2O`,
        type: "Combustion",
      },
      {
        equation: `2${formula} + 2Na -> 2C${carbon}H${hydrogen - 1}ONa + H2`,
        type: "Sodium reaction",
      },
    ];
  }
  if (category === "acid") {
    return [
      { equation: `HCl + NaOH -> NaCl + H2O`, type: "Neutralization" },
      { equation: `2HNO3 + CaCO3 -> Ca(NO3)2 + H2O + CO2`, type: "Acid-carbonate" },
    ];
  }
  if (category === "base") {
    return [
      { equation: `NaOH + HCl -> NaCl + H2O`, type: "Neutralization" },
      { equation: `2NaOH + CO2 -> Na2CO3 + H2O`, type: "Acidic oxide absorption" },
    ];
  }
  if (category === "salt") {
    return [
      { equation: `AgNO3 + NaCl -> AgCl + NaNO3`, type: "Double displacement" },
      { equation: `Na2CO3 + 2HCl -> 2NaCl + H2O + CO2`, type: "Acid-salt reaction" },
    ];
  }
  return [
    { equation: `2H2 + O2 -> 2H2O`, type: "Synthesis" },
    { equation: `CH4 + 2O2 -> CO2 + 2H2O`, type: "Combustion" },
  ];
}

function getCategoryFromBreakdown(
  formula: string,
  breakdown: CompoundBreakdown[],
): CompoundEntry["category"] {
  const elements = new Set(breakdown.map((row) => row.element));
  if (formula.startsWith("H") && elements.size > 1) return "acid";
  if (elements.has("C") && elements.has("H")) return "organic";
  if ((elements.has("O") && elements.has("H")) || elements.has("Na") || elements.has("K")) return "base";
  if (["O2", "N2", "H2", "Cl2", "F2", "Br2"].includes(formula) || elements.size <= 2) return "gas";
  return "salt";
}

function getRelevantCompounds(
  formula: string,
  category: CompoundEntry["category"],
  breakdown: CompoundBreakdown[],
  limit: number,
) {
  const elements = new Set(breakdown.map((row) => row.element));
  return compounds
    .filter((compound) => compound.formula !== formula)
    .map((compound) => {
      const sharedElements = compound.breakdown.filter((row) => elements.has(row.element)).length;
      const categoryBoost = compound.category === category ? 2 : 0;
      return { formula: compound.formula, score: sharedElements + categoryBoost };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((row) => row.formula);
}

const seeds: CompoundSeed[] = compoundsData.map((record) => ({
  formula: record.formula,
  name: record.name,
  category: record.category,
}));

export const compounds = seeds
  .map((seed) => {
    const result = calculateMolarMass(seed.formula);
    if (!result) {
      return null;
    }

    const displayName = toTitleCase(seed.name);
    return {
      slug: `Molar-Mass-for-${seed.formula}`,
      canonicalSlug: makeCanonicalSlug(seed.formula),
      formula: seed.formula,
      name: displayName,
      commonName: displayName,
      category: seed.category,
      molarMass: Number(result.molarMass.toFixed(2)),
      summary: `${displayName} is a ${categoryLabelMap[seed.category].toLowerCase()} compound. This page provides atom-by-atom molar-mass calculation for ${seed.formula}.`,
      sameElementCompounds: [] as string[],
      relatedCompounds: [] as string[],
      breakdown: result.breakdown.map((row) => ({
        ...row,
        atomicMass: Number(row.atomicMass.toFixed(3)),
        contribution: Number(row.contribution.toFixed(2)),
      })),
      faqs: buildFaqs(seed.formula, result.molarMass),
      interestingFacts: [
        `${displayName} belongs to the ${categoryLabelMap[seed.category]} cluster used in this pSEO dataset.`,
        `${seed.formula} contains ${result.breakdown.length} unique element types.`,
        `Its computed molar mass is ${result.molarMass.toFixed(2)} g/mol from periodic-table atomic masses.`,
      ],
      structures: buildStructures(seed.formula, displayName),
      reactions: buildGeneratedReactions(seed.formula, seed.category),
    } satisfies CompoundEntry;
  })
  .filter((compound): compound is CompoundEntry => Boolean(compound));

for (const compound of compounds) {
  compound.sameElementCompounds = getRelevantCompounds(compound.formula, compound.category, compound.breakdown, 8);
  compound.relatedCompounds = getRelevantCompounds(compound.formula, compound.category, compound.breakdown, 10);
}

function parseFormulaStrict(raw: string): FormulaResult | null {
  const decoded = decodeRouteValue(raw).trim();
  if (!decoded) {
    return null;
  }

  let candidate = decoded.replace(/\s+/g, "");
  const lower = candidate.toLowerCase();
  if (lower.startsWith("molar-mass-of/")) {
    candidate = candidate.slice("molar-mass-of/".length);
  } else if (lower.startsWith("molar-mass-of-")) {
    candidate = candidate.slice("molar-mass-of-".length);
  }
  if (!candidate) {
    return null;
  }

  let calculated = calculateMolarMass(candidate);
  if (!calculated) {
    const normalized = normalizeFormulaToken(candidate);
    if (normalized) {
      calculated = calculateMolarMass(normalized);
    }
  }
  return calculated;
}

function buildDynamicCompoundEntry(calculated: FormulaResult): CompoundEntry {
  const formula = calculated.formula;
  const staticRecord = compoundsData.find(
    (record) => record.formula.toLowerCase() === formula.toLowerCase(),
  );
  const normalizedBreakdown = calculated.breakdown.map((row) => ({
    ...row,
    atomicMass: Number(row.atomicMass.toFixed(3)),
    contribution: Number(row.contribution.toFixed(2)),
  }));
  const category =
    staticRecord?.category ?? getCategoryFromBreakdown(formula, normalizedBreakdown);
  const readableName = toTitleCase(staticRecord?.name ?? formula);
  const summary = staticRecord
    ? `${readableName} is a ${categoryLabelMap[category].toLowerCase()} compound. This page provides atom-by-atom molar-mass calculation for ${formula}.`
    : `This page computes the molar mass of ${readableName} (${formula}) from its elemental composition using standard atomic masses. It includes a breakdown table, step-by-step calculation, related compounds ranked by shared elements, and teaching-oriented structure diagrams.`;

  const entry: CompoundEntry = {
    slug: makeCanonicalSlug(formula),
    canonicalSlug: makeCanonicalSlug(formula),
    formula,
    name: readableName,
    commonName: readableName,
    category,
    molarMass: Number(calculated.molarMass.toFixed(2)),
    summary,
    sameElementCompounds: [] as string[],
    relatedCompounds: [] as string[],
    breakdown: normalizedBreakdown,
    faqs: buildFaqs(formula, calculated.molarMass),
    interestingFacts: staticRecord
      ? [
          `${readableName} belongs to the ${categoryLabelMap[category]} cluster used in this pSEO dataset.`,
          `${formula} contains ${normalizedBreakdown.length} unique element types.`,
          `Its computed molar mass is ${calculated.molarMass.toFixed(2)} g/mol from periodic-table atomic masses.`,
        ]
      : [
          `${formula} is parsed from the URL segment to count each element in the composition.`,
          `The molar mass sums (atomic mass × atom count) for every element in the formula.`,
          `Related links below are chosen from the dataset using shared elements and similar compound families.`,
        ],
    structures: buildStructures(formula, readableName),
    reactions: buildGeneratedReactions(formula, category),
  };

  entry.sameElementCompounds = getRelevantCompounds(
    entry.formula,
    entry.category,
    entry.breakdown,
    8,
  );
  entry.relatedCompounds = getRelevantCompounds(
    entry.formula,
    entry.category,
    entry.breakdown,
    10,
  );
  return entry;
}

function breakdownCompositionKey(rows: { element: string; count: number }[]) {
  return [...rows]
    .sort((a, b) => a.element.localeCompare(b.element))
    .map((r) => `${r.element}:${r.count}`)
    .join("|");
}

function findCompoundMatchingParsedResult(parsed: FormulaResult) {
  const key = breakdownCompositionKey(parsed.breakdown);
  return (
    compounds.find((compound) => compound.formula.toLowerCase() === parsed.formula.toLowerCase()) ??
    compounds.find((compound) => {
      const cr = calculateMolarMass(compound.formula);
      return cr !== null && breakdownCompositionKey(cr.breakdown) === key;
    })
  );
}

export function getCompoundData(raw: string): CompoundEntry | null {
  const decodedRaw = decodeRouteValue(raw).trim();
  if (!decodedRaw) {
    return null;
  }

  const byNamePath = compounds.find((compound) => compound.canonicalSlug.toLowerCase() === decodedRaw.toLowerCase());
  if (byNamePath) {
    return byNamePath;
  }

  const legacyFormulaPath = decodedRaw.toLowerCase().startsWith("molar-mass-of/")
    ? decodedRaw.slice("molar-mass-of/".length)
    : decodedRaw;

  const direct = getCompoundBySlug(legacyFormulaPath);
  if (direct) {
    return direct;
  }

  const parsed = parseFormulaStrict(decodedRaw);
  if (parsed) {
    const existing = findCompoundMatchingParsedResult(parsed);
    if (existing) {
      return existing;
    }
    return buildDynamicCompoundEntry(parsed);
  }

  const keywordFormula = resolveFormulaFromKeyword(decodedRaw);
  if (!keywordFormula) {
    return null;
  }

  const calculated = calculateMolarMass(keywordFormula);
  if (!calculated) {
    return null;
  }

  const existing = findCompoundMatchingParsedResult(calculated);
  if (existing) {
    return existing;
  }
  return buildDynamicCompoundEntry(calculated);
}

export const getCompoundByKeywordOrSlug = getCompoundData;

const knownCompoundFormulaSet = new Set(compounds.map((c) => c.formula.toLowerCase()));

export function isKnownCompoundFormula(formula: string) {
  return knownCompoundFormulaSet.has(formula.trim().toLowerCase());
}

export const quickFormulas = ["H2O", "NaCl", "CO2", "H2SO4", "C2H6O", "C6H6"];

export const popularCompounds = ["O2", "H2SO4", "NaCl", "CO2", "NH3", "H2O"];

/** Common classroom and lab formulas for the green sub-header ticker (short, familiar). */
export const subheaderTickerFormulas = (() => {
  const basePopular = [
    "H2O",
    "CO2",
    "NaCl",
    "NH3",
    "H2SO4",
    "CH4",
    "CaCO3",
    "NaOH",
    "HCl",
    "KCl",
    "O2",
    "N2",
    "H2",
    "C6H6",
    "C6H12O6",
    "Mg(OH)2",
    "Ca(OH)2",
    "HNO3",
    "H3PO4",
    "BaCl2",
    "Fe2O3",
    "CuSO4",
    "Al2O3",
    "ZnO",
    "Na2CO3",
  ];
  const seen = new Set<string>();
  const rows: string[] = [];
  for (const formula of basePopular) {
    const key = formula.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      rows.push(formula);
    }
  }
  for (const compound of compounds) {
    const key = compound.formula.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      rows.push(compound.formula);
    }
    if (rows.length >= 100) break;
  }
  return rows;
})();

export function getSubheaderTickerFormulas(limit = 32) {
  const n = Math.min(Math.max(limit, 1), subheaderTickerFormulas.length);
  return subheaderTickerFormulas.slice(0, n) as string[];
}

export function getTopNavigationCompounds(limit = 24) {
  return getSubheaderTickerFormulas(limit);
}

export function getStaticCompounds() {
  return compoundsData;
}

export function getStaticFormulaParams() {
  return compoundsData.map((compound) => ({
    formula: makeNameBasedPath(compound.name),
  }));
}

export function getPriorityStaticFormulaParams(limit = 80) {
  return compounds
    .slice()
    .sort((a, b) => b.relatedCompounds.length - a.relatedCompounds.length)
    .slice(0, Math.max(120, Math.min(limit, 1200)))
    .map((compound) => ({ formula: compound.canonicalSlug }));
}

export const featuredCompounds = [
  { formula: "O2", slug: "molar-mass-of-oxygen", category: "gas" },
  { formula: "H2O", slug: "molar-mass-of-water", category: "gas" },
  { formula: "CO2", slug: "molar-mass-of-carbon-dioxide", category: "gas" },
  { formula: "NaCl", slug: "molar-mass-of-sodium-chloride", category: "salt" },
  { formula: "NH3", slug: "molar-mass-of-ammonia", category: "base" },
  { formula: "H2SO4", slug: "molar-mass-of-sulfuric-acid", category: "acid" },
];

/** High-search-volume formulas for sidebar / hub internal linking (order is intentional). */
export const highVolumeMolarMassFormulas = [
  "H2O",
  "CO2",
  "NaCl",
  "NH3",
  "H2SO4",
  "CH4",
  "CaCO3",
  "NaOH",
  "HCl",
  "KCl",
  "O2",
  "N2",
  "H2",
  "C6H6",
  "C6H12O6",
  "Mg(OH)2",
  "Ca(OH)2",
  "HNO3",
  "H3PO4",
  "BaCl2",
  "Fe2O3",
  "CuSO4",
  "Al2O3",
  "ZnO",
  "Na2CO3",
] as const;

export function getHighVolumeMolarMassPageLinks(): { formula: string; name: string }[] {
  const fromList = highVolumeMolarMassFormulas.map((f) => {
    const row = compounds.find((c) => c.formula.toLowerCase() === f.toLowerCase());
    return { formula: row?.formula ?? f, name: row?.name ?? f };
  });
  const seen = new Set(fromList.map((x) => x.formula.toLowerCase()));
  const fill = compounds
    .filter((c) => !seen.has(c.formula.toLowerCase()))
    .sort((a, b) => b.relatedCompounds.length - a.relatedCompounds.length)
    .slice(0, 36)
    .map((c) => ({ formula: c.formula, name: c.name }));
  return [...fromList, ...fill];
}

export const categoryClusters = [
  { name: "Acids", compounds: ["HCl", "H2SO4", "HNO3"], href: "/browse" },
  { name: "Bases", compounds: ["NaOH", "KOH", "NH3"], href: "/browse" },
  { name: "Salts", compounds: ["NaCl", "KCl", "CaCO3"], href: "/browse" },
  { name: "Organic", compounds: ["CH4", "C2H6", "C6H6"], href: "/browse" },
];

export function getCompoundBySlug(slug: string) {
  const normalizedSlug = decodeRouteValue(slug)
    .trim()
    .toLowerCase()
    .replace(/^\/+/, "");
  return compounds.find(
    (compound) =>
      compound.slug.toLowerCase() === normalizedSlug || compound.canonicalSlug === normalizedSlug,
  );
}

export function resolveFormulaFromKeyword(raw: string) {
  const cleaned = cleanKeyword(raw);
  if (!cleaned) {
    return null;
  }

  if (formulaAliasMap[cleaned]) {
    return formulaAliasMap[cleaned];
  }

  const token = normalizeFormulaToken(cleaned.split(" ")[0] ?? cleaned);
  return token || null;
}

export function getCompoundHref(formula: string) {
  const row = compounds.find((compound) => compound.formula.toLowerCase() === formula.toLowerCase());
  if (row) {
    return `/${row.canonicalSlug}`;
  }
  return `/${makeNameBasedPath(formula)}`;
}

export function getCompoundDisplayLabel(formula: string) {
  const row = compounds.find((compound) => compound.formula.toLowerCase() === formula.toLowerCase());
  const name = row?.name ?? formula;
  const fixedName = toTitleCase(name);
  return { name: fixedName, formula: row?.formula ?? formula };
}
