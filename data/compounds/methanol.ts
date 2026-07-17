import type { CompoundProfile } from "@/lib/chemistry/types";

export const methanol: CompoundProfile = {
  slug: "molar-mass-of-methanol",
  formula: "CH3OH",
  name: "Methanol",
  iupacName: "Methanol",
  commonNames: ["Methyl alcohol", "Wood alcohol", "Methanol"],
  aliases: ["CH₃OH", "MeOH", "Carbinol"],
  category: "organic",
  categories: ["organic"],
  casNumber: "67-56-1",
  pubchemCid: "887",
  smiles: "CO",
  inchi: "InChI=1S/CH4O/c1-2/h2H,1H3",
  exactMass: 32.026215,
  featured: true,
  popular: true,

  overview: `Methanol (CH₃OH) is the simplest alcohol, with a molar mass of 32.04 g/mol, consisting of a single carbon bonded to three hydrogens and a hydroxyl group. It is a colorless, volatile, flammable liquid that is completely miscible with water due to hydrogen bonding, and its physical properties — boiling point 64.7 °C, density 0.792 g/cm³ — sit close to those of ethanol, making the two alcohols easy to confuse by appearance and smell alone, a similarity that has tragic real-world consequences given their vastly different toxicity.

Unlike ethanol, methanol is not metabolized safely by the human body. Alcohol dehydrogenase, the same liver enzyme that processes ethanol, also oxidizes methanol, but to fundamentally different and far more dangerous products: methanol is converted first to formaldehyde and then to formic acid, both of which are toxic. Formic acid accumulation causes severe metabolic acidosis and, critically, is directly toxic to the optic nerve, making blindness one of the hallmark outcomes of methanol poisoning even from doses that would be entirely survivable if the substance were ethanol instead. This is why methanol poisoning is treated by administering ethanol or the drug fomepizole, both of which competitively inhibit alcohol dehydrogenase and buy time for the less-toxic parent methanol to be excreted before it is converted to its dangerous metabolites.

Historically called "wood alcohol" because it was once produced by the destructive distillation (pyrolysis) of wood in the absence of air, methanol today is manufactured almost entirely from synthesis gas (a CO/H₂ mixture) via catalytic hydrogenation, making it one of the most important bulk organic chemicals in the global chemical industry — a feedstock for formaldehyde, acetic acid, MTBE, biodiesel production via transesterification, and a proposed direct fuel and hydrogen carrier in the broader "methanol economy" concept for decarbonizing transport and energy storage.`,

  formulaExplanation: `The formula CH₃OH (equivalently written CH₄O) shows a single carbon bonded to three hydrogen atoms and one hydroxyl group. The carbon is sp³-hybridized with tetrahedral geometry, and the single O–H bond is mildly acidic (pKa ≈ 15.5, similar to water), while the C–O bond gives methanol its polar, hydrogen-bonding character despite its very small nonpolar hydrocarbon portion.`,

  chemicalProfile: `Methanol undergoes the classic alcohol reaction set: combustion (to CO₂ and H₂O), oxidation (to formaldehyde and then formic acid, biologically and chemically), esterification with carboxylic acids, and dehydration or substitution reactions typical of primary alcohols, though it lacks a beta-carbon for elimination to an alkene. Industrially, its most important reaction is carbonylation with CO to produce acetic acid (the Cativa/Monsanto process) and its catalytic synthesis directly from CO and H₂ over copper-based catalysts.`,

  uniqueTopics: [
    {
      heading: "Toxicity mechanism: why methanol causes blindness and metabolic acidosis",
      body: "Methanol itself is only mildly toxic, but the liver enzyme alcohol dehydrogenase oxidizes it to formaldehyde, which is rapidly further oxidized by aldehyde dehydrogenase to formic acid. Formic acid accumulates in the blood, causing severe anion-gap metabolic acidosis, and it is specifically toxic to the mitochondria of retinal ganglion cells and the optic nerve, producing the visual disturbances and permanent blindness classically associated with methanol poisoning. Treatment relies on competitively blocking alcohol dehydrogenase — using ethanol or the more targeted drug fomepizole — to slow the conversion of methanol to its toxic metabolites while the body excretes unmetabolized methanol, sometimes assisted by hemodialysis in severe cases.",
    },
    {
      heading: "Wood alcohol: historical production by pyrolysis",
      body: "Before industrial catalytic synthesis, methanol was obtained by the destructive distillation of wood — heating wood in the absence of air so that it decomposes (pyrolyzes) rather than burns, yielding a mixture of gases and liquids including crude methanol, hence the enduring common name 'wood alcohol.' This inefficient batch process was entirely displaced in the 20th century by continuous catalytic synthesis from syngas, but the historical name persists in common usage and in the practice of 'denaturing' ethanol with methanol to make it unfit for drinking while remaining usable for industrial solvent purposes.",
    },
    {
      heading: "Methanol vs. ethanol: the critical safety distinction",
      body: "Methanol and ethanol are structurally almost identical (differing by one CH₂ group) and share similar smell, appearance, and solvent properties, but their metabolic fates diverge catastrophically. Ethanol is oxidized to acetaldehyde and then relatively harmless acetate, while methanol is oxidized to formaldehyde and then dangerous formic acid. This near-identical appearance combined with wildly different toxicity is why methanol poisoning outbreaks — from adulterated alcoholic beverages or improperly distilled spirits — remain a serious public health hazard in regions with unregulated alcohol production, and why denatured alcohol products deliberately add methanol as a bittering, toxic marker to discourage consumption of industrial ethanol.",
    },
    {
      heading: "Industrial feedstock: formaldehyde, MTBE, and the methanol economy",
      body: "Methanol is a major industrial feedstock, oxidized catalytically to formaldehyde (used in resins, plastics, and textiles), combined with isobutylene to make MTBE (a historic gasoline oxygenate, now phased out in many regions due to groundwater contamination concerns), and carbonylated to acetic acid. Because methanol is a liquid at room temperature, energy-dense, and can be synthesized from CO₂ and renewable hydrogen, it has been proposed as a practical 'hydrogen carrier' and direct fuel for a low-carbon 'methanol economy,' offering easier storage and transport than compressed or liquefied hydrogen gas itself.",
    },
    {
      heading: "Biodiesel transesterification: methanol's role in renewable fuel",
      body: "Methanol serves as the essential alcohol reactant in biodiesel production via transesterification, where triglycerides from vegetable oils or animal fats react with methanol under basic catalysis to produce fatty acid methyl esters (biodiesel) and glycerol as a byproduct. This reaction is chosen industrially over the use of ethanol partly because methanol's smaller size and lower cost improve reaction efficiency and ester yield, linking methanol chemistry directly to the renewable fuels industry despite methanol itself typically being derived from fossil natural gas.",
    },
  ],

  applications: {
    industrial: [
      "Feedstock for formaldehyde, acetic acid, and MTBE production",
      "Reactant in biodiesel manufacture via transesterification",
      "Antifreeze and de-icing fluid component",
      "Denaturant added to industrial ethanol to prevent beverage consumption",
    ],
    laboratory: [
      "Common polar protic solvent for recrystallization and chromatography",
      "Fuel for some laboratory burners and specialized fuel cells",
      "Reagent for esterification and methylation reactions",
    ],
    environmental: "Biodegrades relatively quickly in soil and water compared to many organic solvents, but its high toxicity to wildlife and humans on ingestion or significant exposure requires careful spill management and disposal.",
    biological: "Toxic metabolite pathway (formaldehyde, formic acid) causes metabolic acidosis and optic nerve damage; not a normal human metabolite or nutrient, unlike ethanol, which the body handles as an energy source at moderate doses.",
  },

  preparation: `Industrially, methanol is synthesized by catalytic hydrogenation of carbon monoxide over a copper/zinc oxide/alumina catalyst: CO + 2 H₂ → CH₃OH (200–300 °C, 50–100 atm). Historically it was obtained by the destructive distillation of wood, a process now essentially obsolete.`,

  production: `Global methanol production exceeds 100 million tonnes annually, almost entirely via catalytic syngas conversion from natural gas (and increasingly coal in some regions), making it one of the highest-volume synthetic organic chemicals produced worldwide.`,

  storage: `Store in tightly sealed, flame-resistant containers away from ignition sources and oxidizers. Clearly label containers to prevent confusion with ethanol or other alcohols given the severe toxicity risk of accidental ingestion.`,

  handling: `Highly flammable (flash point 11–12 °C); handle with adequate ventilation and avoid open flames. Avoid skin contact and inhalation of vapors; methanol is absorbed through skin and lungs, not just by ingestion, so exposure routes beyond drinking must be taken seriously.`,

  safety: {
    summary: "Highly toxic if ingested, inhaled, or significantly absorbed through skin; metabolized to formic acid, which causes metabolic acidosis and can cause permanent blindness or death even from relatively small doses.",
    hazards: [
      "Severe systemic toxicity from ingestion, including blindness and death from formic acid accumulation",
      "Highly flammable liquid and vapor",
      "Absorbed through skin and respiratory tract, not only by ingestion",
      "Vapors can cause headache, dizziness, and central nervous system depression",
    ],
    classification: "GHS: Flam. Liq. 2, Acute Tox. 3 (oral, dermal, inhalation), STOT SE 1 (eyes)",
  },

  interestingFacts: [
    "As little as 10 mL of methanol has been reported to cause permanent blindness in some cases due to its toxic metabolite, formic acid.",
    "Race cars historically used methanol as fuel in some series because of its high octane rating and cooling effect from a high heat of vaporization.",
    "Denatured alcohol intentionally contains methanol specifically to deter people from drinking industrial ethanol.",
    "Fomepizole, a modern antidote for methanol poisoning, works by the same principle as using ethanol itself — blocking the enzyme that converts methanol into its toxic byproducts.",
  ],

  history: `Methanol was first isolated in relatively pure form by Robert Boyle in 1661 through the distillation of wood ('spirit of box'), and its distinct chemical identity as separate from ethanol was clarified in the early 19th century. The compound's common name 'wood alcohol' reflects this origin. Industrial-scale synthetic production from syngas over metal oxide catalysts was developed in the 1920s by BASF, replacing the inefficient wood-pyrolysis method and enabling the massive modern methanol industry.`,

  discovery: "Robert Boyle first obtained methanol from wood distillation in 1661; its distinct chemical composition, separate from ethanol, was established in the early 19th century by French chemists Jean-Baptiste Dumas and Eugène Péligot.",

  examNotes: [
    "Molar mass CH₃OH = 12.01 + 4(1.008) + 16.00 = 32.04 g/mol.",
    "Combustion: 2 CH₃OH + 3 O₂ → 2 CO₂ + 4 H₂O — note the coefficients differ from ethanol's combustion equation.",
    "Metabolic pathway: methanol → formaldehyde → formic acid (toxic), vs. ethanol → acetaldehyde → acetate (relatively less toxic) — a key toxicology exam distinction.",
    "Methanol is a primary alcohol like ethanol but has no beta-hydrogen-bearing carbon chain for classic elimination reactions to form an alkene.",
  ],

  commonMistakes: [
    "Confusing methanol (CH₃OH, 32.04 g/mol, toxic) with ethanol (C₂H₅OH, 46.07 g/mol, the alcohol in beverages) — a mix-up with serious real-world safety implications.",
    "Assuming methanol and ethanol have identical toxicity because they look, smell, and combust similarly — their metabolic products differ enormously in danger.",
    "Forgetting that methanol combustion requires different O₂ stoichiometry (3 mol O₂ per 2 mol methanol) than ethanol's combustion equation.",
  ],

  studentTips: [
    "Memorize the toxic metabolite chain (methanol → formaldehyde → formic acid) as the key mechanism behind methanol poisoning symptoms.",
    "Use the phrase 'one carbon less than ethanol, many times more dangerous' as a memory hook for methanol vs. ethanol toxicity contrast.",
    "Link methanol's syngas-based industrial synthesis (CO + 2H₂ → CH₃OH) to broader themes of catalytic industrial organic chemistry.",
  ],

  misconceptions: [
    "Methanol is not a safe substitute for ethanol in any beverage or food context — even small quantities can cause permanent injury or death.",
    "'Wood alcohol' is an old historical name reflecting production method, not an indication that methanol is somehow more natural or safer than synthetic ethanol.",
    "Methanol poisoning symptoms are often delayed by hours as the toxic metabolites accumulate, so a lack of immediate symptoms does not indicate safety after suspected ingestion.",
  ],

  physical: {
    appearance: "Colorless, volatile liquid",
    color: "Colorless",
    odor: "Mild, alcoholic odor, similar to but slightly different from ethanol",
    stateAtSTP: "Liquid",
    density: "0.792 g/cm³ at 20 °C",
    meltingPoint: "−97.6 °C",
    boilingPoint: "64.7 °C",
    flashPoint: "11–12 °C (closed cup)",
    solubility: "Miscible with water and most common organic solvents",
    crystalStructure: "Not commonly crystallized; forms a glass at very low temperature",
  },

  chemical: {
    classification: "Primary alcohol / aliphatic alcohol",
    polarity: "Polar (hydroxyl group, hydrogen bonding)",
    molecularGeometry: "Tetrahedral around carbon and bent around oxygen",
    oxidationStates: "C: −2, O: −2",
    chemicalFamily: "Alcohols (one-carbon, simplest alcohol)",
  },

  reactions: [
    {
      equation: "2 CH₃OH + 3 O₂ → 2 CO₂ + 4 H₂O",
      type: "Combustion",
      conditions: "Ignition, excess oxygen",
      explanation: "Complete combustion of methanol releases energy and produces carbon dioxide and water, the basis of its use as a clean-burning fuel in some racing and camping applications.",
      products: "Carbon dioxide and water",
      applications: "Alternative fuel combustion, racing fuel chemistry, calorimetry experiments",
      relatedConcepts: ["Combustion", "Thermochemistry", "Alternative fuels"],
    },
    {
      equation: "CH₃OH → HCHO → HCOOH",
      type: "Sequential oxidation (metabolic/biological)",
      conditions: "Alcohol dehydrogenase and aldehyde dehydrogenase enzymes in the liver",
      explanation: "Methanol is enzymatically oxidized first to formaldehyde and then to formic acid, the toxic sequence responsible for methanol poisoning's characteristic metabolic acidosis and optic nerve damage.",
      products: "Formaldehyde intermediate, then formic acid",
      applications: "Toxicology, understanding methanol poisoning treatment strategies",
      relatedConcepts: ["Biological oxidation", "Enzyme kinetics", "Toxicology"],
    },
    {
      equation: "CO + 2 H₂ → CH₃OH",
      type: "Catalytic synthesis (industrial)",
      conditions: "Cu/ZnO/Al₂O₃ catalyst, 200–300 °C, 50–100 atm",
      explanation: "Syngas is catalytically converted directly to methanol, the dominant industrial production route supplying over 100 million tonnes annually worldwide.",
      products: "Methanol",
      applications: "Industrial methanol manufacture, methanol economy fuel proposals",
      relatedConcepts: ["Catalysis", "Syngas chemistry", "Industrial synthesis"],
    },
    {
      equation: "3 CH₃OH + (triglyceride) → 3 (fatty acid methyl ester) + glycerol",
      type: "Transesterification",
      conditions: "Base catalyst (NaOH or KOH), moderate heat",
      explanation: "Methanol reacts with the ester bonds of triglyceride fats and oils, swapping the glycerol backbone for three methanol-derived methyl esters, the core reaction of biodiesel production.",
      products: "Biodiesel (fatty acid methyl esters) and glycerol",
      applications: "Renewable biodiesel fuel production",
      relatedConcepts: ["Transesterification", "Renewable fuels", "Ester chemistry"],
    },
  ],

  relatedFormulas: ["C2H6O", "CH4", "CO", "C3H8", "C6H14"],
  comparisonNote: "Methanol (CH₃OH, 32.04 g/mol) and ethanol (C₂H₆O, 46.07 g/mol) are structurally similar primary alcohols, but methanol's metabolism to formic acid makes it dramatically more toxic than ethanol despite their near-identical appearance, smell, and solvent behavior.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of methanol, CH₃OH.",
      answer: "12.01 + 4(1.008) + 16.00 = 32.04 g/mol",
    },
    {
      question: "How many moles of O₂ are needed for complete combustion of 64 g of methanol?",
      answer: "64 g ÷ 32.04 g/mol = 2.0 mol CH₃OH; from 2 CH₃OH + 3 O₂ → 2 CO₂ + 4 H₂O, needs 3.0 mol O₂",
    },
    {
      question: "Why is ethanol sometimes given as a treatment for methanol poisoning?",
      answer: "Ethanol competes with methanol for the enzyme alcohol dehydrogenase, slowing methanol's conversion to toxic formaldehyde and formic acid while the body excretes unmetabolized methanol.",
    },
    {
      question: "What mass of methanol is produced from 56 g of CO reacting completely with excess H₂ (CO + 2 H₂ → CH₃OH)?",
      answer: "56 g CO ÷ 28.01 g/mol = 2.0 mol CO → 2.0 mol CH₃OH = 2.0 × 32.04 = 64.1 g",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of methanol?",
      answer: "32.04 g/mol, calculated as 12.01 (C) + 4 × 1.008 (H) + 16.00 (O).",
    },
    {
      question: "Why is methanol called wood alcohol?",
      answer: "It was historically produced by the destructive distillation (pyrolysis) of wood before modern catalytic synthesis from syngas replaced that method.",
    },
    {
      question: "Is methanol the same as drinking alcohol?",
      answer: "No. Drinking alcohol is ethanol; methanol is a related but far more toxic alcohol that should never be consumed, even in small quantities.",
    },
    {
      question: "What makes methanol so dangerous compared to ethanol?",
      answer: "Methanol is metabolized to formaldehyde and then formic acid, which cause metabolic acidosis and specifically damage the optic nerve, unlike ethanol's relatively less harmful metabolites.",
    },
    {
      question: "What is methanol used for industrially?",
      answer: "It is a major feedstock for formaldehyde, acetic acid, and biodiesel production, and is explored as a fuel and hydrogen carrier in low-carbon energy proposals.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of methanol" },
    { label: "PubChem CID 887", note: "Structural and toxicological identifiers" },
    { label: "CDC/ATSDR", note: "Methanol toxicology and poisoning treatment guidance" },
  ],
};
