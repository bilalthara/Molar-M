"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const coreNavLinks = [
  { label: "Periodic Table", href: "/periodic-table-with-molar-mass" },
  { label: "Molar Mass List", href: "/molar-mass-list-top-500" },
  { label: "Molar Mass Practice Worksheet", href: "/molar-mass-practice-worksheet" },
];

export function PrimaryHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);
  const menuPanelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const root = menuRootRef.current;
      if (root && !root.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full border-b border-slate-200/80 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          aria-label="Molar Mass Lab home"
          className="group relative z-[1] flex cursor-pointer items-center text-[#0a0f1a] transition-colors duration-150"
          href="/"
          prefetch={false}
        >
          <Image
            alt="MolarMass logo"
            className="h-9 w-auto object-contain"
            height={36}
            preload
            src="/molar-mass-lab-logo-v2.webp"
            width={180}
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-5 md:flex">
            {coreNavLinks.map((navItem) => (
              <Link
                className="cursor-pointer text-sm font-medium text-[#0a0f1a] transition-colors duration-150 hover:text-[#0F766E]"
                href={navItem.href}
                key={navItem.label}
              >
                {navItem.label}
              </Link>
            ))}
          </div>

          <Link
            className={cn(
              "primary-header-cta !text-white hover:!text-white/95",
              buttonVariants({ size: "default" }),
            )}
            href="/calculator"
            prefetch={false}
          >
            Calculator
          </Link>

          <div className="relative md:hidden" ref={menuRootRef}>
            <button
              aria-controls={menuPanelId}
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-slate-200 bg-white text-[#0a0f1a] transition-colors hover:border-[#0F766E] hover:text-[#0F766E]"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <Menu className="h-5 w-5" aria-hidden />
            </button>
            {menuOpen ? (
              <div
                className="absolute right-0 top-12 z-50 w-64 rounded-md border border-slate-200 bg-white p-2 shadow-lg"
                id={menuPanelId}
                role="menu"
              >
                {coreNavLinks.map((navItem) => (
                  <Link
                    className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-[#0a0f1a] transition-colors hover:bg-slate-100 hover:text-[#0F766E]"
                    href={navItem.href}
                    key={navItem.label}
                    prefetch={false}
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {navItem.label}
                  </Link>
                ))}
                <Link
                  className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-[#0a0f1a] transition-colors hover:bg-slate-100 hover:text-[#0F766E]"
                  href="/calculator"
                  prefetch={false}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  Calculator
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
