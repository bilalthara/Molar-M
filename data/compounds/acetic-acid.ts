import type { CompoundProfile } from "@/lib/chemistry/types";

export const aceticAcid: CompoundProfile = {
  slug: "molar-mass-of-acetic-acid",
  formula: "C2H4O2",
  name: "Acetic Acid",
  iupacName: "Ethanoic acid",
  commonNames: ["Acetic acid", "Vinegar (dilute solution)", "Glacial acetic acid (≥99.5%)"],
  aliases: ["CH₃COOH", "CH₃CO₂H", "Ethanoic acid"],
  category: "organic",
  categories: ["organic", "acid"],
  casNumber: "64-19-7",
  pubchemCid: "176",
  smiles: "CC(=O)O",
  inchi: "InChI=1S/C2H4O2/c1-2(3)4/h1H3,(H,3,4)",
  exactMass: 60.021129371,
  featured: true,
  popular: true,

  overview: `Acetic acid (CH₃COOH) is the simplest carboxylic acid with molar mass 60.05 g/mol, consisting of a methyl group bonded to a carboxyl group (–COOH). The carboxyl proton is weakly acidic (pKa = 4.76), partially dissociating in water: CH₃COOH ⇌ CH₃COO⁻ + H⁺. Household vinegar is ~5% acetic acid by mass; glacial acetic acid refers to the anhydrous form that freezes at 16.6 °C into ice-like crystals.

Acetic acid is produced industrially via methanol carbonylation: CH₃OH + CO → CH₃COOH (rhodium or iridium catalyst, Monsanto/Cativa process). Global demand exceeds 15 million tonnes annually, primarily for vinyl acetate monomer (PVA, adhesives), purified terephthalic acid (PET bottles), and cellulose acetate. Dilute acetic acid from fermentation (2C₂H₅OH + O₂ → 2 CH₃COOH + 2 H₂O, Acetobacter) gives vinegar its sour taste and preservative action.`,

  formulaExplanation: `C₂H₄O₂ can be written CH₃COOH to highlight the carboxyl functional group. The formula shows two carbons, four hydrogens, and two oxygens — one in the carbonyl (C=O) and one in the hydroxyl (O–H). The carboxyl carbon is sp² hybridized; the acidic proton is on the hydroxyl oxygen, not the methyl hydrogens.`,

  chemicalProfile: `Acetic acid is a weak Brønsted acid. It reacts with bases to form acetate salts, with alcohols to form esters (Fischer esterification), and with metals (Mg, Zn) to release H₂. It does not oxidize as readily as nitric acid. Concentrated acetic acid is corrosive and has a pungent vapor; it forms dimer hydrogen-bonded pairs in the gas phase and non-polar solvents.`,

  uniqueTopics: [
    {
      heading: "Vinegar fermentation vs. glacial acetic acid",
      body: "Household vinegar is a dilute (roughly 4–8%) aqueous solution of acetic acid produced by Acetobacter bacteria oxidizing ethanol in a two-step fermentation (sugar to ethanol, then ethanol to acetic acid), while 'glacial' acetic acid refers to the concentrated, nearly anhydrous form (≥99.5%) that freezes into ice-like crystals at 16.6 °C — the same chemical compound at drastically different concentrations, with correspondingly different handling hazards and uses.",
    },
    {
      heading: "Acetic acid vs. formic acid: carboxylic acid strength trend",
      body: "Acetic acid (pKa 4.76) is a noticeably weaker acid than its simpler homolog formic acid (pKa 3.77), because acetic acid's methyl group donates electron density toward the carboxylate through the inductive effect, destabilizing the negative charge on the conjugate base relative to formate's unsubstituted structure — a clear, memorable illustration of how alkyl substitution affects carboxylic acid strength.",
    },
    {
      heading: "The carboxyl group: structure and reactivity hub",
      body: "Acetic acid's reactivity centers entirely on its carboxyl group (–COOH), which combines a resonance-stabilized, partially acidic hydroxyl proton with an electrophilic carbonyl carbon; this dual character allows the same functional group to act as a Brønsted acid toward bases, a nucleophile-accepting electrophile toward alcohols in esterification, and a hydrogen-bond donor/acceptor responsible for its characteristic gas-phase dimerization.",
    },
    {
      heading: "Historical and industrial fermentation-to-synthesis shift",
      body: "For most of human history, acetic acid was obtained exclusively through fermentation or wood distillation (pyroligneous acid); the 20th-century shift to methanol carbonylation (the Monsanto and later Cativa processes) transformed acetic acid from a fermentation-derived commodity into a large-scale petrochemical product, even as fermentation remains essential for food-grade vinegar production specifically.",
    },
  ],

  applications: {
    industrial: [
      "Vinyl acetate monomer production (PVA, emulsions, adhesives)",
      "Purified terephthalic acid (PTA) for PET polyester",
      "Cellulose acetate fibers and films",
      "Acetic anhydride precursor (aspirin, heroin synthesis historically)",
    ],
    laboratory: [
      "Weak acid standard for buffer preparation (acetic acid/sodium acetate)",
      "Solvent for recrystallization and organic synthesis",
      "Esterification reactions (Fischer esterification)",
    ],
    biological: "Vinegar preservation inhibits bacterial growth via pH reduction; acetic acid is a normal fatty acid metabolism intermediate (acetyl-CoA).",
  },

  preparation: `Industrial: methanol carbonylation. Laboratory: oxidize ethanol with potassium dichromate or distil vinegar. Glacial acetic acid from acetic anhydride hydrolysis or fractional crystallization of dilute acid.`,

  production: `Methanol carbonylation dominates (>90% of new capacity). Fermentation accounts for food-grade vinegar.`,

  storage: `Glacial acetic acid in corrosion-resistant containers with tight seals (hygroscopic). Dilute vinegar stable indefinitely. Keep away from bases and oxidizers.`,

  handling: `Glacial acetic acid causes severe burns and eye damage. Use fume hood and acid-resistant gloves. Vinegar (5%) is mild but avoid eye contact.`,

  safety: {
    summary: "Glacial acetic acid is corrosive and flammable at elevated temperatures; vapors irritate respiratory tract.",
    hazards: [
      "Corrosive burns (glacial form)",
      "Flammable at high concentrations and temperatures (flash point 39 °C glacial)",
      "Respiratory and eye irritation from vapors",
    ],
    classification: "GHS: Flam. Liq. 3, Skin Corr. 1A (glacial)",
  },

  interestingFacts: [
    "Acetic acid molar mass 60.05 g/mol — close to 60 for quick mental math.",
    "The name 'glacial' refers to the ice-like appearance when pure acetic acid freezes at 16.6 °C.",
    "Acetic acid dimer (two molecules H-bonded) has doubled effective molar mass in vapor phase measurements.",
    "Vinegar has been used medicinally and as preservative for over 10,000 years.",
  ],

  history: `Traces of acetic acid found in Egyptian urns (~3000 BCE). Pasteur proved acetic acid fermentation is biological (1864). Industrial synthesis replaced wood distillation (pyroligneous acid) in the early 20th century; Monsanto process (1966) revolutionized production economics.`,

  discovery: "Known since antiquity in vinegar; Louis Pasteur elucidated bacterial fermentation pathway in 1864.",

  examNotes: [
    "Molar mass CH₃COOH = 2(12.01) + 4(1.008) + 2(16.00) = 60.05 g/mol.",
    "Weak acid: pKa = 4.76; Ka = 1.8 × 10⁻⁵.",
    "1 mol acetic acid neutralized by 1 mol NaOH (monoprotic carboxylic acid).",
    "Functional group: carboxyl –COOH; gives –COO⁻ conjugate base.",
  ],

  commonMistakes: [
    "Treating acetic acid as strong acid — it is weak (partial dissociation).",
    "Confusing with ethanoic acid naming (same compound, IUPAC vs. common).",
    "Using C₂H₄O₂ without clarifying isomer (could theoretically be methyl formate).",
  ],

  studentTips: [
    "Write CH₃COOH to identify carboxylic acid in isomer problems.",
    "Buffer: pH = pKa + log([A⁻]/[HA]) with acetate/acetic acid system.",
    "Link to acetyl-CoA in biochemistry (2-carbon unit, 60 g/mol fragment).",
  ],

  misconceptions: [
    "Vinegar is not 'mostly acid' — 5% acetic acid means 95% water.",
    "Glacial acetic acid is not a solid at room temperature — it is liquid above 16.6 °C.",
    "All acids are not strong — acetic acid is weak despite corrosive concentrated form.",
  ],

  physical: {
    appearance: "Colorless liquid (glacial); clear vinegar when dilute",
    color: "Colorless",
    odor: "Pungent, vinegar-like",
    stateAtSTP: "Liquid",
    density: "1.049 g/cm³ (glacial, 25 °C); ~1.01 g/cm³ (5% vinegar)",
    meltingPoint: "16.6 °C (glacial — 'glacial' threshold)",
    boilingPoint: "118.1 °C",
    flashPoint: "39 °C (glacial)",
    solubility: "Miscible with water, ethanol, ether; soluble in most organic solvents",
    crystalStructure: "Monoclinic (solid below 16.6 °C)",
  },

  chemical: {
    classification: "Carboxylic acid / weak organic acid",
    acidity: "Weak acid (pKa = 4.76)",
    polarity: "Polar (carboxyl group, hydrogen bonding)",
    molecularGeometry: "Trigonal planar at carboxyl carbon",
    oxidationStates: "C: −3 (methyl), +3 (carboxyl carbon)",
    chemicalFamily: "Carboxylic acids (two-carbon)",
  },

  reactions: [
    {
      equation: "CH₃COOH + NaOH → CH₃COONa + H₂O",
      type: "Acid–base neutralization",
      conditions: "Aqueous, equimolar",
      explanation: "Weak acid–strong base neutralization forming sodium acetate; titration curve lacks sharp initial rise of strong acid.",
      products: "Sodium acetate and water",
      applications: "Buffer preparation, titration experiments",
      relatedConcepts: ["Weak acids", "Neutralization", "Salt hydrolysis"],
    },
    {
      equation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
      type: "Fischer esterification",
      conditions: "Acid catalyst (H₂SO₄), heat, reflux",
      explanation: "Carboxylic acid condenses with alcohol to form ester and water; equilibrium driven by excess reagent or water removal.",
      products: "Ethyl acetate and water",
      applications: "Ester synthesis, solvent production",
      relatedConcepts: ["Esterification", "Equilibrium", "Organic synthesis"],
    },
    {
      equation: "2 CH₃COOH → (CH₃CO)₂O + H₂O",
      type: "Dehydration (anhydride formation)",
      conditions: "P₂O₅ or heat with acetyl chloride",
      explanation: "Two acetic acid molecules lose water to form acetic anhydride, a reactive acetylating agent.",
      products: "Acetic anhydride and water",
      applications: "Acetic anhydride production for aspirin synthesis",
      relatedConcepts: ["Anhydrides", "Condensation reactions"],
    },
    {
      equation: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂",
      type: "Acid–carbonate",
      conditions: "Aqueous, room temperature",
      explanation: "Weak acid reacts with bicarbonate to release CO₂ — fizzing test distinguishes carboxylic acids from phenols.",
      products: "Sodium acetate, water, carbon dioxide",
      applications: "Baking soda–vinegar reactions, qualitative carboxylic acid test",
      relatedConcepts: ["Gas evolution", "Weak acid strength", "Qualitative analysis"],
    },
  ],

  relatedFormulas: ["C2H5OH", "CH3COONa", "HCl", "C6H12O6", "CH3OH"],
  comparisonNote: "Acetic acid (60.05 g/mol, pKa 4.76) is weaker than formic acid (46.03 g/mol, pKa 3.77) due to methyl group's electron-donating inductive effect stabilizing the acid form.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of acetic acid (CH₃COOH).",
      answer: "2(12.01) + 4(1.008) + 2(16.00) = 60.05 g/mol",
    },
    {
      question: "What is the pH of 0.10 M acetic acid? (Ka = 1.8 × 10⁻⁵)",
      answer: "Ka = x²/0.10; x = [H⁺] ≈ 1.34 × 10⁻³ M; pH ≈ 2.87",
      hint: "Use weak acid approximation: x = √(Ka × C).",
    },
    {
      question: "How many grams of NaOH to neutralize 120 g acetic acid?",
      answer: "120 g ÷ 60.05 g/mol = 2.0 mol; need 2.0 mol NaOH = 80 g",
    },
    {
      question: "Why is acetic acid called a weak acid?",
      answer: "Only ~1% dissociates in 0.1 M solution; equilibrium favors undissociated CH₃COOH.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of acetic acid?",
      answer: "60.05 g/mol.",
    },
    {
      question: "What is glacial acetic acid?",
      answer: "Acetic acid of ≥99.5% purity that freezes at 16.6 °C, forming glacial-like crystals.",
    },
    {
      question: "Is vinegar pure acetic acid?",
      answer: "No — table vinegar is typically 4–8% acetic acid in water.",
    },
    {
      question: "Is acetic acid organic or inorganic?",
      answer: "Organic — it contains carbon in a carboxyl functional group.",
    },
    {
      question: "What is the conjugate base of acetic acid?",
      answer: "Acetate ion, CH₃COO⁻.",
    },
  ],

  references: [
    { label: "PubChem CID 176", note: "Acetic acid data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "IUPAC", note: "Carboxylic acid nomenclature" },
  ],
};
