/**
 * One-off: reads data/extracted-keywords.txt → writes data/keyword-full-mapping.csv
 * Run: npx --yes tsx scripts/map-keywords.ts
 */
import fs from "node:fs";
import path from "node:path";

import { getCompoundHref, resolveFormulaFromKeyword } from "../lib/compound-data";
import { calculateMolarMass } from "../lib/molar-mass";

const ROOT = path.join(__dirname, "..");
const INPUT = path.join(ROOT, "data", "extracted-keywords.txt");
const OUTPUT = path.join(ROOT, "data", "keyword-full-mapping.csv");

function csvCell(s: string) {
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function normalizeLoose(k: string) {
  return k
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/â·/g, "·");
}

function stripTrailingMcq(s: string) {
  let t = s.replace(/\?.*$/, "").trim();
  t = t.replace(/\s+\d+\.\d+\s+g\/mol.*$/i, "").trim();
  t = t.replace(/\s+\d+\.\d+\s*$/i, "").trim();
  return t;
}

function tryFormulaFromKeyword(raw: string): string | null {
  const k = normalizeLoose(stripTrailingMcq(raw));

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
    if (calc) return calc.formula;
  }
  return null;
}

function classify(keyword: string): { url: string; cluster: string } {
  const k = normalizeLoose(keyword);

  if (!k) return { url: "/", cluster: "SILO_HOME" };

  if (k.includes("wikipedia")) return { url: "/faq", cluster: "SILO_FAQ_REFERENCE_NOISE" };

  if (k.includes("periodic table") || k.includes("molar mass chart") || k.includes("molar mass on periodic table")) {
    return { url: "/periodic-table-masses", cluster: "SILO_PERIODIC" };
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
    return { url: "/faq", cluster: "SILO_FAQ_COMPARE" };
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
    return { url: "/faq", cluster: "SILO_FAQ_UNITS" };
  }

  if (k.includes("molar mass symbol")) {
    return { url: "/faq", cluster: "SILO_FAQ_SYMBOL" };
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
    return { url: "/faq", cluster: "SILO_FAQ_DEFINITION" };
  }

  if (k === "molar mass calculation" || k.includes("calculating molar mass") || k === "calculate molar mass") {
    return { url: "/", cluster: "SILO_HOME_GUIDE" };
  }

  if (k.includes("how to find the molar mass of an element")) {
    return { url: "/periodic-table-masses", cluster: "SILO_PERIODIC" };
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

  const formula = tryFormulaFromKeyword(keyword);
  if (formula) {
    return { url: getCompoundHref(formula), cluster: "SILO_COMPOUND_PROGRAMMATIC" };
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

function main() {
  const lines = fs
    .readFileSync(INPUT, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const rows = ["keyword,target_url,cluster"];
  for (const keyword of lines) {
    const { url, cluster } = classify(keyword);
    rows.push([csvCell(keyword), csvCell(url), csvCell(cluster)].join(","));
  }
  fs.writeFileSync(OUTPUT, rows.join("\n") + "\n", "utf8");
  console.log(`Wrote ${lines.length} rows → ${OUTPUT}`);
}

main();
