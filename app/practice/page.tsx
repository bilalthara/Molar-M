import type { Metadata } from "next";
import Link from "next/link";

import { PracticePackPdfButton } from "@/components/downloads/page-pdf-buttons";
import { Formula } from "@/components/ui/formula";
import { compoundHref } from "@/lib/chemistry/format";
import { getPopularProfiles } from "@/lib/chemistry/registry";

export const metadata: Metadata = {
  title: "Molar Mass Practice Problems & Worksheets",
  description:
    "Practice molar mass and stoichiometry with compound-specific questions, hints, and answers for classroom compounds.",
  alternates: { canonical: "/practice" },
};

export default function PracticePage() {
  const profiles = getPopularProfiles();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Practice worksheets</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Each compound profile includes practice questions with hints and answers. Start with popular classroom
        compounds, then explore the full library.
      </p>
      <div className="mt-6">
        <PracticePackPdfButton />
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <li key={profile.slug}>
            <Link
              href={`${compoundHref(profile.slug)}#practice`}
              className="surface-card block rounded-2xl p-5 no-underline hover:border-brand"
            >
              <h2 className="text-xl text-foreground">{profile.name}</h2>
              <p className="mt-1 text-muted">
                <Formula value={profile.formula} /> · {profile.practiceQuestions.length} questions
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-muted">
        Prefer a guided lesson first? Visit the{" "}
        <Link href="/learn/how-to-calculate-molar-mass">calculation guide</Link>.
      </p>
    </main>
  );
}
