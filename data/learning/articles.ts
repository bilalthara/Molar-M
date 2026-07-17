export type Article = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  readingTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "why-molar-mass-matters-in-the-lab",
    title: "Why Molar Mass Matters in the Lab",
    summary:
      "From solution preparation to titration stoichiometry, molar mass is what lets chemists convert between grams weighed on a balance and moles used in a reaction.",
    topic: "Laboratory Skills",
    readingTime: "7 min",
    body: [
      `Every time you dissolve a solid to make a 0.100 M solution, you are using molar mass. Moles required equal molarity × volume (in liters). Grams required equal moles × molar mass. A 2% error in molar mass becomes a 2% error in concentration — enough to shift titration endpoints and kinetic rate constants.`,
      `In gravimetric analysis, precipitate mass is converted to analyte moles using the precipitate’s molar mass, then to analyte mass using the analyte’s molar mass. Accurate tables and careful formula parsing are not pedantry; they are experimental accuracy.`,
      `Industrial quality control uses the same logic at larger scale. Batch formulations, fertilizer grades, and pharmaceutical assay calculations all rest on reliable molar masses for each component.`,
    ],
  },
  {
    slug: "reading-the-periodic-table-for-mass",
    title: "Reading the Periodic Table for Mass",
    summary:
      "Atomic masses on the periodic table are weighted averages of isotopes — here’s how to use them confidently in calculations.",
    topic: "Reference Skills",
    readingTime: "6 min",
    body: [
      `The number under an element symbol is its standard atomic weight — a weighted average of naturally occurring isotopes. Chlorine’s ~35.45 reflects roughly three parts chlorine-35 to one part chlorine-37.`,
      `For classroom molar mass work, use the values your instructor specifies. For research-grade work, cite IUPAC standard atomic weights and note when a sample’s isotopic composition differs from terrestrial averages.`,
      `Diatomic elements (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂) require doubling the atomic mass for the molar mass of the elemental gas or liquid as it exists under standard conditions.`,
    ],
  },
  {
    slug: "from-formula-to-mass-percent",
    title: "From Formula to Mass Percent Composition",
    summary:
      "Mass percent composition reveals which elements dominate a compound’s mass — essential for empirical formula problems.",
    topic: "Composition Analysis",
    readingTime: "8 min",
    body: [
      `Mass percent of an element = (mass contribution of that element / molar mass of compound) × 100%. In water, oxygen contributes about 88.8% of the mass despite being only one of three atoms.`,
      `Empirical formula problems reverse this process: convert percent to grams (assume 100 g), grams to moles, then divide by the smallest mole count to find ratios. Rounding ratios to integers is where many students lose precision.`,
      `Comparing mass percents across related compounds (CO vs CO₂, SO₂ vs SO₃) builds intuition for oxidation-state trends and combustion analysis results.`,
    ],
  },
  {
    slug: "chlor-alkali-process-and-molar-mass",
    title: "Chlor-Alkali Process: NaOH, NaCl, and Cl₂",
    summary:
      "Electrolysis of brine ties together molar masses of sodium chloride, sodium hydroxide, and chlorine — core stoichiometry for a multi-billion-dollar industry.",
    topic: "Industrial Chemistry",
    readingTime: "9 min",
    body: [
      `The chlor-alkali process electrolyzes aqueous sodium chloride NaCl (58.44 g/mol) to produce chlorine Cl₂, hydrogen H₂, and sodium hydroxide NaOH (40.00 g/mol). The overall reaction is 2 NaCl + 2 H₂O → Cl₂ + H₂ + 2 NaOH. Every mole of NaCl consumed yields one mole of NaOH — so converting a plant's daily NaOH output to required brine mass starts with molar mass and coefficients.`,
      `Chlorine Cl₂ (diatomic molar mass 70.90 g/mol) feeds bleach, PVC, and water treatment. Hydrogen H₂ (2.016 g/mol) is captured for fuel or ammonia synthesis. Engineers track current efficiency: not every electron produces the intended product. Percent yield and faraday calculations extend the same mole logic taught with silver nitrate AgNO₃ and sodium chloride NaCl precipitation in lab.`,
      `Compare potassium analogs: potassium chloride KCl (74.55 g/mol) and potassium hydroxide KOH (56.11 g/mol) follow identical stoichiometry with different masses. Molar mass differences explain why caustic soda (NaOH) and caustic potash (KOH) require different weighing for the same mole count in solution preparation.`,
    ],
  },
  {
    slug: "contact-process-and-sulfuric-acid",
    title: "Contact Process and Sulfuric Acid H₂SO₄",
    summary:
      "From sulfur dioxide to sulfur trioxide to sulfuric acid — molar mass tracks every step of the world's most produced chemical.",
    topic: "Industrial Chemistry",
    readingTime: "10 min",
    body: [
      `Sulfuric acid H₂SO₄ (98.07 g/mol) is manufactured at enormous scale via the contact process. Elemental sulfur burns to sulfur dioxide SO₂ (64.07 g/mol); catalytic oxidation gives sulfur trioxide SO₃ (80.07 g/mol); absorption in concentrated acid yields oleum and then H₂SO₄. Each step's mass balance requires correct molar masses — confusing SO₂ with SO₃ shifts yield predictions by 25%.`,
      `The equilibrium 2 SO₂ + O₂ ⇌ 2 SO₃ favors product at low temperature and high pressure, but the catalyst needs heat. Industrial plants optimize conversion rather than assume 100% yield — the same percent-yield framework used when students synthesize aspirin C₉H₈O₄ from salicylic acid. Unreacted SO₂ is recycled; environmental regulations cap emissions.`,
      `Dilution and concentration specs use molarity and mass percent. A 98% H₂SO₄ solution is not 98 M — density matters. Laboratory dilution always adds acid to water because the hydration exotherm is dangerous. Compare phosphoric acid H₃PO₄ (97.99 g/mol) and hydrochloric acid HCl (36.46 g/mol): same molarity preparation logic, different hazards and molar masses.`,
    ],
  },
  {
    slug: "fermentation-ethanol-and-molar-mass",
    title: "Fermentation, Glucose, and Ethanol",
    summary:
      "Yeast converts glucose to ethanol and carbon dioxide — a biological stoichiometry problem linking C₆H₁₂O₆, C₂H₆O, and CO₂.",
    topic: "Biochemistry",
    readingTime: "9 min",
    body: [
      `Alcoholic fermentation: C₆H₁₂O₆ → 2 C₂H₆O + 2 CO₂. One mole of glucose (180.16 g/mol) yields two moles of ethanol C₂H₆O (46.07 g/mol, total 92.14 g) and two moles of carbon dioxide CO₂ (44.01 g/mol, total 88.02 g). Mass is conserved: 180.16 g reactant equals 92.14 + 88.02 g products (within rounding). Students often forget the 1:2 mole ratio for ethanol.`,
      `Compare with combustion of glucose in oxygen — complete oxidation to CO₂ and H₂O releases far more energy and different mole ratios. Ethanol fermentation is anaerobic; molar mass still governs how much CO₂ gas volume collects in a fermenter at STP (~22.4 L per mole of CO₂ at 1 atm).`,
      `Industrial ethanol blends fuel with gasoline; beverage and sanitizer grades require purity assays by density or GC. Contrast ethanol C₂H₆O with methanol CH₃OH (32.04 g/mol) — similar functional group, lower molar mass, higher toxicity. Sucrose C₁₂H₂₂O₁₁ (342.30 g/mol) hydrolyzes to glucose and fructose before fermentation; total molar mass of monosaccharides equals the disaccharide minus water.`,
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
