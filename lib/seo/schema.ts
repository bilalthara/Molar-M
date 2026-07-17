import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site-config";
import type { CompoundProfile } from "@/lib/chemistry/types";
import { formatMolarMass, formatFormula } from "@/lib/chemistry/format";
import type { FormulaResult } from "@/lib/molar-mass";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-light-v2.png`,
    description: SITE_DESCRIPTION,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/calculator?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function compoundSchema(profile: CompoundProfile, calculation: FormulaResult) {
  return {
    "@context": "https://schema.org",
    "@type": ["ChemicalSubstance", "LearningResource"],
    name: `Molar Mass of ${profile.name}`,
    alternateName: [profile.iupacName, ...profile.commonNames, profile.formula, formatFormula(profile.formula)],
    molecularFormula: profile.formula,
    description: profile.overview.slice(0, 300),
    url: `${SITE_URL}/${profile.slug}`,
    learningResourceType: "Study guide",
    educationalLevel: "High school / undergraduate chemistry",
    isAccessibleForFree: true,
    identifier: profile.casNumber
      ? {
          "@type": "PropertyValue",
          propertyID: "CAS",
          value: profile.casNumber,
        }
      : undefined,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Molar mass",
        value: formatMolarMass(calculation.molarMass, 3),
      },
    ],
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    headline: input.title,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-light-v2.png` },
    },
    datePublished: input.datePublished ?? "2025-01-01",
    isAccessibleForFree: true,
    learningResourceType: "Lesson",
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    name: "Molar Mass Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/calculator`,
    description:
      "Free online molar mass calculator with step-by-step element breakdowns for any chemical formula.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}
