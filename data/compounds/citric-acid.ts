import type { CompoundProfile } from "@/lib/chemistry/types";

export const citricAcid: CompoundProfile = {
  slug: "molar-mass-of-citric-acid",
  formula: "C6H8O7",
  name: "Citric Acid",
  iupacName: "2-Hydroxypropane-1,2,3-tricarboxylic acid",
  commonNames: ["Citric acid", "Sour salt", "E330 (food grade)"],
  aliases: ["C₆H₈O₇", "2-Hydroxy-1,2,3-propanetricarboxylic acid"],
  category: "organic",
  categories: ["organic", "acid"],
  casNumber: "77-92-9",
  pubchemCid: "311",
  smiles: "C(C(=O)O)C(CC(=O)O)(C(=O)O)O",
  inchi: "InChI=1S/C6H8O7/c7-3(8)1-6(13,5(11)12)2-4(9)10/h13H,1-2H2,(H,7,8)(H,9,10)(H,11,12)",
  exactMass: 192.027000,
  featured: true,
  popular: true,

  overview: `Citric acid (C₆H₈O₇) is a triprotic organic acid with molar mass 192.12 g/mol (C 6 × 12.01 + H 8 × 1.008 + O 7 × 16.00), built around a central carbon bearing a hydroxyl group and three carboxylic acid arms. It occurs naturally in citrus fruits — lemons contain roughly 5–8% citric acid by weight — and is one of the most widely produced organic acids in the world, manufactured almost entirely today by fermenting sugar (usually from corn starch or molasses) with the mold Aspergillus niger rather than extracting it from fruit.

Citric acid's central importance in biochemistry comes from its role as the namesake of the citric acid cycle (also called the Krebs cycle or TCA cycle), the hub of aerobic metabolism where acetyl-CoA from carbohydrates, fats, and proteins is oxidized to release energy captured as NADH, FADH₂, and GTP, ultimately powering the electron transport chain and ATP synthesis in nearly all aerobic organisms. Citrate itself is the first stable intermediate formed in the cycle, condensing with oxaloacetate before undergoing a sequence of oxidative decarboxylations back to oxaloacetate.

As a food and industrial acidulant, citric acid provides the tart, refreshing sourness in soft drinks, candies, and jams (E330 on ingredient labels), while its three ionizable carboxyl groups and hydroxyl oxygen make it an excellent metal chelator — it binds calcium, iron, and other metal ions tightly, which underlies its use in food preservation (sequestering trace metal catalysts that promote oxidative spoilage), water softening, metal cleaning formulations, and even as an anticoagulant additive in blood collection tubes, where it chelates the calcium ions required for clotting.`,

  formulaExplanation: `C₆H₈O₇ contains three carboxyl groups (–COOH) and one hydroxyl group (–OH) attached to a central three-carbon backbone. Each carboxyl proton can dissociate stepwise (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40), making citric acid triprotic, and the fully deprotonated citrate³⁻ ion is an excellent multidentate ligand for metal cations because its three carboxylate oxygens (and sometimes the hydroxyl) can coordinate simultaneously.`,

  chemicalProfile: `Citric acid behaves as a weak triprotic Brønsted acid, neutralizing bases stepwise to form mono-, di-, and tricitrate salts. Its chelating carboxylate groups bind di- and trivalent metal cations (Ca²⁺, Fe³⁺, Mg²⁺) strongly, forming soluble complexes that prevent metal-catalyzed oxidation and precipitation. It reacts with bicarbonate to release CO₂ (the fizz in effervescent tablets combining citric acid with sodium bicarbonate) and esterifies with alcohols at any of its three carboxyl groups.`,

  uniqueTopics: [
    {
      heading: "Citrate as the entry point of the Krebs cycle",
      body: "The citric acid cycle takes its name from citrate, the six-carbon molecule formed when acetyl-CoA condenses with oxaloacetate via citrate synthase. From there, citrate is isomerized and oxidatively decarboxylated through isocitrate, α-ketoglutarate, and succinate back to oxaloacetate, generating the reduced electron carriers (NADH, FADH₂) that feed the electron transport chain — making citric acid's chemistry a direct link between organic acid structure and cellular respiration.",
    },
    {
      heading: "Industrial fermentation over fruit extraction",
      body: "Although citric acid was first isolated from lemon juice by Carl Wilhelm Scheele in 1784, essentially all commercial citric acid today is produced by fermenting sugar substrates (corn starch, molasses, or sucrose) with the mold Aspergillus niger, which excretes citric acid in large quantities under carefully controlled low-manganese, high-sugar conditions — a striking example of microbial fermentation displacing natural extraction for a compound most people associate with citrus fruit.",
    },
    {
      heading: "Metal chelation and its practical consequences",
      body: "Citric acid's three carboxylate groups can wrap around metal cations to form stable, water-soluble chelate complexes. This property is exploited in food preservation (sequestering trace iron and copper that catalyze oxidative rancidity), descaling and metal-cleaning products (dissolving mineral scale by complexing calcium and magnesium), and anticoagulant blood-collection tubes, where citrate binds the calcium ions essential for the clotting cascade.",
    },
    {
      heading: "Stepwise triprotic dissociation and buffering",
      body: "With three distinct pKa values (3.13, 4.76, 6.40) spanning roughly pH 3 to 7, citric acid and its conjugate citrate bases form an unusually versatile buffer system spanning a wide physiological and food-relevant pH range, which is why citrate–phosphate and citrate-only buffers are common choices in biochemistry labs and pharmaceutical formulations.",
    },
    {
      heading: "Effervescence chemistry in tablets and drink powders",
      body: "Combining citric acid with sodium bicarbonate in a dry mixture produces the fizzing reaction of effervescent tablets and drink powders only once water is added: the acid protonates bicarbonate to carbonic acid, which decomposes to CO₂ gas and water, giving the characteristic bubbling and tangy taste of products like effervescent vitamin C tablets.",
    },
  ],

  applications: {
    industrial: [
      "Food and beverage acidulant (E330) in soft drinks, candies, and jams",
      "Metal cleaning and descaling agents (chelation of calcium and iron scale)",
      "Cosmetic and personal care pH adjustment and preservation",
      "Biodegradable chelating agent replacing phosphates in some detergents",
    ],
    laboratory: [
      "Citrate buffer preparation across a wide pH range (pH 3–7)",
      "Anticoagulant in blood collection tubes (calcium chelation)",
      "Metal ion masking agent in titrations and complexometric analysis",
      "Model compound for triprotic acid dissociation and titration curves",
    ],
    biological: "Central intermediate of the citric acid (Krebs/TCA) cycle in aerobic respiration; naturally abundant in citrus fruits and involved in bone mineral regulation.",
  },

  preparation: `Industrially produced by submerged fermentation of sugar substrates (corn starch, molasses, or sucrose syrup) with Aspergillus niger under controlled trace-metal and nitrogen-limited conditions that favor citrate overproduction. Laboratory-grade material is purified by crystallization from the fermentation broth after removing biomass and impurities.`,

  production: `Global citric acid production exceeds 2 million tonnes annually, almost entirely via fermentation; China is the dominant producer, supplying the majority of world demand for food, beverage, and industrial-grade material.`,

  storage: `Store the anhydrous or monohydrate crystalline solid in a dry, sealed container — citric acid is mildly hygroscopic and the monohydrate can lose or gain water depending on humidity. Stable at room temperature away from strong oxidizers.`,

  handling: `Low hazard; mild irritant to eyes and broken skin at high concentrations. Use standard laboratory gloves and eye protection when handling concentrated solutions or powder to avoid dust irritation.`,

  safety: {
    summary: "Generally recognized as safe for food use; concentrated solid or solutions may mildly irritate eyes, skin, and respiratory tract.",
    hazards: [
      "Mild eye and skin irritation from concentrated powder or solution",
      "Respiratory irritation from inhaled dust",
      "Dental enamel erosion with excessive, prolonged exposure (as with other food acids)",
    ],
    classification: "Not classified as hazardous under GHS for food-grade material at typical exposure levels",
  },

  interestingFacts: [
    "Lemons and limes owe their sour taste largely to citric acid, which can make up 5–8% of their juice by weight.",
    "The citric acid cycle processes roughly two-thirds of the calories in a typical diet, making citrate one of biochemistry's most central small molecules.",
    "Aspergillus niger fermentation, first commercialized in 1919, produces more citric acid worldwide each year than could ever be practically extracted from citrus fruit.",
    "Citric acid's chelating power is strong enough that it is used to safely descale coffee makers and kettles without harsh mineral acids.",
  ],

  history: `Carl Wilhelm Scheele first isolated citric acid from lemon juice in 1784. Industrial production shifted from citrus extraction to microbial fermentation after James Currie discovered in 1917 that Aspergillus niger mold could excrete large quantities of citric acid from sugar, a process Pfizer commercialized in 1919 and which remains the dominant production method today. Hans Krebs elucidated the citric acid cycle's central metabolic role in 1937, earning the 1953 Nobel Prize in Physiology or Medicine.`,

  discovery: "Carl Wilhelm Scheele, 1784 — isolated citric acid crystals from lemon juice.",

  examNotes: [
    "Molar mass C₆H₈O₇ = 6(12.01) + 8(1.008) + 7(16.00) = 192.12 g/mol.",
    "Triprotic acid: pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40.",
    "Citrate synthase catalyzes the entry step of the Krebs cycle: acetyl-CoA + oxaloacetate → citrate.",
    "Effervescent reaction: C₆H₈O₇ + 3 NaHCO₃ → Na₃C₆H₅O₇ + 3 H₂O + 3 CO₂.",
  ],

  commonMistakes: [
    "Treating citric acid as monoprotic — it has three dissociable protons with distinct pKa values.",
    "Confusing citric acid (from citrus/fermentation) with ascorbic acid (vitamin C) — both are food acids but structurally and metabolically distinct.",
    "Assuming all citric acid is fruit-derived — the vast majority sold commercially is produced by fungal fermentation.",
  ],

  studentTips: [
    "Draw the three carboxyl groups and central hydroxyl to remember why citric acid is triprotic and a strong chelator.",
    "Link citrate directly to the Krebs cycle diagram — it's the first stable product after acetyl-CoA enters.",
    "For titration curve questions, expect three distinct buffering regions and equivalence points spanning pH 3–7.",
  ],

  misconceptions: [
    "Citric acid is not 'weak' in the sense of being harmless in all forms — concentrated solid can still irritate skin and eyes.",
    "The Krebs cycle is not identical to citric acid itself — citrate is one key intermediate in a multi-step enzymatic cycle.",
    "Citric acid is not primarily extracted from lemons commercially — fermentation of sugar substrates dominates production.",
  ],

  physical: {
    appearance: "White crystalline powder or colorless crystals",
    color: "White to colorless",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.665 g/cm³ (anhydrous)",
    meltingPoint: "153–154 °C (anhydrous)",
    boilingPoint: "Decomposes above 175 °C",
    solubility: "1,330 g/L water at 20 °C (highly soluble)",
    crystalStructure: "Monoclinic (anhydrous and monohydrate forms)",
  },

  chemical: {
    classification: "Weak triprotic carboxylic acid / hydroxy tricarboxylic acid",
    acidity: "Weak triprotic (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40)",
    polarity: "Highly polar (multiple hydrogen-bonding groups)",
    molecularGeometry: "Trigonal planar at each carboxyl carbon; tetrahedral at central carbon",
    oxidationStates: "Variable across carbons; central carbon bears –OH substituent",
    chemicalFamily: "Tricarboxylic acids / hydroxy acids",
  },

  reactions: [
    {
      equation: "C₆H₈O₇ + 3 NaOH → Na₃C₆H₅O₇ + 3 H₂O",
      type: "Acid–base neutralization (complete, triprotic)",
      conditions: "Excess strong base",
      explanation: "All three carboxyl protons are neutralized to form trisodium citrate; partial neutralization gives mono- or disodium citrate salts at lower base ratios.",
      products: "Trisodium citrate and water",
      applications: "Citrate salt production, buffer and food additive manufacture",
      relatedConcepts: ["Triprotic acids", "Multiple equivalence points", "Salt formation"],
    },
    {
      equation: "C₆H₈O₇ + 3 NaHCO₃ → Na₃C₆H₅O₇ + 3 H₂O + 3 CO₂",
      type: "Acid–carbonate (effervescence)",
      conditions: "Aqueous, room temperature",
      explanation: "Citric acid reacts with sodium bicarbonate to release carbon dioxide gas, the basis of effervescent tablets and fizzing drink powders.",
      products: "Trisodium citrate, water, and carbon dioxide gas",
      applications: "Effervescent tablet formulation, food and pharmaceutical products",
      relatedConcepts: ["Gas evolution", "Acid–base reactions", "Formulation chemistry"],
    },
    {
      equation: "Acetyl-CoA + Oxaloacetate + H₂O → Citrate + CoA-SH",
      type: "Enzymatic condensation (citrate synthase, biochemical)",
      conditions: "Mitochondrial matrix, aqueous, enzyme-catalyzed",
      explanation: "Citrate synthase catalyzes the condensation of a two-carbon acetyl unit with four-carbon oxaloacetate to form six-carbon citrate, the entry step of the Krebs cycle.",
      products: "Citrate and free coenzyme A",
      applications: "Cellular respiration, metabolic biochemistry",
      relatedConcepts: ["Krebs cycle", "Enzyme catalysis", "Cellular metabolism"],
    },
    {
      equation: "C₆H₈O₇ + 3 Fe³⁺ → [Fe(C₆H₅O₇)]-type chelate complexes",
      type: "Metal chelation (complex ion formation)",
      conditions: "Aqueous, varies with pH",
      explanation: "Deprotonated citrate carboxylate groups coordinate metal cations such as Fe³⁺ and Ca²⁺, forming soluble chelate complexes that resist precipitation and catalytic side reactions.",
      products: "Soluble metal–citrate chelate complexes",
      applications: "Food preservation, anticoagulant blood tubes, descaling formulations",
      relatedConcepts: ["Chelation", "Complex ions", "Coordination chemistry"],
    },
  ],

  relatedFormulas: ["C6H5O7Na3", "C6H8O6", "C4H6O5", "CH3COOH", "C6H12O6"],
  comparisonNote: "Citric acid (192.12 g/mol, triprotic) is structurally and functionally distinct from ascorbic acid/vitamin C (176.12 g/mol) despite both being common 'sour' food acids — citric acid is a tricarboxylic Krebs cycle intermediate, while ascorbic acid is a lactone with antioxidant vitamin activity.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of citric acid (C₆H₈O₇).",
      answer: "6(12.01) + 8(1.008) + 7(16.00) = 192.12 g/mol",
    },
    {
      question: "How many grams of citric acid are needed to prepare 500 mL of 0.100 M solution?",
      answer: "0.100 mol/L × 0.500 L = 0.0500 mol; 0.0500 × 192.12 = 9.61 g",
    },
    {
      question: "How many moles of NaOH are required to fully neutralize 19.2 g of citric acid?",
      answer: "19.2 g ÷ 192.12 g/mol = 0.100 mol citric acid; requires 3 × 0.100 = 0.300 mol NaOH (triprotic)",
    },
    {
      question: "Which functional groups make citric acid an effective metal chelator?",
      answer: "Its three carboxylate groups (and central hydroxyl) can simultaneously coordinate a metal cation, forming a stable ring-like chelate complex.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of citric acid?",
      answer: "192.12 g/mol for anhydrous C₆H₈O₇.",
    },
    {
      question: "Is citric acid the same as the Krebs cycle?",
      answer: "No — citrate is one key intermediate molecule within the multi-step Krebs (citric acid) cycle, which the cycle is named after.",
    },
    {
      question: "Where does commercial citric acid come from?",
      answer: "Almost entirely from fermenting sugar substrates with the mold Aspergillus niger, not from squeezing citrus fruit.",
    },
    {
      question: "Why is citric acid added to food?",
      answer: "It provides tart flavor, adjusts pH for preservation, and chelates trace metals that would otherwise catalyze oxidative spoilage.",
    },
    {
      question: "Is citric acid a strong or weak acid?",
      answer: "Weak — it is a triprotic acid with pKa values of 3.13, 4.76, and 6.40, dissociating only partially at each step.",
    },
    {
      question: "Why does citric acid make drinks fizz with baking soda?",
      answer: "It protonates bicarbonate to form carbonic acid, which decomposes into carbon dioxide gas and water, producing the fizzing effect.",
    },
  ],

  references: [
    { label: "PubChem CID 311", note: "Citric acid compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "IUBMB", note: "Citric acid (Krebs/TCA) cycle biochemistry" },
  ],
};
