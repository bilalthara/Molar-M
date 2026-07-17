import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { articles, getArticleBySlug } from "@/data/learning/articles";
import { clampMeta } from "@/lib/seo/meta";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { SITE_NAME } from "@/lib/site-config";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  const title = clampMeta(article.title, 60);
  const description = clampMeta(article.summary, 155);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title,
      description,
      url: `/articles/${article.slug}`,
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
            { name: article.title, path: `/articles/${article.slug}` },
          ]),
          articleSchema({
            title: article.title,
            description: article.summary,
            path: `/articles/${article.slug}`,
          }),
        ]}
      />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/articles" className="no-underline hover:text-brand">
            Articles
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>
        <p className="text-sm font-semibold text-brand">
          {article.topic} · {article.readingTime}
        </p>
        <h1 className="mt-2 text-4xl text-foreground sm:text-5xl">{article.title}</h1>
        <p className="mt-4 text-lg text-muted">{article.summary}</p>
        <div className="prose-chem mt-10 space-y-5 text-muted">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10 text-muted">
          Continue with the <Link href="/calculator">molar mass calculator</Link>,{" "}
          <Link href="/learn">learning guides</Link>, or <Link href="/compounds">compound library</Link>.
        </p>
      </main>
    </>
  );
}
