import type { CompoundProfile } from "@/lib/chemistry/types";

export const calciumChloride: CompoundProfile = {
  slug: "molar-mass-of-calcium-chloride",
  formula: "CaCl2",
  name: "Calcium Chloride",
  iupacName: "Calcium dichloride",
  commonNames: ["Calcium chloride", "Road salt (CaCl2 form)", "Calcium(II) chloride"],
  aliases: ["CaCl₂", "E509", "Calcium dichloride"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "10043-52-4",
  pubchemCid: "5284359",
  smiles: "[Ca+2].[Cl-].[Cl-]",
  inchi: "InChI=1S/Ca.2ClH/h;2*1H/q+2;;/p-2",
  exactMass: 109.900303,
  featured: true,
  popular: true,

  overview: `Calcium chloride (CaCl₂) is an ionic salt with a molar mass of 110.98 g/mol, built from one Ca²⁺ cation (40.08 g/mol) and two Cl⁻ anions (35.45 g/mol each). Unlike sodium chloride, calcium chloride is intensely hygroscopic and deliquescent — a piece of anhydrous CaCl₂ left in open air will pull water vapor directly from the atmosphere until it dissolves into its own absorbed liquid. This property, unusual among common salts, is the reason CaCl₂ dominates the desiccant and de-icing markets rather than serving primarily as a food seasoning like NaCl.

The compound exists commercially in several hydration states — anhydrous CaCl₂, the dihydrate (CaCl₂·2H₂O), and the hexahydrate (CaCl₂·6H₂O) — each with distinct melting behavior and water content that must be tracked carefully in stoichiometry problems. Dissolving anhydrous calcium chloride in water is strongly exothermic (ΔH_soln ≈ −82 kJ/mol), a reaction dramatic enough that instant heat packs and cold-weather concrete accelerators exploit it directly. This exothermicity also explains why CaCl₂ outperforms NaCl as a de-icer in extreme cold: not only does it depress the freezing point of water to below −50 °C at eutectic concentration (versus about −21 °C for NaCl), but the heat released as it dissolves helps actively melt surrounding ice rather than merely lowering its freezing point.

Calcium chloride's divalent cation gives it a higher effective ionic strength per mole than monovalent salts, meaning smaller doses achieve stronger colligative effects — fewer moles of CaCl₂ are needed to depress a freezing point or raise an osmotic pressure by the same amount as NaCl, because each formula unit releases three ions (one Ca²⁺, two Cl⁻) instead of two. This makes CaCl₂ chemistry a favorite exam topic for van't Hoff factor (i ≈ 3) and colligative property calculations, contrasting directly with 1:1 salts like NaCl or KCl.`,

  formulaExplanation: `The formula CaCl₂ reflects the +2 oxidation state of calcium, an alkaline earth metal that loses two electrons to achieve a stable noble-gas electron configuration. Each Ca²⁺ ion is balanced electrostatically by two Cl⁻ ions, giving the 1:2 cation-to-anion ratio. There is no covalent "molecule" of CaCl₂ in the solid state; instead, the formula unit represents the smallest whole-number ratio of ions within an extended ionic lattice.`,

  chemicalProfile: `CaCl₂ is chemically inert to most common reagents at room temperature but participates readily in precipitation reactions where the calcium ion combines with insoluble anions (carbonate, sulfate, phosphate, oxalate). It is a Lewis acid at the calcium center, capable of coordinating water and other donor ligands, which underlies both its desiccant behavior and its hexahydrate crystal chemistry. Aqueous CaCl₂ is mildly acidic to neutral and does not hydrolyze significantly, unlike salts of weak acids.`,

  uniqueTopics: [
    {
      heading: "Hygroscopicity, deliquescence, and instant heat packs",
      body: "Calcium chloride is deliquescent: it absorbs so much atmospheric moisture that it eventually dissolves in the water it has captured, forming a saturated brine even without added liquid. This is chemically distinct from merely hygroscopic solids (like table salt, which absorbs some moisture but stays solid). The dissolution of anhydrous CaCl₂ is strongly exothermic, releasing roughly 82 kJ per mole. Single-use instant heat packs exploit this directly — a sealed pouch of anhydrous CaCl₂ is ruptured to mix with water, and the heat of hydration warms the pack within seconds, a practical demonstration of exothermic dissolution enthalpy.",
    },
    {
      heading: "De-icing chemistry: why CaCl₂ beats NaCl in extreme cold",
      body: "Both salts lower the freezing point of water through colligative freezing-point depression, but CaCl₂ has two advantages at very low temperatures. First, its eutectic freezing point (about −52 °C) is far lower than NaCl's (about −21 °C), so CaCl₂ remains effective on roads when temperatures drop well below where rock salt fails. Second, because CaCl₂ dissociates into three ions per formula unit (Ca²⁺ + 2 Cl⁻) versus two for NaCl, it produces a larger colligative effect per mole, and its exothermic dissolution actively generates heat that accelerates ice melting rather than just preventing refreezing.",
    },
    {
      heading: "Desiccant and drying-agent applications",
      body: "Because of its powerful affinity for water, anhydrous CaCl₂ is a classic laboratory and industrial desiccant, used in drying tubes, moisture-absorbing packets for shipping containers, and basement dehumidifier crystals. It is not suitable for drying every substance, however — it reacts with alcohols and some amines to form complexes, so chemists choose alternatives like anhydrous magnesium sulfate or molecular sieves when drying those functional groups. Its use as a desiccant relies on the same thermodynamic driving force (strong lattice–hydrate stabilization) that makes it deliquescent.",
    },
    {
      heading: "Concrete accelerator and oil-field brine uses",
      body: "In the construction industry, calcium chloride is added to concrete mixes as a set accelerator, speeding hydration of cement in cold-weather pours by generating localized heat and increasing ionic strength in the pore solution. In the oil and gas industry, dense CaCl₂ brines (up to about 1.4 g/mL) are used as workover and completion fluids because their high density helps control wellbore pressure without the corrosivity issues of some heavier brines.",
    },
    {
      heading: "Food additive E509 and firming agent role",
      body: "Calcium chloride is approved as food additive E509, used as a firming agent in canned vegetables, a coagulant in tofu and cheese production, and a calcium fortifier in sports drinks and bottled water. Its bitter, slightly salty taste limits direct seasoning use, but at the low concentrations used in food processing it is imperceptible while still providing the Ca²⁺ ions needed to cross-link pectin or coagulate proteins.",
    },
    {
      heading: "Hydrate stoichiometry: anhydrous vs. dihydrate vs. hexahydrate",
      body: "Commercial calcium chloride is sold as anhydrous CaCl₂ (M = 110.98 g/mol), the dihydrate CaCl₂·2H₂O (M = 147.01 g/mol), or the hexahydrate CaCl₂·6H₂O (M = 219.08 g/mol, used in some cold packs and as a phase-change material for thermal energy storage). Students must add the correct number of water molecules' mass when converting between grams of a hydrate and moles of CaCl₂, a common source of stoichiometry errors on exams.",
    },
  ],

  applications: {
    industrial: [
      "Road and runway de-icing, especially in extreme cold where NaCl is less effective",
      "Concrete set accelerator for cold-weather construction",
      "Dense workover and completion brines in oil and gas drilling",
      "Dust control on unpaved roads (hygroscopic surface binding)",
      "Desiccant packets and industrial drying systems",
    ],
    laboratory: [
      "Drying agent for gases and non-alcohol organic solvents",
      "Source of Ca²⁺ ions in qualitative and quantitative analysis",
      "Preparation of calcium buffer solutions in biochemistry",
    ],
    environmental: "Road application of CaCl₂ brine can elevate chloride and calcium levels in nearby soil and waterways, similar to concerns with NaCl road salt, though CaCl₂ is often preferred at very low temperatures where less total salt mass is needed.",
    biological: "Calcium chloride is used clinically as an IV source of calcium ions to treat hypocalcemia, hyperkalemia (cardiac stabilization), and calcium channel blocker overdose; it is also used in cheese and tofu making to coagulate proteins via calcium bridging.",
  },

  preparation: `Anhydrous calcium chloride is produced industrially as a byproduct of the Solvay process (ammonia-soda process for making Na₂CO₃), where CaCl₂ forms from the reaction of CaCO₃ and NH₄Cl-derived streams. It is also mined from natural brines and produced by reacting limestone with hydrochloric acid: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂.`,

  production: `Global CaCl₂ production is dominated by Solvay-process byproduct recovery, brine evaporation, and limestone–HCl neutralization. The product is sold as flakes, pellets, or concentrated liquid brine depending on the intended de-icing, drilling, or industrial application.`,

  storage: `Store in sealed, moisture-proof containers because anhydrous and low-hydrate forms actively absorb atmospheric water. Keep away from strong oxidizers and separate from aluminum and other reactive metals in bulk storage to avoid corrosion from brine leaks.`,

  handling: `Wear gloves and eye protection; the exothermic dissolution can cause thermal skin irritation and the anhydrous solid can cause chemical burns on moist skin by rapidly absorbing water and generating localized heat. Avoid inhaling dust from pellets during handling.`,

  safety: {
    summary: "Low acute toxicity but capable of causing irritation and thermal-type burns due to exothermic hydration on skin and mucous membranes; corrosive to some metals in solution.",
    hazards: [
      "Skin and eye irritation from the exothermic heat of dissolution",
      "Corrosive to aluminum and other reactive metals when in brine form",
      "Dust inhalation irritation from pellet or flake handling",
      "Environmental chloride loading from large-scale de-icing use",
    ],
    classification: "GHS: Eye Irrit. 2, Skin Irrit. 2 (concentrated solid/solution)",
  },

  interestingFacts: [
    "A pile of anhydrous CaCl₂ pellets left in humid air will slowly turn into a puddle of concentrated brine — true deliquescence in action.",
    "CaCl₂ brine is used to add ballast weight and traction to tractor tires in some agricultural regions.",
    "The hexahydrate CaCl₂·6H₂O melts near 30 °C and is studied as a phase-change material for storing and releasing thermal energy.",
    "Calcium chloride can depress water's freezing point further than sodium chloride, allowing effective de-icing down to about −52 °C at the eutectic composition.",
  ],

  history: `Calcium chloride has been produced as a byproduct of the Leblanc and later Solvay soda-ash processes since the 19th century, when chemists searching for uses of this abundant industrial byproduct discovered its powerful desiccant and freezing-point-depression properties. Its adoption as a winter road treatment grew through the 20th century as municipalities sought de-icers effective at temperatures too low for rock salt (NaCl) to work efficiently.`,

  discovery: "Isolated and characterized alongside broader 19th-century industrial soda-ash chemistry; its practical desiccant and de-icing uses were popularized through Solvay-process byproduct utilization.",

  examNotes: [
    "Molar mass CaCl₂ = 40.08 + 2(35.45) = 110.98 g/mol.",
    "Van't Hoff factor i ≈ 3 for CaCl₂ (dissociates into 1 Ca²⁺ + 2 Cl⁻) — double-check colligative property problems that mix 1:1 and 1:2 electrolytes.",
    "Hydrate forms change molar mass: CaCl₂·2H₂O = 147.01 g/mol; CaCl₂·6H₂O = 219.08 g/mol — always confirm which form a problem specifies.",
    "Precipitation test: Ca²⁺ + CO₃²⁻ → CaCO₃(s), used to confirm the presence of calcium ion in solution.",
  ],

  commonMistakes: [
    "Using van't Hoff factor i = 2 (as for NaCl) instead of i ≈ 3 for CaCl₂ in freezing-point depression or osmotic pressure problems.",
    "Forgetting to add water of hydration mass when a problem specifies CaCl₂·2H₂O or CaCl₂·6H₂O rather than the anhydrous salt.",
    "Assuming CaCl₂ behaves like table salt in taste and food use — it is bitter and used only in trace amounts as a firming agent.",
  ],

  studentTips: [
    "Remember CaCl₂ releases 3 ions per formula unit — always count both chloride ions when calculating total ion concentration.",
    "Link the exothermic dissolution (ΔH ≈ −82 kJ/mol) to instant heat pack demonstrations for a memorable real-world hook.",
    "Contrast with NaCl in a table: formula, ions released, van't Hoff factor, and eutectic freezing point, to nail comparison questions.",
  ],

  misconceptions: [
    "CaCl₂ is not the same as calcium carbonate (CaCO₃) or calcium oxide (CaO) — all are common calcium compounds but with very different solubility and reactivity.",
    "CaCl₂ pellets used for de-icing are not edible-grade and should never be confused with food-grade CaCl₂ additive despite sharing a formula.",
    "Deliquescence (absorbing enough water to dissolve itself) is a stronger phenomenon than simple hygroscopicity and is specific to a subset of salts including CaCl₂.",
  ],

  physical: {
    appearance: "White, hygroscopic crystalline solid, flakes, or pellets",
    color: "White to off-white",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.15 g/cm³ (anhydrous, 25 °C)",
    meltingPoint: "772–775 °C (anhydrous)",
    boilingPoint: "~1,935 °C (anhydrous, decomposes/vaporizes)",
    solubility: "745 g/L water at 20 °C (highly soluble; dissolution is strongly exothermic)",
    crystalStructure: "Distorted rutile-type structure (anhydrous CaCl₂)",
  },

  chemical: {
    classification: "Ionic salt / alkaline earth metal halide",
    polarity: "Ionic (no molecular dipole; strong ion–dipole interactions with water)",
    oxidationStates: "Ca: +2, Cl: −1",
    chemicalFamily: "Group 2 halide (alkaline earth metal chloride)",
  },

  reactions: [
    {
      equation: "CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–carbonate (neutralization with gas evolution)",
      conditions: "Dilute HCl, room temperature",
      explanation: "Hydrochloric acid dissolves limestone, releasing carbon dioxide gas and forming calcium chloride in solution — both a laboratory CO₂ generator and an industrial CaCl₂ production route.",
      products: "Calcium chloride solution, water, carbon dioxide gas",
      applications: "Industrial CaCl₂ manufacture, laboratory CO₂ generation, cave and limestone weathering studies",
      relatedConcepts: ["Acid–carbonate reactions", "Gas evolution", "Neutralization"],
    },
    {
      equation: "CaCl₂(aq) + Na₂CO₃(aq) → CaCO₃(s) + 2 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Calcium ions combine with carbonate ions to form insoluble calcium carbonate, a classic solubility-rules demonstration and the basis of water-softening chemistry.",
      products: "Calcium carbonate precipitate and sodium chloride solution",
      applications: "Water softening, qualitative analysis for carbonate or calcium ion, scale-formation studies",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Water hardness"],
    },
    {
      equation: "CaCl₂(s) + 6 H₂O(l) → CaCl₂·6H₂O(s) + heat",
      type: "Hydration (exothermic)",
      conditions: "Ambient temperature and humidity",
      explanation: "Anhydrous calcium chloride absorbs water vapor or liquid water to form the hexahydrate, releasing substantial heat — the basis of both deliquescence and instant heat pack technology.",
      products: "Calcium chloride hexahydrate",
      applications: "Instant heat packs, phase-change thermal storage, desiccant regeneration studies",
      relatedConcepts: ["Enthalpy of hydration", "Hydrates", "Exothermic processes"],
    },
    {
      equation: "Ca(s) + Cl₂(g) → CaCl₂(s)",
      type: "Synthesis (direct combination, redox)",
      conditions: "Elevated temperature; vigorous reaction",
      explanation: "Calcium metal is oxidized by chlorine gas, which is reduced, in a direct combination redox reaction that produces the ionic salt directly from its elements.",
      products: "Calcium chloride",
      applications: "Demonstrating ionic bond formation from elements, redox teaching examples",
      relatedConcepts: ["Redox reactions", "Ionic bond formation", "Synthesis reactions"],
    },
  ],

  relatedFormulas: ["NaCl", "KCl", "CaCO3", "Ca(OH)2", "MgCl2"],
  comparisonNote: "CaCl₂ (110.98 g/mol, van't Hoff factor ≈ 3) produces a stronger colligative effect per mole than NaCl (58.44 g/mol, factor ≈ 2) and is far more hygroscopic, making it the preferred de-icer in extreme cold while NaCl remains cheaper for moderate winter conditions.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of anhydrous CaCl₂.",
      answer: "40.08 + 2(35.45) = 110.98 g/mol",
    },
    {
      question: "What is the molar mass of calcium chloride hexahydrate, CaCl₂·6H₂O?",
      answer: "110.98 + 6(18.02) = 110.98 + 108.12 = 219.10 g/mol",
      hint: "Add the mass of six full water molecules to the anhydrous molar mass.",
    },
    {
      question: "How many moles of ions are produced when 1 mole of CaCl₂ fully dissociates in water?",
      answer: "3 moles of ions total: 1 mol Ca²⁺ + 2 mol Cl⁻",
    },
    {
      question: "Why is CaCl₂ more effective than NaCl at very low temperatures for de-icing?",
      answer: "CaCl₂ has a lower eutectic freezing point (~−52 °C vs ~−21 °C for NaCl), dissociates into more ions per mole for a larger colligative effect, and its exothermic dissolution actively generates heat.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of calcium chloride?",
      answer: "110.98 g/mol for anhydrous CaCl₂, calculated as 40.08 (Ca) + 2 × 35.45 (Cl).",
    },
    {
      question: "Is calcium chloride the same as table salt?",
      answer: "No. Table salt is sodium chloride (NaCl); calcium chloride (CaCl₂) is a different, more hygroscopic salt used mainly for de-icing, desiccants, and food firming rather than seasoning.",
    },
    {
      question: "Why does calcium chloride feel warm when dissolved in water?",
      answer: "Its dissolution is strongly exothermic (about −82 kJ/mol), releasing heat as the ionic lattice breaks apart and ions become hydrated.",
    },
    {
      question: "Why does CaCl₂ absorb moisture from air?",
      answer: "It is deliquescent — its strong ion–water affinity lowers the vapor pressure of water enough that it continuously draws in atmospheric moisture until it dissolves itself.",
    },
    {
      question: "Is calcium chloride safe to use in food?",
      answer: "Yes, in small regulated amounts; it is approved food additive E509, used as a firming and coagulating agent in vegetables, cheese, and tofu.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of calcium chloride" },
    { label: "PubChem CID 5284359", note: "Structural and safety data for CaCl2" },
    { label: "USGS", note: "Industrial salt and calcium chloride production statistics" },
  ],
};
