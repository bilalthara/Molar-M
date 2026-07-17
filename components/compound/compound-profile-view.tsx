import Link from "next/link";

import { MassBreakdownChart } from "@/components/charts/mass-breakdown-chart";
import { BeginnerCalculation } from "@/components/compound/beginner-calculation";
import { CompoundActions } from "@/components/compound/compound-actions";
import { CompoundConceptDiagram } from "@/components/compound/concept-diagram";
import { OnThisPage } from "@/components/compound/on-this-page";
import { CompoundPdfDownloads } from "@/components/downloads/compound-pdf-downloads";
import { FaqAccordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Formula } from "@/components/ui/formula";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { categoryLabel, compoundHref, formatMolarMass } from "@/lib/chemistry/format";
import { getRelatedProfiles } from "@/lib/chemistry/registry";
import type { CompoundProfile } from "@/lib/chemistry/types";
import type { FormulaResult } from "@/lib/molar-mass";

type CompoundProfileViewProps = {
  profile: CompoundProfile;
  calculation: FormulaResult;
};

/** Search-intent order: answer and calculation first; deep chemistry last. */
const toc = [
  { id: "answer", label: "Quick answer" },
  { id: "calculation", label: "Step-by-step" },
  { id: "breakdown", label: "Contribution table" },
  { id: "chart", label: "Mass chart" },
  { id: "downloads", label: "Downloads" },
  { id: "practice-calc", label: "Practice calculation" },
  { id: "properties", label: "Properties" },
  { id: "applications", label: "Applications" },
  { id: "reactions", label: "Reactions" },
  { id: "history", label: "History" },
  { id: "safety", label: "Safety" },
  { id: "learn", label: "Exam notes" },
  { id: "practice", label: "Practice questions" },
  { id: "related", label: "Related compounds" },
  { id: "faq", label: "FAQ" },
  { id: "overview", label: "In-depth chemistry" },
  { id: "references", label: "References" },
];

