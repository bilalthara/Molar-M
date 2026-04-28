import { ChevronDown } from "lucide-react";

type Item = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: Item[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        return (
          <details
            key={item.question}
            className="group rounded-lg border border-black/5 bg-white transition-colors duration-150"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-left text-base font-medium text-[#0F172A] transition-colors duration-150 hover:text-[#0F766E] [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="border-t border-slate-100 px-4 py-3 text-base leading-7 text-[#0F172A]">{item.answer}</div>
          </details>
        );
      })}
    </div>
  );
}
