import type { Metadata } from "next";

import { robotsNoIndex } from "@/lib/robots-noindex";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE_NAME} for feedback, corrections, and educational partnership inquiries.`,
  alternates: { canonical: "/contact-us" },
  robots: robotsNoIndex,
};

export default function ContactUsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">Contact us</h1>
      <p className="mt-4 text-muted">
        Found a chemistry error, have a classroom feedback note, or want to suggest a compound profile? Email{" "}
        <a href="mailto:hello@molarmasslab.com">hello@molarmasslab.com</a>.
      </p>
      <p className="mt-4 text-muted">
        Please include the page URL, the expected value or wording, and your source when requesting a correction.
      </p>
    </main>
  );
}
