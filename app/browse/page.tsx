export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { FeaturedCompoundsList } from "@/components/sections/featured-compounds-list";

export const metadata: Metadata = {
  title: "Browse featured compounds",
  description: "Explore featured molar mass pages grouped by category for quick navigation.",
  alternates: { canonical: "/browse" },
};

export default function BrowsePage() {
  return (
    <main className="bg-white px-4 pt-24 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#0a0f1a] sm:text-4xl">Featured compounds</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0a0f1a]/85">
          Browse clustered compound links to jump straight into structured molar mass pages.
        </p>
        <div className="mt-8 border-t border-slate-200/90 pt-8">
          <FeaturedCompoundsList />
        </div>
      </div>
    </main>
  );
}
