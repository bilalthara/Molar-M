import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CompoundProfileView } from "@/components/compound/compound-profile-view";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllProfiles } from "@/lib/chemistry/registry";
import { resolveCompoundBySlug } from "@/lib/chemistry/resolve";
import { compoundMetaDescription, compoundMetaTitle } from "@/lib/seo/meta";
import { breadcrumbSchema, compoundSchema, faqSchema } from "@/lib/seo/schema";
import { SITE_NAME } from "@/lib/site-config";

type CompoundRouteProps = {
  params: Promise<{ slug?: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProfiles().map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: CompoundRouteProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Not found" };
  const resolved = resolveCompoundBySlug(slug);
  if (!resolved) return { title: "Not found", robots: { index: false, follow: false } };

  const { profile, calculation } = resolved;
  const title = compoundMetaTitle(profile.name, profile.formula);
  const description = compoundMetaDescription(profile.name, profile.formula, calculation.molarMass);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/${profile.slug}` },
    openGraph: {
      title,
      description,
      url: `/${profile.slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: "/logo-light-v2.png", width: 944, height: 179, alt: `${SITE_NAME} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo-light-v2.png"],
    },
  };
}

export default async function CompoundSlugPage({ params }: CompoundRouteProps) {
  const { slug } = await params;
  if (!slug) notFound();
  const resolved = resolveCompoundBySlug(slug);
  if (!resolved) notFound();

  const { profile, calculation } = resolved;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compounds", path: "/compounds" },
            { name: `Molar Mass of ${profile.name}`, path: `/${profile.slug}` },
          ]),
          compoundSchema(profile, calculation),
          faqSchema(profile.faqs),
        ]}
      />
      <CompoundProfileView profile={profile} calculation={calculation} />
    </>
  );
}
