import type { CompoundProfile } from "@/lib/chemistry/types";

export const water: CompoundProfile = {
  slug: "molar-mass-of-water",
  formula: "H2O",
  name: "Water",
  iupacName: "Oxidane",
  commonNames: ["Water", "Dihydrogen monoxide", "Aqua"],
  aliases: ["H₂O", "DHO", "Heavy water (D2O variant)"],
  category: "inorganic",
  categories: ["inorganic", "oxide"],
  casNumber: "7732-18-5",
  pubchemCid: "962",
  smiles: "O",
  inchi: "InChI=1S/H2O/h1H2",
  exactMass: 18.010564684,
  featured: true,
  popular: true,

  overview: `Water (H₂O) is the most abundant compound on Earth's surface and the universal solvent in biological and chemical systems. Its molar mass of 18.015 g/mol arises from two hydrogen atoms (1.008 g/mol each) bonded to one oxygen atom (16.00 g/mol). Unlike most substances, liquid water reaches maximum density at 4 °C rather than at its freezing point, a consequence of hydrogen-bond-driven tetrahedral ordering that expands the crystal lattice when ice forms.

The bent molecular geometry (104.5° bond angle) and high electronegativity difference between O and H give water a dipole moment of 1.85 D, enabling extensive hydrogen bonding. This network explains water's unusually high boiling point (100 °C) compared with analogues like H₂S (−60 °C) and its ability to dissolve ionic and polar substances through ion–dipole and dipole–dipole interactions.

Water's behavior cannot be understood from its simple three-atom formula alone; nearly every one of its "anomalous" properties — high heat capacity, high surface tension, expansion on freezing, and unusually wide liquid range — traces back to the cooperative hydrogen-bonded network that forms and reforms roughly a trillion times per second in liquid water. This network gives water an outsized role in planetary climate regulation, biological chemistry, and geology, from buffering coastal temperatures to enabling the folding of proteins and the flow of glaciers.`,

  formulaExplanation: `The formula H₂O indicates a 2:1 ratio of hydrogen to oxygen atoms. In Lewis structure terms, oxygen contributes six valence electrons and each hydrogen one, forming two O–H sigma bonds and two lone pairs on oxygen. The empirical formula matches the molecular formula because water does not form a larger repeating unit under normal conditions.`,

  chemicalProfile: `Water is amphoteric: it autoionizes to H₃O⁺ and OH⁻ (Kw = 1.0 × 10⁻¹⁴ at 25 °C) and reacts with both strong acids and bases. As a nucleophile and protic solvent, it participates in hydrolysis, hydration of alkenes, and acid–base equilibria. Its pH scale is defined by the activity of H₃O⁺ in aqueous solution.`,

  uniqueTopics: [
    {
      heading: "Hydrogen bonding: the network behind water's anomalies",
      body: "Each water molecule can donate two hydrogen bonds (through its O–H bonds) and accept two more (through its two lone pairs on oxygen), allowing an extended, dynamic tetrahedral network in which bonds constantly break and reform on picosecond timescales. This cooperative network is responsible for water's unusually high boiling point, high specific heat capacity (4.18 J/g·°C, among the highest of any common liquid), high surface tension, and high heat of vaporization — properties that make water an exceptional thermal buffer for climate, oceans, and living cells alike.",
    },
    {
      heading: "The density anomaly: why water is densest at 4 °C, not 0 °C",
      body: "Unlike almost every other liquid, water does not reach its maximum density at its freezing point. As liquid water cools toward 0 °C, competing effects emerge: normal thermal contraction increases density, while increasing hydrogen-bond ordering pulls molecules into a more open, lower-density local structure. These effects balance at approximately 4 °C, the point of maximum density; below that temperature, the ordering effect dominates and density decreases until the water freezes into an even less dense solid. This anomaly is why lakes stratify thermally in winter, with the densest water sinking to the bottom near 4 °C while colder water and ice remain near the surface.",
    },
    {
      heading: "Ice structure: hexagonal lattices and why ice floats",
      body: "Ordinary ice (ice Ih) adopts a hexagonal crystal lattice in which each oxygen atom is tetrahedrally hydrogen-bonded to four neighboring water molecules, creating an open, cage-like structure with substantial empty space between molecules. This open lattice makes ice roughly 9% less dense than liquid water at 0 °C, which is why ice floats — a seemingly simple fact with major ecological consequences, since floating ice insulates the liquid water beneath it, allowing aquatic ecosystems to survive winter freezes that would otherwise be lethal if ice sank and lakes froze from the bottom up.",
    },
    {
      heading: "The water cycle: a planetary-scale phase-change engine",
      body: "Water is the only common substance that exists naturally in all three states (solid, liquid, gas) across Earth's surface temperature range, powering the hydrologic cycle through solar-driven evaporation, atmospheric transport, condensation into clouds, and precipitation back to the surface. This continuous phase-cycling redistributes an estimated 500,000 cubic kilometers of water annually, drives weather patterns, shapes landscapes through erosion and glaciation, and links atmospheric, oceanic, and terrestrial chemistry into a single interconnected system.",
    },
    {
      heading: "Electrolysis and the discovery of water's composition",
      body: "Passing direct current through water (with a small amount of electrolyte to carry current) splits it into hydrogen gas at the cathode and oxygen gas at the anode in a 2:1 volume ratio, directly reflecting the 2:1 atomic ratio in H₂O. This decomposition, first demonstrated in the late 18th century, was historically decisive evidence that water is a compound rather than an element, and it remains industrially important today as a method of producing high-purity hydrogen for fuel cells and chemical synthesis, particularly when powered by renewable electricity as part of 'green hydrogen' production strategies.",
    },
    {
      heading: "The universal solvent: why water dissolves so much",
      body: "Water's high polarity and hydrogen-bonding capacity allow it to stabilize both ions (through ion–dipole interactions that surround cations and anions with oriented water molecules) and polar molecules (through hydrogen bonding and dipole–dipole attraction), earning it the informal title of 'universal solvent.' This is not a literal claim that water dissolves everything — nonpolar substances like oils remain immiscible — but no other common liquid dissolves such a broad and chemically diverse range of ionic salts, acids, bases, sugars, and gases, which is precisely why water is the medium of choice for biochemistry, geochemistry, and most laboratory and industrial chemical processes.",
    },
    {
      heading: "Heavy water: deuterium oxide and isotopic water chemistry",
      body: "Heavy water (D₂O) replaces water's ordinary hydrogen (protium, ¹H) with deuterium (²H), a stable hydrogen isotope with an extra neutron, giving D₂O a molar mass of about 20.03 g/mol versus 18.02 g/mol for ordinary water. Despite being chemically very similar to H₂O, heavy water has measurably different physical properties (higher melting and boiling points, higher density) and is used industrially as a neutron moderator in certain nuclear reactor designs (CANDU reactors) because deuterium absorbs neutrons far less readily than protium, allowing sustained nuclear fission with natural, unenriched uranium fuel.",
    },
  ],

  applications: {
    industrial: [
      "Steam generation in power plants and industrial heating",
      "Coolant in nuclear reactors and manufacturing processes",
      "Solvent and reaction medium in chemical synthesis",
      "Textile dyeing, paper pulping, and food processing",
    ],
    laboratory: [
      "Universal solvent for titrations, extractions, and crystallizations",
      "Calibration standard for density and refractive index measurements",
      "Eluent in HPLC and buffer preparation for biochemistry",
    ],
    environmental: "Central to the hydrologic cycle, weather patterns, and aquatic ecosystems; water quality parameters (pH, dissolved oxygen, hardness) are primary environmental indicators.",
    biological: "Constitutes roughly 60–70% of the human body; mediates enzymatic catalysis, nutrient transport, temperature regulation via evaporative cooling, and cellular osmotic balance.",
  },

  preparation: `Pure laboratory water is produced by distillation, deionization through ion-exchange resins, or reverse osmosis. Type I ultrapure water for analytical work requires additional UV oxidation and 0.22 µm filtration to remove organics and particulates.`,

  production: `Natural water is purified on an industrial scale through coagulation, sedimentation, filtration, and chlorination or ozonation for municipal supply.`,

  storage: `Store in clean, inert containers (glass, HDPE, or stainless steel). Avoid prolonged contact with metals that corrode or leach ions. Laboratory ultrapure water should be used promptly; CO₂ absorption lowers pH over time.`,

  handling: `Liquid water presents minimal acute hazard. Hot water and steam cause thermal burns. In laboratory settings, use appropriate PPE when handling water under pressure or at extreme temperatures.`,

  safety: {
    summary: "Water is non-toxic and essential for life, but associated hazards include drowning, scalding from hot water or steam, and ice-related slips.",
    hazards: [
      "Thermal burns from steam or boiling water",
      "Drowning in large volumes",
      "Structural damage from ice expansion in confined spaces",
    ],
    classification: "Not classified as hazardous under GHS for the pure substance",
  },

  interestingFacts: [
    "Ice floats because its density (0.917 g/cm³) is lower than liquid water at 0 °C, protecting aquatic life in frozen lakes.",
    "Supercooled water can remain liquid below 0 °C if nucleation sites for ice crystals are absent.",
    "The molar mass of water (18 g/mol) is used as a reference in mass spectrometry calibration.",
    "Each water molecule can form up to four hydrogen bonds in a tetrahedral arrangement.",
    "Heavy water (D₂O) is denser than ordinary water and was historically used as a strategic material in early nuclear weapons research due to its role as a neutron moderator.",
  ],

  history: `Ancient Greek philosophers debated whether water was one of the fundamental elements (Thales, ~600 BCE). Lavoisier demonstrated in 1783 that water is a compound of hydrogen and oxygen, not an element, by synthesizing it from the two gases. The molecular formula H₂O was established through electrolysis studies in the early 19th century.`,

  discovery: "Henry Cavendish synthesized water in 1781 by exploding hydrogen with oxygen; Lavoisier named hydrogen and confirmed water's composition.",

  examNotes: [
    "Molar mass of H₂O = (2 × 1.008) + 16.00 = 18.016 g/mol (often rounded to 18.02 g/mol).",
    "One mole of water contains 6.022 × 10²³ molecules and 2 moles of H atoms per mole of water.",
    "Use the density anomaly (max density at 4 °C) as evidence for hydrogen bonding in written answers.",
    "Distinguish molar mass (g/mol) from molecular mass (u or Da); numerically equal but different units.",
    "Electrolysis produces H₂ and O₂ in a 2:1 volume ratio, directly reflecting the atomic ratio in the formula.",
  ],

  commonMistakes: [
    "Using atomic mass of O (16) without adding hydrogen masses.",
    "Confusing molar mass with density (1 g/mL at 4 °C is not the molar mass).",
    "Forgetting that ice has a different density, so 1 mole of ice occupies more volume than 1 mole of liquid water at room temperature.",
    "Assuming heavy water (D₂O) has the same molar mass as ordinary water — deuterium's extra neutron adds roughly 2 g/mol per hydrogen replaced.",
  ],

  studentTips: [
    "Draw the bent shape and label lone pairs to remember why water is polar.",
    "Link the 18 g/mol molar mass to Avogadro: 18 g of water = 1 mol = 6.02 × 10²³ molecules.",
    "Compare boiling points of H₂O, H₂S, and H₂Se to illustrate hydrogen bonding in exams.",
    "Use the 2:1 volume ratio of H₂ to O₂ from electrolysis as a quick way to recall water's atomic composition.",
  ],

  misconceptions: [
    "Water is not H₂O₂ (hydrogen peroxide); the similar names cause confusion.",
    "Pure water is not a good conductor; dissolved ions carry current.",
    "The formula H₂O does not imply water exists as H₂ and O₂ molecules mixed together.",
    "Water is not literally a 'universal' solvent in the sense of dissolving everything — nonpolar substances like oils and fats remain immiscible with it.",
  ],

  physical: {
    appearance: "Colorless, transparent liquid (solid: white crystalline ice; gas: invisible vapor)",
    color: "Colorless",
    odor: "Odorless (pure)",
    stateAtSTP: "Liquid (melting point 0 °C, boiling point 100 °C at 1 atm)",
    density: "1.000 g/cm³ at 4 °C; 0.997 g/cm³ at 25 °C",
    meltingPoint: "0.00 °C (273.15 K)",
    boilingPoint: "100.00 °C (373.15 K) at 1 atm",
    solubility: "Water is the solvent; many substances dissolve in it (\"like dissolves like\" for polar/ionic solutes)",
    crystalStructure: "Hexagonal ice (Ih) with tetrahedral hydrogen-bond network",
  },

  chemical: {
    classification: "Inorganic oxide / protic solvent",
    polarity: "Highly polar (dipole moment 1.85 D)",
    molecularGeometry: "Bent (angular)",
    bondAngle: "104.5°",
    oxidationStates: "H: +1, O: −2",
    chemicalFamily: "Group 16 hydride (chalcogen hydride)",
  },

  reactions: [
    {
      equation: "2 H₂O(l) → 2 H₂(g) + O₂(g)",
      type: "Electrolysis (decomposition)",
      conditions: "Direct current through water with electrolyte (e.g., dilute H₂SO₄); inert electrodes",
      explanation: "Electrical energy overcomes the Gibbs energy of formation, splitting water into hydrogen at the cathode and oxygen at the anode.",
      products: "Hydrogen gas and oxygen gas in a 2:1 volume ratio",
      applications: "Hydrogen production, electrolyzer technology, classroom demonstration of water composition",
      relatedConcepts: ["Electrolysis", "Redox", "Faraday's laws"],
    },
    {
      equation: "H₂O(l) + CO₂(g) ⇌ H₂CO₃(aq)",
      type: "Hydration / acid formation",
      conditions: "Aqueous solution, ambient temperature and pressure",
      explanation: "Carbon dioxide dissolves in water and hydrates to form carbonic acid, which governs the pH of rainwater and blood bicarbonate buffering.",
      products: "Carbonic acid (H₂CO₃) in equilibrium with HCO₃⁻ and CO₂(aq)",
      applications: "Carbonated beverages, ocean carbon cycle, respiratory physiology",
      relatedConcepts: ["Equilibrium", "Weak acids", "Henry's law"],
    },
    {
      equation: "Na(s) + 2 H₂O(l) → 2 NaOH(aq) + H₂(g) + heat",
      type: "Single displacement (highly exothermic)",
      conditions: "Room temperature; reaction is vigorous",
      explanation: "Sodium reduces water, producing sodium hydroxide and hydrogen gas; enough heat may ignite the hydrogen.",
      products: "Sodium hydroxide solution and hydrogen gas",
      applications: "Demonstration of alkali metal reactivity; industrial caution in moisture-sensitive processes",
      relatedConcepts: ["Activity series", "Exothermic reactions", "Alkali metals"],
    },
    {
      equation: "H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)",
      type: "Autoionization",
      conditions: "Pure water at 25 °C",
      explanation: "Water self-ionizes to a small extent; Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ defines neutral pH = 7.",
      products: "Hydronium and hydroxide ions (extremely low concentration)",
      applications: "Foundation of pH scale and acid–base chemistry",
      relatedConcepts: ["Ion product of water", "pH", "Amphoteric behavior"],
    },
    {
      equation: "CaO(s) + H₂O(l) → Ca(OH)₂(aq) + heat",
      type: "Hydration (exothermic combination)",
      conditions: "Room temperature; vigorous with lump quicklime",
      explanation: "Calcium oxide (quicklime) reacts exothermically with water to form calcium hydroxide (slaked lime), a reaction central to cement and mortar chemistry.",
      products: "Calcium hydroxide (slaked lime)",
      applications: "Construction lime processing, water treatment, agriculture (soil pH adjustment)",
      relatedConcepts: ["Hydration reactions", "Exothermic processes", "Basic oxides"],
    },
  ],

  relatedFormulas: ["H2O2", "D2O", "H2S", "CO2", "NaCl"],
  comparisonNote: "Compared with H₂S (molar mass 34.08 g/mol), water has a much higher boiling point due to stronger hydrogen bonding despite lower molecular weight; compared with heavy water D₂O (20.03 g/mol), ordinary water is lighter but chemically almost identical, differing mainly in reaction rates and physical constants due to the kinetic isotope effect.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of water (H₂O) using standard atomic masses.",
      answer: "M = 2(1.008) + 16.00 = 18.016 g/mol ≈ 18.02 g/mol",
      hint: "Multiply each element's subscript by its atomic mass from the periodic table.",
    },
    {
      question: "How many moles of hydrogen atoms are in 90 g of water?",
      answer: "90 g ÷ 18.02 g/mol = 5.0 mol H₂O; each mole has 2 mol H, so 10.0 mol H atoms",
      hint: "Find moles of water first, then use the 2:1 H:O ratio in the formula.",
    },
    {
      question: "Why does ice float on liquid water?",
      answer: "Hydrogen bonds in ice create an open hexagonal lattice with lower density (0.917 g/cm³) than liquid water at 0 °C.",
    },
    {
      question: "What volume does 1 mole of liquid water occupy at 4 °C?",
      answer: "Approximately 18 mL, since density ≈ 1.000 g/cm³ at 4 °C and 1 mol = 18 g",
    },
    {
      question: "What is the molar mass of heavy water, D₂O, and how does it differ from ordinary water?",
      answer: "About 20.03 g/mol, versus 18.02 g/mol for H₂O, because each deuterium atom (~2.014 u) is roughly twice as heavy as protium (~1.008 u).",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of water?",
      answer: "18.02 g/mol, calculated as 2 × 1.008 (hydrogen) + 16.00 (oxygen) = 18.016 g/mol.",
    },
    {
      question: "Is water an element or a compound?",
      answer: "Water is a compound composed of hydrogen and oxygen chemically bonded in a fixed 2:1 ratio.",
    },
    {
      question: "Why is water a good solvent?",
      answer: "Its polarity and ability to form hydrogen bonds stabilize ions and polar molecules, lowering the energy of dissolution.",
    },
    {
      question: "Does pure water conduct electricity?",
      answer: "Pure water is a very poor conductor; trace dissolved ions (salts, acids) enable measurable conductivity.",
    },
    {
      question: "How does heavy water (D₂O) differ in molar mass?",
      answer: "D₂O has a molar mass of about 20.03 g/mol because deuterium (²H) has mass ~2.014 u versus ~1.008 u for protium.",
    },
    {
      question: "Why does water have such a high boiling point compared to similar molecules?",
      answer: "Extensive hydrogen bonding between water molecules requires significantly more energy to overcome during vaporization than the weaker intermolecular forces in analogues like H₂S.",
    },
  ],

  references: [
    { label: "IUPAC", note: "Standard atomic weights; oxidane as systematic name for H₂O" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of water" },
    { label: "PubChem CID 962", note: "Structural identifiers and compound metadata" },
  ],
};
