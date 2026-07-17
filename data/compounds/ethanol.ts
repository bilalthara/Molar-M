import type { CompoundProfile } from "@/lib/chemistry/types";

export const ethanol: CompoundProfile = {
  slug: "molar-mass-of-ethanol",
  formula: "C2H6O",
  name: "Ethanol",
  iupacName: "Ethanol",
  commonNames: ["Ethyl alcohol", "Grain alcohol", "Drinking alcohol"],
  aliases: ["C₂H₅OH", "EtOH", "Alcohol"],
  category: "organic",
  categories: ["organic"],
  casNumber: "64-17-5",
  pubchemCid: "702",
  smiles: "CCO",
  inchi: "InChI=1S/C2H6O/c1-2-3/h3H,2H2,1H3",
  exactMass: 46.041864814,
  featured: true,
  popular: true,

  overview: `Ethanol (C₂H₅OH) is a two-carbon alcohol with molar mass 46.07 g/mol, featuring a hydroxyl group on a sp³-hybridized carbon. It is fully miscible with water in all proportions due to hydrogen bonding between ethanol's OH and water molecules — a property exploited in alcoholic beverages, disinfectants, and solvent systems.

Ethanol is produced biologically by yeast fermentation: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. Industrial bioethanol from corn and sugarcane serves as gasoline additive (E10, E85) and potential renewable fuel. Blood alcohol concentration (BAC) is measured in mg/dL or ‰; ethanol distributes in total body water and is metabolized primarily by alcohol dehydrogenase to acetaldehyde, then aldehyde dehydrogenase to acetate.`,

  formulaExplanation: `C₂H₆O can also be written C₂H₅OH to emphasize the hydroxyl functional group. The formula shows two carbons, six hydrogens, and one oxygen — but only one O–H bond (the hydroxyl proton is acidic, pKa ≈ 16, far weaker than carboxylic acids). The ethyl group (–C₂H₅) attaches to the hydroxyl-bearing carbon.`,

  chemicalProfile: `Ethanol undergoes combustion (C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O), dehydration to ethylene (with concentrated H₂SO₄, 170 °C), oxidation to acetaldehyde then acetic acid, and esterification with carboxylic acids (Fischer esterification). It forms hydrogen bonds, lowering freezing point of mixtures — vodka freezes below −20 °C depending on proof.`,

  uniqueTopics: [
    {
      heading: "Fermentation biochemistry: from sugar to ethanol",
      body: "Alcoholic fermentation is a multi-step anaerobic biochemical pathway in which yeast first breaks down glucose into pyruvate via glycolysis, then decarboxylates pyruvate to acetaldehyde (releasing CO₂), and finally reduces acetaldehyde to ethanol using the enzyme alcohol dehydrogenase, regenerating the NAD⁺ needed to keep glycolysis running without oxygen. This pathway exists in yeast primarily as a way to sustain energy metabolism under anaerobic conditions, with ethanol and CO₂ as byproducts rather than the biological 'goal' — humans have simply learned to harvest and concentrate this metabolic byproduct for beverages and fuel.",
    },
    {
      heading: "Distillation: separating ethanol from fermented wash",
      body: "Because ethanol (boiling point 78.4 °C) and water (100 °C) have different volatilities, distillation can concentrate ethanol beyond the roughly 15% maximum achievable by fermentation alone (higher concentrations become toxic to the yeast producing it). However, ethanol and water form an azeotrope at about 95.6% ethanol by mass, at which the vapor and liquid compositions become identical, so ordinary distillation cannot exceed this concentration; producing anhydrous (100%) ethanol requires additional techniques such as azeotropic distillation with a third component, molecular sieve dehydration, or membrane pervaporation.",
    },
    {
      heading: "Ethanol as fuel: energy content and blending",
      body: "As a biofuel, ethanol is blended into gasoline at various concentrations (E10 at 10%, E85 at up to 85%) to reduce petroleum consumption and, depending on feedstock and production method, potentially lower net lifecycle carbon emissions. Its lower energy density compared to gasoline (about 21 MJ/L versus 34 MJ/L) means ethanol-blended fuels deliver somewhat lower fuel economy per liter, but ethanol's higher octane rating allows higher-compression, more efficient engine designs, partially offsetting the energy density disadvantage in specially tuned flex-fuel vehicles.",
    },
    {
      heading: "Ethanol in beverages: proof, fermentation limits, and congeners",
      body: "Alcoholic beverage strength is measured as percent alcohol by volume (ABV) or, in some countries, 'proof' (historically twice the ABV in the US system). Beverages relying solely on fermentation — beer, wine — top out around 15–20% ABV because rising ethanol concentration progressively poisons the yeast producing it; higher-proof spirits require distillation to concentrate the ethanol beyond this natural fermentation ceiling. Distillation also concentrates 'congeners' — trace flavor and aroma compounds like esters, higher alcohols, and aldehydes carried over from fermentation — which is why different spirits distilled from different fermented washes have such distinct characteristic flavors despite sharing the same core ethanol molecule.",
    },
    {
      heading: "Ethanol as a laboratory solvent: polarity and versatility",
      body: "Ethanol's structure — a small nonpolar ethyl group attached to a polar hydroxyl group — gives it intermediate polarity that makes it miscible with both water and many nonpolar organic solvents, a versatility exploited throughout the laboratory as a recrystallization solvent, extraction medium, and cleaning agent for glassware and biological specimens. This same intermediate polarity underlies its use as a protic solvent in reactions requiring hydrogen-bond donation, distinguishing its solvent behavior from purely nonpolar solvents like hexane or purely polar aprotic solvents like DMSO.",
    },
  ],

  applications: {
    industrial: [
      "Biofuel blending with gasoline (E10, E85)",
      "Solvent for perfumes, varnishes, and pharmaceutical formulations",
      "Hand sanitizer active ingredient (60–80% with water)",
      "Extraction solvent for botanical compounds",
    ],
    laboratory: [
      "General-purpose polar protic solvent",
      "Preservative and fixative for biological specimens",
      "Recrystallization solvent for organic compounds",
    ],
    biological: "Metabolite of carbohydrate fermentation; psychoactive substance affecting CNS GABA receptors; antiseptic at 70% concentration (optimal water content aids membrane penetration).",
  },

  preparation: `Fermentation of sugars by Saccharomyces cerevisiae, followed by distillation. Synthetic route: hydration of ethylene: C₂H₄ + H₂O → C₂H₅OH (H₃PO₄ or zeolite catalyst, ~300 °C).`,

  production: `Global ethanol production exceeds 100 billion liters annually, led by USA (corn) and Brazil (sugarcane).`,

  storage: `Store in flame-resistant cabinets, away from ignition sources. Airtight containers prevent evaporation and water absorption. Denatured ethanol contains additives (methanol, bitterants) to prevent consumption.`,

  handling: `Highly flammable (flash point 13 °C). No open flames. Ventilate well. Avoid ingestion and prolonged skin contact (defatting).`,

  safety: {
    summary: "Flammable liquid; toxic by ingestion; CNS depressant. 70% aqueous ethanol is effective disinfectant but 100% is less effective against microbes.",
    hazards: [
      "Fire hazard — vapors heavier than air travel to ignition sources",
      "Acute toxicity by ingestion (alcohol poisoning)",
      "Eye irritation",
      "Chronic exposure: liver damage (metabolic concern, not lab exposure)",
    ],
    classification: "GHS: Flam. Liq. 2, Eye Irrit. 2",
  },

  interestingFacts: [
    "Ethanol molar mass 46.07 g/mol — one mole ≈ 58 mL (density 0.789 g/mL).",
    "70% ethanol disinfects better than 95% because water helps denature proteins and penetrate cell membranes.",
    "Absolute ethanol (100%) is hygroscopic and quickly absorbs water from air.",
    "Ethanol fuel has lower energy density (~21 MJ/L) than gasoline (~34 MJ/L).",
  ],

  history: `Fermentation of grain and fruit is among oldest chemical processes (~7000 BCE evidence). Lavoisier analyzed ethanol composition. Pasteur connected yeast to fermentation (1857). Industrial synthetic ethanol from ethylene developed in the 20th century.`,

  discovery: "Ancient fermentation predates written history; molecular composition clarified by Lavoisier and Gay-Lussac in the 18th–19th centuries.",

  examNotes: [
    "Molar mass C₂H₅OH = 2(12.01) + 6(1.008) + 16.00 = 46.07 g/mol.",
    "Combustion: C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O.",
    "Functional group: alcohol (–OH); can form hydrogen bonds.",
    "Distinguish from methanol (CH₃OH, 32.04 g/mol) — methanol is toxic.",
  ],

  commonMistakes: [
    "Confusing ethanol with methanol or isopropanol.",
    "Using wrong formula C₂H₆O without specifying which isomer (dimethyl ether has same formula).",
    "Forgetting combustion needs 3 O₂ per ethanol, not 2.",
  ],

  studentTips: [
    "Write C₂H₅OH in exams to clarify alcohol vs. ether isomer.",
    "Link fermentation equation to glucose molar mass (180.16) for yield calculations.",
    "Remember 46 g/mol for BAC conversion problems.",
  ],

  misconceptions: [
    "Ethanol is not a hydrocarbon — it contains oxygen (hydroxyl group).",
    "Higher proof alcohol does not freeze easily because of depressed freezing point, not absence of water.",
    "Hand sanitizer needs water content — pure ethanol is less effective as disinfectant.",
  ],

  physical: {
    appearance: "Colorless volatile liquid",
    color: "Colorless",
    odor: "Characteristic alcoholic odor",
    stateAtSTP: "Liquid",
    density: "0.789 g/cm³ at 20 °C",
    meltingPoint: "−114.1 °C",
    boilingPoint: "78.37 °C",
    flashPoint: "13 °C (closed cup)",
    solubility: "Miscible with water and many organic solvents",
    crystalStructure: "Not commonly crystallized; forms glasses at low temperature",
  },

  chemical: {
    classification: "Primary alcohol / aliphatic alcohol",
    polarity: "Polar (hydroxyl group, hydrogen bonding)",
    molecularGeometry: "Tetrahedral around both carbons and oxygen",
    oxidationStates: "C: −3 (methyl) and −1 (carbinol carbon)",
    chemicalFamily: "Alcohols (two-carbon)",
  },

  reactions: [
    {
      equation: "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O",
      type: "Combustion",
      conditions: "Ignition, excess oxygen",
      explanation: "Complete oxidation of ethanol releases ~1371 kJ/mol; basis of ethanol fuel energy content.",
      products: "Carbon dioxide and water",
      applications: "Biofuel energy, calorimetry experiments",
      relatedConcepts: ["Combustion", "Thermochemistry", "Renewable energy"],
    },
    {
      equation: "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
      type: "Alcoholic fermentation",
      conditions: "Yeast, anaerobic, ~30 °C",
      explanation: "Glycolysis followed by pyruvate decarboxylation and alcohol dehydrogenase reduction produces ethanol and CO₂.",
      products: "Ethanol and carbon dioxide",
      applications: "Beverage production, biofuel",
      relatedConcepts: ["Fermentation", "Biochemistry", "Enzymes"],
    },
    {
      equation: "C₂H₅OH → C₂H₄ + H₂O",
      type: "Dehydration (elimination)",
      conditions: "Concentrated H₂SO₄, 170 °C",
      explanation: "Acid-catalyzed elimination of water forms ethylene; at 140 °C diethyl ether forms instead.",
      products: "Ethene (ethylene) and water",
      applications: "Ethylene production, teaching elimination vs. substitution",
      relatedConcepts: ["Elimination reactions", "Alkenes", "Acid catalysis"],
    },
    {
      equation: "C₂H₅OH + CH₃COOH ⇌ CH₃COOC₂H₅ + H₂O",
      type: "Esterification (Fischer)",
      conditions: "Acid catalyst (H₂SO₄), heat",
      explanation: "Ethanol reacts with acetic acid to form ethyl acetate ester and water in reversible equilibrium.",
      products: "Ethyl acetate and water",
      applications: "Solvent production, ester chemistry introduction",
      relatedConcepts: ["Esterification", "Equilibrium", "Functional groups"],
    },
  ],

  relatedFormulas: ["C2H4", "CH3COOH", "C6H12O6", "CH3OH", "CO2"],
  comparisonNote: "Ethanol (46.07 g/mol) and dimethyl ether (46.07 g/mol) are constitutional isomers — same molar mass, different properties (alcohol vs. gas at STP).",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of ethanol (C₂H₅OH).",
      answer: "2(12.01) + 6(1.008) + 16.00 = 46.07 g/mol",
    },
    {
      question: "What mass of ethanol from fermentation of 180 g glucose (100% yield)?",
      answer: "180 g glucose = 1 mol → 2 mol ethanol = 2 × 46.07 = 92.14 g",
    },
    {
      question: "Why is 70% ethanol used as disinfectant instead of 100%?",
      answer: "Water co-solvent denatures proteins and improves penetration through microbial cell walls.",
    },
    {
      question: "How many moles of O₂ for complete combustion of 46 g ethanol?",
      answer: "46 g = 1 mol ethanol; needs 3 mol O₂ = 96 g",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of ethanol?",
      answer: "46.07 g/mol.",
    },
    {
      question: "Is ethanol the same as rubbing alcohol?",
      answer: "No — rubbing alcohol is usually isopropanol (C₃H₇OH, 60.10 g/mol), though ethanol-based sanitizers exist.",
    },
    {
      question: "Can ethanol and water mix in any ratio?",
      answer: "Yes — they are miscible in all proportions due to hydrogen bonding.",
    },
    {
      question: "How is ethanol made from corn?",
      answer: "Starch is hydrolyzed to glucose, then yeast ferments glucose to ethanol and CO₂, followed by distillation.",
    },
    {
      question: "What functional group does ethanol contain?",
      answer: "Hydroxyl group (–OH), classifying it as a primary alcohol.",
    },
  ],

  references: [
    { label: "PubChem CID 702", note: "Ethanol structure and properties" },
    { label: "NIST Chemistry WebBook", note: "Thermochemical data" },
    { label: "IUPAC", note: "Alcohol nomenclature" },
  ],
};
