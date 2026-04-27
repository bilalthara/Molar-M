import type { CompoundEntry } from "@/lib/compound-data";
import { compounds } from "@/lib/compound-data";

const MIN_SINGLE_NEEDLE = 2;

function needlesFromQuery(raw: string): string[] {
  const lower = raw.trim().toLowerCase();
  if (!lower) return [];

  if (/\s+or\s+/i.test(lower)) {
    return lower
      .split(/\s+or\s+/i)
      .flatMap((part) => part.split(",").map((s) => s.trim()))
      .filter((t) => t.length >= 1);
  }

  if (lower.includes(",")) {
    return lower
      .split(",")
      .map((s) => s.trim())
      .filter((t) => t.length >= MIN_SINGLE_NEEDLE);
  }

  return lower.length >= MIN_SINGLE_NEEDLE ? [lower] : [];
}

function compoundMatchesNeedles(entry: CompoundEntry, needles: string[]): boolean {
  const name = entry.name.toLowerCase();
  const formula = entry.formula.toLowerCase();
  return needles.some((needle) => name.includes(needle) || formula.includes(needle));
}

/** Name/formula substring search for calculator autocomplete (OR across comma / "or" segments). */
export function getCompoundSuggestions(raw: string, limit = 60): CompoundEntry[] {
  const needles = needlesFromQuery(raw);
  if (!needles.length) return [];

  const rows = compounds.filter((c) => compoundMatchesNeedles(c, needles));
  rows.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  return rows.slice(0, limit);
}
