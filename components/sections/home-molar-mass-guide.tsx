import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormulaSub } from "@/components/ui/formula-sub";
import { getCompoundHref } from "@/lib/compound-data";
import { getInternalLink } from "@/lib/internal-links";

export function HomeMolarMassGuide() {
  return (
    <section className="mx-auto w-full max-w-6xl border-t border-slate-200 px-4 py-6 sm:px-6" id="molar-mass-guide">
      <p className="mb-4 text-sm text-[#0a0f1a]/80">
        For instant numbers, use the calculator above or practice with the{" "}
        <Link className="font-medium text-[#0F766E] underline-offset-2 hover:underline" href="/molar-mass-practice-worksheet" prefetch={false}>
          Molar Mass Practice Worksheet
        </Link>
        .
      </p>
      <p className="mb-4 text-sm leading-relaxed text-[#0a0f1a]/80">
        Calculate molar mass quickly, review the element-by-element breakdown, and open compound pages for worked examples.
      </p>
      <div className="space-y-6">
        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">How to Calculate Molar Mass</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed text-[#0a0f1a]">
              <div>
                <h3 className="text-lg font-semibold text-[#0a0f1a]">1. Identify elements and subscripts</h3>
                <p className="mt-1.5">Read the formula and list each element with its atom count from subscripts and parentheses.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a0f1a]">2. Find atomic masses</h3>
                <p className="mt-1.5">Use periodic-table atomic masses (amu) for every element in the formula.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a0f1a]">3. Multiply by atom counts</h3>
                <p className="mt-1.5">For each element, multiply atomic mass by the number of atoms of that element.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a0f1a]">4. Sum to total molar mass</h3>
                <p className="mt-1.5">Add all contributions. Report the final value in g/mol (grams per mole).</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">Molar Mass Formula</h2>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed text-[#0a0f1a]">
              <p>
                Molar mass is calculated by adding the atomic masses of all atoms in a compound.
              </p>
              <p>
                <span className="font-mono text-sm">M = Σ (atomic mass × number of atoms)</span>
              </p>
              <p>
                <FormulaSub formula="CO2" /> → (1 × 12.01) + (2 × 16.00)
              </p>
              <p>
                <FormulaSub formula="Ca(OH)2" /> → (1 × Ca) + (2 × O) + (2 × H)
              </p>
              <p>Parentheses indicate that all atoms inside the group are multiplied by the subscript outside.</p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">How can I find the molar mass of an element?</h2>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed text-[#0a0f1a]">
              <p>
                Find the element&apos;s atomic mass on the periodic table. That value is the molar mass in g/mol. For example,
                carbon has an atomic mass of 12.01, so its molar mass is 12.01 g/mol.
              </p>
              <p>
                Remember the seven diatomic elements in their natural form: H<sub>2</sub>, N<sub>2</sub>, O<sub>2</sub>,
                F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, and I<sub>2</sub>.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">How can I find the molar mass of a chemical compound?</h2>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed text-[#0a0f1a]">
              <p>
                Add the masses of all atoms in the formula. Multiply each element&apos;s atomic mass by its atom count, including
                any counts affected by subscripts and parentheses.
              </p>
              <p>
                Example: NaCl → (1 × 22.99) + (1 × 35.45) = 58.44 g/mol. Example: FeCl<sub>2</sub> → (1 × 55.85) + (2 × 35.45) =
                126.75 g/mol.
              </p>
              <p>
                For grouped formulas such as Zn(NO<sub>3</sub>)<sub>2</sub>, multiply atoms inside parentheses by the outside
                subscript before adding each element&apos;s total mass.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">Examples</h2>
            </CardHeader>
            <CardContent className="text-base leading-relaxed text-[#0a0f1a]">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <Link
                    className="font-medium text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                    href={getCompoundHref("NaCl")}
                    prefetch={false}
                  >
                    Sodium chloride (<FormulaSub formula="NaCl" />)
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                    href={getCompoundHref("H2O")}
                    prefetch={false}
                  >
                    Water (<FormulaSub formula="H2O" />)
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-[#0F766E] underline decoration-[#0F766E]/50 underline-offset-2 hover:text-[#0d5c56] hover:decoration-[#0F766E]"
                    href={getCompoundHref("CO2")}
                    prefetch={false}
                  >
                    Carbon dioxide (<FormulaSub formula="CO2" />)
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">Common Mistakes</h2>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[#0a0f1a]">
                <li>Forgetting or misreading subscripts (for example <FormulaSub formula="H2O" /> vs <FormulaSub formula="H2O2" />).</li>
                <li>Using wrong or rounded-too-early atomic masses before the final sum.</li>
                <li>Unit confusion: molar mass belongs in g/mol; watch mass vs moles in word problems.</li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="border-slate-200/90 bg-white">
            <CardHeader>
              <h2 className="text-xl font-bold tracking-tight text-[#0a0f1a] sm:text-2xl">Quick Reference</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed text-[#0a0f1a]">
              <div>
                <h3 className="text-lg font-semibold">Molar mass vs molecular weight</h3>
                <p className="mt-1.5">
                  In classroom chemistry they are often used the same way; <strong>molar mass</strong> is the standard term for
                  values in g/mol.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Units of molar mass</h3>
                <p className="mt-1.5">Always g/mol (grams per mole) for molar mass in this site&apos;s tables and calculator output.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How to find molar mass quickly</h3>
                <p className="mt-1.5">
                  List each element, multiply atomic mass by atom count, add once at the end—or enter the formula in the{" "}
                  <Link className="font-medium text-[#0F766E] underline-offset-2 hover:underline" href={getInternalLink("calculator")}>
                    calculator
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
