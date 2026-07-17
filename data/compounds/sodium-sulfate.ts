import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumSulfate: CompoundProfile = {
  slug: "molar-mass-of-sodium-sulfate",
  formula: "Na2SO4",
  name: "Sodium Sulfate",
  iupacName: "Sodium sulfate",
  commonNames: ["Sodium sulfate", "Glauber's salt (decahydrate)", "Salt cake (anhydrous industrial grade)"],
  aliases: ["Na₂SO₄", "Sulfate of soda", "Thenardite (mineral)"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7757-82-6",
  pubchemCid: "24436",
  smiles: "[Na+].[Na+].[O-]S(=O)(=O)[O-]",
  inchi: "InChI=1S/2Na.H2O4S/c;;1-5(2,3)4/h;;(H2,1,2,3,4)/q2*+1;/p-2",
  exactMass: 141.931268,
  featured: true,
  popular: true,

  overview: `Sodium sulfate (Na₂SO₄) is an ionic compound with molar mass 142.04 g/mol (Na 2 × 22.99 + S 32.06 + O 4 × 16.00), built from Na⁺ cations and tetrahedral SO₄²⁻ anions in a 2:1 ratio. The anhydrous mineral form, thenardite, is a white orthorhombic solid, while the far more famous decahydrate Na₂SO₄·10H₂O — Glauber's salt — crystallizes as large, colorless monoclinic prisms that dissolve endothermically, cooling the surrounding water so sharply that the salt was historically used in early refrigeration and phase-change heat-storage bricks.

Sodium sulfate shows an unusual solubility curve: it rises steeply with temperature up to about 32.4 °C, where the decahydrate transitions to the anhydrous salt (whose solubility then decreases slightly with further heating), a discontinuity that makes Na₂SO₄ a textbook example of solubility curves with an incongruent transition point. Industrially it is inseparable from the kraft pulping process, where "salt cake" sodium sulfate is fed into the recovery furnace and reduced to sodium sulfide, which regenerates the pulping liquor and closes the chemical loop that makes modern paper manufacturing economical.

Beyond pulp and paper, anhydrous Na₂SO₄ is the workhorse detergent filler and builder that bulks out powder detergents and helps keep other ingredients free-flowing, while its intensely hygroscopic-yet-inert character also makes it the standard drying agent chemists use to remove trace water from organic solvent layers after extractions. Vast natural deposits of mirabilite (the decahydrate mineral) and thenardite in saline lakes and playas across the western United States, Central Asia, and northern Africa supply much of the world's demand without any synthesis step required.`,

  formulaExplanation: `Na₂SO₄ pairs two Na⁺ ions with one SO₄²⁻ ion to balance the −2 charge of sulfate. The sulfate ion itself is a symmetric tetrahedron with sulfur in the +6 oxidation state, resonance-delocalized across four equivalent S–O bonds. The decahydrate notation Na₂SO₄·10H₂O adds ten water molecules of crystallization per formula unit, nearly doubling the molar mass to 322.20 g/mol.`,

  chemicalProfile: `Na₂SO₄ is chemically inert and neutral in solution — unlike carbonates or hydroxides, sulfate is the conjugate base of a strong acid (H₂SO₄) and does not hydrolyze water appreciably. It participates in double displacement reactions to precipitate insoluble sulfates (e.g., with BaCl₂ to give BaSO₄, a classic gravimetric sulfate test) and readily forms the decahydrate below 32.4 °C or dehydrates to anhydrous salt above it. It does not react with dilute acids or bases under normal conditions.`,

  uniqueTopics: [
    {
      heading: "Glauber's salt and its cooling dissolution",
      body: "Johann Rudolf Glauber first prepared the decahydrate in 1625 from spring water and called it sal mirabile ('wondrous salt') for its purgative medicinal use. Dissolving Na₂SO₄·10H₂O in water is strongly endothermic, dropping solution temperature by several degrees — a property exploited in Victorian-era 'freezing mixtures' and in modern phase-change materials that store thermal energy by melting and refreezing near 32 °C.",
    },
    {
      heading: "The incongruent solubility transition at 32.4 °C",
      body: "Na₂SO₄'s solubility curve rises sharply to a sharp peak at 32.4 °C, where the stable solid phase switches from the decahydrate to the anhydrous salt; above this transition temperature, solubility actually decreases with rising temperature. This unusual behavior is a staple exam example of phase transitions in solubility diagrams, distinct from the smooth curves of most salts.",
    },
    {
      heading: "Salt cake and the kraft pulping recovery cycle",
      body: "In kraft paper mills, sodium sulfate ('salt cake') is added to the black liquor recovery furnace, where organic pulping residues reduce it to sodium sulfide (Na₂S), regenerating the active cooking chemical (NaOH/Na₂S) used to dissolve lignin from wood chips. This closed-loop chemistry is why sodium sulfate consumption tracks so closely with global paper production.",
    },
    {
      heading: "Detergent builder and drying agent duality",
      body: "Anhydrous Na₂SO₄ serves two very different practical roles: as an inert filler and free-flow agent bulking up powdered laundry detergents, and — because it is so strongly hygroscopic yet unreactive — as the everyday desiccant chemists stir into organic solvent extracts to pull out residual water before evaporation or further reaction.",
    },
    {
      heading: "Natural mineral deposits: thenardite and mirabilite",
      body: "Vast evaporite deposits of thenardite (anhydrous Na₂SO₄) and mirabilite (the decahydrate) accumulate in closed saline lakes and playas, including Searles Lake in California and the Kulunda Steppe in Central Asia. These deposits, formed by evaporative concentration of sulfate-rich brines, supply most of the world's sodium sulfate without requiring synthetic production.",
    },
  ],

  applications: {
    industrial: [
      "Kraft pulping recovery cycle (salt cake reduced to Na₂S in recovery furnace)",
      "Powder detergent filler and builder (bulking agent, anti-caking)",
      "Textile dyeing (promotes even dye uptake by leveling ionic strength)",
      "Glass and ceramic manufacturing (fining agent removing bubbles from molten glass)",
    ],
    laboratory: [
      "Anhydrous drying agent for organic solvents after aqueous extraction",
      "Gravimetric sulfate determination via BaSO₄ precipitation",
      "Preparation of buffered and ionic-strength-adjusted solutions",
      "Demonstrating incongruent solubility and hydrate/anhydrate phase transitions",
    ],
    environmental: "Naturally abundant in saline lakes and groundwater; large-scale industrial discharge is regulated as it elevates salinity and total dissolved solids in receiving waters.",
    biological: "Historically used as a mild osmotic laxative (Glauber's salt); modern medicine uses gentler alternatives, but sulfate remains an essential dietary trace anion.",
  },

  preparation: `Mined directly from thenardite or mirabilite evaporite deposits. Industrially recovered as a byproduct of the kraft pulping process, viscose rayon manufacture, and hydrochloric acid production via the Mannheim and Hargreaves processes (NaCl + H₂SO₄ → Na₂SO₄ + HCl). Laboratory-grade material is purified by recrystallization.`,

  production: `World production exceeds 6 million tonnes annually, with roughly half sourced from natural mineral deposits and half recovered as an industrial byproduct, particularly from pulp mills and chemical manufacturing.`,

  storage: `Anhydrous Na₂SO₄ should be kept sealed and dry — it readily absorbs atmospheric moisture and converts to the decahydrate, changing mass and volume. The decahydrate is stable at room temperature but slowly effloresces (loses water) in very dry air.`,

  handling: `Low hazard; treat as a mild irritant. Avoid inhaling fine anhydrous powder dust. No special ventilation or protective equipment beyond standard laboratory practice is required for routine use.`,

  safety: {
    summary: "Generally low toxicity; used in food, pharmaceutical, and detergent applications. Dust may cause mild respiratory or eye irritation.",
    hazards: [
      "Mild eye and respiratory irritation from dust",
      "No significant acute toxicity at typical exposure levels",
      "Large oral doses act as an osmotic laxative",
    ],
    classification: "Not classified as hazardous under GHS for the pure anhydrous or hydrate forms",
  },

  interestingFacts: [
    "Sodium sulfate's decahydrate dissolution is so endothermic it was used in 17th–18th century 'freezing mixtures' before mechanical refrigeration existed.",
    "The 32.4 °C solubility transition point of Na₂SO₄·10H₂O is used as a calibration reference in thermal analysis instruments.",
    "Searles Lake, California, holds one of the largest evaporite sodium sulfate deposits in the world, alongside borax and other salts.",
    "Modern 'thermal battery' phase-change bricks store solar heat by melting Glauber's salt during the day and releasing heat as it recrystallizes at night.",
  ],

  history: `Johann Rudolf Glauber discovered and named the decahydrate sal mirabile in 1625, promoting it as a medicinal purgative — the compound still bears his name. Its role in industrial chemistry expanded dramatically with the 19th-century Leblanc and Hargreaves processes for hydrochloric acid and soda production, and again in the 20th century with the rise of kraft pulping, which made sodium sulfate a byproduct of nearly every large paper mill.`,

  discovery: "Johann Rudolf Glauber, 1625 — first isolated the decahydrate from mineral spring water in Germany.",

  examNotes: [
    "Molar mass Na₂SO₄ = 2(22.99) + 32.06 + 4(16.00) = 142.04 g/mol.",
    "Molar mass decahydrate Na₂SO₄·10H₂O = 142.04 + 10(18.02) = 322.24 g/mol.",
    "Sulfate is the conjugate base of a strong acid — Na₂SO₄ solutions are neutral, not basic.",
    "Gravimetric test: Na₂SO₄ + BaCl₂ → BaSO₄(s) + 2 NaCl (white precipitate insoluble in dilute acid).",
  ],

  commonMistakes: [
    "Confusing Na₂SO₄ (sulfate, S +6) with Na₂SO₃ (sulfite, S +4) — very different reactivity.",
    "Assuming sodium sulfate solutions are basic like sodium carbonate — sulfate does not hydrolyze water.",
    "Using anhydrous molar mass when a problem specifies the decahydrate mass, or vice versa.",
  ],

  studentTips: [
    "Remember the water-of-crystallization math: 10 × 18.02 ≈ 180.2 g/mol added for the decahydrate.",
    "Link the 32.4 °C transition to phase diagrams — a rare case where solubility decreases above a certain temperature.",
    "Use BaSO₄ precipitation as your go-to mental model for any sulfate identification question.",
  ],

  misconceptions: [
    "Glauber's salt is not a different chemical from sodium sulfate — it is simply the decahydrate crystal form.",
    "Sodium sulfate is not related to sodium sulfide (Na₂S) despite the pulping connection — they are distinct compounds linked only by a reduction reaction.",
    "'Salt cake' is an industrial nickname for sodium sulfate, not a culinary product.",
  ],

  physical: {
    appearance: "White crystalline solid (anhydrous); colorless monoclinic prisms (decahydrate)",
    color: "White to colorless",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.66 g/cm³ (anhydrous); 1.46 g/cm³ (decahydrate)",
    meltingPoint: "884 °C (anhydrous); 32.4 °C (decahydrate, loses water)",
    boilingPoint: "1,429 °C (decomposes, anhydrous)",
    solubility: "195 g/L water at 20 °C (anhydrous), rising sharply to ~500 g/L near 32 °C",
    crystalStructure: "Orthorhombic (thenardite, anhydrous); monoclinic (decahydrate)",
  },

  chemical: {
    classification: "Ionic sulfate salt / alkali metal sulfate",
    polarity: "Ionic",
    oxidationStates: "Na: +1, S: +6, O: −2",
    chemicalFamily: "Group 1 sulfate (alkali metal sulfate)",
  },

  reactions: [
    {
      equation: "Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Barium ion combines with sulfate to form insoluble barium sulfate, the standard gravimetric and qualitative test for sulfate ion.",
      products: "Barium sulfate precipitate (white) and sodium chloride",
      applications: "Gravimetric sulfate analysis, qualitative anion testing",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Gravimetric analysis"],
    },
    {
      equation: "Na₂SO₄·10H₂O(s) ⇌ Na₂SO₄(s) + 10 H₂O(l)",
      type: "Hydrate/anhydrate phase transition",
      conditions: "Above/below 32.4 °C",
      explanation: "Below the transition temperature the decahydrate is the stable solid; above it, the anhydrous salt is stable and solubility behavior reverses — a classic incongruent solubility example.",
      products: "Anhydrous sodium sulfate and liquid water",
      applications: "Phase-change thermal storage, solubility curve demonstrations",
      relatedConcepts: ["Hydrates", "Phase transitions", "Solubility curves"],
    },
    {
      equation: "2 NaCl(s) + H₂SO₄(l) → Na₂SO₄(s) + 2 HCl(g)",
      type: "Acid–salt (Mannheim/Hargreaves process)",
      conditions: "Heated, industrial furnace",
      explanation: "Non-volatile sulfuric acid displaces volatile hydrogen chloride from sodium chloride, historically a major industrial route to both HCl and Na₂SO₄.",
      products: "Sodium sulfate and hydrogen chloride gas",
      applications: "Industrial HCl and salt cake co-production (Hargreaves process)",
      relatedConcepts: ["Acid displacement", "Industrial chemistry", "Volatility"],
    },
    {
      equation: "Na₂SO₄(s) + 2 C(s) → Na₂S(s) + 2 CO₂(g)",
      type: "Carbothermic reduction (kraft recovery furnace)",
      conditions: "High temperature, reducing conditions with organic char",
      explanation: "In the kraft recovery furnace, sodium sulfate is reduced by carbon from spent pulping liquor to sodium sulfide, regenerating active cooking chemical.",
      products: "Sodium sulfide and carbon dioxide",
      applications: "Kraft pulp mill chemical recovery cycle",
      relatedConcepts: ["Redox reactions", "Industrial recovery cycles", "Carbothermic reduction"],
    },
  ],

  relatedFormulas: ["Na2SO4·10H2O", "Na2S", "H2SO4", "BaSO4", "K2SO4"],
  comparisonNote: "Na₂SO₄ (142.04 g/mol) and Na₂CO₃ (105.99 g/mol) are both common sodium salts, but sulfate solutions are neutral while carbonate solutions are noticeably basic due to hydrolysis of CO₃²⁻.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of anhydrous Na₂SO₄.",
      answer: "2(22.99) + 32.06 + 4(16.00) = 142.04 g/mol",
    },
    {
      question: "What is the molar mass of Glauber's salt, Na₂SO₄·10H₂O?",
      answer: "142.04 + 10(18.02) = 322.24 g/mol",
    },
    {
      question: "What mass of BaSO₄ precipitates from complete reaction of 71.02 g Na₂SO₄ with excess BaCl₂?",
      answer: "71.02 g ÷ 142.04 g/mol = 0.500 mol Na₂SO₄ → 0.500 mol BaSO₄ × 233.4 g/mol = 116.7 g",
      hint: "1:1 mole ratio between sulfate and barium sulfate.",
    },
    {
      question: "What percent by mass is water in Na₂SO₄·10H₂O?",
      answer: "180.2/322.24 × 100 ≈ 55.9%",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium sulfate?",
      answer: "142.04 g/mol for anhydrous Na₂SO₄; 322.24 g/mol for the decahydrate (Glauber's salt).",
    },
    {
      question: "What is Glauber's salt?",
      answer: "The common name for sodium sulfate decahydrate, Na₂SO₄·10H₂O, named after its 17th-century discoverer Johann Glauber.",
    },
    {
      question: "Why does sodium sulfate solution feel cold when dissolving?",
      answer: "Dissolving the decahydrate is strongly endothermic, absorbing heat from the surrounding water and lowering its temperature.",
    },
    {
      question: "How is sodium sulfate used in papermaking?",
      answer: "As 'salt cake' fed into the kraft recovery furnace, where it is reduced to sodium sulfide to regenerate active pulping chemicals.",
    },
    {
      question: "Is sodium sulfate the same as Epsom salt?",
      answer: "No — Epsom salt is magnesium sulfate (MgSO₄·7H₂O); sodium sulfate is a chemically distinct compound with different cations.",
    },
    {
      question: "Why is sodium sulfate used to dry organic solvents in the lab?",
      answer: "Anhydrous Na₂SO₄ is highly hygroscopic yet chemically inert, so it absorbs residual water from organic layers without reacting with the solute.",
    },
  ],

  references: [
    { label: "PubChem CID 24436", note: "Sodium sulfate compound data" },
    { label: "USGS", note: "Sodium sulfate mineral production statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic and solubility data" },
  ],
};
