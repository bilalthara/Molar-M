import type { CompoundProfile } from "@/lib/chemistry/types";

export const glucose: CompoundProfile = {
  slug: "molar-mass-of-glucose",
  formula: "C6H12O6",
  name: "Glucose",
  iupacName: "(2R,3R,4S,5S,6R)-6-(Hydroxymethyl)oxane-2,3,4,5-tetrol",
  commonNames: ["Glucose", "Dextrose", "Blood sugar", "Grape sugar"],
  aliases: ["D-glucose", "C₆H₁₂O₆", "α-D-glucopyranose (cyclic form)"],
  category: "organic",
  categories: ["organic"],
  casNumber: "50-99-7",
  pubchemCid: "5793",
  smiles: "C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O)O)O)O)O",
  inchi: "InChI=1S/C6H12O6/c7-1-2-3(8)4(9)5(10)6(11)12-2/h2-6,8-11H,1H2/t2-,3-,4+,5-,6+/m1/s1",
  exactMass: 180.063388,
  featured: true,
  popular: true,

  overview: `Glucose (C₆H₁₂O₆) is a monosaccharide with molar mass 180.16 g/mol, serving as the primary fuel molecule for cellular respiration in most organisms. Its open-chain form is an aldohexose: a six-carbon chain with an aldehyde at C1 and five hydroxyl groups. In aqueous solution, glucose predominantly cyclizes to a six-membered pyranose ring (glucopyranose), with α and β anomers interconverting via mutarotation through the open-chain aldehyde intermediate.

Blood glucose is tightly regulated in mammals between roughly 70–100 mg/dL (3.9–5.6 mM) in fasting humans. Insulin promotes cellular uptake and glycogen synthesis; glucagon and epinephrine raise blood glucose by stimulating glycogenolysis and gluconeogenesis. The molar mass 180.16 g/mol is essential for converting between mg/dL clinical units and SI mmol/L in medical biochemistry.`,

  formulaExplanation: `C₆H₁₂O₆ indicates six carbon, twelve hydrogen, and six oxygen atoms. The ratio 1:2:1 (C:H:O) matches the general formula for carbohydrates Cₙ(H₂O)ₙ, historically suggesting "hydrates of carbon." Each carbon except the primary alcohol carbon (C6) bears a hydroxyl group, giving rise to stereoisomerism — D-glucose is one of sixteen aldohexose stereoisomers.`,

  chemicalProfile: `Glucose is a reducing sugar: the hemiacetal at C1 can open to expose an aldehyde that reduces Cu²⁺ in Benedict's or Fehling's reagent to Cu₂O. It undergoes fermentation by yeast to ethanol and CO₂, esterification of hydroxyls, and glycosidic bond formation when condensed with another monosaccharide (e.g., maltose, lactose). With concentrated H₂SO₄ it chars; with HI and heat it can be reduced to hexane in classical degradation studies.`,

  uniqueTopics: [
    {
      heading: "Photosynthesis: The Origin of Glucose",
      body: "Plants, algae, and cyanobacteria build glucose from CO₂ and water using light energy captured by chlorophyll: 6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂. This reaction is the exact reverse of aerobic respiration and is the ultimate energy-capturing step that supplies, directly or indirectly, nearly all of the chemical energy used by life on Earth.",
    },
    {
      heading: "Cellular Respiration and ATP Yield",
      body: "Complete aerobic oxidation of one mole of glucose through glycolysis, the citric acid cycle, and oxidative phosphorylation yields roughly 30–32 mol ATP (textbooks historically cited 36–38, since revised downward with more accurate proton-leak accounting), far more energy than anaerobic glycolysis alone (2 mol ATP), which is why muscle cells switch to lactic acid fermentation only when oxygen is limited.",
    },
    {
      heading: "Blood Sugar Regulation and Diabetes",
      body: "Insulin and glucagon maintain blood glucose within a narrow range by promoting cellular uptake/glycogen storage or triggering glycogen breakdown and gluconeogenesis, respectively. In diabetes mellitus, insufficient insulin action (Type 1) or insulin resistance (Type 2) disrupts this balance, causing chronic hyperglycemia that is monitored clinically using glucose's precise molar mass (180.16 g/mol) to convert between mg/dL and mmol/L units.",
    },
    {
      heading: "Glucose vs. Sucrose in Food Chemistry",
      body: "Sucrose (table sugar, C₁₂H₂₂O₁₁, 342.30 g/mol) is a disaccharide of glucose and fructose joined by a glycosidic bond that ties up both anomeric carbons, making it a non-reducing sugar unlike free glucose. Digestive enzymes (sucrase) must hydrolyze sucrose back into glucose and fructose before the body can absorb and metabolize the individual monosaccharides.",
    },
    {
      heading: "Glycemic Index and Food Science",
      body: "Different carbohydrate-containing foods raise blood glucose at different rates depending on their starch structure, fiber content, and processing — quantified by the glycemic index (GI), with pure glucose defined as the GI = 100 reference point against which other foods are compared in nutrition science.",
    },
  ],

  applications: {
    industrial: [
      "High-fructose corn syrup production (glucose isomerized to fructose)",
      "Fermentation feedstock for bioethanol",
      "IV dextrose solutions in medical fluids",
      "Food sweetener and baking ingredient (dextrose)",
    ],
    laboratory: [
      "Cell culture media carbohydrate source",
      "Enzyme assay substrate (glucose oxidase/peroxidase kits)",
      "Demonstration of mutarotation and reducing sugar tests",
    ],
    biological: "Central metabolite in glycolysis (glucose → 2 pyruvate + 2 ATP + 2 NADH), gluconeogenesis, glycogen storage, and the pentose phosphate pathway for NADPH and ribose-5-phosphate.",
  },

  preparation: `Industrial glucose is produced by acid or enzymatic hydrolysis of starch (corn, potato, wheat). Enzymatic routes use α-amylase and glucoamylase. Laboratory samples are purchased as D-(+)-glucose monohydrate or anhydrous reagent.`,

  production: `Global dextrose production exceeds 10 million tonnes, primarily from corn starch in the United States via wet milling.`,

  storage: `Store desiccated in sealed containers; glucose is hygroscopic. Protect from microbial contamination in aqueous solutions — glucose supports bacterial growth readily.`,

  handling: `Low acute toxicity. Powder may create dust; avoid inhalation. Sterile technique for medical and cell culture applications.`,

  safety: {
    summary: "Safe food ingredient; primary concern is dietary glycemic impact in diabetes management, not acute chemical toxicity.",
    hazards: [
      "Dust inhalation irritation",
      "Microbial growth in aqueous glucose solutions",
      "Hyperglycemia from excessive IV infusion (medical context)",
    ],
    classification: "GRAS (Generally Recognized as Safe) for food use",
  },

  interestingFacts: [
    "Glucose was named from Greek gleukos (sweet wine); isolated from raisins by Marggraf (1747).",
    "Mutarotation: fresh α-glucose solution [α]D = +112°, equilibrates to +52.7° as β-anomer dominates (~64%).",
    "Brain consumes roughly 120 g glucose daily, almost entirely from blood supply.",
    "The molar mass 180.16 g/mol means 180 mg = 1 mmol, a useful clinical conversion.",
  ],

  history: `Andreas Marggraf extracted glucose from raisins in 1747. Emil Fischer determined the stereochemistry of sugars in the 1890s, earning the Nobel Prize (1902) and establishing the Fischer projection notation still used today.`,

  discovery: "Andreas Marggraf, 1747 — crystallized sweet substance from grape juice and raisins, later identified as glucose.",

  examNotes: [
    "Molar mass C₆H₁₂O₆ = 6(12.01) + 12(1.008) + 6(16.00) = 180.16 g/mol.",
    "Glucose is a reducing sugar — gives positive Benedict's test.",
    "Glycolysis: C₆H₁₂O₆ + 2 NAD⁺ + 2 ADP + 2 Pi → 2 pyruvate + 2 NADH + 2 ATP + 2 H₂O (net).",
    "Distinguish glucose from sucrose (non-reducing disaccharide, M = 342.30 g/mol).",
  ],

  commonMistakes: [
    "Confusing glucose (monosaccharide) with table sugar sucrose (disaccharide).",
    "Forgetting that cyclic glucose has a hemiacetal, not a full acetal — hence reducing character.",
    "Using wrong molar mass when converting mg/dL to mmol/L in clinical problems.",
  ],

  studentTips: [
    "Draw Haworth projection of β-D-glucopyranose — most stable chair conformation has all large groups equatorial.",
    "Remember 180 g/mol ≈ 180 mg/mmol for quick blood glucose unit conversions.",
    "Link reducing sugar tests to the open-chain aldehyde form.",
  ],

  misconceptions: [
    "Glucose and fructose are not identical — fructose is a ketohexose (C₆H₁₂O₆, same molar mass, different structure).",
    "All sugars are not reducing sugars; sucrose lacks a free anomeric OH.",
    "Blood glucose is not the same as dietary glucose absorption rate — starch must be hydrolyzed first.",
  ],

  physical: {
    appearance: "White crystalline powder or odorless crystals",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.54 g/cm³",
    meltingPoint: "146 °C (α-D-glucose, decomposes)",
    boilingPoint: "Decomposes before boiling",
    solubility: "909 g/L water at 25 °C (very soluble)",
    crystalStructure: "Monoclinic (α-D-glucose monohydrate)",
  },

  chemical: {
    classification: "Monosaccharide / aldohexose / reducing sugar",
    polarity: "Highly polar (multiple OH groups, hydrogen bonding)",
    molecularGeometry: "Pyranose ring (chair conformation in solution)",
    oxidationStates: "Carbon varies; aldehyde carbon oxidized in reducing sugar tests",
    chemicalFamily: "Carbohydrates (hexoses)",
  },

  reactions: [
    {
      equation: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
      type: "Cellular respiration (aerobic)",
      conditions: "Enzymes, mitochondria, aerobic conditions",
      explanation: "Complete oxidation of glucose yields CO₂ and water, releasing ~2870 kJ/mol energy, captured as ATP through glycolysis, Krebs cycle, and oxidative phosphorylation.",
      products: "Carbon dioxide and water",
      applications: "Metabolic energy production in all aerobic organisms",
      relatedConcepts: ["Bioenergetics", "Redox", "Metabolism"],
    },
    {
      equation: "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
      type: "Alcoholic fermentation",
      conditions: "Yeast (Saccharomyces), anaerobic, ~30–37 °C",
      explanation: "Zymase enzymes in yeast convert glucose to ethanol and CO₂ when oxygen is absent, regenerating NAD⁺ for continued glycolysis.",
      products: "Ethanol and carbon dioxide",
      applications: "Brewing, winemaking, biofuel production",
      relatedConcepts: ["Fermentation", "Anaerobic metabolism", "Enzyme catalysis"],
    },
    {
      equation: "C₆H₁₂O₆ + 2 Cu²⁺ (alkaline) → C₆H₁₂O₇ + Cu₂O(s) + ...",
      type: "Redox (Benedict's test)",
      conditions: "Alkaline copper(II) tartrate, heat",
      explanation: "Glucose reduces Cu²⁺ to Cu₂O (brick-red precipitate); the aldehyde group is oxidized to a carboxylic acid.",
      products: "Gluconic acid (or gluconate) and copper(I) oxide",
      applications: "Qualitative test for reducing sugars, clinical urinalysis (historical)",
      relatedConcepts: ["Reducing sugars", "Qualitative analysis", "Redox titrations"],
    },
    {
      equation: "n C₆H₁₂O₆ → (C₆H₁₀O₅)ₙ + n H₂O",
      type: "Polymerization (glycogen/starch formation)",
      conditions: "Glycogen synthase, UDP-glucose, liver/muscle cells",
      explanation: "Glucose units link via α-1,4 and α-1,6 glycosidic bonds to form glycogen for energy storage in animals.",
      products: "Glycogen polymer",
      applications: "Energy storage in liver and skeletal muscle",
      relatedConcepts: ["Polymerization", "Glycosidic bonds", "Biochemistry"],
    },
  ],

  relatedFormulas: ["C6H12O6", "C12H22O11", "C2H5OH", "CO2", "H2O"],
  comparisonNote: "Glucose and fructose share C₆H₁₂O₆ (180.16 g/mol) but differ in function: glucose is an aldose prioritized for glycolysis; fructose is a ketose metabolized primarily in the liver.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of glucose (C₆H₁₂O₆).",
      answer: "6(12.01) + 12(1.008) + 6(16.00) = 180.16 g/mol",
    },
    {
      question: "A patient has blood glucose of 180 mg/dL. Convert to mmol/L.",
      answer: "180 mg/dL = 1800 mg/L; 1800 mg ÷ 180.16 mg/mmol = 10.0 mmol/L",
      hint: "Use molar mass 180.16 g/mol = 180.16 mg/mmol.",
    },
    {
      question: "Why does glucose give a positive Benedict's test but sucrose does not?",
      answer: "Glucose has a free anomeric OH (hemiacetal) that opens to an aldehyde; sucrose has both anomeric carbons tied up in glycosidic linkage.",
    },
    {
      question: "How many moles of CO₂ from complete combustion of 360 g glucose?",
      answer: "360 g ÷ 180.16 g/mol = 2.0 mol glucose; produces 6 × 2.0 = 12 mol CO₂",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of glucose?",
      answer: "180.16 g/mol.",
    },
    {
      question: "Is glucose the same as blood sugar?",
      answer: "Yes — D-glucose is the primary sugar measured as blood glucose in clinical tests.",
    },
    {
      question: "What is dextrose?",
      answer: "Dextrose is D-glucose, named for its dextrorotatory optical rotation in solution.",
    },
    {
      question: "Why is glucose called a reducing sugar?",
      answer: "It can reduce oxidizing agents like Cu²⁺ or Ag⁺ because the aldehyde (open-chain) form is in equilibrium with cyclic hemiacetal forms.",
    },
    {
      question: "How does glucose differ from cellulose if both are (C₆H₁₂O₆)ₙ polymers?",
      answer: "Monomeric glucose (180.16 g/mol) polymerizes; cellulose uses β-1,4 links (indigestible to humans) vs. starch's α-1,4 links.",
    },
  ],

  references: [
    { label: "IUPAC", note: "Carbohydrate nomenclature and stereochemistry" },
    { label: "PubChem CID 5793", note: "Glucose structure and properties" },
    { label: "Lehninger Principles of Biochemistry", note: "Glycolysis and glucose metabolism" },
  ],
};
