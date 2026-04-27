import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lab Prep Guide",
  description: "Lab preparation checklist for molar-mass-based reagent planning.",
  alternates: { canonical: "/lab-prep-guide" },
};

export default function LabPrepGuidePage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-[#0a0f1a]/90">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Lab Prep Guide</h1>
          <p className="mt-3 text-[#0a0f1a]/85">
            Good laboratory preparation is not only about safety symbols and glassware names. It is about turning a written
            procedure into a sequence of measured actions with controlled uncertainty. Molar mass is one of the earliest tools
            you use to translate a planned reaction scale into masses you can weigh on a balance. This guide focuses on how to
            prepare quantitatively in a way that reduces common first-year laboratory mistakes while keeping your notebook
            defensible and repeatable.
          </p>
          <p className="mt-3 text-[#0a0f1a]/85">
            When you want the calculator and structured compound data in one place, open{" "}
            <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/" prefetch={false}>
              molar mass
            </Link>{" "}
            on the molar mass page.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Read the experiment as a measurement story</h2>
          <p>
            Before touching reagents, read the entire procedure once for intent and once for quantities. The first pass answers
            what chemical transformation you are performing and what hazards are highlighted. The second pass extracts every
            numerical target: volumes, masses, concentrations, expected yields, and any suggested ranges. If the procedure
            gives you a target concentration and a final volume, you should know whether you are preparing a solution from a
            solid or diluting a stock solution. That distinction determines whether your first molar mass step applies to a pure
            solid or whether you are working primarily in the liquid phase with molarity algebra.
          </p>
          <p>
            When quantities are missing but implied, resolve them early. For example, if a synthesis step assumes a limiting
            reagent without stating mass explicitly, you may need to compute it from a prior step’s product assumption. It is
            far cheaper to resolve ambiguity on paper than at the bench when a reaction is already underway.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Build a reagent table before you open bottles</h2>
          <p>
            A reagent table is a simple grid: compound name, formula, role in the reaction, planned moles, molar mass, planned
            mass, and notes on hazards or handling. The act of writing planned moles forces you to connect procedure scale to
            stoichiometry. The act of computing planned mass forces you to confront whether your balance can measure that mass
            reliably or whether you need to prepare a stock solution instead. Many introductory labs fail at the weighing step
            because students attempt to weigh tiny masses directly when a dilution route would be more stable.
          </p>
          <p>
            Include a column for purity and solvent content if the bottle label specifies it. If you ignore ninety-eight
            percent purity because the procedure did not mention it, you may be introducing systematic error. In teaching
            labs, instructors sometimes simplify purity away, but in research-style writeups purity is part of the measurement
            model. Ask when unsure, because the expected tolerance depends on course norms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Glassware choice and uncertainty</h2>
          <p>
            Volumetric glassware exists to deliver or contain volumes with defined tolerance classes. Beakers and Erlenmeyer
            flasks are not volumetric devices; they are mixing vessels. If a procedure requires a precise final concentration,
            use a volumetric flask when preparing that solution, and record the flask size you used. If you transfer liquids
            with a graduated cylinder, acknowledge larger relative uncertainty than a volumetric pipette would provide. These
            choices matter when your computed mass depends on a concentration that itself came from a volume measurement chain.
          </p>
          <p>
            When combining mass-based preparation with volume-based preparation, keep a clear boundary between the two paths
            in your notebook. Mixing steps on one line makes errors harder to diagnose after the fact, both for you and for a
            teaching assistant grading the work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Weighing strategy and hygroscopic solids</h2>
          <p>
            Some solids pull water from air quickly, which means the mass on the balance is not purely the anhydrous compound
            you modeled on paper. For those materials, minimize open time, use a weighing boat, and consider preparing a
            slightly concentrated stock if the procedure allows it. If the lab provides pre-weighed packets, understand that
            the pedagogical goal may be speed rather than maximum precision, but you should still record what you used.
          </p>
          <p>
            For liquids with density provided, mass and volume conversions should be treated as paired measurements. If you
            measure volume, convert to mass using density when the stoichiometry path expects mass. If you measure mass,
            convert to volume only when needed for glassware selection. Always write density with units so you do not invert it
            silently.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Acids, bases, and dilution judgment</h2>
          <p>
            Concentrated acids are common in teaching laboratories because they are economical, but they are dangerous and easy
            to misuse. When a procedure tells you to prepare a dilute acid solution, the safe conceptual framing is to add acid
            to water unless your instructor explicitly trains a different protocol for a controlled setup. Quantitatively, you
            should compute moles of acid needed from target molarity and volume, then translate to mass or volume of the stock
            solution using its labeled concentration and density if required.
          </p>
          <p>
            If you compute a required stock volume that is impractically small to pipette, scale up mentally: prepare a larger
            intermediate dilution first, then take an aliquot. This is standard professional practice and is not “cheating the
            procedure” if your notebook documents the dilution factor clearly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Labeling, waste, and traceability</h2>
          <p>
            Labels should include substance identity, concentration if applicable, date, and your initials if the course uses
            shared storage. Traceability matters when multiple students prepare similar bottles and when a teaching assistant
            needs to identify what went wrong in a spill or mis-titration. Waste segregation rules vary by institution, but the
            quantitative habit still applies: estimate how much unused reagent you will generate and plan container sizes
            accordingly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">What to do when your measurement disagrees with theory</h2>
          <p>
            Discrepancy is normal. First check for procedural deviation: wrong flask, wrong concentration label, incomplete
            transfer, or balance zero drift. Second check for calculation deviation: wrong molar mass, wrong formula unit,
            forgotten hydrate waters, or mistaken limiting reagent assumption. Third check for physical deviation: evaporation,
            incomplete reaction, temperature effects on density, or side reactions. A structured checklist turns panic into
            diagnosis and is one of the strongest signals of mature lab thinking.
          </p>
          <p>
            Quantitative chemistry is not only about getting the “right number.” It is about knowing why your number should be
            plausible. Molar mass work is the first place many students learn that lesson, because the bridge between grams and
            moles is simple enough to verify quickly but consequential enough to matter in every subsequent step.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0a0f1a]">Closing habit: rehearse the first twenty minutes</h2>
          <p>
            The highest-risk period is the beginning: setting up glassware, confirming reagents, and performing the first
            transfers. Rehearse that segment mentally with your computed masses beside you. If anything feels inconsistent,
            resolve it before you uncap corrosive liquids or start heating. This habit costs minutes and prevents hours of
            rework—or worse, unsafe corrections mid-experiment.
          </p>
        </section>
      </article>
    </main>
  );
}
