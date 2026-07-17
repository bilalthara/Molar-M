import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Formula } from "@/components/ui/formula";
import { InstantSearch } from "@/components/search/instant-search";
import { categoryLabel, compoundHref, formatMolarMass } from "@/lib/chemistry/format";
import { getAllProfiles } from "@/lib/chemistry/registry";
import { calculateMolarMass } from "@/lib/molar-mass";
import { CATEGORY_LINKS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Compound Library: 50 Chemistry Profiles",
  description:
    "Browse molar mass calculations, properties, reactions, and study notes for water, NaCl, H2SO4, and other key compounds.",
  alternates: { canonical: "/compounds" },
};

export default function CompoundsPage() {
  const profiles = getAllProfiles().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl text-foreground sm:text-5xl">Compound library</h1>
        <p className="mt-3 text-lg text-muted">
          Fifty curated chemistry profiles with molar mass calculations, properties, reactions, practice questions, and
          downloadable study sheets. Use the calculator for any other formula.
        </p>
        <div className="mt-6">
          <InstantSearch />
        </div>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORY_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-border bg-surface px-3 py-2 text-sm font-semibold no-underline hover:border-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => {
          const mass = calculateMolarMass(profile.formula)?.molarMass;
          return (
            <li key={profile.slug}>
              <Link
                href={compoundHref(profile.slug)}
                className="surface-card flex h-full flex-col rounded-2xl p-5 no-underline transition-transform hover:-translate-y-0.5"
              >
                <Badge tone="brand">{categoryLabel(profile.category)}</Badge>
                <h2 className="mt-3 text-xl text-foreground">{profile.name}</h2>
                <p className="mt-1 text-muted">
                  <Formula value={profile.formula} />
                  {mass ? ` · ${formatMolarMass(mass)}` : null}
                </p>
                <p className="mt-3 line-clamp-3 text-sm text-muted">{profile.overview}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
