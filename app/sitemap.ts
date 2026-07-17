import type { MetadataRoute } from "next";

import { articles } from "@/data/learning/articles";
import { learningGuides } from "@/data/learning/guides";
import { getAllProfiles } from "@/lib/chemistry/registry";
import { CATEGORY_LINKS, SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/calculator",
    "/periodic-table",
    "/compounds",
    "/learn",
    "/practice",
    "/articles",
    "/reference",
    "/about-us",
    "/contact-us",
    "/faq",
    "/editorial-policy",
    "/content-review",
    "/accuracy",
    "/fact-checking",
    "/how-we-calculate",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const compounds = getAllProfiles().map((profile) => ({
    url: `${SITE_URL}/${profile.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: profile.featured || profile.popular ? 0.9 : 0.8,
  }));

  const categories = CATEGORY_LINKS.map((link) => ({
    url: `${SITE_URL}${link.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guides = learningGuides.map((guide) => ({
    url: `${SITE_URL}/learn/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...compounds, ...categories, ...guides, ...articleRoutes];
}
