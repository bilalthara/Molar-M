import type { MetadataRoute } from "next";

import { getStaticCompounds } from "@/lib/compound-data";

const BASE_URL = "https://molarmass.app";
const SITEMAP_CHUNK_SIZE = 4500;

function toNameSlug(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.toLowerCase())
    .join("-")
    .replace(/[^A-Za-z0-9-]/g, "");
}

export async function generateSitemaps() {
  const compounds = getStaticCompounds();
  const totalCompoundMaps = Math.ceil(compounds.length / SITEMAP_CHUNK_SIZE);
  const totalSitemaps = Math.max(totalCompoundMaps, 1);
  return Array.from({ length: totalSitemaps }, (_entry, id) => ({ id }));
}

export default async function sitemap({
  id,
}: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const chunkId = Number(await id);
  const compounds = getStaticCompounds();
  const from = chunkId * SITEMAP_CHUNK_SIZE;
  const to = from + SITEMAP_CHUNK_SIZE;
  const chunk = compounds.slice(from, to);
  const now = new Date();

  const compoundUrls: MetadataRoute.Sitemap = chunk.map((compound) => ({
    url: `${BASE_URL}/molar-mass-of-${toNameSlug(compound.name)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  if (chunkId === 0) {
    const staticPages: MetadataRoute.Sitemap = [
      { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
      { url: `${BASE_URL}/calculator`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${BASE_URL}/browse`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
      { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/stoichiometry-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/mole-conversion-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/periodic-table-masses`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/periodic-table-with-molar-mass`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
      { url: `${BASE_URL}/molar-mass-list-top-500`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
      { url: `${BASE_URL}/organic-compounds-molar-mass`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}/inorganic-compounds-molar-mass`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}/acids-molar-mass-list`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}/bases-molar-mass-list`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}/salts-molar-mass-list`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}/lab-prep-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
      { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
      { url: `${BASE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
      { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
      { url: `${BASE_URL}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
      { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    ];
    return [...staticPages, ...compoundUrls];
  }

  return compoundUrls;
}

