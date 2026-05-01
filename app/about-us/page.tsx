export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";
import Image from "next/image";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "About Molar Mass Lab",
  description: "Learn why Molar Mass Lab is built for students, labs, and accurate chemistry workflows.",
  alternates: { canonical: "/about-us" },
  robots: robotsNoIndex,
};

export default function AboutUsPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <section className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-emerald-50 px-6 py-8 sm:px-8">
          <Image
            alt="Molar Mass Lab logo"
            className="h-14 w-auto object-contain sm:h-16"
            height={64}
            priority
            src="/molar-mass-lab-logo-v2.webp"
            width={280}
          />
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">About Molar Mass Lab</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#0a0f1a]/85">
            Molar Mass Lab is built to be the best practical workspace for molar mass learning: fast answers, clean
            interlinking, and reliable chemistry explanations that feel useful in both classroom and lab settings.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Accuracy first</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/80">
              We present element-wise contributions, not just a final value, so you can verify each step with confidence.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Built for learners</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/80">
              Every page is designed for revision speed: clear sections, related compounds, and practical chemistry language.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Production-grade navigation</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0a0f1a]/80">
              We keep links intentional and structured so users can move quickly between guides, formulas, and policy pages.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
