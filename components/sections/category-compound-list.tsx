import Link from "next/link";

import { FormulaSub } from "@/components/ui/formula-sub";
import { getCompoundHref, type CompoundEntry } from "@/lib/compound-data";

type CategoryCompoundListProps = {
  compounds: CompoundEntry[];
};

export function CategoryCompoundList({ compounds }: CategoryCompoundListProps) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-base md:grid-cols-2">
      {compounds.map((compound) => (
        <li key={compound.formula}>
          <Link
            className="text-[#0a0f1a] underline-offset-2 hover:text-[#0F766E] hover:underline"
            href={getCompoundHref(compound.formula)}
            prefetch={false}
          >
            {compound.name} (<FormulaSub formula={compound.formula} />)
          </Link>
        </li>
      ))}
    </ul>
  );
}
