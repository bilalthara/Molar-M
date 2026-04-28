import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const coreNavLinks = [
  { label: "Periodic Table", href: "/periodic-table-with-molar-mass" },
  { label: "Molar Mass List", href: "/molar-mass-list-top-500" },
  { label: "Molar Mass Practice Worksheet", href: "/molar-mass-practice-worksheet" },
];

export function PrimaryHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/78 backdrop-blur-xl">
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

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 bg-white text-[#0a0f1a] transition-colors hover:border-[#0F766E] hover:text-[#0F766E] [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-12 z-50 w-64 rounded-md border border-slate-200 bg-white p-2 shadow-lg">
              {coreNavLinks.map((navItem) => (
                <Link
                  className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-[#0a0f1a] transition-colors hover:bg-slate-100 hover:text-[#0F766E]"
                  href={navItem.href}
                  key={navItem.label}
                  prefetch={false}
                >
                  {navItem.label}
                </Link>
              ))}
              <Link
                className="block w-full rounded px-3 py-2 text-left text-sm font-medium text-[#0a0f1a] transition-colors hover:bg-slate-100 hover:text-[#0F766E]"
                href="/calculator"
                prefetch={false}
              >
                Calculator
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
