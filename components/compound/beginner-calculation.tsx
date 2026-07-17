import { Formula } from "@/components/ui/formula";
import { elementName } from "@/lib/chemistry/element-names";
import { formatFormula, formatMolarMass } from "@/lib/chemistry/format";
import type { FormulaResult } from "@/lib/molar-mass";

type BeginnerCalculationProps = {
  name: string;
  formula: string;
  calculation: FormulaResult;
  commonMistakes?: string[];
  memoryTrick?: string;
};

export function BeginnerCalculation({
  name,
  formula,
  calculation,
  commonMistakes = [],
  memoryTrick,
}: BeginnerCalculationProps) {
  const atomWord = (count: number) => (count === 1 ? "atom" : "atoms");
  const final = formatMolarMass(calculation.molarMass, 3);

  return (
    <div className="space-y-6 text-[15px] leading-relaxed text-muted sm:text-base">
      <p className="text-foreground">
        Let&apos;s find the molar mass of {name} (<Formula value={formula} className="text-foreground" />) together—step
        by step, as if you are seeing the formula for the first time.
      </p>

      <div className="rounded-2xl border border-border bg-surface-2/50 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground">Step 1 — Look at the chemical formula</h3>
        <p className="mt-2">
          The formula is <Formula value={formula} className="text-foreground" />. Each letter stands for an element.
          The little number after a letter (the subscript) tells you how many atoms of that element are in one
          molecule or formula unit.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground">
          {calculation.breakdown.map((row) => (
            <li key={row.element}>
              <strong>{row.count}</strong> {elementName(row.element)} {atomWord(row.count)} (
              <span className="font-mono">{row.element}</span>)
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-surface-2/50 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground">Step 2 — Look up each atomic mass</h3>
        <p className="mt-2">
          Atomic mass comes from the periodic table. It is the average mass of one mole of atoms of that element, in
          grams per mole (g/mol). Think of it as the &quot;price tag&quot; for one mole of that element.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground">
          {calculation.breakdown.map((row) => (
            <li key={`mass-${row.element}`}>
              {elementName(row.element)} ({row.element}) = <strong>{row.atomicMass.toFixed(3)} g/mol</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-surface-2/50 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground">Step 3 — Multiply atoms × atomic mass</h3>
        <p className="mt-2">
          Why multiply? If one oxygen atom &quot;costs&quot; about 16 g/mol, then two oxygen atoms cost twice as much.
          Each element&apos;s contribution is: number of atoms × atomic mass.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 font-mono text-[13px] leading-relaxed text-foreground sm:text-base">
          {calculation.breakdown.map((row) => (
            <li key={`mul-${row.element}`} className="break-words">
              {row.count} × {row.atomicMass.toFixed(3)} = <strong>{row.contribution.toFixed(3)} g/mol</strong> (
              {elementName(row.element)})
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-surface-2/50 p-4 sm:p-5">
        <h3 className="text-base font-semibold text-foreground">Step 4 — Add the contributions</h3>
        <p className="mt-2">
          Why add? The molar mass of the whole compound is simply the total mass of every atom in the formula. Add
          each element&apos;s contribution:
        </p>
        <p className="mt-3 break-all font-mono text-[13px] leading-relaxed text-foreground sm:text-base">
          {calculation.breakdown.map((row) => row.contribution.toFixed(3)).join(" + ")} ={" "}
          <strong>{calculation.molarMass.toFixed(3)} g/mol</strong>
        </p>
      </div>

      <div className="rounded-2xl border border-brand/30 bg-brand-soft/50 p-4 sm:p-5 dark:bg-brand-soft/25">
        <h3 className="text-base font-semibold text-foreground">Step 5 — Final answer</h3>
        <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          Molar mass of {name} = <span className="font-mono text-brand">{final}</span>
        </p>
        <p className="mt-2 text-sm">
          That means one mole of {name} (<Formula value={formula} />) has a mass of about{" "}
          {calculation.molarMass.toFixed(2)} grams.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-foreground">Quick summary</h3>
        <p className="mt-2">
          Read the formula → count atoms → look up atomic masses → multiply → add → report g/mol. For{" "}
          {formatFormula(formula)}, the total is <strong className="text-foreground">{final}</strong>.
        </p>
      </div>

      {commonMistakes.length > 0 ? (
        <div>
          <h3 className="text-base font-semibold text-foreground">Common beginner mistakes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {commonMistakes.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {memoryTrick ? (
        <div>
          <h3 className="text-base font-semibold text-foreground">Memory trick</h3>
          <p className="mt-2">{memoryTrick}</p>
        </div>
      ) : (
        <div>
          <h3 className="text-base font-semibold text-foreground">Memory trick</h3>
          <p className="mt-2">
            Say it out loud: &quot;Count, look up, multiply, add, units.&quot; If you skip units (g/mol), treat the
            answer as unfinished.
          </p>
        </div>
      )}

      <div>
        <h3 className="text-base font-semibold text-foreground">Mini practice</h3>
        <p className="mt-2">
          Without looking above, list the atoms in <Formula value={formula} /> and write one multiplication line for
          the heaviest element. Then check your work against Step 3.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-foreground">Real-world example</h3>
        <p className="mt-2">
          If a recipe asks for 0.100 mol of {name}, mass needed = 0.100 × {calculation.molarMass.toFixed(3)} ={" "}
          <strong className="text-foreground">{(0.1 * calculation.molarMass).toFixed(3)} g</strong>. That is how
          chemists turn a mole amount into a weighable sample.
        </p>
      </div>
    </div>
  );
}
