"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: Item[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-lg border border-black/5 bg-white transition-colors duration-150"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-[#0F172A] transition-colors duration-150 hover:text-[#0F766E]"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              {item.question}
              <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen ? (
              <div className="border-t border-slate-100 px-4 py-3 text-base leading-7 text-[#0F172A]">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
