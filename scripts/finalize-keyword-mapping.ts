/**
 * Audits data/keyword-full-mapping.csv → overwrites CSV + writes data/seo-summary.txt
 * Run: npx --yes tsx scripts/finalize-keyword-mapping.ts
 */
import fs from "node:fs";
import path from "node:path";

import { compounds, getCompoundHref, resolveFormulaFromKeyword } from "../lib/compound-data";
import { calculateMolarMass } from "../lib/molar-mass";

const ROOT = path.join(__dirname, "..");
const INPUT = path.join(ROOT, "data", "keyword-full-mapping.csv");
const OUTPUT = path.join(ROOT, "data", "keyword-full-mapping.csv");
const SUMMARY = path.join(ROOT, "data", "seo-summary.txt");

function csvCell(s: string) {
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i]!;
    if (inQ) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else inQ = false;
      } else cur += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ",") {
        out.push(cur);
        cur = "";
      } else cur += c;
    }
  }
  out.push(cur);
  return out;
}

function normalizeLoose(k: string) {
  return k
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/â·/g, "·")
    .replace(/Â·/g, "·");
}

function stripTrailingMcq(s: string) {
  let t = s.replace(/\?.*$/, "").trim();
  t = t.replace(/\s+\d+\.\d+\s+g\/mol.*$/i, "").trim();
  t = t.replace(/\s+\d+\.\d+\s*$/i, "").trim();
  return t;
}

function preprocessKeyword(raw: string) {
  let s = raw;
  s = s.replace(/table salt/gi, "sodium chloride");
  s = s.replace(/\bamonia\b/gi, "ammonia");
  s = s.replace(/\bca\s+oh\s+2\b/gi, "Ca(OH)2");
  s = s.replace(/\bmg\s+oh\s+2\b/gi, "Mg(OH)2");
  s = s.replace(/\bfe\s+oh\s+3\b/gi, "Fe(OH)3");
  s = s.replace(/\bh20\b/gi, "H2O");
  s = s.replace(/\bhci\b/gi, "HCl");
  s = s.replace(/\bc02\b/gi, "CO2");
  s = s.replace(/\bnaci\b/gi, "NaCl");
  s = s.replace(/\bna0h\b/gi, "NaOH");
  s = s.replace(/(?<![A-Za-z0-9])02(?![A-Za-z0-9])/g, "O2");
  s = s.replace(/\balno33\b/gi, "Al(NO3)3");
  return s;
}

