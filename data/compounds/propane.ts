import type { CompoundProfile } from "@/lib/chemistry/types";

export const propane: CompoundProfile = {
  slug: "molar-mass-of-propane",
  formula: "C3H8",
  name: "Propane",
  iupacName: "Propane",
  commonNames: ["Propane", "LPG (liquefied petroleum gas, primary component)", "R-290 (refrigerant)"],
  aliases: ["C₃H₈", "Dimethylmethane (archaic)"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "organic", "gas"],
  casNumber: "74-98-6",
  pubchemCid: "6334",
  smiles: "CCC",
  inchi: "InChI=1S/C3H8/c1-3-2/h3H2,1-2H3",
  exactMass: 44.0626,
  featured: true,
  popular: true,

  overview: `Propane (C₃H₈) is the three-carbon alkane with molar mass 44.10 g/mol (3 × 12.01 + 8 × 1.008), a colorless, naturally odorless gas at room temperature that liquefies under modest pressure (~8.4 atm at 20 °C) — the property that makes it practical to store and transport as "liquefied petroleum gas" (LPG) in steel cylinders and tanks. Each carbon is sp³ hybridized with tetrahedral 109.5° bond angles, and the molecule is non-polar, giving it low water solubility (~62 mg/L) but excellent miscibility with other hydrocarbons.

Propane sits between methane/ethane and butane in the alkane homologous series, and this middle position explains its widespread use: it is volatile enough to vaporize readily even in cold weather (boiling point −42 °C, compared to butane's −1 °C), yet dense enough as a liquid to pack a large amount of chemical energy into a small cylinder. Combustion is highly exothermic (ΔH ≈ −2220 kJ/mol): C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O, giving propane one of the higher energy densities per liter among common gaseous fuels.

Commercial propane and butane are co-produced from natural gas processing and petroleum refining, then blended and pressurized as LPG for heating, cooking, and autogas vehicle fuel. Because pure propane is odorless, a trace of an odorant (typically ethyl mercaptan) is added so that leaks are detectable by smell before reaching the 2.1–9.5% lower/upper flammability limits in air.`,

  formulaExplanation: `C₃H₈ has the general alkane formula CₙH₂ₙ₊₂ with n = 3: three carbons connected in a straight chain (CH₃–CH₂–CH₃), each terminal carbon bearing three hydrogens and the central carbon bearing two. Unlike butane (C₄H₁₀), propane has no structural isomers — there is only one way to arrange three carbons in a chain, so "propane" unambiguously specifies one compound.`,

  chemicalProfile: `Propane is chemically unreactive at room temperature (like other alkanes) but burns readily once ignited, and undergoes free-radical substitution with halogens under UV light or heat. Industrially, propane can be catalytically or thermally dehydrogenated to propene (a key petrochemical feedstock) or cracked alongside other light hydrocarbons in steam crackers. It is also used directly as a refrigerant (R-290) because of its favorable thermodynamic properties and low global warming potential compared to fluorinated refrigerants, despite its flammability.`,

  uniqueTopics: [
    {
      heading: "Liquefied Petroleum Gas (LPG)",
      body: "Propane's relatively high boiling point among light alkanes lets it liquefy under modest pressure (~8–9 atm at room temperature), so cylinders store a large fuel mass in a compact volume. This is the technical basis of the global LPG industry serving off-grid heating, cooking, and portable fuel needs.",
    },
    {
      heading: "Propane vs. Butane Blending",
      body: "Commercial LPG blends propane and butane in ratios that vary by season and region: propane-rich blends vaporize better in cold climates because of its lower boiling point (−42 °C vs. butane's −1 °C), while butane-rich blends are cheaper and common in warmer regions.",
    },
    {
      heading: "Vapor Density and Leak Behavior",
      body: "Because propane vapor is about 1.5 times denser than air, leaks sink and pool in basements, pits, and low-lying areas rather than dispersing upward — a critical safety consideration that differs from lighter-than-air fuels like methane and hydrogen.",
    },
    {
      heading: "Autogas and Alternative Fuel Use",
      body: "Propane (marketed as autogas or LPG fuel) powers millions of vehicles worldwide, especially taxi fleets, forklifts, and buses, offering cleaner combustion than gasoline or diesel with existing, well-developed refueling infrastructure.",
    },
    {
      heading: "Propane as a Low-GWP Refrigerant (R-290)",
      body: "As regulations phase out high-global-warming-potential HFC refrigerants, propane (R-290) has re-emerged as an efficient natural refrigerant with negligible ozone depletion and low climate impact, used in household refrigerators and small heat pump systems with flammability safeguards.",
    },
  ],

  applications: {
    industrial: [
      "Liquefied petroleum gas (LPG) for residential and commercial heating and cooking",
      "Autogas — alternative vehicle fuel, especially in fleets and forklifts",
      "Propylene (propene) production via dehydrogenation, a major plastics feedstock",
      "Low-GWP refrigerant (R-290) in household refrigerators and heat pumps",
    ],
    laboratory: [
      "Portable Bunsen burner and torch fuel where natural gas lines are unavailable",
      "Calorimetry demonstrations of hydrocarbon combustion enthalpy",
      "Reference alkane for teaching homologous series trends",
    ],
    environmental: "Cleaner-burning than coal or heavy fuel oil with low particulate emissions, but still a fossil-derived greenhouse gas source when combusted; leaks contribute minimally to smog compared to heavier VOCs.",
  },

  preparation: `Propane is not usually "synthesized" but separated from natural gas (as a component of natural gas liquids) and from petroleum refinery off-gases by fractional distillation and low-temperature condensation. It is not typically prepared in a teaching laboratory due to handling requirements for compressed gas.`,

  production: `Global LPG (propane + butane) production exceeds 300 million tonnes annually, roughly two-thirds from natural gas processing and one-third from crude oil refining.`,

  storage: `Store and transport as a compressed liquid in approved steel or composite cylinders rated for LPG vapor pressure, always with vapor space for thermal expansion. Keep cylinders upright, outdoors or in ventilated areas, away from ignition sources and direct sunlight.`,

  handling: `Extremely flammable gas; liquid propane causes cold burns/frostbite on skin contact due to rapid evaporation and cooling. Use only in well-ventilated areas, check fittings for leaks with soap solution (never a flame), and ensure odorant is present so leaks are detectable.`,

  safety: {
    summary: "Extremely flammable gas that forms explosive mixtures with air (2.1–9.5% by volume); liquid propane causes frostbite; heavier than air so it pools in low areas and confined spaces, creating asphyxiation and explosion risk.",
    hazards: [
      "Fire and explosion within the 2.1–9.5% flammability range in air",
      "Cold contact burns/frostbite from liquid or expanding gas",
      "Asphyxiation risk as vapor displaces oxygen in enclosed, low-lying spaces",
      "Pressurized cylinder rupture hazard if exposed to fire or excessive heat",
    ],
    classification: "GHS: Flam. Gas 1, Press. Gas (liquefied gas)",
  },

  interestingFacts: [
    "Propane's molar mass of 44.10 g/mol is nearly identical to that of carbon dioxide (44.01 g/mol) — both gases have similar vapor densities relative to air.",
    "Unlike natural gas (mostly methane), propane vapor is heavier than air (density ratio ~1.5), so leaks sink and collect near the ground rather than rising.",
    "Propane was first isolated and identified by Walter Snelling in 1910 while investigating why gasoline evaporated from open containers.",
    "A standard 20 lb (9 kg) BBQ propane tank holds roughly 4.7 gallons of liquid propane, equivalent to about 92 mol or over 400 MJ of combustion energy.",
  ],

  history: `Walter O. Snelling identified propane and other volatile hydrocarbons as components of gasoline vapor losses in 1910–1911, leading to the first commercial LPG production around 1912. The National Propane Gas Association traces the modern LPG industry to Snelling's discovery, which also helped explain why stored gasoline lost volume and combustibility over time.`,

  discovery: "Walter O. Snelling, 1910 — identified propane while studying the volatile fractions responsible for gasoline evaporation losses; commercial LPG bottling followed within a few years.",

  examNotes: [
    "Molar mass C₃H₈ = 3(12.01) + 8(1.008) = 44.09–44.10 g/mol.",
    "Combustion: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O (balance O₂ carefully — 5, not 4).",
    "Propane has no structural isomers; butane (C₄H₁₀) has two (n-butane and isobutane).",
    "General alkane formula CₙH₂ₙ₊₂ applies: n = 3 gives C₃H₈.",
  ],

  commonMistakes: [
    "Under-balancing the combustion equation by forgetting propane needs 5 mol O₂ per mole, not a round number like 4.",
    "Assuming propane vapor rises like methane — it is denser than air and sinks.",
    "Confusing propane (C₃H₈, 44.10 g/mol) with propene/propylene (C₃H₆, 42.08 g/mol), which has a double bond.",
  ],

  studentTips: [
    "Memorize the alkane series CH₄, C₂H₆, C₃H₈, C₄H₁₀ and their formula pattern CₙH₂ₙ₊₂.",
    "Round 44.10 g/mol to 44 for quick mental stoichiometry in combustion problems.",
    "Link vapor density (heavier than air) to real-world LPG safety practices (ventilation at floor level).",
  ],

  misconceptions: [
    "Propane is not naturally odorous — the 'gas smell' comes from added ethyl mercaptan, identical in principle to natural gas odorization.",
    "LPG is not a single compound — commercial propane blends often contain small amounts of butane and propylene.",
    "Propane and natural gas (methane) are not interchangeable fuels — appliance orifices and regulators differ because of different heating values and vapor densities.",
  ],

  physical: {
    appearance: "Colorless gas; colorless liquid under pressure or refrigeration",
    color: "Colorless",
    odor: "Odorless (pure); commercial propane is odorized with ethyl mercaptan",
    stateAtSTP: "Gas",
    density: "1.882 g/L at STP (gas, ~1.5× denser than air); 0.493 g/cm³ (liquid at 25 °C, saturation pressure)",
    meltingPoint: "−187.7 °C",
    boilingPoint: "−42.1 °C",
    flashPoint: "−104 °C",
    solubility: "62.4 mg/L water at 25 °C (poorly soluble)",
    crystalStructure: "Not applicable at STP (gas); monoclinic solid below −187.7 °C",
  },

  chemical: {
    classification: "Saturated hydrocarbon / alkane",
    polarity: "Non-polar",
    molecularGeometry: "Tetrahedral at each carbon",
    bondAngle: "109.5°",
    oxidationStates: "Terminal C: −3; central C: −2; H: +1",
    chemicalFamily: "Alkanes (third homolog, three-carbon)",
  },

  reactions: [
    {
      equation: "C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(g)",
      type: "Combustion (complete)",
      conditions: "Ignition, excess oxygen",
      explanation: "Complete combustion releases ~2220 kJ/mol, the basis of propane's use as a portable heating and cooking fuel; the blue flame indicates efficient, sootless burning.",
      products: "Carbon dioxide and water",
      applications: "Grills, camp stoves, portable heaters, forklift engines",
      relatedConcepts: ["Combustion", "Enthalpy of combustion", "Stoichiometry"],
    },
    {
      equation: "C₃H₈(g) + 3 O₂(g) → 3 CO(g) + 4 H₂O(g)",
      type: "Combustion (incomplete)",
      conditions: "Limited oxygen supply",
      explanation: "Insufficient air produces toxic carbon monoxide instead of CO₂ — the reason unvented propane heaters pose CO poisoning risk indoors.",
      products: "Carbon monoxide and water",
      applications: "Illustrates combustion safety and the need for ventilation/CO detectors",
      relatedConcepts: ["Incomplete combustion", "Carbon monoxide toxicity", "Air-fuel ratio"],
    },
    {
      equation: "C₃H₈(g) → C₃H₆(g) + H₂(g)",
      type: "Catalytic dehydrogenation",
      conditions: "Cr₂O₃/Al₂O₃ or Pt catalyst, 500–650 °C",
      explanation: "Propane loses hydrogen to form propene (propylene), a key monomer for polypropylene production, in an endothermic equilibrium reaction.",
      products: "Propene and hydrogen",
      applications: "Propylene/polypropylene manufacturing feedstock",
      relatedConcepts: ["Dehydrogenation", "Catalysis", "Petrochemical feedstocks"],
    },
    {
      equation: "C₃H₈(g) + Cl₂(g) → C₃H₇Cl(g) + HCl(g)",
      type: "Free-radical halogenation",
      conditions: "UV light or heat, chain mechanism",
      explanation: "Chlorine radicals abstract hydrogen from propane, giving a mixture of 1-chloropropane and 2-chloropropane since both types of C–H bonds can react.",
      products: "Chloropropane isomers and hydrogen chloride",
      applications: "Illustrates radical chain mechanisms and regioselectivity in substitution",
      relatedConcepts: ["Free radicals", "Substitution reactions", "Regioselectivity"],
    },
  ],

  relatedFormulas: ["CH4", "C2H6", "CO2", "H2O", "C8H18"],
  comparisonNote: "Propane (C₃H₈, 44.10 g/mol, bp −42 °C) sits between methane (16.04 g/mol, bp −162 °C) and butane (58.12 g/mol, bp −1 °C) in the alkane series — boiling point rises steadily with chain length due to increasing London dispersion forces.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of propane (C₃H₈).",
      answer: "3(12.01) + 8(1.008) = 44.09–44.10 g/mol",
    },
    {
      question: "How many liters of O₂ at STP are needed to completely combust 88 g of propane?",
      answer: "88 g ÷ 44.10 g/mol ≈ 2.0 mol C₃H₈; needs 5 × 2.0 = 10 mol O₂ ≈ 224 L at STP",
      hint: "Use C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.",
    },
    {
      question: "Why is propane stored as a liquid in cylinders rather than as a compressed gas like oxygen?",
      answer: "Propane's boiling point (−42 °C) is low enough that modest pressure (~8–9 atm at room temperature) liquefies it, allowing far more fuel mass to be stored in a given cylinder volume than compressed gas alone.",
    },
    {
      question: "A propane tank leaks in a basement. Why is this more dangerous than a methane leak in the same space?",
      answer: "Propane vapor is denser than air (vapor density ~1.5), so it sinks and accumulates near the floor, whereas methane (density ~0.55 relative to air) rises and disperses through vents more readily.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of propane?",
      answer: "44.10 g/mol.",
    },
    {
      question: "Is propane the same as LPG?",
      answer: "LPG (liquefied petroleum gas) is typically mostly propane, sometimes blended with butane; pure propane is one specific hydrocarbon within that broader commercial fuel category.",
    },
    {
      question: "Why does propane smell like rotten eggs if it's naturally odorless?",
      answer: "Suppliers add a small amount of ethyl mercaptan (or similar sulfur compound) specifically so that leaks can be detected by smell before reaching flammable concentrations.",
    },
    {
      question: "How is propane different from butane?",
      answer: "Propane (C₃H₈, 44.10 g/mol) has three carbons and a lower boiling point (−42 °C) than butane (C₄H₁₀, 58.12 g/mol, bp −1 °C), making propane better suited for cold-weather use since it still vaporizes readily.",
    },
    {
      question: "Can propane be used as a refrigerant?",
      answer: "Yes — designated R-290, propane is an efficient, low global-warming-potential refrigerant used in some household refrigerators and heat pumps, despite requiring flammability precautions.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Propane thermophysical properties" },
    { label: "PubChem CID 6334", note: "Propane structure and identifiers" },
    { label: "National Propane Gas Association", note: "LPG industry history and safety data" },
  ],
};