const LEARNING_LINKS = [
  { href: "/learn/how-to-calculate-molar-mass", label: "How to calculate molar mass" },
  { href: "/learn/mole-concept", label: "The mole concept" },
  { href: "/learn/stoichiometry-basics", label: "Stoichiometry basics" },
  { href: "/learn/molarity-molality-normality", label: "Molarity and solution calculations" },
  { href: "/learn/common-molar-mass-mistakes", label: "Common calculation mistakes" },
  { href: "/how-we-calculate", label: "Our calculation standards" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 min-w-0">
      <Card className="min-w-0 overflow-hidden">
        <CardHeader className="gap-2 px-4 pt-4 sm:px-6 sm:pt-6">
          <h2 className="text-lg text-foreground sm:text-xl md:text-2xl">{title}</h2>
        </CardHeader>
        <CardContent className="prose-chem space-y-4 px-4 pb-4 pt-3 text-[15px] leading-relaxed text-muted sm:px-6 sm:pb-6 sm:pt-4 sm:text-base">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}

export function CompoundProfileView({ profile, calculation }: CompoundProfileViewProps) {
  const related = getRelatedProfiles(profile);
  const categoryHref =
    profile.category === "acid"
      ? "/compounds/acids"
      : profile.category === "base"
        ? "/compounds/bases"
        : profile.category === "salt"
          ? "/compounds/salts"
          : profile.category === "oxide"
            ? "/compounds/oxides"
            : profile.category === "organic"
              ? "/compounds/organic"
              : profile.category === "gas"
                ? "/compounds/gases"
                : profile.category === "hydrocarbon"
                  ? "/compounds/hydrocarbons"
                  : "/compounds";

  return (
    <article className="mx-auto w-full max-w-6xl min-w-0 px-4 py-6 sm:px-6 sm:py-10">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted sm:mb-6">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="no-underline hover:text-brand">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/compounds" className="no-underline hover:text-brand">
              Compounds
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="min-w-0 break-words text-foreground">{profile.name}</li>
        </ol>
      </nav>

      <header
        id="answer"
        className="animate-rise scroll-mt-24 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow)] sm:rounded-3xl sm:p-8"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="brand">{categoryLabel(profile.category)}</Badge>
          {profile.categories
            .filter((c) => c !== profile.category)
            .map((c) => (
              <Badge key={c}>{categoryLabel(c)}</Badge>
            ))}
        </div>
        <h1 className="mt-3 text-[1.65rem] leading-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
          Molar Mass of {profile.name} (<Formula value={profile.formula} />)
        </h1>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Learn how chemists calculate the molar mass of {profile.name} (
          <Formula value={profile.formula} className="font-semibold text-foreground sm:text-xl" />
          ), with a clear formula breakdown, worked steps, and study notes
          {profile.iupacName !== profile.name ? (
            <span>
              {" "}
              · IUPAC name: {profile.iupacName}
            </span>
          ) : null}
          .
        </p>

        <div className="mt-5 rounded-2xl border border-brand/25 bg-brand-soft/50 p-4 dark:bg-brand-soft/20 sm:mt-6 sm:p-5">
          <p className="text-sm font-medium text-muted">Quick answer</p>
          <p className="mt-1 text-foreground">
            The molar mass of {profile.name} (<Formula value={profile.formula} />) is
          </p>
          <p className="mt-2 break-words font-mono text-3xl font-semibold tracking-tight text-brand sm:text-4xl md:text-5xl">
            {calculation.molarMass.toFixed(3)}
            <span className="ml-2 text-base font-medium text-muted">g/mol</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            One mole of {profile.name} therefore has a mass of {calculation.molarMass.toFixed(3)} grams—the value you
            use for stoichiometry and laboratory preparation.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <CompoundActions
            name={profile.name}
            formula={profile.formula}
            molarMass={calculation.molarMass}
          />
          <p className="text-xs text-muted">
            Reviewed for educational accuracy ·{" "}
            <Link href="/accuracy" className="no-underline hover:underline">
              Accuracy policy
            </Link>
          </p>
        </div>

        {(profile.casNumber || profile.pubchemCid || profile.smiles) && (
          <dl className="mt-5 grid grid-cols-1 gap-3 text-sm md:mt-6 md:grid-cols-3">
            {profile.casNumber ? (
              <div className="min-w-0 rounded-xl bg-surface-2 px-3 py-2">
                <dt className="text-muted">CAS Registry Number</dt>
                <dd className="break-all font-medium text-foreground">{profile.casNumber}</dd>
              </div>
            ) : null}
            {profile.pubchemCid ? (
              <div className="min-w-0 rounded-xl bg-surface-2 px-3 py-2">
                <dt className="text-muted">PubChem CID</dt>
                <dd className="break-all font-medium text-foreground">{profile.pubchemCid}</dd>
              </div>
            ) : null}
            {profile.smiles ? (
              <div className="min-w-0 rounded-xl bg-surface-2 px-3 py-2">
                <dt className="text-muted">SMILES</dt>
                <dd className="break-all font-mono text-foreground">{profile.smiles}</dd>
              </div>
            ) : null}
          </dl>
        )}
      </header>

      <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
        <OnThisPage items={toc} />

        <div className="min-w-0 space-y-5 sm:space-y-6">
          <Section id="calculation" title="Step-by-step calculation">
            <BeginnerCalculation
              name={profile.name}
              formula={profile.formula}
              calculation={calculation}
              commonMistakes={profile.commonMistakes}
              memoryTrick={profile.studentTips[0]}
            />
          </Section>

          <Section id="breakdown" title="Atomic contribution table">
            <p>
              Each row shows how much mass one element contributes to the total for{" "}
              <Formula value={profile.formula} />.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead scope="col">Element</TableHead>
                  <TableHead scope="col">Atoms</TableHead>
                  <TableHead scope="col">Atomic mass</TableHead>
                  <TableHead scope="col">Contribution</TableHead>
                  <TableHead scope="col">Mass %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calculation.breakdown.map((row) => (
                  <TableRow key={row.element}>
                    <TableCell className="font-semibold">{row.element}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>{row.atomicMass.toFixed(3)}</TableCell>
                    <TableCell>{row.contribution.toFixed(3)} g/mol</TableCell>
                    <TableCell>
                      {((row.contribution / calculation.molarMass) * 100).toFixed(1)}%
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-semibold text-foreground" colSpan={3}>
                    Total molar mass
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">
                    {formatMolarMass(calculation.molarMass, 3)}
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Section>

          <Section id="chart" title="Mass contribution chart">
            <MassBreakdownChart
              breakdown={calculation.breakdown}
              total={calculation.molarMass}
              ariaLabel={`Mass contribution chart for ${profile.name} (${profile.formula})`}
            />
            <CompoundConceptDiagram profile={profile} />
          </Section>

          <Section id="downloads" title="Download study sheets">
            <p>
              Save a printable summary, revision sheet, practice worksheet, or laboratory reference for{" "}
              {profile.name} (<Formula value={profile.formula} />).
            </p>
            <CompoundPdfDownloads profile={profile} calculation={calculation} />
          </Section>

          <Section id="practice-calc" title="Practice this calculation">
            <p className="font-medium text-foreground">
              Without looking above, write the atom count for <Formula value={profile.formula} />, then compute the
              molar mass. Check your answer against {formatMolarMass(calculation.molarMass, 3)}.
            </p>
            <p>
              Next challenge: how many grams are in 0.250 mol of {profile.name}? Multiply 0.250 ×{" "}
              {calculation.molarMass.toFixed(3)} to get {(0.25 * calculation.molarMass).toFixed(3)} g.
            </p>
          </Section>

          <Section id="properties" title="Physical and chemical properties">
            <div className="grid gap-4 md:grid-cols-2">
              <PropertyTable
                title="Physical properties"
                rows={[
                  ["Appearance", profile.physical.appearance],
                  ["Color", profile.physical.color],
                  ["Odor", profile.physical.odor],
                  ["State (STP)", profile.physical.stateAtSTP],
                  ["Density", profile.physical.density],
                  ["Melting point", profile.physical.meltingPoint],
                  ["Boiling point", profile.physical.boilingPoint],
                  ["Solubility", profile.physical.solubility],
                  ["Crystal structure", profile.physical.crystalStructure],
                ]}
              />
              <PropertyTable
                title="Chemical properties"
                rows={[
                  ["Classification", profile.chemical.classification],
                  ["Family", profile.chemical.chemicalFamily],
                  ["Acidity", profile.chemical.acidity],
                  ["Basicity", profile.chemical.basicity],
                  ["Polarity", profile.chemical.polarity],
                  ["Geometry", profile.chemical.molecularGeometry],
                  ["Bond angle", profile.chemical.bondAngle],
                  ["Oxidation states", profile.chemical.oxidationStates],
                ]}
              />
            </div>
          </Section>

          <Section id="applications" title="Applications">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Industrial uses</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {profile.applications.industrial.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-foreground">Laboratory uses</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {profile.applications.laboratory.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {profile.applications.environmental ? <p>{profile.applications.environmental}</p> : null}
            {profile.applications.biological ? <p>{profile.applications.biological}</p> : null}
            <h3 className="text-base font-semibold text-foreground">Preparation and production</h3>
            <p>{profile.preparation}</p>
            {profile.production ? <p>{profile.production}</p> : null}
          </Section>

          <Section id="reactions" title={`Important reactions of ${profile.name}`}>
            <div className="space-y-4">
              {profile.reactions.map((reaction) => (
                <div key={reaction.equation} className="min-w-0 rounded-2xl border border-border bg-surface-2/60 p-3 sm:p-4">
                  <p className="break-words text-base font-semibold text-foreground">
                    <Formula value={reaction.equation} />
                  </p>
                  <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="font-semibold text-foreground">Reaction type</dt>
                      <dd>{reaction.type}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Conditions</dt>
                      <dd>{reaction.conditions}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="font-semibold text-foreground">Explanation</dt>
                      <dd>{reaction.explanation}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Products</dt>
                      <dd>{reaction.products}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Why it matters</dt>
                      <dd>{reaction.applications}</dd>
                    </div>
                  </dl>
                  {reaction.relatedConcepts.length > 0 ? (
                    <p className="mt-2 text-xs text-muted">
                      Related ideas: {reaction.relatedConcepts.join(" · ")}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </Section>

          <Section id="history" title="History and discovery">
            <p>{profile.history}</p>
            {profile.discovery ? <p>{profile.discovery}</p> : null}
            <h3 className="text-base font-semibold text-foreground">Interesting facts</h3>
            <ul className="list-disc space-y-1 pl-5">
              {profile.interestingFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            {profile.comparisonNote ? (
              <>
                <h3 className="text-base font-semibold text-foreground">Comparison with similar compounds</h3>
                <p>{profile.comparisonNote}</p>
              </>
            ) : null}
          </Section>

          <Section id="safety" title="Storage, handling, and safety">
            <p>{profile.storage}</p>
            <p>{profile.handling}</p>
            <p className="font-medium text-foreground">{profile.safety.summary}</p>
            <ul className="list-disc space-y-1 pl-5">
              {profile.safety.hazards.map((hazard) => (
                <li key={hazard}>{hazard}</li>
              ))}
            </ul>
            {profile.safety.classification ? (
              <p className="text-sm">Classification: {profile.safety.classification}</p>
            ) : null}
          </Section>

          <Section id="learn" title="Exam notes and student tips">
            <div className="grid gap-4 md:grid-cols-2">
              <NoteList title="Exam notes" items={profile.examNotes} />
              <NoteList title="Student tips" items={profile.studentTips} />
              <NoteList title="Common mistakes" items={profile.commonMistakes} />
              <NoteList title="Misconceptions" items={profile.misconceptions} />
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold text-foreground">Related lessons</h3>
              <ul className="list-disc space-y-1 pl-5">
                {LEARNING_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="practice" title="Practice questions">
            <ol className="space-y-4">
              {profile.practiceQuestions.map((item, index) => (
                <li key={item.question} className="rounded-2xl border border-border p-4">
                  <p className="font-semibold text-foreground">
                    {index + 1}. {item.question}
                  </p>
                  {item.hint ? <p className="mt-1 text-sm text-muted">Hint: {item.hint}</p> : null}
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm font-semibold text-brand">Show answer</summary>
                    <p className="mt-2 text-foreground">{item.answer}</p>
                  </details>
                </li>
              ))}
            </ol>
          </Section>

          {related.length > 0 ? (
            <Section id="related" title="Related compounds">
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={compoundHref(item.slug)}
                      className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-border px-3 py-3 no-underline hover:border-brand sm:px-4"
                    >
                      <span className="min-w-0 break-words font-semibold text-foreground">{item.name}</span>
                      <Formula value={item.formula} className="shrink-0 text-muted" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          <Section id="faq" title={`Frequently asked questions about ${profile.name}`}>
            <FaqAccordion items={profile.faqs} />
          </Section>

          <Section id="overview" title={`Chemistry of ${profile.name}`}>
            <p>
              The sections above give the number you need for calculations. Here we look more closely at how{" "}
              {profile.name} (<Formula value={profile.formula} />) behaves chemically—so the molar mass connects to
              real reactions, properties, and laboratory practice.
            </p>
            {profile.overview.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>{profile.formulaExplanation}</p>
            <p>{profile.chemicalProfile}</p>
            {profile.uniqueTopics?.map((topic) => (
              <div key={topic.heading}>
                <h3 className="text-base font-semibold text-foreground">{topic.heading}</h3>
                <p className="mt-2">{topic.body}</p>
              </div>
            ))}
            <p className="text-sm">
              Recalculate any formula with the{" "}
              <Link href="/calculator" className="font-semibold">
                molar mass calculator
              </Link>
              , compare atoms on the{" "}
              <Link href="/periodic-table" className="font-semibold">
                periodic table
              </Link>
              , or browse more compounds in the{" "}
              <Link href={categoryHref} className="font-semibold">
                {categoryLabel(profile.category).toLowerCase()} library
              </Link>
              .
            </p>
          </Section>

          <Section id="references" title="References and further reading">
            <ul className="space-y-2">
              {profile.references.map((ref) => (
                <li key={ref.label}>
                  <span className="font-semibold text-foreground">{ref.label}: </span>
                  {ref.note}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </article>
  );
}

function PropertyTable({ title, rows }: { title: string; rows: [string, string | undefined][] }) {
  const filled = rows.filter(([, value]) => Boolean(value));
  return (
    <div className="min-w-0">
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <Table>
        <TableBody>
          {filled.map(([label, value]) => (
            <TableRow key={label}>
              <TableCell className="w-[34%] max-w-[9rem] font-medium text-foreground sm:w-40 sm:max-w-none">
                {label}
              </TableCell>
              <TableCell className="min-w-0 break-words">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function NoteList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
