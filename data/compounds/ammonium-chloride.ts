import type { CompoundProfile } from "@/lib/chemistry/types";

export const ammoniumChloride: CompoundProfile = {
  slug: "molar-mass-of-ammonium-chloride",
  formula: "NH4Cl",
  name: "Ammonium Chloride",
  iupacName: "Azanium chloride",
  commonNames: ["Sal ammoniac", "Ammonium muriate", "Salmiac"],
  aliases: ["NH₄Cl", "Ammonium chloride"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "12125-02-9",
  pubchemCid: "25517",
  smiles: "[NH4+].[Cl-]",
  inchi: "InChI=1S/ClH.H3N/h1H;1H3",
  exactMass: 53.0032,
  featured: true,
  popular: true,

  overview: `Ammonium chloride (NH₄Cl) has a molar mass of 53.49 g/mol (N 14.01 + 4 × 1.008 + Cl 35.45), an ionic salt of the tetrahedral ammonium cation (NH₄⁺) and chloride anion. Known historically as sal ammoniac, it forms white crystals that sublime on heating rather than melting cleanly — the vapor actually consists of NH₃ and HCl gases that recombine into solid NH₄Cl on cooling, a striking demonstration that "sublimation" of an ionic solid can conceal an underlying decomposition-recombination process.

NH₄Cl is the classic example of a salt whose aqueous solution is acidic despite being composed of a "strong" acid's conjugate base and a "weak" base's conjugate acid: the ammonium ion is a weak acid (Ka = 5.6 × 10⁻¹⁰, the conjugate of weak base NH₃) that hydrolyzes water, while chloride, the conjugate base of strong acid HCl, does not hydrolyze at all. This makes NH₄Cl solution mildly acidic (pH ≈ 5), a textbook case in salt hydrolysis and acid-base equilibrium.

Industrially, ammonium chloride is essential as a soldering and galvanizing flux — it removes oxide layers from metal surfaces, allowing solder or zinc coating to bond properly — and as the electrolyte in classic zinc-carbon "dry cell" batteries. It also serves as a nitrogen fertilizer, particularly for flooded rice paddies where its ammonium nitrogen resists rapid leaching, and as an expectorant ingredient in some cough medicines, where it stimulates respiratory secretions.`,

  formulaExplanation: `NH₄Cl consists of the tetrahedral ammonium ion NH₄⁺ (formed when NH₃ accepts a proton) ionically bonded to a chloride ion Cl⁻ in a 1:1 ratio. The ammonium ion has four equivalent N–H bonds after protonation, making it isoelectronic with methane (CH₄) in terms of geometry, though chemically very different due to the formal positive charge and N–H bond character.`,

  chemicalProfile: `NH₄Cl is a mild acid salt in solution (from ammonium ion hydrolysis) and decomposes on strong heating into ammonia and hydrogen chloride gases, which recombine as white smoke or solid on cooling — the basis of the classic "smoke without fire" demonstration when NH₃ and HCl vapors meet. It reacts with strong bases to liberate ammonia gas (a standard qualitative test for ammonium ion) and serves as a mild reducing/cleaning flux by reacting with metal oxide surface layers.`,

  uniqueTopics: [
    {
      heading: "Sublimation That Isn't Simple",
      body: "Heating solid NH₄Cl appears to sublime directly to vapor and back, but the process actually proceeds through thermal decomposition into gaseous NH₃ and HCl, which then recombine as they cool — a classic demonstration that visually 'simple' phase changes can hide more complex underlying chemistry.",
    },
    {
      heading: "Salt Hydrolysis and Acidic Salt Solutions",
      body: "NH₄Cl is the textbook example of a salt formed from a weak base (NH₃) and strong acid (HCl) that produces an acidic aqueous solution, because NH₄⁺ hydrolyzes water (NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺) while Cl⁻ does not hydrolyze at all — contrasted with salts like NaCl (neutral) or CH₃COONa (basic).",
    },
    {
      heading: "Soldering and Galvanizing Flux",
      body: "NH₄Cl removes metal oxide films from copper, brass, and steel surfaces during soldering and hot-dip galvanizing, allowing molten solder or zinc to wet and bond the base metal properly — a critical, if unglamorous, industrial role connecting simple salt chemistry to metalworking.",
    },
    {
      heading: "Dry Cell Battery Electrolyte",
      body: "Traditional zinc-carbon Leclanché dry cells use a paste of NH₄Cl (often with ZnCl₂) as the electrolyte, in which ammonium ions participate in the cell's electrochemistry at the carbon/manganese dioxide cathode, historically making NH₄Cl one of the most commercially significant ammonium salts.",
    },
    {
      heading: "Fertilizer for Flooded Rice Paddies",
      body: "Because ammonium nitrogen is retained more strongly by soil (via cation exchange) than nitrate nitrogen and resists leaching or denitrification loss in waterlogged conditions, NH₄Cl is a favored nitrogen source for flooded rice cultivation in parts of Asia, despite the chloride content requiring some management.",
    },
  ],

  applications: {
    industrial: [
      "Soldering and galvanizing flux (removes metal oxide surface layers)",
      "Electrolyte in zinc-carbon dry cell batteries",
      "Nitrogen fertilizer, especially for flooded rice paddies",
      "Textile dyeing and finishing auxiliary",
    ],
    laboratory: [
      "Qualitative test for ammonium ion (liberates pungent NH₃ with strong base and heat)",
      "Buffer component (NH₃/NH₄⁺ buffer system) for pH control near pH 9",
      "Demonstration of salt hydrolysis and acidic salt solutions",
    ],
    environmental: "Chloride content in NH₄Cl-based fertilizers requires management in chloride-sensitive soils and crops; nitrogen runoff shares eutrophication concerns common to ammonium fertilizers.",
    biological: "Used clinically in limited settings to treat metabolic alkalosis and as an expectorant in cough preparations; ammonium ion is a normal intermediate in nitrogen and urea cycle metabolism.",
  },

  preparation: `Industrially, NH₄Cl is produced as a byproduct of the Solvay process for sodium carbonate manufacture, or by directly neutralizing ammonia with hydrochloric acid: NH₃ + HCl → NH₄Cl. Laboratory preparation typically uses this direct neutralization, followed by evaporation and crystallization.`,

  production: `Large-scale production is closely tied to the Solvay soda-ash process, where NH₄Cl is generated as a coproduct; dedicated production also occurs by direct combination of ammonia and hydrochloric acid gas or solution.`,

  storage: `Store in tightly sealed, moisture-resistant containers, since NH₄Cl is somewhat hygroscopic. Keep away from strong bases (which liberate ammonia gas) and strong oxidizers.`,

  handling: `Low to moderate toxicity; dust may irritate eyes, skin, and respiratory tract. Avoid heating in closed containers without ventilation, since decomposition releases irritating NH₃ and HCl vapors.`,

  safety: {
    summary: "Mild irritant to eyes, skin, and respiratory tract; not highly hazardous in normal handling, but heating releases irritating ammonia and hydrogen chloride vapors, and large oral doses can disturb acid-base balance.",
    hazards: [
      "Eye and respiratory irritation from dust",
      "Releases irritating NH₃/HCl vapors on strong heating",
      "Large ingested doses can cause acidosis or gastrointestinal upset",
    ],
    classification: "GHS: Acute Tox. 4 (oral), Eye Irrit. 2",
  },

  interestingFacts: [
    "The name 'sal ammoniac' traces to deposits historically collected near the Temple of Amun (Ammon) in ancient Libya, associated with camel dung decomposition.",
    "NH₄Cl's molar mass (53.49 g/mol) is almost exactly the sum of ammonia (17.03) and hydrogen chloride (36.46) — a direct reflection of its formation reaction, NH₃ + HCl → NH₄Cl.",
    "White 'smoke' seen when ammonia and hydrochloric acid vapors meet in air is actually solid NH₄Cl microcrystals forming instantly from the gas-phase reaction.",
    "In some traditional Nordic and Baltic confectionery, ammonium chloride (salmiak) is used to give licorice candy its distinctive salty-bitter taste.",
  ],

  history: `Sal ammoniac was known to alchemists and described in early Arabic and medieval European chemical texts, with historical accounts linking its name to ammonium salt deposits associated with ancient Egyptian and Libyan sites. Its modern chemical identity as ammonium chloride was established alongside the broader characterization of ammonia and hydrochloric acid in the 18th century.`,

  discovery: "Known since antiquity as sal ammoniac; its composition as a compound of ammonia and hydrochloric acid was clarified during the systematic study of these gases in the 18th century.",

  examNotes: [
    "Molar mass NH₄Cl = 14.01 + 4(1.008) + 35.45 = 53.49 g/mol.",
    "NH₄Cl(aq) is acidic: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ (Ka = 5.6 × 10⁻¹⁰, derived from Kw/Kb of NH₃).",
    "Qualitative test: heating NH₄Cl with NaOH releases NH₃ gas, detected by pungent smell or turning damp red litmus blue.",
    "Formation reaction: NH₃(g) + HCl(g) → NH₄Cl(s), an example of a gas-phase reaction forming a solid directly (visible as white smoke).",
  ],

  commonMistakes: [
    "Assuming all ammonium salt solutions are neutral like NaCl — NH₄⁺ salts of strong acids are mildly acidic due to cation hydrolysis.",
    "Describing NH₄Cl's thermal behavior as simple sublimation without recognizing the underlying decomposition into NH₃ and HCl.",
    "Confusing ammonium chloride (NH₄Cl, 53.49 g/mol) with ammonium nitrate (NH₄NO₃, 80.04 g/mol) in fertilizer stoichiometry.",
  ],

  studentTips: [
    "Remember NH₄Cl molar mass as NH₃ (17.03) + HCl (36.46) ≈ 53.49 for a quick sanity check.",
    "Use the NH₄⁺/NH₃ conjugate acid-base pair to justify why NH₄Cl solutions are acidic in Bronsted-Lowry terms.",
    "Link the white smoke demonstration to visualize a gas-phase acid-base reaction forming an ionic solid product.",
  ],

  misconceptions: [
    "NH₄Cl heating is not true sublimation in the strict physical sense — it decomposes into two gases that recombine, rather than the solid vaporizing intact.",
    "Sal ammoniac (NH₄Cl) is a different substance from ammonium sulfate or ammonium nitrate, despite all being common ammonium fertilizers.",
    "The acidity of NH₄Cl solutions is a chemical hydrolysis effect, not evidence that NH₄Cl itself contains a free acid like HCl.",
  ],

  physical: {
    appearance: "White crystalline solid or powder",
    color: "White",
    odor: "Odorless (solid); pungent ammonia odor if decomposing",
    stateAtSTP: "Solid",
    density: "1.53 g/cm³",
    meltingPoint: "338 °C (sublimes/decomposes, does not have a simple liquid phase at 1 atm)",
    boilingPoint: "520 °C (decomposes into NH₃ and HCl gases before true boiling)",
    solubility: "383 g/L water at 25 °C (very soluble, increases with temperature)",
    crystalStructure: "Cubic (CsCl-type below ~184 °C); transitions to NaCl-type structure at higher temperature",
  },

  chemical: {
    classification: "Ammonium salt / acid salt",
    acidity: "Mildly acidic in solution (Ka of NH₄⁺ = 5.6 × 10⁻¹⁰)",
    polarity: "Ionic",
    molecularGeometry: "Tetrahedral ammonium cation",
    bondAngle: "109.5° (within NH₄⁺)",
    oxidationStates: "N: −3, H: +1, Cl: −1",
    chemicalFamily: "Ammonium halides",
  },

  reactions: [
    {
      equation: "NH₃(g) + HCl(g) → NH₄Cl(s)",
      type: "Direct combination (acid–base, gas phase)",
      conditions: "Room temperature, gas-phase contact",
      explanation: "Gaseous ammonia and hydrogen chloride combine instantly on contact to form solid ammonium chloride particles, visible as dense white smoke — a striking gas-to-solid acid-base reaction.",
      products: "Ammonium chloride (solid smoke/particles)",
      applications: "Classic 'smoke without fire' demonstration, industrial NH₄Cl synthesis",
      relatedConcepts: ["Acid–base reactions", "Gas-phase chemistry", "Nucleation"],
    },
    {
      equation: "NH₄Cl(s) ⇌ NH₃(g) + HCl(g)",
      type: "Thermal decomposition (reversible)",
      conditions: "Heat above ~340 °C",
      explanation: "On heating, NH₄Cl decomposes into its constituent gases rather than melting conventionally; on cooling, the gases recombine to redeposit solid NH₄Cl, giving the appearance of simple sublimation.",
      products: "Ammonia and hydrogen chloride gases",
      applications: "Explains apparent sublimation behavior, purification by resublimation",
      relatedConcepts: ["Thermal decomposition", "Reversible reactions", "Phase behavior"],
    },
    {
      equation: "NH₄Cl(s) + NaOH(aq) → NaCl(aq) + NH₃(g) + H₂O(l)",
      type: "Acid–base (ammonium ion test)",
      conditions: "Heat gently with strong base",
      explanation: "Strong base displaces the weak base ammonia from the ammonium ion, releasing pungent NH₃ gas — the standard qualitative test for ammonium salts.",
      products: "Sodium chloride, ammonia, water",
      applications: "Qualitative analysis for NH₄⁺, laboratory ammonia generation",
      relatedConcepts: ["Qualitative analysis", "Weak base displacement", "Gas evolution"],
    },
    {
      equation: "NH₄Cl(aq) + H₂O(l) ⇌ NH₃(aq) + H₃O⁺(aq) + Cl⁻(aq)",
      type: "Salt hydrolysis",
      conditions: "Aqueous solution, room temperature",
      explanation: "The ammonium ion acts as a weak acid, donating a proton to water and producing a mildly acidic solution (pH ≈ 5 for typical concentrations), while chloride remains a non-hydrolyzing spectator ion.",
      products: "Ammonia, hydronium ion, chloride ion (all in equilibrium)",
      applications: "Explains acidic pH of NH₄Cl solutions, buffer system design",
      relatedConcepts: ["Salt hydrolysis", "Conjugate acids", "Acid–base equilibrium"],
    },
  ],

  relatedFormulas: ["NH3", "HCl", "NH4NO3", "NaCl", "ZnCl2"],
  comparisonNote: "NH₄Cl (53.49 g/mol) gives an acidic solution because NH₄⁺ is the conjugate acid of a weak base, whereas NaCl (58.44 g/mol) gives a neutral solution because both Na⁺ and Cl⁻ come from a strong base and strong acid, respectively.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of NH₄Cl.",
      answer: "14.01 + 4(1.008) + 35.45 = 53.49 g/mol",
    },
    {
      question: "Is a 0.10 M NH₄Cl solution acidic, basic, or neutral? Explain briefly.",
      answer: "Acidic — NH₄⁺ is the conjugate acid of the weak base NH₃ and hydrolyzes water to produce H₃O⁺, while Cl⁻ (conjugate base of strong acid HCl) does not hydrolyze.",
    },
    {
      question: "How many grams of NH₄Cl form from the complete reaction of 8.50 g of NH₃ with excess HCl gas?",
      answer: "8.50 g ÷ 17.03 g/mol = 0.499 mol NH₃; 1:1 ratio gives 0.499 mol NH₄Cl × 53.49 g/mol ≈ 26.7 g",
      hint: "NH₃ + HCl → NH₄Cl is a 1:1 mole ratio reaction.",
    },
    {
      question: "Why does heating NH₄Cl appear to make it sublime, and what is actually happening chemically?",
      answer: "It appears to sublime, but the solid actually decomposes into gaseous NH₃ and HCl on heating; these gases recombine to reform solid NH₄Cl on cooling, giving the visual impression of direct solid-to-gas-to-solid transition.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of ammonium chloride?",
      answer: "53.49 g/mol.",
    },
    {
      question: "Is ammonium chloride the same as sal ammoniac?",
      answer: "Yes — sal ammoniac is the traditional common name for ammonium chloride, NH₄Cl.",
    },
    {
      question: "Why is ammonium chloride used in soldering?",
      answer: "As a flux, it removes oxide layers from metal surfaces (and releases some HCl on heating), allowing solder to wet and bond cleanly to the base metal.",
    },
    {
      question: "Does ammonium chloride form an acidic or basic solution in water?",
      answer: "Acidic — the ammonium ion hydrolyzes water to produce hydronium ions, since it is the conjugate acid of the weak base ammonia.",
    },
    {
      question: "What happens when ammonium chloride is heated strongly?",
      answer: "It decomposes into ammonia and hydrogen chloride gases, which recombine into solid NH₄Cl on cooling — appearing similar to sublimation but actually involving decomposition and recombination.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "NH₄Cl thermodynamic data" },
    { label: "PubChem CID 25517", note: "Ammonium chloride identifiers and properties" },
    { label: "IUPAC", note: "Salt hydrolysis and acid–base nomenclature" },
  ],
};
