"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };

type OnThisPageProps = {
  items: TocItem[];
};

/** Desktop: sticky sidebar. Mobile: compact accordion, collapsed by default. */
export function OnThisPage({ items }: OnThisPageProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  function handleNavigate() {
    setOpen(false);
  }

  return (
    <>
      {/* Mobile accordion */}
      <nav
        aria-label="On this page"
        className="no-print mb-6 rounded-2xl border border-border bg-surface lg:hidden"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-sm font-semibold tracking-wide text-foreground uppercase">
            On this page
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
        <div
          id={panelId}
          className={cn(
            "grid transition-[grid-template-rows] duration-200 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-0.5 border-t border-border px-2 pb-3 pt-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted no-underline hover:bg-surface-2 hover:text-foreground"
                    onClick={handleNavigate}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop sticky sidebar */}
      <aside className="no-print hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <nav aria-label="On this page" className="rounded-2xl border border-border bg-surface p-4">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">On this page</p>
          <ul className="mt-3 max-h-[70vh] space-y-1.5 overflow-y-auto pr-1">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted no-underline hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
