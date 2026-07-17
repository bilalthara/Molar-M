import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumCarbonate: CompoundProfile = {
  slug: "molar-mass-of-sodium-carbonate",
  formula: "Na2CO3",
  name: "Sodium Carbonate",
  iupacName: "Disodium carbonate",
  commonNames: ["Soda ash", "Washing soda (decahydrate)", "Sodium carbonate"],
  aliases: ["Na₂CO₃", "Soda crystals", "Natrite"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "497-19-8",
  pubchemCid: "10340",
  smiles: "[Na+].[Na+].[O-]C([O-])=O",
  inchi: "InChI=1S/CH2O3.2Na/c2-1(3)4;;/h(H2,2,3,4);;/q;2*+1/p-2",
  exactMass: 105.964282,
  featured: true,
  popular: true,

  overview: `Sodium carbonate (Na₂CO₃) is an alkaline salt with a molar mass of 105.99 g/mol, formed from two sodium cations, one carbon, and three oxygen atoms arranged as the carbonate ion (CO₃²⁻). Known industrially as soda ash, it is one of the highest-volume inorganic chemicals manufactured worldwide, ranking alongside sulfuric acid and ammonia as a backbone of the chemical industry. Anhydrous soda ash is a white, odorless powder that readily absorbs atmospheric moisture to form hydrates, the most familiar being the decahydrate Na₂CO₃·10H₂O, sold as washing soda for laundry and household cleaning.

Sodium carbonate is the salt of a strong base (NaOH) and a weak acid (carbonic acid, H₂CO₃), which makes its aqueous solutions distinctly alkaline through carbonate hydrolysis: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻. This basicity underlies its widespread use as a water softener, pH buffer, and cleaning agent — it neutralizes acidic soils, raises pool pH, and reacts with the calcium and magnesium ions responsible for water hardness to precipitate them as insoluble carbonates. Unlike sodium bicarbonate (baking soda, NaHCO₃), sodium carbonate is the fully deprotonated carbonate salt and is considerably more alkaline and more chemically aggressive.

Industrially, sodium carbonate is indispensable to glassmaking: mixed with silica sand and calcium carbonate, it lowers the melting point of the silica network, enabling glass to be formed at economically practical furnace temperatures. It also serves as a key precursor in the Solvay process alongside calcium chloride byproduct formation, and its natural mineral form, trona (a mixed sodium carbonate–bicarbonate mineral), is mined at enormous scale from deposits such as those in Wyoming's Green River Formation, providing a cheaper alternative to fully synthetic Solvay-process production.`,

  formulaExplanation: `The formula Na₂CO₃ shows two Na⁺ ions balancing the 2− charge of the carbonate polyatomic ion, CO₃²⁻. Within the carbonate ion, carbon forms three resonance-delocalized bonds to oxygen in a trigonal planar arrangement, distributing the negative charge symmetrically across all three oxygens. This resonance stabilization is why carbonate salts, though basic, are far less reactive as bases than hydroxides.`,

  chemicalProfile: `Sodium carbonate acts as a moderately strong Brønsted base in water via carbonate hydrolysis, and it reacts vigorously with acids to release carbon dioxide gas — the classic "fizz test" that also identifies carbonate ions in unknown samples. It participates in double-displacement precipitation reactions with virtually all divalent and trivalent metal cations except the alkali metals, forming insoluble carbonates that are the chemical basis of water-softening and scale-removal applications.`,

  uniqueTopics: [
    {
      heading: "The Solvay process and industrial-scale synthesis",
      body: "Most synthetic sodium carbonate is manufactured by the Solvay (ammonia-soda) process, in which brine saturated with ammonia is carbonated with CO₂ to precipitate sodium bicarbonate, which is then calcined (heated) to yield Na₂CO₃: 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂. The process cleverly recycles ammonia and produces calcium chloride as a byproduct, linking the industrial chemistry of Na₂CO₃ directly to that of CaCl₂. Ernest Solvay's 1861 process displaced the older, more wasteful Leblanc process within decades because it was cheaper and generated less pollution.",
    },
    {
      heading: "Glass manufacturing: the flux that lowers silica's melting point",
      body: "Pure silica (SiO₂) melts above 1,700 °C, far too hot for economical industrial glassmaking. Adding soda ash as a flux disrupts the silicon–oxygen network, lowering the softening temperature to a workable 1,000–1,200 °C range in combination with lime (CaO) as a stabilizer. This soda-lime-silica glass composition — roughly 70% silica, 15% soda ash, 10% lime — accounts for the vast majority of glass produced globally, from windows to bottles.",
    },
    {
      heading: "Washing soda vs. baking soda: same metal, different base strength",
      body: "Sodium carbonate (washing soda, Na₂CO₃) and sodium bicarbonate (baking soda, NaHCO₃) are frequently confused because both are alkaline sodium salts of carbonic acid, but they differ by one proton and one water molecule of reactivity. Na₂CO₃ is the fully deprotonated carbonate and gives distinctly more alkaline solutions (pH ≈ 11.6 for a 1% solution) than NaHCO₃ (pH ≈ 8.3), making washing soda effective at cutting grease and removing stains but too harsh and irritating for the culinary and antacid uses that baking soda serves.",
    },
    {
      heading: "Water softening and hardness removal",
      body: "Hard water contains dissolved Ca²⁺ and Mg²⁺ ions that form scale and interfere with soap action. Sodium carbonate softens water by precipitating these ions as insoluble carbonates (Ca²⁺ + CO₃²⁻ → CaCO₃↓), replacing them with sodium ions that do not cause scale. This principle underlies its historical use as a laundry additive long before synthetic water softening resins and detergent builders became common.",
    },
    {
      heading: "Natural trona deposits and mineral soda ash",
      body: "While much of the world's soda ash is synthesized, the United States produces the majority of its supply from natural trona ore (Na₃(HCO₃)(CO₃)·2H₂O), mined primarily from Wyoming's Green River Formation — one of the largest natural sodium carbonate deposits on Earth, formed from evaporation of an ancient Eocene lake. Processing trona into pure soda ash avoids the ammonia and brine inputs required by the Solvay process, making natural soda ash production significantly cheaper and less energy-intensive where large trona deposits exist.",
    },
    {
      heading: "Hydrate chemistry: decahydrate, heptahydrate, and monohydrate",
      body: "Sodium carbonate crystallizes with different amounts of water of hydration depending on temperature and humidity: the decahydrate Na₂CO₃·10H₂O (natron, the most hydrated and most common consumer washing-soda form), the heptahydrate Na₂CO₃·7H₂O, and the monohydrate Na₂CO₃·H₂O (thermonatrite). The decahydrate effloresces (loses water spontaneously to air) to form the monohydrate, a visible demonstration of hydrate equilibrium with atmospheric humidity that is a useful classroom illustration of Le Chatelier's principle applied to water vapor pressure.",
    },
  ],

  applications: {
    industrial: [
      "Glass manufacturing as a flux to lower the melting point of silica",
      "Detergent and soap manufacturing as a builder and grease-cutting agent",
      "Paper pulping (kraft process) and textile processing",
      "Water treatment for softening and pH adjustment",
      "Raw material for other sodium chemicals (silicates, phosphates)",
    ],
    laboratory: [
      "Primary standard base for standardizing acid solutions in titrations",
      "Buffer component in analytical and biochemical preparations",
      "Test reagent for carbonate/CO₂ evolution demonstrations",
    ],
    environmental: "Used to neutralize acidic industrial effluents and flue gases; large-scale mining of trona deposits has localized land-use and habitat impacts in production regions.",
    biological: "Not a significant biological nutrient; historically used in mild antiseptic and cleaning formulations, though largely superseded by milder alternatives for skin contact due to its alkalinity.",
  },

  preparation: `Industrially produced by the Solvay process (ammonia-soda process) from brine, ammonia, and CO₂, or by refining natural trona ore through calcination and purification. Laboratory-scale sodium carbonate can be prepared by thermally decomposing sodium bicarbonate: 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂.`,

  production: `Global soda ash production exceeds 60 million tonnes annually, split between Solvay-process synthetic manufacture (dominant outside North America) and natural trona-ore refining (dominant in the United States, especially Wyoming).`,

  storage: `Store in a dry, sealed container away from moisture, since the anhydrous form absorbs atmospheric water to form hydrates over time, altering its effective concentration and mass. Keep separate from acids and ammonium salts.`,

  handling: `Wear gloves and eye protection; sodium carbonate dust and concentrated solutions are alkaline irritants to skin, eyes, and respiratory tract. Avoid generating airborne dust during transfer of bulk soda ash.`,

  safety: {
    summary: "Mild-to-moderate irritant; concentrated solutions and dust can irritate eyes, skin, and airways, though it is far less hazardous than strong hydroxide bases like NaOH.",
    hazards: [
      "Eye and skin irritation from dust or concentrated solution",
      "Respiratory irritation from inhaled powder",
      "Reacts with acids to release CO₂ gas, which can pressurize sealed containers",
    ],
    classification: "GHS: Eye Irrit. 2",
  },

  interestingFacts: [
    "Sodium carbonate's decahydrate form gives up water to the air (efflorescence), visibly turning clear crystals into a white powder over time.",
    "Ancient Egyptians used natural soda ash (natron) in mummification and early glassmaking millennia before the Solvay process existed.",
    "Wyoming's trona deposits are so extensive that the state supplies a large share of the world's natural soda ash.",
    "Soda ash and lime together lower the melting point of silica by over 500 °C, making modern glass manufacturing economically viable.",
  ],

  history: `Natural soda ash (natron) was used by ancient Egyptians for glassmaking, mummification, and cleaning as early as 3500 BCE. The Leblanc process, developed in the 1790s, was the first major industrial synthesis but generated large amounts of waste and pollution. Ernest Solvay's ammonia-soda process, patented in 1861 and commercialized through the 1860s–1880s, largely replaced Leblanc's method due to lower cost, higher purity, and less environmental waste, and it remains the dominant synthetic route today.`,

  discovery: "Known and used in impure natural forms since antiquity; the Solvay process for efficient industrial synthesis was developed by Belgian chemist Ernest Solvay starting in 1861.",

  examNotes: [
    "Molar mass Na₂CO₃ = 2(22.99) + 12.01 + 3(16.00) = 105.99 g/mol.",
    "Carbonate hydrolysis in water: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, explaining why Na₂CO₃ solutions test basic despite containing no hydroxide ion directly.",
    "Solvay process key step: 2 NaHCO₃ →(heat) Na₂CO₃ + H₂O + CO₂ — memorize for industrial chemistry questions.",
    "Reaction with acid: Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂ — used for standardizing acid solutions via titration to a methyl orange endpoint.",
  ],

  commonMistakes: [
    "Confusing sodium carbonate (Na₂CO₃, washing soda) with sodium bicarbonate (NaHCO₃, baking soda) — they differ in formula, basicity, and use.",
    "Forgetting to include water of hydration mass when a problem specifies the decahydrate (Na₂CO₃·10H₂O, M = 286.14 g/mol) rather than anhydrous soda ash.",
    "Assuming Na₂CO₃ is as strongly basic as NaOH — it is a weaker base because carbonate hydrolysis is only partial, unlike full hydroxide dissociation.",
  ],

  studentTips: [
    "Use Na₂CO₃ as the standard example of 'basic salt from strong base + weak acid' when explaining salt hydrolysis in acid–base units.",
    "Remember the two-step titration curve of Na₂CO₃ with strong acid (first to bicarbonate, then to carbonic acid/CO₂) for advanced titration problems.",
    "Link glassmaking flux chemistry to the general principle that ionic additives disrupt covalent network solids and lower their melting points.",
  ],

  misconceptions: [
    "Washing soda and baking soda are not interchangeable in recipes or cleaning — washing soda is considerably more alkaline and can be irritating on skin or in food.",
    "Sodium carbonate does not contain hydroxide ions directly; its basicity comes entirely from carbonate ion hydrolysis in water.",
    "Not all 'soda' products are the same compound — soda ash (Na₂CO₃), baking soda (NaHCO₃), and caustic soda (NaOH) are three distinct sodium compounds with very different properties.",
  ],

  physical: {
    appearance: "White, odorless crystalline powder or granules",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.54 g/cm³ (anhydrous)",
    meltingPoint: "851 °C (anhydrous)",
    boilingPoint: "Decomposes before boiling at atmospheric pressure",
    solubility: "215 g/L water at 20 °C (increases with temperature up to a maximum near 35 °C)",
    crystalStructure: "Monoclinic (anhydrous Na₂CO₃)",
  },

  chemical: {
    classification: "Inorganic salt / alkali metal carbonate",
    basicity: "Weak-to-moderate base in water via carbonate hydrolysis (pH ≈ 11.6 for 1% solution)",
    polarity: "Ionic (highly polar bonds within carbonate ion; ionic lattice overall)",
    molecularGeometry: "Trigonal planar carbonate ion (CO₃²⁻)",
    bondAngle: "120° (within the CO₃²⁻ ion)",
    oxidationStates: "Na: +1, C: +4, O: −2",
    chemicalFamily: "Group 1 carbonate (alkali metal carbonate)",
  },

  reactions: [
    {
      equation: "Na₂CO₃(aq) + 2 HCl(aq) → 2 NaCl(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–base (with gas evolution)",
      conditions: "Aqueous, room temperature",
      explanation: "Strong acid fully protonates carbonate, first to bicarbonate then to carbonic acid, which decomposes to release CO₂ gas — a two-stage neutralization visible in titration curves.",
      products: "Sodium chloride, water, and carbon dioxide gas",
      applications: "Acid standardization via titration, carbonate qualitative testing, industrial acid neutralization",
      relatedConcepts: ["Diprotic bases", "Titration curves", "Gas evolution"],
    },
    {
      equation: "2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)",
      type: "Thermal decomposition (calcination)",
      conditions: "Heat (~200 °C)",
      explanation: "Sodium bicarbonate decomposes on heating to sodium carbonate, water vapor, and carbon dioxide — the final step of the Solvay process and a common baking-chemistry reaction.",
      products: "Sodium carbonate, water vapor, carbon dioxide",
      applications: "Solvay process soda ash production, baking chemistry (leavening byproduct)",
      relatedConcepts: ["Thermal decomposition", "Industrial synthesis", "Calcination"],
    },
    {
      equation: "Na₂CO₃(aq) + CaCl₂(aq) → CaCO₃(s) + 2 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Carbonate ions precipitate calcium ions as insoluble calcium carbonate, removing hardness-causing ions from water.",
      products: "Calcium carbonate precipitate and sodium chloride solution",
      applications: "Water softening, industrial descaling, precipitation demonstrations",
      relatedConcepts: ["Solubility rules", "Water hardness", "Precipitation reactions"],
    },
    {
      equation: "Na₂CO₃(s) + SiO₂(s) → Na₂SiO₃(l) + CO₂(g)",
      type: "High-temperature flux reaction",
      conditions: "Furnace temperature ~1,000–1,200 °C",
      explanation: "Molten sodium carbonate reacts with silica to form sodium silicate, disrupting the silicon–oxygen network and lowering the effective melting point of the glass batch.",
      products: "Sodium silicate (glass-forming melt) and carbon dioxide gas",
      applications: "Industrial glass manufacturing, ceramic flux chemistry",
      relatedConcepts: ["Network solids", "Flux chemistry", "Industrial materials science"],
    },
  ],

  relatedFormulas: ["NaHCO3", "NaOH", "NaCl", "CaCO3", "CaCl2"],
  comparisonNote: "Na₂CO₃ (105.99 g/mol, strongly alkaline washing soda) and NaHCO₃ (84.01 g/mol, mildly alkaline baking soda) are related by a single proton and water molecule but differ enormously in basicity and everyday use — Na₂CO₃ is used for cleaning and industry, while NaHCO₃ is safe for cooking and antacid use.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of sodium carbonate, Na₂CO₃.",
      answer: "2(22.99) + 12.01 + 3(16.00) = 105.99 g/mol",
    },
    {
      question: "What is the molar mass of the decahydrate, Na₂CO₃·10H₂O?",
      answer: "105.99 + 10(18.02) = 105.99 + 180.20 = 286.19 g/mol",
      hint: "Add ten full water molecule masses to the anhydrous molar mass.",
    },
    {
      question: "How many grams of Na₂CO₃ are needed to react completely with 0.500 mol HCl?",
      answer: "Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂, so 0.500 mol HCl needs 0.250 mol Na₂CO₃ = 0.250 × 105.99 = 26.5 g",
    },
    {
      question: "Why does a solution of Na₂CO₃ test basic even though it contains no OH⁻ in its formula?",
      answer: "Carbonate ion hydrolyzes water: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, generating hydroxide ion and raising pH above 7.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium carbonate?",
      answer: "105.99 g/mol for the anhydrous form, calculated as 2 × 22.99 (Na) + 12.01 (C) + 3 × 16.00 (O).",
    },
    {
      question: "Is sodium carbonate the same as baking soda?",
      answer: "No. Baking soda is sodium bicarbonate (NaHCO₃); sodium carbonate (Na₂CO₃, washing soda) is more alkaline and used for cleaning, not cooking.",
    },
    {
      question: "What is soda ash used for?",
      answer: "Primarily glass manufacturing, detergent production, water treatment, and as an industrial pH-adjusting and water-softening agent.",
    },
    {
      question: "Where does natural sodium carbonate come from?",
      answer: "It is mined as trona ore, most abundantly from Wyoming's Green River Formation in the United States, an ancient evaporated lake bed.",
    },
    {
      question: "How is sodium carbonate made industrially?",
      answer: "Mainly by the Solvay process, which carbonates ammoniated brine to form sodium bicarbonate that is then calcined to sodium carbonate.",
    },
  ],

  references: [
    { label: "USGS Mineral Commodity Summaries", note: "Global soda ash production and trona mining statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of sodium carbonate" },
    { label: "PubChem CID 10340", note: "Structural and safety identifiers" },
  ],
};
