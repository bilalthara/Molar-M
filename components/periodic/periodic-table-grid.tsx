"use client";

import { useState } from "react";

import { periodicElements, type PeriodicElement } from "@/lib/periodic-table-data";
import { cn } from "@/lib/utils";

const categoryColors: Record<PeriodicElement["category"], string> = {
  "alkali metal": "bg-rose-100 border-rose-200 dark:bg-rose-950/40 dark:border-rose-900",
  "alkaline earth metal": "bg-orange-100 border-orange-200 dark:bg-orange-950/40 dark:border-orange-900",
  "transition metal": "bg-sky-100 border-sky-200 dark:bg-sky-950/40 dark:border-sky-900",
  "post-transition metal": "bg-cyan-100 border-cyan-200 dark:bg-cyan-950/40 dark:border-cyan-900",
  metalloid: "bg-lime-100 border-lime-200 dark:bg-lime-950/40 dark:border-lime-900",
  "reactive nonmetal": "bg-teal-100 border-teal-200 dark:bg-teal-950/40 dark:border-teal-900",
  "noble gas": "bg-violet-100 border-violet-200 dark:bg-violet-950/40 dark:border-violet-900",
  lanthanide: "bg-fuchsia-100 border-fuchsia-200 dark:bg-fuchsia-950/40 dark:border-fuchsia-900",
  actinide: "bg-pink-100 border-pink-200 dark:bg-pink-950/40 dark:border-pink-900",
};

export function PeriodicTableGrid() {
  const [selected, setSelected] = useState<PeriodicElement | null>(periodicElements[0] ?? null);

  return (
    <div className="space-y-6">
      {/* Mobile: vertical list — no horizontal scroll */}
      <div className="md:hidden">
        <label htmlFor="periodic-element-select" className="mb-2 block text-sm font-semibold text-foreground">
          Choose an element
        </label>
        <select
          id="periodic-element-select"
          className="mb-4 h-12 w-full rounded-xl border border-border bg-surface px-3 text-base text-foreground"
          value={selected?.symbol ?? ""}
          onChange={(event) => {
            const next = periodicElements.find((el) => el.symbol === event.target.value) ?? null;
            setSelected(next);
          }}
        >
          {periodicElements.map((element) => (
            <option key={element.symbol} value={element.symbol}>
              {element.atomicNumber}. {element.name} ({element.symbol}) — {element.molarMass}
            </option>
          ))}
        </select>
        <ul className="max-h-[22rem] space-y-1 overflow-y-auto rounded-2xl border border-border p-2">
          {periodicElements.map((element) => (
            <li key={element.symbol}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left",
                  selected?.symbol === element.symbol ? "bg-brand-soft text-foreground" : "hover:bg-surface-2",
                )}
                onClick={() => setSelected(element)}
                aria-pressed={selected?.symbol === element.symbol}
              >
                <span className="min-w-0">
                  <span className="font-semibold text-foreground">
                    {element.symbol}
                    <span className="ml-2 font-normal text-muted">{element.name}</span>
                  </span>
                </span>
                <span className="shrink-0 font-mono text-sm text-muted">{element.molarMass}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop / tablet: classic grid */}
      <div className="hidden overflow-x-auto pb-2 md:block">
        <div
          className="grid min-w-[720px] gap-1"
          style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}
          role="grid"
          aria-label="Periodic table"
        >
          {periodicElements.map((element) => (
            <button
              key={element.symbol}
              type="button"
              role="gridcell"
              style={{ gridColumn: element.group, gridRow: element.period }}
              className={cn(
                "flex aspect-square flex-col items-start justify-between rounded-md border p-1 text-left transition-transform hover:scale-[1.03]",
                categoryColors[element.category],
                selected?.symbol === element.symbol && "ring-2 ring-brand",
              )}
              onClick={() => setSelected(element)}
              aria-pressed={selected?.symbol === element.symbol}
              aria-label={`${element.name}, atomic number ${element.atomicNumber}`}
            >
              <span className="text-[10px] text-muted">{element.atomicNumber}</span>
              <span className="text-sm font-bold text-foreground">{element.symbol}</span>
              <span className="w-full truncate text-[9px] text-muted">{element.molarMass}</span>
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <div className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
          <p className="text-sm text-muted">Selected element</p>
          <h2 className="mt-1 text-2xl text-foreground break-words">
            {selected.name} ({selected.symbol})
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div>
              <dt className="text-muted">Atomic number</dt>
              <dd className="font-semibold">{selected.atomicNumber}</dd>
            </div>
            <div>
              <dt className="text-muted">Atomic mass</dt>
              <dd className="font-semibold">{selected.molarMass} g/mol</dd>
            </div>
            <div>
              <dt className="text-muted">Category</dt>
              <dd className="font-semibold capitalize">{selected.category}</dd>
            </div>
            <div>
              <dt className="text-muted">Period / Group</dt>
              <dd className="font-semibold">
                {selected.period} / {selected.group}
              </dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}
