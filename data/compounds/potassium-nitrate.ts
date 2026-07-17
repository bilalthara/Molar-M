import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumNitrate: CompoundProfile = {
  slug: "molar-mass-of-potassium-nitrate",
  formula: "KNO3",
  name: "Potassium Nitrate",
  iupacName: "Potassium nitrate",
  commonNames: ["Saltpeter", "Niter", "Nitrate of potash"],
  aliases: ["KNO₃", "Salpetre"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7757-79-1",
  pubchemCid: "24434",
  smiles: "[N+](=O)([O-])[O-].[K+]",
  inchi: "InChI=1S/K.NO3/c;2-1(3)4/q+1;-1",
  exactMass: 100.9515,
  featured: true,
  popular: true,

  overview: `Potassium nitrate (KNO₃) has a molar mass of 101.10 g/mol (K 39.10 + N 14.01 + 3 × 16.00), an ionic salt consisting of K⁺ cations and planar, resonance-stabilized NO₃⁻ anions. Known historically as saltpeter, it is a white crystalline solid that dissolves readily in water with a strongly endothermic heat of solution — a property exploited in classic "instant cold pack" and freezing-point-depression demonstrations, since dissolving KNO₃ noticeably cools its surroundings.

KNO₃ is best known as the oxidizer component of black powder (gunpowder), traditionally 75% KNO₃, 15% charcoal, and 10% sulfur by mass; the nitrate ion supplies oxygen internally, allowing the mixture to combust rapidly even without external air. This same oxidizing ability makes KNO₃ useful, in dramatically diluted and controlled contexts, for supporting combustion in fireworks, tree stump removal formulations, and curing salts for meat preservation, where it also inhibits bacterial growth (notably Clostridium botulinum).

Agriculturally, KNO₃ is a premium fertilizer that supplies both essential macronutrients potassium and nitrogen in a chloride-free form, making it especially valued for chloride-sensitive crops such as tobacco, potatoes, and many fruits and vegetables. Because both ions are plant nutrients, essentially the entire compound is agriculturally useful, unlike fertilizers that include non-nutrient counter-ions.`,

  formulaExplanation: `KNO₃ contains one K⁺ ion ionically paired with one NO₃⁻ ion. The nitrate ion has a trigonal planar structure with nitrogen at +5 oxidation state, bonded to three oxygens that are equivalent due to resonance delocalization of the negative charge. The 1:1 cation-to-anion ratio reflects the single positive and single negative charge of the two ions.`,

  chemicalProfile: `KNO₃ is a powerful oxidizer, especially when heated or mixed with reducing agents like carbon or sulfur, releasing oxygen as it decomposes: 2 KNO₃ → 2 KNO₂ + O₂ (moderate heating) or further to K₂O and nitrogen oxides at higher temperatures. It undergoes straightforward double displacement reactions in solution and is the classic source of O₂ gas in laboratory demonstrations of oxygen generation from heated solid oxidizers, alongside KClO₃ and KMnO₄.`,

  uniqueTopics: [
    {
      heading: "Gunpowder Chemistry",
      body: "Black powder's rapid combustion depends on KNO₃ supplying its own oxygen internally as it decomposes, rather than relying solely on atmospheric O₂. The approximate reaction 2 KNO₃ + S + 3 C → K₂S + N₂ + 3 CO₂ (simplified) illustrates how the nitrate's oxygen oxidizes both sulfur and carbon almost instantaneously, generating the rapidly expanding gases responsible for gunpowder's explosive force.",
    },
    {
      heading: "Endothermic Dissolution and Cold Packs",
      body: "Unlike most ionic solids, KNO₃ dissolves in water with a positive (endothermic) enthalpy of solution, noticeably cooling the solution — a favorite classroom demonstration of the distinction between exothermic and endothermic dissolution, and the historical basis of some early instant cold packs.",
    },
    {
      heading: "Chloride-Free Fertilizer",
      body: "KNO₃ delivers both potassium and nitrate — two essential plant macronutrients — without introducing chloride ion, which can harm chloride-sensitive crops like tobacco, citrus, and potatoes at high concentrations. This makes it a premium, if more expensive, alternative to potassium chloride (muriate of potash) fertilizers.",
    },
    {
      heading: "Meat Curing and Historical Preservation",
      body: "Saltpeter has been used for centuries to cure meats such as bacon and corned beef; nitrate is reduced (often via bacterial or added nitrite intermediates) to nitric oxide, which reacts with myoglobin to produce the characteristic pink color of cured meat while also suppressing Clostridium botulinum spore germination.",
    },
    {
      heading: "Oxygen Generation and Combustion Demonstrations",
      body: "Heating solid KNO₃ releases oxygen gas as it decomposes to potassium nitrite, a standard laboratory demonstration of how ionic oxidizers can support or intensify combustion (a glowing splint reignites in the evolved O₂) — directly paralleling KClO₃'s more vigorous, catalyzed oxygen-release chemistry.",
    },
  ],

  applications: {
    industrial: [
      "Oxidizer in black powder (gunpowder) and pyrotechnic/firework formulations",
      "Chloride-free potassium and nitrogen fertilizer for high-value, chloride-sensitive crops",
      "Meat curing agent (historically, now often supplemented or replaced by sodium nitrite)",
      "Heat transfer/thermal energy storage salt component in some solar power installations",
    ],
    laboratory: [
      "Classic oxygen generation demonstration by thermal decomposition",
      "Endothermic dissolution demonstration for thermochemistry teaching",
      "Oxidizer component in student-safe combustion and rocket candy (KNO₃/sugar) demonstrations under supervision",
    ],
    environmental: "Excess nitrate fertilizer runoff contributes to eutrophication of waterways and groundwater nitrate contamination, a concern shared with other nitrate fertilizers.",
    biological: "Nitrate ion is metabolized by plants as an essential nitrogen source; in cured meats, nitrate-derived nitrite contributes to both preservation and formation of nitrosamines under certain cooking conditions, a subject of ongoing dietary research.",
  },

  preparation: `Historically produced by leaching nitrogen-rich organic waste (manure, decaying plant matter) and converting the resulting calcium/ammonium nitrates to potassium nitrate via reaction with potash (potassium carbonate) — the traditional saltpeter "niter bed" process. Modern production reacts potassium chloride with nitric acid or uses double decomposition with sodium nitrate and potassium chloride.`,

  production: `Commercial KNO₃ is produced by reacting potassium chloride with nitric acid, by double decomposition of sodium nitrate (Chile saltpeter) with potassium chloride, or by neutralizing nitric acid with potassium hydroxide or carbonate.`,

  storage: `Store as a dry, stable oxidizer away from combustible and reducing materials (fuels, sulfur, organic matter, metal powders), heat sources, and open flame, since mixtures with such materials can become highly flammable or explosive.`,

  handling: `Not acutely toxic in typical handling, but strong oxidizing behavior means it must never be mixed with combustibles outside of controlled pyrotechnic formulations. Avoid generating dust; wash hands after handling.`,

  safety: {
    summary: "A strong oxidizer that intensifies fires and can form explosive mixtures with fuels, reducing agents, or organic materials; low acute toxicity to humans in isolation but hazardous in combination with combustibles.",
    hazards: [
      "Oxidizer — intensifies fires and can cause or contribute to explosions when mixed with fuels",
      "Dust may irritate eyes and respiratory tract",
      "Excessive ingestion can cause methemoglobinemia via nitrate/nitrite metabolism",
    ],
    classification: "GHS: Ox. Solid 3",
  },

  interestingFacts: [
    "The word 'saltpeter' derives from Latin sal petrae, 'salt of stone,' referring to nitrate efflorescence historically scraped from cave walls and stable floors rich in decomposing organic matter.",
    "KNO₃'s molar mass 101.10 g/mol is close to that of many organic solvents, but its ionic, oxidizing chemistry is entirely different.",
    "Gunpowder's basic 75:15:10 (KNO₃:charcoal:sulfur) recipe has remained essentially unchanged for centuries since its widespread adoption.",
    "Dissolving KNO₃ in water is used in classroom thermochemistry to demonstrate an endothermic process that nonetheless occurs spontaneously, driven by entropy increase.",
  ],

  history: `Saltpeter was known in ancient China by at least the 9th century CE and became essential to gunpowder formulations that spread across Asia, the Middle East, and Europe by the medieval period. Niter beds — controlled composting operations designed to maximize nitrate production — were a major industrial-scale chemical process before synthetic nitrate fixation (Haber–Bosch, Ostwald) made KNO₃ production far more efficient in the 20th century.`,

  discovery: "Known and used in China from at least the 9th century CE for early pyrotechnic and incendiary formulations; its role as gunpowder's oxidizer was refined through medieval Islamic and European alchemy and chemistry.",

  examNotes: [
    "Molar mass KNO₃ = 39.10 + 14.01 + 3(16.00) = 101.11 g/mol (commonly rounded to 101.10 g/mol).",
    "Thermal decomposition: 2 KNO₃(s) → 2 KNO₂(s) + O₂(g) on moderate heating.",
    "Nitrogen oxidation state in KNO₃ (nitrate) is +5, the same as in HNO₃.",
    "Solubility increases sharply with temperature — a classic recrystallization/solubility curve example in general chemistry.",
  ],

  commonMistakes: [
    "Assuming KNO₃ dissolution is exothermic like many salts — it is endothermic, cooling the solution.",
    "Confusing potassium nitrate (KNO₃, oxidizer) with potassium nitrite (KNO₂, a decomposition product with nitrogen in +3 state).",
    "Underestimating fire/explosion risk when KNO₃ contacts combustible or reducing materials in bulk.",
  ],

  studentTips: [
    "Remember K, N, O count directly from the formula for quick molar mass recall: 39 + 14 + 48 ≈ 101.",
    "Link gunpowder's rapid burning to the internal oxygen supply from nitrate decomposition, unlike ordinary combustion relying on atmospheric O₂.",
    "Use KNO₃'s steep solubility-vs-temperature curve as a model system for recrystallization purification problems.",
  ],

  misconceptions: [
    "KNO₃ itself does not explode on its own — it is an oxidizer that dramatically accelerates combustion of fuels/reducing agents mixed with it.",
    "Saltpeter is not the same substance as Chile saltpeter (sodium nitrate, NaNO₃) — both are nitrate salts but with different cations and slightly different properties.",
    "Curing meat with nitrate/nitrite is not simply 'adding preservative flavor' — it involves specific chemistry (nitric oxide-myoglobin binding) responsible for color and antimicrobial action.",
  ],

  physical: {
    appearance: "White crystalline solid or powder",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.11 g/cm³",
    meltingPoint: "334 °C",
    boilingPoint: "400 °C (decomposes)",
    solubility: "133 g/L water at 0 °C, rising to over 2400 g/L at 100 °C (strongly temperature-dependent)",
    crystalStructure: "Orthorhombic (below ~129 °C); trigonal above",
  },

  chemical: {
    classification: "Ionic nitrate salt / oxidizing agent",
    polarity: "Ionic",
    molecularGeometry: "Trigonal planar nitrate anion",
    oxidationStates: "K: +1, N: +5, O: −2",
    chemicalFamily: "Alkali metal nitrates",
  },

  reactions: [
    {
      equation: "2 KNO₃(s) → 2 KNO₂(s) + O₂(g)",
      type: "Thermal decomposition",
      conditions: "Heat to ~400 °C",
      explanation: "Moderate heating releases oxygen gas while nitrogen is reduced from +5 (nitrate) to +3 (nitrite); a glowing splint reignites in the evolved gas, demonstrating oxygen generation.",
      products: "Potassium nitrite and oxygen",
      applications: "Laboratory oxygen generation demonstrations, understanding oxidizer decomposition",
      relatedConcepts: ["Thermal decomposition", "Redox", "Oxidizing agents"],
    },
    {
      equation: "4 KNO₃(s) + 5 C(s) → 2 K₂CO₃(s) + 3 CO₂(g) + 2 N₂(g)",
      type: "Redox (combustion with carbon)",
      conditions: "Ignition, contact with reducing agent",
      explanation: "A simplified representation of nitrate-carbon combustion illustrating how nitrate's internal oxygen supports rapid oxidation of carbon even without atmospheric air — the operating principle behind black powder's rapid burn rate.",
      products: "Potassium carbonate, carbon dioxide, nitrogen gas",
      applications: "Explains gunpowder and pyrotechnic combustion chemistry",
      relatedConcepts: ["Oxidizers", "Combustion without air", "Pyrotechnics"],
    },
    {
      equation: "KNO₃(aq) → K⁺(aq) + NO₃⁻(aq) [no precipitation with common reagents]",
      type: "Solubility / spectator ion illustration",
      conditions: "Aqueous, room temperature",
      explanation: "Both K⁺ and NO₃⁻ are 'always soluble' spectator ions in standard solubility rules — KNO₃ does not precipitate with common test cations or anions, making it a useful inert electrolyte in salt bridges.",
      products: "Hydrated potassium and nitrate ions (fully soluble, no precipitate)",
      applications: "Salt bridges in electrochemical cells, solubility rules teaching",
      relatedConcepts: ["Solubility rules", "Spectator ions", "Electrochemistry"],
    },
    {
      equation: "KNO₃(s) + H₂O(l) → K⁺(aq) + NO₃⁻(aq) [ΔH > 0]",
      type: "Endothermic dissolution",
      conditions: "Room temperature water",
      explanation: "Dissolving KNO₃ absorbs heat from the surroundings, noticeably cooling the solution — a favorite thermochemistry demonstration of an endothermic yet spontaneous process (entropy-driven).",
      products: "Hydrated potassium and nitrate ions",
      applications: "Thermochemistry demonstrations, historical cold-pack chemistry",
      relatedConcepts: ["Enthalpy of solution", "Entropy", "Spontaneity"],
    },
  ],

  relatedFormulas: ["NaNO3", "HNO3", "KClO3", "KCl", "NH4NO3"],
  comparisonNote: "KNO₃ (101.10 g/mol) provides chloride-free potassium and nitrate for sensitive crops, whereas potassium chloride (74.55 g/mol, muriate of potash) is cheaper but introduces chloride that some crops tolerate poorly.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KNO₃.",
      answer: "39.10 + 14.01 + 3(16.00) = 101.11 g/mol (≈ 101.10 g/mol)",
    },
    {
      question: "How many grams of O₂ are produced by fully decomposing 202.2 g of KNO₃ via 2 KNO₃ → 2 KNO₂ + O₂?",
      answer: "202.2 g ÷ 101.10 g/mol = 2.00 mol KNO₃; ratio 2 KNO₃ : 1 O₂, so 1.00 mol O₂ = 32.00 g",
      hint: "Divide the KNO₃-to-O₂ mole ratio by 2 from the balanced equation.",
    },
    {
      question: "Why does dissolving KNO₃ in water make the solution feel cold?",
      answer: "The dissolution process is endothermic (ΔH > 0); it absorbs heat from the surrounding water and container, lowering the temperature even though the process occurs spontaneously due to increased entropy.",
    },
    {
      question: "What is the oxidation state of nitrogen in KNO₃ compared to KNO₂?",
      answer: "Nitrogen is +5 in KNO₃ (nitrate) and +3 in KNO₂ (nitrite) — a two-unit reduction occurs during thermal decomposition.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium nitrate?",
      answer: "101.10 g/mol.",
    },
    {
      question: "Is potassium nitrate the same as saltpeter?",
      answer: "Yes — saltpeter is the traditional common name for potassium nitrate, KNO₃.",
    },
    {
      question: "Why is potassium nitrate used in gunpowder?",
      answer: "As an oxidizer, it supplies oxygen internally as it decomposes, allowing rapid combustion of the charcoal and sulfur fuel components even without relying on atmospheric air.",
    },
    {
      question: "Is potassium nitrate safe to use as fertilizer?",
      answer: "Yes, when applied at agronomic rates — it supplies chloride-free potassium and nitrogen, though excessive application can contribute to nitrate runoff and groundwater contamination like other nitrogen fertilizers.",
    },
    {
      question: "How is potassium nitrate different from sodium nitrate?",
      answer: "Both are ionic nitrate salts, but KNO₃ (101.10 g/mol) pairs nitrate with potassium, while NaNO₃ (Chile saltpeter, 84.99 g/mol) pairs it with sodium — the different cation changes solubility, hygroscopicity, and some industrial applications.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "KNO₃ thermodynamic and solubility data" },
    { label: "PubChem CID 24434", note: "Potassium nitrate identifiers and properties" },
    { label: "International Fertilizer Association", note: "Chloride-free fertilizer applications" },
  ],
};
