import { compoundProfiles } from "@/data/compounds";
import type { CompoundCategory, CompoundProfile } from "@/lib/chemistry/types";

function normalizeFormula(formula: string): string {
  return formula.replace(/\s/g, "").toLowerCase();
}

function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

export function getAllProfiles(): CompoundProfile[] {
  return [...compoundProfiles];
}

export function getProfileBySlug(slug: string): CompoundProfile | undefined {
  return compoundProfiles.find((profile) => profile.slug === slug);
}

export function getProfileByFormula(formula: string): CompoundProfile | undefined {
  const normalized = normalizeFormula(formula);
  return compoundProfiles.find(
    (profile) => normalizeFormula(profile.formula) === normalized,
  );
}

export function getFeaturedProfiles(): CompoundProfile[] {
  return compoundProfiles.filter((profile) => profile.featured);
}

export function getPopularProfiles(): CompoundProfile[] {
  return compoundProfiles.filter((profile) => profile.popular);
}

export function getProfilesByCategory(
  category: CompoundCategory,
): CompoundProfile[] {
  return compoundProfiles.filter(
    (profile) =>
      profile.category === category || profile.categories.includes(category),
  );
}

export function getRelatedProfiles(profile: CompoundProfile): CompoundProfile[] {
  const related = new Set<string>();

  for (const formula of profile.relatedFormulas) {
    const match = getProfileByFormula(formula);
    if (match && match.slug !== profile.slug) {
      related.add(match.slug);
    }
  }

  return compoundProfiles.filter((p) => related.has(p.slug));
}

export function searchProfiles(query: string): CompoundProfile[] {
  const q = normalizeQuery(query);
  if (!q) return [];

  return compoundProfiles.filter((profile) => {
    const fields = [
      profile.name,
      profile.formula,
      profile.iupacName,
      ...profile.commonNames,
      ...profile.aliases,
    ];

    return fields.some((field) => normalizeQuery(field).includes(q));
  });
}
