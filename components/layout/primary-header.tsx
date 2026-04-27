"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const coreNavLinks = [
  { label: "Periodic Table", href: "/periodic-table-with-molar-mass" },
  { label: "Molar Mass List", href: "/molar-mass-list-top-500" },
  { label: "Molar Mass Practice Worksheet", href: "/molar-mass-practice-worksheet" },
];

export function PrimaryHeader() {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(currentY > 6);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("primary-header-hidden", { detail: { hidden } }));
  }, [hidden]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-transform duration-300",
        scrolled ? "border-b border-slate-200/80 bg-white/78 backdrop-blur-xl" : "bg-transparent",
        hidden && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link className="group flex cursor-pointer items-center text-[#0a0f1a] transition-colors duration-150" href="/">
          <Image
            alt="MolarMass logo"
            className="h-9 w-auto object-contain"
            height={36}
            priority
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

          <div className="relative md:hidden">
            <button
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-[#0a0f1a] transition-colors hover:border-[#0F766E] hover:text-[#0F766E]"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              type="button"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {mobileMenuOpen ? (
              <div className="absolute right-0 top-12 z-50 w-64 rounded-md border border-slate-200 bg-white p-2 shadow-lg">
                {coreNavLinks.map((navItem) => (
                  <button
                    className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-[#0a0f1a] transition-colors hover:bg-slate-100 hover:text-[#0F766E]"
                    key={navItem.label}
                    onClick={() => {
                      router.push(navItem.href);
                      setMobileMenuOpen(false);
                    }}
                    type="button"
                  >
                    {navItem.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
