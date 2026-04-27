"use client";

import Link from "next/link";
import { ArrowRight, Check, Copy, FlaskConical, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormulaSub } from "@/components/ui/formula-sub";
import { Input } from "@/components/ui/input";
import { getCompoundName } from "@/lib/chemistry-format";
import { getCompoundSuggestions } from "@/lib/calculator-suggestions";
import { getCompoundHref, quickFormulas, resolveFormulaFromKeyword } from "@/lib/compound-data";
import { getElementDisplay } from "@/lib/element-names";
import { calculateMolarMass } from "@/lib/molar-mass";

const DEFAULT_CALCULATOR_INPUT = "O2 or Oxygen";

type HeroCalculatorProps = {
  /** `calculator` = dedicated /calculator page (H1 and copy focus on the tool only). */
  variant?: "home" | "calculator";
};

const SUGGESTIONS_LIST_ID = "calculator-compound-suggestions";

export function HeroCalculator({ variant = "home" }: HeroCalculatorProps) {
  const [formula, setFormula] = useState(DEFAULT_CALCULATOR_INPUT);
  const [copied, setCopied] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const inputWrapRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => getCompoundSuggestions(formula, 60), [formula]);

  useEffect(() => {
    if (suggestions.length === 0) {
      setSuggestionsOpen(false);
    }
  }, [suggestions.length]);

  /** Desktop (md+): close suggestions when clicking outside. Mobile: only X or picking a row closes. */
  useEffect(() => {
    if (!suggestionsOpen || suggestions.length === 0) return;

    const onPointerDown = (event: PointerEvent) => {
      if (typeof window === "undefined") return;
      if (!window.matchMedia("(min-width: 768px)").matches) return;
      const wrap = inputWrapRef.current;
      if (wrap && !wrap.contains(event.target as Node)) {
        setSuggestionsOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [suggestionsOpen, suggestions.length]);

  const normalizedInputFormula = useMemo(() => {
    const keywordFormula = resolveFormulaFromKeyword(formula);
    return keywordFormula ?? formula;
  }, [formula]);
  const result = useMemo(() => calculateMolarMass(normalizedInputFormula), [normalizedInputFormula]);
  const normalizedFormula = result?.formula ?? formula.trim();
  const compoundName = getCompoundName(normalizedFormula);
  const calculationTerms = useMemo(
    () => result?.breakdown.map((row) => `${row.count} x ${row.atomicMass.toFixed(2)}`) ?? [],
    [result],
  );
  const contributionTerms = useMemo(
    () => result?.breakdown.map((row) => row.contribution.toFixed(2)) ?? [],
    [result],
  );

  const onCopyValue = async () => {
    if (!result) return;
    const sentence = `Molar Mass of ${compoundName} (${normalizedFormula}) is ${result.molarMass.toFixed(2)} g/mol`;
    await navigator.clipboard.writeText(sentence);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className="mx-auto w-full max-w-6xl border-b border-slate-200/90 px-4 pb-8 pt-[7.5rem] sm:px-6 md:pt-24">
      <div className="space-y-4">
        <Badge>Accurate molar mass data for homework, exams &amp; labs</Badge>
        {variant === "calculator" ? (
          <>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0f1a] sm:text-[3.15rem] sm:leading-[1.05]">
              Molar Mass Calculator
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#0a0f1a]">
              Enter a chemical formula or a compound name and get the molar mass in g/mol, with a clear element-by-element
              breakdown.
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0f1a] sm:text-[3.15rem] sm:leading-[1.05]">
              Molar Mass Calculator, Formula &amp; Compound List
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#0a0f1a]">
              Calculate molar mass quickly, review the element-by-element breakdown, and open compound pages for worked examples.
            </p>
          </>
        )}

        <div
          className="relative mt-5 overflow-visible rounded-xl border border-emerald-900/10 bg-[#e8f5ef] p-5 sm:p-6"
          id="calculator"
        >
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-8">
            <div className="min-w-0 space-y-5">
              <div className="rounded-lg border border-slate-200/80 bg-white/90 p-4">
                <p className="text-base font-semibold text-[#0a0f1a]">How to use this calculator</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-[#0a0f1a]">
                  <li>
                    Enter a formula (<FormulaSub className="font-medium" formula="H2O" />) or a compound name (for example
                    water or oxygen).
                  </li>
                  <li>
                    While typing a name, matching compounds appear in a list under the field (scroll if the list is long).
                    On phones and tablets, close it with the X or by choosing a compound. On desktop, it also closes when you
                    click elsewhere on the page.
                  </li>
                  <li>Press Calculate or choose a quick example.</li>
                  <li>Read the final answer in g/mol and element-by-element breakdown.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <div className="relative min-w-0 flex-1" ref={inputWrapRef}>
                  <Input
                    aria-autocomplete="list"
                    aria-controls={suggestions.length ? SUGGESTIONS_LIST_ID : undefined}
                    aria-expanded={suggestionsOpen && suggestions.length > 0}
                    aria-label="Chemical formula or compound name"
                    autoComplete="off"
                    className="h-12 border-slate-200/90 bg-white text-[15px] text-[#0a0f1a] focus-visible:border-[#1FA37A]"
                    onChange={(event) => {
                      setFormula(event.target.value);
                      setSuggestionsOpen(true);
                    }}
                    onFocus={() => {
                      if (suggestions.length > 0) setSuggestionsOpen(true);
                    }}
                    placeholder="Formula or compound name (e.g. NaCl, water)"
                    role="combobox"
                    value={formula}
                  />
                  {suggestionsOpen && suggestions.length > 0 ? (
                    <div className="absolute left-0 right-0 top-full z-[60] mt-1 flex flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                      <div className="flex shrink-0 items-center justify-end border-b border-slate-100 bg-slate-50 px-1 py-0.5">
                        <button
                          aria-label="Close suggestions"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#0a0f1a] transition-colors hover:bg-slate-200/80 hover:text-[#0F766E]"
                          onClick={() => setSuggestionsOpen(false)}
                          type="button"
                        >
                          <X className="h-4 w-4" aria-hidden />
                        </button>
                      </div>
                      <ul
                        className="max-h-60 overflow-y-auto overscroll-contain py-1"
                        id={SUGGESTIONS_LIST_ID}
                        role="listbox"
                      >
                        {suggestions.map((row) => (
                          <li key={row.formula} role="presentation">
                            <button
                              className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-[#0a0f1a] hover:bg-emerald-50"
                              onMouseDown={(event) => {
                                event.preventDefault();
                                setFormula(row.name);
                                setSuggestionsOpen(false);
                              }}
                              role="option"
                              type="button"
                            >
                              <span className="min-w-0 font-medium">{row.name}</span>
                              <FormulaSub className="shrink-0 text-[#0F766E]" formula={row.formula} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <Button className="h-12 shrink-0 px-7" size="lg" type="button">
                  Calculate
                </Button>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-base text-[#0a0f1a]">
                <span className="font-medium">Quick examples:</span>
                {quickFormulas.map((item) => (
                  <Link
                    key={item}
                    className="font-medium text-[#0F766E] underline-offset-2 hover:underline"
                    href={getCompoundHref(item)}
                    onClick={() => setFormula(item)}
                    prefetch={false}
                  >
                    <FormulaSub formula={item} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-4 border-t border-slate-200/80 pt-5 lg:border-t-0 lg:border-l lg:border-slate-200/60 lg:pl-8 lg:pt-0">
              {result ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-lg font-semibold text-[#0a0f1a]">
                    <FlaskConical className="h-5 w-5 shrink-0 text-[#0F766E]" aria-hidden />
                    <span>
                      Molar mass of <FormulaSub formula={normalizedFormula} /> is:
                    </span>
                    <Button
                      className="ml-auto h-8 w-fit border-slate-200/90 px-2.5 text-xs"
                      onClick={onCopyValue}
                      type="button"
                      variant="outline"
                    >
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? "Copied" : "Copy Answer"}
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-slate-200/90 bg-white px-4 py-4 sm:px-5 sm:py-5">
                      <p className="break-words text-2xl font-bold tracking-tight text-[#0F766E] min-[380px]:text-3xl sm:whitespace-nowrap sm:text-4xl md:text-5xl">
                        {result.molarMass.toFixed(2)} g/mol
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-[#0a0f1a]">
                      {result.molarMass.toFixed(2)} g/mol means one mole of the substance has a mass of{" "}
                      {result.molarMass.toFixed(2)} grams.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#0a0f1a]">Element breakdown</p>
                    {result.breakdown.map((row) => (
                      <div
                        key={row.element}
                        className="flex items-center justify-between rounded-md border border-slate-200/80 bg-white px-3 py-2 text-sm text-[#0a0f1a]"
                      >
                        <span>
                          {getElementDisplay(row.element)}: {row.count} x {row.atomicMass.toFixed(2)}
                        </span>
                        <span className="tabular-nums">= {row.contribution.toFixed(2)} g/mol</span>
                      </div>
                    ))}
                    <div className="overflow-x-auto rounded-md border border-slate-200/80 bg-white px-3 py-2 text-xs text-[#0a0f1a] sm:text-sm">
                      <p className="min-w-0 whitespace-normal break-words tabular-nums">Molar Mass = ({calculationTerms.join(" + ")})</p>
                      <p className="mt-1 min-w-0 whitespace-normal break-words tabular-nums">= {contributionTerms.join(" + ")}</p>
                      <p className="mt-1 font-semibold text-[#0F766E] tabular-nums">= {result.molarMass.toFixed(2)} g/mol</p>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F766E] underline-offset-2 hover:underline"
                    href={getCompoundHref(normalizedFormula)}
                    prefetch={false}
                  >
                    Explore full {compoundName} (<FormulaSub formula={normalizedFormula} />) page{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </>
              ) : (
                <p className="text-sm leading-relaxed text-[#0a0f1a]">
                  Enter a valid formula or compound name (for example{" "}
                  <FormulaSub formula="H2SO4" /> or <FormulaSub formula="Ca(OH)2" />
                  ).
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
