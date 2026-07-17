import type { CompoundProfile } from "@/lib/chemistry/types";

export const calciumHydroxide: CompoundProfile = {
  slug: "molar-mass-of-calcium-hydroxide",
  formula: "Ca(OH)2",
  name: "Calcium Hydroxide",
  iupacName: "Calcium dihydroxide",
  commonNames: ["Slaked lime", "Hydrated lime", "Pickling lime", "Limewater (dilute solution)"],
  aliases: ["Ca(OH)₂", "Calcium hydrate", "Caustic lime"],
  category: "base",
  categories: ["base", "inorganic"],
  casNumber: "1305-62-0",
  pubchemCid: "14777",
  smiles: "[OH-].[OH-].[Ca+2]",
  inchi: "InChI=1S/Ca.2H2O/h;2*1H2/q+2;;/p-2",
  exactMass: 73.9681,
  featured: true,
  popular: true,

  overview: `Calcium hydroxide (Ca(OH)₂) has a molar mass of 74.10 g/mol (Ca 40.08 + 2 × [16.00 + 1.008]), formed when calcium oxide ("quicklime") reacts with water in a highly exothermic process traditionally called "slaking." The resulting white powder or paste — slaked lime — is only moderately soluble in water (~1.5 g/L at 25 °C), and its saturated solution, limewater, is a strong base (pH ~12.4) despite the low solubility, because the dissolved fraction dissociates essentially completely into Ca²⁺ and OH⁻.

Slaked lime has been central to construction chemistry for millennia: mixed with sand and water to make lime mortar and plaster, it slowly reabsorbs atmospheric CO₂ over weeks to years, converting back to calcium carbonate (CaCO₃) in a hardening process distinct from the rapid setting of modern Portland cement. This "lime cycle" — limestone (CaCO₃) → quicklime (CaO) → slaked lime (Ca(OH)₂) → limestone again — is one of the oldest known chemical cycles exploited by civilization, and it remains commercially important today.

Beyond construction, Ca(OH)₂ is a workhorse base in water and wastewater treatment (softening and pH correction), food processing (nixtamalization of corn, sugar refining), flue-gas desulfurization, and the classic limewater test for carbon dioxide taught in introductory chemistry, where CO₂ bubbled through clear limewater produces a cloudy CaCO₃ precipitate.`,

  formulaExplanation: `Ca(OH)₂ contains one Ca²⁺ cation ionically bonded to two OH⁻ hydroxide anions, balancing the +2 charge of calcium. Each hydroxide ion contributes one oxygen and one hydrogen. The formula shows that one mole of calcium hydroxide can furnish two moles of hydroxide ion upon complete dissociation, making it a diacidic base in neutralization stoichiometry even though its solubility is limited.`,

  chemicalProfile: `Ca(OH)₂ is a moderately strong base, essentially fully ionized in the small amount that dissolves. It readily absorbs atmospheric CO₂ to form insoluble CaCO₃ (the basis of the limewater test and lime mortar carbonation), neutralizes acids to form calcium salts and water, and undergoes double displacement with soluble carbonates or sulfates to precipitate CaCO₃ or CaSO₄. It reacts with chlorine gas to produce bleaching powder (calcium hypochlorite mixture) and is a key reagent in the Solvay process ammonia recovery step.`,

  uniqueTopics: [
    {
      heading: "The Lime Cycle",
      body: "Limestone (CaCO₃) is heated to quicklime (CaO), which reacts with water to form slaked lime (Ca(OH)₂); slaked lime then slowly reacts with atmospheric CO₂ to regenerate CaCO₃, completing a cycle exploited in construction and industry since antiquity. This closed loop links calcium hydroxide directly to limestone and lime chemistry.",
    },
    {
      heading: "Lime Mortar and Plaster Carbonation",
      body: "Traditional lime mortar hardens not by drying but by slow carbonation: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O occurs gradually as CO₂ diffuses through the porous material, which is why historic lime plaster can take months to fully cure but produces a self-healing, breathable, and highly durable finish still valued in heritage restoration.",
    },
    {
      heading: "The Limewater Test for CO₂",
      body: "Bubbling a gas through clear limewater is the classic school test for carbon dioxide: CO₂ reacts with the dissolved Ca(OH)₂ to form a milky white precipitate of CaCO₃. Excess CO₂ redissolves the precipitate by forming soluble calcium bicarbonate, Ca(HCO₃)₂ — a subtlety often tested in exams.",
    },
    {
      heading: "Water and Wastewater Treatment",
      body: "Lime softening uses Ca(OH)₂ to raise pH and precipitate magnesium and excess calcium hardness as hydroxide/carbonate solids, while also serving in coagulation, phosphorus removal, and heavy-metal precipitation at municipal treatment plants.",
    },
    {
      heading: "Food Chemistry: Nixtamalization",
      body: "Soaking and cooking maize in a calcium hydroxide solution (nixtamalization) loosens the hull, improves niacin bioavailability, and imparts the characteristic flavor and dough properties of masa used for tortillas and tamales — a process dating back thousands of years in Mesoamerica.",
    },
  ],

  applications: {
    industrial: [
      "Lime mortar, plaster, and whitewash in construction and heritage restoration",
      "Water and wastewater treatment (softening, pH adjustment, coagulation)",
      "Flue-gas desulfurization scrubbers (reacts with SO₂ to form calcium sulfite/sulfate)",
      "Sugar refining (clarification of raw sugar juice) and leather tanning (dehairing hides)",
    ],
    laboratory: [
      "Limewater as a qualitative test reagent for carbon dioxide",
      "Standard base for demonstrating precipitation and neutralization reactions",
      "Source of hydroxide ion in introductory acid-base titration demonstrations",
    ],
    environmental: "Used to neutralize acidic industrial effluents and acid mine drainage; central reagent in flue-gas desulfurization to reduce SO₂ emissions from coal combustion.",
    biological: "Nixtamalization of corn improves nutritional availability of niacin; dilute Ca(OH)₂ solutions are used in some food processing and as a dental pulp-capping material in endodontics.",
  },

  preparation: `Industrially and in the laboratory, slaked lime is made by adding water to calcium oxide (quicklime): CaO + H₂O → Ca(OH)₂, a strongly exothermic reaction that can boil off excess water if added too quickly. It can also be precipitated by mixing solutions of a soluble calcium salt with a strong base.`,

  production: `Quicklime is produced by calcining limestone in kilns above 900 °C (CaCO₃ → CaO + CO₂), then hydrated with a controlled amount of water to produce hydrated lime powder or lime putty on an industrial scale exceeding tens of millions of tonnes annually worldwide.`,

  storage: `Store hydrated lime powder in sealed, moisture-proof containers, as it slowly absorbs atmospheric CO₂ and moisture over time, degrading its reactivity. Limewater solutions should be kept tightly stoppered to minimize CO₂ absorption from air.`,

  handling: `Ca(OH)₂ dust and solutions are caustic and irritating to skin, eyes, and respiratory tract. Wear gloves and eye protection; avoid generating airborne dust. Flush any skin or eye contact immediately and thoroughly with water.`,

  safety: {
    summary: "Caustic irritant to skin, eyes, and respiratory tract; not classified as a strong hazard like NaOH but still requires standard base-handling precautions, especially avoiding dust inhalation and eye contact.",
    hazards: [
      "Skin and eye irritation/burns from concentrated paste or solution",
      "Respiratory irritation from inhaling fine powder",
      "Exothermic reaction hazard when hydrating quicklime rapidly",
    ],
    classification: "GHS: Skin Irrit. 2, Eye Dam. 1, STOT SE 3",
  },

  interestingFacts: [
    "Roman concrete used lime mortar mixed with volcanic ash, contributing to structures like the Pantheon that have survived nearly two millennia.",
    "Calcium hydroxide's low but non-negligible solubility (~1.5 g/L) means limewater is one of the few common strong bases you can make by simply stirring a base into water and filtering off the excess solid.",
    "The 'whitewash' historically used to coat barns and fences is essentially a Ca(OH)₂ suspension that hardens by carbonating into a durable CaCO₃ coating.",
    "Limewater's cloudiness with CO₂ was used by Joseph Black in the 1750s to help characterize 'fixed air,' contributing to the discovery of carbon dioxide.",
  ],

  history: `Lime plaster and mortar were used as early as 7000 BCE in the Middle East and extensively by the Romans, who perfected lime-pozzolan concrete. Joseph Black's mid-18th-century studies of limewater and "fixed air" (CO₂) were foundational to the discovery of gases as distinct chemical substances, helping launch modern pneumatic chemistry.`,

  discovery: "Known and used since prehistoric times for lime plaster and mortar; its role in carbon dioxide chemistry was clarified by Joseph Black in the 1750s.",

  examNotes: [
    "Molar mass Ca(OH)₂ = 40.08 + 2(16.00 + 1.008) = 74.10 g/mol.",
    "Diacidic base: 1 mol Ca(OH)₂ furnishes 2 mol OH⁻ for neutralization stoichiometry.",
    "Limewater test: Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l); excess CO₂ redissolves precipitate as Ca(HCO₃)₂.",
    "Slaking reaction: CaO + H₂O → Ca(OH)₂ is strongly exothermic — do not confuse with dissolving, which is only mildly exothermic.",
  ],

  commonMistakes: [
    "Treating Ca(OH)₂ as a monoacidic base — it provides two hydroxide ions per formula unit.",
    "Forgetting that excess CO₂ clears limewater turbidity by forming soluble bicarbonate, not by 'undoing' the reaction.",
    "Confusing calcium hydroxide (Ca(OH)₂, 74.10 g/mol) with calcium oxide (CaO, 56.08 g/mol) or calcium carbonate (CaCO₃, 100.09 g/mol) in stoichiometry problems.",
  ],

  studentTips: [
    "Remember the lime cycle: CaCO₃ → CaO → Ca(OH)₂ → CaCO₃, and be ready to write each step's balanced equation.",
    "For neutralization problems, treat Ca(OH)₂ like a diprotic-equivalent base: moles of H⁺ needed = 2 × moles of Ca(OH)₂.",
    "Link limewater cloudiness directly to the CO₂ test — a favorite qualitative analysis question.",
  ],

  misconceptions: [
    "Slaked lime (Ca(OH)₂) and quicklime (CaO) are not the same substance — quicklime must react with water to become slaked lime.",
    "Limewater going clear again after excess CO₂ does not mean no reaction occurred — it means a different, soluble product (calcium bicarbonate) formed.",
    "Ca(OH)₂ is not a 'weak' base just because it is only slightly soluble — the portion that dissolves is essentially fully dissociated, making its solutions strongly basic.",
  ],

  physical: {
    appearance: "White powder or crystalline solid; forms a cloudy suspension or clear saturated solution (limewater) in water",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.211 g/cm³",
    meltingPoint: "~580 °C (decomposes to CaO + H₂O before/at melting)",
    boilingPoint: "Decomposes before boiling",
    solubility: "1.5 g/L water at 25 °C (decreases with increasing temperature, unusual for an ionic solid)",
    crystalStructure: "Hexagonal (brucite-type layered structure)",
  },

  chemical: {
    classification: "Alkaline earth metal hydroxide / moderately strong base",
    basicity: "Strong base character in solution despite low solubility (fully dissociated Ca²⁺ and OH⁻)",
    polarity: "Ionic",
    oxidationStates: "Ca: +2, O: −2, H: +1",
    chemicalFamily: "Group 2 hydroxides (alkaline earth hydroxides)",
  },

  reactions: [
    {
      equation: "CaO(s) + H₂O(l) → Ca(OH)₂(s)",
      type: "Slaking (hydration)",
      conditions: "Room temperature, exothermic",
      explanation: "Quicklime reacts vigorously with water, releasing substantial heat and forming slaked lime; large-scale slaking can cause boiling and spattering if not controlled.",
      products: "Calcium hydroxide",
      applications: "Production of hydrated lime for construction and industry",
      relatedConcepts: ["Exothermic reactions", "Hydration", "Industrial chemistry"],
    },
    {
      equation: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
      type: "Precipitation / carbonation",
      conditions: "Room temperature, CO₂ gas bubbled through limewater",
      explanation: "Dissolved hydroxide reacts with carbon dioxide to precipitate insoluble calcium carbonate, turning clear limewater cloudy — the standard qualitative CO₂ test.",
      products: "Calcium carbonate and water",
      applications: "CO₂ detection, lime mortar hardening, water treatment",
      relatedConcepts: ["Qualitative analysis", "Precipitation", "Carbonation curing"],
    },
    {
      equation: "Ca(OH)₂(aq) + 2 HCl(aq) → CaCl₂(aq) + 2 H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, room temperature",
      explanation: "Both hydroxide ions are neutralized by strong acid, forming calcium chloride and water in a 1:2 base-to-acid mole ratio.",
      products: "Calcium chloride and water",
      applications: "Acid neutralization in industrial effluent treatment",
      relatedConcepts: ["Neutralization", "Stoichiometry", "Diacidic bases"],
    },
    {
      equation: "2 Ca(OH)₂(s) + 2 Cl₂(g) → Ca(OCl)₂(s) + CaCl₂(s) + 2 H₂O(l)",
      type: "Disproportionation with halogen",
      conditions: "Cool, dilute Cl₂ gas exposure",
      explanation: "Chlorine reacts with slaked lime to produce bleaching powder, a mixture of calcium hypochlorite and calcium chloride used historically and industrially as a bleaching/disinfecting agent.",
      products: "Calcium hypochlorite (bleaching powder), calcium chloride, water",
      applications: "Bleaching powder manufacture, water disinfection",
      relatedConcepts: ["Disproportionation", "Halogen chemistry", "Disinfection chemistry"],
    },
  ],

  relatedFormulas: ["CaO", "CaCO3", "CO2", "NaOH", "H2O"],
  comparisonNote: "Ca(OH)₂ (74.10 g/mol) is only slightly soluble but strongly basic in solution, unlike NaOH (40.00 g/mol), which is fully soluble and gives much more concentrated hydroxide solutions for the same mass dissolved.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of Ca(OH)₂.",
      answer: "40.08 + 2(16.00 + 1.008) = 74.10 g/mol",
    },
    {
      question: "How many moles of HCl are needed to completely neutralize 7.41 g of Ca(OH)₂?",
      answer: "7.41 g ÷ 74.10 g/mol = 0.100 mol Ca(OH)₂; needs 2 × 0.100 = 0.200 mol HCl",
      hint: "Ca(OH)₂ furnishes 2 mol OH⁻ per mole, so it needs 2 mol monoprotic acid.",
    },
    {
      question: "What mass of CaCO₃ precipitates when excess CO₂ is bubbled through a solution containing 0.0500 mol Ca(OH)₂?",
      answer: "1:1 mole ratio: 0.0500 mol CaCO₃ × 100.09 g/mol = 5.00 g (assuming no excess CO₂ redissolves it)",
    },
    {
      question: "Why does limewater turn cloudy and then clear again if excess CO₂ is bubbled through it?",
      answer: "Initial CO₂ forms insoluble CaCO₃ (cloudy); excess CO₂ converts CaCO₃ to soluble calcium bicarbonate, Ca(HCO₃)₂, clearing the solution.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of calcium hydroxide?",
      answer: "74.10 g/mol.",
    },
    {
      question: "Is calcium hydroxide the same as slaked lime?",
      answer: "Yes — slaked lime is the common name for calcium hydroxide, formed by adding water to quicklime (CaO).",
    },
    {
      question: "Why is calcium hydroxide used in mortar instead of just cement?",
      answer: "Traditional lime mortar hardens by slowly absorbing atmospheric CO₂ to reform CaCO₃, giving flexible, breathable, self-healing masonry valued especially in historic restoration.",
    },
    {
      question: "Is Ca(OH)₂ a strong or weak base?",
      answer: "It behaves as a strong base in solution — the small amount that dissolves is essentially fully dissociated into Ca²⁺ and OH⁻ — though its overall solubility in water is limited.",
    },
    {
      question: "What is limewater used for in chemistry class?",
      answer: "A saturated Ca(OH)₂ solution used as the standard qualitative test for carbon dioxide gas, which turns it cloudy due to CaCO₃ precipitation.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Ca(OH)₂ thermodynamic data" },
    { label: "PubChem CID 14777", note: "Calcium hydroxide identifiers and properties" },
    { label: "National Lime Association", note: "Lime production and construction applications" },
  ],
};
