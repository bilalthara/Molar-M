import type { CompoundProfile } from "@/lib/chemistry/types";

export const octane: CompoundProfile = {
  slug: "molar-mass-of-octane",
  formula: "C8H18",
  name: "Octane",
  iupacName: "Octane",
  commonNames: ["n-Octane", "Octane"],
  aliases: ["C₈H₁₈", "n-C₈H₁₈"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "organic"],
  casNumber: "111-65-9",
  pubchemCid: "356",
  smiles: "CCCCCCCC",
  inchi: "InChI=1S/C8H18/c1-3-5-7-8-6-4-2/h3-8H2,1-2H3",
  exactMass: 114.14085,
  featured: true,
  popular: true,

  overview: `Octane (C₈H₁₈) is the eight-carbon straight-chain alkane, n-octane, with molar mass 114.23 g/mol (8 × 12.01 + 18 × 1.008). As a component of gasoline, it is a colorless, flammable liquid that is virtually insoluble in water but fully miscible with other hydrocarbons. C₈H₁₈ has 18 structural isomers (all sharing this same molecular formula), ranging from the straight-chain n-octane to highly branched forms — a fact central to understanding why "octane" as a fuel term is more subtle than a single pure substance.

The famous "octane rating" of gasoline does not measure the amount of n-octane present; rather, it measures a fuel's resistance to premature, uncontrolled ignition (engine knock) under compression, using a scale where 2,2,4-trimethylpentane — commonly called isooctane, a highly branched C₈H₁₈ isomer — is arbitrarily assigned a rating of 100, and n-heptane is assigned 0. A gasoline's octane rating (e.g., 87, 91, 93) reflects how its knock resistance compares to blends of isooctane and heptane, not literal octane content. Branched isomers like isooctane resist knock far better than straight-chain n-octane, which is one reason refineries isomerize and reform straight-chain hydrocarbons into more branched forms to boost octane rating.

n-Octane itself is primarily of interest as a model compound for studying alkane combustion chemistry, as a solvent and reference standard in petroleum analysis, and as one of many components blended into finished gasoline, rather than as a fuel additive valued for its own combustion properties.`,

  formulaExplanation: `C₈H₁₈ follows the general alkane formula CₙH₂ₙ₊₂ with n = 8. The straight-chain isomer, n-octane, has eight carbons connected end-to-end (CH₃–(CH₂)₆–CH₃). Because the formula only specifies atom counts and not connectivity, all 18 possible arrangements of eight carbons and eighteen hydrogens into a saturated, non-cyclic structure share the identical molecular formula C₈H₁₈ and molar mass, despite having different physical properties and combustion behavior.`,

  chemicalProfile: `Like other alkanes, octane is relatively unreactive at room temperature, undergoing combustion, catalytic cracking, and free-radical halogenation as its principal reactions. Industrially, straight-chain octane and similar alkanes are catalytically isomerized and reformed into branched isomers to improve fuel antiknock properties, and can be catalytically cracked into shorter, more volatile hydrocarbons for blending into gasoline or petrochemical feedstocks.`,

  uniqueTopics: [
    {
      heading: "Octane Rating Is Not a Measure of Octane Content",
      body: "A gasoline's octane rating (e.g., 87 or 93) reflects its resistance to engine knock relative to a reference blend of isooctane (2,2,4-trimethylpentane, rated 100) and n-heptane (rated 0) — it says nothing directly about how much actual octane (of any isomer) is present in the fuel. This is one of the most common misconceptions among consumers about gasoline chemistry.",
    },
    {
      heading: "n-Octane vs. Isooctane: Same Formula, Different Knock Behavior",
      body: "n-Octane and isooctane are both C₈H₁₈ (114.23 g/mol) but have dramatically different antiknock properties: the highly branched isooctane resists autoignition under compression far better than the straight-chain n-octane, illustrating how molecular branching, not just molecular formula, governs practical fuel performance.",
    },
    {
      heading: "Why Refineries Favor Branched Isomers",
      body: "Catalytic isomerization and reforming processes convert straight-chain alkanes like n-octane into more branched isomers specifically to raise octane rating and reduce knock tendency, since branched hydrocarbons burn more smoothly and controllably under the high compression ratios used in modern engines.",
    },
    {
      heading: "Constitutional Isomerism in C₈H₁₈",
      body: "There are 18 distinct structural isomers of C₈H₁₈, differing only in how the eight carbons are branched — a frequently used teaching example for illustrating how rapidly the number of possible isomers grows with chain length in the alkane series.",
    },
    {
      heading: "Octane as a Petroleum Reference Compound",
      body: "n-Octane serves as a common reference and calibration standard in gas chromatography and petroleum analysis, and as a model alkane in combustion kinetics research aimed at understanding and reducing knock and emissions in internal combustion engines.",
    },
  ],

  applications: {
    industrial: [
      "Component of gasoline and other petroleum distillate fuel blends",
      "Feedstock for catalytic reforming/isomerization to produce higher-octane branched isomers",
      "Solvent and reference standard in petroleum and petrochemical analysis",
      "Model compound in combustion kinetics and engine knock research",
    ],
    laboratory: [
      "Gas chromatography retention time and calibration reference",
      "Teaching example for constitutional isomerism in alkanes",
      "Combustion enthalpy and calorimetry demonstrations",
    ],
    environmental: "As a gasoline component, octane combustion contributes CO₂ and, when incomplete, CO and particulate emissions; evaporative losses contribute to volatile organic compound (VOC) emissions from fuel handling and storage.",
  },

  preparation: `n-Octane is obtained by fractional distillation of crude petroleum within the gasoline boiling range, rather than by targeted laboratory synthesis. Isomeric octanes (including isooctane) are produced industrially by catalytic alkylation of isobutane with isobutylene or by isomerization/reforming of straight-chain hydrocarbon feedstocks.`,

  production: `Octane isomers are produced at refinery scale as part of gasoline blending operations, including catalytic reforming, isomerization, and alkylation units specifically designed to maximize branched, high-octane-rating hydrocarbon content.`,

  storage: `Store in tightly sealed, flame-resistant containers away from ignition sources, oxidizers, and open flame, consistent with standard flammable liquid storage practice for petroleum hydrocarbons.`,

  handling: `Flammable liquid; avoid ignition sources and static discharge. Use in well-ventilated areas to avoid vapor accumulation. Avoid prolonged skin contact, which can cause defatting and irritation.`,

  safety: {
    summary: "Flammable liquid hydrocarbon with low acute toxicity but potential for aspiration hazard if swallowed and vapor inhalation risk in poorly ventilated spaces; handle with standard flammable liquid precautions.",
    hazards: [
      "Flammable liquid and vapor",
      "Aspiration hazard if swallowed (can enter lungs and cause chemical pneumonitis)",
      "Vapor inhalation may cause dizziness or respiratory irritation in enclosed spaces",
      "Environmental hazard to aquatic organisms if released in quantity",
    ],
    classification: "GHS: Flam. Liq. 2, Asp. Tox. 1",
  },

  interestingFacts: [
    "C₈H₁₈ has 18 possible structural isomers, more than double the 9 isomers of heptane (C₇H₁₆), illustrating the rapid combinatorial growth of alkane isomer counts with chain length.",
    "Isooctane, the fuel industry's octane-rating reference standard, is actually a branched isomer of octane, not 'more octane' in any literal sense.",
    "The molar mass of octane (114.23 g/mol) means one mole of liquid octane occupies roughly 163 mL, based on its density of about 0.703 g/cm³.",
    "Diesel and jet fuels contain longer-chain alkanes than gasoline's octane-range hydrocarbons, which is part of why they require different engine designs (compression ignition vs. spark ignition).",
  ],

  history: `Octane and its isomers were characterized as petroleum chemistry matured in the late 19th and early 20th centuries alongside the growth of the automobile industry. The octane rating scale, formalized in the 1920s by Graham Edgar using isooctane and n-heptane as reference fuels, became the standard measure of gasoline antiknock quality still used worldwide today.`,

  discovery: "Characterized during systematic 19th–20th century petroleum fractionation studies; the octane rating scale itself was established by Graham Edgar in 1926 using isooctane and n-heptane as calibration references.",

  examNotes: [
    "Molar mass C₈H₁₈ = 8(12.01) + 18(1.008) = 114.22–114.23 g/mol.",
    "Combustion: 2 C₈H₁₈(l) + 25 O₂(g) → 16 CO₂(g) + 18 H₂O(g) (balance carefully — 25/2 O₂ per mole of octane).",
    "Octane rating measures antiknock performance relative to isooctane (100) and n-heptane (0) — it is not a direct measure of octane content.",
    "C₈H₁₈ has 18 structural isomers; only one (n-octane) is the unbranched straight-chain form.",
  ],

  commonMistakes: [
    "Assuming higher 'octane number' gasoline contains more actual octane molecules — it reflects antiknock performance, not octane content.",
    "Confusing n-octane with isooctane (2,2,4-trimethylpentane) — same formula and molar mass, very different structure and knock resistance.",
    "Under-balancing octane combustion by forgetting the fractional/doubled oxygen coefficient (12.5 mol O₂ per mole octane, or 25 mol O₂ per 2 mol octane).",
  ],

  studentTips: [
    "Write the combustion equation doubled (2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O) to avoid fractional coefficients.",
    "Remember: octane rating compares a fuel's knock resistance to isooctane/heptane blends — memorize 100 = isooctane, 0 = n-heptane.",
    "Use octane as the go-to example when discussing how many structural isomers a formula can have as chain length grows.",
  ],

  misconceptions: [
    "Premium (higher octane number) gasoline is not inherently 'more powerful' or higher-energy — it simply resists knock better, which matters mainly for high-compression engines designed to use it.",
    "Isooctane is not a separate element or additive unrelated to octane — it is literally a branched structural isomer of C₈H₁₈.",
    "n-Octane is not itself a major deliberate gasoline additive prized for its own performance — it is present as one of many hydrocarbons in the gasoline boiling range, with branched isomers preferred for octane rating.",
  ],

  physical: {
    appearance: "Colorless liquid",
    color: "Colorless",
    odor: "Gasoline-like hydrocarbon odor",
    stateAtSTP: "Liquid",
    density: "0.703 g/cm³ at 20 °C",
    meltingPoint: "−56.8 °C",
    boilingPoint: "125.6 °C",
    flashPoint: "13 °C",
    solubility: "0.66 mg/L water at 25 °C (essentially insoluble); miscible with hydrocarbons and most organic solvents",
    crystalStructure: "Not commonly crystallized under standard conditions; forms a crystalline solid below −56.8 °C",
  },

  chemical: {
    classification: "Saturated hydrocarbon / alkane",
    polarity: "Non-polar",
    molecularGeometry: "Tetrahedral at each carbon (zig-zag chain conformation)",
    bondAngle: "109.5°",
    oxidationStates: "C: −3 to −2 depending on position; H: +1",
    chemicalFamily: "Alkanes (eighth homolog, straight-chain)",
  },

  reactions: [
    {
      equation: "2 C₈H₁₈(l) + 25 O₂(g) → 16 CO₂(g) + 18 H₂O(g)",
      type: "Combustion (complete)",
      conditions: "Ignition, excess oxygen (internal combustion engine or open flame)",
      explanation: "Complete combustion of octane releases substantial energy (~5470 kJ/mol), the fundamental reaction powering gasoline engines; incomplete combustion under limited oxygen instead produces CO and soot.",
      products: "Carbon dioxide and water",
      applications: "Internal combustion engine power generation, fuel energy content calculations",
      relatedConcepts: ["Combustion", "Enthalpy of combustion", "Engine chemistry"],
    },
    {
      equation: "n-C₈H₁₈ → branched C₈H₁₈ isomers (e.g., isooctane)",
      type: "Catalytic isomerization",
      conditions: "Pt or acidic zeolite catalyst, moderate heat and pressure",
      explanation: "Refinery isomerization units rearrange straight-chain octane into more branched isomers, raising the resulting fuel blend's octane rating and antiknock performance without changing the overall molecular formula.",
      products: "Branched octane isomers",
      applications: "Gasoline octane rating improvement in petroleum refining",
      relatedConcepts: ["Isomerization", "Catalysis", "Petroleum refining"],
    },
    {
      equation: "C₈H₁₈ → smaller alkanes + alkenes (catalytic cracking)",
      type: "Catalytic/thermal cracking",
      conditions: "Zeolite catalyst, high temperature (450–550 °C)",
      explanation: "Larger hydrocarbon chains including octane can be cracked into a mixture of shorter alkanes and alkenes, useful both for adjusting the product slate of a refinery and for producing petrochemical feedstocks.",
      products: "Mixture of lighter alkanes and alkenes",
      applications: "Petroleum refining product distribution, petrochemical feedstock generation",
      relatedConcepts: ["Cracking", "Bond cleavage", "Refining processes"],
    },
    {
      equation: "C₈H₁₈ + Br₂ → C₈H₁₇Br + HBr",
      type: "Free-radical halogenation",
      conditions: "UV light or heat, radical chain mechanism",
      explanation: "Bromine radicals substitute a hydrogen on octane, giving a mixture of monobrominated products depending on which C–H bond reacts, illustrating regioselectivity trends in radical halogenation of longer alkanes.",
      products: "Bromooctane isomers and hydrogen bromide",
      applications: "Illustrates free-radical substitution mechanisms and selectivity in longer-chain alkanes",
      relatedConcepts: ["Free radicals", "Substitution reactions", "Regioselectivity"],
    },
  ],

  relatedFormulas: ["C3H8", "CH4", "CO2", "H2O", "C2H6"],
  comparisonNote: "n-Octane (C₈H₁₈, 114.23 g/mol) and isooctane (2,2,4-trimethylpentane, also C₈H₁₈, 114.23 g/mol) share an identical molar mass but differ dramatically in knock resistance — isooctane defines the top of the 0–100 octane rating scale, while n-octane performs poorly under compression by comparison.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of octane (C₈H₁₈).",
      answer: "8(12.01) + 18(1.008) = 114.22–114.23 g/mol",
    },
    {
      question: "How many moles of CO₂ are produced from the complete combustion of 228.46 g of octane?",
      answer: "228.46 g ÷ 114.23 g/mol = 2.000 mol C₈H₁₈; from 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O, this yields 16.00 mol CO₂",
      hint: "Use the mole ratio 2 mol octane : 16 mol CO₂, i.e., 8 mol CO₂ per mol octane.",
    },
    {
      question: "Does a gasoline with an octane rating of 93 contain 93% octane by some measure?",
      answer: "No — the octane rating measures resistance to engine knock relative to a reference blend of isooctane (rated 100) and n-heptane (rated 0); it does not directly indicate the percentage of actual octane in the fuel.",
    },
    {
      question: "Why do n-octane and isooctane have the same molar mass but different fuel performance?",
      answer: "Both share the molecular formula C₈H₁₈ (114.23 g/mol), but isooctane's highly branched structure resists autoignition under compression far better than n-octane's straight chain, so molecular shape rather than mass governs knock resistance.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of octane?",
      answer: "114.23 g/mol.",
    },
    {
      question: "Does gasoline's octane rating mean it's made of pure octane?",
      answer: "No — the octane rating is a knock-resistance scale referenced to isooctane (100) and n-heptane (0); gasoline is a complex blend of many hydrocarbons, not pure octane.",
    },
    {
      question: "What is the difference between octane and isooctane?",
      answer: "Both share the formula C₈H₁₈ and molar mass 114.23 g/mol, but octane usually refers to the straight-chain n-octane, while isooctane is a specific highly branched isomer (2,2,4-trimethylpentane) used as the top reference point for octane rating.",
    },
    {
      question: "Why do refineries convert straight-chain octane into branched isomers?",
      answer: "Branched isomers resist engine knock much better than straight-chain alkanes, so isomerizing straight-chain hydrocarbons raises the resulting gasoline's octane rating and performance under high compression.",
    },
    {
      question: "Is octane found in diesel fuel?",
      answer: "Diesel fuel consists mainly of longer-chain hydrocarbons than octane-range gasoline components, and diesel engines are rated by cetane number (ignition quality under compression) rather than octane number.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Octane thermophysical properties" },
    { label: "PubChem CID 356", note: "n-Octane identifiers and data" },
    { label: "SAE International", note: "Octane rating standards and gasoline antiknock testing" },
  ],
};
