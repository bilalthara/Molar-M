import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { SITE_NAME } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    absolute: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
  },
  description:
    "Calculate molar mass instantly and learn chemistry with detailed compound profiles, guides, practice questions, and educational resources.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
    description:
      "Calculate molar mass instantly and learn chemistry with detailed compound profiles, guides, practice questions, and educational resources.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/logo-light-v2.png", width: 944, height: 179, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molar Mass Calculator & Chemistry Guides | Molar Mass Lab",
    description:
      "Calculate molar mass instantly and learn chemistry with detailed compound profiles, guides, practice questions, and educational resources.",
    images: ["/logo-light-v2.png"],
  },
};

const homeFaq = [
  {
    question: "What is molar mass?",
    answer:
      "Molar mass is the mass of one mole of a substance in grams per mole (g/mol). It equals the sum of atomic masses for every atom in the chemical formula.",
  },
  {
    question: "How do I calculate molar mass from a formula?",
    answer:
      "Parse each element and its count, multiply by the atomic mass from the periodic table, then add the contributions. Expand parentheses before multiplying.",
  },
  {
    question: "Is molar mass the same as molecular weight?",
    answer:
      "They are numerically equal for a given formula, but molar mass uses units of g/mol while molecular weight is a relative, dimensionless quantity.",
  },
  {
    question: "Why do compound pages include more than the molar mass?",
    answer:
      "Each profile also explains properties, reactions, safety, and practice so you can use the value correctly in homework and laboratory work.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(homeFaq)]} />
      <HomePage />
    </>
  );
}
