import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { FormulaSub } from "@/components/ui/formula-sub";
import { compounds, getCompoundHref } from "@/lib/compound-data";
import type { CompoundEntry } from "@/lib/compound-data";

function buildFeaturedColumns(all: CompoundEntry[]) {
  const by = (k: CompoundEntry["category"]) => all.filter((c) => c.category === k);
  const gas = by("gas");
  const acid = by("acid");
  const base = by("base");
  const salt = by("salt");
  const org = by("organic");
  const saltMore = salt.length > 6 ? salt.slice(6, 12) : gas.slice(0, 6);
  const orgMore = org.length > 6 ? org.slice(6, 12) : acid.slice(0, 6);
  const compact = [...all].sort((a, b) => a.formula.length - b.formula.length).slice(0, 6);

  return [
    { title: "Gases", compounds: gas.slice(0, 6) },
    { title: "Acids", compounds: acid.slice(0, 6) },
    { title: "Bases", compounds: base.slice(0, 6) },
    { title: "Salts", compounds: salt.slice(0, 6) },
    { title: "More salts", compounds: saltMore },
    { title: "Organic", compounds: org.slice(0, 6) },
    { title: "Heavier organics", compounds: orgMore },
    { title: "Compact formulas", compounds: compact },
  ];
}

const featuredColumns = buildFeaturedColumns(compounds);

export function FeaturedCompoundsList() {
  return (
    <Reveal>
      <Card className="border-slate-200/90 bg-white">
        <CardContent className="px-4 pb-8 pt-8 sm:px-5 sm:pb-8 sm:pt-8">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-3 text-base leading-relaxed md:grid-cols-2">
            {featuredColumns.flatMap((group) => group.compounds).slice(0, 36).map((compound) => (
              <li key={`featured-${compound.slug}`}>
                <Link
                  className="inline-flex items-center gap-2 text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                  href={getCompoundHref(compound.formula)}
                  prefetch={false}
                >
                  {compound.name} (<FormulaSub formula={compound.formula} />) <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Reveal>
  );
}
