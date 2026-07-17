import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Formula } from "@/components/ui/formula";
import { JsonLd } from "@/components/seo/json-ld";
import { categoryLabel, compoundHref, formatMolarMass } from "@/lib/chemistry/format";
import { getProfilesByCategory } from "@/lib/chemistry/registry";
import type { CompoundCategory } from "@/lib/chemistry/types";
import { calculateMolarMass } from "@/lib/molar-mass";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";
import { CATEGORY_LINKS } from "@/lib/site-config";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

const slugToCategory: Record<string, CompoundCategory> = {
  acids: "acid",
  bases: "base",
  salts: "salt",
  oxides: "oxide",
  organic: "organic",
  gases: "gas",
  hydrocarbons: "hydrocarbon",
  inorganic: "inorganic",
};

const categoryEducation: Record<
  string,
  { headline: string; body: string; studyPath: string }
> = {
  acids: {
    headline: "Acids: proton donors and molar mass in solution chemistry",
    body: `Strong acids such as hydrochloric acid (HCl) and sulfuric acid (H₂SO₄) fully dissociate in water, while weak acids such as acetic acid (C₂H₄O₂), citric acid, and phosphoric acid (H₃PO₄) establish equilibria. Molar mass converts grams of acid into moles for titration, normality, and buffer preparation. Hydrofluoric acid (HF) is a special case: it is a weak acid chemically but extremely hazardous because fluoride binds calcium.`,
    studyPath: "Compare HCl vs HF for acid strength versus hazard, and H₂SO₄ vs H₃PO₄ for diprotic vs triprotic stoichiometry.",
  },
  bases: {
    headline: "Bases: hydroxide chemistry from lab reagents to industry",
    body: `Sodium hydroxide (NaOH) and potassium hydroxide (KOH) are strong bases from the chlor-alkali family of chemistry. Calcium hydroxide (Ca(OH)₂) is slaked lime—central to mortar and water treatment. Ammonia (NH₃) is a weak base whose conjugate acid NH₄⁺ appears in ammonium chloride. Accurate molar masses matter when preparing standard bases and when back-titrating with primary standards such as KHP.`,
    studyPath: "Link NaOH to the chlor-alkali process with NaCl, and compare NaOH vs KOH solubility and soap chemistry.",
  },
  salts: {
    headline: "Salts: ionic compounds for labs, medicine, and materials",
    body: `Salts such as NaCl, KCl, CaCl₂, and MgCl₂ illustrate ionic lattices and mole-to-gram conversion. Silver nitrate (AgNO₃) drives precipitation and Tollens chemistry; copper(II) sulfate teaches hydrate mass (CuSO₄·5H₂O). Carbonates and bicarbonates (CaCO₃, Na₂CO₃, NaHCO₃) connect acid reactions to CO₂ release. Fertilizer salts (KNO₃, NH₄Cl, Na₃PO₄, Ca₃(PO₄)₂) show real industrial stoichiometry.`,
    studyPath: "Practice hydrate problems with CuSO₄ and primary-standard titrations with KHC₈H₄O₄ (KHP).",
  },
  oxides: {
    headline: "Oxides: from atmospheric gases to refractory ceramics",
    body: `Carbon dioxide (CO₂) and sulfur dioxide (SO₂) are molecular oxides with climate and acid-rain importance. Magnesium oxide (MgO) is an ionic refractory oxide used as magnesia. Water (H₂O) is the oxide of hydrogen and the reference solvent for almost every aqueous molarity calculation on this site.`,
    studyPath: "Contrast CO vs CO₂ oxidation chemistry, and connect SO₂ to sulfuric acid manufacturing.",
  },
  organic: {
    headline: "Organic compounds: functional groups and formula mass",
    body: `Alcohols (methanol CH₃OH, ethanol C₂H₆O, ethylene glycol C₂H₆O₂), carbonyl solvents (acetone C₃H₆O), carboxylic acids (acetic, citric, salicylic), sugars (glucose, sucrose), and pharmaceuticals (aspirin C₉H₈O₄) show how carbon frameworks still reduce to atom counts for molar mass. Urea (CH₄N₂O) is the classic bridge between inorganic and organic synthesis history.`,
    studyPath: "Compare methanol vs ethanol toxicity, glucose vs sucrose hydrolysis, and salicylic acid vs aspirin acetylation.",
  },
  gases: {
    headline: "Gases: molar mass meets the ideal gas law",
    body: `Methane, propane, butane, CO, CO₂, SO₂, NO, NH₃, and HCl(g) appear in combustion, atmosphere, and industrial synthesis problems. Gas density problems need molar mass: denser gases than air have higher M. Always distinguish formula mass of the molecule (CO vs CO₂) from elemental atomic mass.`,
    studyPath: "Use CH₄, C₃H₈, and C₄H₁₀ for fuel stoichiometry; use CO vs CO₂ for oxidation-state comparisons.",
  },
  hydrocarbons: {
    headline: "Hydrocarbons: fuels, solvents, and homologous series",
    body: `Methane, propane, butane, hexane, octane, and benzene form a ladder from natural gas to gasoline to aromatic feedstocks. Molar mass rises with chain length, changing boiling point and fuel energy per mole. Benzene’s aromaticity changes reactivity, not the atom-counting rules for molar mass.`,
    studyPath: "Compare C₃H₈ vs C₄H₁₀ for LPG, C₈H₁₈ for octane rating context, and C₆H₆ for aromatic chemistry.",
  },
  inorganic: {
    headline: "Inorganic compounds: the core of school and lab chemistry",
    body: `This hub collects inorganic acids, bases, salts, and oxides with full educational profiles—water, mineral acids, alkali hydroxides, and industrial salts. Use it as a syllabus map: each profile teaches calculation plus compound-specific chemistry.`,
    studyPath: "Start with H₂O and NaCl for fundamentals, then H₂SO₄ and NaOH for industrial stoichiometry.",
  },
};