const PHRASE_FORMULA: [RegExp, string][] = [
  [/ethyl alcohol/gi, "C2H5OH"],
  [/grain alcohol/gi, "C2H5OH"],
  [/vinegar/gi, "CH3COOH"],
  [/baking soda/gi, "NaHCO3"],
  [/caustic soda/gi, "NaOH"],
  [/lye\b/gi, "NaOH"],
  [/benzene/gi, "C6H6"],
  [/toluene/gi, "C7H8"],
  [/acetone/gi, "CH3COCH3"],
  [/diethyl ether/gi, "C2H5OC2H5"],
  [/chloroform/gi, "CHCl3"],
  [/dichloromethane/gi, "CH2Cl2"],
  [/freon\s*12|cf2cl2/gi, "CF2Cl2"],
  [/sucrose/gi, "C12H22O11"],
  [/urea/gi, "CO(NH2)2"],
  [/benzoic acid/gi, "C7H6O2"],
  [/salicylic acid/gi, "C7H6O3"],
  [/aspirin|acetylsalicylic acid/gi, "C9H8O4"],
  [/caffeine/gi, "C8H10N4O2"],
  [/glycerol|glycerin/gi, "C3H8O3"],
  [/ethylene glycol/gi, "C2H6O2"],
  [/propylene glycol/gi, "C3H8O2"],
  [/cyclohexanol/gi, "C6H12O"],
  [/cyclohexene/gi, "C6H10"],
  [/cyclohexanone/gi, "C6H10O"],
  [/naphthalene/gi, "C10H8"],
  [/anthracene/gi, "C14H10"],
  [/biphenyl/gi, "C12H10"],
  [/acetic anhydride/gi, "C4H6O3"],
  [/maleic anhydride/gi, "C4H2O3"],
  [/benzaldehyde/gi, "C7H6O"],
  [/benzamide/gi, "C7H7NO"],
  [/benzoin/gi, "C14H12O2"],
  [/benzophenone/gi, "C13H10O"],
  [/acetophenone/gi, "C8H8O"],
  [/acetanilide/gi, "C8H9NO"],
  [/aniline/gi, "C6H7N"],
  [/phenol/gi, "C6H6O"],
  [/phenolphthalein/gi, "C20H14O4"],
  [/vanillin/gi, "C8H8O3"],
  [/cinnamic acid/gi, "C9H8O2"],
  [/cinnamaldehyde/gi, "C9H8O"],
  [/oxalic acid/gi, "H2C2O4"],
  [/tartaric acid/gi, "C4H6O6"],
  [/malonic acid/gi, "C3H4O4"],
  [/malic acid/gi, "C4H6O5"],
  [/citric acid/gi, "H3C6H5O7"],
  [/lactic acid/gi, "C3H6O3"],
  [/formic acid/gi, "HCOOH"],
  [/stearic acid/gi, "C18H36O2"],
  [/lauric acid/gi, "C12H24O2"],
  [/palmitic acid/gi, "C16H32O2"],
  [/oleic acid/gi, "C18H34O2"],
  [/adipic acid/gi, "C6H10O4"],
  [/phthalic acid/gi, "C8H6O4"],
  [/ascorbic acid|vitamin c/gi, "C6H8O6"],
  [/fructose/gi, "C6H12O6"],
  [/sodium benzoate/gi, "C7H5NaO2"],
  [/ethyl acetate/gi, "C4H8O2"],
  [/sodium acetate/gi, "NaC2H3O2"],
  [/potassium chlorate/gi, "KClO3"],
  [/calcium phosphate/gi, "Ca3(PO4)2"],
  [/copper sulfate/gi, "CuSO4"],
  [/glycine/gi, "C2H5NO2"],
  [/methyl salicylate/gi, "C8H8O3"],
  [/methyl benzoate/gi, "C8H8O2"],
  [/butyl acetate/gi, "C6H12O2"],
  [/isopropyl alcohol|isopropanol/gi, "C3H8O"],
  [/1-propanol|1 propanol/gi, "C3H8O"],
  [/1-butanol/gi, "C4H10O"],
  [/2-butanol/gi, "C4H10O"],
  [/butanol/gi, "C4H10O"],
  [/pentanol/gi, "C5H12O"],
  [/hexanol/gi, "C6H14O"],
  [/octanol/gi, "C8H18O"],
  [/bromobenzene/gi, "C6H5Br"],
  [/nitrobenzene/gi, "C6H5NO2"],
  [/thiophene/gi, "C4H4S"],
  [/furfural/gi, "C5H4O2"],
  [/acetonitrile/gi, "C2H3N"],
  [/dmf|dimethylformamide/gi, "C3H7NO"],
  [/dmso/gi, "C2H6OS"],
  [/edta/gi, "C10H16N2O8"],
  [/tris\b/gi, "C4H11NO3"],
  [/heptane/gi, "C7H16"],
  [/nonane/gi, "C9H20"],
  [/decane/gi, "C10H22"],
  [/dodecane/gi, "C12H26"],
  [/hexadecane/gi, "C16H34"],
  [/pinacolone/gi, "C6H12O"],
  [/camphor/gi, "C10H16O"],
  [/borneol/gi, "C10H18O"],
  [/menthol/gi, "C10H20O"],
  [/cholesterol/gi, "C27H46O"],
  [/acetylene/gi, "C2H2"],
  [/nylon\s*6,?6|adipamide/gi, "C12H22N2O2"],
  [/ferrocene/gi, "C10H10Fe"],
  [/acetylferrocene/gi, "C12H12Fe"],
  [/triphenylmethanol/gi, "C19H16O"],
  [/benzil/gi, "C14H10O2"],
  [/hydrobenzoin/gi, "C14H14O2"],
  [/hydroquinone/gi, "C6H6O2"],
  [/resorcinol/gi, "C6H6O2"],
  [/catechol/gi, "C6H6O2"],
  [/bisphenol a/gi, "C15H16O2"],
  [/phosgene/gi, "COCl2"],
  [/acetyl bromide/gi, "C2H3BrO"],
  [/acetyl chloride/gi, "C2H3ClO"],
  [/ethyl benzoate/gi, "C9H10O2"],
  [/silver chloride/gi, "AgCl"],
  [/silver bromide/gi, "AgBr"],
  [/barium sulfate/gi, "BaSO4"],
  [/barium chloride/gi, "BaCl2"],
  [/barium nitrate/gi, "Ba(NO3)2"],
  [/barium hydroxide/gi, "Ba(OH)2"],
  [/barium acetate/gi, "Ba(C2H3O2)2"],
  [/barium carbonate/gi, "BaCO3"],
  [/calcium nitrate/gi, "Ca(NO3)2"],
  [/calcium oxide|quicklime/gi, "CaO"],
  [/calcium bromide/gi, "CaBr2"],
  [/calcium acetate/gi, "Ca(C2H3O2)2"],
  [/zinc chloride/gi, "ZnCl2"],
  [/zinc sulfate/gi, "ZnSO4"],
  [/zinc nitrate/gi, "Zn(NO3)2"],
  [/zinc oxide/gi, "ZnO"],
  [/zinc carbonate/gi, "ZnCO3"],
  [/copper nitrate/gi, "Cu(NO3)2"],
  [/copper sulfate pentahydrate/gi, "CuSO4"],
  [/aluminum chloride/gi, "AlCl3"],
  [/aluminum sulfate/gi, "Al2(SO4)3"],
  [/aluminum nitrate/gi, "Al(NO3)3"],
  [/aluminum oxide|alumina/gi, "Al2O3"],
  [/aluminum hydroxide/gi, "Al(OH)3"],
  [/aluminium/gi, "Al"],
  [/lithium chloride/gi, "LiCl"],
  [/lithium sulfate/gi, "Li2SO4"],
  [/lithium hydroxide/gi, "LiOH"],
  [/lithium fluoride/gi, "LiF"],
  [/sodium bromide/gi, "NaBr"],
  [/sodium iodide/gi, "NaI"],
  [/sodium phosphate/gi, "Na3PO4"],
  [/sodium hypochlorite/gi, "NaOCl"],
  [/sodium thiosulfate/gi, "Na2S2O3"],
  [/sodium oxalate/gi, "Na2C2O4"],
  [/sodium azide/gi, "NaN3"],
  [/sodium nitrite/gi, "NaNO2"],
  [/sodium borohydride/gi, "NaBH4"],
  [/sodium acetate trihydrate/gi, "NaC2H3O2"],
  [/potassium iodide/gi, "KI"],
  [/potassium bromide/gi, "KBr"],
  [/potassium iodate/gi, "KIO3"],
  [/potassium chromate/gi, "K2CrO4"],
  [/potassium dichromate/gi, "K2Cr2O7"],
  [/potassium permanganate/gi, "KMnO4"],
  [/potassium phosphate/gi, "K3PO4"],
  [/potassium acetate/gi, "KC2H3O2"],
  [/potassium hydrogen phthalate|khp/gi, "C8H5KO4"],
  [/ammonium sulfate/gi, "(NH4)2SO4"],
  [/ammonium nitrate/gi, "NH4NO3"],
  [/ammonium chloride/gi, "NH4Cl"],
  [/ammonium phosphate/gi, "(NH4)3PO4"],
  [/ammonium acetate/gi, "NH4C2H3O2"],
  [/magnesium nitrate/gi, "Mg(NO3)2"],
  [/magnesium oxide/gi, "MgO"],
  [/magnesium sulfate|epsom/gi, "MgSO4"],
  [/magnesium glycinate/gi, "C4H8MgN2O4"],
  [/nickel chloride/gi, "NiCl2"],
  [/chromic acid/gi, "H2CrO4"],
  [/potassium sodium tartrate/gi, "C4H4KNaO6"],
  [/glacial acetic acid/gi, "CH3COOH"],
  [/perchloric acid/gi, "HClO4"],
  [/boron trifluoride/gi, "BF3"],
  [/boron trichloride/gi, "BCl3"],
  [/silicon dioxide|silica/gi, "SiO2"],
  [/dinitrogen monoxide|nitrous oxide/gi, "N2O"],
  [/nitrogen monoxide|nitric oxide/gi, "NO"],
  [/nitrogen dioxide/gi, "NO2"],
  [/dinitrogen difluoride/gi, "N2F2"],
  [/sulfur hexafluoride/gi, "SF6"],
  [/sulfur tetrafluoride/gi, "SF4"],
  [/chlorine pentafluoride/gi, "ClF5"],
  [/chlorine gas/gi, "Cl2"],
  [/hydrogen peroxide/gi, "H2O2"],
  [/hydrogen gas/gi, "H2"],
  [/nitrogen gas/gi, "N2"],
  [/oxygen gas/gi, "O2"],
  [/helium gas/gi, "He"],
  [/neon gas/gi, "Ne"],
  [/argon gas/gi, "Ar"],
  [/xenon/gi, "Xe"],
  [/krypton/gi, "Kr"],
  [/\bfluorine\b/gi, "F2"],
  [/\bbromine\b/gi, "Br2"],
  [/\biodine\b/gi, "I2"],
];

