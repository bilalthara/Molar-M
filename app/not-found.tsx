import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Formula } from "@/components/ui/formula";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col items-start px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-brand uppercase">404</p>
      <h1 className="mt-3 text-4xl text-foreground">Page not found</h1>
      <p className="mt-4 text-muted">
        That URL may have pointed to a thin generated page we removed. Try the calculator with a formula such as{" "}
        <Formula value="H2O" /> or <Formula value="Ca(OH)2" />, or browse the compound library.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={cn(buttonVariants(), "no-underline")}>
          Home
        </Link>
        <Link href="/calculator" className={cn(buttonVariants({ variant: "outline" }), "no-underline")}>
          Calculator
        </Link>
        <Link href="/compounds" className={cn(buttonVariants({ variant: "ghost" }), "no-underline")}>
          Compounds
        </Link>
      </div>
    </main>
  );
}
