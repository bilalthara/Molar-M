import Link from "next/link";

import { CATEGORY_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

const learnLinks = [
  { href: "/learn/what-is-molar-mass", label: "What is molar mass?" },
  { href: "/learn/how-to-calculate-molar-mass", label: "How to calculate" },
  { href: "/learn/stoichiometry-basics", label: "Stoichiometry basics" },
  { href: "/practice", label: "Practice worksheets" },
];

const toolLinks = [
  { href: "/calculator", label: "Molar mass calculator" },
  { href: "/periodic-table", label: "Periodic table" },
  { href: "/compounds", label: "Compound library" },
  { href: "/reference", label: "Reference tables" },
];

const legalLinks = [
  { href: "/about-us", label: "About" },
  { href: "/how-we-calculate", label: "How we calculate" },
  { href: "/editorial-policy", label: "Editorial" },
  { href: "/accuracy", label: "Accuracy" },
  { href: "/contact-us", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-[family-name:var(--font-source-serif)] text-xl font-semibold text-foreground">
            {SITE_NAME}
          </p>
          <p className="mt-3 text-sm text-muted">{SITE_TAGLINE}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Tools</p>
          <ul className="mt-3 space-y-2">
            {toolLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted no-underline hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Learn</p>
          <ul className="mt-3 space-y-2">
            {learnLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted no-underline hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Categories</p>
          <ul className="mt-3 space-y-2">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted no-underline hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Built for chemistry education.</p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="no-underline hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
