import { FormulaSub } from "@/components/ui/formula-sub";

export function FormulaWritingTips() {
  return (
    <div className="rounded-lg border border-slate-200/80 bg-white/85 px-4 py-3 text-base leading-relaxed text-[#0a0f1a]">
      <p className="font-semibold text-[#0a0f1a]">How to write formulas (best format)</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base">
        <li>
          Use correct element symbols: one capital + optional lowercase (e.g. <span className="font-medium">Na</span>,{" "}
          <span className="font-medium">Cl</span>, <span className="font-medium">Mg</span>).
        </li>
        <li>
          Put subscripts as digits after each symbol or group, e.g. <FormulaSub formula="H2SO4" />,{" "}
          <FormulaSub formula="Mg(OH)2" />.
        </li>
        <li>
          Parentheses group atoms that repeat together, e.g. <FormulaSub formula="Ca(OH)2" /> (the digit after the closing
          parenthesis multiplies the whole group).
        </li>
      </ul>
    </div>
  );
}