const JUNK_RX =
  /punica|punicafolin|punicalagin|punicacortein|fe-taml|wikipedia|doxepin|metronidazole|tramadol|famotidine|diphenhydramine|ibuprofen|acetaminophen|hydrobenzoin|nitroglycerin|resveratrol|hemoglobin|aspartame|benzyltriphenylphosphonium|gallium nitrate octahydrate/i;

const IONIC_AMBIGUOUS =
  /^(molar mass of\s+)?(chloride|nitrate|sulfate|acetate|phosphate|ammonium)(\s+molar mass)?$/i;

const METAL_NAMES =
  "sodium|potassium|lithium|calcium|magnesium|carbon|aluminum|aluminium|copper|zinc|iron|gold|silver|lead|mercury|tin|nickel|chromium|cobalt|vanadium|tungsten|uranium|boron|silicon|phosphorus|sulfur|bismuth|barium|manganese|gallium|arsenic|selenium|graphite|platinum|argon|helium|neon|xenon|krypton";

const METAL_ELEMENT_RX = new RegExp(
  `^(?:(?:what is the molar mass of|molar mass of)\\s+)?(${METAL_NAMES})(?:\\s+molar mass)?\\??$`,
  "i",
);

const METAL_ELEMENT_HEAD = new RegExp(`^(${METAL_NAMES})\\s+molar mass$`, "i");

