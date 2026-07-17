import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumHydroxide: CompoundProfile = {
  slug: "molar-mass-of-sodium-hydroxide",
  formula: "NaOH",
  name: "Sodium Hydroxide",
  iupacName: "Sodium hydroxide",
  commonNames: ["Caustic soda", "Lye", "Sodium hydroxide"],
  aliases: ["NaOH", "Caustic"],
  category: "base",
  categories: ["base", "inorganic"],
  casNumber: "1310-73-2",
  pubchemCid: "14798",
  smiles: "[OH-].[Na+]",
  inchi: "InChI=1S/Na.H2O/h;1H/q+1;/p-1",
  exactMass: 39.992509329,
  featured: true,
  popular: true,

  overview: `Sodium hydroxide (NaOH) is a strong base with molar mass 40.00 g/mol (Na 22.99 + O 16.00 + H 1.008). It dissociates completely in water to Na⁺ and OH⁻, giving pH values above 13 for concentrated solutions. NaOH is hygroscopic and deliquescent — it absorbs moisture from air until dissolving — and reacts exothermically with water (ΔH ≈ −44 kJ/mol dissolution).

NaOH is produced at massive scale by the chlor-alkali process alongside chlorine and hydrogen from brine electrolysis. Its ability to saponify triglycerides (breaking ester bonds to form soap and glycerol) has made it central to soap manufacturing for centuries. In chemistry education, NaOH is the standard strong base for titrations against HCl and for adjusting pH in countless reactions.`,

  formulaExplanation: `NaOH consists of Na⁺ and OH⁻ ions. In solid form it exists as an ionic lattice; in solution the hydroxide ion is the active base species. The formula shows a 1:1 ratio of sodium to hydroxide, distinguishing it from dibasic bases like Ca(OH)₂.`,

  chemicalProfile: `NaOH is a Brønsted base (proton acceptor) and Lewis base. It neutralizes acids, precipitates metal hydroxides from salt solutions (e.g., Fe³⁺ + 3 OH⁻ → Fe(OH)₃), and attacks amphoteric aluminum and zinc oxides. Hot concentrated NaOH reacts with aluminum metal: 2 Al + 2 NaOH + 6 H₂O → 2 Na[Al(OH)₄] + 3 H₂. It corrodes glass (attacks silica) over time — store in polyethylene, not glass, for long periods.`,

  uniqueTopics: [
    {
      heading: "Saponification chemistry: from fats to soap",
      body: "Saponifying a triglyceride with sodium hydroxide hydrolyzes each of its three ester bonds, releasing glycerol and three sodium salts of long-chain fatty acids — soap. The sodium carboxylate 'head' is hydrophilic while the long hydrocarbon 'tail' is hydrophobic, and this dual character is exactly what allows soap micelles to surround and lift away oily grime, making NaOH-based saponification the chemical foundation of traditional bar soap manufacturing.",
    },
    {
      heading: "The chlor-alkali process: NaOH as a co-product of chlorine production",
      body: "Nearly all industrial sodium hydroxide is produced as a co-product of chlorine gas manufacture through electrolysis of saturated brine, meaning NaOH supply and price are tightly linked to chlorine demand (and vice versa) rather than being independently driven by hydroxide demand alone — an important economic and industrial chemistry link that explains fluctuations in caustic soda markets tracking the chlorine/PVC industry.",
    },
    {
      heading: "NaOH vs. KOH: solubility, cost, and application divide",
      body: "Although sodium hydroxide and potassium hydroxide are both strong Group 1 hydroxides with nearly identical acid–base chemistry, NaOH is cheaper and dominates large-scale industrial uses like pulp processing and hard bar soap manufacture, while KOH's superior solubility in alcohols makes it preferred for biodiesel transesterification and for producing softer, more liquid potassium-based soaps — a clear case of practical solubility differences, not intrinsic base strength, driving industrial compound choice.",
    },
    {
      heading: "Drain and oven cleaner chemistry: hydrolyzing grease and protein",
      body: "NaOH's aggressive hydrolysis of both ester bonds (in fats and grease) and amide/peptide bonds (in proteins like hair) is precisely why it is the active ingredient in many drain cleaners and oven cleaners — it chemically dissolves the organic clogs and baked-on residue that mechanical cleaning alone struggles to remove, though this same tissue-dissolving power is what makes concentrated NaOH so hazardous to skin and eyes.",
    },
  ],

  applications: {
    industrial: [
      "Soap and detergent manufacturing (saponification of fats)",
      "Pulp and paper processing (Kraft process for lignin removal)",
      "Petroleum refining (mercaptan removal)",
      "Aluminum ore processing (Bayer process)",
      "pH adjustment in water treatment and food processing",
    ],
    laboratory: [
      "Standard strong base for acid–base titrations",
      "Preparation of buffer solutions (with weak acids)",
      "Qualitative analysis — precipitating metal hydroxides",
    ],
    environmental: "Used in scrubbers to neutralize acidic industrial effluents and in biodiesel production to remove free fatty acids.",
    biological: "Not used biologically; highly destructive to tissue — dissolves proteins and lipids in skin (chemical burn mechanism).",
  },

  preparation: `Electrolysis of NaCl brine (chlor-alkali process) is the industrial route. Laboratory: react calcium hydroxide with sodium carbonate (Na₂CO₃ + Ca(OH)₂ → 2 NaOH + CaCO₃), or purchase reagent pellets.`,

  production: `Global production exceeds 70 million tonnes annually. Membrane cell technology dominates new installations for lower energy use and avoidance of mercury contamination.`,

  storage: `Store in airtight, corrosion-resistant containers (HDPE). Keep dry — pellets absorb CO₂ forming Na₂CO₃ on exposure. Separate from acids and aluminum.`,

  handling: `Extremely corrosive. Wear nitrile or neoprene gloves, chemical splash goggles, and face shield. Add NaOH slowly to water (still exothermic). Never handle with bare hands — slippery feel indicates skin saponification has begun.`,

  safety: {
    summary: "Severe corrosive hazard to skin, eyes, and respiratory tract. Generates heat when dissolved in water.",
    hazards: [
      "Chemical burns — may be deeper than apparent initially",
      "Eye damage leading to permanent blindness",
      "Exothermic dissolution can cause boiling and splashing",
      "Reacts with aluminum to produce hydrogen gas",
    ],
    classification: "GHS: Skin Corr. 1A, Eye Dam. 1",
  },

  interestingFacts: [
    "NaOH molar mass ~40 g/mol makes 40 g exactly 1 mole — convenient for quick calculations.",
    "Drain cleaners often contain 30–50% NaOH to dissolve grease and hair (protein hydrolysis).",
    "The slippery feel of NaOH on skin is due to saponification of fatty acids in the skin.",
    "NaOH was historically called caustic soda to distinguish from caustic potash (KOH).",
  ],

  history: `LeBlanc process (late 18th century) produced Na₂CO₃, from which NaOH could be prepared. The chlor-alkali process (late 19th century) revolutionized direct NaOH production. Castner-Kellner mercury cell (1892) and modern membrane cells improved efficiency and environmental safety.`,

  discovery: "Humphry Davy isolated sodium metal (1807); NaOH as ionic compound understood through electrolysis and Arrhenius ionic theory.",

  examNotes: [
    "Molar mass NaOH = 22.99 + 16.00 + 1.008 = 40.00 g/mol.",
    "Strong base: 1 mol NaOH neutralizes 1 mol HCl (monoprotic acid).",
    "For H₂SO₄: 2 mol NaOH per mol acid (diprotic).",
    "NaOH absorbs CO₂: 2 NaOH + CO₂ → Na₂CO₃ + H₂O — relevant to storage and air exposure.",
  ],

  commonMistakes: [
    "Confusing NaOH (40 g/mol) with Na₂O (62 g/mol) or Na₂CO₃ (106 g/mol).",
    "Using NaOH molar mass when calculating moles of OH⁻ from Ca(OH)₂ (which provides 2 OH⁻ per formula unit).",
    "Storing NaOH in glass bottles long-term (attacks glass at high concentration).",
  ],

  studentTips: [
    "Round 40.00 g/mol to 40 for mental math in titration problems.",
    "Standardize NaOH titrant against potassium hydrogen phthalate (KHP) — know this lab procedure.",
    "Link to saponification: fat + 3 NaOH → glycerol + 3 soap molecules.",
  ],

  misconceptions: [
    "NaOH is not the same as sodium oxide (Na₂O) — adding water to Na₂O gives NaOH.",
    "Dilute NaOH is still corrosive; dilution reduces but does not eliminate hazard.",
    "NaOH does not contain molecular 'NaOH' units in solution — it is fully ionized.",
  ],

  physical: {
    appearance: "White pellets, flakes, or granules (solid); colorless solution",
    color: "White (solid)",
    odor: "Odorless",
    stateAtSTP: "Solid (deliquescent)",
    density: "2.13 g/cm³ (solid); solution density varies with concentration",
    meltingPoint: "318 °C",
    boilingPoint: "1,388 °C",
    solubility: "1110 g/L water at 20 °C (highly soluble, exothermic)",
    crystalStructure: "Orthorhombic (β-NaOH); monoclinic (α-NaOH, <299 °C)",
  },

  chemical: {
    classification: "Strong base / alkali metal hydroxide",
    basicity: "Strong base (pKb ≈ 0.2 for OH⁻)",
    polarity: "Ionic compound; OH⁻ highly polar",
    oxidationStates: "Na: +1, O: −2, H: +1",
    chemicalFamily: "Group 1 hydroxide (alkali hydroxide)",
  },

  reactions: [
    {
      equation: "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, equimolar",
      explanation: "Classic strong acid–strong base reaction producing salt and water with neutralization enthalpy ~−57 kJ/mol.",
      products: "Sodium chloride and water",
      applications: "Titrations, pH adjustment, salt production",
      relatedConcepts: ["Neutralization", "Titration", "Stoichiometry"],
    },
    {
      equation: "2 NaOH(aq) + CO₂(g) → Na₂CO₃(aq) + H₂O(l)",
      type: "Acid–base (with acidic oxide)",
      conditions: "Aqueous NaOH, CO₂ gas",
      explanation: "Sodium hydroxide scrubs CO₂ by forming carbonate; with excess CO₂, bicarbonate forms.",
      products: "Sodium carbonate and water",
      applications: "CO₂ absorption, air purification, understanding NaOH degradation on air exposure",
      relatedConcepts: ["Acidic oxides", "Gas scrubbing", "Carbon cycle"],
    },
    {
      equation: "Fat + 3 NaOH → Glycerol + 3 R-COO⁻Na⁺ (soap)",
      type: "Saponification (hydrolysis)",
      conditions: "Heat, aqueous NaOH",
      explanation: "Triglyceride ester bonds hydrolyze to glycerol and sodium salts of fatty acids (soap).",
      products: "Glycerol and soap",
      applications: "Soap manufacturing, biodiesel byproduct treatment",
      relatedConcepts: ["Ester hydrolysis", "Organic chemistry", "Colloids"],
    },
    {
      equation: "FeCl₃(aq) + 3 NaOH(aq) → Fe(OH)₃(s) + 3 NaCl(aq)",
      type: "Precipitation",
      conditions: "Aqueous, room temperature",
      explanation: "Metal ions precipitate as insoluble hydroxides — iron(III) forms reddish-brown Fe(OH)₃ gel.",
      products: "Iron(III) hydroxide precipitate",
      applications: "Water treatment (phosphate/suspended solids removal), qualitative analysis",
      relatedConcepts: ["Solubility rules", "Precipitation", "Qualitative analysis"],
    },
  ],

  relatedFormulas: ["NaCl", "HCl", "KOH", "Ca(OH)2", "Na2CO3"],
  comparisonNote: "NaOH (40.00 g/mol) and KOH (56.11 g/mol) are both strong bases; KOH is more soluble in alcohols and used in soft soap, while NaOH dominates hard soap production.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of NaOH.",
      answer: "22.99 + 16.00 + 1.008 = 40.00 g/mol",
    },
    {
      question: "How many grams of NaOH to neutralize 36.5 g of HCl?",
      answer: "36.5 g HCl ÷ 36.46 g/mol = 1.0 mol HCl; need 1.0 mol NaOH = 40.0 g",
    },
    {
      question: "What pH range is expected for 0.1 M NaOH?",
      answer: "pOH = 1, so pH = 14 − 1 = 13 (strong base, complete dissociation assumed)",
    },
    {
      question: "Why does NaOH feel slippery on skin?",
      answer: "It saponifies fatty acids in skin tissue, forming soap which feels slippery.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium hydroxide?",
      answer: "40.00 g/mol.",
    },
    {
      question: "Is NaOH a strong or weak base?",
      answer: "Strong base — dissociates completely in water.",
    },
    {
      question: "What is caustic soda?",
      answer: "Industrial name for sodium hydroxide (NaOH).",
    },
    {
      question: "Why is NaOH used in drain cleaners?",
      answer: "It hydrolyzes grease (saponification) and protein (hair), clearing blockages.",
    },
    {
      question: "Can NaOH absorb carbon dioxide from air?",
      answer: "Yes — it reacts to form sodium carbonate, which is why it must be stored sealed.",
    },
  ],

  references: [
    { label: "ILO Encyclopaedia", note: "Occupational safety for caustic soda" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "PubChem CID 14798", note: "Compound data" },
  ],
};
