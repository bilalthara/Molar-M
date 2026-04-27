"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { periodicElements, type ElementCategory, type PeriodicElement } from "@/lib/periodic-table-data";
import { cn } from "@/lib/utils";

const categoryColors: Record<ElementCategory, string> = {
  "alkali metal": "bg-rose-100 text-rose-900 border-rose-200",
  "alkaline earth metal": "bg-orange-100 text-orange-900 border-orange-200",
  "transition metal": "bg-amber-100 text-amber-900 border-amber-200",
  "post-transition metal": "bg-emerald-100 text-emerald-900 border-emerald-200",
  metalloid: "bg-lime-100 text-lime-900 border-lime-200",
  "reactive nonmetal": "bg-cyan-100 text-cyan-900 border-cyan-200",
  "noble gas": "bg-violet-100 text-violet-900 border-violet-200",
  lanthanide: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200",
  actinide: "bg-sky-100 text-sky-900 border-sky-200",
};

function elementMatches(element: PeriodicElement, q: string) {
  if (!q) return true;
  return (
    element.name.toLowerCase().includes(q) ||
    element.symbol.toLowerCase().includes(q) ||
    element.atomicNumber.toString().includes(q)
  );
}

export function PeriodicTableGrid() {
  const [query, setQuery] = useState("");
  const [activeNumber, setActiveNumber] = useState<number>(1);
  const search = query.trim().toLowerCase();

  const highlightedNumbers = useMemo(
    () => new Set(periodicElements.filter((element) => elementMatches(element, search)).map((element) => element.atomicNumber)),
    [search],
  );

  const activeElement = periodicElements.find((element) => element.atomicNumber === activeNumber) ?? periodicElements[0];

  return (
    <section className="space-y-6">
      <Input
        aria-label="Search element by name, symbol, or atomic number"
        className="w-full md:max-w-lg"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by element name, symbol, or atomic number"
        value={query}
      />

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
        <div
          className="grid min-w-[980px] gap-2"
          style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))", gridTemplateRows: "repeat(9, minmax(0, 1fr))" }}
        >
          {periodicElements.map((element) => {
            const isVisible = highlightedNumbers.has(element.atomicNumber);
            const isActive = activeElement.atomicNumber === element.atomicNumber;
            return (
              <button
                className={cn(
                  "rounded-md border p-1.5 text-left transition-transform duration-150 hover:scale-[1.02]",
                  categoryColors[element.category],
                  !isVisible && "opacity-25",
                  isActive && "ring-2 ring-[#0F766E]",
                )}
                key={element.atomicNumber}
                onClick={() => setActiveNumber(element.atomicNumber)}
                style={{ gridColumn: element.group, gridRow: element.period }}
                type="button"
              >
                <p className="text-[10px] font-medium leading-none">{element.atomicNumber}</p>
                <p className="mt-1 text-base font-bold leading-none">{element.symbol}</p>
                <p className="mt-1 truncate text-[10px] leading-none">{element.name}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-[#0a0f1a]">
          {activeElement.name} ({activeElement.symbol})
        </h2>
        <div className="mt-3 grid gap-2 text-sm text-[#0a0f1a]/90 sm:grid-cols-2">
          <p>Atomic Number: {activeElement.atomicNumber}</p>
          <p>Molar Mass: {activeElement.molarMass.toFixed(3)} g/mol</p>
          <p className="sm:col-span-2">Category: {activeElement.category}</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(categoryColors).map(([category, className]) => (
          <div className={cn("rounded-md border px-3 py-2 text-sm capitalize", className)} key={category}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
