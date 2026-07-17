import type { CompoundProfile } from "@/lib/chemistry/types";

export const phosphoricAcid: CompoundProfile = {
  slug: "molar-mass-of-phosphoric-acid",
  formula: "H3PO4",
  name: "Phosphoric Acid",
  iupacName: "Phosphoric acid",
  commonNames: ["Phosphoric acid", "Orthophosphoric acid", "E338 (food grade)"],
  aliases: ["H₃PO₄", "o-Phosphoric acid"],
  category: "acid",
  categories: ["acid", "inorganic"],
  casNumber: "7664-38-2",
  pubchemCid: "1004",
  smiles: "OP(=O)(O)O",
  inchi: "InChI=1S/H3PO4/c1-4(2,3)5/h(H3,1,2,3,5)",
  exactMass: 97.976898032,
  featured: true,
  popular: true,

  overview: `Phosphoric acid (H₃PO₄) is a triprotic acid with molar mass 98.00 g/mol (H 3.024 + P 30.97 + O 64.00), the most important oxoacid of phosphorus. Unlike sulfuric and nitric acids, H₃PO₄ is a weak acid with three dissociation steps: pKa₁ = 2.15, pKa₂ = 7.20, pKa₃ = 12.35. At physiological pH, phosphate exists mainly as HPO₄²⁻ and H₂PO₄⁻ — the buffer pair in blood and intracellular fluids.

Food-grade H₃PO₄ gives cola drinks their tangy flavor and acidity (pH ~2.5 in soft drinks). Industrially, H₃PO₄ is produced from phosphate rock (fluoroapatite, Ca₅(PO₄)₃F) treated with sulfuric acid: Ca₅(PO₄)₃F + 5 H₂SO₄ + 10 H₂O → 3 H₃PO₄ + 5 CaSO₄·2H₂O + HF. Global fertilizer industry depends on this wet-process phosphoric acid.`,

  formulaExplanation: `H₃PO₄ contains phosphorus in +5 oxidation state with tetrahedral PO₄ geometry. Three hydroxyl groups bear acidic protons; the P=O bond is the fourth oxygen. Successive deprotonations yield H₂PO₄⁻, HPO₄²⁻, and PO₄³⁻. The formula indicates three replaceable hydrogens, though only the first two are relevant near neutral pH.`,

  chemicalProfile: `H₃PO₄ is weakly acidic and non-oxidizing — it does not char organic matter like H₂SO₄. It forms phosphate salts with metals (Na₃PO₄, Ca₃(PO₄)₂), complexes with metal ions, and condenses to pyrophosphoric (H₄P₂O₇) and metaphosphoric acids when heated. With alcohols it forms phosphate esters (ATP biologically).`,

  uniqueTopics: [
    {
      heading: "The tangy acidulant behind cola and soft drinks",
      body: "Food-grade phosphoric acid gives cola beverages their characteristic sharp, tangy edge and helps balance the sweetness of high fructose corn syrup, typically bringing soft drink pH down to around 2.5. Because H₃PO₄ is only weakly dissociated, a relatively small amount produces this acidity without dominating the overall flavor profile the way a stronger, fully dissociated acid would.",
    },
    {
      heading: "Rust removal and metal surface treatment chemistry",
      body: "Phosphoric acid dissolves iron oxide (rust) by converting it to soluble iron phosphate species, while simultaneously depositing a thin, adherent iron phosphate layer on the underlying clean metal surface that resists future corrosion — the basis of both consumer rust-removal products and industrial phosphating/parkerizing metal pretreatment processes used before painting or coating steel parts.",
    },
    {
      heading: "Weak triprotic acid: a distinctive titration profile",
      body: "Unlike strong monoprotic or diprotic acids, phosphoric acid's three widely separated pKa values (2.15, 7.20, 12.35) produce a titration curve with three distinct buffering regions and equivalence points, making H₃PO₄ a favorite teaching example for illustrating how polyprotic weak acids behave very differently from strong acids like HCl or H₂SO₄ during stepwise neutralization.",
    },
    {
      heading: "Triple superphosphate and the fertilizer connection",
      body: "Concentrated phosphoric acid reacts with phosphate rock to produce triple superphosphate, a highly concentrated, water-soluble phosphate fertilizer that supplies far more available phosphorus per unit mass than the ordinary superphosphate made with sulfuric acid alone — a key link between phosphoric acid's industrial-scale production and global agricultural productivity.",
    },
  ],

  applications: {
    industrial: [
      "Triple superphosphate and ammonium phosphate fertilizer production",
      "Rust removal and metal surface treatment",
      "Food acidulant in cola, jams, and processed cheese (E338)",
      "Detergent builder (sodium tripolyphosphate, being phased out)",
    ],
    laboratory: [
      "Buffer preparation (phosphate buffer, pH 6–8 range)",
      "Weak acid titration experiments (triprotic, multiple equivalence points)",
      "Electrolyte in some electrochemical cells",
    ],
    biological: "Phosphate backbone of DNA and RNA; ATP (adenosine triphosphate) energy currency; bone hydroxyapatite Ca₅(PO₄)₃OH.",
  },

  preparation: `Wet process: sulfuric acid on phosphate rock (industrial). Thermal process: P₄ + 5 O₂ → P₄O₁₀; P₄O₁₀ + 6 H₂O → 4 H₃PO₄ (purer, food grade). Laboratory: PCl₅ + 4 H₂O → H₃PO₄ + 5 HCl.`,

  production: `Global phosphoric acid production exceeds 45 million tonnes annually, overwhelmingly for fertilizer from wet process.`,

  storage: `Store in corrosion-resistant containers (HDPE, rubber-lined steel). Concentrated acid is viscous and hygroscopic. Food grade separate from industrial grade.`,

  handling: `Corrosive to eyes and skin. Use splash goggles and gloves. Food-grade handling follows food safety protocols; industrial grade requires chemical PPE.`,

  safety: {
    summary: "Corrosive acid; eye damage risk. Food-grade at beverage concentrations is safe; concentrated form causes burns.",
    hazards: [
      "Eye corrosion",
      "Skin irritation and burns (concentrated)",
      "Inhalation of mist irritates respiratory tract",
    ],
    classification: "GHS: Skin Corr. 1B (concentrated), Eye Dam. 1",
  },

  interestingFacts: [
    "Cola pH ~2.5 comes partly from H₃PO₄ — molar mass 98 g/mol means trace mass but strong effect at low pH.",
    "Phosphate buffer (H₂PO₄⁻/HPO₄²⁻) is effective near pH 7.2, matching physiological pH.",
    "Your DNA contains roughly 3 billion phosphate groups linking nucleotides.",
    "Wet-process H₃PO₄ often contains fluoride and sulfate impurities; thermal process is purer.",
  ],

  history: `Scheele prepared phosphoric acid from bone ash (1771). Liebig recognized phosphate importance in plant nutrition (1840s), leading to fertilizer industry. Development of wet-process acid from phosphate rock (19th century) enabled modern agriculture.`,

  discovery: "Carl Wilhelm Scheele, 1771 — isolated phosphoric acid from heated bone ash (calcium phosphate) with nitric acid.",

  examNotes: [
    "Molar mass H₃PO₄ = 3(1.008) + 30.97 + 4(16.00) = 98.00 g/mol.",
    "Triprotic: pKa₁ = 2.15, pKa₂ = 7.20, pKa₃ = 12.35.",
    "At pH 7.2, [H₂PO₄⁻] ≈ [HPO₄²⁻] (pH ≈ pKa₂).",
    "P oxidation state in H₃PO₄ is +5.",
  ],

  commonMistakes: [
    "Treating H₃PO₄ as strong acid — it is weak (partial dissociation).",
    "Using all three protons in neutralization at pH 7 — only ~1.5 equivalents typically.",
    "Confusing H₃PO₄ with H₃PO₃ (phosphorous acid, P in +3, diprotic).",
  ],

  studentTips: [
    "Phosphate buffer: pH = pKa₂ + log([HPO₄²⁻]/[H₂PO₄⁻]).",
    "For fertilizer stoichiometry, trace apatite + H₂SO₄ → H₃PO₄ pathway.",
    "Link PO₄³⁻ to bone mineral and DNA backbone for biochemistry crossover.",
  ],

  misconceptions: [
    "Cola dissolves teeth instantly — acidity contributes to erosion over time, not instant dissolution.",
    "All phosphate in fertilizer is immediately available — some precipitates as insoluble salts in soil.",
    "H₃PO₄ and phosphoric acid in food labels are the same compound at food-grade purity.",
  ],

  physical: {
    appearance: "Colorless viscous liquid (concentrated) or white solid (pure, below 42 °C)",
    color: "Colorless",
    odor: "Odorless",
    stateAtSTP: "Liquid (85% solution common); pure melts at 42.4 °C",
    density: "1.885 g/cm³ (85% solution, 25 °C)",
    meltingPoint: "42.4 °C (pure, forms hemihydrate)",
    boilingPoint: "Decomposes before boiling (213 °C loses water to form pyrophosphoric acid)",
    solubility: "Miscible with water in all proportions",
    crystalStructure: "Monoclinic (solid H₃PO₄)",
  },

  chemical: {
    classification: "Weak triprotic acid / oxoacid of phosphorus",
    acidity: "Weak triprotic (pKa₁ = 2.15, pKa₂ = 7.20, pKa₃ = 12.35)",
    polarity: "Highly polar",
    molecularGeometry: "Tetrahedral about phosphorus",
    bondAngle: "~109.5°",
    oxidationStates: "P: +5, O: −2, H: +1",
    chemicalFamily: "Oxoacids of phosphorus (orthophosphoric acid)",
  },

  reactions: [
    {
      equation: "H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O",
      type: "Acid–base neutralization (complete)",
      conditions: "Excess strong base, high pH",
      explanation: "All three protons neutralized forming tribasic sodium phosphate; at lower pH, NaH₂PO₄ or Na₂HPO₄ forms.",
      products: "Trisodium phosphate and water",
      applications: "Phosphate salt production, water softening (historical detergents)",
      relatedConcepts: ["Triprotic acids", "Multiple equivalence points", "Salt types"],
    },
    {
      equation: "Ca₅(PO₄)₃F + 5 H₂SO₄ + 10 H₂O → 3 H₃PO₄ + 5 CaSO₄·2H₂O + HF",
      type: "Wet-process acid production",
      conditions: "Industrial, phosphate rock digestion",
      explanation: "Sulfuric acid liberates phosphoric acid from mineral apatite, producing gypsum byproduct.",
      products: "Phosphoric acid, gypsum, hydrogen fluoride",
      applications: "Industrial fertilizer acid production",
      relatedConcepts: ["Industrial chemistry", "Mineral processing"],
    },
    {
      equation: "H₃PO₄ ⇌ H₂PO₄⁻ + H⁺",
      type: "First dissociation",
      conditions: "Aqueous, pH ~2–7",
      explanation: "First proton dissociates with pKa₁ = 2.15; dominates acid character in dilute solutions.",
      products: "Dihydrogen phosphate and hydrogen ion",
      applications: "Acidity in beverages, buffer systems",
      relatedConcepts: ["Weak acids", "Equilibrium", "pH"],
    },
    {
      equation: "H₂PO₄⁻ ⇌ HPO₄²⁻ + H⁺",
      type: "Second dissociation (buffer)",
      conditions: "pH 6–8, physiological",
      explanation: "Second dissociation pKa₂ = 7.20 — effective buffer pair H₂PO₄⁻/HPO₄²⁻ in blood and cells.",
      products: "Hydrogen phosphate and hydrogen ion",
      applications: "Biological buffering, laboratory phosphate buffers",
      relatedConcepts: ["Buffers", "Henderson–Hasselbalch", "Physiological chemistry"],
    },
  ],

  relatedFormulas: ["H3PO3", "Ca3(PO4)2", "H2SO4", "Na3PO4", "H3PO4"],
  comparisonNote: "H₃PO₄ (98.00 g/mol) is weak triprotic and non-oxidizing; H₂SO₄ (98.08 g/mol, similar molar mass) is strong diprotic and dehydrating — very different chemistry despite similar mass.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of H₃PO₄.",
      answer: "3(1.008) + 30.97 + 4(16.00) = 98.00 g/mol",
    },
    {
      question: "What is the pH of 0.10 M H₃PO₄ (first dissociation only, pKa₁ = 2.15)?",
      answer: "Ka₁ = 10^−2.15 ≈ 7.1 × 10⁻³; [H⁺] ≈ √(Ka₁ × C) ≈ 0.027 M; pH ≈ 1.57",
      hint: "Use weak acid approximation for first proton only.",
    },
    {
      question: "What phosphate species dominates at pH 7.4 (blood)?",
      answer: "Mixture of H₂PO₄⁻ and HPO₄²⁻ near 1:1 ratio since pH ≈ pKa₂ (7.20).",
    },
    {
      question: "What is phosphorus oxidation state in H₃PO₄?",
      answer: "+5",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of phosphoric acid?",
      answer: "98.00 g/mol.",
    },
    {
      question: "Is phosphoric acid in soda dangerous?",
      answer: "Food-grade H₃PO₄ at beverage concentrations is GRAS; excessive consumption contributes to dental erosion and dietary phosphate load.",
    },
    {
      question: "Is H₃PO₄ a strong or weak acid?",
      answer: "Weak triprotic acid — partial dissociation at each step.",
    },
    {
      question: "Why is phosphate important in biology?",
      answer: "Forms DNA/RNA backbone, ATP energy storage, and bone mineral (hydroxyapatite).",
    },
    {
      question: "How is phosphoric acid made from rocks?",
      answer: "Wet process: phosphate rock (apatite) treated with sulfuric acid to extract H₃PO₄.",
    },
  ],

  references: [
    { label: "USGS", note: "Phosphate rock and phosphoric acid statistics" },
    { label: "PubChem CID 1004", note: "Phosphoric acid data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
