export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { FormulaSub } from "@/components/ui/formula-sub";

export const metadata: Metadata = {
  title: "Stoichiometry Guide",
  description: "A practical stoichiometry guide using molar mass and mole ratios.",
  alternates: { canonical: "/stoichiometry-guide" },
};

export default function StoichiometryGuidePage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#0a0f1a]/90">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Stoichiometry Guide</h1>
          <p className="mt-3 text-[#0a0f1a]/85">
            Stoichiometry is the quantitative backbone of reaction chemistry. Once you can convert reliably between grams and
            moles using molar mass, you can predict how much product forms, how much reagent you need, and which reactant runs
            out first. This guide walks through the full workflow in the order you will actually use it in homework, exams, and
            introductory laboratory courses.
          </p>
          <p className="mt-3 text-[#0a0f1a]/85">
            For the calculator, compound pages, and full reference layout, open{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/" prefetch={false}>
              molar mass
            </Link>{" "}
            on the molar mass page.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Why stoichiometry starts with a balanced equation</h2>
          <p>
            A balanced chemical equation is not decorative. It encodes conservation of atoms and, for practical purposes, the
            mole ratios that govern how much of each substance participates in the transformation. The coefficients tell you
            how many moles of each species react relative to one another. If you skip balancing, every later step becomes a
            guess. In classroom problems, you should always write the balanced equation first, then annotate it with the mole
            bridge you plan to use.
          </p>
          <p>
            Many students treat balancing as a separate skill from stoichiometry, but in reality they are one continuous
            reasoning chain. Balancing forces you to notice polyatomic groups, charges in ionic contexts, and common
            fragments such as water leaving a condensation reaction. When you balance carefully, you reduce downstream errors
            such as doubling a reagent incorrectly or forgetting that diatomic gases appear as{" "}
            <FormulaSub formula="H2" /> or <FormulaSub formula="O2" /> rather than isolated atoms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">The gram–mole bridge and why molar mass is central</h2>
          <p>
            The laboratory measures mass. The balanced equation speaks in moles. Molar mass is the conversion factor that
            connects those worlds. For any pure substance with a defined chemical formula, you can compute a molar mass in
            grams per mole by summing element contributions from the periodic table. That single number is what allows you to
            translate a mass you can weigh into a mole amount you can insert into a ratio derived from coefficients.
          </p>
          <p>
            A practical habit is to carry units explicitly in every line of a calculation. Write grams as g, moles as mol,
            and molar mass as g/mol. When units cancel cleanly, you have strong evidence that your setup is consistent. When
            units refuse to cancel, you have an early warning that you inverted a ratio or used the wrong molar mass for a
            compound that is not in its standard reference state. This habit matters most in multi-step problems where one
            small mistake propagates through an entire page of work.
          </p>
          <p>
            Another habit that pays off is to delay rounding until the end. Atomic masses are not infinitely precise, but you
            should not round them aggressively while you are still multiplying by atom counts. Keep at least two guard digits
            during intermediate multiplication, then round the final reported answer to the precision your instructor expects.
            This approach reduces drift that otherwise shows up as answers that are close but not exact.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">The standard four-step stoichiometry pathway</h2>
          <p>
            Most stoichiometry problems follow a repeatable pathway. First, convert the known quantity of a starting substance
            into moles using its molar mass. Second, use the balanced equation to convert moles of the known substance into
            moles of the desired substance. Third, convert moles of the desired substance into grams using its molar mass.
            Fourth, interpret the result in context, including limiting reagent logic if more than one reactant quantity is
            specified.
          </p>
          <p>
            This pathway is powerful because it separates chemical reasoning from bookkeeping. The middle step is purely
            proportional: it depends only on coefficients. The outer steps depend on the specific elements and formula of each
            compound. When you get stuck, ask which step you are in. If you are staring at grams and coefficients at the same
            time, you are mixing steps. Always insert moles as the intermediate currency between mass and ratio reasoning.
          </p>
          <p>
            A compact mental model is to imagine a table with three columns: quantity, moles, and substance identity. You
            enter the known mass in the first row, convert to moles, hop along the balanced equation to a new row for the
            target substance, then convert that row to grams. Advanced problems add concentration and volume, gas pressure and
            temperature, or percent yield, but the mole row remains the organizing spine of the work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Limiting reagent thinking without memorized tricks</h2>
          <p>
            When two reactant masses are given, you are being asked to discover which reactant determines how far the reaction
            can proceed. Convert each reactant mass to moles, then divide each mole amount by its balanced coefficient. The
            smaller scaled value identifies the limiting reagent because it represents how many “reaction units” that
            reactant can support. Everything else is in excess relative to that bottleneck.
          </p>
          <p>
            Students sometimes try to compare raw mole amounts without scaling by coefficients, which fails whenever
            coefficients are not all equal to one. Another common failure is to compute the limiting reagent correctly but
            then continue the problem using the excess reagent’s mole amount for product prediction. After you identify the
            limiting reagent, all product amounts must be traced through that substance’s mole pathway, not through whichever
            number looks simpler on the page.
          </p>
          <p>
            If a problem gives one reactant mass and asks for the required mass of the other reactant, you are still using the
            same backbone. Convert the known reactant to moles, hop across the equation to the second reactant’s moles, then
            convert to grams. In that case there is no competition between reactants unless the wording introduces a second
            constraint such as impurity percentage or leftover mass.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Theoretical yield, percent yield, and laboratory reality</h2>
          <p>
            Theoretical yield is the maximum possible mass of product predicted from perfect reaction based on limiting
            reagent stoichiometry. It is an idealization. Real reactions lose mass to side products, incomplete conversion,
            mechanical losses on glassware, and volatility if a product evaporates. Percent yield compares what you actually
            isolate to what theory predicts. In homework, percent yield problems are bookkeeping layered on top of standard
            stoichiometry: first compute theoretical yield, then divide observed yield by theoretical yield and multiply by
            one hundred percent.
          </p>
          <p>
            When instructors ask for “how much product forms,” read carefully. Sometimes they want theoretical yield only.
            Sometimes they want a mass after applying percent yield. Sometimes they want moles instead of grams. The balanced
            equation always gives moles first; grams are an optional final dressing determined by the prompt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Solution stoichiometry and gas stoichiometry in one sentence each</h2>
          <p>
            In solution chemistry, molarity links volume to moles. If you know molarity and volume, you can find moles, then
            hop across a reaction to another species, then convert to grams or to a new volume at a different concentration.
            The stoichiometry backbone is unchanged: moles remain the hub. In gas-law settings, you may be given pressure,
            volume, and temperature to compute moles, then you proceed identically once moles are known. The physical context
            changes, but the proportional reasoning does not.
          </p>
          <p>
            The reason this guide emphasizes workflow rather than dozens of isolated formulas is that exams reward flexible
            routing. If you internalize moles as the universal connector, you can solve variants you have never seen verbatim,
            because you are not dependent on memorizing a template for every combination of given quantities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Common mistakes and how to avoid them</h2>
          <p>
            The most common mistake is using the wrong molar mass because the formula was misread. Subscripts matter, and
            parentheses matter because they multiply entire groups. A second common mistake is mishandling diatomic elements
            when they appear as reactants. A third is rounding too early, which produces answers that drift from keyed values.
            A fourth is forgetting that ionic compounds require formula units consistent with charge balance, which can differ
            from the simplest empirical ratio depending on how the problem is written.
          </p>
          <p>
            A strong defensive strategy is to write a short verification line. After you compute a target mass, convert it
            backward to moles and confirm that the mole ratio matches the balanced equation within reasonable rounding. That
            single check catches a surprisingly large fraction of sign errors, inverted ratios, and mistaken formula choices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">How to practice efficiently</h2>
          <p>
            Practice stoichiometry the way you practice algebra: start with straightforward single-path problems, then add one
            complication at a time. Introduce limiting reagent logic only after gram-to-mole conversions feel automatic. Add
            percent yield only after limiting reagent selection is reliable. Add solution steps only after mass-based
            stoichiometry is stable. This sequencing prevents the experience of constantly guessing which skill is failing when
            everything is mixed together from day one.
          </p>
          <p>
            When you use Molar Mass Lab compound pages alongside this guide, treat each page as a worked reference for the
            gram–mole bridge, then return here for the coefficient-driven ratio step. Together, those two layers mirror how
            quantitative chemistry is actually taught: first master composition and molar mass, then master reaction
            proportionality on top of that foundation.
          </p>
        </section>
      </article>
    </main>
  );
}
