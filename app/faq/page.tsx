import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about the molar mass calculator, compound profiles, and how Molar Mass Lab teaches chemistry.",
  alternates: { canonical: "/faq" },
};

const faq = [
  {
    question: "How accurate is the molar mass calculator?",
    answer:
      "The calculator uses standard atomic masses and expands parentheses correctly. Classroom answers may differ slightly depending on the periodic table values your course requires.",
  },
  {
    question: "Which compounds have full study pages?",
    answer:
      "Fifty commonly studied compounds have full pages covering calculation steps, properties, reactions, safety, and practice. For any other formula, use the calculator to get the molar mass instantly.",
  },
  {
    question: "Can I search by IUPAC name or synonym?",
    answer:
      "Yes. Instant search matches common names, IUPAC names, aliases, and formulas. Keyboard navigation is supported in the search dropdown.",
  },
  {
    question: "Where should I start if I’m new to molar mass?",
    answer:
      "Begin with the What Is Molar Mass guide, then try the water worked example on the homepage and open the water compound profile for practice questions.",
  },
  {
    question: "Do you support dark mode?",
    answer:
      "Yes. Use the theme toggle in the header. Your preference is saved in the browser.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-4xl text-foreground sm:text-5xl">FAQ</h1>
      <p className="mt-3 text-lg text-muted">
        Quick answers about calculations, profiles, and learning resources. Prefer hands-on practice? Open the{" "}
        <Link href="/calculator">calculator</Link> or <Link href="/practice">practice hub</Link>.
      </p>
      <div className="mt-8">
        <FaqAccordion items={faq} />
      </div>
    </main>
  );
}
