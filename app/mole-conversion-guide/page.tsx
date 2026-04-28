export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { FormulaSub } from "@/components/ui/formula-sub";

export const metadata: Metadata = {
  title: "Mole Conversion Guide",
  description: "Learn grams-to-moles and moles-to-grams conversion with clear formulas.",
  alternates: { canonical: "/mole-conversion-guide" },
};

export default function MoleConversionGuidePage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#0a0f1a]/90">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Mole Conversion Guide</h1>
          <p className="mt-3 text-[#0a0f1a]/85">
            Mole conversions are the daily currency of quantitative chemistry. Whether you are converting between grams and
            moles, linking moles to counts of particles, or chaining conversions through concentration and volume, the same
            principle applies: use a single consistent pathway, carry units, and treat molar mass as the conversion factor that
            translates between the measurable world and the mole world.
          </p>
          <p className="mt-3 text-[#0a0f1a]/85">
            To cross-check values or run quick conversions alongside this guide, open{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/" prefetch={false}>
              molar mass
            </Link>{" "}
            on the molar mass page.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">What a mole is, in practical terms</h2>
          <p>
            A mole is a counting unit scaled for atoms and molecules. It is analogous to a dozen, except the count is enormous
            by design so that macroscopic masses become convenient. The key idea for conversions is not memorizing every
            historical definition, but understanding that whenever you know moles, you can translate to grams if you know the
            substance’s molar mass, and whenever you know grams, you can translate to moles by dividing by that same molar
            mass. That bidirectional bridge is the foundation for nearly every quantitative problem in introductory chemistry.
          </p>
          <p>
            Students sometimes treat Avogadro’s number as a separate topic from molar mass, but both are conversion factors
            between different descriptions of amount. Molar mass connects moles to grams. Avogadro’s constant connects moles to
            particle counts. In many courses, particle-count conversions appear less frequently than mass conversions, but the
            dimensional analysis structure is identical: write the known quantity, multiply by a factor arranged so unwanted
            units cancel, and stop when the remaining units match what the question requests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Grams to moles: the division form</h2>
          <p>
            To convert from grams to moles, divide mass by molar mass. Intuitively, if one mole has a mass of many grams, then
            a smaller mass corresponds to a fraction of a mole. Algebraically, you can rearrange the relationship mass equals
            moles times molar mass to isolate moles. Always check that your units cancel: grams divided by grams per mole leaves
            moles. If you accidentally invert the ratio, your answer will be wildly wrong, but the unit check will usually catch
            it immediately if you write units on every line.
          </p>
          <p>
            A second practical check is magnitude reasoning. For a substance with a large molar mass, a modest mass in grams
            should correspond to a small number of moles. For a substance with a small molar mass, the same gram amount
            corresponds to more moles. This sanity check is especially useful when calculators are set to scientific notation
            and it is easy to misread an exponent by one step.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Moles to grams: the multiplication form</h2>
          <p>
            To convert from moles to grams, multiply moles by molar mass. This is the inverse of the grams-to-moles pathway.
            Many students memorize both formulas separately, but it is cleaner to remember one relationship and derive the rest
            by rearrangement. If you know moles and you need mass, you are scaling up from the per-mole reference to the actual
            amount you have. If you know mass and you need moles, you are asking how many per-mole reference chunks fit into
            your sample.
          </p>
          <p>
            When problems provide moles directly, it is tempting to jump straight to numbers without writing molar mass, but
            writing the molar mass line anyway reduces transcription errors. It also makes your work legible to instructors who
            grade partially for method. In timed exams, method clarity is not optional; it is how you recover when stress
            causes a slip in arithmetic.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Dimensional analysis as a universal scaffold</h2>
          <p>
            Dimensional analysis means treating units as algebraic symbols that multiply and divide. You construct a chain of
            factors so that every intermediate unit cancels until only the target unit remains. This approach scales from the
            simplest gram–mole conversion to multi-step conversions involving density, concentration, and reaction stoichiometry.
            The reason instructors emphasize it is not pedantry; it is because it prevents a large class of conceptual errors
            that arise when students manipulate numbers without knowing what those numbers represent.
          </p>
          <p>
            A useful intermediate skill is to rewrite information in consistent base units before chaining. If a problem
            mixes milligrams and grams, convert early so you are not juggling three mass units simultaneously. If a problem
            uses kilomoles or millimoles, convert to standard moles unless the prompt explicitly demands otherwise. Consistency
            reduces cognitive load and makes cancellation patterns obvious on the page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Working with formulas, purity, and hydrates</h2>
          <p>
            Molar mass depends on the formula you choose as the unit of counting. For anhydrous salts versus hydrates, the
            formula includes waters of crystallization, which increases the molar mass and changes the mole amount associated
            with a measured mass. If a problem states that a sample is only ninety percent pure by mass, you must translate the
            measured mass into a mass of active substance before converting to moles of the desired chemical species. These
            complications do not change the core conversion; they change what mass is considered “belonging” to the formula
            you are using.
          </p>
          <p>
            A similar issue appears with gases that are mixtures rather than pure substances. In introductory courses, assume
            purity unless told otherwise, but always read for phrases like “impure sample” or “contains inert filler.” Those
            phrases are signals that your first conversion must adjust mass before you apply a molar mass tied to a reactive
            compound.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Significant figures and rounding discipline</h2>
          <p>
            Mole conversions inherit significant figure rules from the least precise measurement in the problem. Atomic masses
            from periodic tables often carry more digits than your measured mass, which means the measured mass frequently
            controls the precision of the final answer. A disciplined approach is to track significant figures as you compute,
            but still avoid aggressive intermediate rounding. A common compromise is to keep two extra digits during
            multiplication, then round once at the end to match the measurement constraint.
          </p>
          <p>
            When instructors allow “two decimal places for molar mass,” treat that as a reporting convention, not a license to
            erase intermediate precision. The difference between rounding atomic masses early versus late can exceed rounding
            thresholds in tight grading systems, especially for larger molecules where many contributions accumulate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Particle counts and the mole bridge</h2>
          <p>
            If a problem asks for atoms within a molecule, first convert mass to moles of the compound, then multiply by
            Avogadro’s number to obtain formula units or molecules, then multiply by the number of target atoms per formula if
            needed. Each hop is its own conversion factor. Students sometimes try to multiply by atom count too early, mixing
            composition with amount. The clean separation is: amount in moles of compound first, then composition inside one
            formula, expressed as a dimensionless ratio such as two moles of hydrogen atoms per one mole of{" "}
            <FormulaSub formula="H2O" /> if the question is framed that way.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Study strategy: speed without fragility</h2>
          <p>
            Speed comes from pattern recognition, but fragility comes from memorizing answers. The durable approach is to
            memorize only the two core relationships and the unit-cancellation method, then re-derive everything else during
            practice until the setup becomes automatic. Pair this guide with repeated manual calculation for a set of diverse
            formulas, including at least one example with parentheses, one hydrate example, and one diatomic element example.
            That set covers the majority of structural pitfalls seen on exams.
          </p>
          <p>
            Molar Mass Lab’s calculator and compound pages are designed to reinforce the same discipline: show breakdowns,
            emphasize units, and keep the pathway visible. When your written work mirrors that structure, you are aligning with
            how quantitative chemistry is graded and how laboratory notebooks are expected to read in professional settings.
          </p>
        </section>
      </article>
    </main>
  );
}
