import type { Metadata } from "next";
import Link from "next/link";

import { learningGuides } from "@/data/learning/guides";

export const metadata: Metadata = {
  title: "Chemistry Learning Guides for Students",
  description:
    "Guides on molar mass, stoichiometry, the mole concept, and common calculation mistakes for students and teachers.",
  alternates: { canonical: "/learn" },
};

export default function LearnIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Chemistry learning center</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Concept-first guides that explain why molar mass matters—then show how to calculate it correctly.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {learningGuides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/learn/${guide.slug}`}
              className="surface-card block h-full rounded-2xl p-6 no-underline hover:border-brand"
            >
              <p className="text-xs font-semibold tracking-wide text-brand uppercase">{guide.readingTime}</p>
              <h2 className="mt-2 text-2xl text-foreground">{guide.title}</h2>
              <p className="mt-2 text-muted">{guide.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
