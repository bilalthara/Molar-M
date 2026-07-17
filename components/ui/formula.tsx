import { formatChemistryDisplay } from "@/lib/chemistry/format";
import { cn } from "@/lib/utils";

type FormulaProps = {
  value: string;
  className?: string;
};

/** Readable scientific formula typography (serif, not condensed mono). */
export function Formula({ value, className }: FormulaProps) {
  const display = formatChemistryDisplay(value);
  return (
    <span className={cn("formula-chem", className)} aria-label={value}>
      {display}
    </span>
  );
}
