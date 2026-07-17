import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumHydroxide: CompoundProfile = {
  slug: "molar-mass-of-potassium-hydroxide",
  formula: "KOH",
  name: "Potassium Hydroxide",
  iupacName: "Potassium hydroxide",
  commonNames: ["Caustic potash", "Potash lye", "Potassium hydroxide"],
  aliases: ["KOH", "Lye of potash"],
  category: "base",
  categories: ["base", "inorganic"],
  casNumber: "1310-58-3",
  pubchemCid: "14797",
  smiles: "[OH-].[K+]",
  inchi: "InChI=1S/K.H2O/h;1H2/q+1;/p-1",
  exactMass: 55.966446,
  featured: true,
  popular: true,

  overview: `Potassium hydroxide (KOH) is a strong base with molar mass 56.11 g/mol (K 39.10 + O 16.00 + H 1.008), dissociating completely in water into K⁺ and OH⁻ ions to give strongly alkaline solutions. Like its sodium counterpart, KOH is deliquescent and dissolves in water with a substantial exothermic heat of solution, and it rapidly absorbs atmospheric carbon dioxide and moisture if left exposed, gradually converting to potassium carbonate on the surface of stored pellets or flakes.

Historically called caustic potash to distinguish it from caustic soda (NaOH), potassium hydroxide has been prepared since antiquity by leaching wood ash — a process that gave "potash" (pot ashes) its name and provided the primary industrial source of alkali before the large-scale chlor-alkali electrolysis processes of the modern era. Today essentially all KOH is produced by electrolyzing potassium chloride brine, mirroring the chlor-alkali process used for NaOH but yielding potassium hydroxide, hydrogen, and chlorine instead.

KOH's most distinctive practical niche relative to NaOH is soap chemistry: saponifying fats and oils with potassium hydroxide produces potassium salts of fatty acids that remain soft, paste-like, or even liquid at room temperature — the basis of traditional soft soaps, shaving soaps, and liquid hand soaps — whereas the corresponding sodium salts from NaOH saponification are typically hard, solid bar soaps. KOH is also the standard electrolyte in alkaline batteries and many fuel cells, where its high ionic conductivity and chemical stability toward the battery's zinc and manganese dioxide electrodes make it far more effective than neutral salt electrolytes.`,

  formulaExplanation: `KOH consists of K⁺ and OH⁻ ions in a 1:1 ratio, structurally analogous to NaOH but with the larger, more polarizable potassium cation replacing sodium. In the solid state it exists as an ionic lattice; in solution hydroxide ion is the active base species responsible for its strongly alkaline chemistry.`,

  chemicalProfile: `KOH is a strong Brønsted base and Lewis base, reacting completely with acids in neutralization reactions and precipitating insoluble metal hydroxides from salt solutions. It saponifies esters (including fats and oils) to form potassium carboxylate salts (soft soap) and glycerol, absorbs atmospheric CO₂ to form potassium carbonate, and reacts with amphoteric metals such as aluminum and zinc to release hydrogen gas. Molten KOH is even more aggressively corrosive than the aqueous solution, attacking glass and many metals.`,

  uniqueTopics: [
    {
      heading: "Soft soap and liquid soap chemistry vs. NaOH",
      body: "Saponifying fats or oils with potassium hydroxide produces potassium salts of fatty acids that are markedly softer, more soluble, and often paste-like or liquid at room temperature, in contrast to the firm bar soaps produced by sodium hydroxide saponification. This difference — rooted in the larger, more polarizable, and more weakly ion-paired potassium cation disrupting fatty acid salt crystal packing — is why traditional 'soft soap,' shaving creams, and modern liquid hand soaps are typically potassium-based formulations.",
    },
    {
      heading: "KOH vs. NaOH: practical and chemical distinctions",
      body: "Although both are strong Group 1 hydroxides with very similar acid–base chemistry, KOH is notably more soluble in alcohols than NaOH, making it preferred in biodiesel production (transesterification catalysis) and titrations in nonaqueous or mixed solvents, while NaOH remains the more common and less expensive choice for large-scale industrial applications like pulp processing and hard soap manufacture.",
    },
    {
      heading: "Alkaline battery and fuel cell electrolyte",
      body: "Concentrated potassium hydroxide solution serves as the electrolyte in most modern alkaline batteries (zinc–manganese dioxide cells) and in classic alkaline fuel cells, chosen for its high ionic conductivity, chemical compatibility with the electrode materials, and stability across a wide range of operating conditions compared to neutral salt electrolytes.",
    },
    {
      heading: "Potash: from wood ash to industrial electrolysis",
      body: "The name 'potash' originates from the historical method of leaching wood ashes in iron pots to extract soluble potassium carbonate and hydroxide, which served as the main industrial alkali source for centuries before large-scale electrolytic chlor-alkali technology made KOH production from potassium chloride brine the dominant modern route.",
    },
    {
      heading: "Aggressive tissue and material corrosivity",
      body: "KOH is, if anything, slightly more corrosive per unit concentration than NaOH toward biological tissue and many materials, rapidly hydrolyzing proteins and lipids on contact; this same aggressive chemistry underlies its use in chemical hair relaxers, drain cleaners, and oven cleaners, always requiring careful protective handling.",
    },
  ],

  applications: {
    industrial: [
      "Soft soap, shaving soap, and liquid hand soap manufacturing (saponification)",
      "Biodiesel production (transesterification catalyst, favored for alcohol solubility)",
      "Alkaline battery and fuel cell electrolyte",
      "Potassium salt manufacturing (e.g., potassium carbonate, potassium phosphates)",
    ],
    laboratory: [
      "Strong base titrant, particularly in nonaqueous or alcohol-based titrations",
      "Karl Fischer and saponification value determinations",
      "Preparation of potassium salts and buffer components",
    ],
    environmental: "Used in some flue gas scrubbing and wastewater neutralization applications; requires careful disposal given strong alkalinity and aquatic toxicity at high concentration.",
    biological: "Not used biologically; highly destructive to tissue on contact, similar in mechanism to NaOH but often perceived as slightly more aggressive.",
  },

  preparation: `Industrially produced by electrolysis of potassium chloride brine (chlor-alkali process), yielding KOH, hydrogen, and chlorine as co-products. Historically prepared by leaching wood ash (potassium carbonate) and treating with calcium hydroxide (causticization): K₂CO₃ + Ca(OH)₂ → 2 KOH + CaCO₃.`,

  production: `Global KOH production is smaller than NaOH but substantial, driven by demand for soft soaps, biodiesel catalysis, and battery electrolyte manufacturing; membrane cell electrolysis is the dominant modern production technology.`,

  storage: `Store in airtight, corrosion-resistant containers (HDPE or similar). Keep dry — pellets and flakes absorb atmospheric CO₂ and moisture, converting surface material to potassium carbonate over time. Separate from acids and reactive metals.`,

  handling: `Extremely corrosive. Wear chemical-resistant gloves, splash goggles, and a face shield. Always add KOH slowly to water, never the reverse, due to the strongly exothermic dissolution. Treat any solution as hazardous regardless of apparent dilution.`,

  safety: {
    summary: "Severe corrosive hazard to skin, eyes, and respiratory tract, comparable to or slightly exceeding sodium hydroxide in tissue-damaging potential. Generates significant heat when dissolved.",
    hazards: [
      "Severe chemical burns, potentially deeper than initially apparent",
      "Serious eye damage risk, including permanent injury",
      "Exothermic dissolution can cause splattering and boiling",
      "Reacts with amphoteric metals (Al, Zn) to release flammable hydrogen gas",
    ],
    classification: "GHS: Skin Corr. 1A, Eye Dam. 1",
  },

  interestingFacts: [
    "The name 'potash' comes from the historical practice of leaching alkali from wood ashes collected in pots.",
    "KOH's molar mass (56.11 g/mol) is notably higher than NaOH's (40.00 g/mol) due to potassium's greater atomic mass relative to sodium.",
    "Traditional soft soaps and modern liquid hand soaps are almost always potassium-based, while bar soaps are typically sodium-based.",
    "KOH's superior solubility in alcohols makes it the preferred catalyst for many small-scale and homebrew biodiesel production setups.",
  ],

  history: `Potash production from wood ash dates back to ancient civilizations and remained the dominant alkali source through the early Industrial Revolution. The development of electrolytic chlor-alkali technology in the late 19th and early 20th centuries, applied to potassium chloride brine, gradually replaced wood-ash-derived potash with directly electrolyzed potassium hydroxide as the primary industrial production method.`,

  discovery: "Long known in impure form via wood-ash leaching; recognized as a distinct compound and produced in pure form following advances in 18th–19th century inorganic and electrochemistry.",

  examNotes: [
    "Molar mass KOH = 39.10 + 16.00 + 1.008 = 56.11 g/mol.",
    "Strong base: 1 mol KOH neutralizes 1 mol monoprotic acid (e.g., HCl).",
    "For H₂SO₄: 2 mol KOH required per mol acid (diprotic).",
    "KOH absorbs CO₂: 2 KOH + CO₂ → K₂CO₃ + H₂O, relevant to storage and titration standardization.",
  ],

  commonMistakes: [
    "Confusing KOH (56.11 g/mol) with NaOH (40.00 g/mol) in stoichiometry — different molar masses despite similar chemistry.",
    "Assuming KOH and NaOH produce identical soap textures — KOH-based soaps are characteristically softer or liquid.",
    "Using KOH molar mass when the question specifies moles of OH⁻ from a diprotic base like Ca(OH)₂.",
  ],

  studentTips: [
    "Round KOH's molar mass to about 56 for quick titration calculations.",
    "Link KOH's alcohol solubility advantage directly to biodiesel transesterification questions.",
    "Remember 'soft soap = potassium, hard soap = sodium' as a quick mnemonic for saponification product differences.",
  ],

  misconceptions: [
    "KOH is not simply 'weaker' or 'stronger' than NaOH as a base — both are effectively fully dissociated strong bases; differences lie in solubility and practical applications, not intrinsic base strength.",
    "Potash historically referred to impure potassium carbonate/hydroxide mixtures from wood ash, not necessarily pure KOH.",
    "KOH pellets exposed to air do not remain pure — they progressively carbonate, altering titration standardization if not accounted for.",
  ],

  physical: {
    appearance: "White pellets, flakes, or lumps (solid); colorless solution",
    color: "White (solid)",
    odor: "Odorless",
    stateAtSTP: "Solid (deliquescent)",
    density: "2.04 g/cm³ (solid)",
    meltingPoint: "360 °C",
    boilingPoint: "1,327 °C",
    solubility: "1,120 g/L water at 20 °C (highly soluble, exothermic); soluble in ethanol and methanol",
    crystalStructure: "Orthorhombic (room temperature form)",
  },

  chemical: {
    classification: "Strong base / alkali metal hydroxide",
    basicity: "Strong base (fully dissociates in water)",
    polarity: "Ionic compound; OH⁻ highly polar",
    oxidationStates: "K: +1, O: −2, H: +1",
    chemicalFamily: "Group 1 hydroxide (alkali hydroxide)",
  },

  reactions: [
    {
      equation: "KOH(aq) + HCl(aq) → KCl(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, equimolar",
      explanation: "Classic strong acid–strong base reaction producing potassium chloride and water with a large, favorable neutralization enthalpy.",
      products: "Potassium chloride and water",
      applications: "Titrations, pH adjustment, salt production",
      relatedConcepts: ["Neutralization", "Titration", "Stoichiometry"],
    },
    {
      equation: "Fat + 3 KOH → Glycerol + 3 R-COO⁻K⁺ (soft soap)",
      type: "Saponification (hydrolysis)",
      conditions: "Heat, aqueous or alcoholic KOH",
      explanation: "Triglyceride ester bonds hydrolyze to glycerol and potassium salts of fatty acids, producing a soft, often liquid soap distinct from the hard bar soaps made with NaOH.",
      products: "Glycerol and potassium soap (soft/liquid soap)",
      applications: "Soft soap and liquid soap manufacturing, shaving cream production",
      relatedConcepts: ["Ester hydrolysis", "Organic chemistry", "Colloids"],
    },
    {
      equation: "2 KOH(aq) + CO₂(g) → K₂CO₃(aq) + H₂O(l)",
      type: "Acid–base (with acidic oxide)",
      conditions: "Aqueous KOH, atmospheric or supplied CO₂",
      explanation: "Potassium hydroxide absorbs carbon dioxide to form potassium carbonate, gradually converting stored KOH if left exposed to air.",
      products: "Potassium carbonate and water",
      applications: "CO₂ scrubbing, understanding KOH storage degradation",
      relatedConcepts: ["Acidic oxides", "Gas scrubbing", "Carbonate formation"],
    },
    {
      equation: "2 Al(s) + 2 KOH(aq) + 6 H₂O(l) → 2 K[Al(OH)₄](aq) + 3 H₂(g)",
      type: "Redox with amphoteric metal",
      conditions: "Hot concentrated KOH solution",
      explanation: "Aluminum metal, being amphoteric, dissolves in hot concentrated KOH to form soluble potassium aluminate with evolution of hydrogen gas.",
      products: "Potassium aluminate and hydrogen gas",
      applications: "Amphoteric metal reactivity demonstrations, drain cleaner chemistry",
      relatedConcepts: ["Amphoterism", "Redox reactions", "Gas evolution"],
    },
  ],

  relatedFormulas: ["NaOH", "K2CO3", "KCl", "Ca(OH)2", "K2SO4"],
  comparisonNote: "KOH (56.11 g/mol) and NaOH (40.00 g/mol) are both strong bases with nearly identical acid–base behavior, but KOH is considerably more soluble in alcohols and produces softer, more liquid soaps on saponification, while NaOH dominates hard bar soap and large-scale industrial alkali applications.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KOH.",
      answer: "39.10 + 16.00 + 1.008 = 56.11 g/mol",
    },
    {
      question: "How many grams of KOH are needed to neutralize 0.250 mol of HCl?",
      answer: "0.250 mol HCl needs 0.250 mol KOH; 0.250 × 56.11 = 14.03 g",
    },
    {
      question: "What pH is expected for a 0.010 M KOH solution?",
      answer: "pOH = −log(0.010) = 2, so pH = 14 − 2 = 12 (strong base, complete dissociation assumed)",
    },
    {
      question: "Why is KOH often preferred over NaOH for making liquid soap?",
      answer: "Potassium fatty acid salts are more soluble and remain soft or liquid at room temperature, unlike the harder sodium salts formed with NaOH.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium hydroxide?",
      answer: "56.11 g/mol.",
    },
    {
      question: "Is KOH a strong or weak base?",
      answer: "Strong base — it dissociates completely into K⁺ and OH⁻ in water.",
    },
    {
      question: "What is caustic potash?",
      answer: "An older industrial name for potassium hydroxide (KOH), paired historically with 'caustic soda' for NaOH.",
    },
    {
      question: "How is KOH different from NaOH in soap making?",
      answer: "KOH produces softer, often liquid potassium soaps, while NaOH produces harder, solid sodium bar soaps.",
    },
    {
      question: "Why is KOH used in alkaline batteries?",
      answer: "Its high ionic conductivity and chemical stability with zinc and manganese dioxide electrodes make it an effective, long-lasting electrolyte.",
    },
  ],

  references: [
    { label: "PubChem CID 14797", note: "Potassium hydroxide compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "ILO Encyclopaedia", note: "Occupational safety for caustic alkalis" },
  ],
};