const ELEMENT_NAME_TO_FORMULA: Record<string, string> = {
  sodium: "Na",
  potassium: "K",
  lithium: "Li",
  calcium: "Ca",
  magnesium: "Mg",
  carbon: "C",
  aluminum: "Al",
  aluminium: "Al",
  copper: "Cu",
  zinc: "Zn",
  iron: "Fe",
  gold: "Au",
  silver: "Ag",
  lead: "Pb",
  mercury: "Hg",
  tin: "Sn",
  nickel: "Ni",
  chromium: "Cr",
  cobalt: "Co",
  vanadium: "V",
  tungsten: "W",
  uranium: "U",
  boron: "B",
  silicon: "Si",
  phosphorus: "P",
  sulfur: "S",
  bismuth: "Bi",
  barium: "Ba",
  manganese: "Mn",
  gallium: "Ga",
  arsenic: "As",
  selenium: "Se",
  graphite: "C",
  platinum: "Pt",
  argon: "Ar",
  helium: "He",
  neon: "Ne",
  xenon: "Xe",
  krypton: "Kr",
};

function elementMolarKeywordFormula(k: string): string | null {
  const m = METAL_ELEMENT_RX.exec(k) ?? METAL_ELEMENT_HEAD.exec(k);
  if (!m?.[1]) return null;
  return ELEMENT_NAME_TO_FORMULA[m[1].toLowerCase()] ?? null;
}

