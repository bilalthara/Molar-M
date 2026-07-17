import type { CompoundProfile } from "@/lib/chemistry/types";

export const calciumCarbonate: CompoundProfile = {
  slug: "molar-mass-of-calcium-carbonate",
  formula: "CaCO3",
  name: "Calcium Carbonate",
  iupacName: "Calcium carbonate",
  commonNames: ["Limestone", "Chalk", "Marble", "Calcite"],
  aliases: ["CaCO₃", "Aragonite (polymorph)", "Precipitated chalk"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "471-34-1",
  pubchemCid: "10112",
  smiles: "[Ca+2].[O-]C(=O)[O-]",
  inchi: "InChI=1S/CH2O3.Ca/c2-1(3)4;/h(H2,2,3,4);/q;+2/p-2",
  exactMass: 100.086908872,
  featured: true,
  popular: true,

  overview: `Calcium carbonate (CaCO₃) is an ionic compound with molar mass 100.09 g/mol (Ca 40.08 + C 12.01 + 3 × 16.00), the principal mineral in limestone, chalk, and marble. It crystallizes primarily as calcite (trigonal) or aragonite (orthorhombic), polymorphs with identical formula but different crystal packing — aragonite is denser and less stable at surface conditions, converting to calcite over geological time.

CaCO₃ reacts with acids to release CO₂: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂ — the effervescence test for carbonates. It undergoes thermal decomposition above ~840 °C: CaCO₃ → CaO + CO₂ (lime production). In oceans, CaCO₃ forms shells and coral skeletons; rising CO₂ lowers pH and threatens calcifying organisms through reduced carbonate ion availability (ocean acidification).`,

  formulaExplanation: `CaCO₃ contains Ca²⁺ and CO₃²⁻ ions in a 1:1 ratio. The carbonate ion is planar with sp² hybridized carbon and three equivalent C–O bonds (resonance). The formula unit represents one calcium ion paired with one carbonate ion in the crystal lattice.`,

  chemicalProfile: `CaCO₃ is basic ( carbonate hydrolyzes water slightly) and reacts with strong acids. It is insoluble in pure water (~0.013 g/L at 25 °C) but solubility increases in acidic conditions and in water containing dissolved CO₂ (forms soluble calcium bicarbonate). It does not decompose at room temperature but calcines to quicklime (CaO) industrially.`,

  uniqueTopics: [
    {
      heading: "Limestone and marble: one compound, two rocks",
      body: "Limestone and marble are both composed almost entirely of CaCO₃, but limestone is a sedimentary rock formed from compacted marine shell and skeletal debris, while marble is metamorphosed limestone that has recrystallized under heat and pressure into a denser, more uniformly crystalline stone prized for sculpture and construction — the same chemical formula producing dramatically different textures and uses depending purely on geological history.",
    },
    {
      heading: "Antacid neutralization and CO₂ release",
      body: "Calcium carbonate antacids (such as Tums) neutralize excess stomach acid through the reaction CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂, and the carbon dioxide byproduct is responsible for the occasional burping sensation some people notice after taking calcium-carbonate-based antacid tablets — a direct, everyday illustration of the same acid-carbonate chemistry used in laboratory qualitative tests.",
    },
    {
      heading: "Hard water and calcium carbonate scale formation",
      body: "Water hardness is largely measured in terms of dissolved calcium (and magnesium) carbonate/bicarbonate content; when hard water is heated or its dissolved CO₂ escapes, calcium bicarbonate reverts to insoluble CaCO₃, precipitating as the familiar limescale that builds up in kettles, pipes, and water heaters — the reverse of the same dissolution equilibrium that carves limestone caves underground.",
    },
    {
      heading: "The CO₂ effervescence test as a universal carbonate fingerprint",
      body: "Because virtually all metal carbonates release CO₂ gas when treated with acid, the vigorous fizzing observed when acid contacts CaCO₃ (limestone, chalk, or marble) serves as one of the most reliable and visually unambiguous qualitative tests in introductory chemistry and geology, used both in classroom demonstrations and in the field to quickly identify carbonate rocks and minerals.",
    },
  ],

  applications: {
    industrial: [
      "Portland cement manufacture (limestone + clay heated in kiln)",
      "Paper filler and coating pigment",
      "Construction aggregate and dimension stone (marble)",
      "Flue gas desulfurization (scrubbing SO₂)",
    ],
    laboratory: [
      "Primary standard for EDTA titrations (after drying)",
      "CO₂ generation by acid addition",
      "Demonstration of thermal decomposition and polymorphism",
    ],
    environmental: "Ocean acidification threatens CaCO₃ shell formation; geological carbon storage as carbonate minerals; limestone neutralizes acid rain in soils.",
    biological: "Eggshells, snail shells, coral reefs, and foraminifera tests are predominantly CaCO₃; antacid (Tums) neutralizes stomach HCl.",
  },

  preparation: `Mining natural limestone deposits. Precipitated CaCO₃ by combining Ca(OH)₂ with CO₂: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O. Laboratory: precipitate from CaCl₂ + Na₂CO₃.`,

  production: `Global limestone production exceeds 3 billion tonnes annually. Precipitated calcium carbonate (PCC) is synthesized for paper and plastics with controlled particle size.`,

  storage: `Stable indefinitely in dry conditions. Avoid prolonged exposure to acidic atmospheres (CO₂ + moisture forms soluble bicarbonate on surface).`,

  handling: `Low toxicity. Dust may irritate lungs (silicosis risk if contaminated with silica in mined limestone). Eye protection when handling powder.`,

  safety: {
    summary: "Generally non-toxic; used as food additive (E170) and antacid. Dust inhalation may irritate respiratory tract.",
    hazards: [
      "Respiratory irritation from fine dust",
      "Eye irritation from powder",
      "Thermal hazard during calcination (releases CO₂ at high temperature)",
    ],
    classification: "Not classified as hazardous (pure CaCO₃)",
  },

  interestingFacts: [
    "CaCO₃ molar mass ~100 g/mol makes stoichiometry convenient — 100 g = 1 mol.",
    "The White Cliffs of Dover are compacted coccolithophore CaCO₃ from Cretaceous seas.",
    "Marble and limestone are both CaCO₃ — marble is metamorphosed, recrystallized limestone.",
    "Hard-boiled eggs sometimes show green ring (ferrous sulfide) unrelated to CaCO₃ shell (~94% CaCO₃).",
  ],

  history: `Limestone used in pyramids (~2580 BCE). Lavoisier studied CO₂ from acid–carbonate reactions. Geological understanding of chalk formations linked to marine microorganisms in the 19th century.`,

  discovery: "Known since prehistoric use of limestone; chemical composition established through acid reaction producing 'fixed air' (CO₂) studied by Black and Lavoisier.",

  examNotes: [
    "Molar mass CaCO₃ = 40.08 + 12.01 + 3(16.00) = 100.09 g/mol.",
    "Acid test: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂ (effervescence).",
    "Thermal decomposition: CaCO₃ → CaO + CO₂ (mass loss = 44 g CO₂ per 100 g CaCO₃).",
    "Percent composition: Ca 40.0%, C 12.0%, O 48.0%.",
  ],

  commonMistakes: [
    "Assuming CaCO₃ is soluble in water — it is very insoluble (Ksp ≈ 3.3 × 10⁻⁹).",
    "Forgetting factor of 2 for HCl in acid–carbonate stoichiometry.",
    "Confusing CaCO₃ (100.09) with CaO (56.08) or Ca(OH)₂ (74.09) molar masses.",
  ],

  studentTips: [
    "Use 100 g/mol round number for quick percent yield from decomposition.",
    "Link acid test CO₂ to limewater turbidity for complete identification chain.",
    "Remember calcite vs. aragonite as polymorphs — same molar mass, different density.",
  ],

  misconceptions: [
    "Chalkboard chalk is often gypsum (CaSO₄·2H₂O), not CaCO₃ — true chalk is CaCO₃.",
    "CaCO₃ antacids do not ' absorb' acid — they neutralize HCl chemically.",
    "All limestone is pure CaCO₃ — dolomite contains MgCO₃ as well.",
  ],

  physical: {
    appearance: "White crystalline solid or powder; marble as polished stone",
    color: "White (pure); colored when impure (iron oxides, organic matter)",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.71 g/cm³ (calcite); 2.93 g/cm³ (aragonite)",
    meltingPoint: "Decomposes at ~825–840 °C (no true melting under 1 atm)",
    boilingPoint: "Decomposes before boiling",
    solubility: "0.013 g/L water at 25 °C; soluble in acid; more soluble in CO₂-saturated water",
    crystalStructure: "Trigonal (calcite, R-3c); orthorhombic (aragonite, Pmcn)",
  },

  chemical: {
    classification: "Ionic carbonate salt / alkaline earth carbonate",
    basicity: "Weakly basic (carbonate anion hydrolyzes water)",
    polarity: "Ionic",
    oxidationStates: "Ca: +2, C: +4, O: −2",
    chemicalFamily: "Group 2 carbonate (alkaline earth carbonate)",
  },

  reactions: [
    {
      equation: "CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–carbonate",
      conditions: "Room temperature, dilute acid",
      explanation: "Strong acid protonates carbonate, decomposing to CO₂ and water — definitive carbonate test with effervescence.",
      products: "Calcium chloride, water, carbon dioxide",
      applications: "CO₂ preparation, carbonate identification, antacid action",
      relatedConcepts: ["Gas evolution", "Qualitative analysis", "Stoichiometry"],
    },
    {
      equation: "CaCO₃(s) → CaO(s) + CO₂(g)",
      type: "Thermal decomposition (calcination)",
      conditions: "~900 °C in lime kiln",
      explanation: "High temperature breaks ionic lattice, releasing CO₂ and forming quicklime (CaO) — endothermic, ΔH ≈ +178 kJ/mol.",
      products: "Calcium oxide (quicklime) and carbon dioxide",
      applications: "Cement and lime production, historical mortar",
      relatedConcepts: ["Thermal decomposition", "Industrial chemistry", "Mass loss calculations"],
    },
    {
      equation: "CaCO₃(s) + CO₂(g) + H₂O(l) → Ca(HCO₃)₂(aq)",
      type: "Carbonation (soluble bicarbonate formation)",
      conditions: "Water containing dissolved CO₂",
      explanation: "Rainwater with dissolved CO₂ dissolves limestone slowly, forming caves and karst topography; process reverses when CO₂ degasses.",
      products: "Calcium bicarbonate (soluble)",
      applications: "Cave formation, hard water chemistry, stalactite/stalagmite deposition",
      relatedConcepts: ["Equilibrium", "Geochemistry", "Solubility"],
    },
    {
      equation: "CaCO₃(s) → Ca²⁺(aq) + CO₃²⁻(aq)",
      type: "Dissolution equilibrium",
      conditions: "Aqueous, 25 °C",
      explanation: "Very sparingly soluble; Ksp = 3.3 × 10⁻⁹ governs carbonate concentration in saturated solutions.",
      products: "Calcium and carbonate ions",
      applications: "Water hardness, scaling in pipes, ocean chemistry",
      relatedConcepts: ["Solubility product", "Equilibrium", "Precipitation"],
    },
  ],

  relatedFormulas: ["CaO", "CO2", "HCl", "CaCl2", "MgCO3"],
  comparisonNote: "CaCO₃ (100.09 g/mol) decomposes at ~840 °C; MgCO₃ (84.31 g/mol) decomposes at lower temperature (~540 °C) due to smaller cation polarizing carbonate less.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of CaCO₃.",
      answer: "40.08 + 12.01 + 3(16.00) = 100.09 g/mol",
    },
    {
      question: "What mass of CO₂ from complete decomposition of 50.0 g CaCO₃?",
      answer: "50.0 g ÷ 100.09 g/mol = 0.500 mol CaCO₃ → 0.500 mol CO₂ = 22.0 g",
      hint: "1:1 mole ratio; CO₂ molar mass 44.01 g/mol.",
    },
    {
      question: "How many mL of 2.0 M HCl to react with 10.0 g CaCO₃?",
      answer: "10.0 g ÷ 100.09 g/mol = 0.100 mol CaCO₃; needs 0.200 mol HCl; 0.200/2.0 = 0.100 L = 100 mL",
    },
    {
      question: "Why do antacid tablets fizz in water?",
      answer: "Some formulations include carbonate/bicarbonate that react with acid; pure CaCO₃ fizzes with stomach HCl, not necessarily in plain water.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of calcium carbonate?",
      answer: "100.09 g/mol.",
    },
    {
      question: "Is calcium carbonate the same as limestone?",
      answer: "Limestone is a rock composed primarily of CaCO₃, often with impurities.",
    },
    {
      question: "Why does acid dissolve CaCO₃?",
      answer: "Acid protonates CO₃²⁻, converting it to H₂CO₃ which decomposes to CO₂ and H₂O, removing carbonate from equilibrium and dissolving more solid.",
    },
    {
      question: "What is the antacid mechanism of CaCO₃?",
      answer: "CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂ neutralizes stomach acid, raising pH.",
    },
    {
      question: "What are calcite and aragonite?",
      answer: "Polymorphs of CaCO₃ — same formula and molar mass, different crystal structures and densities.",
    },
  ],

  references: [
    { label: "USGS", note: "Limestone and crushed stone statistics" },
    { label: "NIST Chemistry WebBook", note: "CaCO₃ thermodynamic data" },
    { label: "PubChem CID 10112", note: "Calcium carbonate identifiers" },
  ],
};
