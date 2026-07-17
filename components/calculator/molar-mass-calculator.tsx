"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { MassBreakdownChart } from "@/components/charts/mass-breakdown-chart";
import { Button } from "@/components/ui/button";
import { Formula } from "@/components/ui/formula";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { compoundHref } from "@/lib/chemistry/format";
import { getProfileByFormula, searchProfiles } from "@/lib/chemistry/registry";
import { resolveFormulaInput } from "@/lib/chemistry/resolve";
import { calculateMolarMass } from "@/lib/molar-mass";

const quickFormulas = ["H2O", "CO2", "NaCl", "H2SO4", "C6H12O6", "NaOH", "NH3", "CH4"];

type MolarMassCalculatorProps = {
  compact?: boolean;
  initialQuery?: string;
};

export function MolarMassCalculator({ compact = false, initialQuery = "" }: MolarMassCalculatorProps) {
  const searchParams = useSearchParams();
  const paramQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery || paramQ);

  useEffect(() => {
    if (paramQ) setQuery(paramQ);
  }, [paramQ]);

  const formula = useMemo(() => resolveFormulaInput(query), [query]);
  const result = useMemo(() => (formula ? calculateMolarMass(formula) : null), [formula]);
  const profile = result ? getProfileByFormula(result.formula) : undefined;
  const suggestions = useMemo(() => (query.trim() ? searchProfiles(query).slice(0, 5) : []), [query]);

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      <div className="space-y-3">
        <label htmlFor="molar-mass-input" className="block text-sm font-semibold text-foreground">
          Chemical formula or compound name
        </label>
        <Input
          id="molar-mass-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Examples: H2O, NaCl, sulfuric acid"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="flex flex-wrap gap-2">
          {quickFormulas.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setQuery(item)}
              className="rounded-lg border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-brand hover:text-brand"
            >
              <Formula value={item} />
            </button>
          ))}
        </div>
      </div>

      {result ? (
        <div className="space-y-5 animate-fade">
          <div className="rounded-2xl border border-brand/25 bg-brand-soft/60 p-5 dark:bg-brand-soft/30">
            <p className="text-sm font-medium text-muted">Molar mass of <Formula value={result.formula} /></p>
            <p className="mt-1 font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {result.molarMass.toFixed(3)}
              <span className="ml-2 text-lg font-medium text-muted">g/mol</span>
            </p>
            {profile ? (
              <Link
                href={compoundHref(profile.slug)}
                className="mt-3 inline-flex text-sm font-semibold no-underline hover:underline"
              >
                Open full chemistry profile for {profile.name} →
              </Link>
            ) : (
              <p className="mt-3 text-sm text-muted">
                Calculation complete. Open the compound library to study properties, reactions, and practice for common
                substances.
              </p>
            )}
          </div>

          {!compact ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Element</TableHead>
                    <TableHead>Atoms</TableHead>
                    <TableHead>Atomic mass</TableHead>
                    <TableHead>Contribution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.breakdown.map((row) => (
                    <TableRow key={row.element}>
                      <TableCell className="font-semibold">{row.element}</TableCell>
                      <TableCell>{row.count}</TableCell>
                      <TableCell>{row.atomicMass.toFixed(3)}</TableCell>
                      <TableCell>{row.contribution.toFixed(3)} g/mol</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <MassBreakdownChart breakdown={result.breakdown} total={result.molarMass} />
            </>
          ) : null}
        </div>
      ) : query.trim() ? (
        <p className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-muted">
          Could not parse that input. Try a valid formula like <Formula value="Ca(OH)2" /> or a compound name.
        </p>
      ) : null}

      {suggestions.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <Link
              key={item.slug}
              href={compoundHref(item.slug)}
              className="rounded-lg bg-surface-2 px-3 py-1.5 text-sm no-underline hover:bg-brand-soft"
            >
              {item.name}
            </Link>
          ))}
        </div>
      ) : null}

      {!compact && !result ? (
        <Button type="button" variant="soft" onClick={() => setQuery("H2O")}>
          Try the water example
        </Button>
      ) : null}
    </div>
  );
}
