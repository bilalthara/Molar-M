import type { CompoundProfile } from "@/lib/chemistry/types";

export const hydrochloricAcid: CompoundProfile = {
  slug: "molar-mass-of-hydrochloric-acid",
  formula: "HCl",
  name: "Hydrochloric Acid",
  iupacName: "Hydrogen chloride (gas); Hydrochloric acid (aqueous)",
  commonNames: ["Hydrochloric acid", "Muriatic acid", "Spirits of salt"],
  aliases: ["HCl", "Hydrogen chloride"],
  category: "acid",
  categories: ["acid", "inorganic", "gas"],
  casNumber: "7647-01-0",
  pubchemCid: "313",
  smiles: "Cl",
  inchi: "InChI=1S/HCl/h1H",
  exactMass: 35.976677703,
  featured: true,
  popular: true,

  overview: `Hydrochloric acid (HCl) in aqueous solution is one of the strongest common acids, with molar mass 36.46 g/mol for the hydrogen chloride unit (H 1.008 + Cl 35.45). Anhydrous HCl is a colorless gas that fumes in moist air because it dissolves exothermically in water; commercial "hydrochloric acid" is typically 32–38% HCl by mass (roughly 10–12 M).

HCl dissociates completely in dilute aqueous solution: HCl + H₂O → H₃O⁺ + Cl⁻. The chloride ion is a weak nucleophile and poor oxidizing agent, distinguishing HCl behavior from nitric acid. Gastric juice in humans contains ~0.5% HCl (pH 1–2), providing antimicrobial action and activating pepsin for protein digestion. Stomach acid secretion by parietal cells uses the H⁺/K⁺-ATPase pump with Cl⁻ following passively.`,

  formulaExplanation: `HCl is a diatomic molecule in the gas phase with a polar covalent bond (ΔEN ≈ 0.9). In water it ionizes completely to H₃O⁺ and Cl⁻. The formula represents one proton and one chloride ion per acid unit for stoichiometric purposes.`,

  chemicalProfile: `HCl is a monoprotic strong acid. It reacts with metals above hydrogen in the activity series (Mg, Zn, Fe) producing H₂ gas. With carbonates: 2 HCl + CaCO₃ → CaCl₂ + H₂O + CO₂. It does not oxidize copper or silver — unlike HNO₃. Concentrated HCl is oxidized by MnO₂ or KMnO₄ to release Cl₂ gas. Aqua regia (HCl + HNO₃, 3:1) dissolves gold via chloroaurate complex formation.`,

  uniqueTopics: [
    {
      heading: "Stomach Acid and Digestive Chemistry",
      body: "Parietal cells in the stomach lining secrete roughly 1.5–2 L of gastric juice daily containing HCl at pH 1–2, using the H⁺/K⁺-ATPase proton pump; this acidity activates pepsinogen into the digestive enzyme pepsin, denatures dietary proteins to expose them for enzymatic cleavage, and kills or suppresses many ingested pathogens — a physiological role that proton-pump inhibitor drugs (like omeprazole) directly target when treating acid reflux.",
    },
    {
      heading: "Industrial Pickling and Metal Cleaning",
      body: "'Pickling' uses dilute HCl to dissolve rust, mill scale, and oxide layers from steel surfaces before galvanizing, painting, or further processing — HCl + FeO → FeCl₂ + H₂O (schematically) — making it one of the most widely used industrial acids for metal surface preparation despite the corrosive fumes and spent-acid disposal challenges involved.",
    },
    {
      heading: "HCl as a Strong, Non-Oxidizing Acid",
      body: "HCl dissociates completely in water (strong acid) but, unlike nitric or sulfuric acid, does not act as an oxidizer — its chloride ion is a poor oxidizing agent, so HCl reacts with active metals purely through H⁺ reduction to H₂ gas rather than oxidizing the metal via the acid's anion, a key distinction tested when comparing metal-acid reactions across different mineral acids.",
    },
    {
      heading: "HCl vs. HF: Strong Acid, Simple Hazard vs. Weak Acid, Complex Toxicity",
      body: "HCl (strong acid, Ka effectively infinite) causes immediate, visible corrosive burns proportional to its concentration and contact time, following conventional acid-hazard expectations. HF, despite being a weak acid, is far more insidiously dangerous because fluoride ion penetrates tissue and binds calcium systemically — a stark illustration that acid strength and overall chemical hazard are not the same thing.",
    },
    {
      heading: "HCl vs. H₂SO₄: Monoprotic vs. Diprotic, Non-Dehydrating vs. Dehydrating",
      body: "HCl (36.46 g/mol) is monoprotic and lacks meaningful dehydrating or oxidizing power, while H₂SO₄ (98.08 g/mol) is diprotic, a powerful dehydrating agent capable of charring organic matter, and oxidizes some metals when hot and concentrated — differences that matter directly for reaction stoichiometry, safety precautions, and choice of acid in a given synthesis or industrial process.",
    },
  ],

  applications: {
    industrial: [
      "Steel pickling (removing rust and scale before galvanizing)",
      "Production of PVC via vinyl chloride monomer synthesis",
      "Food-grade acidulant and pH regulator (E507)",
      "Oil well acidizing (dissolving carbonate formations)",
    ],
    laboratory: [
      "Strong acid titrations against NaOH",
      "Preparation of chloride salts (HCl + metal/base → chloride)",
      "Cleaning glassware (removes mineral deposits)",
    ],
    biological: "Gastric acid component for digestion and pathogen defense; pathologically associated with GERD and peptic ulcers (often linked to H. pylori, not acid alone).",
  },

  preparation: `Direct synthesis: H₂ + Cl₂ → 2 HCl (industrial, exothermic). Laboratory: NaCl + H₂SO₄ (conc.) → NaHSO₄ + HCl↑. Aqueous HCl prepared by bubbling HCl gas into water in fume hood.`,

  production: `Co-product of chlor-alkali industry; also synthesized directly from elements. Global HCl market tied to PVC, steel, and chemical synthesis demand.`,

  storage: `Store in corrosion-resistant containers (glass, certain plastics, rubber-lined steel). Vent gas space — HCl fumes corrode nearby metal. Keep away from bases and moisture-sensitive materials.`,

  handling: `Corrosive and releases irritating HCl fumes. Use fume hood. Acid-resistant gloves and eye protection mandatory. Never mix with bleach (releases toxic Cl₂).`,

  safety: {
    summary: "Corrosive to skin, eyes, and respiratory tract. Inhalation causes coughing and pulmonary edema at high concentrations.",
    hazards: [
      "Corrosive burns",
      "Toxic fume inhalation",
      "Violent reaction with bases (heat generation)",
      "Cl₂ release if mixed with oxidizers or bleach",
    ],
    classification: "GHS: Skin Corr. 1B, Eye Dam. 1",
  },

  interestingFacts: [
    "Muriatic acid (from Latin muria, brine) was historically produced from salt and sulfuric acid.",
    "The molar mass 36.46 g/mol means 36.46 g HCl gas occupies 22.4 L at STP.",
    "HCl secretion in stomach totals roughly 1.5–2 L of 0.5% acid daily.",
    "Aqua regia (3 HCl : 1 HNO₃) can dissolve gold — neither acid alone can.",
  ],

  history: `Alchemists prepared HCl from salt and vitriol. Priestley collected HCl gas over mercury (1772). Davy proved HCl was a compound of hydrogen and chlorine (1810). Industrial synthesis from H₂ and Cl₂ developed in the 19th century with chlorine chemistry expansion.`,

  discovery: "Carl Wilhelm Scheele and Joseph Priestley independently characterized hydrogen chloride gas in the 1770s.",

  examNotes: [
    "Molar mass HCl = 1.008 + 35.45 = 36.46 g/mol.",
    "Monoprotic strong acid: 1 mol HCl = 1 mol H⁺ for neutralization.",
    "Test for chloride: AgNO₃ + Cl⁻ → AgCl(s) white, darkens in light.",
    "Metal + acid: Mg + 2 HCl → MgCl₂ + H₂ (balance and calculate gas volume at STP).",
  ],

  commonMistakes: [
    "Confusing HCl (36.46 g/mol) with Cl₂ (70.90 g/mol).",
    "Expecting Cu to react with dilute HCl (copper is below H in activity series for non-oxidizing acid).",
    "Writing HCl as ionic in gas phase — it is covalent until dissolved in water.",
  ],

  studentTips: [
    "Round 36.46 to 36.5 for quick stoichiometry.",
    "Remember HCl + carbonate always gives CO₂ — useful identification test.",
    "For titrations: moles HCl = moles NaOH at equivalence (1:1).",
  ],

  misconceptions: [
    "Stomach acid is not pure HCl — it contains KCl, NaCl, and mucus.",
    "HCl does not oxidize metals to higher oxides the way HNO₃ does.",
    "Muriatic acid from hardware stores is impure HCl — same core chemistry, variable concentration.",
  ],

  physical: {
    appearance: "Colorless to pale yellow liquid (solution); colorless gas (anhydrous)",
    color: "Colorless",
    odor: "Pungent, irritating (solution fumes)",
    stateAtSTP: "Gas (anhydrous HCl); liquid (concentrated aqueous solution)",
    density: "1.18 g/mL (37% solution, 20 °C); gas 1.639 g/L at 0 °C",
    meltingPoint: "−114.2 °C (anhydrous HCl)",
    boilingPoint: "−85.1 °C (anhydrous HCl); azeotrope ~20.2% boils at 108.6 °C",
    solubility: "720 g/L water at 20 °C (gas dissolves extensively, fuming)",
    crystalStructure: "Not applicable (gas/liquid); ionic character in aqueous solution only",
  },

  chemical: {
    classification: "Mineral acid / strong monoprotic acid",
    acidity: "Strong acid (pKa ≈ −7)",
    polarity: "Polar covalent (gas); ionic in aqueous solution",
    molecularGeometry: "Linear (gas phase HCl)",
    bondAngle: "180°",
    oxidationStates: "H: +1, Cl: −1",
    chemicalFamily: "Hydrogen halide (strongest common halide acid in water)",
  },

  reactions: [
    {
      equation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, standard titration",
      explanation: "Strong acid–strong base neutralization with sharp phenolphthalein endpoint.",
      products: "Sodium chloride and water",
      applications: "Acid–base titrations, salt preparation",
      relatedConcepts: ["Titration", "Neutralization", "Equivalence point"],
    },
    {
      equation: "Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)",
      type: "Single displacement",
      conditions: "Dilute HCl, room temperature",
      explanation: "Zinc reduces H⁺ to H₂ gas; zinc oxidizes to Zn²⁺. Classic lab gas preparation.",
      products: "Zinc chloride and hydrogen gas",
      applications: "Hydrogen generation, demonstrating acid–metal reactivity",
      relatedConcepts: ["Activity series", "Redox", "Gas stoichiometry"],
    },
    {
      equation: "CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–carbonate",
      conditions: "Room temperature, aqueous",
      explanation: "Carbonates react with acid to release CO₂ — effervescence indicates carbonate or bicarbonate.",
      products: "Calcium chloride, water, carbon dioxide",
      applications: "CO₂ preparation, carbonate identification, antacid chemistry (CaCO₃ neutralizes HCl)",
      relatedConcepts: ["Gas evolution", "Antacids", "Qualitative analysis"],
    },
    {
      equation: "MnO₂(s) + 4 HCl(conc) → MnCl₂(aq) + Cl₂(g) + 2 H₂O(l)",
      type: "Redox",
      conditions: "Concentrated HCl, heat",
      explanation: "Manganese(IV) oxide oxidizes chloride to chlorine gas; HCl acts as reductant.",
      products: "Manganese(II) chloride, chlorine, water",
      applications: "Chlorine preparation in laboratory",
      relatedConcepts: ["Redox", "Oxidizing agents", "Halogen chemistry"],
    },
  ],

  relatedFormulas: ["NaCl", "NaOH", "H2SO4", "HNO3", "Cl2"],
  comparisonNote: "HCl (36.46 g/mol) is monoprotic and non-oxidizing; H₂SO₄ (98.08 g/mol) is diprotic and dehydrating; HNO₃ (63.01 g/mol) is monoprotic but oxidizing.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of HCl.",
      answer: "1.008 + 35.45 = 36.46 g/mol",
    },
    {
      question: "What volume of H₂ at STP from 73 g HCl reacting with excess Zn?",
      answer: "73 g ÷ 36.46 g/mol = 2.0 mol HCl; produces 1.0 mol H₂ = 22.4 L",
      hint: "2 HCl → 1 H₂ from the balanced equation with Zn.",
    },
    {
      question: "Why doesn't copper react with dilute HCl?",
      answer: "Copper is below hydrogen in the activity series; HCl is not a strong enough oxidant to oxidize Cu to Cu²⁺.",
    },
    {
      question: "How many mL of 12 M HCl needed for 0.50 mol HCl?",
      answer: "0.50 mol ÷ 12 mol/L = 0.042 L = 42 mL",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of hydrochloric acid?",
      answer: "36.46 g/mol for the HCl formula unit.",
    },
    {
      question: "Is HCl a strong acid?",
      answer: "Yes — it dissociates completely in dilute aqueous solution.",
    },
    {
      question: "What is muriatic acid?",
      answer: "Impure hydrochloric acid, typically 31–32% HCl, sold for cleaning and pool maintenance.",
    },
    {
      question: "What is aqua regia?",
      answer: "3:1 mixture of concentrated HCl and HNO₃ that dissolves gold via complexation.",
    },
    {
      question: "How is HCl related to stomach acid?",
      answer: "Parietal cells secrete HCl into gastric lumen, creating pH 1–2 for digestion and sterilization.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "HCl thermophysical data" },
    { label: "PubChem CID 313", note: "Hydrogen chloride properties" },
    { label: "IUPAC", note: "Acid nomenclature and strength" },
  ],
};
