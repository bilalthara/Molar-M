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
    `${compound.name} contains ${compound.breakdown.length} element types: ${elementList}.`,
    `${heaviest?.element ?? "One element"} contributes the largest share of this compound's total molar mass.`,
    `In ${formatFormula(compound.formula)}, ${largestCount?.element ?? "one element"} appears with the highest atom count.`,
    `Its molar mass is ${compound.molarMass.toFixed(2)} g/mol, which is used directly in gram-to-mole conversions.`,
    firstReaction
      ? `A common reaction for ${compound.name} is ${firstReaction.type.toLowerCase()} (${formatFormula(firstReaction.equation)}).`
      : `${compound.name} appears regularly in stoichiometry questions because its formula is straightforward to analyze.`,
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

function getCompoundIntro(compound: CompoundEntry) {
  const primaryKeyword = `Molar Mass of ${compound.name}`;
  const secondaryKeyword = `Molar Mass of ${formatFormula(compound.formula)}`;
  const atomKinds = compound.breakdown.length;
  const dominantElement = [...compound.breakdown].sort((a, b) => b.contribution - a.contribution)[0]?.element ?? "the dominant element";
  const variantsByCategory: Record<CompoundEntry["category"], string[]> = {
    acid: [
      `${primaryKeyword} is useful when preparing acid solutions and checking neutralization calculations in class and lab.`,
      `${primaryKeyword} gives a reliable base for titration work, where even small mass errors can shift final concentration.`,
      `${primaryKeyword} is a practical checkpoint before starting acid-base stoichiometry, especially in measured solution problems.`,
    ],
    base: [
      `${primaryKeyword} is often used in pH and neutralization exercises where accurate mole conversion is essential.`,
      `${primaryKeyword} helps students set up base-solution quantities correctly before reaction and dilution steps.`,
      `${primaryKeyword} is a frequent exam value for base chemistry, particularly in mole-to-gram and back-conversion questions.`,
    ],
    salt: [
      `${primaryKeyword} is commonly used in ionic-equation practice and concentration calculations for salt solutions.`,
      `${primaryKeyword} makes it easier to move between measured grams and moles in classroom precipitation problems.`,
      `${primaryKeyword} is a key number in salt-related stoichiometry, especially when balancing reactants and products.`,
    ],
    organic: [
      `${primaryKeyword} supports organic chemistry work where composition and mass relationships are compared across carbon compounds.`,
      `${primaryKeyword} is helpful for yield calculations and formula checks in carbon-chain reaction questions.`,
      `${primaryKeyword} is often referenced when connecting molecular structure to quantitative conversion steps.`,
    ],
    gas: [
      `${primaryKeyword} is used in gas-law and stoichiometry questions that require clean mole-to-mass conversion.`,
      `${primaryKeyword} helps verify calculated gas quantities before volume or pressure-based comparisons.`,
      `${primaryKeyword} is a core value for atmospheric and reaction-based gas calculations in chemistry practice.`,
    ],
  };
  const variantIndex = (compound.formula.charCodeAt(0) + compound.formula.length) % variantsByCategory[compound.category].length;
  const leadLine = variantsByCategory[compound.category][variantIndex];
  return `${leadLine} ${secondaryKeyword} is ${compound.molarMass.toFixed(2)} g/mol, based on ${atomKinds} element types, with ${dominantElement} contributing the largest share.`;
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
  const introParagraph = getCompoundIntro(compound);
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
    <section className="mx-auto w-full min-w-0 max-w-6xl px-4 pb-8 pt-[7.5rem] text-[#0a0f1a] sm:px-6 md:pt-24">
      <div className="mb-6 flex min-w-0 flex-wrap items-center gap-2 text-sm text-[#0a0f1a]/80">
        <span className="font-medium text-[#0a0f1a]/70">Molar Mass Lab</span>
        <span>/</span>
        <span>
          Molar mass for <FormulaSub formula={compound.formula} />
        </span>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <main className="min-w-0 max-w-full space-y-6">
          <div className="space-y-3 border-b border-slate-200/90 pb-6">
            <Badge>{categoryLabel}</Badge>
            <h1 className="break-words text-2xl font-bold tracking-tight text-[#0a0f1a] sm:text-3xl md:text-4xl">
              Molar Mass of {compound.name} (<FormulaSub formula={compound.formula} />)
            </h1>
            <p className="max-w-full text-base leading-relaxed text-[#0a0f1a] sm:max-w-3xl">
              {introParagraph}
            </p>
            <p className="max-w-full text-sm leading-relaxed text-[#0a0f1a]/85 sm:max-w-3xl">
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
              <CardHeader className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                  <span className="flex min-w-0 flex-wrap items-center gap-2">
                    <Atom className="h-5 w-5 text-[#0F766E]" aria-hidden />
                    {primaryKeyword} is:
                  </span>
                </CardTitle>
                <div className="shrink-0 self-start sm:self-center">
                  <CompoundCopyAnswerButton
                    formula={compound.formula}
                    molarMass={compound.molarMass}
                    name={compound.name}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="min-w-0 rounded-lg border border-slate-200/90 bg-white px-4 py-5 sm:px-5 sm:py-6">
                    <p className="break-words text-3xl font-bold tracking-tight text-[#0F766E] max-md:whitespace-normal sm:text-4xl md:text-5xl md:whitespace-nowrap lg:text-6xl">
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
                <div className="min-w-0 max-w-full overflow-x-auto rounded-lg border border-slate-200 [-webkit-overflow-scrolling:touch] [&_sub]:text-[0.7em] [&_td]:px-1.5 [&_td]:py-1 sm:[&_td]:px-2 sm:[&_td]:py-1.5 [&_th]:px-1.5 [&_th]:py-1.5 sm:[&_th]:px-2 sm:[&_th]:py-2">
                  <Table className="w-full min-w-0 max-w-none text-left text-[10px] leading-normal sm:text-xs md:text-sm max-md:table-auto md:table-fixed">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[22%] min-w-0 normal-case tracking-tight">Element</TableHead>
                        <TableHead className="w-10 text-center tabular-nums normal-case tracking-tight sm:w-11">Count</TableHead>
                        <TableHead className="w-[16%] min-w-0 text-right normal-case tracking-tight sm:w-[14%]">
                          Atomic mass
                        </TableHead>
                        <TableHead className="min-w-0 normal-case tracking-tight">Calculation</TableHead>
                        <TableHead className="w-[22%] min-w-0 text-right normal-case tracking-tight sm:w-[20%]">
                          Contribution
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {compound.breakdown.map((row) => (
                        <TableRow key={row.element}>
                          <TableCell className="min-w-0 break-words leading-normal">{getElementDisplay(row.element)}</TableCell>
                          <TableCell className="text-center tabular-nums">{row.count}</TableCell>
                          <TableCell className="text-right tabular-nums">{row.atomicMass.toFixed(2)}</TableCell>
                          <TableCell className="tabular-nums leading-normal">{row.count} x {row.atomicMass.toFixed(2)}</TableCell>
                          <TableCell className="text-right tabular-nums leading-normal break-words">
                            {row.contribution.toFixed(2)} g/mol
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="border-t-2 border-slate-200/90 bg-[#f8fafc] hover:bg-[#f1f5f9]">
                        <TableCell colSpan={4}>
                          <div className="font-semibold leading-normal text-[#0a0f1a]">Final molar mass</div>
                          <div className="mt-0.5 font-normal leading-normal tabular-nums text-[#0a0f1a]/80">{perElementSum}</div>
                        </TableCell>
                        <TableCell className="text-right font-semibold leading-normal text-[#0F766E] tabular-nums break-words">
                          {compound.molarMass.toFixed(2)} g/mol
                        </TableCell>
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

                <div className="min-w-0 rounded-lg border border-slate-200/90 bg-white p-4 text-center sm:p-5">
                  <p className="min-w-0 whitespace-normal break-words text-base leading-relaxed tabular-nums sm:text-lg">
                    Molar Mass = ({groupedTerm})
                  </p>
                  <p className="mt-3 min-w-0 whitespace-normal break-words text-base leading-relaxed tabular-nums sm:text-lg">
                    Molar Mass = {perElementSum}
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-relaxed text-[#0F766E] tabular-nums">
                    Molar Mass = {compound.molarMass.toFixed(3)} g/mol
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#0a0f1a]/80">
                    Final rounded value shown on this page: {compound.molarMass.toFixed(2)} g/mol.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200/90 bg-white p-4 sm:p-5">
                  <h3 className="text-lg font-semibold">Visual Calculation Chart</h3>
                  <div className="mt-3 min-w-0 max-w-full overflow-x-auto rounded-lg border border-slate-200 [-webkit-overflow-scrolling:touch] [&_sub]:text-[0.7em] [&_td]:px-1.5 [&_td]:py-1 sm:[&_td]:px-2 sm:[&_td]:py-1.5 [&_th]:px-1.5 [&_th]:py-1.5 sm:[&_th]:px-2 sm:[&_th]:py-2">
                    <Table className="w-full min-w-0 max-w-none text-left text-[10px] leading-normal sm:text-xs md:text-sm max-md:table-auto md:table-fixed">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[22%] min-w-0 normal-case tracking-tight">Element</TableHead>
                          <TableHead className="w-10 text-center normal-case tracking-tight sm:w-11">Count</TableHead>
                          <TableHead className="w-[14%] min-w-0 text-right normal-case tracking-tight sm:w-[12%]">
                            Mass
                          </TableHead>
                          <TableHead className="min-w-0 normal-case tracking-tight">Count x mass</TableHead>
                          <TableHead className="w-[22%] min-w-0 text-right normal-case tracking-tight sm:w-[20%]">
                            Contribution
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {compound.breakdown.map((row) => (
                          <TableRow key={`visual-${row.element}`}>
                            <TableCell className="min-w-0 break-words leading-normal">{getElementDisplay(row.element)}</TableCell>
                            <TableCell className="text-center tabular-nums">{row.count}</TableCell>
                            <TableCell className="text-right tabular-nums">{row.atomicMass.toFixed(3)}</TableCell>
                            <TableCell className="tabular-nums leading-normal">
                              {row.count} x {row.atomicMass.toFixed(3)}
                            </TableCell>
                            <TableCell className="text-right tabular-nums leading-normal break-words">
                              = {row.contribution.toFixed(3)}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="border-t-2 border-slate-200/90 bg-[#f8fafc] hover:bg-[#f1f5f9]">
                          <TableCell colSpan={4}>
                            <div className="font-semibold leading-normal text-[#0a0f1a]">Final molar mass</div>
                            <div className="mt-0.5 font-normal leading-normal tabular-nums text-[#0a0f1a]/80">{perElementSum}</div>
                          </TableCell>
                          <TableCell className="text-right font-semibold leading-normal text-[#0F766E] tabular-nums break-words">
                            = {compound.molarMass.toFixed(3)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                {homeInterlinkP(
                  "steps",
                  <>
                    When you move to another formula, {homeLinkWord} gives you the same step-by-step method for quick revision.
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
                  <>Use this checklist with {homeLinkWord} whenever you want a quick confidence check.</>,
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
                <div className="min-w-0 max-w-full overflow-x-auto rounded-lg border border-slate-200 [-webkit-overflow-scrolling:touch] [&_sub]:text-[0.7em] [&_td]:px-1.5 [&_td]:py-1 sm:[&_td]:px-2 sm:[&_td]:py-2">
                  <Table className="w-full min-w-0 max-w-none text-left text-[10px] leading-normal sm:text-xs md:text-sm max-md:table-auto md:table-fixed">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[26%] normal-case tracking-tight sm:w-[22%]">Type</TableHead>
                        <TableHead className="min-w-0 normal-case tracking-tight">Reaction</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {compound.reactions.map((reaction) => (
                        <TableRow key={`${reaction.type}-${reaction.equation}`}>
                          <TableCell className="font-medium text-[#0a0f1a]">{reaction.type}</TableCell>
                          <TableCell className="min-w-0">
                            <span className="inline tracking-[0.03em] [font-variant-ligatures:none]">
                              {formatFormula(reaction.equation)}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {homeInterlinkP(
                  "reactions",
                  <>Use these reactions with {homeLinkWord} when you need the molar mass for each species.</>,
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
                  <>For more examples in the same format, browse the related formulas on {homeLinkWord}.</>,
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
                      className="text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                      href={getCompoundHref(firstRelated.formula)}
                      prefetch={false}
                    >
                      {firstRelated.name} (<FormulaSub formula={firstRelated.formula} />)
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                      href={getCompoundHref(secondRelated.formula)}
                      prefetch={false}
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
                  <>Before a test, {homeLinkWord} helps you review more formulas without rebuilding each table manually.</>,
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
                  <>Keep {homeLinkWord} open while practicing so your totals match the same method shown here.</>,
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
                          className="text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
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
                          className="text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
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
                    className="block text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
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
