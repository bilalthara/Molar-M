export const dynamic = "force-static";
export const revalidate = false;

import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Molar Mass Lab for feedback and correction requests.",
  alternates: { canonical: "/contact-us" },
  robots: robotsNoIndex,
};

export default function ContactUsPage() {
  return (
    <main className="bg-white px-4 pt-6 sm:pt-8 pb-12 text-[#0a0f1a] sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
        <p className="text-sm leading-relaxed text-[#0a0f1a]/85">
          For corrections, feature suggestions, or educational partnerships, email us at
          support@molarmass.app.
        </p>
      </div>
    </main>
  );
}
