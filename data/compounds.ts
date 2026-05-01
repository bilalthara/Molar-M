export type CompoundCategory = "acid" | "base" | "salt" | "organic" | "gas";

export type CompoundRecord = {
  formula: string;
  name: string;
  category: CompoundCategory;
  aliases: string[];
};

function makeAliases(formula: string, name: string) {
  const short = formula.toLowerCase();
  const base = name.toLowerCase();
  return [`molar mass of ${short}`, `${short} molar mass`, `molecular weight of ${base}`];
}

const baseCompounds: CompoundRecord[] = [
  { formula: "H2O", name: "Water", category: "gas", aliases: makeAliases("H2O", "Water") },
  { formula: "CO2", name: "Carbon Dioxide", category: "gas", aliases: makeAliases("CO2", "Carbon Dioxide") },
  { formula: "CO", name: "Carbon Monoxide", category: "gas", aliases: makeAliases("CO", "Carbon Monoxide") },
  { formula: "O2", name: "Oxygen", category: "gas", aliases: makeAliases("O2", "Oxygen") },
  { formula: "O3", name: "Ozone", category: "gas", aliases: makeAliases("O3", "Ozone") },
  { formula: "N2", name: "Nitrogen", category: "gas", aliases: makeAliases("N2", "Nitrogen") },
  { formula: "NO", name: "Nitric Oxide", category: "gas", aliases: makeAliases("NO", "Nitric Oxide") },
  { formula: "NO2", name: "Nitrogen Dioxide", category: "gas", aliases: makeAliases("NO2", "Nitrogen Dioxide") },
  { formula: "N2O", name: "Nitrous Oxide", category: "gas", aliases: makeAliases("N2O", "Nitrous Oxide") },
  { formula: "SO2", name: "Sulfur Dioxide", category: "gas", aliases: makeAliases("SO2", "Sulfur Dioxide") },
  { formula: "SO3", name: "Sulfur Trioxide", category: "gas", aliases: makeAliases("SO3", "Sulfur Trioxide") },
  { formula: "Cl2", name: "Chlorine", category: "gas", aliases: makeAliases("Cl2", "Chlorine") },
  { formula: "H2", name: "Hydrogen", category: "gas", aliases: makeAliases("H2", "Hydrogen") },
  { formula: "NH3", name: "Ammonia", category: "base", aliases: makeAliases("NH3", "Ammonia") },
  { formula: "H2S", name: "Hydrogen Sulfide", category: "gas", aliases: makeAliases("H2S", "Hydrogen Sulfide") },
  { formula: "HF", name: "Hydrofluoric Acid", category: "acid", aliases: makeAliases("HF", "Hydrofluoric Acid") },
  { formula: "HCl", name: "Hydrochloric Acid", category: "acid", aliases: makeAliases("HCl", "Hydrochloric Acid") },
  { formula: "HBr", name: "Hydrobromic Acid", category: "acid", aliases: makeAliases("HBr", "Hydrobromic Acid") },
  { formula: "HI", name: "Hydroiodic Acid", category: "acid", aliases: makeAliases("HI", "Hydroiodic Acid") },
  { formula: "HNO3", name: "Nitric Acid", category: "acid", aliases: makeAliases("HNO3", "Nitric Acid") },
  { formula: "H2SO4", name: "Sulfuric Acid", category: "acid", aliases: makeAliases("H2SO4", "Sulfuric Acid") },
  { formula: "H2SO3", name: "Sulfurous Acid", category: "acid", aliases: makeAliases("H2SO3", "Sulfurous Acid") },
  { formula: "H3PO4", name: "Phosphoric Acid", category: "acid", aliases: makeAliases("H3PO4", "Phosphoric Acid") },
  { formula: "H2CO3", name: "Carbonic Acid", category: "acid", aliases: makeAliases("H2CO3", "Carbonic Acid") },
  {
    formula: "C2H4O2",
    name: "Acetic Acid",
    category: "acid",
    aliases: [...makeAliases("C2H4O2", "Acetic Acid"), "ch3cooh molar mass", "molar mass of ch3cooh", "ethanoic acid"],
  },
  { formula: "HCOOH", name: "Formic Acid", category: "acid", aliases: makeAliases("HCOOH", "Formic Acid") },
  { formula: "NaOH", name: "Sodium Hydroxide", category: "base", aliases: makeAliases("NaOH", "Sodium Hydroxide") },
  { formula: "KOH", name: "Potassium Hydroxide", category: "base", aliases: makeAliases("KOH", "Potassium Hydroxide") },
  { formula: "Ca(OH)2", name: "Calcium Hydroxide", category: "base", aliases: makeAliases("Ca(OH)2", "Calcium Hydroxide") },
  { formula: "Mg(OH)2", name: "Magnesium Hydroxide", category: "base", aliases: makeAliases("Mg(OH)2", "Magnesium Hydroxide") },
  { formula: "NaCl", name: "Sodium Chloride", category: "salt", aliases: makeAliases("NaCl", "Sodium Chloride") },
  { formula: "KCl", name: "Potassium Chloride", category: "salt", aliases: makeAliases("KCl", "Potassium Chloride") },
  { formula: "CaCl2", name: "Calcium Chloride", category: "salt", aliases: makeAliases("CaCl2", "Calcium Chloride") },
  { formula: "MgCl2", name: "Magnesium Chloride", category: "salt", aliases: makeAliases("MgCl2", "Magnesium Chloride") },
  { formula: "Na2CO3", name: "Sodium Carbonate", category: "salt", aliases: makeAliases("Na2CO3", "Sodium Carbonate") },
  { formula: "NaHCO3", name: "Sodium Bicarbonate", category: "salt", aliases: makeAliases("NaHCO3", "Sodium Bicarbonate") },
  { formula: "K2CO3", name: "Potassium Carbonate", category: "salt", aliases: makeAliases("K2CO3", "Potassium Carbonate") },
  { formula: "CaCO3", name: "Calcium Carbonate", category: "salt", aliases: makeAliases("CaCO3", "Calcium Carbonate") },
  { formula: "Na2SO4", name: "Sodium Sulfate", category: "salt", aliases: makeAliases("Na2SO4", "Sodium Sulfate") },
  { formula: "K2SO4", name: "Potassium Sulfate", category: "salt", aliases: makeAliases("K2SO4", "Potassium Sulfate") },
  { formula: "CaSO4", name: "Calcium Sulfate", category: "salt", aliases: makeAliases("CaSO4", "Calcium Sulfate") },
  { formula: "CuSO4", name: "Copper(II) Sulfate", category: "salt", aliases: makeAliases("CuSO4", "Copper(II) Sulfate") },
  { formula: "AgNO3", name: "Silver Nitrate", category: "salt", aliases: makeAliases("AgNO3", "Silver Nitrate") },
  { formula: "NaNO3", name: "Sodium Nitrate", category: "salt", aliases: makeAliases("NaNO3", "Sodium Nitrate") },
  { formula: "KNO3", name: "Potassium Nitrate", category: "salt", aliases: makeAliases("KNO3", "Potassium Nitrate") },
  { formula: "C6H6", name: "Benzene", category: "organic", aliases: makeAliases("C6H6", "Benzene") },
  { formula: "C7H8", name: "Toluene", category: "organic", aliases: makeAliases("C7H8", "Toluene") },
  { formula: "CH3OH", name: "Methanol", category: "organic", aliases: makeAliases("CH3OH", "Methanol") },
  { formula: "C2H6O", name: "Ethanol", category: "organic", aliases: makeAliases("C2H6O", "Ethanol") },
  { formula: "C3H8O", name: "Propanol", category: "organic", aliases: makeAliases("C3H8O", "Propanol") },
  { formula: "C3H6O", name: "Acetone", category: "organic", aliases: makeAliases("C3H6O", "Acetone") },
  { formula: "C6H12O6", name: "Glucose", category: "organic", aliases: makeAliases("C6H12O6", "Glucose") },
  { formula: "C12H22O11", name: "Sucrose", category: "organic", aliases: makeAliases("C12H22O11", "Sucrose") },
  { formula: "C8H8", name: "Styrene", category: "organic", aliases: makeAliases("C8H8", "Styrene") },
  { formula: "C3H6O2", name: "Propionic Acid", category: "organic", aliases: makeAliases("C3H6O2", "Propionic Acid") },
];

