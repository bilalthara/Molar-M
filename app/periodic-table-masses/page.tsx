export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { FormulaSub } from "@/components/ui/formula-sub";

export const metadata: Metadata = {
  title: "Periodic Table Masses",
  description: "How to choose and use atomic masses from the periodic table for molar mass calculations.",
  alternates: { canonical: "/periodic-table-masses" },
};

export default function PeriodicTableMassesPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#0a0f1a]/90">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Periodic Table Masses Guide</h1>
          <p className="mt-3 text-[#0a0f1a]/85">
            The periodic table is more than a poster of colorful squares. For quantitative chemistry, it is the authoritative
            lookup surface for atomic masses that feed every molar mass calculation. Understanding what those numbers mean, how
            they vary between editions, and how to use them consistently is one of the highest-leverage skills you can build in
            introductory coursework. This guide explains atomic masses in plain language while staying faithful to how
            textbooks, laboratories, and exams expect you to work.
          </p>
          <p className="mt-3 text-[#0a0f1a]/85">
            For live lookups tied to formulas and element breakdowns, open{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/" prefetch={false}>
              molar mass
            </Link>{" "}
            on the molar mass page.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Atomic mass is a weighted average</h2>
          <p>
            Most elements exist as mixtures of isotopes, atoms with the same proton count but different neutron counts. The
            atomic mass printed for an element reflects a weighted average of those isotopic masses, weighted by natural
            abundance. That is why the value is often not close to a whole number, even when one isotope dominates. It is also
            why the same element can show slightly different numerical values across periodic tables: tables update as
            measurements and abundance models improve, and different publishers choose different rounding conventions.
          </p>
          <p>
            For classroom calculations, you are not expected to derive isotopic abundances from first principles each time.
            You are expected to use a consistent table and apply it systematically. If your instructor specifies “use the
            periodic table printed on the exam,” follow that literally, because small differences can change the third decimal
            of a large molar mass enough to matter in automated grading.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Atomic mass versus molar mass: vocabulary that matters</h2>
          <p>
            Atomic mass is often expressed in atomic mass units and discussed per atom. Molar mass is expressed in grams per
            mole and discussed per mole of atoms or per mole of formula units. In practice, the same numerical work connects
            them through Avogadro’s constant, but the units you write signal your conceptual model. When you compute the molar
            mass of <FormulaSub formula="H2O" />, you are summing contributions from each element’s atomic mass as it appears
            on the periodic table, then interpreting the result as grams for one mole of water molecules.
          </p>
          <p>
            Ionic compounds use formula units rather than molecules in strict language, but the arithmetic is the same: sum
            element contributions according to the empirical or molecular formula provided by the problem. The periodic table
            still supplies the per-element atomic masses.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">How many decimals should you use?</h2>
          <p>
            There is no universal single rule because the correct precision depends on the measurement context. A practical
            default for general chemistry homework is to use atomic masses to at least two decimal places when available, and
            to keep additional digits for heavier elements or for calculations where many terms accumulate. The guiding
            principle is internal consistency: do not mix a high-precision table with a heavily rounded intermediate workflow,
            because that mismatch creates artificial disagreement between students who are both “correct” but used different
            rounding policies.
          </p>
          <p>
            When computing a molar mass for a large organic molecule, the number of terms can be large enough that rounding each
            term to two decimals before summing introduces measurable bias. A better workflow is to store each element’s
            contribution with extra digits in a calculator memory or spreadsheet cell, sum once, then round the final molar
            mass to the reporting precision requested by the assignment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Interpreting parentheses and grouped atoms</h2>
          <p>
            The periodic table gives per-element masses, but formulas tell you how many atoms of each element are present.
            Parentheses group atoms that repeat as a unit. A common error is to multiply only the first atom inside parentheses
            or to forget that a trailing subscript outside parentheses applies to the entire group. These mistakes are not
            periodic table problems, but they show up as periodic table problems because students believe their atomic mass
            inputs are wrong when the atom count model is what failed.
          </p>
          <p>
            When you audit a calculation, separate the audit into two questions. First, is the formula interpreted correctly?
            Second, are the atomic masses taken from a consistent source? If you mix those audits, you will troubleshoot the
            wrong layer and lose time under exam pressure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Ions, charges, and spectator context</h2>
          <p>
            For polyatomic ions, students sometimes look up masses atom-by-atom correctly but forget to count oxygen atoms in
            sulfate or nitrogen atoms in ammonium because they memorized the ion as a symbol rather than as composition. A
            periodic table cannot rescue a miscounted formula. A strong habit is to expand polyatomic ions into explicit atoms
            the first few times you work with them, then compress back to symbol notation once your accuracy is stable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Trends: helpful intuition, dangerous replacement for arithmetic</h2>
          <p>
            Periodic trends explain why elements behave differently, but they do not replace the need to compute molar mass from
            composition. Trends can help you sanity-check whether an answer is plausible. If you compute a molar mass for a
            small diatomic gas and obtain a value more typical of a heavy metal, you should pause before submitting. That pause
            is a skill: it is the quantitative version of rereading an essay for typos.
          </p>
          <p>
            Trends can also guide predictions about which element dominates the mass contribution in a compound containing one
            heavy atom and many light atoms. Recognizing dominance helps you catch swapped subscripts early, because the
            computed total will not shift subtly; it will shift dramatically if a heavy atom count is wrong.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Connecting periodic data to laboratory practice</h2>
          <p>
            In laboratories, chemical bottles list formulas and often purity, but the periodic table is still the reference for
            computing how much material corresponds to a planned mole amount. That means your academic skill and your bench
            skill are the same skill expressed in different packaging. The more fluent you are with atomic masses and formula
            interpretation, the faster you can translate a supervisor’s instructions into weighable masses without drowning in
            last-minute arithmetic errors.
          </p>
          <p>
            In computational chemistry contexts beyond introductory courses, atomic masses become database parameters, but the
            conceptual requirement remains: know what you are summing, know the formula unit you mean, and know the uncertainty
            model you are implicitly accepting when you choose a table.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Study plan: from lookup to automaticity</h2>
          <p>
            Begin by computing ten molar masses by hand with a single periodic table source. Include at least one ionic
            compound, one hydrate, one organic molecule with several carbons, and one species with parentheses. Then repeat the
            same set weekly until the setup time drops sharply. Automaticity is not about memorizing numbers; it is about
            memorizing procedure so that your attention can move to harder conceptual layers like limiting reagents and
            mechanism-driven selectivity later in the curriculum.
          </p>
          <p>
            Molar Mass Lab’s compound pages echo this philosophy by showing element contributions explicitly. When your manual
            work matches that structure, you are training the same mental model that professional quantitative reasoning expects,
            only at a scale appropriate for early coursework.
          </p>
        </section>
      </article>
    </main>
  );
}
