import type { CompoundProfile } from "@/lib/chemistry/types";

export const butane: CompoundProfile = {
  slug: "molar-mass-of-butane",
  formula: "C4H10",
  name: "Butane",
  iupacName: "Butane",
  commonNames: ["n-Butane", "Butane", "Liquefied petroleum gas (component)"],
  aliases: ["C₄H₁₀", "LPG (component)", "R-600 (refrigerant, n-butane)"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "gas"],
  casNumber: "106-97-8",
  pubchemCid: "7843",
  smiles: "CCCC",
  inchi: "InChI=1S/C4H10/c1-3-4-2/h3-4H2,1-2H3",
  exactMass: 58.078250,
  featured: true,
  popular: true,

  overview: `Butane (C₄H₁₀) is a four-carbon alkane with a molar mass of 58.12 g/mol, existing as a colorless, easily liquefied gas at room temperature and pressure. It belongs to the homologous series of saturated hydrocarbons and is the smallest alkane to exhibit structural isomerism among simple chain compounds: the four carbons and ten hydrogens can be arranged either as a straight chain (n-butane) or as a branched chain with a central carbon bonded to three methyl groups (isobutane, or 2-methylpropane). Both isomers share the identical molecular formula and molar mass but differ in physical properties such as boiling point (n-butane: −0.5 °C; isobutane: −11.7 °C) and combustion characteristics, making butane a foundational teaching example for constitutional isomerism in introductory organic chemistry.

Butane's low boiling point combined with its ease of liquefaction under modest pressure makes it central to liquefied petroleum gas (LPG), typically a mixture of butane and propane compressed into a liquid for storage and transport. This liquefaction behavior allows butane to be stored compactly in small canisters and cartridges — used in disposable lighters, portable camping stoves, and aerosol propellants — where the liquid slowly vaporizes to sustain a steady gas flow as pressure is released, a practical everyday illustration of vapor–liquid equilibrium.

As a fuel, butane combusts readily and completely with sufficient oxygen to release substantial energy, making it valuable for portable heating and cooking applications where propane's higher vapor pressure would require heavier, more robust storage vessels. Increasingly, butane (particularly isobutane, R-600a) also serves as an environmentally preferable refrigerant, replacing older ozone-depleting and high-global-warming-potential chlorofluorocarbons and hydrofluorocarbons in household refrigerators and some air conditioning systems.`,

  formulaExplanation: `The formula C₄H₁₀ follows the general alkane formula CₙH₂ₙ₊₂ for n = 4, confirming a fully saturated hydrocarbon with no double bonds, triple bonds, or rings. This formula corresponds to two distinct structural isomers: n-butane (CH₃CH₂CH₂CH₃, a straight chain) and isobutane (CH₃CH(CH₃)CH₃, a branched chain with a central tertiary carbon), both satisfying the same molecular formula and identical molar mass of 58.12 g/mol.`,

  chemicalProfile: `Butane undergoes the characteristic reactions of saturated alkanes: complete combustion to CO₂ and water when oxygen is abundant, incomplete combustion producing CO and soot when oxygen is limited, and free-radical halogenation under UV light or heat, though this is rarely exploited industrially for butane specifically. Its chemical inertness under ordinary conditions (no reactive functional groups) is typical of alkanes, meaning nearly all of its practical importance derives from its physical behavior as a fuel and refrigerant rather than from distinctive chemical reactivity.`,

  uniqueTopics: [
    {
      heading: "Structural isomerism: n-butane vs. isobutane",
      body: "Butane is the smallest alkane with more than one possible structural (constitutional) isomer, making it the classic textbook introduction to this concept. n-Butane is a straight four-carbon chain, while isobutane (2-methylpropane) branches at the second carbon, placing three methyl groups around a central carbon. Despite sharing the identical formula C₄H₁₀ and molar mass 58.12 g/mol, the two isomers have measurably different boiling points, melting points, and even octane ratings as fuel components, illustrating how molecular shape — not just atomic composition — governs physical and chemical behavior.",
    },
    {
      heading: "Liquefied petroleum gas (LPG) and vapor-liquid storage",
      body: "Butane's boiling point near 0 °C means it liquefies under only modest pressure at room temperature, allowing it to be stored compactly as a liquid in canisters that release usable fuel gas as the liquid slowly vaporizes when pressure is relieved through a valve. LPG mixtures of butane and propane are calibrated by season and region — more propane in colder climates, since propane's much lower boiling point (−42 °C) keeps vapor pressure adequate even in freezing conditions, while butane-rich blends suffice in milder climates and indoor uses like lighters and camping cartridges.",
    },
    {
      heading: "Lighters, camping fuel, and portable cartridges",
      body: "Disposable butane lighters and portable camping stove cartridges exploit the same liquid–vapor equilibrium that defines LPG: liquid butane inside a sealed, translucent reservoir vaporizes continuously to feed a small, controllable flame at the valve. Because butane's vapor pressure at room temperature is low enough to be safely contained in thin-walled plastic lighter bodies (unlike propane, which requires sturdier metal cylinders), it is the fuel of choice for these small-scale, everyday combustion devices.",
    },
    {
      heading: "Refrigerant use: isobutane (R-600a) as an eco-friendly alternative",
      body: "Isobutane, marketed under the refrigerant designation R-600a, has become an increasingly common replacement for older refrigerants like R-134a and the ozone-depleting CFCs/HCFCs of the 20th century, because it has zero ozone depletion potential and a very low global warming potential compared to fluorinated alternatives. Its flammability requires careful system design (small refrigerant charges, sealed compressor units) but modern household refrigerators worldwide increasingly use R-600a as part of the broader shift toward natural, low-impact refrigerants.",
    },
    {
      heading: "Combustion energy and fuel gas comparisons",
      body: "Butane's complete combustion (2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O) releases substantial energy per mole, and its energy density per unit volume in liquefied form makes it attractive for portable applications despite a somewhat lower energy content per kilogram than propane. Comparing the combustion stoichiometry, energy density, and vapor pressure of butane, propane, and methane is a common exam exercise illustrating how chain length in the alkane series systematically affects fuel properties.",
    },
  ],

  applications: {
    industrial: [
      "Component of liquefied petroleum gas (LPG) for heating and cooking fuel",
      "Refrigerant (isobutane, R-600a) in household refrigeration systems",
      "Aerosol propellant in consumer spray products",
      "Petrochemical feedstock for isobutylene and other downstream chemicals",
    ],
    laboratory: [
      "Reference compound for teaching structural isomerism in organic chemistry",
      "Fuel gas for some laboratory torches and portable heating equipment",
      "Model alkane for combustion stoichiometry and thermochemistry problems",
    ],
    environmental: "As an LPG component, butane combustion produces CO₂ and, if incomplete, CO and particulates; as a refrigerant it offers a much lower global-warming-potential alternative to many fluorinated refrigerants, despite its flammability trade-off.",
    biological: "Not a significant biological compound; inhalation abuse of butane (as in some aerosol or lighter-fluid misuse) can cause serious cardiac and respiratory harm, a recognized substance-abuse hazard distinct from its intended uses.",
  },

  preparation: `Butane is obtained primarily from natural gas processing and petroleum refining, where it is separated from other light hydrocarbons by fractional distillation based on differing boiling points. It is not typically synthesized in a laboratory setting given its ready availability as a natural petroleum fraction.`,

  production: `Global butane supply comes from natural gas liquids (NGL) extraction and refinery gas streams during petroleum processing; it is separated, purified, and either blended into LPG or further processed into isobutane for chemical and refrigerant uses.`,

  storage: `Store liquefied butane in approved pressure-rated cylinders or cartridges, away from heat, sparks, and open flame. Keep storage areas well ventilated, since butane is denser than air and can accumulate in low-lying spaces if leaked.`,

  handling: `Handle only in well-ventilated areas away from ignition sources; butane is highly flammable and can form explosive vapor-air mixtures. Avoid inhaling vapors directly, as concentrated inhalation is a recognized cause of sudden cardiac and respiratory harm.`,

  safety: {
    summary: "Highly flammable gas that can form explosive mixtures with air; low acute toxicity by normal exposure routes, but concentrated inhalation abuse poses serious cardiac and asphyxiation risk.",
    hazards: [
      "Highly flammable gas; forms explosive vapor-air mixtures (1.8–8.4% by volume)",
      "Displaces oxygen in enclosed spaces, posing asphyxiation risk at high concentrations",
      "Can cause frostbite from rapid expansion/evaporation on skin contact with liquid",
      "Serious cardiac arrhythmia risk from deliberate concentrated inhalation (solvent/gas abuse)",
    ],
    classification: "GHS: Flam. Gas 1, Compressed Gas",
  },

  interestingFacts: [
    "n-Butane and isobutane have the same molecular formula and molar mass but different boiling points, a clean demonstration of how molecular shape affects physical properties.",
    "The translucent reservoir of a butane lighter lets you see liquid butane sloshing inside — a visible reminder that the fuel is stored as a liquid, not purely as a gas.",
    "Isobutane refrigerant (R-600a) has a global warming potential of roughly 3, dramatically lower than older refrigerants with values in the thousands.",
    "Butane is one of the most common propellants in aerosol spray cans due to its low cost and appropriate vapor pressure.",
  ],

  history: `Butane was first isolated and characterized in the 19th century as chemists systematically studied the homologous series of alkanes derived from petroleum and natural gas. Its practical importance grew dramatically in the 20th century with the development of liquefied petroleum gas technology, enabling convenient bottled and cartridge fuel for heating, cooking, and portable lighting applications worldwide.`,

  discovery: "Characterized during 19th-century systematic study of petroleum-derived alkanes; its practical LPG and lighter-fuel applications developed through 20th-century industrial and consumer product innovation.",

  examNotes: [
    "Molar mass C₄H₁₀ = 4(12.01) + 10(1.008) = 58.12 g/mol.",
    "General alkane formula CₙH₂ₙ₊₂ applies: for n = 4, 2(4)+2 = 10 hydrogens, confirming C₄H₁₀.",
    "Combustion: 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O — note the fractional O₂ coefficient issue resolved by doubling the equation.",
    "Butane has exactly two structural isomers (n-butane and isobutane); pentane (C₅H₁₂) already has three, illustrating rapidly increasing isomer count with chain length.",
  ],

  commonMistakes: [
    "Forgetting that n-butane and isobutane share the same molar mass despite having different physical properties — molar mass depends only on formula, not on structure.",
    "Balancing the combustion equation with fractional oxygen coefficients instead of doubling all coefficients to reach whole numbers.",
    "Confusing butane (C₄H₁₀, a gas/liquid fuel) with butanol (C₄H₉OH, an alcohol) — very different functional groups and properties despite similar names.",
  ],

  studentTips: [
    "Draw both n-butane and isobutane structures side by side whenever discussing butane to reinforce the isomerism concept visually.",
    "Remember the general alkane formula CₙH₂ₙ₊₂ to quickly verify or derive butane's formula and molar mass.",
    "Link butane's liquefaction behavior to vapor pressure and boiling point concepts when explaining why it can be stored as a liquid in an unpressurized-feeling lighter.",
  ],

  misconceptions: [
    "Butane gas in a lighter is not actually all gas inside the reservoir — most of the visible liquid is butane in its liquid phase, with only a small vapor headspace.",
    "Isobutane and n-butane are not the same compound just because they share a formula — they are distinct constitutional isomers with different properties.",
    "Butane refrigerants are not banned or unsafe by default; with proper system design for their flammability, they are an increasingly favored low-global-warming-potential option.",
  ],

  physical: {
    appearance: "Colorless gas; liquefies readily under modest pressure or refrigeration",
    color: "Colorless",
    odor: "Odorless (pure); commercial LPG has an added odorant like ethyl mercaptan for leak detection",
    stateAtSTP: "Gas (n-butane boils at −0.5 °C, close to room temperature)",
    density: "2.48 g/L at 25 °C (gas); 0.573 g/cm³ (liquid at boiling point)",
    meltingPoint: "−138.3 °C (n-butane)",
    boilingPoint: "−0.5 °C (n-butane); −11.7 °C (isobutane)",
    flashPoint: "−60 °C",
    solubility: "Poorly soluble in water (~61 mg/L at 20 °C); miscible with most organic solvents",
    crystalStructure: "Not applicable at standard conditions (gas)",
  },

  chemical: {
    classification: "Saturated hydrocarbon (alkane)",
    polarity: "Nonpolar",
    molecularGeometry: "Tetrahedral at each carbon (zig-zag chain conformation)",
    oxidationStates: "C: −3 to −2 (varies by position), H: +1",
    chemicalFamily: "Alkanes (C4 chain, includes n-butane and isobutane isomers)",
  },

  reactions: [
    {
      equation: "2 C₄H₁₀(g) + 13 O₂(g) → 8 CO₂(g) + 10 H₂O(l)",
      type: "Combustion",
      conditions: "Ignition, sufficient oxygen supply",
      explanation: "Complete combustion of butane releases substantial heat and forms carbon dioxide and water, the basis of its widespread use as a portable fuel gas.",
      products: "Carbon dioxide and water",
      applications: "Lighter and camp stove fuel combustion, LPG heating and cooking",
      relatedConcepts: ["Combustion stoichiometry", "Alkane combustion", "Thermochemistry"],
    },
    {
      equation: "2 C₄H₁₀(g) + 9 O₂(g) → 8 CO(g) + 10 H₂O(l)",
      type: "Incomplete combustion",
      conditions: "Limited oxygen supply",
      explanation: "With insufficient oxygen, butane combustion produces toxic carbon monoxide instead of carbon dioxide, a safety concern for poorly ventilated butane heaters and stoves.",
      products: "Carbon monoxide and water",
      applications: "Illustrating combustion safety, ventilation requirements for portable gas appliances",
      relatedConcepts: ["Incomplete combustion", "Carbon monoxide hazards", "Stoichiometry"],
    },
    {
      equation: "n-C₄H₁₀ ⇌ isobutane (2-methylpropane)",
      type: "Catalytic isomerization",
      conditions: "AlCl₃ catalyst or acidic zeolite, moderate heat",
      explanation: "n-Butane can be catalytically rearranged into its branched isomer isobutane, an industrially important step for producing higher-octane fuel components and isobutylene precursors.",
      products: "Isobutane (2-methylpropane)",
      applications: "Petroleum refining, octane-boosting feedstock preparation",
      relatedConcepts: ["Isomerization", "Catalysis", "Petroleum refining"],
    },
    {
      equation: "C₄H₁₀ + Cl₂ → C₄H₉Cl + HCl (with UV light)",
      type: "Free-radical halogenation",
      conditions: "UV light or heat initiation",
      explanation: "Under radical-forming conditions, chlorine substitutes for a hydrogen on the butane chain, illustrating typical alkane substitution chemistry, though this is a minor industrial pathway for butane specifically.",
      products: "Chlorobutane isomers and hydrogen chloride",
      applications: "Teaching free-radical halogenation mechanisms in organic chemistry",
      relatedConcepts: ["Free-radical mechanisms", "Halogenation", "Alkane reactivity"],
    },
  ],

  relatedFormulas: ["C3H8", "CH4", "C6H14", "C8H18", "C6H6"],
  comparisonNote: "Butane (C₄H₁₀, 58.12 g/mol) sits between propane (C₃H₈, 44.10 g/mol) and pentane (C₅H₁₂, 72.15 g/mol) in the alkane series, with propane preferred for cold-climate LPG due to its lower boiling point and butane favored for lighters and mild-climate cartridges where lower vapor pressure is an advantage.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of butane, C₄H₁₀.",
      answer: "4(12.01) + 10(1.008) = 58.12 g/mol",
    },
    {
      question: "How many moles of CO₂ are produced from the complete combustion of 116 g of butane?",
      answer: "116 g ÷ 58.12 g/mol = 2.0 mol C₄H₁₀; from 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O, 2.0 mol butane gives 8.0 mol CO₂",
    },
    {
      question: "What is the general formula for alkanes, and how does it confirm butane's formula?",
      answer: "CₙH₂ₙ₊₂; for n = 4, hydrogens = 2(4) + 2 = 10, confirming C₄H₁₀.",
    },
    {
      question: "Why do n-butane and isobutane have the same molar mass but different boiling points?",
      answer: "Molar mass depends only on atomic composition (same for both isomers), but boiling point depends on molecular shape and intermolecular forces — the more compact, branched isobutane has weaker van der Waals interactions and a lower boiling point than the straight-chain n-butane.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of butane?",
      answer: "58.12 g/mol, calculated as 4 × 12.01 (C) + 10 × 1.008 (H).",
    },
    {
      question: "What is the difference between n-butane and isobutane?",
      answer: "They are structural isomers with the same formula C₄H₁₀ but different carbon skeletons — n-butane is a straight chain, isobutane is branched — giving them different boiling points and properties.",
    },
    {
      question: "Why is butane used in lighters?",
      answer: "Its boiling point near 0 °C means it liquefies under modest pressure, allowing compact liquid storage in a lighter that vaporizes steadily to fuel a small controlled flame.",
    },
    {
      question: "Is butane the same as propane?",
      answer: "No. Propane (C₃H₈) has three carbons and a lower boiling point, making it better suited to cold-weather LPG use, while butane (C₄H₁₀) has four carbons and is preferred for lighters and mild-climate cartridges.",
    },
    {
      question: "Is butane bad for the environment as a refrigerant?",
      answer: "Isobutane (R-600a) has a very low global warming potential and no ozone depletion potential, making it more environmentally favorable than many older fluorinated refrigerants, though its flammability requires careful system design.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of n-butane and isobutane" },
    { label: "PubChem CID 7843", note: "Structural and safety identifiers" },
    { label: "U.S. EIA", note: "Liquefied petroleum gas production and use statistics" },
  ],
};