const roots1to30 = [
  "",
  "Meth",
  "Eth",
  "Prop",
  "But",
  "Pent",
  "Hex",
  "Hept",
  "Oct",
  "Non",
  "Dec",
  "Undec",
  "Dodec",
  "Tridec",
  "Tetradec",
  "Pentadec",
  "Hexadec",
  "Heptadec",
  "Octadec",
  "Nonadec",
  "Eicos",
  "Heneicos",
  "Docos",
  "Tricos",
  "Tetracos",
  "Pentacos",
  "Hexacos",
  "Heptacos",
  "Octacos",
  "Nonacos",
  "Triacont",
] as const;

function hydrocarbonSeries(): CompoundRecord[] {
  const rows: CompoundRecord[] = [];
  for (let n = 1; n <= 30; n += 1) {
    // Use conventional CH4 (not C1H4) so URLs and parser output match the dataset row.
    const formula = n === 1 ? "CH4" : `C${n}H${2 * n + 2}`;
    rows.push({
      formula,
      name: `${roots1to30[n]}ane`,
      category: "organic",
      aliases: makeAliases(formula, `${roots1to30[n]}ane`),
    });
  }
  for (let n = 2; n <= 20; n += 1) {
    rows.push({
      formula: `C${n}H${2 * n}`,
      name: `${roots1to30[n]}ene`,
      category: "organic",
      aliases: makeAliases(`C${n}H${2 * n}`, `${roots1to30[n]}ene`),
    });
    rows.push({
      formula: `C${n}H${2 * n - 2}`,
      name: `${roots1to30[n]}yne`,
      category: "organic",
      aliases: makeAliases(`C${n}H${2 * n - 2}`, `${roots1to30[n]}yne`),
    });
  }
  return rows;
}

