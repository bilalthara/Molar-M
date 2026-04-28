"use client";

import { useEffect, useState } from "react";

export type CompoundPageSection = {
  id: string;
  label: string;
};

type CompoundPageSidebarProps = {
  sections: CompoundPageSection[];
};

export function CompoundPageSidebar({ sections }: CompoundPageSidebarProps) {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "answer-box");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!sectionElements.length) return;

    let ticking = false;
    const activateCurrentSection = () => {
      const topOffset = 170;
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (scrolledToBottom) {
        const lastId = sectionElements[sectionElements.length - 1]?.id ?? sectionElements[0].id;
        setActiveSectionId((prev) => (prev === lastId ? prev : lastId));
        ticking = false;
        return;
      }

      const byDistance = sectionElements
        .map((sectionEl) => ({
          id: sectionEl.id,
          distance: Math.abs(sectionEl.getBoundingClientRect().top - topOffset),
          top: sectionEl.getBoundingClientRect().top,
        }))
        .sort((a, b) => {
          if (a.top <= topOffset && b.top > topOffset) return -1;
          if (a.top > topOffset && b.top <= topOffset) return 1;
          return a.distance - b.distance;
        });

      const currentId = byDistance[0]?.id ?? sectionElements[0].id;
      setActiveSectionId((prev) => (prev === currentId ? prev : currentId));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(activateCurrentSection);
    };

    activateCurrentSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <div className="shrink-0 space-y-3 rounded-xl border border-slate-200/90 bg-white p-4">
      <p className="text-sm font-semibold text-[#0a0f1a]">On this page</p>
      <nav className="space-y-1.5">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-full cursor-pointer rounded-md border-l-2 px-2 py-1 text-left text-sm transition-colors duration-150 ${
              activeSectionId === section.id
                ? "border-[#0F766E] font-semibold text-[#0F766E]"
                : "border-transparent text-[#0a0f1a] hover:border-slate-300 hover:text-[#0F766E]"
            }`}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

