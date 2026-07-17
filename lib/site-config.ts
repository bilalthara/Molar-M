/** Canonical production origin (no trailing slash). */
export const SITE_URL = "https://www.molarmasslab.com";

export const SITE_NAME = "Molar Mass Lab";

export const SITE_TAGLINE =
  "Calculate molar mass accurately and learn the chemistry behind every formula";

export const SITE_DESCRIPTION =
  "Calculate molar mass from chemical formulas and study compound properties, reactions, stoichiometry, and laboratory methods with clear educational explanations.";

export const NAV_LINKS = [
  { href: "/calculator", label: "Calculator" },
  { href: "/periodic-table", label: "Periodic Table" },
  { href: "/compounds", label: "Compounds" },
  { href: "/learn", label: "Learn" },
  { href: "/practice", label: "Practice" },
] as const;

export const CATEGORY_LINKS = [
  { href: "/compounds/acids", label: "Acids", category: "acid" as const },
  { href: "/compounds/bases", label: "Bases", category: "base" as const },
  { href: "/compounds/salts", label: "Salts", category: "salt" as const },
  { href: "/compounds/oxides", label: "Oxides", category: "oxide" as const },
  { href: "/compounds/organic", label: "Organic", category: "organic" as const },
  { href: "/compounds/gases", label: "Gases", category: "gas" as const },
  { href: "/compounds/hydrocarbons", label: "Hydrocarbons", category: "hydrocarbon" as const },
] as const;
