"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Atom, BookOpen, CircleHelp, Lightbulb } from "lucide-react";

import { CompoundCopyAnswerButton } from "@/components/sections/compound-copy-button";
import { DownloadPdfButtons } from "@/components/sections/download-pdf-buttons";
import { Reveal } from "@/components/sections/reveal";
import { FaqAccordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormulaSub } from "@/components/ui/formula-sub";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  getCompoundDisplayLabel,
  getCompoundHref,
  getHighVolumeMolarMassPageLinks,
  isKnownCompoundFormula,
} from "@/lib/compound-data";
import {
  type CompoundHomeInterlinkPlacement,
  getCompoundPageHomeInterlink,
} from "@/lib/compound-home-interlink";
import { formatFormula } from "@/lib/chemistry-format";
import { getInternalLink } from "@/lib/internal-links";
import { getElementDisplay } from "@/lib/element-names";
import type { CompoundEntry } from "@/lib/compound-data";

type CompoundPageProps = {
  compound: CompoundEntry;
};

function buildCompoundSpecificFacts(compound: CompoundEntry) {
  const elements = compound.breakdown.map((row) => row.element);
  const elementList = elements.join(", ");
  const heaviest = [...compound.breakdown].sort((a, b) => b.contribution - a.contribution)[0];
  const largestCount = [...compound.breakdown].sort((a, b) => b.count - a.count)[0];
  const firstReaction = compound.reactions[0];
  const facts: string[] = [
    `${compound.name} contains ${compound.breakdown.length} element type(s): ${elementList}.`,
    `${heaviest?.element ?? "One element"} contributes the largest part of total molar mass for this compound.`,
    `In ${formatFormula(compound.formula)}, ${largestCount?.element ?? "an element"} has the highest atom count.`,
    `Its molar mass is ${compound.molarMass.toFixed(2)} g/mol, making it useful in mole-to-gram conversion questions.`,
    firstReaction
      ? `A common ${compound.name} reaction pattern is ${firstReaction.type.toLowerCase()} (${formatFormula(firstReaction.equation)}).`
      : `${compound.name} appears often in stoichiometry examples because its formula structure is easy to break down.`,
  ];

  if (compound.category === "acid") {
    facts.push("Acids like this are commonly discussed in neutralization and pH-focused lab lessons.");
  } else if (compound.category === "base") {
    facts.push("Bases like this are often used to understand neutralization, soaps, and cleaning chemistry.");
  } else if (compound.category === "salt") {
    facts.push("Salt compounds are frequently used when practicing ionic reaction balancing and precipitation.");
  } else if (compound.category === "organic") {
    facts.push("Organic compounds are central in fuel chemistry, biochemistry, and carbon-chain naming practice.");
  } else {
    facts.push("Gas compounds are important in atmosphere-related chemistry and gas law problems.");
  }

  return facts.slice(0, 5);
}

function buildWhyThisMatters(compound: CompoundEntry) {
  const mainElement = [...compound.breakdown].sort((a, b) => b.count - a.count)[0]?.element;
  const secondElement = [...compound.breakdown].sort((a, b) => b.count - a.count)[1]?.element;
  if (compound.category === "acid") {
    return [
      `${compound.name} is important in acid-base work, especially when preparing safe measured solutions in lab sessions.`,
      `${mainElement ?? "Its key element"} chemistry is frequently tested in titration and neutralization chapters.`,
    ];
  }
  if (compound.category === "base") {
    return [
      `${compound.name} is used when studying neutralization, pH control, and measured base preparation.`,
      `${secondElement ?? "Its elements"} make it a common classroom comparison with acids and salts.`,
    ];
  }
  if (compound.category === "salt") {
    return [
      `${compound.name} appears in ionic-reaction practice and precipitation examples in school chemistry.`,
      `Its molar mass helps students move quickly between grams, moles, and concentration problems.`,
    ];
  }
  if (compound.category === "organic") {
    return [
      `${compound.name} matters in organic chemistry, especially for fuel, solvent, or carbon-chain analysis.`,
      `Its formula pattern helps students practice molecular composition and yield calculation methods.`,
    ];
  }
  return [
    `${compound.name} is relevant in gas-law topics and atmosphere-focused chemistry examples.`,
    `Its molar mass is used in mole-volume and pressure-based conversion exercises.`,
  ];
}

