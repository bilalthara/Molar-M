import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FormulaSubProps = {
  formula: string;
  className?: string;
};

/**
 * Renders a chemical formula with numeric subscripts as semantic <sub> elements
 * (e.g. H<sub>2</sub>O). Safe for titles, links, and body copy. Use plain formula strings in JSON-LD metadata.
 * Default spacing improves readability sitewide; pass `className` to merge or override.
 */
export function FormulaSub({ formula, className }: FormulaSubProps) {
  if (!formula) {
    return null;
  }
  const nodes: ReactNode[] = [];
  let last = 0;
  const re = /(\d+)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(formula)) !== null) {
    if (match.index > last) {
      nodes.push(formula.slice(last, match.index));
    }
    nodes.push(<sub key={`${match.index}-${match[1]}`}>{match[1]}</sub>);
    last = match.index + match[0].length;
  }
  if (last < formula.length) {
    nodes.push(formula.slice(last));
  }
  return (
    <span
      className={cn(
        "inline max-w-none align-baseline tracking-[0.03em] [font-variant-ligatures:none]",
        className,
      )}
    >
      {nodes}
    </span>
  );
}
