import type { CompoundProfile } from "@/lib/chemistry/types";

export const magnesiumChloride: CompoundProfile = {
  slug: "molar-mass-of-magnesium-chloride",
  formula: "MgCl2",
  name: "Magnesium Chloride",
  iupacName: "Magnesium chloride",
  commonNames: ["Magnesium chloride", "Nigari (hydrate, food-grade)"],
  aliases: ["MgCl₂", "Magnesium dichloride"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7786-30-3",
  pubchemCid: "5360315",
  smiles: "[Mg+2].[Cl-].[Cl-]",
  inchi: "InChI=1S/2ClH.Mg/h2*1H;/q;;+2/p-2",
  exactMass: 93.922747,
  featured: true,
  popular: true,

  overview: `Magnesium chloride (MgCl₂) is an ionic compound with molar mass 95.21 g/mol (Mg 24.31 + Cl 2 × 35.45), formed from one Mg²⁺ ion balancing two Cl⁻ ions. It is intensely hygroscopic, and the common hexahydrate form MgCl₂·6H₂O (bischofite) picks up atmospheric moisture so readily that it is prized as a deicing agent — it lowers the freezing point of water and, unlike sodium chloride, remains effective at much lower temperatures while being comparatively gentler on some types of concrete and vegetation.

MgCl₂ is a major solute in seawater (after NaCl, it is the second most abundant salt by mass) and is recovered on a huge industrial scale by evaporating seawater or brine from inland deposits like Utah's Great Salt Lake. This same abundance makes bittern — the magnesium-chloride-rich mother liquor left over after sea salt crystallizes out of seawater — the traditional coagulant used in Japanese and Chinese tofu-making (nigari), where Mg²⁺ ions cross-link soy protein molecules to curdle soy milk into a firm gel, a food-chemistry application with roots stretching back over a thousand years.

Beyond deicing and tofu production, MgCl₂ is a convenient, highly soluble source of magnesium ion for chemical synthesis, magnesium metal production (historically via the Dow process, electrolyzing molten MgCl₂ recovered from seawater), dust control on unpaved roads, and dietary magnesium supplementation, since Mg²⁺ is an essential cofactor for hundreds of enzymes involved in energy metabolism, DNA replication, and neuromuscular function.`,

  formulaExplanation: `MgCl₂ pairs one Mg²⁺ ion (losing two electrons from its outer shell) with two Cl⁻ ions (each gaining one electron) to achieve overall charge neutrality. The formula's subscript 2 on chlorine directly reflects the +2 charge of magnesium — a standard example of using ionic charge balance to derive a formula. In its common hexahydrate form, six water molecules coordinate around each formula unit.`,

  chemicalProfile: `MgCl₂ is a neutral, highly soluble salt that dissociates completely in water. It is deliquescent, readily absorbing atmospheric moisture to form saturated solutions. Molten MgCl₂ undergoes electrolysis to yield magnesium metal and chlorine gas (historically the Dow process route to magnesium). It reacts with strong bases to precipitate insoluble magnesium hydroxide, and with soy proteins as a coagulant through calcium/magnesium cross-linking of protein networks, similar in principle to how calcium sulfate coagulates tofu in other traditional recipes.`,

  uniqueTopics: [
    {
      heading: "Deicing chemistry and cold-weather advantage over NaCl",
      body: "Magnesium chloride brine is widely used for road deicing because it remains effective at significantly lower temperatures than sodium chloride and produces less chloride-driven corrosion of some infrastructure per unit of deicing power, though it still contributes to environmental chloride loading. Its strong hygroscopicity also helps it pre-wet road surfaces before storms, improving deicing performance.",
    },
    {
      heading: "Nigari and traditional tofu coagulation",
      body: "Bittern, the magnesium-chloride-rich residual brine left after crystallizing sea salt from seawater, is the source of nigari, the traditional Japanese coagulant added to hot soy milk to curdle it into tofu. Magnesium ions cross-link negatively charged soy protein molecules, causing them to aggregate into a gel network that traps water — the same fundamental chemistry (divalent cation-induced protein coagulation) used with calcium sulfate in some tofu-making traditions.",
    },
    {
      heading: "Seawater abundance and the Dow magnesium process",
      body: "Magnesium chloride is the second most abundant dissolved salt in seawater by mass after sodium chloride. The historic Dow process extracted magnesium metal directly from seawater by precipitating magnesium hydroxide, converting it to magnesium chloride, and electrolyzing the molten salt — a striking example of turning an essentially unlimited marine resource into structural metal.",
    },
    {
      heading: "Dietary magnesium source and physiological role",
      body: "As a highly soluble, well-tolerated magnesium salt, MgCl₂ is used in dietary supplements and oral rehydration-style formulations to correct magnesium deficiency. Magnesium ion itself is an essential cofactor for over 300 enzymes, including those in ATP metabolism, DNA and RNA synthesis, and neuromuscular signal transmission, making adequate magnesium intake important for numerous physiological processes.",
    },
    {
      heading: "Hexahydrate vs. anhydrous forms in practice",
      body: "Commercial magnesium chloride is most often sold and used as the hexahydrate, MgCl₂·6H₂O, because the anhydrous salt is so strongly hygroscopic that it is difficult to produce and store without picking up water; heating the hydrate to drive off water can also partially hydrolyze it to magnesium oxychloride, so anhydrous MgCl₂ for magnesium metal production is typically made by more controlled dehydration or direct chlorination routes.",
    },
  ],

  applications: {
    industrial: [
      "Road and runway deicing brine (effective at low temperatures)",
      "Dust suppression and soil stabilization on unpaved roads",
      "Magnesium metal production (historically via molten salt electrolysis)",
      "Wastewater treatment coagulant and fire-retardant textile treatment",
    ],
    laboratory: [
      "Soluble magnesium ion source for synthesis and buffer preparation",
      "Demonstrating deliquescence and hydrate chemistry",
      "Electrolysis experiments (molten salt decomposition)",
    ],
    environmental: "Deicing brine runoff elevates chloride and magnesium in soil and waterways; naturally abundant in seawater and some inland brine deposits without requiring synthesis.",
    biological: "Nigari-derived MgCl₂ coagulates tofu; dietary magnesium supplement; essential cofactor for numerous enzymatic processes in living organisms.",
  },

  preparation: `Recovered from seawater or brine evaporation (bittern) or mined from marine evaporite deposits such as bischofite. Can be prepared in the laboratory by reacting magnesium carbonate, oxide, or hydroxide with hydrochloric acid, followed by crystallization as the hexahydrate.`,

  production: `Global magnesium chloride production is closely tied to solar salt and potash operations that process seawater or inland brines; the Great Salt Lake, the Dead Sea, and various solar evaporation ponds are major commercial sources.`,

  storage: `Store the hexahydrate in sealed, moisture-resistant containers to prevent further water absorption or caking. Anhydrous MgCl₂ must be kept rigorously dry, ideally under inert atmosphere, to avoid hydrolysis to magnesium oxychloride.`,

  handling: `Low acute hazard; treat concentrated solutions and dust as mild irritants. Standard gloves and eye protection are adequate for typical laboratory or industrial handling.`,

  safety: {
    summary: "Low toxicity; generally recognized as safe as a food additive and supplement at recommended doses. Concentrated brine may irritate skin and eyes.",
    hazards: [
      "Mild eye and skin irritation from concentrated solutions or dust",
      "Excessive magnesium intake can cause gastrointestinal upset",
      "Corrosive to some metals and concrete formulations at high brine concentrations over time",
    ],
    classification: "Not classified as hazardous under GHS for standard-grade material",
  },

  interestingFacts: [
    "MgCl₂ is the second most abundant salt in seawater by mass, after sodium chloride.",
    "Nigari, the traditional Japanese tofu coagulant, is essentially concentrated magnesium chloride bittern left over from sea salt production.",
    "Some cities pre-treat roads with magnesium chloride brine before snowstorms because it lowers the freezing point more effectively at very cold temperatures than rock salt.",
    "The historic Dow process could, in principle, extract magnesium metal from an essentially inexhaustible resource: ordinary seawater.",
  ],

  history: `Bittern and bischofite have been recognized as sources of magnesium salts since early salt-production and tofu-making traditions in East Asia. The systematic industrial extraction of magnesium metal from seawater-derived MgCl₂ was pioneered in the early 20th century, with the Dow Chemical Company establishing large-scale seawater magnesium production in the 1940s that supplied magnesium for lightweight aircraft alloys during World War II.`,

  discovery: "Magnesium salts have been used since antiquity in food processing (nigari); systematic industrial magnesium chloride electrolysis for metal production developed in the early-to-mid 20th century.",

  examNotes: [
    "Molar mass MgCl₂ = 24.31 + 2(35.45) = 95.21 g/mol.",
    "Molar mass hexahydrate MgCl₂·6H₂O = 95.21 + 6(18.02) = 203.33 g/mol.",
    "MgCl₂ is a strong electrolyte: 1 mol dissolved → 1 mol Mg²⁺ + 2 mol Cl⁻ (van't Hoff factor i ≈ 3).",
    "Electrolysis of molten MgCl₂: cathode Mg metal, anode Cl₂ gas.",
  ],

  commonMistakes: [
    "Using van't Hoff factor i = 2 for MgCl₂ colligative property calculations — it should be i ≈ 3 (one Mg²⁺ plus two Cl⁻).",
    "Confusing MgCl₂ molar mass with MgSO₄ (Epsom salt, 120.37 g/mol anhydrous) — different anions entirely.",
    "Forgetting the hexahydrate's added water mass when working with commercial deicing or nigari-grade material.",
  ],

  studentTips: [
    "Charge-balance Mg²⁺ with two Cl⁻ to derive the formula rather than memorizing it.",
    "Link MgCl₂'s deliquescence to its strong ion-dipole attraction for water molecules.",
    "Remember nigari (tofu coagulant) as a memorable real-world example of divalent cation protein coagulation.",
  ],

  misconceptions: [
    "MgCl₂ and MgSO₄ (Epsom salt) are not interchangeable — they have different anions, solubilities, and typical uses.",
    "Nigari is not a chemical additive foreign to tofu tradition — it is simply concentrated magnesium chloride from seawater bittern, used for centuries.",
    "Anhydrous MgCl₂ is not simply made by heating the hydrate in open air — this can partially hydrolyze it to magnesium oxychloride instead of pure anhydrous salt.",
  ],

  physical: {
    appearance: "White to colorless crystalline solid (anhydrous); white deliquescent crystals (hexahydrate)",
    color: "White to colorless",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.32 g/cm³ (anhydrous); 1.57 g/cm³ (hexahydrate)",
    meltingPoint: "714 °C (anhydrous); 118 °C (hexahydrate, loses water)",
    boilingPoint: "1,412 °C (anhydrous, decomposes)",
    solubility: "543 g/L water at 20 °C (highly soluble, deliquescent)",
    crystalStructure: "Trigonal/rhombohedral (anhydrous, CdCl₂-type layered structure)",
  },

  chemical: {
    classification: "Ionic salt / alkaline earth halide",
    polarity: "Ionic",
    oxidationStates: "Mg: +2, Cl: −1",
    chemicalFamily: "Group 2 halide (alkaline earth chloride)",
  },

  reactions: [
    {
      equation: "MgCl₂(l) → Mg(l) + Cl₂(g)",
      type: "Electrolysis (molten)",
      conditions: "Molten MgCl₂, industrial electrolytic cell",
      explanation: "Electrical energy decomposes molten magnesium chloride into magnesium metal at the cathode and chlorine gas at the anode — the classic industrial route to magnesium metal.",
      products: "Magnesium metal and chlorine gas",
      applications: "Industrial magnesium metal production",
      relatedConcepts: ["Electrolysis", "Redox reactions", "Metal extraction"],
    },
    {
      equation: "MgCl₂(aq) + 2 NaOH(aq) → Mg(OH)₂(s) + 2 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Hydroxide ion precipitates insoluble magnesium hydroxide, a reaction used both analytically and in extracting magnesium from seawater via the Dow process.",
      products: "Magnesium hydroxide precipitate and sodium chloride",
      applications: "Magnesium extraction from seawater, water treatment",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Industrial extraction"],
    },
    {
      equation: "MgCO₃(s) + 2 HCl(aq) → MgCl₂(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–carbonate",
      conditions: "Aqueous, room temperature",
      explanation: "Hydrochloric acid dissolves magnesium carbonate to produce magnesium chloride solution with carbon dioxide effervescence, a laboratory preparation route.",
      products: "Magnesium chloride, water, and carbon dioxide",
      applications: "Laboratory MgCl₂ preparation",
      relatedConcepts: ["Acid–carbonate reactions", "Gas evolution", "Salt preparation"],
    },
    {
      equation: "Soy protein (colloid) + Mg²⁺ → Coagulated protein network (tofu curd)",
      type: "Protein coagulation (colloid chemistry)",
      conditions: "Hot soy milk, controlled addition of MgCl₂ (nigari)",
      explanation: "Divalent magnesium ions cross-link negatively charged soy protein particles, destabilizing the colloidal suspension and causing it to aggregate into a curd that traps water — the chemistry behind traditional tofu-making.",
      products: "Coagulated tofu curd and whey",
      applications: "Traditional tofu production",
      relatedConcepts: ["Colloid chemistry", "Protein coagulation", "Food chemistry"],
    },
  ],

  relatedFormulas: ["MgCl2·6H2O", "MgO", "Mg(OH)2", "MgSO4", "CaCl2"],
  comparisonNote: "MgCl₂ (95.21 g/mol) and CaCl₂ (110.98 g/mol) are both widely used deicing salts; MgCl₂ is generally effective at somewhat lower temperatures, while CaCl₂ releases more heat on dissolution and is often preferred for very cold conditions.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of MgCl₂.",
      answer: "24.31 + 2(35.45) = 95.21 g/mol",
    },
    {
      question: "What is the molar mass of the hexahydrate MgCl₂·6H₂O?",
      answer: "95.21 + 6(18.02) = 203.33 g/mol",
    },
    {
      question: "How many moles of Cl⁻ are released when 19.04 g of MgCl₂ fully dissociates in water?",
      answer: "19.04 g ÷ 95.21 g/mol = 0.200 mol MgCl₂ → 0.200 × 2 = 0.400 mol Cl⁻",
    },
    {
      question: "What is the van't Hoff factor (i) for MgCl₂ in dilute solution?",
      answer: "i ≈ 3, because each formula unit dissociates into one Mg²⁺ and two Cl⁻ ions.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of magnesium chloride?",
      answer: "95.21 g/mol for anhydrous MgCl₂; 203.33 g/mol for the common hexahydrate MgCl₂·6H₂O.",
    },
    {
      question: "What is nigari?",
      answer: "A traditional Japanese tofu coagulant derived from bittern, the magnesium-chloride-rich brine left after crystallizing sea salt.",
    },
    {
      question: "Why is magnesium chloride used for deicing?",
      answer: "It lowers water's freezing point effectively even at low temperatures and is comparatively less corrosive per unit of deicing power than some alternatives.",
    },
    {
      question: "Is magnesium chloride a good dietary magnesium source?",
      answer: "Yes — it is highly soluble and well absorbed, commonly used in magnesium supplements.",
    },
    {
      question: "How is magnesium metal made from magnesium chloride?",
      answer: "Electrolysis of molten MgCl₂ splits it into magnesium metal at the cathode and chlorine gas at the anode.",
    },
  ],

  references: [
    { label: "PubChem CID 5360315", note: "Magnesium chloride compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "USGS", note: "Magnesium compounds and brine resource statistics" },
  ],
};
