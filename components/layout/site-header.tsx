"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Moon, Search, Sun, X } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import { InstantSearch } from "@/components/search/instant-search";
import { useTheme } from "@/components/theme/theme-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <SiteLogo priority />

        <nav className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Search compounds and formulas"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search className="h-5 w-5" aria-hidden />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
          </Button>
          <Link
            href="/calculator"
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "hidden no-underline sm:inline-flex")}
          >
            Calculator
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </Button>
        </div>
      </div>

      <div className={cn("border-t border-border bg-surface px-4 py-3 sm:px-6", !searchOpen && "hidden")}>
        <div className="mx-auto max-w-6xl">
          <InstantSearch
            autoFocus
            onNavigate={() => setSearchOpen(false)}
            placeholder="Search by name or formula, for example water or H₂SO₄"
          />
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-border bg-surface px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground no-underline hover:bg-surface-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/calculator"
                className="block rounded-xl px-3 py-3 text-base font-medium text-brand no-underline hover:bg-surface-2"
                onClick={() => setMobileOpen(false)}
              >
                Calculator
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
