import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumPhosphate: CompoundProfile = {
  slug: "molar-mass-of-sodium-phosphate",
  formula: "Na3PO4",
  name: "Sodium Phosphate",
  iupacName: "Trisodium phosphate",
  commonNames: ["Trisodium phosphate", "TSP", "Sodium phosphate (tribasic)"],
  aliases: ["Na₃PO₄", "TSP cleaner"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7601-54-9",
  pubchemCid: "24243",
  smiles: "[Na+].[Na+].[Na+].[O-]P(=O)([O-])[O-]",
  inchi: "InChI=1S/3Na.H3O4P/c;;;1-5(2,3)4/h;;;(H3,1,2,3,4)/q3*+1;/p-3",
  exactMass: 163.922728,
  featured: true,
  popular: true,

  overview: `Sodium phosphate, specifically trisodium phosphate (Na₃PO₄), is an ionic compound with molar mass 163.94 g/mol (Na 3 × 22.99 + P 30.97 + O 4 × 16.00), formed from three Na⁺ ions balancing one fully deprotonated PO₄³⁻ ion. It is one of a family of related "sodium phosphate" salts that also includes disodium phosphate (Na₂HPO₄) and monosodium phosphate (NaH₂PO₄), each differing in how many of phosphoric acid's three acidic protons have been replaced by sodium — a distinction that matters enormously for pH, solubility, and application, since the fully substituted trisodium salt gives strongly alkaline solutions (pH ~12 for concentrated solutions) while the partially substituted salts are much milder.

TSP's strong alkalinity, combined with its ability to sequester grease and emulsify fats, made it a legendary heavy-duty household and industrial cleaner — the classic pre-paint wall-washing compound recommended for cutting through grease, soot, and old paint residue before repainting. Environmental concerns over phosphate-driven eutrophication of lakes and waterways led many jurisdictions to restrict or ban phosphate in household detergents starting in the late 20th century, and modern "TSP-free" cleaning substitutes have partially displaced it in consumer products, even though industrial and specialty cleaning uses persist.

Beyond cleaning, the broader sodium phosphate salt family plays an essential role as food additive and buffer components: various sodium phosphates function as emulsifiers, leavening agents, and pH-adjusting buffers in processed cheese, baked goods, and meat products, while the disodium/monosodium phosphate pair specifically forms the classic phosphate buffer system used throughout biochemistry and clinical laboratories to maintain solutions near physiological pH.`,

  formulaExplanation: `Na₃PO₄ replaces all three acidic protons of phosphoric acid (H₃PO₄) with sodium ions, giving the fully substituted, tribasic salt. Related sodium phosphates — Na₂HPO₄ (disodium, dibasic) and NaH₂PO₄ (monosodium, monobasic) — retain one or two of the original acidic hydrogens, forming a family of salts with progressively less alkaline character as fewer sodium ions replace phosphate's protons.`,

  chemicalProfile: `Na₃PO₄ dissolves in water to give a strongly alkaline solution because the fully deprotonated phosphate ion is a comparatively strong base, hydrolyzing water to generate hydroxide ion. It reacts with acids stepwise, first forming HPO₄²⁻, then H₂PO₄⁻, and finally H₃PO₄ as progressively more acid is added — a textbook example of a polyprotic base neutralization sequence. It also readily precipitates insoluble metal phosphates from solutions of calcium, magnesium, or other polyvalent metal salts, a property exploited in water softening.`,

  uniqueTopics: [
    {
      heading: "TSP as a heavy-duty cleaner: chemistry behind the grease-cutting power",
      body: "Trisodium phosphate's strong alkalinity (pH ~12 in concentrated solution) breaks down grease and oils through a saponification-like process, while its phosphate ion also acts as a mild sequestering agent that helps lift dirt and old paint residue from surfaces. This combination made TSP the classic recommendation for cleaning walls before repainting, cutting through soot, grease, and grime far more effectively than milder detergents.",
    },
    {
      heading: "Phosphate detergent bans and eutrophication concerns",
      body: "Phosphate compounds like TSP, once common detergent builders, contribute to eutrophication when they enter waterways, fueling excessive algae growth that depletes dissolved oxygen and harms aquatic ecosystems. Concerns over this environmental impact led many U.S. states and other countries to ban or restrict phosphate content in household laundry and dish detergents beginning in the 1970s–1990s, driving reformulation toward phosphate-free alternatives even as TSP itself remains available for specialty cleaning uses.",
    },
    {
      heading: "The sodium phosphate buffer family and biochemical buffering",
      body: "The related pair disodium phosphate (Na₂HPO₄) and monosodium phosphate (NaH₂PO₄) together form the classic phosphate buffer system widely used in biochemistry and clinical laboratories, effectively buffering solutions near pH 7.2 — close to physiological pH — because this is near the second dissociation constant (pKa₂) of phosphoric acid, making the HPO₄²⁻/H₂PO₄⁻ pair an ideal buffer for biological experiments.",
    },
    {
      heading: "Different grades for food, industrial, and cleaning applications",
      body: "Sodium phosphate salts span a wide range of purity grades and specific sodium-to-phosphate substitution levels tailored to their end use: food-grade phosphates serve as emulsifiers, leavening agents, and pH adjusters in processed cheese and baked goods, while industrial-grade trisodium phosphate is formulated for heavy-duty degreasing and water treatment, illustrating how the same core chemistry serves dramatically different purposes depending on formulation and purity.",
    },
    {
      heading: "Water softening and phosphate ion sequestration",
      body: "Sodium phosphate's phosphate ion binds calcium and magnesium ions in hard water, forming insoluble metal phosphate precipitates or soluble complexes that prevent these ions from interfering with soap and detergent action — a water-softening role phosphates played in detergent formulations for decades before environmental regulations prompted a shift toward phosphate-free builders like zeolites and polycarboxylates.",
    },
  ],

  applications: {
    industrial: [
      "Heavy-duty cleaning and degreasing compound (TSP wall cleaner, industrial degreasers)",
      "Water treatment and boiler water conditioning (scale and corrosion control)",
      "Food additive: emulsifier, leavening agent, pH adjuster (E339)",
      "Textile processing and dyeing auxiliary",
    ],
    laboratory: [
      "Phosphate buffer preparation (with mono- and disodium phosphate) for near-physiological pH",
      "Precipitation of metal phosphates in qualitative and quantitative analysis",
      "Reference compound for polyprotic acid/base neutralization demonstrations",
    ],
    environmental: "Contributes to eutrophication if released into waterways in significant quantities, prompting phosphate restrictions in many household detergent formulations.",
    biological: "The related phosphate buffer system is essential in biochemistry and clinical laboratory work for maintaining near-physiological pH in experimental solutions and diagnostic reagents.",
  },

  preparation: `Prepared by neutralizing phosphoric acid with sodium hydroxide or sodium carbonate in a 3:1 mole ratio to fully substitute all three acidic protons: H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O. Partial neutralization with fewer equivalents of base yields the mono- or disodium phosphate salts instead.`,

  production: `Produced industrially at significant scale for cleaning, water treatment, and food-grade applications; production is closely tied to phosphoric acid supply chains derived from phosphate rock processing.`,

  storage: `Store the solid in a dry, sealed container, as it is mildly hygroscopic. Keep concentrated solutions away from skin and eye contact given their strong alkalinity, and store away from acids to prevent uncontrolled neutralization reactions.`,

  handling: `Concentrated TSP solutions are strongly alkaline and can irritate or burn skin and eyes with prolonged contact. Use gloves and eye protection when handling concentrated solutions or bulk powder; rinse thoroughly after use.`,

  safety: {
    summary: "Concentrated solutions are strongly alkaline and can cause skin and eye irritation or burns; food-grade phosphate salts at regulated additive levels are considered safe for consumption.",
    hazards: [
      "Skin and eye irritation or burns from concentrated alkaline solutions",
      "Respiratory irritation from inhaled powder dust",
      "Environmental concern from phosphate-driven eutrophication if released in large quantities",
    ],
    classification: "GHS: Skin Irrit. 2, Eye Dam. 1 (concentrated solutions of trisodium phosphate)",
  },

  interestingFacts: [
    "TSP was once considered nearly indispensable for prepping walls before painting, thanks to its powerful grease- and residue-cutting alkalinity.",
    "Bans on phosphate detergents in various U.S. states in the late 20th century directly targeted compounds like sodium phosphate due to their role in lake and river eutrophication.",
    "The phosphate buffer system built from sodium phosphate salts is one of the most widely used buffers in biology and biochemistry labs worldwide.",
    "Different sodium phosphate salts (mono-, di-, and tribasic) can be selectively produced simply by controlling how much base is added during the neutralization of phosphoric acid.",
  ],

  history: `Sodium phosphate salts became industrially significant alongside the broader growth of the phosphate chemical industry in the 19th and 20th centuries, driven initially by fertilizer demand and subsequently expanding into detergent, food, and water treatment applications. Concerns over phosphate contributions to eutrophication, documented from the 1960s onward, reshaped regulatory policy and detergent formulation practices across much of the developed world.`,

  discovery: "Developed alongside broader 19th–20th century phosphate chemical industry advances; no single discovery event is typically credited given its straightforward preparation from phosphoric acid neutralization.",

  examNotes: [
    "Molar mass Na₃PO₄ = 3(22.99) + 30.97 + 4(16.00) = 163.94 g/mol.",
    "Full neutralization: H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O (tribasic salt).",
    "Partial neutralization gives Na₂HPO₄ (2 NaOH) or NaH₂PO₄ (1 NaOH) instead.",
    "Trisodium phosphate solutions are strongly alkaline (pH ~12) due to phosphate ion hydrolysis of water.",
  ],

  commonMistakes: [
    "Confusing trisodium phosphate (Na₃PO₄) with disodium phosphate (Na₂HPO₄) or monosodium phosphate (NaH₂PO₄) — different substitution levels with very different pH behavior.",
    "Assuming all 'sodium phosphate' products are strongly alkaline — only the tribasic (trisodium) form gives the notably high pH; the mono- and disodium forms are much milder.",
    "Overlooking that food-grade and industrial-grade sodium phosphate serve very different purposes and purity standards.",
  ],

  studentTips: [
    "Track how many of phosphoric acid's three protons are replaced by sodium to correctly identify mono-, di-, or trisodium phosphate.",
    "Remember TSP's cleaning power comes from strong alkalinity plus mild sequestering action, similar in spirit to (but distinct from) soap saponification.",
    "Link the phosphate buffer system directly to pKa₂ of phosphoric acid (7.20) for biochemistry buffer calculations.",
  ],

  misconceptions: [
    "TSP is not banned everywhere — many regions restrict phosphate in household detergents specifically, while industrial and cleaning-product TSP remains available in many markets.",
    "Sodium phosphate is not a single fixed compound — it refers to a family of related salts (mono-, di-, and tribasic) with different formulas and properties.",
    "'TSP-free' cleaning products are not necessarily less effective for all purposes — they use different builder chemistry (such as zeolites or polycarboxylates) rather than lacking effective cleaning power altogether.",
  ],

  physical: {
    appearance: "White crystalline powder or granules",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.62 g/cm³ (anhydrous)",
    meltingPoint: "1,583 °C (anhydrous, decomposes before this in practice)",
    boilingPoint: "Decomposes before boiling",
    solubility: "120 g/L water at 25 °C (soluble, strongly alkaline solution)",
    crystalStructure: "Hexagonal (anhydrous); various hydrate forms also common commercially",
  },

  chemical: {
    classification: "Ionic phosphate salt / alkali metal orthophosphate",
    basicity: "Strongly basic (phosphate ion hydrolyzes water significantly, pH ~12 concentrated)",
    polarity: "Ionic",
    oxidationStates: "Na: +1, P: +5, O: −2",
    chemicalFamily: "Group 1 orthophosphate (alkali metal phosphate)",
  },

  reactions: [
    {
      equation: "Na₃PO₄(aq) + HCl(aq) → Na₂HPO₄(aq) + NaCl(aq)",
      type: "Acid–base neutralization (stepwise, first proton)",
      conditions: "Aqueous, controlled acid addition",
      explanation: "The first equivalent of acid converts trisodium phosphate to disodium phosphate, the first step in the stepwise neutralization of the phosphate ion.",
      products: "Disodium phosphate and sodium chloride",
      applications: "Buffer system preparation, stepwise titration demonstrations",
      relatedConcepts: ["Polyprotic bases", "Stepwise neutralization", "Buffer chemistry"],
    },
    {
      equation: "3 CaCl₂(aq) + 2 Na₃PO₄(aq) → Ca₃(PO₄)₂(s) + 6 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Sodium phosphate precipitates insoluble calcium phosphate from hard water, a reaction relevant to historical water-softening detergent formulations.",
      products: "Calcium phosphate precipitate and sodium chloride",
      applications: "Water softening, phosphate removal demonstrations",
      relatedConcepts: ["Precipitation reactions", "Solubility rules", "Water hardness"],
    },
    {
      equation: "PO₄³⁻(aq) + H₂O(l) ⇌ HPO₄²⁻(aq) + OH⁻(aq)",
      type: "Dissolution and hydrolysis (basic salt behavior)",
      conditions: "Aqueous, room temperature",
      explanation: "Dissolved phosphate ion hydrolyzes water, generating hydroxide ion and accounting for the strongly alkaline pH of trisodium phosphate solutions.",
      products: "Hydrogen phosphate ion and hydroxide ion",
      applications: "Explains cleaning alkalinity, pH behavior in solution",
      relatedConcepts: ["Salt hydrolysis", "Basic salts", "Equilibrium"],
    },
    {
      equation: "H₃PO₄(aq) + 3 NaOH(aq) → Na₃PO₄(aq) + 3 H₂O(l)",
      type: "Acid–base neutralization (complete, synthesis reaction)",
      conditions: "Aqueous, 3:1 stoichiometric ratio",
      explanation: "Complete neutralization of phosphoric acid with three equivalents of sodium hydroxide produces trisodium phosphate, the standard preparation method.",
      products: "Trisodium phosphate and water",
      applications: "Industrial and laboratory Na₃PO₄ synthesis",
      relatedConcepts: ["Triprotic acids", "Neutralization", "Salt preparation"],
    },
  ],

  relatedFormulas: ["Na2HPO4", "NaH2PO4", "H3PO4", "Ca3(PO4)2", "K3PO4"],
  comparisonNote: "Trisodium phosphate (Na₃PO₄, 163.94 g/mol, strongly alkaline) contrasts sharply with monosodium phosphate (NaH₂PO₄, 119.98 g/mol, mildly acidic) — both derived from phosphoric acid but with very different pH behavior depending on how many acidic protons remain.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of Na₃PO₄.",
      answer: "3(22.99) + 30.97 + 4(16.00) = 163.94 g/mol",
    },
    {
      question: "How many grams of NaOH are needed to fully convert 9.80 g of H₃PO₄ into Na₃PO₄?",
      answer: "9.80 g ÷ 98.00 g/mol = 0.100 mol H₃PO₄; needs 3 × 0.100 = 0.300 mol NaOH × 40.00 g/mol = 12.0 g",
    },
    {
      question: "What mass of Na₃PO₄ is needed to prepare 250 mL of 0.200 M solution?",
      answer: "0.200 mol/L × 0.250 L = 0.0500 mol; 0.0500 × 163.94 = 8.20 g",
    },
    {
      question: "Why is a Na₃PO₄ solution strongly alkaline?",
      answer: "The fully deprotonated phosphate ion (PO₄³⁻) is a relatively strong base, hydrolyzing water to produce hydroxide ions and raising the solution's pH.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium phosphate?",
      answer: "163.94 g/mol for trisodium phosphate, Na₃PO₄.",
    },
    {
      question: "What is TSP used for?",
      answer: "As a powerful alkaline cleaner, particularly for degreasing walls before painting, though many household formulations have shifted to phosphate-free alternatives.",
    },
    {
      question: "Is trisodium phosphate the same as the phosphate buffer used in labs?",
      answer: "Not exactly — the common laboratory phosphate buffer typically uses monosodium and disodium phosphate, not the fully substituted trisodium form.",
    },
    {
      question: "Why was phosphate banned in some detergents?",
      answer: "Phosphate runoff contributes to eutrophication, causing excessive algae growth and oxygen depletion in lakes and rivers.",
    },
    {
      question: "Is sodium phosphate safe in food?",
      answer: "Yes, at regulated additive levels — various sodium phosphate salts are approved food additives used as emulsifiers, leavening agents, and pH adjusters.",
    },
  ],

  references: [
    { label: "PubChem CID 24243", note: "Trisodium phosphate compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "U.S. EPA", note: "Phosphate detergent regulation and eutrophication data" },
  ],
};
