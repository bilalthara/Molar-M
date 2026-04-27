"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { FormulaSub } from "@/components/ui/formula-sub";
import { cn } from "@/lib/utils";
import { getCompoundHref, getSubheaderTickerFormulas } from "@/lib/compound-data";

const tickerFormulas = getSubheaderTickerFormulas(100);

const tickerScrollBtnClass =
  "flex shrink-0 cursor-pointer rounded border border-white/45 p-1 text-white transition-colors hover:bg-white/12";

export function SecondaryHeader() {
  const pathname = usePathname();
  const [primaryHidden, setPrimaryHidden] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onHeaderState = (event: Event) => {
      const customEvent = event as CustomEvent<{ hidden: boolean }>;
      setPrimaryHidden(Boolean(customEvent.detail?.hidden));
    };

    window.addEventListener("primary-header-hidden", onHeaderState);
    return () => window.removeEventListener("primary-header-hidden", onHeaderState);
  }, []);

  const scrollTicker = (direction: "left" | "right") => {
    const el = tickerRef.current;
    if (!el) return;
    const distance = Math.max(180, Math.floor(el.clientWidth * 0.6));
    const maxLeft = el.scrollWidth - el.clientWidth;
    if (direction === "left") {
      if (el.scrollLeft <= 4) {
        el.scrollTo({ left: maxLeft, behavior: "smooth" });
        return;
      }
      el.scrollBy({ left: -distance, behavior: "smooth" });
      return;
    }

    if (el.scrollLeft >= maxLeft - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div
      className={`secondary-ticker z-[45] w-full border-b border-emerald-950/15 bg-[#1FA37A] max-md:fixed max-md:left-0 max-md:right-0 md:sticky ${primaryHidden ? "top-0 max-md:top-0" : "top-16 max-md:top-16"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
        <Link
          aria-label="Molar Mass Lab home"
          className="group relative z-[1] shrink-0 cursor-pointer self-center py-0.5"
          href="/"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          prefetch={false}
        >
          <Image
            alt=""
            aria-hidden
            className={cn(
              "h-5 w-auto max-w-[6rem] object-contain object-left brightness-0 invert transition-opacity duration-150 group-hover:opacity-90 sm:max-w-[6.5rem] md:h-6 md:max-w-[7.25rem]",
              primaryHidden && "h-6 max-w-[7.5rem] md:h-7 md:max-w-[9rem]",
            )}
            height={28}
            src="/molar-mass-lab-logo-v2.webp"
            width={140}
          />
        </Link>
        <button
          aria-label="Scroll ticker left"
          className={tickerScrollBtnClass}
          onClick={() => scrollTicker("left")}
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div
          className="scrollbar-hide flex min-w-0 flex-1 items-center gap-x-4 gap-y-1 overflow-x-auto scroll-smooth py-0.5"
          ref={tickerRef}
        >
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
        <button
          aria-label="Scroll ticker right"
          className={tickerScrollBtnClass}
          onClick={() => scrollTicker("right")}
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