function applyPhraseHints(s: string) {
  let t = s;
  for (const [rx, rep] of PHRASE_FORMULA) {
    t = t.replace(rx, rep);
  }
  return t;
}

function tryFormulaFromKeyword(raw: string): string | null {
  const pre = applyPhraseHints(preprocessKeyword(raw));
  const k = normalizeLoose(stripTrailingMcq(pre));

  const tries: string[] = [];
  const push = (s: string | undefined) => {
    const v = s?.trim();
    if (v) tries.push(v);
  };

  push(k);
  push(k.replace(/^what is the molar mass of\s+/i, ""));
  push(k.replace(/^what is the molar mass of\s+/i, "").replace(/\?$/, ""));
  push(k.replace(/^what is the molar mass\s+/i, ""));
  push(k.replace(/^what is\s+/i, ""));
  push(k.replace(/^molar mass of\s+/i, ""));
  push(k.replace(/^molar mass for\s+/i, ""));
  push(k.replace(/^mass of\s+/i, ""));
  push(k.replace(/^find molar mass of\s+/i, ""));
  push(k.replace(/^calculate molar mass of\s+/i, ""));
  push(k.replace(/^how to calculate molar mass of\s+/i, ""));
  push(k.replace(/\s+molar mass$/i, ""));
  push(k.replace(/\s+molar mass\s*$/i, ""));
  push(k.replace(/^molar mass\s+/i, ""));

  const reHead = /^([a-z0-9().+]+)\s+molar mass$/i;
  const mHead = k.match(reHead);
  if (mHead?.[1]) push(mHead[1]);

  const reTail = /^molar mass\s+([a-z0-9().+]+)$/i;
  const mTail = k.match(reTail);
  if (mTail?.[1]) push(mTail[1]);

  const seen = new Set<string>();
  for (const candidate of tries) {
    const c = candidate.trim();
    if (!c || seen.has(c)) continue;
    seen.add(c);

    let f = resolveFormulaFromKeyword(c);
    if (!f) {
      const first = c.split(/\s+/)[0] ?? "";
      f = resolveFormulaFromKeyword(first);
    }
    if (!f) continue;

    const calc = calculateMolarMass(f);
    if (!calc) continue;
    const url = getCompoundHref(calc.formula);
    if (isBadCompoundUrl(url)) continue;
    return calc.formula;
  }
  return null;
}

function isBadCompoundUrl(url: string) {
  return url === "/molar-mass-of-of" || url.includes("molar-mass-of-of");
}

function expandKeywordList(base: string[]): string[] {
  const seen = new Set(base.map((k) => k.toLowerCase()));
  const extra: string[] = [];
  for (const row of compounds) {
    const { formula, name } = row;
    const nm = name.toLowerCase();
    const pool = [
      `${formula} molar mass`,
      `molar mass of ${formula}`,
      `molecular weight of ${nm}`,
      `${nm} molar mass`,
    ];
    for (const cand of pool) {
      const key = cand.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      extra.push(cand);
    }
  }
  return [...base, ...extra];
}

