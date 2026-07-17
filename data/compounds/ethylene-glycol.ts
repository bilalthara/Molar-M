import type { CompoundProfile } from "@/lib/chemistry/types";

export const ethyleneGlycol: CompoundProfile = {
  slug: "molar-mass-of-ethylene-glycol",
  formula: "C2H6O2",
  name: "Ethylene Glycol",
  iupacName: "Ethane-1,2-diol",
  commonNames: ["Ethylene glycol", "Monoethylene glycol (MEG)", "1,2-Ethanediol"],
  aliases: ["C₂H₆O₂", "HOCH₂CH₂OH"],
  category: "organic",
  categories: ["organic"],
  casNumber: "107-21-1",
  pubchemCid: "174",
  smiles: "C(CO)O",
  inchi: "InChI=1S/C2H6O2/c1-2-4/h3-4H,1-2H2",
  exactMass: 62.036779,
  featured: true,
  popular: true,

  overview: `Ethylene glycol (C₂H₆O₂) is the simplest diol, with molar mass 62.07 g/mol (C 2 × 12.01 + H 6 × 1.008 + O 2 × 16.00), consisting of two carbons each bearing a hydroxyl group. This dual-hydroxyl structure gives it far stronger hydrogen bonding and a much higher boiling point (197 °C) than simple monohydric alcohols of similar carbon count, while its ability to depress water's freezing point and elevate its boiling point in mixture makes it the dominant automotive antifreeze and engine coolant worldwide.

The molecular basis of automotive coolant chemistry is colligative: dissolved ethylene glycol lowers the freezing point of the water/glycol mixture (protecting against winter freeze damage) while simultaneously raising its boiling point (protecting against summer overheating), and a roughly 50:50 mixture with water achieves close to the practical optimum for both effects in typical climates. Beyond automotive use, ethylene glycol is a major industrial feedstock for producing polyethylene terephthalate (PET) — the polyester used in plastic bottles and synthetic fibers — through condensation polymerization with terephthalic acid, making it one of the highest-volume industrial organic chemicals in the world.

Ethylene glycol carries a serious toxicological profile distinct from its chemical cousin propylene glycol: it has a deceptively sweet taste that has led to accidental and occasionally intentional poisonings, particularly in pets and children attracted to spilled antifreeze. Its danger arises not from the parent compound itself but from its metabolism: liver alcohol dehydrogenase oxidizes it stepwise to glycolaldehyde, glycolic acid, and ultimately toxic oxalic acid, which precipitates as calcium oxalate crystals in the kidneys, causing severe metabolic acidosis and potentially fatal renal failure — a mechanism that also explains why the standard antidote (fomepizole, or historically ethanol) works by competitively blocking the same alcohol dehydrogenase enzyme responsible for producing the toxic metabolites.`,

  formulaExplanation: `C₂H₆O₂ can be written HOCH₂–CH₂OH to show its two hydroxyl groups, one on each carbon of the ethane backbone. As a diol, it has twice the hydrogen-bonding capacity of a simple monohydric alcohol like ethanol, which explains its considerably higher boiling point, viscosity, and water miscibility despite the modest molecular size.`,

  chemicalProfile: `Ethylene glycol behaves as a typical primary alcohol at each hydroxyl group, undergoing esterification (notably with terephthalic acid to form PET polyester), oxidation, and dehydration reactions. It is completely miscible with water and many polar organic solvents due to extensive hydrogen bonding. Metabolically, it is oxidized stepwise by alcohol dehydrogenase and aldehyde dehydrogenase to glycolaldehyde, glycolic acid, glyoxylic acid, and toxic oxalic acid — the basis of its serious toxicity when ingested.`,

  uniqueTopics: [
    {
      heading: "Colligative antifreeze chemistry: freezing point depression and boiling point elevation",
      body: "Dissolved ethylene glycol lowers the freezing point of water while simultaneously raising its boiling point, both colligative properties that scale with the concentration of dissolved solute particles. A roughly 50:50 water-glycol mixture can remain liquid down to about −37 °C while also resisting boiling until well above 100 °C, giving automotive coolant systems protection across a wide range of climate extremes in a single formulation.",
    },
    {
      heading: "Toxic metabolism to oxalic acid and calcium oxalate crystals",
      body: "Ethylene glycol itself is only mildly toxic, but liver alcohol dehydrogenase oxidizes it stepwise to glycolaldehyde, then glycolic acid, and ultimately oxalic acid. Oxalic acid combines with calcium in the bloodstream to form insoluble calcium oxalate crystals that deposit in the kidneys, causing acute kidney injury and severe metabolic acidosis — the mechanism responsible for ethylene glycol poisoning's characteristic clinical picture and its potential lethality if untreated.",
    },
    {
      heading: "Fomepizole and ethanol as competitive antidotes",
      body: "Because alcohol dehydrogenase has a much higher affinity for ethanol (and even higher for the drug fomepizole) than for ethylene glycol, administering either compound competitively blocks the enzyme from converting ethylene glycol into its toxic metabolites, buying time for the unmetabolized parent compound to be cleared by the kidneys or removed via hemodialysis — a textbook example of using enzyme kinetics and competitive inhibition therapeutically.",
    },
    {
      heading: "PET polyester production: ethylene glycol as an industrial monomer",
      body: "Ethylene glycol condenses with terephthalic acid (or dimethyl terephthalate) in a step-growth polymerization to produce polyethylene terephthalate, the polyester resin used for plastic beverage bottles, synthetic textile fibers, and packaging film. This industrial application, rather than antifreeze, accounts for the majority of global ethylene glycol consumption by volume.",
    },
    {
      heading: "Ethylene glycol vs. propylene glycol: toxicity and application divide",
      body: "Ethylene glycol and propylene glycol are both simple diols used in coolants and industrial processes, but propylene glycol is metabolized to lactic acid and pyruvate — normal intermediary metabolites — rather than to toxic oxalic acid, making it 'food safe' and approved for use in pharmaceuticals, cosmetics, and food products, while ethylene glycol's dangerous metabolism restricts it to non-ingestible industrial and automotive applications.",
    },
  ],

  applications: {
    industrial: [
      "Automotive antifreeze and engine coolant formulations",
      "Polyethylene terephthalate (PET) polyester and fiber production",
      "Heat transfer fluid in HVAC and industrial cooling systems",
      "Aircraft and runway deicing fluid formulations",
    ],
    laboratory: [
      "Cryoprotectant component in some biological sample preservation protocols",
      "Solvent and reaction medium for specific organic syntheses",
      "Reference compound for colligative property (freezing/boiling point) demonstrations",
    ],
    environmental: "Spilled antifreeze poses a significant hazard to wildlife and pets due to its sweet taste and toxicity; used antifreeze requires proper recycling or disposal to prevent groundwater contamination.",
    biological: "Not used biologically; highly toxic if ingested due to metabolism to oxalic acid, causing kidney damage and metabolic acidosis.",
  },

  preparation: `Industrially produced by hydrating ethylene oxide (itself derived from ethylene) with water under heat and pressure, or catalytically via newer routes from syngas or biomass-derived feedstocks. Laboratory quantities can be obtained from the same ethylene oxide hydration reaction on a smaller scale.`,

  production: `Global ethylene glycol production exceeds 30 million tonnes annually, with the majority consumed by the polyester (PET) industry and a substantial share dedicated to antifreeze and coolant formulations.`,

  storage: `Store in tightly sealed containers away from ignition sources and incompatible oxidizers. Because of its toxicity and appealing sweet taste, store away from children and pets, and use commercial formulations containing bittering agents where required by regulation.`,

  handling: `Toxic if ingested; avoid skin and eye contact with concentrated material. Use gloves and eye protection when handling bulk quantities. Never siphon or taste-test antifreeze, and clean up spills promptly to prevent animal or child exposure.`,

  safety: {
    summary: "Highly toxic if ingested due to metabolism to oxalic acid, causing severe metabolic acidosis and kidney failure; low acute hazard from skin contact or inhalation at typical handling conditions.",
    hazards: [
      "Severe toxicity if ingested (kidney failure, metabolic acidosis)",
      "Sweet taste increases risk of accidental ingestion by children and pets",
      "Mild skin and eye irritation from direct contact",
      "Combustible liquid at elevated temperatures",
    ],
    classification: "GHS: Acute Tox. 4 (oral)",
  },

  interestingFacts: [
    "Ethylene glycol's sweet taste, combined with its severe toxicity, makes accidental antifreeze poisoning a well-known veterinary and pediatric emergency scenario.",
    "A 50:50 water-glycol mixture can protect an engine from freezing down to roughly −37 °C while also raising the boiling point well above 100 °C.",
    "The vast majority of ethylene glycol produced worldwide goes into making PET plastic and polyester fiber, not antifreeze.",
    "Fomepizole, the modern antidote for ethylene glycol poisoning, works by the same competitive enzyme-blocking principle once achieved with intravenous ethanol.",
  ],

  history: `Ethylene glycol was first prepared in 1859 by French chemist Charles-Adolphe Wurtz. Its large-scale industrial production and adoption as an antifreeze developed through the early-to-mid 20th century alongside the growth of the automobile industry, while its use as a PET polyester monomer grew explosively after DuPont commercialized polyester fiber production in the 1950s.`,

  discovery: "Charles-Adolphe Wurtz, 1859 — first synthesized ethylene glycol.",

  examNotes: [
    "Molar mass C₂H₆O₂ = 2(12.01) + 6(1.008) + 2(16.00) = 62.07 g/mol.",
    "Freezing point depression: ΔTf = Kf × m × i, where i ≈ 1 for a non-electrolyte like ethylene glycol.",
    "Toxic metabolic pathway: ethylene glycol → glycolaldehyde → glycolic acid → oxalic acid (via alcohol/aldehyde dehydrogenase).",
    "PET polymer formation: n HOCH₂CH₂OH + n HOOC-C₆H₄-COOH → polyester + 2n H₂O (condensation polymerization).",
  ],

  commonMistakes: [
    "Confusing ethylene glycol (C₂H₆O₂, toxic) with propylene glycol (C₃H₈O₂, food-safe) — they have very different metabolic fates and safety profiles.",
    "Assuming a higher glycol concentration always gives better freeze protection — beyond an optimal ratio (roughly 60–70% glycol), freezing point protection can actually worsen.",
    "Overlooking that ethylene glycol's toxicity comes from its metabolites, not the parent compound itself, which affects antidote strategy.",
  ],

  studentTips: [
    "Remember 'two OH groups, one on each carbon' to quickly derive ethylene glycol's structure and diol classification.",
    "Link the antidote mechanism (ethanol or fomepizole) directly to competitive inhibition of alcohol dehydrogenase for pharmacology and biochemistry questions.",
    "Connect PET polyester synthesis to condensation polymerization concepts — two monomers, water released, repeating ester linkages formed.",
  ],

  misconceptions: [
    "Ethylene glycol antifreeze is not inherently colored for identification by nature — the common orange, green, or pink colors are added dyes, not an intrinsic property of the compound.",
    "Propylene glycol and ethylene glycol are not interchangeable despite similar names and some overlapping industrial uses — only propylene glycol is approved for food and pharmaceutical ingestion.",
    "Ethylene glycol poisoning treatment does not primarily rely on inducing vomiting or general detoxification — it specifically targets blocking further toxic metabolite formation and enhancing elimination.",
  ],

  physical: {
    appearance: "Colorless, slightly viscous liquid",
    color: "Colorless (commercial antifreeze often dyed)",
    odor: "Odorless (pure); mild sweet taste (do not taste-test)",
    stateAtSTP: "Liquid",
    density: "1.113 g/cm³ (20 °C)",
    meltingPoint: "−13 °C",
    boilingPoint: "197 °C",
    flashPoint: "111 °C",
    solubility: "Completely miscible with water in all proportions",
    crystalStructure: "Not applicable (liquid at room temperature)",
  },

  chemical: {
    classification: "Aliphatic diol (dihydric alcohol)",
    polarity: "Highly polar (two hydroxyl groups, extensive hydrogen bonding)",
    molecularGeometry: "Tetrahedral at each carbon; flexible C–C single bond rotation",
    oxidationStates: "Not typically described by oxidation states (organic covalent compound)",
    chemicalFamily: "Glycols / dihydric alcohols",
  },

  reactions: [
    {
      equation: "n HOCH₂CH₂OH + n HOOC-C₆H₄-COOH → [-OCH₂CH₂OCO-C₆H₄-CO-]ₙ + 2n H₂O",
      type: "Condensation polymerization (esterification)",
      conditions: "Heat, catalyst, industrial reactor",
      explanation: "Ethylene glycol condenses with terephthalic acid in a repeating esterification, releasing water and building the polyester chain used in PET plastic and fiber.",
      products: "Polyethylene terephthalate (PET) and water",
      applications: "PET plastic bottle and polyester fiber manufacturing",
      relatedConcepts: ["Condensation polymerization", "Esterification", "Polymer chemistry"],
    },
    {
      equation: "HOCH₂CH₂OH → OHC-CHO + 2 H⁺ + 2 e⁻ (stepwise, via alcohol dehydrogenase)",
      type: "Metabolic oxidation (biochemical, toxic pathway)",
      conditions: "In vivo, liver alcohol/aldehyde dehydrogenase enzymes",
      explanation: "Sequential enzymatic oxidation converts ethylene glycol through glycolaldehyde and glycolic acid to toxic oxalic acid, the basis of ethylene glycol poisoning.",
      products: "Glycolaldehyde, glycolic acid, and ultimately oxalic acid",
      applications: "Toxicology and antidote mechanism understanding",
      relatedConcepts: ["Metabolism", "Enzyme catalysis", "Toxicology"],
    },
    {
      equation: "Oxalic acid + Ca²⁺ → CaC₂O₄(s)",
      type: "Precipitation (toxic mechanism)",
      conditions: "Physiological conditions, kidney tubules",
      explanation: "Oxalic acid, the terminal toxic metabolite of ethylene glycol, precipitates with calcium ions to form insoluble calcium oxalate crystals that damage kidney tissue.",
      products: "Calcium oxalate crystals (insoluble)",
      applications: "Explains renal toxicity in ethylene glycol poisoning",
      relatedConcepts: ["Precipitation reactions", "Solubility", "Renal toxicology"],
    },
    {
      equation: "HOCH₂CH₂OH + [O] → HOCH₂CHO (partial) or further to HOOC-COOH (complete)",
      type: "Chemical oxidation (laboratory/industrial)",
      conditions: "Strong oxidizers (e.g., nitric acid, catalytic oxidation)",
      explanation: "Controlled chemical oxidation of ethylene glycol can yield glycolaldehyde, glyoxal, or oxalic acid depending on conditions, mirroring (but distinct from) its metabolic oxidation pathway.",
      products: "Various oxidation products depending on conditions (aldehydes, oxalic acid)",
      applications: "Industrial oxalic acid and glyoxal production",
      relatedConcepts: ["Oxidation reactions", "Industrial synthesis"],
    },
  ],

  relatedFormulas: ["C3H8O2", "C2H6O", "C8H10O4", "HOOC-COOH", "C2H4O"],
  comparisonNote: "Ethylene glycol (C₂H₆O₂, 62.07 g/mol) is metabolized to toxic oxalic acid, whereas its close relative propylene glycol (C₃H₈O₂, 76.09 g/mol) is metabolized to harmless lactic acid and pyruvate, explaining why only propylene glycol is approved for food and pharmaceutical use.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of ethylene glycol (C₂H₆O₂).",
      answer: "2(12.01) + 6(1.008) + 2(16.00) = 62.07 g/mol",
    },
    {
      question: "How many moles of ethylene glycol are in 500 g of pure antifreeze concentrate?",
      answer: "500 g ÷ 62.07 g/mol ≈ 8.06 mol",
    },
    {
      question: "Estimate the freezing point depression of a solution containing 1.00 mol ethylene glycol per kg of water (Kf for water = 1.86 °C·kg/mol).",
      answer: "ΔTf = Kf × m = 1.86 × 1.00 = 1.86 °C depression (new freezing point ≈ −1.86 °C)",
      hint: "Ethylene glycol is a non-electrolyte, so van't Hoff factor i = 1.",
    },
    {
      question: "Why is ethylene glycol poisoning treated with ethanol or fomepizole rather than simply inducing vomiting?",
      answer: "Both compounds competitively inhibit alcohol dehydrogenase, slowing the enzyme from converting ethylene glycol into its toxic metabolites (glycolic and oxalic acid), which is more effective than removing unmetabolized parent compound alone.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of ethylene glycol?",
      answer: "62.07 g/mol.",
    },
    {
      question: "Why is ethylene glycol used in antifreeze?",
      answer: "It lowers water's freezing point and raises its boiling point, protecting engines from both freezing and overheating.",
    },
    {
      question: "Why is ethylene glycol dangerous to pets?",
      answer: "Its sweet taste attracts animals, and even small amounts are metabolized to toxic oxalic acid, causing potentially fatal kidney damage.",
    },
    {
      question: "What is the difference between ethylene glycol and propylene glycol?",
      answer: "Ethylene glycol metabolizes to toxic oxalic acid, while propylene glycol metabolizes to harmless lactic acid, making only propylene glycol safe for food and pharmaceutical use.",
    },
    {
      question: "What is the main industrial use of ethylene glycol besides antifreeze?",
      answer: "It is a key monomer in producing polyethylene terephthalate (PET), used for plastic bottles and polyester fiber.",
    },
  ],

  references: [
    { label: "PubChem CID 174", note: "Ethylene glycol compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "American Association of Poison Control Centers", note: "Ethylene glycol toxicity and treatment guidance" },
  ],
};