function alcoholSeries(): CompoundRecord[] {
  const rows: CompoundRecord[] = [];
  for (let n = 1; n <= 20; n += 1) {
    rows.push({
      formula: `C${n}H${2 * n + 2}O`,
      name: `${roots1to30[n]}anol`,
      category: "organic",
      aliases: makeAliases(`C${n}H${2 * n + 2}O`, `${roots1to30[n]}anol`),
    });
  }
  return rows;
}

function carboxylicAcidSeries(): CompoundRecord[] {
  const rows: CompoundRecord[] = [];
  const commonAcidNames: Record<number, string> = {
    1: "Formic Acid",
    2: "Acetic Acid",
    3: "Propionic Acid",
    4: "Butyric Acid",
    5: "Valeric Acid",
    6: "Caproic Acid",
    8: "Caprylic Acid",
    10: "Capric Acid",
    12: "Lauric Acid",
    14: "Myristic Acid",
    16: "Palmitic Acid",
    18: "Stearic Acid",
    20: "Arachidic Acid",
    22: "Behenic Acid",
    24: "Lignoceric Acid",
    26: "Cerotic Acid",
    28: "Montanic Acid",
    30: "Melissic Acid",
  };
  for (let n = 1; n <= 30; n += 1) {
    const iupac = `${roots1to30[n]}anoic Acid`;
    const displayName = commonAcidNames[n] ?? iupac;
    rows.push({
      formula: `C${n}H${2 * n}O2`,
      name: displayName,
      category: "acid",
      aliases: [...makeAliases(`C${n}H${2 * n}O2`, displayName), iupac.toLowerCase()],
    });
  }
  return rows;
}