function buildCommonMistakes(compound: CompoundEntry) {
  const hasParentheses = compound.formula.includes("(");
  const dominant = [...compound.breakdown].sort((a, b) => b.contribution - a.contribution)[0]?.element;
  return [
    `Skipping subscripts in ${formatFormula(compound.formula)} and miscounting atoms.`,
    hasParentheses
      ? `Forgetting that parentheses in ${formatFormula(compound.formula)} multiply the entire grouped part.`
      : `Rounding atomic masses too early before finishing all multiplication steps.`,
    `Mixing up ${dominant ?? "dominant"} element contribution with total molar mass.`,
    `Reporting a value without units; final answer should be in g/mol for ${compound.name}.`,
  ];
}

const pageSections = [
  { id: "answer-box", label: "Answer Box" },
  { id: "breakdown", label: "Breakdown Table" },
  { id: "steps", label: "Step-by-Step" },
  { id: "remember", label: "Easy Way" },
  { id: "reactions", label: "Reactions" },
  { id: "facts", label: "Do You Know?" },
  { id: "formula", label: "Formula" },
  { id: "related", label: "Related" },
  { id: "faq", label: "FAQ" },
];

export function CompoundPage({ compound }: CompoundPageProps) {
  const [activeSectionId, setActiveSectionId] = useState(pageSections[0]?.id ?? "answer-box");

  useEffect(() => {
    const sectionElements = pageSections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!sectionElements.length) return;

    let ticking = false;
    const activateCurrentSection = () => {
      const topOffset = 170;
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (scrolledToBottom) {
        const lastId = sectionElements[sectionElements.length - 1]?.id ?? sectionElements[0].id;
        setActiveSectionId((prev) => (prev === lastId ? prev : lastId));
        ticking = false;
        return;
      }

      const byDistance = sectionElements
        .map((sectionEl) => ({
          id: sectionEl.id,
          distance: Math.abs(sectionEl.getBoundingClientRect().top - topOffset),
          top: sectionEl.getBoundingClientRect().top,
        }))
        .sort((a, b) => {
          if (a.top <= topOffset && b.top > topOffset) return -1;
          if (a.top > topOffset && b.top <= topOffset) return 1;
          return a.distance - b.distance;
        });

      const currentId = byDistance[0]?.id ?? sectionElements[0].id;
      setActiveSectionId((prev) => (prev === currentId ? prev : currentId));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(activateCurrentSection);
    };

    activateCurrentSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const popularSidebarLinks = getHighVolumeMolarMassPageLinks().filter(
    (row) => row.formula.toLowerCase() !== compound.formula.toLowerCase(),
  );
  const atomCountLines = compound.breakdown.map(
    (row) => `${row.count} atom${row.count === 1 ? "" : "s"} of ${getElementDisplay(row.element)}`,
  );
  const atomicMassLines = compound.breakdown.map(
    (row) => `${getElementDisplay(row.element)} ~= ${row.atomicMass.toFixed(3)} g/mol`,
  );
  const contributionLines = compound.breakdown.map(
    (row) =>
      `${getElementDisplay(row.element)}: ${row.count} x ${row.atomicMass.toFixed(3)} = ${row.contribution.toFixed(3)} g/mol`,
  );
  const groupedTerm = compound.breakdown.map((row) => `${row.count} x ${row.atomicMass.toFixed(3)}`).join(" + ");
  const perElementSum = compound.breakdown.map((row) => row.contribution.toFixed(3)).join(" + ");
  const categoryLabel = compound.category.charAt(0).toUpperCase() + compound.category.slice(1);
  const primaryKeyword = `Molar Mass of ${compound.name}`;
  const secondaryKeyword = `Molar Mass of ${formatFormula(compound.formula)}`;
  const relatedLabels = compound.relatedCompounds.map((formula) => getCompoundDisplayLabel(formula));
  const sameElementLabels = compound.sameElementCompounds
    .filter((f) => isKnownCompoundFormula(f))
    .map((formula) => getCompoundDisplayLabel(formula));
  const quickFacts = buildCompoundSpecificFacts(compound);
  const whyItMatters = buildWhyThisMatters(compound);
  const commonMistakes = buildCommonMistakes(compound);
  const firstRelated = relatedLabels[0];
  const secondRelated = relatedLabels[1];
  const homeInterlink = getCompoundPageHomeInterlink(compound);
  const calculatorAnchors = ["molar mass calculator", "calculate molar mass"] as const;
  const homeAnchors = ["molar mass", "molar mass page", "molar mass calculations"] as const;
  const periodicAnchors = ["periodic table", "periodic table with molar mass", "atomic mass chart"] as const;
  const variantIndex = compound.formula.length % calculatorAnchors.length;
  const homeVariantIndex = compound.formula.length % homeAnchors.length;
  const calculatorAnchor = calculatorAnchors[variantIndex];
  const homeAnchor = homeAnchors[homeVariantIndex];
  const periodicAnchor = periodicAnchors[variantIndex];
  const homeLinkWord = (
    <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getInternalLink("home")} prefetch={false}>
      {homeInterlink.anchorText}
    </Link>
  );
  const homeInterlinkP = (slot: CompoundHomeInterlinkPlacement, children: ReactNode) =>
    homeInterlink.placement === slot ? (
      <p className="mt-4 text-base leading-relaxed text-[#0a0f1a]">{children}</p>
    ) : null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-24 pb-8 text-[#0a0f1a] sm:px-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-[#0a0f1a]/80">
        <span className="font-medium text-[#0a0f1a]/70">Molar Mass Lab</span>
        <span>/</span>
        <span>
          Molar mass for <FormulaSub formula={compound.formula} />
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <main className="space-y-6">
          <div className="space-y-3 border-b border-slate-200/90 pb-6">
            <Badge>{categoryLabel}</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">
              Molar Mass of {compound.name} (<FormulaSub formula={compound.formula} />)
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#0a0f1a]">
              {primaryKeyword} helps students convert grams to moles quickly. {secondaryKeyword} is{" "}
              {compound.molarMass.toFixed(2)} g/mol, and this page explains each step in simple language.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-[#0a0f1a]/85">
              For fast checks, use the{" "}
              <Link
                className="text-[#0F766E] underline-offset-2 hover:underline"
                href={getInternalLink("calculator")}
                prefetch={false}
              >
                {calculatorAnchor}
              </Link>
              , verify element values in the{" "}
              <Link
                className="text-[#0F766E] underline-offset-2 hover:underline"
                href={getInternalLink("periodic")}
                prefetch={false}
              >
                {periodicAnchor}
              </Link>
              , or explore more{" "}
              <Link
                className="text-[#0F766E] underline-offset-2 hover:underline"
                href={getInternalLink("home")}
                prefetch={false}
              >
                {homeAnchor}
              </Link>
              .
            </p>
          </div>

          <Reveal>
            <Card className="border border-slate-200/90 bg-white" id="answer-box">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Atom className="h-5 w-5 text-[#0F766E]" aria-hidden />
                    {primaryKeyword} is:
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-end">
                  <CompoundCopyAnswerButton
                    formula={compound.formula}
                    molarMass={compound.molarMass}
                    name={compound.name}
                  />
                </div>
                <div className="space-y-3">
                  <div className="overflow-x-auto rounded-lg border border-slate-200/90 bg-white px-4 py-5 sm:px-5 sm:py-6">
                    <p className="whitespace-nowrap text-4xl font-bold tracking-tight text-[#0F766E] sm:text-5xl md:text-6xl">
                      {compound.molarMass.toFixed(2)} g/mol
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-[#0a0f1a]">
                    {secondaryKeyword} equals {compound.molarMass.toFixed(2)} g/mol, so {compound.molarMass.toFixed(2)} grams
                    is one mole.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200 bg-white" id="breakdown">
              <CardHeader>
                <CardTitle>Element Breakdown Table</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Element</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead>Atomic Mass</TableHead>
                        <TableHead>Contribution</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {compound.breakdown.map((row) => (
                        <TableRow key={row.element}>
                          <TableCell>{getElementDisplay(row.element)}</TableCell>
                          <TableCell>{row.count}</TableCell>
                          <TableCell>{row.atomicMass.toFixed(2)}</TableCell>
                          <TableCell>{row.contribution.toFixed(2)} g/mol</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-semibold">Final molar mass</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="font-semibold text-[#0F766E]">{compound.molarMass.toFixed(2)} g/mol</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <DownloadPdfButtons compound={compound} />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="steps">
              <CardHeader>
                <CardTitle>Computing Molar Mass of {compound.name} Step by Step</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base text-[#0a0f1a]">
                <div className="rounded-lg border border-slate-200/90 bg-[#f8fbfa] p-4 sm:p-5">
                  <h2 className="text-xl font-semibold">{primaryKeyword}: Step-by-Step Calculation</h2>
                  <div className="mt-4 space-y-5">
                    <div>
                      <h3 className="text-lg font-semibold">1. Identify Element Counts</h3>
                      <p className="mt-1.5 leading-relaxed">
                        Read <FormulaSub formula={compound.formula} /> and list how many atoms of each element are present:
                      </p>
                      <ol className="mt-2 space-y-1.5 pl-6">
                        {atomCountLines.map((line) => (
                          <li key={line} className="list-decimal leading-relaxed">
                            {line}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">2. Determine Atomic Masses</h3>
                      <p className="mt-1.5 leading-relaxed">Look up each element mass from the periodic table:</p>
                      <ol className="mt-2 space-y-1.5 pl-6">
                        {atomicMassLines.map((line) => (
                          <li key={line} className="list-decimal leading-relaxed font-medium">
                            {line}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">3. Multiply Atomic Mass by Quantity</h3>
                      <p className="mt-1.5 leading-relaxed">
                        Multiply atom count by atomic mass for each element:
                      </p>
                      <ul className="mt-2 space-y-1.5 pl-5">
                        {contributionLines.map((line) => (
                          <li key={line} className="list-disc leading-relaxed">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">4. Sum Total Molar Mass</h3>
                      <p className="mt-1.5 leading-relaxed">
                        Add all contributions to get the final molar mass in g/mol.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200/90 bg-white p-4 text-center sm:p-5">
                  <p className="text-lg leading-relaxed">
                    Molar Mass = ({groupedTerm})
                  </p>
                  <p className="mt-3 text-lg leading-relaxed">
                    Molar Mass = {perElementSum}
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-relaxed text-[#0F766E]">
                    Molar Mass = {compound.molarMass.toFixed(3)} g/mol
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#0a0f1a]/80">
                    Final rounded value shown on this page: {compound.molarMass.toFixed(2)} g/mol.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/90 bg-white p-4 sm:p-5">
                  <h3 className="text-lg font-semibold">Visual Calculation Chart</h3>
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Element</TableHead>
                          <TableHead>Count</TableHead>
                          <TableHead>Mass</TableHead>
                          <TableHead>Count x Mass</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {compound.breakdown.map((row) => (
                          <TableRow key={`visual-${row.element}`}>
                            <TableCell>{getElementDisplay(row.element)}</TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.atomicMass.toFixed(3)}</TableCell>
                            <TableCell>{row.contribution.toFixed(3)}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell className="font-semibold">Final molar mass</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell className="font-semibold text-[#0F766E]">{compound.molarMass.toFixed(3)}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                {homeInterlinkP(
                  "steps",
                  <>
                    When you move on to another formula, {homeLinkWord} walks through the same kind of breakdown so you can
                    keep the rhythm.
                  </>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="remember">
              <CardHeader>
                <CardTitle>Easy Way to Remember</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-base text-[#0a0f1a]">
                <h3 className="text-lg font-semibold">Easy way to remember {primaryKeyword}</h3>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>{primaryKeyword}: count atoms, multiply masses, and add totals.</li>
                  <li>Write each element in a table so you do not miss subscripts.</li>
                  <li>Keep 2-3 decimals during steps, then round only at the end.</li>
                </ul>
                {homeInterlinkP(
                  "remember",
                  <>Keep this checklist beside {homeLinkWord} so you can jump between memory cues and fresh totals.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="reactions">
              <CardHeader>
                <CardTitle>Sample Reactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Reaction</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {compound.reactions.map((reaction) => (
                        <TableRow key={`${reaction.type}-${reaction.equation}`}>
                          <TableCell>{reaction.type}</TableCell>
                          <TableCell>{formatFormula(reaction.equation)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {homeInterlinkP(
                  "reactions",
                  <>Pair these reaction snapshots with {homeLinkWord} when you need numbers for the species on each side.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200 bg-[#ecfdf5]" id="facts">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-[#0F766E]" />
                  Do You Know?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-base text-[#0a0f1a]">
                {quickFacts.map((fact) => (
                  <p key={fact}>
                    <span className="text-[#0a0f1a]/60">– </span>
                    {fact}
                  </p>
                ))}
                {homeInterlinkP(
                  "facts",
                  <>If you want more bite-sized context like this, {homeLinkWord} surfaces other compounds in the same style.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Why This Compound Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-base text-[#0a0f1a]">
                {whyItMatters.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {firstRelated && secondRelated ? (
                  <p>
                    Similar calculations can be compared with{" "}
                    <Link
                      className="text-[#0F766E] underline-offset-2 hover:underline"
                      href={getCompoundHref(firstRelated.formula)}
                    >
                      {firstRelated.name} (<FormulaSub formula={firstRelated.formula} />)
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-[#0F766E] underline-offset-2 hover:underline"
                      href={getCompoundHref(secondRelated.formula)}
                    >
                      {secondRelated.name} (<FormulaSub formula={secondRelated.formula} />)
                    </Link>
                    .
                  </p>
                ) : null}
                {homeInterlinkP(
                  "why-matters",
                  <>For broader practice beyond this compound, {homeLinkWord} keeps classroom examples one click away.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Where This Is Used</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-[#0a0f1a]">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Competitive exams and school chemistry tests.</li>
                  <li>Lab work when preparing measured solutions.</li>
                  <li>Real-world manufacturing and quality checks.</li>
                </ul>
                {homeInterlinkP(
                  "where-used",
                  <>Whenever you need lab-ready totals in those settings, {homeLinkWord} stays handy for cross-checking.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Common Mistakes When Calculating This</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-[#0a0f1a]">
                <ul className="list-disc space-y-1.5 pl-5">
                  {commonMistakes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {homeInterlinkP(
                  "common-mistakes",
                  <>Spot a slip early by comparing your work with {homeLinkWord} before you hand in a final value.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Quick Revision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-base text-[#0a0f1a]">
                <p>
                  <strong>Formula:</strong> <FormulaSub formula={compound.formula} />
                </p>
                <p>
                  <strong>Molar Mass:</strong> {compound.molarMass.toFixed(2)} g/mol
                </p>
                <p>
                  <strong>Key takeaway:</strong> count atoms accurately, multiply by atomic masses, and sum only at the end.
                </p>
                {homeInterlinkP(
                  "quick-revision",
                  <>Between tests, {homeLinkWord} is the fastest way to rehearse new formulas without rebuilding every table.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="formula">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#0F766E]" />
                  Formula Explanation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-base text-[#0a0f1a]">
                <p>
                  <FormulaSub formula={compound.formula} /> contains{" "}
                  {compound.breakdown.map((item) => `${getElementDisplay(item.element)} (${item.count})`).join(", ")}. Add each element
                  contribution to get total molar mass.
                </p>
                <div className="rounded-lg border border-slate-200/90 p-4 font-mono text-sm text-[#0a0f1a]">
                  Molar Mass = Sum (atomic mass of each element x atom count)
                </div>
                {homeInterlinkP(
                  "formula",
                  <>Keep {homeLinkWord} open while you rewrite formulas so totals stay consistent with what you see here.</>,
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="related">
              <CardHeader>
                <CardTitle>Related compounds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="mb-2 text-sm font-semibold text-[#0a0f1a]">Related compounds</h2>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {relatedLabels.map((item) => (
                      <li key={item.formula}>
                        <Link
                          className="text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                          href={getCompoundHref(item.formula)}
                          prefetch={false}
                        >
                          {item.name} (<FormulaSub formula={item.formula} />)
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-2 text-sm font-semibold text-[#0a0f1a]">Same-element compounds</h2>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {sameElementLabels.map((item) => (
                      <li key={item.formula}>
                        <Link
                          className="text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                          href={getCompoundHref(item.formula)}
                          prefetch={false}
                        >
                          {item.name} (<FormulaSub formula={item.formula} />)
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-2 text-sm font-semibold text-[#0a0f1a]">Browse more</h2>
                  <Link
                    className="text-sm font-semibold text-[#0F766E] underline-offset-2 hover:underline"
                    href="/browse"
                    prefetch={false}
                  >
                    Featured molar mass pages
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200" id="faq">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CircleHelp className="h-5 w-5 text-[#0F766E]" />
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FaqAccordion items={compound.faqs} />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle>Conclusion</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7 text-[#0a0f1a]">
                <p>
                  {primaryKeyword} and {secondaryKeyword} are now easy to revise with this structured page. You can use this
                  method in exams, lab reports, and daily chemistry practice.
                </p>
                {homeInterlinkP(
                  "conclusion",
                  <>
                    Whenever you want to branch out, return through {homeLinkWord} for the full molar mass toolkit.
                  </>,
                )}
              </CardContent>
            </Card>
          </Reveal>
        </main>

        <aside className="hidden min-h-0 lg:block">
          <div className="sticky top-28 flex max-h-[calc(100vh-7rem)] flex-col gap-4">
            <div className="shrink-0 space-y-3 rounded-xl border border-slate-200/90 bg-white p-4">
              <p className="text-sm font-semibold text-[#0a0f1a]">On this page</p>
              <nav className="space-y-1.5">
                {pageSections.map((section) => (
                  <button
                    key={section.id}
                    className={`w-full cursor-pointer rounded-md border-l-2 px-2 py-1 text-left text-sm transition-colors duration-150 ${
                      activeSectionId === section.id
                        ? "border-[#0F766E] font-semibold text-[#0F766E]"
                        : "border-transparent text-[#0a0f1a] hover:border-slate-300 hover:text-[#0F766E]"
                    }`}
                    onClick={() =>
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    type="button"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex min-h-[18rem] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4">
              <p className="shrink-0 text-sm font-semibold text-[#0a0f1a]">Most popular molar mass calculations</p>
              <nav className="mt-2 min-h-[14rem] max-h-[min(28rem,calc(100vh-15rem))] flex-1 space-y-2 overflow-y-auto overscroll-contain pr-1 text-sm leading-snug">
                {popularSidebarLinks.map(({ formula, name }) => (
                  <Link
                    key={formula}
                    className="block text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
                    href={getCompoundHref(formula)}
                    prefetch={false}
                  >
                    {name} (<FormulaSub formula={formula} />)
                  </Link>
                ))}
                <Link
                  className="block shrink-0 pt-2 font-medium text-[#0F766E] underline-offset-2 hover:underline"
                  href="/browse"
                  prefetch={false}
                >
                  Browse featured compounds
                </Link>
                <Link
                  className="block shrink-0 font-medium text-[#0F766E] underline-offset-2 hover:underline"
                  href={getInternalLink("home")}
                  prefetch={false}
                >
                  Molar mass basics
                </Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
