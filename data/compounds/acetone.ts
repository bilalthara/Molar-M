import type { CompoundProfile } from "@/lib/chemistry/types";

export const acetone: CompoundProfile = {
  slug: "molar-mass-of-acetone",
  formula: "C3H6O",
  name: "Acetone",
  iupacName: "Propan-2-one",
  commonNames: ["Acetone", "Dimethyl ketone", "2-Propanone"],
  aliases: ["C₃H₆O", "DMK", "Nail polish remover (common product)"],
  category: "organic",
  categories: ["organic"],
  casNumber: "67-64-1",
  pubchemCid: "180",
  smiles: "CC(=O)C",
  inchi: "InChI=1S/C3H6O/c1-3(2)4/h1-2H3",
  exactMass: 58.041865,
  featured: true,
  popular: true,

  overview: `Acetone (C₃H₆O) is the simplest and most important ketone, with a molar mass of 58.08 g/mol, consisting of a carbonyl group (C=O) flanked symmetrically by two methyl groups. It is a colorless, highly volatile, flammable liquid that is fully miscible with water as well as with a huge range of organic solvents, an unusually broad solvency profile that makes it one of the most widely used industrial and household solvents. This dual miscibility arises because the polar carbonyl group can hydrogen-bond with water (as an acceptor, since it has no O–H bond of its own to donate), while the two flanking methyl groups give it enough nonpolar character to dissolve oils, resins, and many organic compounds that are immiscible with water alone.

Acetone's everyday fame comes largely from its role as the active solvent in nail polish remover, where it rapidly dissolves the nitrocellulose-based polymer films of nail lacquer, and from its ubiquity as a fast-evaporating cleaning solvent for laboratory glassware, electronics, and industrial degreasing. Its rapid, complete evaporation without leaving residue, combined with relatively low toxicity compared to many other industrial solvents, explains why it has remained a solvent of choice for over a century despite the development of many alternatives.

Biologically, acetone occupies a very different role: it is one of the three "ketone bodies" (alongside acetoacetate and beta-hydroxybutyrate) that the liver produces from fatty acid breakdown when carbohydrate availability is low, as occurs during prolonged fasting, a ketogenic diet, or uncontrolled diabetes. Elevated blood and breath acetone is the chemical basis of the characteristic fruity breath odor observed in diabetic ketoacidosis and the "keto breath" reported by people on very low-carbohydrate diets, linking this common industrial solvent directly to human metabolic biochemistry.`,

  formulaExplanation: `The formula C₃H₆O represents a three-carbon chain with a ketone functional group at the central carbon: CH₃–C(=O)–CH₃. The central carbon is sp² hybridized with trigonal planar geometry around the carbonyl, while the two terminal methyl carbons are sp³ hybridized and tetrahedral. Because the carbonyl carbon is flanked symmetrically by two identical methyl groups, acetone is the simplest possible ketone — there is no smaller carbon skeleton that can support a ketone functional group.`,

  chemicalProfile: `Acetone undergoes the characteristic reactions of ketones: nucleophilic addition at the electrophilic carbonyl carbon (with reagents like Grignard reagents, cyanide, or hydrazine derivatives), aldol condensation with itself or other carbonyl compounds under basic conditions, and keto–enol tautomerism, in which a small equilibrium population exists as the enol form (propen-2-ol) with a mobile proton on the alpha carbon. Unlike aldehydes, ketones such as acetone do not give a positive Tollens' or Fehling's test, since they lack the easily oxidized carbonyl hydrogen that aldehydes possess.`,

  uniqueTopics: [
    {
      heading: "Solvent versatility: why acetone dissolves almost everything",
      body: "Acetone's unusual dual miscibility with both water and a wide range of nonpolar organic solvents stems from its molecular structure: the polar C=O group allows hydrogen-bond acceptance from water, while the two nonpolar methyl groups provide enough hydrophobic character to dissolve oils, waxes, resins, and many plastics. This versatility, combined with a low boiling point (56 °C) that allows rapid, complete evaporation, makes acetone one of the most broadly useful single-solvent choices in laboratories, nail care, electronics cleaning, and industrial degreasing.",
    },
    {
      heading: "Nail polish remover and cosmetic chemistry",
      body: "Acetone is the active ingredient in most nail polish removers because it rapidly and effectively dissolves the nitrocellulose lacquer polymer film that forms hardened nail polish, breaking the polymer's intermolecular interactions and lifting it from the nail surface. While effective, pure acetone is also drying to skin and nails because it strips natural oils along with the polish, which is why many commercial removers blend in moisturizing additives or use gentler (though generally less effective) alternative solvents for sensitive users.",
    },
    {
      heading: "Ketone bodies: acetone and diabetic ketoacidosis breath",
      body: "During prolonged fasting, a ketogenic diet, or poorly controlled diabetes, the liver breaks down fatty acids into acetyl-CoA faster than it can be used in the citric acid cycle, diverting the excess into three ketone bodies: acetoacetate, beta-hydroxybutyrate, and acetone (formed by spontaneous decarboxylation of acetoacetate). Because acetone is volatile, some of it is exhaled directly through the lungs, producing the characteristic fruity or 'nail polish remover' smell on the breath that is a recognized clinical sign of diabetic ketoacidosis and is also reported anecdotally by people following very low-carbohydrate ketogenic diets.",
    },
    {
      heading: "Enol chemistry and keto-enol tautomerism",
      body: "Acetone exists overwhelmingly (>99.9%) as the keto form at equilibrium, but a small fraction converts to its enol tautomer, propen-2-ol (CH₂=C(OH)CH₃), through a mobile proton shift between the alpha carbon and the oxygen. This keto–enol equilibrium is fundamental to a huge swath of organic reaction mechanisms, including aldol condensations, halogenation at the alpha carbon, and acid- or base-catalyzed isomerizations, making acetone a standard teaching molecule for introducing tautomerism in organic chemistry courses.",
    },
    {
      heading: "Industrial synthesis and bisphenol A/MMA feedstock role",
      body: "Beyond its solvent applications, acetone is a critical industrial feedstock, most notably as a precursor (with phenol) to bisphenol A, used in polycarbonate plastics and epoxy resins, and as a starting material for methyl methacrylate monomer used in the production of acrylic (PMMA) plastics like Plexiglas. Most acetone today is produced as a coproduct of the cumene process for phenol manufacture, linking acetone's industrial supply chain directly to the petrochemical production of some of the world's most widely used engineering plastics.",
    },
  ],

  applications: {
    industrial: [
      "Feedstock for bisphenol A and methyl methacrylate (acrylic plastic) production",
      "Industrial degreasing and cleaning solvent for metal parts and electronics",
      "Solvent in paints, coatings, and adhesive formulations",
      "Extraction and purification solvent in pharmaceutical and chemical manufacturing",
    ],
    laboratory: [
      "General-purpose glassware cleaning and rinsing solvent",
      "Recrystallization and extraction solvent for organic compounds",
      "Common solvent in chromatography and sample preparation",
    ],
    environmental: "Biodegrades relatively readily and has low persistence in the environment compared to many industrial solvents, though large releases can still contribute to volatile organic compound (VOC) air quality concerns.",
    biological: "One of the three ketone bodies produced during fatty acid metabolism under carbohydrate-limited conditions; elevated levels are associated with diabetic ketoacidosis and ketogenic diets and are detectable on breath and in urine.",
  },

  preparation: `Historically prepared in the laboratory by dry distillation of calcium acetate or by oxidation of isopropanol with an oxidizing agent such as potassium permanganate or copper catalysis. Industrially, acetone is produced predominantly as a coproduct of the cumene process for phenol manufacture, via cumene hydroperoxide decomposition.`,

  production: `Global acetone production exceeds 6–7 million tonnes annually, overwhelmingly as a coproduct of phenol manufacture via the cumene process, supplemented by direct catalytic dehydrogenation of isopropanol in some facilities.`,

  storage: `Store in tightly sealed, flame-resistant containers away from heat, sparks, and open flame, since acetone is highly volatile and flammable. Keep away from strong oxidizers, as acetone can react vigorously with concentrated oxidizing agents.`,

  handling: `Use in well-ventilated areas or fume hoods to avoid excessive vapor inhalation; wear gloves, since repeated skin contact causes significant drying and defatting of skin oils. Avoid all ignition sources given its low flash point.`,

  safety: {
    summary: "Highly flammable liquid with moderate acute toxicity; vapors can cause headache and dizziness at high concentrations, and repeated skin contact causes drying and irritation, though it is less toxic than many other industrial solvents.",
    hazards: [
      "Highly flammable liquid and vapor (flash point −20 °C)",
      "Eye and respiratory irritation from vapor exposure",
      "Skin drying and defatting from repeated direct contact",
      "Central nervous system depression (dizziness, headache) at high vapor concentrations",
    ],
    classification: "GHS: Flam. Liq. 2, Eye Irrit. 2, STOT SE 3",
  },

  interestingFacts: [
    "Fruity or 'nail-polish' breath odor can be a clinical warning sign of diabetic ketoacidosis, caused by exhaled acetone from ketone body metabolism.",
    "Acetone is fully miscible with both water and a huge range of nonpolar organic solvents, an unusually broad solvency profile for a single small molecule.",
    "Most industrial acetone is actually a coproduct, not the main target, of the cumene process that primarily makes phenol.",
    "Acetone was historically used as an anesthetic before safer alternatives were developed, though this use has long been abandoned due to its irritant and flammability properties.",
  ],

  history: `Acetone has been known since the 17th century as a distillation product, but its chemical structure as a ketone was clarified in the 19th century alongside broader advances in organic chemistry nomenclature and functional group theory. Its large-scale industrial importance grew dramatically in the early 20th century, notably when Chaim Weizmann developed a fermentation process for acetone production that was critical to Allied explosives (cordite) manufacture during World War I, before the modern cumene-process route became dominant later in the century.`,

  discovery: "Known in impure distillation products since the 17th century; formally characterized as a distinct ketone compound during 19th-century organic chemistry, with major industrial-scale production methods developed in the early 20th century.",

  examNotes: [
    "Molar mass C₃H₆O = 3(12.01) + 6(1.008) + 16.00 = 58.08 g/mol.",
    "Acetone is the simplest ketone; it has no aldehyde hydrogen, so it gives negative results on Tollens' and Fehling's tests, unlike aldehydes.",
    "Keto-enol tautomerism: acetone exists in equilibrium with its enol form, propen-2-ol, though the keto form dominates overwhelmingly at equilibrium.",
    "Industrial link: acetone is a major coproduct of the cumene process for phenol production, not typically made by direct standalone synthesis.",
  ],

  commonMistakes: [
    "Confusing acetone (a ketone, C₃H₆O) with acetic acid (a carboxylic acid, C₂H₄O2) — different functional groups and very different chemistry despite similar-sounding names.",
    "Expecting acetone to give a positive Tollens' or Fehling's test like an aldehyde — ketones generally do not react in these tests due to lacking an oxidizable carbonyl hydrogen.",
    "Assuming all ketone body production indicates diabetes — ketosis from fasting or ketogenic diets is a distinct, generally non-pathological process from diabetic ketoacidosis, though both involve the same three ketone bodies.",
  ],

  studentTips: [
    "Draw acetone's structure (CH₃-CO-CH₃) to quickly see why it is the simplest possible ketone — any smaller carbon skeleton cannot support a ketone group.",
    "Remember the negative Tollens'/Fehling's result as the standard chemical test to distinguish ketones like acetone from aldehydes.",
    "Link acetone's dual water/organic miscibility to its widespread solvent use whenever discussing polarity and solubility concepts.",
  ],

  misconceptions: [
    "Acetone is not the same as isopropyl alcohol (rubbing alcohol) — one is a ketone, the other an alcohol, though both are common household solvents.",
    "The presence of acetone on someone's breath does not automatically mean they have diabetes — it can also result from fasting, low-carbohydrate diets, or heavy exercise.",
    "Acetone-based nail polish remover is not equally safe for all plastic and synthetic materials — its strong solvency can damage or dissolve many plastics beyond just nail lacquer.",
  ],

  physical: {
    appearance: "Colorless, volatile liquid",
    color: "Colorless",
    odor: "Characteristic sweetish, sharp solvent odor",
    stateAtSTP: "Liquid",
    density: "0.791 g/cm³ at 20 °C",
    meltingPoint: "−94.7 °C",
    boilingPoint: "56.05 °C",
    flashPoint: "−20 °C (closed cup)",
    solubility: "Miscible with water and most common organic solvents",
    crystalStructure: "Not commonly crystallized at ordinary conditions",
  },

  chemical: {
    classification: "Ketone / aliphatic carbonyl compound",
    polarity: "Polar (carbonyl group; hydrogen-bond acceptor but not donor)",
    molecularGeometry: "Trigonal planar around the carbonyl carbon",
    bondAngle: "~120° (around carbonyl carbon)",
    oxidationStates: "Carbonyl C: 0, methyl C: −3, O: −2",
    chemicalFamily: "Ketones (simplest member of the class)",
  },

  reactions: [
    {
      equation: "CH₃COCH₃ + HCN → (CH₃)₂C(OH)CN",
      type: "Nucleophilic addition",
      conditions: "Mild base catalyst, ambient temperature",
      explanation: "Cyanide adds to the electrophilic carbonyl carbon, forming a cyanohydrin — a classic example of nucleophilic addition at a ketone carbonyl.",
      products: "Acetone cyanohydrin",
      applications: "Synthesis route to methyl methacrylate monomer for acrylic plastics",
      relatedConcepts: ["Nucleophilic addition", "Carbonyl reactivity", "Cyanohydrin formation"],
    },
    {
      equation: "2 CH₃COCH₃ → CH₃COCH₂C(OH)(CH₃)₂",
      type: "Aldol condensation (self-condensation)",
      conditions: "Base catalyst (e.g., dilute NaOH), moderate heat",
      explanation: "Under basic conditions, one acetone molecule's enolate attacks the carbonyl carbon of another, forming a beta-hydroxy ketone through a classic aldol addition mechanism.",
      products: "Diacetone alcohol (4-hydroxy-4-methyl-2-pentanone)",
      applications: "Industrial solvent synthesis, teaching aldol reaction mechanisms",
      relatedConcepts: ["Aldol condensation", "Enolate chemistry", "Carbon–carbon bond formation"],
    },
    {
      equation: "CH₃COCH₃ ⇌ CH₂=C(OH)CH₃",
      type: "Keto–enol tautomerism",
      conditions: "Trace acid or base catalysis; equilibrium favors keto form (>99.9%)",
      explanation: "Acetone exists in a small equilibrium with its enol tautomer, propen-2-ol, via a mobile proton shift — the mechanistic basis for many alpha-carbon reactions of ketones.",
      products: "Propen-2-ol (enol tautomer, minor equilibrium species)",
      applications: "Foundational mechanism for halogenation and condensation reactions at carbonyl compounds",
      relatedConcepts: ["Tautomerism", "Enol chemistry", "Reaction mechanisms"],
    },
    {
      equation: "C₆H₅C(CH₃)₂OOH → C₆H₅OH + CH₃COCH₃",
      type: "Acid-catalyzed rearrangement (cumene process)",
      conditions: "Dilute sulfuric acid catalyst, moderate heat",
      explanation: "Cumene hydroperoxide undergoes acid-catalyzed rearrangement and cleavage to yield phenol and acetone simultaneously, the dominant industrial route supplying most of the world's acetone as a coproduct.",
      products: "Phenol and acetone",
      applications: "Industrial phenol and acetone coproduction (cumene process)",
      relatedConcepts: ["Industrial synthesis", "Acid-catalyzed rearrangement", "Coproduct chemistry"],
    },
  ],

  relatedFormulas: ["C2H4O2", "C2H6O", "C6H6", "C3H8", "C6H14"],
  comparisonNote: "Acetone (C₃H₆O, 58.08 g/mol, a ketone) is often compared with isopropanol (C₃H₈O, 60.10 g/mol, an alcohol) since both are common three-carbon household solvents, but acetone's carbonyl group gives it distinct reactivity — nucleophilic addition and tautomerism — that isopropanol's hydroxyl group does not share.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of acetone, C₃H₆O.",
      answer: "3(12.01) + 6(1.008) + 16.00 = 58.08 g/mol",
    },
    {
      question: "Why does acetone give a negative result on the Tollens' test while acetaldehyde gives a positive result?",
      answer: "Acetone is a ketone with no hydrogen directly attached to the carbonyl carbon, so it cannot be oxidized the way an aldehyde's carbonyl hydrogen can; only aldehydes reduce Tollens' reagent to metallic silver.",
    },
    {
      question: "How many grams of acetone are in 250 mL of pure acetone (density 0.791 g/cm³)?",
      answer: "250 mL × 0.791 g/mL = 197.75 g ≈ 198 g",
    },
    {
      question: "What are the three ketone bodies produced during fatty acid metabolism, and which one is volatile enough to be smelled on breath?",
      answer: "Acetoacetate, beta-hydroxybutyrate, and acetone; acetone is the volatile one detectable on breath.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of acetone?",
      answer: "58.08 g/mol, calculated as 3 × 12.01 (C) + 6 × 1.008 (H) + 16.00 (O).",
    },
    {
      question: "Why is acetone used in nail polish remover?",
      answer: "It rapidly dissolves the nitrocellulose polymer film in hardened nail lacquer, effectively lifting polish from the nail surface.",
    },
    {
      question: "Is acetone dangerous?",
      answer: "It is highly flammable and can irritate eyes and skin with repeated exposure, but it has relatively low acute toxicity compared to many other industrial solvents when used with normal precautions.",
    },
    {
      question: "Why does acetone smell on the breath of someone with uncontrolled diabetes?",
      answer: "Ketoacidosis causes the liver to overproduce ketone bodies, including volatile acetone, some of which is exhaled directly through the lungs.",
    },
    {
      question: "What is acetone used for industrially besides being a solvent?",
      answer: "It is a key feedstock for producing bisphenol A (used in polycarbonate plastics) and methyl methacrylate (used in acrylic plastics like Plexiglas).",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of acetone" },
    { label: "PubChem CID 180", note: "Structural and safety identifiers" },
    { label: "American Chemistry Council", note: "Industrial acetone production and cumene process data" },
  ],
};
