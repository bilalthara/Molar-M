import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/learning/articles";

export const metadata: Metadata = {
  title: "Chemistry Articles on Molar Mass & Lab Work",
  description:
    "Educational chemistry articles on molar mass in the lab, percent composition, industrial chemistry, and more.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Chemistry articles</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Longer reading on laboratory practice, industrial chemistry, and how molar mass connects formulas to real
        measurements.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="surface-card block h-full rounded-2xl p-6 no-underline hover:border-brand"
            >
              <Badge>{article.topic}</Badge>
              <h2 className="mt-3 text-2xl text-foreground">{article.title}</h2>
              <p className="mt-2 text-muted">{article.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
