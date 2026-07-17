import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuidePdfButton } from "@/components/downloads/page-pdf-buttons";
import { JsonLd } from "@/components/seo/json-ld";
import { getGuideBySlug, learningGuides } from "@/data/learning/guides";
import { compoundHref } from "@/lib/chemistry/format";
import { getProfileBySlug } from "@/lib/chemistry/registry";
import { clampMeta } from "@/lib/seo/meta";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_NAME } from "@/lib/site-config";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learningGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Not found" };
  const title =
    guide.slug === "what-is-molar-mass"
      ? "What Is Molar Mass? Complete Beginner's Guide"
      : clampMeta(guide.title, 60);
  const description = clampMeta(guide.summary, 155);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/learn/${guide.slug}` },
    openGraph: {
      title,
      description,
      url: `/learn/${guide.slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: "/logo-light-v2.png", alt: `${SITE_NAME} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo-light-v2.png"],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = learningGuides.filter((g) => g.slug !== guide.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: guide.title, path: `/learn/${guide.slug}` },
          ]),
          articleSchema({
            title: guide.title,
            description: guide.summary,
            path: `/learn/${guide.slug}`,
          }),
        ]}
      />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/learn" className="no-underline hover:text-brand">
            Learning center
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{guide.title}</span>
        </nav>
        <p className="text-sm font-semibold text-brand">{guide.readingTime} read</p>
        <h1 className="mt-2 text-4xl text-foreground sm:text-5xl">{guide.title}</h1>
        <p className="mt-4 text-lg text-muted">{guide.summary}</p>
        <div className="mt-4">
          <GuidePdfButton guide={guide} />
        </div>
        <div className="mt-10 space-y-8">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl text-foreground">{section.heading}</h2>
              <div className="prose-chem mt-3 space-y-3 text-muted">
                {section.body.split(/\n\n+/).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        {guide.relatedSlugs && guide.relatedSlugs.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl text-foreground">Related compounds</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {guide.relatedSlugs.map((compoundSlug) => {
                const profile = getProfileBySlug(compoundSlug);
                if (!profile) return null;
                return (
                  <li key={compoundSlug}>
                    <Link href={compoundHref(compoundSlug)} className="no-underline hover:text-brand">
                      Molar mass of {profile.name} ({profile.formula})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <section className="mt-10">
          <h2 className="text-2xl text-foreground">Related guides</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link href={`/learn/${g.slug}`} className="no-underline hover:text-brand">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            Also try the <Link href="/calculator">molar mass calculator</Link> and{" "}
            <Link href="/periodic-table">periodic table</Link>.
          </p>
        </section>
        <p className="mt-10 text-sm text-muted">
          Standards: <Link href="/how-we-calculate">how we calculate</Link> ·{" "}
          <Link href="/editorial-policy">editorial policy</Link>
        </p>
      </main>
    </>
  );
}
