import type { CompoundProfile } from "@/lib/chemistry/types";

export const ammonia: CompoundProfile = {
  slug: "molar-mass-of-ammonia",
  formula: "NH3",
  name: "Ammonia",
  iupacName: "Ammonia",
  commonNames: ["Ammonia", "Anhydrous ammonia", "Spirits of hartshorn"],
  aliases: ["NH₃", "R-717 (refrigerant)"],
  category: "base",
  categories: ["base", "inorganic", "gas"],
  casNumber: "7664-41-7",
  pubchemCid: "222",
  smiles: "N",
  inchi: "InChI=1S/H3N/h1H3",
  exactMass: 17.026549101,
  featured: true,
  popular: true,

  overview: `Ammonia (NH₃) is a colorless gas with molar mass 17.03 g/mol (N 14.01 + 3 × 1.008), characterized by a pungent odor detectable below 1 ppm. Its trigonal pyramidal geometry (107° bond angle) and lone pair on nitrogen make it a Brønsted base — it accepts protons to form ammonium ion NH₄⁺ — and a Lewis base that forms coordination complexes with transition metals.

The Haber–Bosch process converts N₂ and H₂ to NH₃ at 400–500 °C and 150–300 atm over iron catalyst, consuming roughly 1–2% of global energy production. Fixed nitrogen from ammonia synthesis supports half the world's food supply through fertilizer (urea, ammonium nitrate, ammonium phosphate). NH₃ also serves as a hydrogen carrier in emerging clean-energy schemes because it liquefies at manageable pressure (~10 bar at room temperature) unlike H₂.`,

  formulaExplanation: `NH₃ contains nitrogen with three N–H single bonds and one lone pair. The molecular formula shows 1:3 N:H ratio. In aqueous solution, a small fraction protonates: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (Kb = 1.8 × 10⁻⁵), making ammonia a weak base.`,

  chemicalProfile: `NH₃ is a weak base and reducing agent. It burns in oxygen with a yellow-green flame: 4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O. With excess O₂ and Pt catalyst it oxidizes to NO (Ostwald process first step). It forms ammines with Cu²⁺ (deep blue [Cu(NH₃)₄]²⁺), Ag⁺ (Tollens' reagent), and other metal ions. Liquid ammonia is a protic solvent analogous to water but with lower dielectric constant.`,

  uniqueTopics: [
    {
      heading: "The Haber–Bosch Process and Modern Agriculture",
      body: "Fritz Haber and Carl Bosch's industrial synthesis of ammonia from atmospheric N₂ and H₂ (N₂ + 3 H₂ ⇌ 2 NH₃, Fe catalyst, high pressure/temperature) is often cited as one of the most consequential inventions in history: it broke the natural limit on fixed nitrogen available for fertilizer, enabling the population growth of the 20th and 21st centuries, but at the cost of consuming roughly 1–2% of global energy production and a large share of anthropogenic reactive nitrogen entering ecosystems.",
    },
    {
      heading: "Ammonia as a Weak Base vs. Strong Bases",
      body: "Unlike NaOH or KOH, which are already ionic hydroxides that dissolve to release OH⁻ directly, NH₃ must react with water (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, Kb = 1.8 × 10⁻⁵) to generate a comparatively small hydroxide concentration, making ammonia solutions far less caustic per mole than strong alkali solutions — an important distinction for handling household ammonia cleaners safely.",
    },
    {
      heading: "Ammonia vs. the Ammonium Ion (NH₄⁺)",
      body: "Ammonia (NH₃, a neutral molecule and Brønsted base) and ammonium (NH₄⁺, its protonated conjugate acid) are frequently confused but behave very differently: NH₃ is volatile and basic, while NH₄⁺ salts are generally non-volatile, water-soluble, and mildly acidic in solution — a distinction critical to understanding fertilizer chemistry, soil nitrogen cycling, and acid-base equilibria.",
    },
    {
      heading: "Household Cleaning Chemistry and Hazards",
      body: "Dilute aqueous ammonia is a common household glass and surface cleaner because it cuts through grease and leaves a streak-free finish without the corrosivity of stronger alkalis, but mixing ammonia-based cleaners with chlorine bleach is dangerous: it generates toxic chloramine gases, a well-documented cause of household chemical poisoning incidents.",
    },
    {
      heading: "The Nitrogen Cycle and Fertilizer Nitrogen",
      body: "Synthetic ammonia is converted into urea, ammonium nitrate, and ammonium phosphate fertilizers that feed roughly half the world's population by mass-balance estimates, but excess nitrogen not taken up by crops leaches as nitrate or volatilizes, contributing to eutrophication of waterways and nitrous oxide greenhouse gas emissions from soil microbial processes.",
    },
  ],

  applications: {
    industrial: [
      "Nitrogen fertilizer production (Haber–Bosch → urea, ammonium salts)",
      "Refrigerant R-717 in industrial cold storage",
      "Nylon precursor (adipic acid via nitric acid from NH₃ oxidation)",
      "Scrubbing acid gases in power plants (forms ammonium sulfate)",
    ],
    laboratory: [
      "Qualitative analysis complex ion formation (Cu²⁺, Ag⁺)",
      "Source of NH₄⁺ for buffer solutions",
      "Organic synthesis (amidation, reductive amination)",
    ],
    environmental: "Agricultural runoff of ammonium fertilizers causes eutrophication; atmospheric NH₃ contributes to PM₂.₅ aerosol formation.",
    biological: "Microbial nitrogen fixation converts N₂ to NH₃ biologically; urea cycle converts toxic NH₃ to urea in mammals for excretion.",
  },

  preparation: `Haber–Bosch: N₂ + 3 H₂ ⇌ 2 NH₃. Laboratory: warm ammonium chloride with NaOH: NH₄Cl + NaOH → NH₃ + NaCl + H₂O.`,

  production: `Global ammonia production exceeds 180 million tonnes annually, primarily from natural gas-derived hydrogen. Green ammonia projects use renewable electrolytic hydrogen.`,

  storage: `Store anhydrous NH₃ in pressure vessels designed for its vapor pressure (~8.6 atm at 20 °C). Aqueous ammonia (ammonium hydroxide) in vented containers away from acids and oxidizers.`,

  handling: `Highly irritating and toxic by inhalation. Use respiratory protection in enclosed spaces. Anhydrous ammonia causes severe frostbite on contact (auto-refrigeration upon release). Work downwind and with emergency water showers accessible.`,

  safety: {
    summary: "Toxic by inhalation; corrosive to respiratory tract. Anhydrous form causes cold burns. Flammable in narrow concentration range (15–28% in air).",
    hazards: [
      "Asphyxiation and pulmonary edema at high concentrations",
      "Frostbite from liquefied gas contact",
      "Explosive mixtures with air in confined spaces",
      "Violent reaction with strong oxidizers and halogens",
    ],
    classification: "GHS: Acute Tox. 3 (inhalation), Skin Corr. 1B",
  },

  interestingFacts: [
    "NH₃ molar mass 17.03 g/mol is lighter than air (avg ~29 g/mol) — ammonia gas rises.",
    "Household 'ammonia' is ~5–10% NH₃ in water, not anhydrous gas.",
    "Fish excrete NH₃ directly; mammals convert it to less toxic urea.",
    "Liquid NH₃ dissolves alkali metals to form conductive blue solutions (solvated electrons).",
  ],

  history: `Priestley prepared ammonia from sal ammoniac (1774). Haber patented synthetic ammonia synthesis (1908); Bosch scaled it industrially (1913), earning Nobel Prizes for both. The process transformed agriculture and warfare (explosives from nitric acid).`,

  discovery: "Joseph Priestley, 1774 — collected ammonia gas from heating ammonium chloride with lime.",

  examNotes: [
    "Molar mass NH₃ = 14.01 + 3(1.008) = 17.03 g/mol.",
    "Haber process: N₂ + 3 H₂ ⇌ 2 NH₃ (high P, moderate T, Fe catalyst).",
    "Weak base: pKb = 4.75; 0.1 M NH₃ has pH ≈ 11.1.",
    "Complex ion: Cu²⁺ + 4 NH₃ → [Cu(NH₃)₄]²⁺ (deep blue, used in qualitative analysis).",
  ],

  commonMistakes: [
    "Calling NH₃ a strong base — it is weak (Kb = 1.8 × 10⁻⁵).",
    "Confusing NH₃ (17.03) with NH₄⁺ (18.04) molar mass in stoichiometry.",
    "Writing NH₄OH as a stable molecular species — it is better described as NH₃(aq) + H₂O equilibrium.",
  ],

  studentTips: [
    "Link 17 g/mol to being roughly half of air's average molar mass.",
    "Draw trigonal pyramid and lone pair for Lewis base questions.",
    "For fertilizer stoichiometry, trace Haber → HNO₃ or urea pathways.",
  ],

  misconceptions: [
    "Smelling ammonia is dangerous at high concentrations — the odor warns at low levels but anhydrous releases can overwhelm quickly.",
    "Ammonium (NH₄⁺) is not a base — it is a weak acid (conjugate of NH₃).",
    "All nitrogen in fertilizer is immediately plant-available — conversion to nitrate by soil bacteria takes time.",
  ],

  physical: {
    appearance: "Colorless gas or liquefied clear liquid (under pressure)",
    color: "Colorless",
    odor: "Pungent, characteristic (sharp, irritating)",
    stateAtSTP: "Gas",
    density: "0.771 g/L at STP (gas); 0.682 g/mL (liquid at −33 °C)",
    meltingPoint: "−77.73 °C",
    boilingPoint: "−33.34 °C",
    solubility: "540 g/L water at 20 °C (highly soluble — 'ammonium hydroxide')",
    crystalStructure: "Cubic (solid NH₃, hydrogen-bonded)",
  },

  chemical: {
    classification: "Weak base / pnictogen hydride",
    basicity: "Weak base (Kb = 1.8 × 10⁻⁵, pKb = 4.75)",
    polarity: "Polar (dipole moment 1.47 D)",
    molecularGeometry: "Trigonal pyramidal",
    bondAngle: "107.8°",
    oxidationStates: "N: −3, H: +1",
    chemicalFamily: "Group 15 hydride (nitrogen trihydride)",
  },

  reactions: [
    {
      equation: "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)",
      type: "Haber–Bosch synthesis",
      conditions: "400–500 °C, 150–300 atm, Fe catalyst with K₂O/Al₂O₃ promoters",
      explanation: "Exothermic equilibrium (ΔH = −92 kJ/mol); high pressure favors products; catalyst allows reasonable rate at moderate temperature.",
      products: "Ammonia",
      applications: "Global fertilizer and chemical industry foundation",
      relatedConcepts: ["Equilibrium", "Catalysis", "Industrial chemistry"],
    },
    {
      equation: "NH₃(aq) + HCl(aq) → NH₄Cl(aq)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, room temperature",
      explanation: "Ammonia accepts proton from strong acid forming ammonium chloride — white smoke when HCl and NH₃ vapors meet.",
      products: "Ammonium chloride",
      applications: "Demonstration of gas-phase acid–base reaction, smoke screens",
      relatedConcepts: ["Brønsted acids/bases", "Salt formation"],
    },
    {
      equation: "4 NH₃(g) + 5 O₂(g) → 4 NO(g) + 6 H₂O(g)",
      type: "Catalytic oxidation (Ostwald step 1)",
      conditions: "Pt-Rh gauze, 800–900 °C",
      explanation: "Partial oxidation of ammonia to nitric oxide, first step in nitric acid manufacture.",
      products: "Nitric oxide and water",
      applications: "Nitric acid and explosives precursor production",
      relatedConcepts: ["Redox", "Catalysis", "Industrial oxidation"],
    },
    {
      equation: "Cu²⁺(aq) + 4 NH₃(aq) → [Cu(NH₃)₄]²⁺(aq)",
      type: "Complex ion formation",
      conditions: "Excess ammonia, aqueous",
      explanation: "Ammonia acts as Lewis base, displacing water from copper(II) aqua complex to form deep blue tetraamminecopper(II).",
      products: "Tetraamminecopper(II) ion",
      applications: "Qualitative analysis for Cu²⁺, understanding coordination chemistry",
      relatedConcepts: ["Coordination compounds", "Lewis bases", "Complex ions"],
    },
  ],

  relatedFormulas: ["NH4Cl", "HNO3", "N2", "H2O", "NaOH"],
  comparisonNote: "NH₃ (17.03 g/mol) is a weak base and gas at STP; NaOH (40.00 g/mol) is a strong base and solid — both are nitrogen-containing but chemically distinct.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of NH₃.",
      answer: "14.01 + 3(1.008) = 17.03 g/mol",
    },
    {
      question: "How many moles of H₂ needed to produce 34 g of NH₃ via Haber process?",
      answer: "34 g ÷ 17.03 g/mol = 2.0 mol NH₃; needs 3 × 2.0 = 6.0 mol H₂",
      hint: "N₂ + 3 H₂ → 2 NH₃ — 3 mol H₂ per 2 mol NH₃.",
    },
    {
      question: "Why is high pressure used in the Haber process?",
      answer: "The reaction N₂ + 3 H₂ ⇌ 2 NH₃ decreases gas moles (4 → 2); high pressure shifts equilibrium toward NH₃ per Le Chatelier.",
    },
    {
      question: "Is ammonia a strong or weak base?",
      answer: "Weak base — Kb = 1.8 × 10⁻⁵; partial protonation in water.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of ammonia?",
      answer: "17.03 g/mol.",
    },
    {
      question: "What is the Haber process?",
      answer: "Industrial synthesis of NH₃ from N₂ and H₂ using iron catalyst at high pressure.",
    },
    {
      question: "Why does ammonia smell strong?",
      answer: "NH₃ is volatile and highly soluble in aqueous mucous membranes, triggering irritation receptors at very low concentrations.",
    },
    {
      question: "What is ammonium hydroxide?",
      answer: "Aqueous ammonia solution — NH₃ dissolved in water, not a discrete NH₄OH molecule.",
    },
    {
      question: "How is ammonia used in fertilizers?",
      answer: "Converted to urea, ammonium nitrate, or ammonium phosphate — all provide plant-available nitrogen.",
    },
  ],

  references: [
    { label: "FAO", note: "Global nitrogen fertilizer statistics" },
    { label: "NIST Chemistry WebBook", note: "NH₃ thermophysical data" },
    { label: "PubChem CID 222", note: "Ammonia compound data" },
  ],
};
