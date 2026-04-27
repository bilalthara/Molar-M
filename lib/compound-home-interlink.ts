import type { CompoundEntry } from "@/lib/compound-data";

export type CompoundHomeInterlinkPlacement =
  | "steps"
  | "remember"
  | "reactions"
  | "facts"
  | "why-matters"
  | "where-used"
  | "common-mistakes"
  | "quick-revision"
  | "formula"
  | "conclusion";

const PLACEMENTS: CompoundHomeInterlinkPlacement[] = [
  "steps",
  "remember",
  "reactions",
  "facts",
  "why-matters",
  "where-used",
  "common-mistakes",
  "quick-revision",
  "formula",
  "conclusion",
];

const ANCHOR_TEXTS = ["molar mass", "molar mass page", "molar mass calculations", "molar mass guide"] as const;

function hashCanonicalSlug(slug: string): number {
  let n = 0;
  for (let i = 0; i < slug.length; i++) {
    n = (n * 33 + slug.charCodeAt(i)) >>> 0;
  }
  return n;
}

export function getCompoundPageHomeInterlink(compound: Pick<CompoundEntry, "canonicalSlug">): {
  placement: CompoundHomeInterlinkPlacement;
  anchorText: (typeof ANCHOR_TEXTS)[number];
} {
  const h = hashCanonicalSlug(compound.canonicalSlug);
  return {
    placement: PLACEMENTS[h % PLACEMENTS.length] ?? "conclusion",
    anchorText: ANCHOR_TEXTS[(h >>> 5) % ANCHOR_TEXTS.length] ?? "molar mass calculator",
  };
}
