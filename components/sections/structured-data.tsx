import type { CompoundEntry } from "@/lib/compound-data";
import { SITE_URL } from "@/lib/site-config";

type StructuredDataProps = {
  compound?: CompoundEntry;
  isHome?: boolean;
};

export function StructuredData({ compound, isHome }: StructuredDataProps) {
  const baseUrl = SITE_URL;

  const homeGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Molar Mass Calculator & Compound Database",
      url: baseUrl,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/molar-mass-of-{compound-name}`,
        "query-input": "required name=compound-name",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate molar mass from a chemical formula?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply each element's atomic mass by its atom count in the formula, then add all contributions.",
          },
        },
        {
          "@type": "Question",
          name: "What units are used for molar mass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Molar mass is expressed as grams per mole (g/mol).",
          },
        },
      ],
    },
  ];

  const compoundGraph = compound
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `Molar Mass of ${compound.formula}`,
          description: compound.summary,
          author: { "@type": "Organization", name: "MolarMass" },
          publisher: { "@type": "Organization", name: "MolarMass" },
          inLanguage: "en-US",
          mainEntityOfPage: `${baseUrl}/${compound.canonicalSlug}`,
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: compound.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: `Molar Mass for ${compound.formula}`,
              item: `${baseUrl}/${compound.canonicalSlug}`,
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: `${compound.formula} molar mass dataset`,
          description: `Element breakdown and molar mass values for ${compound.formula}.`,
          creator: { "@type": "Organization", name: "MolarMass" },
          license: "https://creativecommons.org/licenses/by/4.0/",
        },
      ]
    : [];

  const graph = isHome ? homeGraph : compoundGraph;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      type="application/ld+json"
    />
  );
}