function classify(keyword: string): { url: string; cluster: string } {
  const raw = preprocessKeyword(keyword);
  const k = normalizeLoose(raw);

  if (!k) return { url: "/", cluster: "SILO_HOME" };

  if (/\bcyclohexane\b/i.test(k)) {
    return { url: "/calculator", cluster: "SILO_CALCULATOR_FALLBACK" };
  }

  if (JUNK_RX.test(k)) return { url: "/faq", cluster: "SILO_FAQ_NOISE" };

  if (k.includes("wikipedia")) return { url: "/faq", cluster: "SILO_FAQ_REFERENCE_NOISE" };

  if (/^(molar mass of\s+)?salt(\s+molar mass)?$/i.test(k) || /^salt\s+molar mass$/i.test(k)) {
    return { url: "/faq", cluster: "SILO_FAQ_NOISE" };
  }

  if (IONIC_AMBIGUOUS.test(k)) return { url: "/faq", cluster: "SILO_FAQ_NOISE" };

  if (k.includes("periodic table") || k.includes("molar mass chart") || k.includes("molar mass on periodic table")) {
    return { url: "/periodic-table-masses", cluster: "SILO_PERIODIC" };
  }

  const elementFormula = elementMolarKeywordFormula(k);
  if (elementFormula) {
    const url = getCompoundHref(elementFormula);
    if (!isBadCompoundUrl(url)) {
      return { url, cluster: "SILO_ELEMENT_COMPOUND" };
    }
    return { url: "/periodic-table-masses", cluster: "SILO_PERIODIC" };
  }

  if (/\b(calculate|how to calculate)\s+molar mass\s+of\s+/i.test(k)) {
    const f = tryFormulaFromKeyword(raw);
    if (f) {
      const url = getCompoundHref(f);
      if (!isBadCompoundUrl(url)) {
        return { url, cluster: "SILO_COMPOUND_PROGRAMMATIC" };
      }
    }
  }

  if (
    k.includes("molecular weight") ||
    k.includes("molecular mass") ||
    k.includes("atomic mass vs") ||
    k.includes("formula mass") ||
    k.includes("mass vs molar mass") ||
    k.includes("molar mass vs") ||
    k.includes("is molar mass the same") ||
    k.includes("is molecular weight the same")
  ) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k.includes("worksheet") || k.includes("practice problem")) {
    return { url: "/faq", cluster: "SILO_FAQ_PRACTICE" };
  }

  if (k.includes("interconverting molar mass and density")) {
    return { url: "/stoichiometry-guide", cluster: "SILO_STOICH_GAS_BRIDGE" };
  }

  if (k.includes("compound has a molar mass")) {
    return { url: "/stoichiometry-guide", cluster: "SILO_STOICH_COMPOSITION" };
  }

  if (
    k.includes("molar mass to moles") ||
    k.includes("moles to molar mass") ||
    k.includes("grams to molar mass") ||
    k.includes("molar mass to grams") ||
    k.includes("molar mass conversion") ||
    k.includes("moles and molar mass")
  ) {
    return { url: "/mole-conversion-guide", cluster: "SILO_MOLE_CONVERSION" };
  }

  if (k.includes("molar mass unit") || k.includes("units of molar mass") || k === "molar mass unit") {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k.includes("molar mass symbol")) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k === "molar mass" || k === "what is the molar mass") {
    return { url: "/", cluster: "SILO_HOME" };
  }

  if (k.includes("molar mass calculator") || k === "molar mass calc" || k.trim() === "calculate molar mass") {
    return { url: "/calculator", cluster: "SILO_CALCULATOR" };
  }

  if (
    k.includes("definition of molar mass") ||
    k.includes("define molar mass") ||
    k === "what is molar mass" ||
    k.includes("molar mass definition") ||
    k.includes("molar mass chemistry definition") ||
    k === "molar mass chemistry"
  ) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k === "molar mass calculation" || k.includes("calculating molar mass")) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k.includes("how to find the molar mass of an element")) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (
    k.includes("how to find molar mass of a compound") ||
    k.includes("how to find the molar mass of a compound") ||
    k.includes("how to calculate molar mass of a compound") ||
    k.includes("how do you find molar mass") ||
    k.includes("how to do molar mass") ||
    k.includes("how to get molar mass") ||
    k.includes("finding molar mass") ||
    k.startsWith("how to find molar mass") ||
    k.startsWith("how to find the molar mass") ||
    k.startsWith("how to calculate molar mass") ||
    k === "how to calculate molar mass"
  ) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  const formula = tryFormulaFromKeyword(raw);
  if (formula) {
    const url = getCompoundHref(formula);
    if (isBadCompoundUrl(url)) {
      return { url: "/faq", cluster: "SILO_FAQ_NOISE" };
    }
    return { url, cluster: "SILO_COMPOUND_PROGRAMMATIC" };
  }

  if (
    k.includes("lab prep") ||
    k.includes("laboratory") ||
    k.includes("weigh") ||
    k.includes("reagent") ||
    k.includes("glassware")
  ) {
    return { url: "/lab-prep-guide", cluster: "SILO_LAB_PREP" };
  }

  if (k.includes("stoichiometry") || k.includes("limiting") || k.includes("yield")) {
    return { url: "/stoichiometry-guide", cluster: "SILO_STOICH" };
  }

  if (k.includes("molar mass equation") || k.includes("molar mass formula")) {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  return { url: "/calculator", cluster: "SILO_CALCULATOR_FALLBACK" };
}

