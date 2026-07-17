"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Formula } from "@/components/ui/formula";
import { Input } from "@/components/ui/input";
import { compoundHref } from "@/lib/chemistry/format";
import { searchProfiles } from "@/lib/chemistry/registry";
import { resolveFormulaInput } from "@/lib/chemistry/resolve";
import { calculateMolarMass } from "@/lib/molar-mass";
import { cn } from "@/lib/utils";

type InstantSearchProps = {
  autoFocus?: boolean;
  onNavigate?: () => void;
  className?: string;
  placeholder?: string;
};

export function InstantSearch({
  autoFocus,
  onNavigate,
  className,
  placeholder = "Search by compound name or formula…",
}: InstantSearchProps) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchProfiles(query).slice(0, 8), [query]);
  const liveCalc = useMemo(() => {
    const formula = resolveFormulaInput(query);
    if (!formula) return null;
    return calculateMolarMass(formula);
  }, [query]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    onNavigate?.();
    router.push(href);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (event.key === "ArrowDown" || event.key === "Enter")) setOpen(true);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (results[active]) {
        go(compoundHref(results[active].slug));
      } else if (liveCalc) {
        go(`/calculator?q=${encodeURIComponent(liveCalc.formula)}`);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <label className="sr-only" htmlFor={`${listId}-input`}>
        Search compounds
      </label>
      <Input
        id={`${listId}-input`}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        autoFocus={autoFocus}
        value={query}
        placeholder={placeholder}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActive(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />
      {open && (results.length > 0 || liveCalc) ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-40 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow)]"
        >
          {results.map((profile, index) => (
            <li key={profile.slug} role="option" aria-selected={active === index}>
              <Link
                href={compoundHref(profile.slug)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 no-underline",
                  active === index ? "bg-brand-soft text-foreground" : "text-foreground hover:bg-surface-2",
                )}
                onMouseEnter={() => setActive(index)}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <span>
                  <span className="font-semibold">{profile.name}</span>
                  <span className="ml-2 text-muted">
                    <Formula value={profile.formula} />
                  </span>
                </span>
                <span className="text-xs text-muted">Profile</span>
              </Link>
            </li>
          ))}
          {liveCalc && !results.some((r) => r.formula === liveCalc.formula) ? (
            <li role="option">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left hover:bg-surface-2"
                onClick={() => go(`/calculator?q=${encodeURIComponent(liveCalc.formula)}`)}
              >
                <span>
                  Calculate <Formula value={liveCalc.formula} />
                </span>
                <span className="font-mono text-sm text-brand">{liveCalc.molarMass.toFixed(2)} g/mol</span>
              </button>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
