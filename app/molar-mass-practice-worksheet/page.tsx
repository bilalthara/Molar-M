export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { WorksheetLevelPdfDownload } from "@/components/sections/worksheet-level-pdf-download";
import { FormulaSub } from "@/components/ui/formula-sub";
import { getInternalLink } from "@/lib/internal-links";
import { calculateMolarMass } from "@/lib/molar-mass";

export const metadata: Metadata = {
  title: "Molar Mass Practice Worksheet",
  description:
    "Practice molar mass calculations with level-wise compound questions and click-to-reveal answers.",
  alternates: { canonical: "/molar-mass-practice-worksheet" },
};

type Question = {
  formula: string;
};

type Level = {
  title: string;
  note: string;
  questions: Question[];
};

const levels: Level[] = [
  {
    title: "Level 1",
    note: "Most common and easiest compounds.",
    questions: ["H2O", "CO2", "NaCl", "O2", "N2", "H2", "NH3", "CH4", "HCl", "NaOH"].map((formula) => ({ formula })),
  },
  {
    title: "Level 2",
    note: "Very easy binary compounds.",
    questions: ["KCl", "CaO", "MgO", "FeO", "CuO", "ZnO", "Al2O3", "NaBr", "KI", "AgF"].map((formula) => ({ formula })),
  },
  {
    title: "Level 3",
    note: "Easy chlorides and simple salts.",
    questions: ["CaCl2", "MgCl2", "FeCl2", "FeCl3", "CuCl2", "ZnCl2", "AlCl3", "BaCl2", "PbCl2", "NaI"].map((formula) => ({ formula })),
  },
  {
    title: "Level 4",
    note: "Simple oxides and sulfides.",
    questions: ["Na2O", "K2O", "CaS", "MgS", "Na2S", "K2S", "FeS", "ZnS", "CuS", "PbS"].map((formula) => ({ formula })),
  },
  {
    title: "Level 5",
    note: "Carbonates and bicarbonates.",
    questions: ["Na2CO3", "K2CO3", "CaCO3", "MgCO3", "FeCO3", "ZnCO3", "NaHCO3", "KHCO3", "CuCO3", "PbCO3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 6",
    note: "Sulfates from easy to medium.",
    questions: ["Na2SO4", "K2SO4", "CaSO4", "MgSO4", "FeSO4", "CuSO4", "ZnSO4", "BaSO4", "PbSO4", "Al2(SO4)3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 7",
    note: "Nitrates with mixed metals.",
    questions: ["NaNO3", "KNO3", "Ca(NO3)2", "Mg(NO3)2", "Fe(NO3)2", "Cu(NO3)2", "Zn(NO3)2", "AgNO3", "Pb(NO3)2", "Al(NO3)3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 8",
    note: "Phosphates and complex salts.",
    questions: ["Na3PO4", "K3PO4", "Ca3(PO4)2", "Mg3(PO4)2", "FePO4", "Cu3(PO4)2", "Zn3(PO4)2", "AlPO4", "Ba3(PO4)2", "Pb3(PO4)2"].map((formula) => ({ formula })),
  },
  {
    title: "Level 9",
    note: "Ammonium compounds and mixed anions.",
    questions: ["NH4Cl", "NH4Br", "NH4I", "NH4NO3", "(NH4)2SO4", "(NH4)2CO3", "(NH4)2S", "NH4HCO3", "NH4OH", "NH4F"].map((formula) => ({ formula })),
  },
  {
    title: "Level 10",
    note: "Basic organic formulas.",
    questions: ["CH3OH", "C2H6O", "C3H8O", "C4H10O", "C5H12O", "C6H14O", "CH2O", "C2H4O", "C3H6O", "C4H8O"].map((formula) => ({ formula })),
  },
  {
    title: "Level 11",
    note: "Hydroxides and base compounds.",
    questions: ["Ca(OH)2", "Mg(OH)2", "Al(OH)3", "Fe(OH)2", "Fe(OH)3", "Cu(OH)2", "Zn(OH)2", "Ba(OH)2", "Pb(OH)2", "KOH"].map((formula) => ({ formula })),
  },
  {
    title: "Level 12",
    note: "Chlorine oxy-salts with increasing complexity.",
    questions: ["NaClO", "NaClO2", "NaClO3", "NaClO4", "KClO3", "KClO4", "Ca(ClO3)2", "Mg(ClO3)2", "Fe(ClO3)2", "Al(ClO3)3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 13",
    note: "Sulfites and related compounds.",
    questions: ["Na2SO3", "K2SO3", "CaSO3", "MgSO3", "FeSO3", "CuSO3", "ZnSO3", "BaSO3", "PbSO3", "Al2(SO3)3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 14",
    note: "Thiosulfates and ammonium derivatives.",
    questions: ["Na2S2O3", "K2S2O3", "CaS2O3", "MgS2O3", "FeS2O3", "CuS2O3", "ZnS2O3", "BaS2O3", "PbS2O3", "(NH4)2S2O3"].map((formula) => ({ formula })),
  },
  {
    title: "Level 15",
    note: "Larger organic acids and esters.",
    questions: ["C2H4O2", "C3H6O2", "C4H8O2", "C5H10O2", "C6H12O2", "C7H14O2", "C8H16O2", "C9H18O2", "C10H20O2", "C11H22O2"].map((formula) => ({ formula })),
  },
  {
    title: "Level 16",
    note: "Aromatic and sugar-type compounds.",
    questions: ["C6H12O6", "C12H22O11", "C5H10O5", "C6H6", "C7H8", "C8H10", "C9H12", "C10H8", "C8H8", "C7H6O2"].map((formula) => ({ formula })),
  },
  {
    title: "Level 17",
    note: "Long-chain hydrocarbons.",
    questions: ["C8H18", "C9H20", "C10H22", "C11H24", "C12H26", "C13H28", "C14H30", "C15H32", "C16H34", "C17H36"].map((formula) => ({ formula })),
  },
  {
    title: "Level 18",
    note: "Acetate complexes with mixed metals.",
    questions: ["Zn(C2H3O2)2", "Ca(C2H3O2)2", "Mg(C2H3O2)2", "Fe(C2H3O2)2", "Cu(C2H3O2)2", "Pb(C2H3O2)2", "Al(C2H3O2)3", "Ba(C2H3O2)2", "NH4C2H3O2", "KC2H3O2"].map((formula) => ({ formula })),
  },
  {
    title: "Level 19",
    note: "Advanced grouped ions and bicarbonates.",
    questions: ["Fe2(SO4)3", "Fe2(SO3)3", "Cr2(SO4)3", "Cr2(SO3)3", "Ca(HCO3)2", "Mg(HCO3)2", "Zn(HCO3)2", "Cu(HCO3)2", "Pb(HCO3)2", "Ba(HCO3)2"].map((formula) => ({ formula })),
  },
  {
    title: "Level 20",
    note: "Most difficult and complicated compounds.",
    questions: ["Fe(ClO4)3", "Al(ClO4)3", "Cr(ClO4)3", "Pb(ClO4)2", "Ba(ClO4)2", "Ca(ClO4)2", "Mg(ClO4)2", "Zn(ClO4)2", "Cu(ClO4)2", "(NH4)3PO4"].map((formula) => ({ formula })),
  },
];

export default function MolarMassPracticeWorksheetPage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#0a0f1a]/90">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Molar Mass Practice Worksheet</h1>
          <p className="mt-3 text-[#0a0f1a]/85">
            Solve each formula, show your work, and keep units in g/mol. Answers are grouped by level and hidden until you
            click <strong>Show Answers</strong>.
          </p>
          <p className="mt-3 text-[#0a0f1a]/85">
            Need a quick refresher first? Return to the{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href={getInternalLink("home")}>
              molar mass page
            </Link>
            .
          </p>
        </header>

        {levels.map((level) => (
          <section key={level.title} className="space-y-4 rounded-xl border border-slate-200 p-5">
            <div>
              <h2 className="text-xl font-semibold text-[#0a0f1a]">{level.title}</h2>
              <p className="mt-1 text-sm text-[#0a0f1a]/75">{level.note}</p>
            </div>

            <ol className="list-decimal space-y-2 pl-5">
              {level.questions.map((question) => (
                <li key={`${level.title}-${question.formula}`}>
                  <FormulaSub formula={question.formula} />
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap gap-3">
              <WorksheetLevelPdfDownload formulas={level.questions.map((question) => question.formula)} levelTitle={level.title} />
              <WorksheetLevelPdfDownload
                formulas={level.questions.map((question) => question.formula)}
                levelTitle={level.title}
                withAnswers
              />
            </div>

            <details className="rounded-lg border border-slate-200 bg-slate-50/60">
              <summary className="cursor-pointer px-4 py-2.5 font-medium text-[#0F766E]">Show Answers</summary>
              <div className="border-t border-slate-200 px-4 py-3">
                <ol className="list-decimal space-y-1.5 pl-5">
                  {level.questions.map((question) => (
                    <li key={`${level.title}-answer-${question.formula}`}>
                      <FormulaSub formula={question.formula} /> ={" "}
                      {(calculateMolarMass(question.formula)?.molarMass ?? 0).toFixed(2)} g/mol
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          </section>
        ))}
      </article>
    </main>
  );
}
