import type { CompoundProfile } from "@/lib/chemistry/types";

export const magnesiumOxide: CompoundProfile = {
  slug: "molar-mass-of-magnesium-oxide",
  formula: "MgO",
  name: "Magnesium Oxide",
  iupacName: "Magnesium oxide",
  commonNames: ["Magnesia", "Periclase (mineral)", "Magnesium oxide"],
  aliases: ["MgO", "Calcined magnesia", "Magnesia usta"],
  category: "oxide",
  categories: ["oxide", "inorganic"],
  casNumber: "1309-48-4",
  pubchemCid: "14792",
  smiles: "[Mg+2].[O-2]",
  inchi: "InChI=1S/Mg.O/q+2;-2",
  exactMass: 39.979956,
  featured: true,
  popular: true,

  overview: `Magnesium oxide (MgO) is an ionic compound with molar mass 40.30 g/mol (Mg 24.30 + O 16.00), formed from Mg²⁺ and O²⁻ ions in a 1:1 ratio packed into the same rock-salt crystal structure as NaCl. Known industrially as magnesia, it is a white, odorless solid with an exceptionally high melting point (2,852 °C) driven by the strong electrostatic attraction between its doubly charged ions, a property that makes it one of the most important refractory materials used to line furnaces, kilns, and other equipment that must withstand extreme, sustained heat.

MgO's behavior in water reveals a useful chemical distinction from its more reactive alkaline earth relatives: it reacts only sluggishly with water at room temperature to form magnesium hydroxide, Mg(OH)₂ (MgO + H₂O → Mg(OH)₂), whereas calcium oxide reacts far more vigorously and exothermically with water. This relative sluggishness, combined with Mg(OH)₂'s own limited solubility, is precisely why "milk of magnesia" and related antacid formulations use magnesium hydroxide rather than magnesium oxide directly — the oxide must first slowly hydrate before it can act as the mild, buffered base that neutralizes stomach acid without the harsher, more rapid reactivity seen in some calcium-based antacids.

Beyond refractory and antacid applications, MgO serves as an essential agricultural soil amendment and animal feed mineral supplement (supplying dietary magnesium), an electrical insulator in mineral-insulated cables (exploiting its combination of high thermal conductivity and electrical resistance), and a component of specialty cements and construction boards. Its natural mineral form, periclase, occurs in metamorphosed limestones and provides a direct geological window into the same fundamental ionic bonding chemistry that makes synthetic magnesia industrially indispensable.`,

  formulaExplanation: `MgO pairs one Mg²⁺ ion with one O²⁻ ion in a 1:1 ratio, reflecting the straightforward charge balance between magnesium's +2 charge and oxygen's −2 charge. Like NaCl, it adopts a face-centered cubic rock-salt lattice, but the doubly charged ions create much stronger electrostatic (lattice) attraction, explaining MgO's dramatically higher melting point and hardness compared to singly charged ionic salts.`,

  chemicalProfile: `MgO is a basic oxide that reacts slowly with water to form magnesium hydroxide and more readily with acids to form magnesium salts and water (MgO + 2 HCl → MgCl₂ + H₂O). It is thermally extremely stable, remaining unreactive and solid at temperatures where most other common inorganic compounds have long since melted or decomposed — the basis of its refractory applications. It also reacts with atmospheric CO₂ only very slowly compared to more reactive alkaline earth oxides like CaO.`,

  uniqueTopics: [
    {
      heading: "Magnesia as a premier refractory material",
      body: "Magnesium oxide's extremely high melting point (2,852 °C) and chemical stability at extreme temperatures make it one of the most important refractory materials in heavy industry, used to line steelmaking furnaces, cement kilns, and other equipment that must withstand sustained exposure to molten metal and intense heat far beyond what most other common oxides can tolerate.",
    },
    {
      heading: "MgO vs. Mg(OH)₂ in antacid chemistry",
      body: "Because magnesium oxide reacts only sluggishly with water at body temperature, direct MgO is not the active ingredient in most liquid antacids; instead, formulations use magnesium hydroxide, Mg(OH)₂ ('milk of magnesia'), which itself forms slowly from MgO and water but provides a more immediately available, mildly basic suspension that neutralizes stomach acid gradually and gently, avoiding the more vigorous reactivity profile seen in some other alkaline earth antacid chemistries.",
    },
    {
      heading: "Lattice energy and the ionic charge effect on melting point",
      body: "MgO's melting point (2,852 °C) vastly exceeds that of NaCl (801 °C) despite both adopting the identical rock-salt crystal structure, illustrating how lattice energy scales dramatically with ionic charge: the doubly charged Mg²⁺ and O²⁻ ions attract each other far more strongly than the singly charged Na⁺ and Cl⁻ ions, a textbook example connecting Coulomb's law directly to observable bulk material properties.",
    },
    {
      heading: "Electrical insulation in mineral-insulated cables",
      body: "Compressed magnesium oxide powder is used as the insulating layer inside mineral-insulated, metal-sheathed electrical cables, exploiting its unusual combination of excellent electrical insulating properties alongside good thermal conductivity and exceptional fire resistance, allowing these cables to continue functioning even during building fires when most other cable insulation would fail.",
    },
    {
      heading: "Periclase: the natural mineral form",
      body: "Magnesium oxide occurs naturally as the mineral periclase, typically found in contact-metamorphosed limestones and marbles where magnesium-rich rock has been altered by intense heat, providing geologists with a natural, large-scale example of the same MgO rock-salt crystal chemistry replicated industrially for refractory and other applications.",
    },
  ],

  applications: {
    industrial: [
      "Refractory lining for furnaces, kilns, and high-temperature industrial equipment",
      "Electrical insulation in mineral-insulated cables",
      "Cement, construction board, and specialty building material production",
      "Agricultural soil amendment and animal feed magnesium supplement",
    ],
    laboratory: [
      "Basic oxide reference compound for acid-base reaction demonstrations",
      "Thermogravimetric and high-temperature materials science research",
      "Precursor for preparing magnesium hydroxide and other magnesium compounds",
    ],
    environmental: "Used in some flue gas desulfurization and wastewater treatment applications; naturally occurring in metamorphic mineral deposits without requiring synthesis for many uses.",
    biological: "Precursor to magnesium hydroxide antacid formulations; dietary magnesium oxide supplements provide a relatively concentrated, low-cost magnesium source, though with lower bioavailability than some other magnesium salts.",
  },

  preparation: `Industrially produced by calcining (heating) magnesium carbonate or magnesium hydroxide at high temperature, driving off carbon dioxide or water respectively: MgCO₃ → MgO + CO₂, or Mg(OH)₂ → MgO + H₂O. Also obtained from seawater-derived magnesium hydroxide precipitated and subsequently calcined.`,

  production: `Global magnesium oxide production exceeds several million tonnes annually, sourced both from mined magnesite (magnesium carbonate) ore and from seawater/brine-derived magnesium hydroxide calcination, supplying refractory, agricultural, and construction material markets.`,

  storage: `Store in a dry, sealed container, as MgO slowly absorbs atmospheric moisture and carbon dioxide over long-term exposure, gradually converting surface material to magnesium hydroxide or carbonate. Stable under normal dry storage conditions otherwise.`,

  handling: `Low acute hazard; treat fine powder as a nuisance dust and mild irritant. Use standard dust protection and eye protection when handling bulk refractory-grade material to avoid respiratory or eye irritation.`,

  safety: {
    summary: "Generally low toxicity; used as a food additive, antacid precursor, and supplement at appropriate grades. Fine dust may cause mild respiratory or eye irritation.",
    hazards: [
      "Mild respiratory irritation from inhaled fine powder ('metal fume fever' risk historically associated with freshly formed MgO fume from magnesium combustion, not bulk solid)",
      "Eye irritation from dust contact",
      "No significant acute toxicity at typical handling levels for bulk solid",
    ],
    classification: "Not classified as hazardous under GHS for standard bulk solid material",
  },

  interestingFacts: [
    "MgO's melting point of 2,852 °C is more than three times higher than that of NaCl, despite both sharing the same rock-salt crystal structure.",
    "Magnesia refractory bricks have lined steelmaking furnaces for well over a century, remaining essential to modern heavy industry.",
    "The mineral periclase, MgO's natural form, is a useful indicator mineral for geologists studying contact metamorphism in limestone deposits.",
    "Freshly burned magnesium metal produces a fine MgO smoke that, if inhaled in significant quantity, can cause a temporary flu-like illness known as metal fume fever — distinct from bulk MgO solid handling risk.",
  ],

  history: `Magnesium oxide, in the form of magnesia, has been recognized and used since antiquity, with early references to magnesia alba (white magnesia, magnesium carbonate-derived material) in historical pharmacy and mineralogy. Joseph Black's mid-18th-century studies distinguishing magnesia from lime (calcium oxide) helped establish magnesium as a separate elemental system, and industrial-scale refractory-grade magnesia production expanded significantly with the growth of steelmaking in the late 19th and 20th centuries.`,

  discovery: "Recognized since antiquity as magnesia; Joseph Black's mid-18th-century chemical studies helped distinguish magnesium compounds from calcium compounds.",

  examNotes: [
    "Molar mass MgO = 24.30 + 16.00 = 40.30 g/mol.",
    "Basic oxide: MgO + 2 HCl → MgCl₂ + H₂O (reacts with acids to form salt and water).",
    "Slow hydration: MgO + H₂O → Mg(OH)₂ (much slower than CaO + H₂O reaction).",
    "Lattice energy connection: doubly charged ions (Mg²⁺, O²⁻) give MgO a far higher melting point than singly charged NaCl despite the identical crystal structure.",
  ],

  commonMistakes: [
    "Confusing magnesium oxide (MgO, 40.30 g/mol) with magnesium hydroxide (Mg(OH)₂, 58.32 g/mol) — related but chemically distinct compounds with different antacid roles.",
    "Assuming MgO reacts with water as vigorously as calcium oxide — MgO hydration is comparatively slow and mild.",
    "Overlooking that MgO's refractory usefulness stems specifically from its very high lattice energy and melting point, not merely general chemical stability.",
  ],

  studentTips: [
    "Use Coulomb's law reasoning (charge magnitude effect on lattice energy) to explain why MgO's melting point vastly exceeds NaCl's despite the shared crystal structure.",
    "Remember that antacid 'milk of magnesia' is Mg(OH)₂, not MgO directly, even though MgO is a precursor.",
    "Link MgO's refractory role directly to its combination of high melting point and chemical inertness at extreme temperatures.",
  ],

  misconceptions: [
    "Magnesium oxide is not the direct active ingredient in most liquid antacid products — magnesium hydroxide is the actual formulated antacid compound.",
    "MgO is not highly soluble in water — it has quite limited solubility and reacts only slowly to form the somewhat more soluble but still limited magnesium hydroxide.",
    "'Magnesia' historically referred to several related magnesium compounds in old pharmacy and mineralogy texts, not exclusively to pure MgO.",
  ],

  physical: {
    appearance: "White crystalline powder or solid",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "3.58 g/cm³",
    meltingPoint: "2,852 °C",
    boilingPoint: "3,600 °C",
    solubility: "0.0086 g/L water at 25 °C (very slightly soluble, reacts slowly to form Mg(OH)₂)",
    crystalStructure: "Face-centered cubic (rock-salt structure, periclase)",
  },

  chemical: {
    classification: "Ionic basic oxide / alkaline earth oxide",
    basicity: "Basic oxide (reacts with acids; reacts slowly with water to form weak base Mg(OH)₂)",
    polarity: "Ionic",
    oxidationStates: "Mg: +2, O: −2",
    chemicalFamily: "Group 2 oxide (alkaline earth oxide)",
  },

  reactions: [
    {
      equation: "MgO(s) + 2 HCl(aq) → MgCl₂(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, dilute acid, room temperature",
      explanation: "As a basic oxide, MgO reacts readily with strong acids to form the corresponding magnesium salt and water.",
      products: "Magnesium chloride and water",
      applications: "Antacid neutralization chemistry, salt preparation",
      relatedConcepts: ["Basic oxides", "Acid–base reactions", "Salt formation"],
    },
    {
      equation: "MgO(s) + H₂O(l) → Mg(OH)₂(s)",
      type: "Hydration (slow, basic oxide reaction)",
      conditions: "Room temperature, slow reaction",
      explanation: "Magnesium oxide reacts sluggishly with water to form magnesium hydroxide, a much slower and less exothermic process than the analogous reaction of calcium oxide with water.",
      products: "Magnesium hydroxide",
      applications: "Antacid precursor chemistry, understanding alkaline earth oxide reactivity trends",
      relatedConcepts: ["Hydration reactions", "Basic oxides", "Reactivity trends"],
    },
    {
      equation: "MgCO₃(s) → MgO(s) + CO₂(g)",
      type: "Thermal decomposition (calcination)",
      conditions: "High temperature (~350–900 °C depending on source)",
      explanation: "Heating magnesium carbonate drives off carbon dioxide, leaving magnesium oxide behind — the standard industrial preparation route from magnesite ore.",
      products: "Magnesium oxide and carbon dioxide",
      applications: "Industrial magnesia production from magnesite ore",
      relatedConcepts: ["Thermal decomposition", "Calcination", "Industrial chemistry"],
    },
    {
      equation: "Mg(OH)₂(s) → MgO(s) + H₂O(g)",
      type: "Thermal decomposition (calcination)",
      conditions: "High temperature (~350 °C and above)",
      explanation: "Heating magnesium hydroxide drives off water, producing magnesium oxide — an alternative industrial preparation route, especially from seawater-derived magnesium hydroxide.",
      products: "Magnesium oxide and water vapor",
      applications: "Industrial magnesia production from seawater-derived Mg(OH)₂",
      relatedConcepts: ["Thermal decomposition", "Calcination", "Industrial chemistry"],
    },
  ],

  relatedFormulas: ["Mg(OH)2", "MgCl2", "MgCO3", "CaO", "MgSO4"],
  comparisonNote: "MgO (40.30 g/mol, melting point 2,852 °C) and CaO (56.08 g/mol, melting point 2,613 °C) are both alkaline earth oxides sharing similar ionic bonding, but CaO reacts far more vigorously and exothermically with water than the comparatively sluggish MgO hydration.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of MgO.",
      answer: "24.30 + 16.00 = 40.30 g/mol",
    },
    {
      question: "How many grams of MgCl₂ form from the complete reaction of 20.15 g of MgO with excess HCl?",
      answer: "20.15 g ÷ 40.30 g/mol = 0.500 mol MgO → 0.500 mol MgCl₂ × 95.21 g/mol ≈ 47.61 g",
    },
    {
      question: "What mass of CO₂ is released from calcining 84.31 g of MgCO₃ to form MgO?",
      answer: "84.31 g ÷ 84.31 g/mol = 1.00 mol MgCO₃ → 1.00 mol CO₂ × 44.01 g/mol = 44.01 g",
      hint: "Molar mass of MgCO₃ = 24.30 + 12.01 + 3(16.00) = 84.31 g/mol.",
    },
    {
      question: "Why does MgO have a much higher melting point than NaCl despite sharing the same crystal structure?",
      answer: "MgO's ions carry double charges (Mg²⁺, O²⁻) rather than single charges, so the electrostatic lattice energy holding the crystal together is much greater, requiring far more energy to melt.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of magnesium oxide?",
      answer: "40.30 g/mol.",
    },
    {
      question: "Is magnesium oxide the same as milk of magnesia?",
      answer: "No — milk of magnesia is magnesium hydroxide, Mg(OH)₂, which can be formed from MgO reacting with water but is the actual antacid ingredient used in formulations.",
    },
    {
      question: "Why is magnesium oxide used to line furnaces?",
      answer: "Its extremely high melting point (2,852 °C) and chemical stability at extreme temperatures make it an excellent refractory material for high-heat industrial equipment.",
    },
    {
      question: "Does magnesium oxide dissolve in water?",
      answer: "Only very slightly, and it reacts slowly to form magnesium hydroxide rather than dissolving as an intact compound.",
    },
    {
      question: "What is periclase?",
      answer: "The natural mineral form of magnesium oxide, typically found in metamorphosed limestone deposits.",
    },
  ],

  references: [
    { label: "PubChem CID 14792", note: "Magnesium oxide compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "USGS", note: "Magnesium compounds and refractory material statistics" },
  ],
};
