import type { CompoundProfile } from "@/lib/chemistry/types";

export const urea: CompoundProfile = {
  slug: "molar-mass-of-urea",
  formula: "CH4N2O",
  name: "Urea",
  iupacName: "Carbamide",
  commonNames: ["Urea", "Carbamide"],
  aliases: ["CH₄N₂O", "CO(NH₂)₂"],
  category: "organic",
  categories: ["organic"],
  casNumber: "57-13-6",
  pubchemCid: "1176",
  smiles: "C(=O)(N)N",
  inchi: "InChI=1S/CH4N2O/c2-1(3)4/h(H4,2,3,4)",
  exactMass: 60.032363,
  featured: true,
  popular: true,

  overview: `Urea (CH₄N₂O, more descriptively written CO(NH₂)₂) is a simple organic compound with molar mass 60.06 g/mol (C 12.01 + H 4 × 1.008 + N 2 × 14.01 + O 16.00), consisting of a carbonyl group flanked by two amine groups. It holds a unique place in the history of chemistry as the first organic compound ever synthesized from inorganic starting materials, a landmark 1828 achievement by Friedrich Wöhler that helped dismantle the doctrine of vitalism — the belief that organic compounds could only be produced by living organisms through some special "vital force."

Biologically, urea is the primary nitrogenous waste product of protein and amino acid metabolism in mammals, produced in the liver through the urea cycle, which safely converts toxic ammonia (a byproduct of amino acid breakdown) into the far less toxic, highly water-soluble urea for excretion in urine. This detoxification pathway is so central to nitrogen metabolism that blood urea nitrogen (BUN) is a standard clinical marker of kidney function, since impaired renal filtration causes urea to accumulate in the bloodstream.

Industrially, urea is overwhelmingly the world's most widely used nitrogen fertilizer, prized for its high nitrogen content (46% by mass, the highest of any solid nitrogen fertilizer) and relatively low cost of production from ammonia and carbon dioxide. Beyond agriculture, urea serves as a key feedstock for urea-formaldehyde resins used in adhesives and particleboard, as the active reducing agent in diesel exhaust fluid (AdBlue) that helps catalytically reduce nitrogen oxide emissions, and in a striking twist of chemical history, as the compound whose accidental overheating with ammonium cyanate first revealed the biuret side reaction that still bears practical relevance in fertilizer quality control today.`,

  formulaExplanation: `CH₄N₂O, more informatively written CO(NH₂)₂, contains a central carbon double-bonded to oxygen (carbonyl) and single-bonded to two amine (–NH₂) groups. This arrangement makes urea the diamide of carbonic acid, structurally bridging simple carbonyl chemistry and amine/amide functionality, and gives the molecule strong hydrogen-bonding capacity despite its small size.`,

  chemicalProfile: `Urea is a weakly basic compound (due to its amide nitrogen lone pairs, though far weaker than a simple amine) and undergoes hydrolysis, especially enzymatically via urease, to ammonia and carbon dioxide — the reaction exploited by soil bacteria to release plant-available nitrogen from urea fertilizer. On heating above its melting point, urea can decompose to biuret and ammonia, and at higher temperatures further condenses to cyanuric acid and other products; controlling these side reactions is important in fertilizer manufacturing and quality.`,

  uniqueTopics: [
    {
      heading: "Wöhler synthesis: the birth of organic chemistry from inorganic materials",
      body: "In 1828, Friedrich Wöhler heated ammonium cyanate, an inorganic salt, and unexpectedly obtained urea — a compound previously known only as a product of animal metabolism. This landmark synthesis of an organic compound from purely inorganic starting materials directly challenged vitalism, the prevailing belief that organic substances required a mysterious 'vital force' unique to living organisms, and is widely credited with launching organic chemistry as a rigorous, unified scientific discipline rather than a separate domain governed by different natural laws.",
    },
    {
      heading: "The urea cycle and ammonia detoxification",
      body: "In the liver, the urea cycle converts toxic ammonia — generated from amino acid catabolism — into water-soluble, far less toxic urea for excretion in urine. This multistep enzymatic pathway, elucidated by Hans Krebs and Kurt Henseleit in 1932, is essential to mammalian nitrogen metabolism, and genetic defects in urea cycle enzymes cause serious, sometimes life-threatening ammonia accumulation disorders.",
    },
    {
      heading: "The world's dominant nitrogen fertilizer",
      body: "Urea's exceptionally high nitrogen content (46% by mass) and relatively straightforward industrial synthesis from ammonia and carbon dioxide have made it the most widely used solid nitrogen fertilizer on Earth, feeding a substantial share of global crop nitrogen demand. Soil urease enzymes hydrolyze applied urea to ammonium and eventually nitrate, making its nitrogen available for plant uptake, though volatilization losses as ammonia gas are a practical agronomic concern requiring careful application timing.",
    },
    {
      heading: "Biuret formation: urea's accidental decomposition product",
      body: "Heating urea above its melting point can drive a condensation side reaction forming biuret (a compound of two urea units minus ammonia), which is undesirable in fertilizer because it can be phytotoxic to certain sensitive crops at elevated concentrations. This same biuret molecule lends its name to the classic biuret test for proteins, in which a copper(II) sulfate/alkaline reagent produces a violet color with peptide bonds structurally reminiscent of the biuret linkage — an unrelated but memorably connected piece of chemical nomenclature.",
    },
    {
      heading: "Diesel exhaust fluid and selective catalytic reduction",
      body: "Urea dissolved in purified water (commercially sold as AdBlue or diesel exhaust fluid) is injected into modern diesel vehicle exhaust systems, where it thermally decomposes to ammonia that reacts with nitrogen oxides over a catalyst in a process called selective catalytic reduction, converting harmful NOₓ pollutants into harmless nitrogen gas and water vapor — a major technology enabling modern diesel engines to meet strict emissions standards.",
    },
  ],

  applications: {
    industrial: [
      "Nitrogen fertilizer manufacturing (highest nitrogen content of common solid fertilizers)",
      "Urea-formaldehyde resin production for adhesives and particleboard",
      "Diesel exhaust fluid (AdBlue) for selective catalytic reduction of NOₓ emissions",
      "Feed additive (as a non-protein nitrogen source for ruminant livestock)",
    ],
    laboratory: [
      "Protein denaturant in biochemistry (disrupts hydrogen bonding in solution)",
      "Reference compound for teaching the Wöhler synthesis and history of organic chemistry",
      "Urease enzyme activity assays",
    ],
    environmental: "Ammonia volatilization from applied urea fertilizer contributes to air quality and nitrogen deposition concerns; excess agricultural nitrogen runoff can contribute to waterway eutrophication.",
    biological: "The primary nitrogenous waste product of mammalian protein metabolism, synthesized via the liver's urea cycle and excreted in urine; blood urea nitrogen is a standard clinical kidney function marker.",
  },

  preparation: `Industrially synthesized by reacting ammonia with carbon dioxide under high pressure and temperature to form ammonium carbamate, which then dehydrates to urea: 2 NH₃ + CO₂ → NH₂COONH₄ → CO(NH₂)₂ + H₂O. This is known as the Bosch–Meiser urea process, closely linked to the Haber–Bosch ammonia synthesis that supplies its nitrogen feedstock.`,

  production: `Global urea production exceeds 180 million tonnes annually, making it the highest-volume manufactured nitrogen compound, overwhelmingly destined for agricultural fertilizer use.`,

  storage: `Store in a dry, sealed container, as urea is hygroscopic and can cake or degrade with moisture absorption. Keep away from strong oxidizers and avoid prolonged storage above its melting point, which can promote biuret formation.`,

  handling: `Low acute hazard; treat as a mild irritant. Standard gloves and eye protection are sufficient for typical laboratory or agricultural handling. Avoid inhaling fine fertilizer-grade dust in bulk handling situations.`,

  safety: {
    summary: "Low toxicity; generally recognized as safe in food-grade and pharmaceutical contexts at appropriate concentrations. Fertilizer-grade dust may cause mild respiratory or eye irritation.",
    hazards: [
      "Mild eye and respiratory irritation from dust",
      "Ammonia release possible on prolonged heating or microbial decomposition",
      "Environmental nitrogen loading concerns with excessive agricultural application",
    ],
    classification: "Not classified as hazardous under GHS for standard fertilizer or laboratory-grade material",
  },

  interestingFacts: [
    "Urea's 1828 synthesis by Friedrich Wöhler is widely taught as the experiment that helped end the doctrine of vitalism in chemistry.",
    "Urea has the highest nitrogen content by mass (46%) of any commonly used solid nitrogen fertilizer.",
    "The human body produces roughly 25–30 grams of urea daily as a byproduct of normal protein metabolism, excreted primarily through urine.",
    "Diesel exhaust fluid, essentially a purified urea solution, has become a common sight at fuel stations as more vehicles adopt selective catalytic reduction emissions technology.",
  ],

  history: `Urea was first isolated from urine by Hilaire Rouelle in 1773, but its true chemical significance emerged in 1828 when Friedrich Wöhler synthesized it by heating ammonium cyanate, an inorganic salt — a discovery credited with undermining vitalism and helping establish organic chemistry as a discipline governed by the same physical laws as inorganic chemistry. Hans Krebs and Kurt Henseleit elucidated the biological urea cycle in 1932, and industrial urea synthesis from ammonia and CO₂ (the Bosch–Meiser process) was developed in the early 20th century alongside the broader growth of the nitrogen fertilizer industry.`,

  discovery: "Hilaire Rouelle isolated urea from urine in 1773; Friedrich Wöhler achieved its landmark inorganic-to-organic synthesis in 1828.",

  examNotes: [
    "Molar mass CH₄N₂O = 12.01 + 4(1.008) + 2(14.01) + 16.00 = 60.06 g/mol.",
    "Wöhler synthesis: NH₄OCN (ammonium cyanate) → CO(NH₂)₂ (urea), an inorganic-to-organic isomerization.",
    "Industrial synthesis: 2 NH₃ + CO₂ → CO(NH₂)₂ + H₂O (Bosch–Meiser process).",
    "Urea hydrolysis (urease-catalyzed): CO(NH₂)₂ + H₂O → 2 NH₃ + CO₂.",
  ],

  commonMistakes: [
    "Writing urea's formula incorrectly as CON₂H₄ without recognizing the correct connectivity CO(NH₂)₂.",
    "Confusing urea (CH₄N₂O, 60.06 g/mol) with ammonium nitrate (NH₄NO₃, 80.04 g/mol) — both nitrogen fertilizers but chemically distinct.",
    "Assuming urea itself is toxic like ammonia — it is specifically the far less toxic detoxification product the body produces to safely eliminate excess nitrogen.",
  ],

  studentTips: [
    "Remember the Wöhler synthesis as the historical turning point separating organic chemistry from vitalism — a favorite exam and general chemistry history question.",
    "Link urea's high nitrogen percentage (46%) directly to its dominance as the world's most-used nitrogen fertilizer.",
    "Connect the urea cycle's role in ammonia detoxification to clinical blood urea nitrogen (BUN) testing for kidney function.",
  ],

  misconceptions: [
    "Urea used in fertilizer and diesel exhaust fluid is not derived from animal urine — virtually all commercial urea is synthetically manufactured from ammonia and carbon dioxide.",
    "Urea is not itself a strong base or strongly reactive compound — its amide nitrogens make it only very weakly basic compared to typical amines.",
    "The biuret test for proteins does not use biuret derived from decomposed urea directly — it uses a copper(II)/alkaline reagent that reacts with peptide bonds structurally similar to biuret's own linkage.",
  ],

  physical: {
    appearance: "White crystalline solid or prilled granules (fertilizer form)",
    color: "White",
    odor: "Odorless (fresh); ammonia-like odor if decomposing",
    stateAtSTP: "Solid",
    density: "1.32 g/cm³",
    meltingPoint: "133–135 °C",
    boilingPoint: "Decomposes before boiling",
    solubility: "1,080 g/L water at 20 °C (highly soluble)",
    crystalStructure: "Tetragonal",
  },

  chemical: {
    classification: "Organic diamide / carbamide (carbonic acid diamide)",
    basicity: "Very weakly basic (amide nitrogen lone pairs, much weaker than simple amines)",
    polarity: "Highly polar (strong hydrogen-bonding carbonyl and amine groups)",
    molecularGeometry: "Planar around the carbonyl carbon (sp² hybridized)",
    oxidationStates: "Not typically described by oxidation states (organic covalent compound)",
    chemicalFamily: "Amides / carbamide derivatives",
  },

  reactions: [
    {
      equation: "2 NH₃(g) + CO₂(g) → CO(NH₂)₂(s) + H₂O(l)",
      type: "Industrial synthesis (Bosch–Meiser process)",
      conditions: "High temperature and pressure, via ammonium carbamate intermediate",
      explanation: "Ammonia and carbon dioxide combine under industrial conditions to form ammonium carbamate, which dehydrates to yield urea, the dominant industrial production route.",
      products: "Urea and water",
      applications: "Global industrial urea fertilizer production",
      relatedConcepts: ["Industrial synthesis", "Haber-Bosch integration", "Condensation reactions"],
    },
    {
      equation: "CO(NH₂)₂(aq) + H₂O(l) → 2 NH₃(g) + CO₂(g)",
      type: "Enzymatic hydrolysis (urease-catalyzed)",
      conditions: "Aqueous, urease enzyme (soil bacteria or biological systems)",
      explanation: "Urease-catalyzed hydrolysis breaks down urea into ammonia and carbon dioxide, the mechanism by which soil bacteria release plant-available nitrogen from applied urea fertilizer.",
      products: "Ammonia and carbon dioxide",
      applications: "Soil nitrogen release from fertilizer, urease assay chemistry",
      relatedConcepts: ["Enzyme catalysis", "Hydrolysis", "Agricultural chemistry"],
    },
    {
      equation: "2 CO(NH₂)₂(l, heated) → NH₂CONHCONH₂ (biuret) + NH₃(g)",
      type: "Thermal decomposition (condensation side reaction)",
      conditions: "Heating above melting point (~135 °C)",
      explanation: "Prolonged heating of molten urea drives a condensation reaction forming biuret with loss of ammonia, an undesirable side reaction monitored in fertilizer manufacturing quality control.",
      products: "Biuret and ammonia",
      applications: "Fertilizer quality control, understanding thermal decomposition limits",
      relatedConcepts: ["Thermal decomposition", "Condensation reactions", "Fertilizer chemistry"],
    },
    {
      equation: "4 NH₃(from urea) + 4 NO(g) + O₂(g) → 4 N₂(g) + 6 H₂O(g)",
      type: "Selective catalytic reduction (industrial emissions control)",
      conditions: "Catalyst (e.g., vanadium or zeolite-based), diesel exhaust temperature",
      explanation: "Ammonia generated from thermally decomposed urea (diesel exhaust fluid) reacts catalytically with nitrogen oxides in diesel exhaust, converting them to harmless nitrogen gas and water vapor.",
      products: "Nitrogen gas and water vapor",
      applications: "Diesel vehicle emissions control (AdBlue/SCR systems)",
      relatedConcepts: ["Catalysis", "Redox reactions", "Emissions control chemistry"],
    },
  ],

  relatedFormulas: ["NH3", "CO2", "NH2CONHCONH2", "NH4NO3", "(NH2)2CO"],
  comparisonNote: "Urea (CH₄N₂O, 60.06 g/mol, 46% nitrogen by mass) has a substantially higher nitrogen content than ammonium nitrate (NH₄NO₃, 80.04 g/mol, 35% nitrogen), explaining urea's dominance in bulk nitrogen fertilizer markets despite ammonium nitrate's faster initial nitrogen release.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of urea (CH₄N₂O).",
      answer: "12.01 + 4(1.008) + 2(14.01) + 16.00 = 60.06 g/mol",
    },
    {
      question: "What is the percent nitrogen by mass in urea?",
      answer: "(2 × 14.01) / 60.06 × 100 = 46.6%",
    },
    {
      question: "How many moles of ammonia are released from complete hydrolysis of 30.03 g of urea?",
      answer: "30.03 g ÷ 60.06 g/mol = 0.500 mol urea → 0.500 × 2 = 1.00 mol NH₃",
    },
    {
      question: "Why is the Wöhler synthesis considered a landmark event in the history of chemistry?",
      answer: "It demonstrated that an organic compound (urea) could be synthesized from inorganic starting materials (ammonium cyanate), challenging vitalism and helping unify organic and inorganic chemistry under the same natural laws.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of urea?",
      answer: "60.06 g/mol.",
    },
    {
      question: "Why is urea significant in the history of chemistry?",
      answer: "Friedrich Wöhler's 1828 synthesis of urea from inorganic ammonium cyanate helped disprove vitalism and launched modern organic chemistry.",
    },
    {
      question: "Why is urea used as fertilizer?",
      answer: "It has the highest nitrogen content (46%) of common solid fertilizers and is relatively inexpensive to produce from ammonia and carbon dioxide.",
    },
    {
      question: "What role does urea play in the human body?",
      answer: "It is the primary nitrogenous waste product of protein metabolism, produced by the liver's urea cycle to safely eliminate toxic ammonia via urine.",
    },
    {
      question: "What is diesel exhaust fluid made of?",
      answer: "A purified aqueous solution of urea, which decomposes to ammonia in the exhaust system to catalytically reduce nitrogen oxide emissions.",
    },
  ],

  references: [
    { label: "PubChem CID 1176", note: "Urea compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "FAO", note: "Global nitrogen fertilizer production and use statistics" },
  ],
};
