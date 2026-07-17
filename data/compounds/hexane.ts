import type { CompoundProfile } from "@/lib/chemistry/types";

export const hexane: CompoundProfile = {
  slug: "molar-mass-of-hexane",
  formula: "C6H14",
  name: "Hexane",
  iupacName: "Hexane",
  commonNames: ["Hexane", "n-Hexane"],
  aliases: ["C₆H₁₄", "Normal hexane"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "organic"],
  casNumber: "110-54-3",
  pubchemCid: "8058",
  smiles: "CCCCCC",
  inchi: "InChI=1S/C6H14/c1-3-5-6-4-2/h3-6H2,1-2H3",
  exactMass: 86.109550,
  featured: true,
  popular: true,

  overview: `Hexane (C₆H₁₄) is a straight-chain alkane with molar mass 86.18 g/mol (C 6 × 12.01 + H 14 × 1.008), a colorless, highly volatile, and flammable liquid that is completely nonpolar and virtually insoluble in water. As a saturated hydrocarbon containing only single C–C and C–H bonds, hexane is chemically unreactive under ordinary conditions apart from combustion and radical halogenation, making it an exceptionally useful inert solvent wherever a nonpolar extraction or reaction medium is needed.

The molecular formula C₆H₁₄ corresponds to five distinct structural isomers — n-hexane, 2-methylpentane, 3-methylpentane, 2,3-dimethylbutane, and 2,2-dimethylbutane — all sharing the same formula and molar mass but differing in branching pattern, boiling point, and octane rating, making hexane a textbook case study in structural isomerism. Commercial "hexanes" solvent grade is often a mixture dominated by n-hexane along with some of these branched isomers and cyclopentane/methylcyclopentane, refined from petroleum through fractional distillation.

Hexane's defining industrial application is as the extraction solvent of choice for vegetable oil production: soybeans, canola, and other oilseeds are treated with hexane to dissolve and extract the oil far more efficiently than mechanical pressing alone, after which the hexane is recovered by distillation and recycled, leaving behind crude vegetable oil and defatted meal. This same solvent power, combined with hexane's low boiling point and easy recoverability, extends to its use as a general degreasing and cleaning solvent, a component of some adhesives and printing inks, and a carrier solvent in various industrial coating formulations — though its neurotoxic hazard on chronic inhalation exposure, particularly to peripheral nerves, requires careful ventilation controls wherever it is used at scale.`,

  formulaExplanation: `C₆H₁₄ satisfies the general alkane formula CₙH₂ₙ₊₂ for n = 6, confirming it is a fully saturated hydrocarbon with no rings or multiple bonds. The straight-chain arrangement (n-hexane) is only one of five possible structural isomers sharing this formula; branched isomers rearrange the same six carbons and fourteen hydrogens into different connectivity patterns.`,

  chemicalProfile: `Hexane is chemically inert under normal conditions, undergoing essentially only two significant reaction types: combustion with oxygen (releasing substantial heat, used implicitly whenever hexane vapor ignites) and radical halogenation under UV light or heat, where halogen atoms substitute for hydrogen atoms via a free-radical chain mechanism. It does not react with common acids, bases, or oxidizing agents under mild conditions, which is precisely why it makes such a reliable, unreactive extraction and cleaning solvent.`,

  uniqueTopics: [
    {
      heading: "The five structural isomers of C₆H₁₄",
      body: "Hexane's molecular formula corresponds to five distinct constitutional isomers: n-hexane (straight chain), 2-methylpentane, 3-methylpentane, 2,3-dimethylbutane, and 2,2-dimethylbutane. All five share the identical molar mass of 86.18 g/mol, yet each has a different boiling point, branching pattern, and combustion behavior, making C₆H₁₄ a classic teaching example for illustrating how molecular formula alone does not determine a compound's physical or chemical properties.",
    },
    {
      heading: "Vegetable oil extraction solvent",
      body: "Hexane is the dominant solvent used industrially to extract oil from soybeans, canola seed, and other oilseeds, dissolving the oil far more thoroughly than mechanical pressing alone. After extraction, the hexane is recovered by distillation and recycled, leaving crude vegetable oil and hexane-free defatted meal (used in animal feed) — a process responsible for the majority of the world's vegetable oil supply.",
    },
    {
      heading: "n-Hexane neurotoxicity and occupational exposure limits",
      body: "Chronic inhalation of n-hexane vapor is specifically neurotoxic, causing peripheral neuropathy through its metabolite 2,5-hexanedione, which damages axons in peripheral nerves. This distinct toxicological profile — worse for n-hexane than for many of its branched isomers — has led to strict occupational exposure limits in industries using hexane-based solvents, particularly in shoe manufacturing, furniture upholstery, and printing where historical outbreaks of hexane-related neuropathy were documented.",
    },
    {
      heading: "Fractional distillation and petroleum refining source",
      body: "Hexane is obtained from crude oil through fractional distillation of the naphtha fraction, alongside its structural isomers and related C₆ hydrocarbons like cyclohexane and methylcyclopentane. Its position in the naphtha boiling range also makes it and its isomers important contributors to gasoline's octane characteristics, since branched isomers like 2,3-dimethylbutane resist engine knock far better than straight-chain n-hexane.",
    },
    {
      heading: "Free-radical halogenation chain mechanism",
      body: "Hexane undergoes halogenation (e.g., with chlorine or bromine) only via a free-radical chain mechanism requiring UV light or heat to initiate, proceeding through initiation (halogen radical formation), propagation (hydrogen abstraction and radical substitution), and termination steps — a foundational mechanism taught throughout introductory organic chemistry using simple alkanes like hexane as the model substrate.",
    },
  ],

  applications: {
    industrial: [
      "Vegetable oil extraction solvent (soybean, canola, and other oilseed processing)",
      "Degreasing and cleaning solvent in manufacturing",
      "Solvent component in adhesives, printing inks, and coatings",
      "Petroleum refining feedstock and gasoline blending component (with isomers)",
    ],
    laboratory: [
      "Nonpolar extraction and chromatography mobile phase solvent",
      "Reference compound for alkane combustion and halogenation reactions",
      "Model compound for teaching structural isomerism",
    ],
    environmental: "Volatile organic compound (VOC) contributing to ground-level ozone formation; requires vapor recovery and emission controls in large-scale industrial solvent extraction operations.",
    biological: "No nutritional or biological role; n-hexane is specifically neurotoxic on chronic inhalation exposure, causing peripheral nerve damage via its 2,5-hexanedione metabolite.",
  },

  preparation: `Obtained industrially by fractional distillation of the naphtha fraction of crude petroleum, followed by further separation to isolate n-hexane from its branched isomers and cycloalkane contaminants. Laboratory quantities are typically purchased as high-purity solvent-grade material rather than synthesized directly.`,

  production: `Global production is tied closely to petroleum refining output, with hexane recovered as a naphtha distillation cut; large volumes are specifically refined to food-grade purity for use as an oilseed extraction solvent.`,

  storage: `Store in tightly sealed, flame-resistant containers away from heat, sparks, and open flame. Use with adequate ventilation given its high volatility and flammability; store separately from strong oxidizers.`,

  handling: `Highly flammable; use only in well-ventilated areas or fume hoods, away from ignition sources. Avoid prolonged inhalation exposure given its neurotoxic potential, and use appropriate gloves to minimize skin contact and defatting.`,

  safety: {
    summary: "Highly flammable liquid; chronic inhalation exposure poses a specific peripheral neurotoxicity risk. Acute exposure can cause dizziness and central nervous system depression.",
    hazards: [
      "Highly flammable liquid and vapor",
      "Chronic inhalation causes peripheral neuropathy (n-hexane specifically)",
      "Acute inhalation causes dizziness, headache, and CNS depression",
      "Skin defatting and irritation from repeated contact",
    ],
    classification: "GHS: Flam. Liq. 2, Skin Irrit. 2, Repr. 2, STOT RE 2 (repeated exposure)",
  },

  interestingFacts: [
    "Hexane's molecular formula, C₆H₁₄, corresponds to five different possible structural arrangements, all with identical molar mass.",
    "Most commercially extracted vegetable oil, including much of the world's soybean oil, passes through a hexane extraction step at some point in processing.",
    "n-Hexane's neurotoxicity was linked to documented outbreaks of peripheral neuropathy among workers in shoe manufacturing and other industries using hexane-based glues.",
    "Hexane's low boiling point (69 °C) makes it easy to recover and recycle after extraction, a major reason for its continued industrial popularity despite its flammability and toxicity concerns.",
  ],

  history: `Hexane, like other simple alkanes, became industrially significant with the growth of petroleum refining in the late 19th and 20th centuries. Its adoption as an oilseed extraction solvent expanded through the 20th century as it displaced older, less efficient mechanical pressing and other solvent extraction methods, becoming the dominant technology for vegetable oil production by the mid-20th century.`,

  discovery: "Isolated and characterized as petroleum refining and organic chemistry techniques matured through the 19th and early 20th centuries; no single discoverer is credited given its natural occurrence in crude oil.",

  examNotes: [
    "Molar mass C₆H₁₄ = 6(12.01) + 14(1.008) = 86.18 g/mol.",
    "General alkane formula CₙH₂ₙ₊₂ confirms hexane (n=6) is fully saturated with no rings or double bonds.",
    "Five structural isomers exist for C₆H₁₄, differing in carbon chain branching.",
    "Combustion: 2 C₆H₁₄ + 19 O₂ → 12 CO₂ + 14 H₂O (complete combustion, balanced with O₂ coefficient 19/2 per hexane doubled to whole numbers).",
  ],

  commonMistakes: [
    "Assuming all C₆H₁₄ isomers have identical boiling points and physical properties — branching significantly changes these values despite the shared formula.",
    "Confusing hexane (C₆H₁₄, alkane) with hexene (C₆H₁₂, alkene) or hexyne (C₆H₁₀, alkyne) — different degrees of saturation and reactivity.",
    "Underestimating hexane's flammability and neurotoxicity because it seems like a 'simple, inert' solvent.",
  ],

  studentTips: [
    "Use the general alkane formula CₙH₂ₙ₊₂ as a quick check for saturation when identifying hexane or its isomers.",
    "Draw out all five C₆H₁₄ isomers as practice for mastering structural isomerism concepts.",
    "Remember hexane's two main reactions — combustion and radical halogenation — as the primary reactivity to expect from any simple alkane.",
  ],

  misconceptions: [
    "Hexane is not chemically 'safe' simply because it doesn't react with common acids or bases — its flammability and neurotoxicity are separate, serious hazards.",
    "Commercial 'hexanes' solvent is not pure n-hexane — it is typically a mixture of several C₆H₁₄ isomers and related cycloalkanes.",
    "Vegetable oils processed with hexane extraction do not retain significant hexane residue — recovery and distillation steps remove the vast majority of solvent before the oil reaches consumers.",
  ],

  physical: {
    appearance: "Colorless liquid",
    color: "Colorless",
    odor: "Mild gasoline-like odor",
    stateAtSTP: "Liquid",
    density: "0.655 g/cm³ (20 °C)",
    meltingPoint: "−95 °C",
    boilingPoint: "69 °C",
    flashPoint: "−22 °C",
    solubility: "Practically insoluble in water (~13 mg/L); miscible with most nonpolar organic solvents",
    crystalStructure: "Not applicable (liquid at room temperature)",
  },

  chemical: {
    classification: "Saturated aliphatic hydrocarbon (alkane)",
    polarity: "Nonpolar",
    molecularGeometry: "Tetrahedral at each carbon (sp³ hybridized, zigzag chain conformation)",
    oxidationStates: "Not typically described by oxidation states (organic covalent compound)",
    chemicalFamily: "Alkanes (straight-chain, C6)",
  },

  reactions: [
    {
      equation: "2 C₆H₁₄(l) + 19 O₂(g) → 12 CO₂(g) + 14 H₂O(g)",
      type: "Complete combustion",
      conditions: "Ignition, excess oxygen",
      explanation: "Hexane burns completely in excess oxygen to form carbon dioxide and water, releasing substantial heat — the basis of its flammability hazard and fuel-related applications.",
      products: "Carbon dioxide and water vapor",
      applications: "Combustion energy release, fire hazard analysis",
      relatedConcepts: ["Combustion reactions", "Stoichiometry", "Thermochemistry"],
    },
    {
      equation: "C₆H₁₄ + Cl₂ → C₆H₁₃Cl + HCl (UV light)",
      type: "Free-radical halogenation",
      conditions: "UV light or heat initiation",
      explanation: "Chlorine substitutes for a hydrogen atom via a free-radical chain mechanism, producing a mixture of monochlorinated hexane isomers depending on which hydrogen is abstracted.",
      products: "Chlorohexane isomers and hydrogen chloride",
      applications: "Teaching free-radical substitution mechanisms",
      relatedConcepts: ["Free-radical mechanisms", "Substitution reactions", "Photochemistry"],
    },
    {
      equation: "C₆H₁₄ → C₃H₆ + C₃H₈ (example cracking products)",
      type: "Thermal cracking",
      conditions: "High temperature, industrial refinery conditions",
      explanation: "At high temperature without sufficient oxygen, hexane's C–C bonds can break homolytically, producing smaller alkane and alkene fragments — a process used industrially to convert heavier hydrocarbons into more valuable lighter ones.",
      products: "Smaller alkane and alkene fragments (product mix varies by conditions)",
      applications: "Petroleum refining, olefin production",
      relatedConcepts: ["Thermal cracking", "Bond dissociation", "Industrial petrochemistry"],
    },
    {
      equation: "n-Hexane ⇌ 2-Methylpentane ⇌ 2,2-Dimethylbutane (isomerization, catalytic)",
      type: "Catalytic isomerization",
      conditions: "Acidic catalyst (e.g., Pt/Al₂O₃ with HCl promoter), industrial reforming",
      explanation: "Straight-chain hexane can be catalytically rearranged into its more highly branched isomers, which have higher octane ratings valuable for gasoline blending.",
      products: "Branched hexane isomers",
      applications: "Gasoline octane improvement, petroleum refining",
      relatedConcepts: ["Isomerization", "Catalysis", "Fuel chemistry"],
    },
  ],

  relatedFormulas: ["C6H12", "C6H10", "C5H12", "C7H16", "C6H14O"],
  comparisonNote: "Hexane (C₆H₁₄, 86.18 g/mol) and cyclohexane (C₆H₁₂, 84.16 g/mol) share nearly identical carbon counts but differ in ring formation, giving cyclohexane a lower hydrogen count and distinctly different physical properties despite their close molar masses.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of hexane (C₆H₁₄).",
      answer: "6(12.01) + 14(1.008) = 86.18 g/mol",
    },
    {
      question: "How many moles of CO₂ form from the complete combustion of 43.09 g of hexane?",
      answer: "43.09 g ÷ 86.18 g/mol = 0.500 mol C₆H₁₄ → 0.500 × 6 = 3.00 mol CO₂",
    },
    {
      question: "How many structural isomers exist for the molecular formula C₆H₁₄?",
      answer: "Five: n-hexane, 2-methylpentane, 3-methylpentane, 2,3-dimethylbutane, and 2,2-dimethylbutane.",
    },
    {
      question: "Why is n-hexane specifically associated with peripheral neuropathy in occupational health studies?",
      answer: "It is metabolized in the body to 2,5-hexanedione, a neurotoxic compound that damages peripheral nerve axons upon chronic inhalation exposure.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of hexane?",
      answer: "86.18 g/mol.",
    },
    {
      question: "Why is hexane used to extract vegetable oil?",
      answer: "It dissolves oil efficiently from oilseeds and is easily recovered by distillation afterward, making extraction far more efficient than mechanical pressing alone.",
    },
    {
      question: "Is hexane dangerous to breathe?",
      answer: "Yes — acute exposure causes dizziness and CNS depression, while chronic inhalation exposure to n-hexane specifically can cause peripheral nerve damage.",
    },
    {
      question: "How many isomers does hexane have?",
      answer: "Five structural isomers share the formula C₆H₁₄, differing in their carbon chain branching pattern.",
    },
    {
      question: "Is hexane soluble in water?",
      answer: "No — it is a nonpolar hydrocarbon and is only very slightly soluble in water, but it mixes readily with other nonpolar organic solvents.",
    },
  ],

  references: [
    { label: "PubChem CID 8058", note: "Hexane compound data" },
    { label: "NIOSH", note: "Occupational exposure limits and neurotoxicity data for n-hexane" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
