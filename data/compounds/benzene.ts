import type { CompoundProfile } from "@/lib/chemistry/types";

export const benzene: CompoundProfile = {
  slug: "molar-mass-of-benzene",
  formula: "C6H6",
  name: "Benzene",
  iupacName: "Benzene",
  commonNames: ["Benzene", "Benzol"],
  aliases: ["C₆H₆", "PhH (phenyl notation)"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "organic"],
  casNumber: "71-43-2",
  pubchemCid: "241",
  smiles: "c1ccccc1",
  inchi: "InChI=1S/C6H6/c1-2-4-6-5-3-1/h1-6H",
  exactMass: 78.046950192,
  featured: false,
  popular: true,

  overview: `Benzene (C₆H₆) is the archetypal aromatic hydrocarbon with molar mass 78.11 g/mol (6 × 12.01 + 6 × 1.008). Its planar hexagonal ring of sp²-hybridized carbons delocalizes six π electrons over six p orbitals, satisfying Hückel's 4n+2 rule (n=1) for aromatic stability. Resonance energy ~150 kJ/mol explains why benzene resists addition reactions that would destroy aromaticity, preferring substitution instead.

Benzene was first isolated from coal gas by Michael Faraday (1825). Its structure puzzled chemists until Kekulé proposed the ring (1865) and later the oscillating double-bond model. Modern molecular orbital theory describes fully delocalized π bonding. Benzene is a known human carcinogen (IARC Group 1) linked to leukemia from occupational exposure, yet remains indispensable for producing styrene, phenol, cumene (acetone + phenol), and nylon intermediates.`,

  formulaExplanation: `C₆H₆ shows equal numbers of carbon and hydrogen atoms — unusual among hydrocarbons and reflecting the ring structure where each carbon contributes one H. The empirical formula equals the molecular formula. Degree of unsaturation: (2×6+2−6)/2 = 4 (three double bonds equivalent or one ring + three double bonds).`,

  chemicalProfile: `Benzene undergoes electrophilic aromatic substitution (EAS): nitration (HNO₃/H₂SO₄), sulfonation (H₂SO₄), halogenation (FeCl₃ catalyst), Friedel–Crafts alkylation and acylation. It resists KMnO₄ oxidation and Br₂ addition under normal conditions. Burns with sooty flame: 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O.`,

  uniqueTopics: [
    {
      heading: "Aromaticity and Hückel's Rule",
      body: "Benzene's exceptional stability comes from complete delocalization of six π electrons around a planar, cyclic, conjugated ring, satisfying Hückel's 4n+2 rule (n = 1). This resonance stabilization (~150 kJ/mol) is why benzene resists the addition reactions typical of alkenes, instead undergoing substitution reactions that preserve the aromatic system — a foundational concept distinguishing aromatic from purely unsaturated hydrocarbons.",
    },
    {
      heading: "The Kekulé Structure and Its Limitations",
      body: "August Kekulé's 1865 proposal of alternating single and double bonds in a hexagonal ring was a landmark advance, but it inaccurately implies two distinct bond lengths; X-ray studies later confirmed benzene has six identical C–C bonds (1.39 Å), intermediate between single and double bond lengths, reflecting true electron delocalization rather than rapidly oscillating discrete double bonds as Kekulé's dynamic model suggested.",
    },
    {
      heading: "Benzene as a Confirmed Human Carcinogen",
      body: "Chronic occupational exposure to benzene is causally linked to acute myeloid leukemia and other blood disorders, leading IARC to classify it as a Group 1 carcinogen with no established safe exposure threshold; this has driven its removal from consumer products (perfumes, common solvents) and strict occupational exposure limits in industries where it cannot be entirely eliminated.",
    },
    {
      heading: "Benzene as a Petrochemical Feedstock",
      body: "Despite its toxicity, benzene remains one of the most important industrial feedstocks, converted at massive scale into styrene (polystyrene, ABS plastics), phenol and acetone (via the cumene process), cyclohexane (nylon precursor), and aniline (dyes, polyurethanes) — meaning benzene's molecular fingerprint persists throughout much of the modern plastics and materials economy even though the free compound itself is tightly controlled.",
    },
  ],

  applications: {
    industrial: [
      "Styrene production (for polystyrene and ABS plastics)",
      "Cumene process for phenol and acetone",
      "Cyclohexane production (nylon 6,6 precursor via adipic acid)",
      "Aniline production (dyes, polyurethane)",
    ],
    laboratory: [
      "Solvent for organic reactions (being phased out due to toxicity)",
      "Starting material for organic synthesis teaching",
      "NMR spectroscopy standard (δ 7.26 ppm in CDCl₃ residual)",
    ],
    environmental: "Former gasoline additive (removed due to toxicity); groundwater contaminant at industrial sites; VOC emission regulated.",
  },

  preparation: `Industrial: catalytic reforming of petroleum naphtha (C₆-C₈ alkanes → benzene + H₂). Coal tar distillation (historical). Laboratory: decarboxylation of sodium benzoate with soda lime (small scale).`,

  production: `Global benzene production exceeds 50 million tonnes annually, almost entirely from petroleum processing.`,

  storage: `Store in flammable materials cabinet, away from ignition sources. Sealed containers in ventilated area. Never use benzene as general lab solvent in teaching settings.`,

  handling: `Carcinogen — avoid all exposure. Use toluene or other safer solvents when possible. If unavoidable, use fume hood, nitrile gloves, and no skin contact. No eating or drinking in lab.`,

  safety: {
    summary: "Known human carcinogen (leukemia); flammable; causes skin irritation and CNS depression at high inhalation levels.",
    hazards: [
      "Carcinogenic (IARC Group 1)",
      "Flammable (flash point −11 °C)",
      "CNS depressant — dizziness, unconsciousness at high vapor levels",
      "Skin absorption and defatting dermatitis",
    ],
    classification: "GHS: Carc. 1A, Flam. Liq. 2, STOT RE 1",
  },

  interestingFacts: [
    "Kekulé claimed the ring structure came to him in a dream of a snake biting its tail (1865).",
    "Benzene molar mass 78.11 g/mol — carbon content 92.3%, explaining sooty combustion.",
    "All six C–C bonds in benzene are equal length (1.39 Å), between single (1.54 Å) and double (1.34 Å).",
    "Benzene was once used as aftershave and dry cleaning solvent before toxicity was recognized.",
  ],

  history: `Faraday isolated benzene from illuminating gas (1825). Mitscherlich determined formula C₆H₆ (1834). Kekulé proposed ring structure (1865). Robinson and Hückel developed aromaticity theory (1920s–1930s). Occupational cancer link established mid-20th century.`,

  discovery: "Michael Faraday, 1825 — isolated 'bicarburet of hydrogen' from compressed oil gas residue.",

  examNotes: [
    "Molar mass C₆H₆ = 6(12.01) + 6(1.008) = 78.11 g/mol.",
    "Aromaticity: planar, cyclic, conjugated, 4n+2 π electrons (n=1, so 6 π e⁻).",
    "EAS not addition — substitution preserves aromaticity (e.g., C₆H₆ + NO₂⁺ → C₆H₅NO₂ + H⁺).",
    "Combustion: 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O.",
  ],

  commonMistakes: [
    "Drawing alternating single/double bonds as fixed Kekulé structure instead of delocalized.",
    "Predicting addition reactions like alkenes — benzene prefers substitution.",
    "Confusing benzene with cyclohexane (C₆H₁₂, M = 84.16, saturated, not aromatic).",
  ],

  studentTips: [
    "Use circle in ring to indicate delocalization in exam diagrams.",
    "Compare C₆H₆ (78.11) with C₆H₁₂ cyclohexane (84.16) — 6 fewer H means 3 double-bond equivalents.",
    "Link to Hückel rule: 4n+2 with n=1 → 6 π electrons.",
  ],

  misconceptions: [
    "Kekulé structures with fixed double bonds are accurate — real benzene has equal bond lengths.",
    "All ring compounds are aromatic — cyclobutadiene (4 π e⁻) is antiaromatic and highly reactive.",
    "Benzene is safe at low exposure — it is a confirmed carcinogen with no established safe threshold.",
  ],

  physical: {
    appearance: "Colorless liquid",
    color: "Colorless",
    odor: "Sweet, aromatic (not to be confused with safety — toxic)",
    stateAtSTP: "Liquid (melting point 5.5 °C, boiling point 80.1 °C)",
    density: "0.8765 g/cm³ at 20 °C",
    meltingPoint: "5.55 °C",
    boilingPoint: "80.1 °C",
    flashPoint: "−11 °C",
    solubility: "1.79 g/L water at 25 °C (slightly soluble); miscible with organic solvents",
    crystalStructure: "Orthorhombic (solid below 5.5 °C)",
  },

  chemical: {
    classification: "Aromatic hydrocarbon",
    polarity: "Non-polar",
    molecularGeometry: "Planar hexagonal ring",
    bondAngle: "120° (sp² trigonal planar at each carbon)",
    oxidationStates: "C: average 0 in ring (formally mixed)",
    chemicalFamily: "Arenes / aromatic hydrocarbons",
  },

  reactions: [
    {
      equation: "C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O",
      type: "Electrophilic aromatic substitution (nitration)",
      conditions: "Mixed acid (HNO₃ + H₂SO₄), 50–60 °C",
      explanation: "NO₂⁺ electrophile substitutes one H on ring; aromaticity preserved. Nitrobenzene is TNT precursor.",
      products: "Nitrobenzene and water",
      applications: "Explosives, dyes, polyurethane intermediates",
      relatedConcepts: ["EAS", "Electrophiles", "Aromaticity"],
    },
    {
      equation: "C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl",
      type: "Friedel–Crafts alkylation",
      conditions: "AlCl₃ catalyst, heat",
      explanation: "CH₃⁺ electrophile (from CH₃Cl + AlCl₃) substitutes H, forming toluene (methylbenzene).",
      products: "Toluene and hydrogen chloride",
      applications: "Toluene production, alkylbenzene synthesis",
      relatedConcepts: ["Friedel–Crafts", "Carbocations", "Catalysts"],
    },
    {
      equation: "2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O",
      type: "Combustion",
      conditions: "Ignition, excess oxygen",
      explanation: "Incomplete ventilation produces sooty flame due to high C:H ratio and aromatic stability releasing carbon clusters.",
      products: "Carbon dioxide and water",
      applications: "Energy content measurement, calorimetry",
      relatedConcepts: ["Combustion", "Stoichiometry", "Thermochemistry"],
    },
    {
      equation: "C₆H₆ + 3 H₂ → C₆H₁₂",
      type: "Catalytic hydrogenation",
      conditions: "Ni or Pt catalyst, 150–200 °C, high pressure",
      explanation: "Hydrogen adds across π system, destroying aromaticity to form cyclohexane — requires harsh conditions due to aromatic stability.",
      products: "Cyclohexane",
      applications: "Cyclohexane production for nylon industry",
      relatedConcepts: ["Hydrogenation", "Aromatic stability", "Catalysis"],
    },
  ],

  relatedFormulas: ["C6H5CH3", "C6H5OH", "C6H12", "C6H5NO2", "C2H6"],
  comparisonNote: "Benzene (C₆H₆, 78.11 g/mol) is aromatic and substitution-reactive; cyclohexane (C₆H₁₂, 84.16 g/mol) is saturated and undergoes typical alkane reactions.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of benzene (C₆H₆).",
      answer: "6(12.01) + 6(1.008) = 78.11 g/mol",
    },
    {
      question: "How many moles of O₂ for complete combustion of 78.1 g benzene?",
      answer: "78.1 g = 1 mol C₆H₆; needs 15/2 = 7.5 mol O₂",
      hint: "Balance: 2 C₆H₆ + 15 O₂ → 12 CO₂ + 6 H₂O.",
    },
    {
      question: "Why does benzene undergo substitution rather than addition?",
      answer: "Addition would destroy aromaticity (lose 150 kJ/mol resonance energy); substitution preserves the aromatic ring.",
    },
    {
      question: "Verify benzene satisfies Hückel's rule.",
      answer: "6 π electrons; 4n+2 with n=1 gives 6 — satisfies aromaticity criterion.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of benzene?",
      answer: "78.11 g/mol.",
    },
    {
      question: "What makes benzene aromatic?",
      answer: "Planar cyclic conjugated system with 6 delocalized π electrons (4n+2, n=1).",
    },
    {
      question: "Is benzene still used in laboratories?",
      answer: "Largely replaced by toluene and other solvents due to carcinogenicity; limited specialized use with strict controls.",
    },
    {
      question: "What is the difference between benzene and toluene?",
      answer: "Toluene (C₇H₈, 92.14 g/mol) is methylbenzene — one H replaced by CH₃; still aromatic.",
    },
    {
      question: "Why does benzene burn with a sooty flame?",
      answer: "High carbon content (92.3%) and aromatic stability favor incomplete combustion producing carbon particles (soot).",
    },
  ],

  references: [
    { label: "IARC Monographs", note: "Benzene carcinogenicity classification" },
    { label: "PubChem CID 241", note: "Benzene structure and properties" },
    { label: "Clayden Organic Chemistry", note: "Aromaticity and EAS mechanisms" },
  ],
};
