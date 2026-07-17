import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumChloride: CompoundProfile = {
  slug: "molar-mass-of-sodium-chloride",
  formula: "NaCl",
  name: "Sodium Chloride",
  iupacName: "Sodium chloride",
  commonNames: ["Table salt", "Rock salt", "Halite"],
  aliases: ["NaCl", "Common salt", "Saline"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7647-14-5",
  pubchemCid: "5234",
  smiles: "[Na+].[Cl-]",
  inchi: "InChI=1S/ClH.Na/h1H;/q;+1/p-1",
  exactMass: 57.976532713,
  featured: true,
  popular: true,

  overview: `Sodium chloride (NaCl) is an ionic compound with molar mass 58.44 g/mol, composed of Na⁺ (22.99 g/mol) and Cl⁻ (35.45 g/mol) in a 1:1 ratio. It crystallizes in a face-centered cubic lattice where each ion is octahedrally coordinated by six counterions, giving the familiar cubic cleavage of halite mineral samples.

NaCl is essential for human physiology: sodium ions regulate extracellular fluid volume and nerve action potentials, while chloride accompanies sodium as the dominant electrolyte in blood plasma (~145 mM Na⁺, ~110 mM Cl⁻). The compound dissolves readily in water with ΔH_soln slightly endothermic (+3.9 kJ/mol) because the entropy gain from ion dispersal outweighs the lattice energy cost. Seawater averages about 3.5% NaCl by mass, and vast underground deposits of evaporite minerals record ancient enclosed seas that dried through geological time.`,

  formulaExplanation: `The formula NaCl represents a 1:1 ionic compound with no discrete molecules in the solid state — the formula unit is the simplest whole-number ratio of ions in the crystal. In aqueous solution, NaCl dissociates completely into Na⁺(aq) and Cl⁻(aq), behaving as a strong electrolyte.`,

  chemicalProfile: `NaCl is chemically stable under normal conditions. It does not react with water but dissolves physically. Electrolysis of molten NaCl (Downs cell) or brine produces chlorine, hydrogen, and sodium hydroxide — the chlor-alkali process backbone. Adding AgNO₃ to chloride solutions precipitates AgCl, a definitive qualitative test. Concentrated sulfuric acid reacts with NaCl to release HCl gas.`,

  uniqueTopics: [
    {
      heading: "Halite: the mineral form and its geological origins",
      body: "Naturally occurring NaCl is known mineralogically as halite, forming through the evaporation of seawater or saline lake water in enclosed basins over geological time. Massive halite deposits, sometimes hundreds of meters thick, record ancient inland seas that dried completely, and salt domes formed by the slow plastic flow of buried halite under overlying sediment are important geological structures both for salt mining and, in petroleum geology, as traps that can concentrate migrating oil and gas beneath their impermeable cap rock.",
    },
    {
      heading: "Saline solutions in medicine and physiology",
      body: "Isotonic saline (0.9% w/v NaCl in water) matches the osmotic pressure of human blood plasma, making it the standard base fluid for intravenous therapy, wound irrigation, and contact lens solutions because it neither swells nor shrinks red blood cells or tissue cells through osmotic imbalance. Hypertonic (higher concentration) and hypotonic (lower concentration) saline solutions are used deliberately in specific medical contexts — for example, hypertonic saline to reduce brain swelling in some neurological emergencies — illustrating how precisely calibrated NaCl concentration itself becomes a therapeutic variable.",
    },
    {
      heading: "Road de-icing chemistry and environmental trade-offs",
      body: "Rock salt de-icing works by freezing-point depression: dissolved Na⁺ and Cl⁻ ions disrupt the ability of water molecules to organize into an ice lattice, lowering the freezing point below 0 °C (down to a eutectic minimum near −21 °C at optimal concentration). While cost-effective and widely used, chronic road salting elevates chloride concentrations in nearby soil, groundwater, and surface water, damages roadside vegetation, and accelerates corrosion of vehicles, bridges, and reinforced concrete infrastructure — trade-offs that have driven interest in alternative or supplementary de-icers like CaCl₂ and various organic-based products.",
    },
    {
      heading: "Chlor-alkali process: three products from salt and water",
      body: "The chlor-alkali process electrolyzes brine (concentrated aqueous NaCl) to simultaneously produce three industrially essential chemicals: chlorine gas at the anode, hydrogen gas at the cathode, and sodium hydroxide accumulating in solution. Modern membrane-cell technology keeps the anode and cathode compartments separated by an ion-selective membrane that allows only Na⁺ to pass, preventing chlorine and hydrogen from recombining and yielding high-purity NaOH — a process refinement that replaced older, more energy-intensive and environmentally problematic mercury-cell and diaphragm-cell technologies through the late 20th century.",
    },
    {
      heading: "Food preservation: how salt inhibits microbial spoilage",
      body: "Salt has preserved food for millennia by osmotically drawing water out of microbial cells through the same principle that makes concentrated salt solutions hypertonic to living tissue; most spoilage bacteria cannot survive or reproduce in low-water-activity environments created by sufficient salt concentration. This mechanism underlies traditional preservation methods like salt-curing meat and fish, brining vegetables for pickles, and salting as a component (alongside sugar, smoke, and acid) of many traditional food preservation techniques that predate refrigeration by thousands of years.",
    },
  ],

  applications: {
    industrial: [
      "Chlor-alkali process feedstock (Cl₂, NaOH, H₂ production from brine)",
      "De-icing roads and walkways (lowers freezing point of water)",
      "Food preservation and seasoning",
      "Raw material for sodium metal and sodium carbonate (Solvay process)",
    ],
    laboratory: [
      "Preparation of standard saline solutions (0.9% w/v isotonic)",
      "Demonstration of ionic bonding and electrolysis",
      "Source of chloride ion in qualitative analysis",
    ],
    environmental: "Road salt runoff elevates chloride in streams and groundwater; salt aerosols from ocean spray influence coastal corrosion and cloud condensation nuclei.",
    biological: "Dietary sodium and chloride requirements; isotonic saline (0.9% NaCl) used in IV fluids; salt balance critical for kidney function and blood pressure regulation.",
  },

  preparation: `Evaporate seawater or brine from salt lakes (solar evaporation). Mine rock salt from underground halite deposits. Purify by recrystallization from water for reagent-grade material.`,

  production: `World production exceeds 280 million tonnes annually from mining and evaporation. Major producers include China, the United States, and India.`,

  storage: `Store in dry conditions; NaCl is hygroscopic only in very humid air above saturated solutions. Keep food-grade salt separate from industrial grades to avoid contamination.`,

  handling: `Low hazard for pure NaCl. Avoid eye contact with concentrated salt solutions (irritation). Industrial dust may irritate respiratory tract.`,

  safety: {
    summary: "Generally recognized as safe for food use; excessive dietary intake linked to hypertension in susceptible individuals.",
    hazards: [
      "Eye irritation from concentrated solutions",
      "Corrosive effect on vehicles and infrastructure from road salt",
      "High sodium intake health concerns (dietary, not acute toxicity)",
    ],
    classification: "Not classified as hazardous (pure substance)",
  },

  interestingFacts: [
    "The molar mass 58.44 g/mol means 58.44 g of NaCl contains Avogadro's number of Na⁺ and Cl⁻ ion pairs in the dissolved state.",
    "Halite crystals can be cleaved into perfect cubes due to the cubic crystal structure.",
    "Salt was so valuable in antiquity that Roman soldiers were sometimes paid in salt (\"salary\" derives from sal).",
    "Adding salt to ice lowers the freezing point — used in ice cream makers and de-icing.",
  ],

  history: `Salt has been harvested for at least 8,000 years. The Hallstatt salt mine in Austria dates to the Bronze Age. Mahatma Gandhi's 1930 Salt March protested British monopoly on Indian salt production. Understanding NaCl as an ionic compound advanced with Arrhenius's ionic dissociation theory (1887).`,

  discovery: "Known since prehistoric times; ionic nature clarified by Faraday's electrolysis experiments and Arrhenius's dissociation theory.",

  examNotes: [
    "Molar mass NaCl = 22.99 + 35.45 = 58.44 g/mol.",
    "NaCl is a strong electrolyte: 1 mol dissolved → 1 mol Na⁺ + 1 mol Cl⁻ (2 mol particles for colligative property calculations, i = 2 ideally).",
    "Precipitation: Ag⁺ + Cl⁻ → AgCl(s) white, insoluble in dilute HNO₃.",
    "Molten NaCl electrolysis: cathode Na, anode Cl₂ (industrial Downs cell at ~801 °C melting point).",
  ],

  commonMistakes: [
    "Writing NaCl₂ or Na₂Cl (incorrect stoichiometry — must be 1:1).",
    "Forgetting van't Hoff factor i = 2 for freezing point depression calculations.",
    "Confusing molar mass of NaCl (58.44) with molar mass of Cl₂ gas (70.90).",
  ],

  studentTips: [
    "Round 58.44 to 58.5 for quick calculations in exams.",
    "Draw the Na⁺ and Cl⁻ cubic lattice for ionic bonding questions.",
    "Link to chlor-alkali: 2 NaCl + 2 H₂O → Cl₂ + H₂ + 2 NaOH (electrolysis of brine).",
  ],

  misconceptions: [
    "NaCl molecules do not exist in solid salt — it is a lattice of ions.",
    "Pure NaCl does not conduct electricity; molten or aqueous NaCl does.",
    "Sea salt and table salt are chemically both NaCl; differences are trace minerals and processing.",
  ],

  physical: {
    appearance: "White crystalline solid (cubic crystals)",
    color: "White (pure); may appear off-white with impurities",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.17 g/cm³ (solid, 25 °C)",
    meltingPoint: "801 °C",
    boilingPoint: "1,413 °C",
    solubility: "359 g/L water at 25 °C (slightly increases with temperature)",
    crystalStructure: "Face-centered cubic (rock salt / halite structure)",
  },

  chemical: {
    classification: "Ionic salt / alkali metal halide",
    polarity: "Ionic (highly polar bonds, no molecular dipole in crystal)",
    oxidationStates: "Na: +1, Cl: −1",
    chemicalFamily: "Group 1 halide (alkali metal chloride)",
  },

  reactions: [
    {
      equation: "NaCl(aq) + AgNO₃(aq) → AgCl(s) + NaNO₃(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Silver ion combines with chloride to form insoluble silver chloride, a standard test for Cl⁻.",
      products: "Silver chloride precipitate (white, curdling in light)",
      applications: "Qualitative analysis for chloride, gravimetric chloride determination",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Qualitative analysis"],
    },
    {
      equation: "2 NaCl(l) → 2 Na(l) + Cl₂(g)",
      type: "Electrolysis (molten)",
      conditions: "Molten NaCl at ~801 °C, Downs cell",
      explanation: "Electrical energy decomposes molten sodium chloride into sodium metal at the cathode and chlorine gas at the anode.",
      products: "Sodium metal and chlorine gas",
      applications: "Industrial sodium and chlorine production",
      relatedConcepts: ["Electrolysis", "Ionic compounds", "Redox"],
    },
    {
      equation: "2 NaCl + 2 H₂O → Cl₂ + H₂ + 2 NaOH",
      type: "Electrolysis (aqueous brine, chlor-alkali)",
      conditions: "Diaphragm or membrane cell, industrial scale",
      explanation: "Electrolysis of brine produces chlorine at anode, hydrogen at cathode, and NaOH in solution — three valuable products from salt and water.",
      products: "Chlorine, hydrogen, sodium hydroxide",
      applications: "Chlor-alkali industry, PVC production, bleach manufacture",
      relatedConcepts: ["Electrolysis", "Industrial chemistry", "Redox selectivity"],
    },
    {
      equation: "NaCl(s) + H₂SO₄(conc) → NaHSO₄ + HCl(g)",
      type: "Acid–salt (non-volatile acid displacement)",
      conditions: "Concentrated H₂SO₄, heated",
      explanation: "Non-volatile sulfuric acid displaces volatile HCl from NaCl, a method to generate HCl gas in the laboratory.",
      products: "Sodium bisulfate and hydrogen chloride gas",
      applications: "Laboratory HCl preparation, demonstrating volatility differences",
      relatedConcepts: ["Acid displacement", "Gas evolution", "Volatility"],
    },
  ],

  relatedFormulas: ["NaOH", "HCl", "Cl2", "KCl", "CaCl2"],
  comparisonNote: "NaCl (58.44 g/mol) and KCl (74.55 g/mol) share halite structure and similar chemistry; KCl is used as a low-sodium salt substitute but tastes bitter.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of NaCl.",
      answer: "22.99 + 35.45 = 58.44 g/mol",
    },
    {
      question: "How many grams of NaCl are needed to prepare 500 mL of 0.200 M solution?",
      answer: "0.200 mol/L × 0.500 L = 0.100 mol; 0.100 × 58.44 = 5.84 g",
    },
    {
      question: "What is the van't Hoff factor for NaCl in dilute aqueous solution?",
      answer: "i ≈ 2, because each formula unit dissociates into Na⁺ and Cl⁻",
    },
    {
      question: "Why does salt melt ice on roads?",
      answer: "Dissolved ions lower the freezing point of water (colligative property), melting ice below 0 °C.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium chloride?",
      answer: "58.44 g/mol.",
    },
    {
      question: "Is NaCl covalent or ionic?",
      answer: "Ionic — electron transfer from Na to Cl forms Na⁺ and Cl⁻ held in a crystal lattice.",
    },
    {
      question: "Why is 0.9% NaCl used medically?",
      answer: "It is isotonic with blood plasma, minimizing osmotic damage to cells during IV infusion.",
    },
    {
      question: "What ions does NaCl form in water?",
      answer: "Na⁺(aq) and Cl⁻(aq), dissociating completely as a strong electrolyte.",
    },
    {
      question: "How is table salt different from sea salt chemically?",
      answer: "Both are primarily NaCl; sea salt may contain trace minerals but the molar mass and formula are the same.",
    },
  ],

  references: [
    { label: "USGS", note: "Salt production and halite deposit statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties of NaCl" },
    { label: "PubChem CID 5234", note: "Compound identifiers" },
  ],
};
