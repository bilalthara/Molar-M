export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/ui/accordion";
import { extendedFaq } from "@/lib/home-faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about the molar mass calculator and compound pages.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">FAQ</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0a0f1a]/85">
          Comprehensive answers about calculations, guides, and how to use Molar Mass Lab effectively.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0a0f1a]/85">
          For the calculator and compound hub, open{" "}
          <Link className="text-[#0F766E] underline-offset-2 hover:underline" href="/" prefetch={false}>
            molar mass
          </Link>{" "}
          on the molar mass page.
        </p>
        <div className="mt-8 max-w-3xl border-t border-slate-200/90 pt-8">
          <FaqAccordion items={extendedFaq} />
        </div>
      </div>
    </main>
  );
}