function haloalkaneSeries(): CompoundRecord[] {
  const rows: CompoundRecord[] = [];
  for (let n = 1; n <= 20; n += 1) {
    const root = roots1to30[n].toLowerCase();
    rows.push({
      formula: `C${n}H${2 * n + 1}Cl`,
      name: `Chloro${root}ane`,
      category: "organic",
      aliases: makeAliases(`C${n}H${2 * n + 1}Cl`, `Chloro${root}ane`),
    });
    rows.push({
      formula: `C${n}H${2 * n + 1}Br`,
      name: `Bromo${root}ane`,
      category: "organic",
      aliases: makeAliases(`C${n}H${2 * n + 1}Br`, `Bromo${root}ane`),
    });
  }
  return rows;
}

type Ion = { formula: string; name: string; charge: number; polyatomic?: boolean };

const cations: Ion[] = [
  { formula: "Na", name: "Sodium", charge: 1 },
  { formula: "K", name: "Potassium", charge: 1 },
  { formula: "Li", name: "Lithium", charge: 1 },
  { formula: "Ag", name: "Silver", charge: 1 },
  { formula: "NH4", name: "Ammonium", charge: 1, polyatomic: true },
  { formula: "Mg", name: "Magnesium", charge: 2 },
  { formula: "Ca", name: "Calcium", charge: 2 },
  { formula: "Ba", name: "Barium", charge: 2 },
  { formula: "Zn", name: "Zinc", charge: 2 },
  { formula: "Cu", name: "Copper(II)", charge: 2 },
  { formula: "Fe", name: "Iron(II)", charge: 2 },
  { formula: "Fe", name: "Iron(III)", charge: 3 },
  { formula: "Al", name: "Aluminum", charge: 3 },
  { formula: "Cr", name: "Chromium(III)", charge: 3 },
  { formula: "Mn", name: "Manganese(II)", charge: 2 },
  { formula: "Co", name: "Cobalt(II)", charge: 2 },
  { formula: "Ni", name: "Nickel(II)", charge: 2 },
  { formula: "Pb", name: "Lead(II)", charge: 2 },
];

const anions: Ion[] = [
  { formula: "F", name: "Fluoride", charge: 1 },
  { formula: "Cl", name: "Chloride", charge: 1 },
  { formula: "Br", name: "Bromide", charge: 1 },
  { formula: "I", name: "Iodide", charge: 1 },
  { formula: "NO3", name: "Nitrate", charge: 1, polyatomic: true },
  { formula: "NO2", name: "Nitrite", charge: 1, polyatomic: true },
  { formula: "OH", name: "Hydroxide", charge: 1, polyatomic: true },
  { formula: "HSO4", name: "Hydrogen Sulfate", charge: 1, polyatomic: true },
  { formula: "HCO3", name: "Hydrogen Carbonate", charge: 1, polyatomic: true },
  { formula: "C2H3O2", name: "Acetate", charge: 1, polyatomic: true },
  { formula: "SO4", name: "Sulfate", charge: 2, polyatomic: true },
  { formula: "SO3", name: "Sulfite", charge: 2, polyatomic: true },
  { formula: "CO3", name: "Carbonate", charge: 2, polyatomic: true },
  { formula: "CrO4", name: "Chromate", charge: 2, polyatomic: true },
  { formula: "Cr2O7", name: "Dichromate", charge: 2, polyatomic: true },
  { formula: "S2O3", name: "Thiosulfate", charge: 2, polyatomic: true },
  { formula: "PO4", name: "Phosphate", charge: 3, polyatomic: true },
];

