import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { FormulaSub } from "@/components/ui/formula-sub";
import { getCompoundHref, getSubheaderTickerFormulas } from "@/lib/compound-data";

const tickerFormulas = getSubheaderTickerFormulas(100);

export function SecondaryHeader() {
  return (
    <div className="secondary-ticker z-[45] w-full border-b border-emerald-950/15 bg-[#1FA37A] max-md:fixed max-md:left-0 max-md:right-0 max-md:top-16 md:sticky md:top-16">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
        <Link
          aria-label="Molar Mass Lab home"
          className="group relative z-[1] shrink-0 cursor-pointer self-center py-0.5"
          href="/"
          prefetch={false}
        >
          <Image
            alt=""
            aria-hidden
            className="h-5 w-auto max-w-[6rem] object-contain object-left brightness-0 invert transition-opacity duration-150 group-hover:opacity-90 sm:max-w-[6.5rem] md:h-6 md:max-w-[7.25rem]"
            height={28}
            src="/molar-mass-lab-logo-v2.webp"
            width={140}
          />
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 text-white/90" aria-hidden />
        <div className="scrollbar-hide flex min-w-0 flex-1 items-center gap-x-4 gap-y-1 overflow-x-auto py-0.5">
          {tickerFormulas.map((formula) => (
            <Link
              key={formula}
              className="shrink-0 whitespace-nowrap text-[12px] font-medium tracking-[0.04em] !text-white underline-offset-2 transition-opacity duration-150 hover:!text-white hover:underline hover:opacity-95"
              href={getCompoundHref(formula)}
              prefetch={false}
            >
              <FormulaSub formula={formula} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
