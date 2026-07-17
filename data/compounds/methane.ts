import type { CompoundProfile } from "@/lib/chemistry/types";

export const methane: CompoundProfile = {
  slug: "molar-mass-of-methane",
  formula: "CH4",
  name: "Methane",
  iupacName: "Methane",
  commonNames: ["Methane", "Natural gas (primary component)", "Marsh gas"],
  aliases: ["CH₄", "Methyl hydride"],
  category: "hydrocarbon",
  categories: ["hydrocarbon", "organic", "gas"],
  casNumber: "74-82-8",
  pubchemCid: "297",
  smiles: "C",
  inchi: "InChI=1S/CH4/h1H4",
  exactMass: 16.031300128,
  featured: true,
  popular: true,

  overview: `Methane (CH₄) is the simplest alkane with molar mass 16.04 g/mol (C 12.01 + 4 × 1.008), a colorless, odorless gas at STP. Its tetrahedral geometry (109.5° H–C–H angles) and four equivalent C–H sigma bonds make it non-polar despite individual bond polarity, explaining its poor solubility in water and lack of reactivity under normal conditions.

Methane is the principal component of natural gas (~70–90%) and a potent greenhouse gas with global warming potential roughly 28–84× that of CO₂ over 100 years (depending on time horizon and climate-carbon feedbacks). Atmospheric methane has risen from ~700 ppb pre-industrial to over 1900 ppb, driven by agriculture (enteric fermentation, rice paddies), fossil fuel extraction leaks, and wetlands. Complete combustion releases 890 kJ/mol: CH₄ + 2 O₂ → CO₂ + 2 H₂O.`,

  formulaExplanation: `CH₄ shows carbon in its lowest oxidation state (−4), bonded to four hydrogen atoms. The empirical and molecular formulas are identical. Sp³ hybridization on carbon produces perfect tetrahedral symmetry, making methane spectroscopically simple (IR inactive for C–H stretch due to no dipole change in symmetric stretch — asymmetric stretches absorb).`,

  chemicalProfile: `Methane is relatively inert at room temperature but reacts with halogens photochemically (CH₄ + Cl₂ → CH₃Cl + HCl) and burns or explodes in air at 5–15% concentration. Steam reforming at 800–1000 °C with nickel catalyst converts CH₄ + H₂O → CO + 3 H₂, the industrial hydrogen source. Methane undergoes free-radical chlorination and can be converted to syngas for methanol synthesis.`,

  uniqueTopics: [
    {
      heading: "Methane as the Backbone of Natural Gas",
      body: "Raw natural gas is typically 70–90% methane, with the remainder consisting of heavier alkanes (ethane, propane, butane), CO₂, nitrogen, and trace hydrogen sulfide; processing plants separate these components before methane is distributed through pipelines as pipeline-quality gas for heating, power generation, and industrial use.",
    },
    {
      heading: "Methane's Outsized Greenhouse Impact",
      body: "Although far less abundant than CO₂ in the atmosphere, methane absorbs infrared radiation much more effectively per molecule, giving it a global warming potential roughly 28–84 times that of CO₂ over 100-year and 20-year horizons respectively; because methane also has a much shorter atmospheric lifetime (~9–12 years vs. centuries for CO₂), cutting methane emissions is considered an especially effective near-term lever for slowing warming.",
    },
    {
      heading: "Combustion Efficiency and Blue Flame Chemistry",
      body: "Methane's high hydrogen-to-carbon ratio gives it a cleaner, more complete combustion than heavier hydrocarbons, producing a characteristic blue flame with minimal soot when adequately mixed with air; this is also why methane has a relatively high heating value per unit mass, even though its energy density per unit volume is lower than liquid fuels.",
    },
    {
      heading: "Methane Clathrates (Hydrates)",
      body: "Under the high pressure and low temperature found in deep ocean sediments and permafrost, methane molecules become trapped inside cage-like ice lattices called clathrate hydrates, forming vast, icy, flammable deposits that hold an estimated carbon inventory larger than all conventional fossil fuel reserves combined — and whose potential destabilization under warming conditions is an active area of climate research.",
    },
    {
      heading: "Biogenic vs. Fossil Methane Sources",
      body: "Methane in the atmosphere originates from a mix of biogenic sources (wetlands, ruminant livestock, rice paddies, landfills, driven by methanogenic archaea) and fossil sources (natural gas leaks, coal mining, oil extraction); distinguishing these sources using isotopic signatures is central to climate policy efforts like the Global Methane Pledge.",
    },
  ],

  applications: {
    industrial: [
      "Natural gas fuel for heating, electricity, and industrial furnaces",
      "Steam reforming to produce hydrogen for ammonia and refineries",
      "Methanol synthesis via syngas intermediate",
      "Direct reduction agent in some metallurgical processes",
    ],
    laboratory: [
      "Fuel for Bunsen burners (natural gas supply)",
      "Anaerobic chamber atmosphere component",
      "Standard for gas chromatography calibration",
    ],
    environmental: "Major anthropogenic greenhouse gas; target of leak detection in oil/gas infrastructure; subject of methane abatement pledges (Global Methane Pledge).",
    biological: "End product of anaerobic microbial metabolism (methanogens in wetlands, ruminant guts); biological production exceeds fossil sources in some estimates.",
  },

  preparation: `Natural extraction from gas wells. Laboratory: decarboxylation of sodium acetate with soda lime: CH₃COONa + NaOH → CH₄ + Na₂CO₃. Also from aluminum carbide: Al₄C₃ + 12 H₂O → 3 CH₄ + 4 Al(OH)₃.`,

  production: `Global natural gas production exceeds 4 trillion cubic meters annually. Biogas from anaerobic digesters contains 50–70% CH₄ after CO₂ scrubbing.`,

  storage: `Compressed or liquefied (LNG at −162 °C) in specialized tanks. Methane forms explosive mixtures with air — eliminate ignition sources. Odorants (mercaptans) added to commercial gas for leak detection since CH₄ itself is odorless.`,

  handling: `Highly flammable. Ventilate well. Use gas detectors in confined spaces. LNG causes cryogenic burns. No smoking or open flames near methane sources.`,

  safety: {
    summary: "Extremely flammable; forms explosive mixtures with air. Asphyxiant in enclosed spaces (displaces oxygen).",
    hazards: [
      "Fire and explosion (LFL 5%, UFL 15% in air)",
      "Asphyxiation in confined spaces",
      "Cryogenic burns from LNG",
    ],
    classification: "GHS: Flam. Gas 1, Press. Gas",
  },

  interestingFacts: [
    "Methane molar mass 16.04 g/mol is lighter than air — gas rises and accumulates at ceilings.",
    "Mars atmosphere contains trace methane whose origin remains debated (geological vs. biological).",
    "Methane clathrates on ocean floors hold more carbon than all fossil fuel reserves.",
    "One mole CH₄ combustion releases 890 kJ — more per gram than coal due to high H:C ratio.",
  ],

  history: `Alessandro Volta collected marsh gas from Lake Maggiore sediments (1776). Methane's formula was established by Gerhardt and Cahours. Wöhler's synthesis of urea (1828) disproved vitalism but organic methane from natural sources connected carbon chemistry to geology and biology.`,

  discovery: "Alessandro Volta, 1776–1778 — identified combustible gas from decaying plant matter in lake sediments.",

  examNotes: [
    "Molar mass CH₄ = 12.01 + 4(1.008) = 16.04 g/mol.",
    "Combustion: CH₄ + 2 O₂ → CO₂ + 2 H₂O (balance O carefully).",
    "Tetrahedral geometry, sp³ hybridization, 109.5° bond angles.",
    "C oxidation state = −4 in methane (most reduced form of carbon).",
  ],

  commonMistakes: [
    "Balancing combustion with wrong O₂ coefficient (needs 2 O₂, not 1).",
    "Confusing methane (16.04) with ethane (30.07) or propane (44.10) molar masses.",
    "Assuming methane is polar because C–H bonds are slightly polar — symmetry cancels dipole.",
  ],

  studentTips: [
    "Memorize 16 g/mol — lightest common hydrocarbon.",
    "Draw tetrahedron for VSEPR questions.",
    "Link greenhouse effect to both CO₂ (combustion product) and CH₄ (leaks, agriculture).",
  ],

  misconceptions: [
    "Natural gas smell is not methane — odorants are added artificially.",
    "Methane is not toxic like CO — hazard is flammability and oxygen displacement.",
    "Burning methane is not 'carbon neutral' unless biogenic and sustainably sourced — fossil methane adds CO₂.",
  ],

  physical: {
    appearance: "Colorless gas",
    color: "Colorless",
    odor: "Odorless (pure); commercial natural gas is odorized",
    stateAtSTP: "Gas",
    density: "0.717 g/L at STP; 0.422 g/mL as liquid at −162 °C (LNG)",
    meltingPoint: "−182.5 °C",
    boilingPoint: "−161.5 °C",
    flashPoint: "−188 °C",
    solubility: "22 mg/L water at 25 °C (very poorly soluble)",
    crystalStructure: "Cubic (solid methane, methane hydrate clathrates trap water ice lattice)",
  },

  chemical: {
    classification: "Saturated hydrocarbon / alkane",
    polarity: "Non-polar",
    molecularGeometry: "Tetrahedral",
    bondAngle: "109.5°",
    oxidationStates: "C: −4, H: +1",
    chemicalFamily: "Alkanes (first homolog)",
  },

  reactions: [
    {
      equation: "CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g)",
      type: "Combustion (complete)",
      conditions: "Ignition, excess oxygen",
      explanation: "Complete oxidation releases 890 kJ/mol; basis of natural gas heating value (~55 MJ/kg).",
      products: "Carbon dioxide and water",
      applications: "Heating, electricity generation, industrial furnaces",
      relatedConcepts: ["Combustion", "Enthalpy of combustion", "Stoichiometry"],
    },
    {
      equation: "CH₄(g) + H₂O(g) → CO(g) + 3 H₂(g)",
      type: "Steam reforming",
      conditions: "800–1000 °C, Ni catalyst",
      explanation: "Industrial hydrogen production; endothermic reaction drives H₂ supply for Haber process and refineries.",
      products: "Carbon monoxide and hydrogen (syngas components)",
      applications: "Hydrogen manufacturing, ammonia synthesis feedstock",
      relatedConcepts: ["Industrial chemistry", "Catalysis", "Syngas"],
    },
    {
      equation: "CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)",
      type: "Free-radical halogenation",
      conditions: "UV light or heat, chain reaction",
      explanation: "Chlorine radicals abstract H from methane, forming methyl radical and eventually chloromethane; further substitution possible.",
      products: "Chloromethane and hydrogen chloride",
      applications: "Solvent production, introduction to radical mechanisms",
      relatedConcepts: ["Free radicals", "Substitution reactions", "Photochemistry"],
    },
    {
      equation: "CH₄(g) + 2 O₂(g) → C(s) + 2 H₂O(g)",
      type: "Incomplete combustion",
      conditions: "Limited oxygen",
      explanation: "Insufficient O₂ produces carbon (soot) instead of CO₂ — observed as yellow flame vs. blue complete combustion.",
      products: "Carbon (soot) and water",
      applications: "Illustrates combustion efficiency and air-fuel ratio importance",
      relatedConcepts: ["Combustion efficiency", "Air quality", "Limiting reagent"],
    },
  ],

  relatedFormulas: ["C2H6", "CO2", "H2O", "CH3OH", "Cl2"],
  comparisonNote: "Methane (16.04 g/mol) is the simplest alkane; ethane (C₂H₆, 30.07 g/mol) has higher boiling point (−89 °C vs. −162 °C) due to increased London dispersion forces.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of CH₄.",
      answer: "12.01 + 4(1.008) = 16.04 g/mol",
    },
    {
      question: "How many liters of O₂ at STP for complete combustion of 32 g methane?",
      answer: "32 g ÷ 16.04 g/mol = 2.0 mol CH₄; needs 4.0 mol O₂ = 89.6 L",
    },
    {
      question: "What is the oxidation state of carbon in methane?",
      answer: "−4 (x + 4(+1) = 0 → x = −4)",
    },
    {
      question: "Why is methane a greenhouse gas?",
      answer: "It absorbs infrared radiation in atmospheric window wavelengths, trapping heat despite lower concentration than CO₂.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of methane?",
      answer: "16.04 g/mol.",
    },
    {
      question: "Is methane the same as natural gas?",
      answer: "Natural gas is mostly methane (~70–90%) mixed with ethane, propane, and other gases.",
    },
    {
      question: "Why is methane odorless in nature?",
      answer: "Pure CH₄ has no odor; mercaptans are added to commercial gas so leaks can be detected.",
    },
    {
      question: "What geometry does methane have?",
      answer: "Tetrahedral with 109.5° bond angles and sp³ hybridized carbon.",
    },
    {
      question: "How is methane produced biologically?",
      answer: "Methanogenic archaea produce CH₄ anaerobically from CO₂ + H₂ or acetate in wetlands and digestive tracts.",
    },
  ],

  references: [
    { label: "IPCC AR6", note: "Methane global warming potential values" },
    { label: "NIST Chemistry WebBook", note: "CH₄ thermochemical data" },
    { label: "PubChem CID 297", note: "Methane identifiers" },
  ],
};