function gcd(a: number, b: number): number {
  let x = a;
  let y = b;
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function withCount(ion: Ion, count: number) {
  if (count === 1) return ion.formula;
  if (ion.polyatomic) return `(${ion.formula})${count}`;
  return `${ion.formula}${count}`;
}

function ionicFormula(cation: Ion, anion: Ion) {
  const total = lcm(cation.charge, anion.charge);
  const cCount = total / cation.charge;
  const aCount = total / anion.charge;
  return `${withCount(cation, cCount)}${withCount(anion, aCount)}`;
}

function inorganicExpansion(): CompoundRecord[] {
  const rows: CompoundRecord[] = [];
  for (const cation of cations) {
    for (const anion of anions) {
      const formula = ionicFormula(cation, anion);
      const name = `${cation.name} ${anion.name}`;
      rows.push({
        formula,
        name,
        category: anion.formula === "OH" ? "base" : "salt",
        aliases: makeAliases(formula, name),
      });
    }
  }

  const extraAcids: CompoundRecord[] = [
    { formula: "HClO", name: "Hypochlorous Acid", category: "acid", aliases: makeAliases("HClO", "Hypochlorous Acid") },
    { formula: "HClO2", name: "Chlorous Acid", category: "acid", aliases: makeAliases("HClO2", "Chlorous Acid") },
    { formula: "HClO3", name: "Chloric Acid", category: "acid", aliases: makeAliases("HClO3", "Chloric Acid") },
    { formula: "HClO4", name: "Perchloric Acid", category: "acid", aliases: makeAliases("HClO4", "Perchloric Acid") },
    { formula: "HNO2", name: "Nitrous Acid", category: "acid", aliases: makeAliases("HNO2", "Nitrous Acid") },
    { formula: "HCN", name: "Hydrocyanic Acid", category: "acid", aliases: makeAliases("HCN", "Hydrocyanic Acid") },
    { formula: "HBrO3", name: "Bromic Acid", category: "acid", aliases: makeAliases("HBrO3", "Bromic Acid") },
    { formula: "HIO3", name: "Iodic Acid", category: "acid", aliases: makeAliases("HIO3", "Iodic Acid") },
  ];

  const oxides: CompoundRecord[] = [
    { formula: "Fe2O3", name: "Iron(III) Oxide", category: "salt", aliases: makeAliases("Fe2O3", "Iron(III) Oxide") },
    { formula: "FeO", name: "Iron(II) Oxide", category: "salt", aliases: makeAliases("FeO", "Iron(II) Oxide") },
    { formula: "Cu2O", name: "Copper(I) Oxide", category: "salt", aliases: makeAliases("Cu2O", "Copper(I) Oxide") },
    { formula: "CuO", name: "Copper(II) Oxide", category: "salt", aliases: makeAliases("CuO", "Copper(II) Oxide") },
    { formula: "ZnO", name: "Zinc Oxide", category: "salt", aliases: makeAliases("ZnO", "Zinc Oxide") },
    { formula: "SO2", name: "Sulfur Dioxide", category: "gas", aliases: makeAliases("SO2", "Sulfur Dioxide") },
    { formula: "SO3", name: "Sulfur Trioxide", category: "gas", aliases: makeAliases("SO3", "Sulfur Trioxide") },
    { formula: "NO2", name: "Nitrogen Dioxide", category: "gas", aliases: makeAliases("NO2", "Nitrogen Dioxide") },
  ];

  return [...rows, ...extraAcids, ...oxides];
}

function mergeByFormula(records: CompoundRecord[]) {
  const map = new Map<string, CompoundRecord>();
  for (const record of records) {
    const key = record.formula.toLowerCase();
    const existing = map.get(key);
    if (!existing) {
      map.set(key, record);
      continue;
    }
    map.set(key, {
      ...existing,
      aliases: Array.from(new Set([...existing.aliases, ...record.aliases])),
    });
  }
  return Array.from(map.values());
}

function isSpamName(name: string) {
  return /^Carboxylic Acid C\d+$/i.test(name) || /^\d/.test(name);
}

const mergedCompounds = mergeByFormula([
  ...baseCompounds,
  ...hydrocarbonSeries(),
  ...alcoholSeries(),
  ...carboxylicAcidSeries(),
  ...haloalkaneSeries(),
  ...inorganicExpansion(),
]).filter((record) => !isSpamName(record.name));

export const TARGET_COMPOUNDS = mergedCompounds.length;
export const compoundsData: CompoundRecord[] = mergedCompounds;