export function generateStaticParams() {
  return Object.keys(slugToCategory).map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const key = slugToCategory[category];
  if (!key) return { title: "Not found" };
  const label = categoryLabel(key);
  const edu = categoryEducation[category];
  return {
    title: `${label} Compounds & Molar Mass`,
    description: clampDesc(
      edu?.body ??
        `Study molar mass, properties, and reactions for ${label.toLowerCase()} compounds with worked calculations and practice.`,
    ),
    alternates: { canonical: `/compounds/${category}` },
  };
}

function clampDesc(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 155) return clean;
  const sliced = clean.slice(0, 154);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const key = slugToCategory[category];
  if (!key) notFound();

  const profiles = getProfilesByCategory(key);
  const meta = CATEGORY_LINKS.find((link) => link.href === `/compounds/${category}`);
  const edu = categoryEducation[category];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compounds", path: "/compounds" },
            { name: meta?.label ?? categoryLabel(key), path: `/compounds/${category}` },
          ]),
          collectionPageSchema({
            name: `${meta?.label ?? categoryLabel(key)} compounds`,
            description:
              edu?.headline ??
              `Molar mass profiles for ${categoryLabel(key).toLowerCase()} compounds.`,
            path: `/compounds/${category}`,
          }),
        ]}
      />
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/compounds" className="no-underline hover:text-brand">
          Compounds
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-foreground">{meta?.label ?? categoryLabel(key)}</span>
      </nav>
      <h1 className="text-4xl text-foreground sm:text-5xl">{meta?.label ?? categoryLabel(key)} compounds</h1>
      {edu ? (
        <div className="mt-4 max-w-3xl space-y-3 text-muted">
          <p className="text-lg text-foreground">{edu.headline}</p>
          <p>{edu.body}</p>
          <p className="text-sm">{edu.studyPath}</p>
        </div>
      ) : (
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Study molar mass, properties, and reactions for compounds in this category.
        </p>
      )}
      {profiles.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-border bg-surface px-5 py-8 text-muted">
          No profiles in this category yet. Try the <Link href="/calculator">calculator</Link> or browse the{" "}
          <Link href="/compounds">compound library</Link>.
        </p>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => {
            const mass = calculateMolarMass(profile.formula)?.molarMass;
            return (
              <li key={profile.slug}>
                <Link
                  href={compoundHref(profile.slug)}
                  className="surface-card block rounded-2xl p-5 no-underline hover:border-brand"
                >
                  <Badge>{categoryLabel(profile.category)}</Badge>
                  <h2 className="mt-3 text-xl text-foreground">{profile.name}</h2>
                  <p className="mt-1 text-muted">
                    <Formula value={profile.formula} />
                    {mass ? ` · ${formatMolarMass(mass)}` : null}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
    </>
  );
}
