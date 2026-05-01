import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { CompoundPage } from "@/components/sections/compound-page";
import { StructuredData } from "@/components/sections/structured-data";
import { getCompoundData, getPriorityStaticFormulaParams } from "@/lib/compound-data";

type CompoundRouteProps = {
  params: Promise<{ slug?: string }>;
};

function normalizePath(raw: string) {
  return raw.replace(/^\/+/, "");
}

function isInvalidGeneratedName(name: string) {
  return /^\d/.test(name.trim());
}

function isBlockedSyntheticPattern(name: string) {
  return /^Carboxylic Acid C\d+$/i.test(name.trim());
}

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getPriorityStaticFormulaParams(1000).map((entry) => ({ slug: entry.formula }));
}

export async function generateMetadata({ params }: CompoundRouteProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }
  const normalized = normalizePath(slug);
  if (!normalized.toLowerCase().startsWith("molar-mass-of-")) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }
  const compound = getCompoundData(normalized);
  if (!compound) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }
  if (isInvalidGeneratedName(compound.name) || isBlockedSyntheticPattern(compound.name)) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }
  const suffix = " – Calculation & Value";
  const baseTitle = `Molar Mass of ${compound.name} (${compound.formula})`;
  const fullTitle = `${baseTitle}${suffix}`;
  const finalTitle = fullTitle.length > 60 ? baseTitle : fullTitle;
  return {
    title: finalTitle,
    description: `Find the molar mass of ${compound.name} (${compound.formula}) with step-by-step calculation, formula, and exact value for accurate chemistry results.`,
    alternates: { canonical: `/${compound.canonicalSlug}` },
  };
}

export default async function CompoundSlugPage({ params }: CompoundRouteProps) {
  const { slug } = await params;
  if (!slug) notFound();
  const normalized = normalizePath(slug);
  if (!normalized.toLowerCase().startsWith("molar-mass-of-")) {
    notFound();
  }
  const compound = getCompoundData(normalized);
  if (!compound) notFound();
  if (isInvalidGeneratedName(compound.name) || isBlockedSyntheticPattern(compound.name)) notFound();

  if (normalized.toLowerCase() !== compound.canonicalSlug.toLowerCase()) {
    permanentRedirect(`/${compound.canonicalSlug}`);
  }

  return (
    <>
      <StructuredData compound={compound} />
      <CompoundPage compound={compound} />
    </>
  );
}