function capUniqueUrls(rows: { keyword: string; url: string; cluster: string }[], maxUnique: number) {
  const uniq = () => new Set(rows.map((r) => r.url)).size;
  if (uniq() <= maxUnique) return rows;

  const freq = new Map<string, number>();
  for (const r of rows) freq.set(r.url, (freq.get(r.url) ?? 0) + 1);

  const rare = [...freq.entries()]
    .filter(([u]) => u.startsWith("/molar-mass-of-"))
    .sort((a, b) => a[1] - b[1]);

  const adjusted = rows.map((r) => ({ ...r }));
  for (const [url, count] of rare) {
    if (uniq() <= maxUnique) break;
    if (count > 1) continue;
    for (const r of adjusted) {
      if (r.url === url) {
        r.url = "/calculator";
        r.cluster = "SILO_CALCULATOR_FALLBACK";
      }
    }
  }
  return adjusted;
}

function boostUniqueUrls(rows: { keyword: string; url: string; cluster: string }[], minUnique: number) {
  const adjusted = rows.map((r) => ({ ...r }));
  let u = new Set(adjusted.map((r) => r.url)).size;
  if (u >= minUnique) return adjusted;

  for (const r of adjusted) {
    if (u >= minUnique) break;
    if (r.url !== "/calculator" || r.cluster !== "SILO_CALCULATOR_FALLBACK") continue;
    const f = tryFormulaFromKeyword(r.keyword);
    if (!f) continue;
    const url = getCompoundHref(f);
    if (isBadCompoundUrl(url)) continue;
    r.url = url;
    r.cluster = "SILO_COMPOUND_PROGRAMMATIC";
    u = new Set(adjusted.map((x) => x.url)).size;
  }
  return adjusted;
}

function main() {
  const text = fs.readFileSync(INPUT, "utf8");
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) throw new Error("empty csv");

  const keywords: string[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]!);
    if (!cols[0]) continue;
    keywords.push(cols[0]!);
  }

  const expanded = expandKeywordList(keywords);

  let rows = expanded.map((keyword) => {
    const { url, cluster } = classify(keyword);
    return { keyword, url, cluster };
  });

  rows = capUniqueUrls(rows, 800);
  rows = boostUniqueUrls(rows, 520);

  const outLines = ["keyword,target_url,cluster"];
  for (const r of rows) {
    outLines.push([csvCell(r.keyword), csvCell(r.url), csvCell(r.cluster)].join(","));
  }
  fs.writeFileSync(OUTPUT, outLines.join("\n") + "\n", "utf8");

  const uniqueUrls = [...new Set(rows.map((r) => r.url))].sort();
  const compoundPages = uniqueUrls.filter((u) => u.startsWith("/molar-mass-of-")).length;
  const corePages = uniqueUrls.filter((u) => !u.startsWith("/molar-mass-of-")).length;
  const faqKeywords = rows.filter((r) => r.url === "/faq").length;

  const urlCounts = new Map<string, number>();
  for (const r of rows) {
    urlCounts.set(r.url, (urlCounts.get(r.url) ?? 0) + 1);
  }
  const top20 = [...urlCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([u, c]) => `${u}\t${c}`);

  const summary = [
    `Total keywords: ${rows.length}`,
    `Total unique URLs: ${uniqueUrls.length}`,
    `Total compound pages: ${compoundPages}`,
    `Total core pages: ${corePages}`,
    `Total mapped to /faq: ${faqKeywords}`,
    "",
    "Top 20 most-used URLs (keyword count):",
    ...top20,
    "",
  ].join("\n");

  fs.writeFileSync(SUMMARY, summary, "utf8");
}

main();
