import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumChloride: CompoundProfile = {
  slug: "molar-mass-of-potassium-chloride",
  formula: "KCl",
  name: "Potassium Chloride",
  iupacName: "Potassium chloride",
  commonNames: ["Potassium chloride", "Muriate of potash", "Sylvite (mineral form)"],
  aliases: ["KCl", "Low-sodium salt substitute"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7447-40-7",
  pubchemCid: "4873",
  smiles: "[K+].[Cl-]",
  inchi: "InChI=1S/ClH.K/h1H;/q;+1/p-1",
  exactMass: 73.9327,
  featured: true,
  popular: true,

  overview: `Potassium chloride (KCl) is an ionic salt with a molar mass of 74.55 g/mol, composed of K⁺ (39.10 g/mol) and Cl⁻ (35.45 g/mol) in a 1:1 ratio. It crystallizes, like sodium chloride, in a face-centered cubic rock-salt lattice, and the two compounds share many physical similarities — both are white, water-soluble, cubic crystalline solids — yet they diverge sharply in biological role and taste. While Na⁺ is the dominant cation of extracellular fluid, K⁺ is the dominant intracellular cation, and this fundamental physiological difference underlies both KCl's importance as a fertilizer nutrient and its serious risks when used medically or nutritionally without care.

Potassium is one of the three primary macronutrients (alongside nitrogen and phosphorus) required for plant growth, and KCl — known in the fertilizer industry as muriate of potash (MOP) — is the most widely used potassium fertilizer worldwide, supplying the majority of potassium applied to global cropland. It is mined from ancient evaporite deposits, most notably as the mineral sylvite, often found interlayered with sodium chloride (halite) in massive potash deposits formed from evaporated inland seas.

In human physiology, potassium ion is essential for nerve impulse transmission and cardiac muscle function, maintained within a narrow serum range (roughly 3.5–5.0 mmol/L). This narrow safe range makes KCl a double-edged compound: as an oral or IV supplement it corrects potassium deficiency (hypokalemia) and treats certain cardiac arrhythmias, but rapid intravenous administration or gross overdose disrupts cardiac electrical activity and can be fatal — a property that has made concentrated KCl infusion a component of lethal injection protocols, underscoring how the same ion essential to a heartbeat can also stop one if mismanaged.`,

  formulaExplanation: `The formula KCl reflects a simple 1:1 ionic ratio between the alkali metal cation K⁺ and the halide anion Cl⁻, directly parallel to NaCl. As with all alkali halides, there is no discrete covalent molecule in the solid state — the formula unit describes the smallest whole-number ratio of ions in an extended ionic lattice held together by electrostatic (Coulombic) attraction.`,

  chemicalProfile: `KCl is chemically similar to NaCl: it is a strong electrolyte that dissociates completely in water, does not hydrolyze appreciably (a salt of a strong acid and strong base), and participates in standard precipitation and metathesis reactions typical of alkali halides. Molten KCl can be electrolyzed to produce potassium metal and chlorine gas, analogous to the Downs process for sodium, though potassium's higher reactivity and lower melting point make this route less commercially favored than other potassium extraction methods.`,

  uniqueTopics: [
    {
      heading: "KCl as fertilizer: muriate of potash and global agriculture",
      body: "Potassium chloride, marketed in agriculture as muriate of potash (MOP), supplies the majority of the world's fertilizer potassium, a nutrient essential for plant water regulation, enzyme activation, and disease resistance. Unlike nitrogen, which plants incorporate into organic molecules, potassium remains as the free K⁺ ion within plant tissue, functioning primarily in osmotic and electrochemical roles. Global potash mining and trade — concentrated in Canada, Russia, and Belarus — makes KCl one of the most strategically important bulk commodities in world agriculture.",
    },
    {
      heading: "KCl vs. NaCl: the low-sodium salt substitute",
      body: "Because K⁺ and Na⁺ are both monovalent alkali cations of similar ionic size, KCl can substitute for NaCl in many chemical contexts, including as a seasoning for people needing to reduce dietary sodium (marketed as 'lite salt,' often as a 50:50 KCl/NaCl blend). However, KCl has a distinctly more bitter, metallic aftertaste than NaCl due to differences in how the two ions interact with taste receptors, which limits the concentration at which it can fully replace table salt without altering flavor.",
    },
    {
      heading: "Medical potassium supplementation and cardiac risk",
      body: "KCl is a critical medical electrolyte replacement for hypokalemia (low blood potassium), which can arise from diuretic use, vomiting, diarrhea, or poor dietary intake, and hypokalemia itself can cause dangerous cardiac arrhythmias. Yet potassium's narrow therapeutic window means intravenous KCl must always be diluted and infused slowly under monitoring — undiluted or rapid IV push of concentrated KCl disrupts the resting membrane potential of cardiac cells, halting the heart's electrical conduction. This dual life-saving/lethal nature makes KCl a frequently cited case study in pharmacology and toxicology courses on the importance of concentration and administration rate.",
    },
    {
      heading: "Flame test signature: the lilac potassium color",
      body: "When a potassium salt like KCl is introduced into a flame, excited potassium electrons emit a characteristic pale lilac (light violet) color as they fall back to lower energy levels, a signature distinct from sodium's intense orange-yellow flame. Because sodium contamination is common and its flame color is so much more intense, chemists often view potassium flame tests through a cobalt blue glass filter to block interfering sodium emission and reveal the fainter lilac potassium signal underneath.",
    },
    {
      heading: "Sylvite, sylvinite, and evaporite potash deposits",
      body: "KCl occurs naturally as the mineral sylvite, frequently intermixed with halite (NaCl) in a rock called sylvinite, both formed by evaporation of ancient inland seas and salt lakes over geological time. Massive potash deposits — such as those in Saskatchewan, Canada, one of the world's largest — are mined and processed to separate KCl from co-occurring NaCl using differences in solubility and crystallization behavior at different temperatures, a large-scale industrial application of fractional crystallization principles.",
    },
  ],

  applications: {
    industrial: [
      "Muriate of potash (MOP) fertilizer, the dominant global source of agricultural potassium",
      "Feedstock for producing potassium hydroxide and other potassium chemicals",
      "Component of drilling fluids in the oil and gas industry",
      "De-icing agent (less common than NaCl or CaCl2 due to higher cost)",
    ],
    laboratory: [
      "Standard reference electrolyte for reference electrodes (e.g., saturated KCl salt bridge)",
      "Source of K⁺ ion in qualitative analysis and flame test demonstrations",
      "Isotonic and physiological solution preparation in biochemistry",
    ],
    environmental: "Potash mining generates saline tailings that require careful management to avoid contaminating nearby soil and waterways with excess chloride and salinity.",
    biological: "Essential electrolyte for nerve conduction and cardiac muscle function; used clinically to treat hypokalemia and, in tightly controlled dosing, certain cardiac conditions; critical macronutrient for plant growth as fertilizer potassium.",
  },

  preparation: `Industrially, KCl is separated from mined sylvinite ore (a mixture of KCl and NaCl) by exploiting the differing solubility–temperature behavior of the two salts, using selective crystallization, flotation, or electrostatic separation. It can also be recovered from potassium-rich brines by solar evaporation.`,

  production: `Global potash production is dominated by Canada, Russia, and Belarus, which together supply the majority of the world's potassium fertilizer; total production exceeds 40 million tonnes of KCl-equivalent annually.`,

  storage: `Store in dry, sealed containers, as KCl is mildly hygroscopic and can cake if exposed to humid air. Keep fertilizer-grade and pharmaceutical-grade material separated to avoid contamination given their very different purity requirements.`,

  handling: `Low acute hazard for handling the solid; avoid dust inhalation and eye contact with concentrated solutions. Medical-grade KCl for injection must always be diluted and administered under strict clinical protocols due to cardiac risk from concentrated or rapid dosing.`,

  safety: {
    summary: "Low hazard as a solid salt for industrial and agricultural handling, but concentrated or rapidly administered medical KCl solutions pose serious, potentially fatal cardiac risk if mismanaged.",
    hazards: [
      "Eye and mild skin irritation from concentrated solutions or dust",
      "Serious cardiac arrhythmia risk from rapid or concentrated intravenous administration (medical context)",
      "Ingestion of large doses can cause gastrointestinal upset and, in extreme cases, hyperkalemia",
    ],
    classification: "Not classified as hazardous under GHS for the pure solid (agricultural/industrial grade)",
  },

  interestingFacts: [
    "KCl and NaCl look and taste almost identical as crystals but differ enough in flavor perception that most people notice KCl's bitter aftertaste at high concentration.",
    "Potassium's flame test color (lilac) is much fainter than sodium's intense orange, requiring a blue glass filter to observe clearly when sodium is also present.",
    "Canada's Saskatchewan potash deposits are among the largest in the world, supplying a major share of global fertilizer potassium.",
    "KCl solutions are used in reference electrodes (e.g., saturated calomel and silver/silver chloride electrodes) because K⁺ and Cl⁻ diffuse through salt bridges at closely matched rates, minimizing junction potential errors.",
  ],

  history: `Potassium salts have been used since antiquity in the form of potash (crude potassium carbonate leached from wood ashes), the source of the element's name. Pure potassium chloride was characterized chemically in the 19th century as mineralogists identified sylvite deposits and industrial chemists began separating it from associated sodium chloride. Its importance grew enormously in the 20th century with the rise of intensive agriculture and demand for concentrated potassium fertilizers.`,

  discovery: "Potash-derived potassium compounds were used since antiquity; pure KCl was characterized as 19th-century mineralogy and industrial separation techniques matured alongside the discovery and mining of sylvite deposits.",

  examNotes: [
    "Molar mass KCl = 39.10 + 35.45 = 74.55 g/mol.",
    "KCl is a strong electrolyte: 1 mol dissolved → 1 mol K⁺ + 1 mol Cl⁻ (van't Hoff factor i ≈ 2, same pattern as NaCl).",
    "Flame test: potassium gives a lilac/violet flame, distinct from sodium's orange-yellow — useful for qualitative cation identification.",
    "KCl does not hydrolyze in water (salt of strong acid HCl and strong base KOH), so its aqueous solution is neutral (pH ≈ 7).",
  ],

  commonMistakes: [
    "Assuming KCl tastes identical to NaCl — it has a distinct bitter, metallic aftertaste that limits its use as a full 1:1 salt substitute.",
    "Confusing potassium chloride (KCl) with potassium chlorate (KClO₃) — chlorate is an oxidizer used in different applications and has very different hazards.",
    "Underestimating the cardiac danger of concentrated or rapid IV potassium administration — this is a well-known clinical error to avoid, not just a laboratory chemistry detail.",
  ],

  studentTips: [
    "Draw a direct comparison table between KCl and NaCl (molar mass, ions released, flame color, biological role) to master alkali halide comparison questions.",
    "Remember 'K stays inside, Na stays outside' as a mnemonic for potassium's intracellular vs. sodium's extracellular physiological dominance.",
    "Link the lilac flame test result to the general pattern that heavier alkali metals show progressively different emission colors down the group.",
  ],

  misconceptions: [
    "Potassium chloride is not more dangerous than sodium chloride in normal dietary or agricultural use — its serious risks arise specifically from concentrated medical/IV administration, not typical salt-substitute consumption.",
    "KCl and table salt are not simply interchangeable 1:1 in cooking due to taste differences, even though both are simple alkali halides.",
    "Muriate of potash (KCl fertilizer) is not the same as 'potash' in the broadest historical sense, which originally referred to potassium carbonate leached from wood ash.",
  ],

  physical: {
    appearance: "White or colorless crystalline solid",
    color: "White (pure); may show pink/red tint from mineral impurities in natural sylvite",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.98 g/cm³ (25 °C)",
    meltingPoint: "770 °C",
    boilingPoint: "1,420 °C",
    solubility: "342 g/L water at 20 °C (increases notably with temperature)",
    crystalStructure: "Face-centered cubic (rock salt structure, same as NaCl)",
  },

  chemical: {
    classification: "Ionic salt / alkali metal halide",
    polarity: "Ionic (no molecular dipole in the crystal lattice)",
    oxidationStates: "K: +1, Cl: −1",
    chemicalFamily: "Group 1 halide (alkali metal chloride)",
  },

  reactions: [
    {
      equation: "KCl(aq) + AgNO₃(aq) → AgCl(s) + KNO₃(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Silver ion combines with chloride to form insoluble silver chloride, the same qualitative chloride test used for any soluble chloride salt including KCl.",
      products: "Silver chloride precipitate and potassium nitrate solution",
      applications: "Qualitative analysis for chloride ion, gravimetric chloride determination",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Qualitative analysis"],
    },
    {
      equation: "2 KCl(l) → 2 K(l) + Cl₂(g)",
      type: "Electrolysis (molten salt)",
      conditions: "Molten KCl, direct current, inert electrodes",
      explanation: "Electrolysis of molten potassium chloride yields potassium metal at the cathode and chlorine gas at the anode, analogous to the Downs process for sodium.",
      products: "Potassium metal and chlorine gas",
      applications: "Alternative potassium metal production route, electrolysis teaching example",
      relatedConcepts: ["Electrolysis", "Redox", "Ionic compounds"],
    },
    {
      equation: "KCl(aq) + NaOH(aq) → no reaction",
      type: "Non-reaction (spectator ion demonstration)",
      conditions: "Aqueous, room temperature",
      explanation: "Because both possible product combinations (KOH and NaCl) are soluble strong electrolytes, no precipitate or gas forms — a useful negative example when teaching solubility rules and net ionic equations.",
      products: "No net reaction; all ions remain in solution as spectators",
      applications: "Teaching solubility rules, contrasting reactive vs. non-reactive ion combinations",
      relatedConcepts: ["Spectator ions", "Solubility rules", "Net ionic equations"],
    },
    {
      equation: "KOH(aq) + HCl(aq) → KCl(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, room temperature",
      explanation: "Strong base and strong acid neutralize completely to form the neutral salt potassium chloride and water, a textbook example of a strong acid–strong base titration.",
      products: "Potassium chloride and water",
      applications: "Acid–base titration standardization, teaching neutral salt formation",
      relatedConcepts: ["Neutralization", "Strong acid–strong base titration", "Salt hydrolysis (absence of)"],
    },
  ],

  relatedFormulas: ["NaCl", "CaCl2", "KNO3", "KOH", "KBr"],
  comparisonNote: "KCl (74.55 g/mol) and NaCl (58.44 g/mol) share the same rock-salt crystal structure and 1:1 ionic ratio, but KCl's larger, bitterer-tasting K⁺ ion makes it a physiologically distinct nutrient used for potassium fertilization and supplementation rather than as a direct 1:1 seasoning replacement.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of potassium chloride, KCl.",
      answer: "39.10 + 35.45 = 74.55 g/mol",
    },
    {
      question: "How many grams of KCl are needed to prepare 250 mL of a 0.100 M solution?",
      answer: "0.100 mol/L × 0.250 L = 0.0250 mol; 0.0250 × 74.55 = 1.86 g",
    },
    {
      question: "What color flame does a potassium salt like KCl produce, and why might it be hard to observe if sodium is also present?",
      answer: "A pale lilac flame; sodium's much more intense orange-yellow emission can mask the fainter potassium color unless viewed through a cobalt blue filter.",
    },
    {
      question: "Why must concentrated KCl never be injected rapidly as an undiluted IV push?",
      answer: "A sudden spike in extracellular K⁺ disrupts the resting membrane potential of cardiac cells, halting normal electrical conduction and potentially stopping the heart.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium chloride?",
      answer: "74.55 g/mol, calculated as 39.10 (K) + 35.45 (Cl).",
    },
    {
      question: "Is potassium chloride the same as table salt?",
      answer: "No. Table salt is sodium chloride (NaCl); potassium chloride (KCl) is a related but distinct alkali halide, often used as a lower-sodium salt substitute despite a different, more bitter taste.",
    },
    {
      question: "Why is KCl important in agriculture?",
      answer: "It is the primary source of potassium fertilizer (muriate of potash), supplying an essential plant macronutrient for water regulation and enzyme function.",
    },
    {
      question: "Can potassium chloride be dangerous?",
      answer: "In normal dietary or agricultural amounts it is safe, but concentrated or rapidly infused medical-grade KCl can cause fatal cardiac arrhythmias if not properly diluted and administered.",
    },
    {
      question: "What color does potassium turn a flame in a flame test?",
      answer: "A pale lilac (light violet) color, distinct from sodium's much brighter orange-yellow flame.",
    },
  ],

  references: [
    { label: "USGS Mineral Commodity Summaries", note: "Global potash mining and production statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of potassium chloride" },
    { label: "PubChem CID 4873", note: "Structural and safety identifiers" },
  ],
};
