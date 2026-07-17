import type { CompoundProfile } from "@/lib/chemistry/types";

export const copperSulfate: CompoundProfile = {
  slug: "molar-mass-of-copper-sulfate",
  formula: "CuSO4",
  name: "Copper(II) Sulfate",
  iupacName: "Copper(II) sulfate",
  commonNames: ["Copper sulfate", "Blue vitriol", "Cupric sulfate"],
  aliases: ["CuSO₄", "Copper sulphate", "Blue stone"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7758-98-7",
  pubchemCid: "24462",
  smiles: "[Cu+2].[O-]S(=O)(=O)[O-]",
  inchi: "InChI=1S/Cu.H2O4S/c;1-5(2,3)4/h;(H2,1,2,3,4)/q+2;/p-2",
  exactMass: 159.916727416,
  featured: true,
  popular: true,

  overview: `Copper(II) sulfate (CuSO₄) is an ionic compound with molar mass 159.62 g/mol (Cu 63.55 + S 32.07 + 4 × 16.00) in its anhydrous form. The familiar pentahydrate CuSO₄·5H₂O (blue vitriol) has molar mass 249.69 g/mol and forms brilliant blue triclinic crystals where four water molecules coordinate to Cu²⁺ in square planar geometry and one water is hydrogen-bonded in the lattice.

CuSO₄(aq) is the classic solution for the Hofmann voltameter electrolysis demonstration and for electroplating copper. The deep blue [Cu(H₂O)₆]²⁺ hexaaquacopper(II) ion gives aqueous solutions their color; adding ammonia displaces water ligands to form intense blue-violet [Cu(NH₃)₄(H₂O)₂]²⁺ (tetraamminecopper(II)). Anhydrous white CuSO₄ rehydrates exothermically — a test for water used in desiccators and organic chemistry.`,

  formulaExplanation: `CuSO₄ contains Cu²⁺ and SO₄²⁻ in 1:1 ratio. The pentahydrate formula CuSO₄·5H₂O indicates five water molecules per formula unit — four are ligands, one is lattice water. Anhydrous vs. hydrated forms have different molar masses and colors but same Cu:SO₄ ratio.`,

  chemicalProfile: `CuSO₄ dissolves in water giving blue solutions. It undergoes displacement with iron: Fe + CuSO₄ → FeSO₄ + Cu (copper plates out). With ammonia, deep blue complex forms. With NaOH, pale blue Cu(OH)₂ precipitates, turning brown (CuO) on heating. With KI, produces white CuI and brown I₂. Anhydrous form is Lewis acid toward water.`,

  uniqueTopics: [
    {
      heading: "The hydrate molar mass teaching point",
      body: "Copper sulfate is one of the most common compounds used to teach water-of-crystallization calculations because its color change is so visually dramatic: anhydrous CuSO₄ (159.62 g/mol) is white, while the pentahydrate CuSO₄·5H₂O (249.69 g/mol) is deep blue. Heating a known mass of blue crystals to constant white mass lets students directly measure the 90.10 g/mol contributed by five water molecules, making the hydrate/anhydrate mass difference a hands-on, visually confirmable experiment rather than an abstract calculation.",
    },
    {
      heading: "Bordeaux mixture and agricultural fungicide chemistry",
      body: "Copper(II) sulfate mixed with hydrated lime (calcium hydroxide) forms Bordeaux mixture, one of the oldest and most widely used agricultural fungicides, protecting grapevines, potatoes, and other crops from fungal blight since its accidental discovery in 1885 by French botanist Pierre-Marie-Alexis Millardet. The mixture releases Cu²⁺ ions slowly, which disrupt fungal spore enzymes without excessive phytotoxicity to the treated plants at proper dosing.",
    },
    {
      heading: "Electroplating and electrorefining electrolyte chemistry",
      body: "Aqueous CuSO₄ serves as the standard electrolyte for copper electroplating and electrorefining, where Cu²⁺ ions are reduced and deposited as pure metallic copper at the cathode while impure copper dissolves as Cu²⁺ at the anode, a process that purifies over 99% of the world's refined copper and deposits decorative or protective copper coatings in electronics and jewelry manufacturing.",
    },
    {
      heading: "The distinctive blue color and d-d electronic transitions",
      body: "The intense blue of dissolved copper sulfate arises from the hexaaquacopper(II) ion, [Cu(H₂O)₆]²⁺, in which the d⁹ electron configuration of Cu²⁺ allows visible-light-driven d-d electronic transitions that absorb red-orange wavelengths and transmit blue — a concrete, memorable example of transition metal coordination chemistry and crystal field theory that instructors frequently use to introduce the color of transition metal complexes.",
    },
  ],

  applications: {
    industrial: [
      "Agricultural fungicide and herbicide (Bordeaux mixture with lime)",
      "Electroplating and copper refining electrolyte",
      "Algae control in swimming pools and reservoirs",
      "Textile mordant in dyeing",
    ],
    laboratory: [
      "Electrolysis demonstrations (Hofmann voltameter)",
      "Analytical reagent for moisture detection (anhydrous → blue)",
      "Source of Cu²⁺ for coordination chemistry",
      "Fehling's solution component (with sodium tartrate)",
    ],
    environmental: "Copper toxicity to aquatic organisms limits agricultural runoff; used in bioremediation of algae blooms at controlled doses.",
    biological: "Essential trace copper nutrient in small amounts; toxic at higher concentrations — Wilson's disease involves copper accumulation.",
  },

  preparation: `React copper(II) oxide or copper metal with hot dilute sulfuric acid: CuO + H₂SO₄ → CuSO₄ + H₂O. Crystallize pentahydrate from solution. Anhydrous form by heating pentahydrate to ~250 °C (above 150 °C loses water stepwise).`,

  production: `Industrial production from copper scrap or ore leaching with H₂SO₄, followed by crystallization or electrowinning.`,

  storage: `Store pentahydrate in closed containers — slowly effloresces in dry air. Anhydrous form in sealed desiccator — hygroscopic. Avoid contact with iron (displacement reaction).`,

  handling: `Harmful if swallowed; irritant to eyes and skin. Wash hands after handling agricultural formulations. Do not dispose of large quantities in waterways.`,

  safety: {
    summary: "Harmful if ingested; irritant to eyes and respiratory tract. Aquatic toxin. Anhydrous form causes thermal burn on hydration with skin moisture.",
    hazards: [
      "Harmful if swallowed (copper toxicity)",
      "Eye and skin irritation",
      "Environmental hazard to aquatic life",
      "Exothermic hydration of anhydrous form",
    ],
    classification: "GHS: Acute Tox. 4 (oral), Aquatic Acute 1",
  },

  interestingFacts: [
    "Anhydrous CuSO₄ (159.62 g/mol) is white; pentahydrate (249.69 g/mol) is blue — dramatic color change on hydration.",
    "The five water molecules in CuSO₄·5H₂O contribute 90.10 g/mol to the hydrate molar mass.",
    "Bordeaux mixture (CuSO₄ + Ca(OH)₂) has been used as fungicide since 1885 in French vineyards.",
    "Copper sulfate crystals grow into characteristic oblique rhombic shapes in saturated solutions.",
  ],

  history: `Known since antiquity as blue vitriol from roasting copper ores with sulfur. Used medicinally (emetic) and in alchemy. Modern chemistry established hydration state and [Cu(H₂O)₆]²⁺ structure through spectroscopy and crystallography.`,

  discovery: "Known to ancient civilizations; systematic study of pentahydrate composition by Proust and others in 18th–19th centuries.",

  examNotes: [
    "Molar mass anhydrous CuSO₄ = 63.55 + 32.07 + 4(16.00) = 159.62 g/mol.",
    "Molar mass pentahydrate CuSO₄·5H₂O = 159.62 + 5(18.016) = 249.69 g/mol.",
    "Electrolysis: cathode Cu deposited, anode possibly O₂ (from water) with inert electrodes.",
    "Fe + CuSO₄ → FeSO₄ + Cu (single displacement, calculate moles Cu produced).",
  ],

  commonMistakes: [
    "Using anhydrous molar mass (159.62) when given pentahydrate mass in problems.",
    "Forgetting to include 5 H₂O in hydrate molar mass calculations.",
    "Assuming CuSO₄ solution is green — it's blue from [Cu(H₂O)₆]²⁺.",
  ],

  studentTips: [
    "Hydrate formula: add 5 × 18 = 90 to 160 ≈ 250 g/mol for pentahydrate.",
    "Water of crystallization: heat 250 g hydrate → lose 90 g water → 160 g anhydrous.",
    "Link blue color to d-d transitions in Cu²⁺ (d⁹ system).",
  ],

  misconceptions: [
    "All copper compounds are blue — CuO is black, Cu₂O is red.",
    "CuSO₄ and copper metal have same toxicity route — sulfate salt has different bioavailability.",
    "The pentahydrate formula means water is inside as liquid — it's coordinated in crystal lattice.",
  ],

  physical: {
    appearance: "Blue crystals (pentahydrate); white/off-white powder (anhydrous)",
    color: "Blue (pentahydrate); white (anhydrous)",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.28 g/cm³ (pentahydrate); 3.60 g/cm³ (anhydrous)",
    meltingPoint: "110 °C (pentahydrate, loses water); 650 °C decomposes (anhydrous)",
    boilingPoint: "Decomposes before boiling",
    solubility: "320 g/L water at 20 °C (pentahydrate); increases with temperature",
    crystalStructure: "Triclinic (pentahydrate); orthorhombic (anhydrous)",
  },

  chemical: {
    classification: "Transition metal sulfate salt",
    polarity: "Ionic",
    oxidationStates: "Cu: +2, S: +6, O: −2",
    chemicalFamily: "Copper(II) salts / transition metal sulfates",
  },

  reactions: [
    {
      equation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
      type: "Single displacement",
      conditions: "Aqueous, room temperature",
      explanation: "Iron, more reactive than copper, displaces Cu²⁺ from solution; copper metal plates out with characteristic red-brown color.",
      products: "Iron(II) sulfate and copper metal",
      applications: "Demonstrating activity series, copper recovery",
      relatedConcepts: ["Activity series", "Redox", "Displacement reactions"],
    },
    {
      equation: "CuSO₄(aq) + 2 NaOH(aq) → Cu(OH)₂(s) + Na₂SO₄(aq)",
      type: "Precipitation",
      conditions: "Aqueous, dilute NaOH",
      explanation: "Pale blue Cu(OH)₂ gel precipitates; on heating decomposes to black CuO.",
      products: "Copper(II) hydroxide",
      applications: "Qualitative test for Cu²⁺, preparation of CuO",
      relatedConcepts: ["Precipitation", "Transition metal hydroxides"],
    },
    {
      equation: "CuSO₄(aq) + 4 NH₃(aq) → [Cu(NH₃)₄]SO₄(aq)",
      type: "Complex ion formation",
      conditions: "Excess concentrated ammonia",
      explanation: "Deep blue-violet tetraamminecopper(II) complex forms as NH₃ replaces H₂O ligands — used in qualitative analysis.",
      products: "Tetraamminecopper(II) sulfate",
      applications: "Qualitative analysis for Cu²⁺, coordination chemistry",
      relatedConcepts: ["Complex ions", "Ligand exchange", "Coordination chemistry"],
    },
    {
      equation: "CuSO₄·5H₂O(s) → CuSO₄(s) + 5 H₂O(g)",
      type: "Dehydration (thermal)",
      conditions: "Heat to 150–250 °C",
      explanation: "Water of crystallization driven off; white anhydrous CuSO₄ forms; rehydration restores blue color — water test.",
      products: "Anhydrous copper(II) sulfate and water vapor",
      applications: "Moisture detection, desiccation, teaching hydrates",
      relatedConcepts: ["Hydrates", "Water of crystallization", "Thermal analysis"],
    },
  ],

  relatedFormulas: ["CuSO4·5H2O", "H2SO4", "CuO", "FeSO4", "CuCl2"],
  comparisonNote: "Anhydrous CuSO₄ (159.62 g/mol) vs. pentahydrate (249.69 g/mol) — same copper content per mole of Cu, but different total mass and color.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of anhydrous CuSO₄.",
      answer: "63.55 + 32.07 + 4(16.00) = 159.62 g/mol",
    },
    {
      question: "What is the molar mass of CuSO₄·5H₂O?",
      answer: "159.62 + 5(18.016) = 249.69 g/mol",
    },
    {
      question: "What mass of copper from 159.6 g CuSO₄ reacted with excess Fe?",
      answer: "159.6 g ≈ 1 mol CuSO₄ → 1 mol Cu = 63.55 g",
    },
    {
      question: "What percent by mass is water in CuSO₄·5H₂O?",
      answer: "90.08/249.69 × 100 = 36.1%",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of copper sulfate?",
      answer: "159.62 g/mol (anhydrous CuSO₄); 249.69 g/mol for pentahydrate CuSO₄·5H₂O.",
    },
    {
      question: "Why is copper sulfate blue?",
      answer: "The [Cu(H₂O)₆]²⁺ ion absorbs red/orange light via d-d transitions, transmitting blue.",
    },
    {
      question: "What is blue vitriol?",
      answer: "The pentahydrate form CuSO₄·5H₂O, named for its glassy blue crystals.",
    },
    {
      question: "How does anhydrous CuSO₄ test for water?",
      answer: "White anhydrous form turns blue when water is present due to hydration to pentahydrate.",
    },
    {
      question: "Is copper sulfate safe for swimming pools?",
      answer: "Used in low concentrations as algaecide; excessive copper stains and is toxic to aquatic life.",
    },
  ],

  references: [
    { label: "PubChem CID 24462", note: "Copper(II) sulfate data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "Royal Society of Chemistry", note: "Copper sulfate education resources" },
  ],
};
