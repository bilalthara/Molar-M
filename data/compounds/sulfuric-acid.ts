import type { CompoundProfile } from "@/lib/chemistry/types";

export const sulfuricAcid: CompoundProfile = {
  slug: "molar-mass-of-sulfuric-acid",
  formula: "H2SO4",
  name: "Sulfuric Acid",
  iupacName: "Sulfuric acid",
  commonNames: ["Sulfuric acid", "Oil of vitriol", "Battery acid (dilute)"],
  aliases: ["H₂SO₄", "Vitriol"],
  category: "acid",
  categories: ["acid", "inorganic"],
  casNumber: "7664-93-9",
  pubchemCid: "1118",
  smiles: "OS(=O)(=O)O",
  inchi: "InChI=1S/H2O4S/c1-5(2,3)4/h(H2,1,2,3,4)",
  exactMass: 97.967389104,
  featured: true,
  popular: true,

  overview: `Sulfuric acid (H₂SO₄) is the world's most produced industrial chemical, with annual output exceeding 230 million tonnes. Its molar mass of 98.08 g/mol comes from two hydrogen atoms, one sulfur (32.07 g/mol), and four oxygen atoms. A viscous, colorless, odorless liquid when pure, concentrated H₂SO₄ is 98% by mass and has a density of about 1.84 g/cm³ — nearly twice that of water.

H₂SO₄ is a diprotic strong acid: the first proton dissociates completely in dilute aqueous solution (Ka₁ ≈ 10³, effectively infinite for most calculations), while the second is weak (Ka₂ = 1.2 × 10⁻², corresponding to HSO₄⁻ ⇌ H⁺ + SO₄²⁻). Concentrated sulfuric acid is a powerful dehydrating agent, removing water from organic compounds as H and O atoms, leaving carbonaceous char — a property exploited in the contact process and feared in laboratory accidents. Its affinity for water is so extreme that dilution must always add acid to water, never the reverse, to avoid violent spattering from the heat of hydration.`,

  formulaExplanation: `H₂SO₄ contains sulfur in the +6 oxidation state, bonded to four oxygen atoms (two as S=O double bonds and two as S–O–H groups in the tetrahedral sulfate geometry). The formula indicates two ionizable protons, though only the first fully dissociates in typical strong-acid contexts.`,

  chemicalProfile: `Sulfuric acid is a strong Brønsted acid, oxidizing agent when hot and concentrated, and dehydrating agent. It protonates alcohols to alkyl sulfates, nitrates aromatics indirectly by generating HNO₃ in mixed acid, and converts metals below hydrogen in the activity series (except Cu, Hg, Ag, Pt, Au cold) to sulfates with H₂ evolution. Hot concentrated H₂SO₄ oxidizes copper to CuSO₄ with SO₂ evolution.`,

  uniqueTopics: [
    {
      heading: "The contact process: how the world's top industrial chemical is made",
      body: "The contact process converts elemental sulfur (or sulfide ore) into sulfuric acid through three carefully controlled stages: combustion of sulfur to SO₂, catalytic oxidation of SO₂ to SO₃ over a vanadium pentoxide catalyst at 400–450 °C (chosen as a compromise between reaction rate and the exothermic equilibrium's temperature sensitivity), and absorption of SO₃ into concentrated sulfuric acid to form oleum, which is then diluted with water to the desired final concentration. This carefully staged process — rather than direct SO₃ absorption into water, which would produce a dangerous, uncontrollable acid mist — exemplifies how industrial chemistry manages both thermodynamics and practical engineering safety simultaneously.",
    },
    {
      heading: "Battery acid: sulfuric acid in the lead-acid cell",
      body: "In a lead-acid car battery, dilute sulfuric acid (roughly 30–50% by mass) serves as both electrolyte and active reactant: during discharge, lead reacts with sulfate ions and the positive plate's lead dioxide is reduced, both processes consuming sulfuric acid and producing lead sulfate and water, which is why a battery's electrolyte density (and thus its measured specific gravity) drops as it discharges. Recharging reverses this reaction, regenerating sulfuric acid and metallic lead — making the state of charge of a lead-acid battery directly and quantitatively linked to the concentration of sulfuric acid in its electrolyte.",
    },
    {
      heading: "Dehydration power: charring sugar and organic matter",
      body: "Concentrated sulfuric acid is one of the most powerful chemical dehydrating agents known, capable of removing water directly from organic molecules rather than simply absorbing ambient moisture. Its affinity for water is so strong that it can strip hydrogen and oxygen atoms out of carbohydrates like sucrose in the exact 2:1 ratio needed to form water molecules, leaving behind a rising black column of nearly pure carbon — a visually dramatic classroom demonstration that also illustrates why concentrated H₂SO₄ causes severe chemical burns on skin, since it dehydrates living tissue by the same mechanism.",
    },
    {
      heading: "Corrosion and materials chemistry",
      body: "Sulfuric acid's corrosivity toward metals, concrete, and biological tissue arises from a combination of its strong Brønsted acidity (attacking basic or reactive materials directly) and, when hot and concentrated, its oxidizing power (attacking even relatively unreactive metals like copper). This dual corrosive mechanism is why materials selection for sulfuric acid storage and transport — often specialized alloys, glass-lined steel, or certain plastics — must account for both acid concentration and temperature, since dilute cold H₂SO₄ and hot concentrated H₂SO₄ present quite different corrosion challenges to the same piece of equipment.",
    },
    {
      heading: "Industrial production scale and economic importance",
      body: "Sulfuric acid production, at over 230 million tonnes annually, exceeds that of nearly every other manufactured chemical, and its output is often used by economists as a rough proxy indicator of a country's industrial and manufacturing activity, since it feeds into fertilizer production, metal processing, petroleum refining, and countless other downstream industries. This makes sulfuric acid a foundational 'workhorse' chemical whose production statistics are tracked globally as an economic and industrial health indicator in their own right.",
    },
  ],

  applications: {
    industrial: [
      "Manufacture of phosphate fertilizers (e.g., converting rock phosphate to superphosphate)",
      "Petroleum refining alkylation (e.g., isooctane production)",
      "Lead-acid car batteries (dilute ~30–50% H₂SO₄ as electrolyte)",
      "Metal pickling and steel cleaning",
      "Rayon and synthetic fiber production",
    ],
    laboratory: [
      "Strong acid for titrations and pH adjustment",
      "Dehydrating agent in organic preparations (with caution)",
      "Electrolyte in electrolysis demonstrations",
    ],
    environmental: "Acid rain contains dilute sulfuric acid from atmospheric oxidation of SO₂; scrubbers in power plants neutralize flue gas SO₂ before emission.",
    biological: "Not biological in beneficial sense; corrosive to tissue. Sulfate ion (SO₄²⁻) from dissociation is a normal metabolic anion in the body.",
  },

  preparation: `The contact process dominates industrial production: burn sulfur to SO₂, catalytically oxidize to SO₃ (V₂O₅ catalyst, 400–450 °C), then absorb SO₃ into 98% H₂SO₄ to form oleum (H₂S₂O₇), which is diluted to desired concentration. Laboratory small amounts: react Na₂SO₄ with concentrated HCl (not preferred) or purchase reagent grade.`,

  production: `Global production via contact process from elemental sulfur, pyrite (FeS₂), or recovered SO₂ from smelting. Spent acid is often regenerated by decomposition and re-concentration.`,

  storage: `Store in corrosion-resistant containers (glass, polyethylene, or passivated steel for concentrated acid). Keep tightly closed, dry, and separated from bases, organic materials, and metals. Secondary containment is mandatory for bulk storage.`,

  handling: `Wear acid-resistant gloves, face shield, and apron. Work in fume hood for concentrated acid. Always add acid to water slowly with stirring. Never add water to concentrated H₂SO₄. Have spill neutralization materials (sodium bicarbonate, vermiculite) available.`,

  safety: {
    summary: "Highly corrosive; causes severe skin burns, eye damage, and respiratory irritation. Exothermic dilution poses splashing hazard.",
    hazards: [
      "Corrosive to skin, eyes, and respiratory tract",
      "Violent reaction with water if water is added to concentrated acid",
      "Dehydrating and charring of organic matter",
      "Reacts with metals to produce flammable hydrogen gas",
    ],
    classification: "GHS: Skin Corr. 1A, Eye Dam. 1",
  },

  interestingFacts: [
    "More sulfuric acid is produced worldwide than any other chemical.",
    "A car battery contains roughly 4–5 kg of sulfuric acid electrolyte.",
    "Concentrated H₂SO₄ can dissolve a paper towel by dehydrating cellulose to carbon.",
    "The molar mass ~98 g/mol makes 1 L of concentrated acid (~18 mol/L) contain about 18 moles.",
  ],

  history: `Alchemists knew "oil of vitriol" from roasting green vitriol (FeSO₄·7H₂O). Joshua Ward produced it commercially in England (~1740). The contact process replaced the lead chamber process in the 20th century, improving purity and enabling higher concentrations for industrial demand.`,

  discovery: "Known since antiquity in impure form; pure composition established by Lavoisier's systematic chemistry and later confirmed by molecular structure studies showing tetrahedral sulfate.",

  examNotes: [
    "Molar mass H₂SO₄ = 2(1.008) + 32.07 + 4(16.00) = 98.08 g/mol.",
    "Diprotic: 1 mol H₂SO₄ can provide up to 2 mol H⁺ if fully neutralized (e.g., with 2 mol NaOH).",
    "S oxidation state in H₂SO₄ is +6; in SO₂ it is +4; track changes in redox problems.",
    "For titration: H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O (2:1 base-to-acid mole ratio).",
  ],

  commonMistakes: [
    "Treating H₂SO₄ as monoprotic in stoichiometry (needs 2 equivalents of base for complete neutralization).",
    "Adding water to concentrated acid instead of acid to water.",
    "Forgetting that concentrated H₂SO₄ has a high boiling point (~337 °C) due to hydrogen bonding.",
  ],

  studentTips: [
    "Memorize 98 g/mol — close to 100 — for quick mental stoichiometry.",
    "Link to contact process equations for industrial chemistry questions.",
    "Use oxidation state +6 for S in sulfate to balance redox half-reactions.",
  ],

  misconceptions: [
    "Dilute H₂SO₄ does not dehydrate sugar the way concentrated acid does — concentration matters enormously.",
    "Sulfuric acid is not the same as sulfurous acid (H₂SO₃, sulfur in +4 state).",
    "Not all metals react with H₂SO₄ the same way; nitric acid reactions differ due to oxidizing ability.",
  ],

  physical: {
    appearance: "Colorless to slightly yellow oily liquid (concentrated); hygroscopic",
    color: "Colorless (pure)",
    odor: "Odorless (pure); pungent when heated or contaminated",
    stateAtSTP: "Liquid (high boiling point prevents gaseous state at STP under normal conditions)",
    density: "1.84 g/cm³ (98% solution, 25 °C)",
    meltingPoint: "10.4 °C (98% acid)",
    boilingPoint: "337 °C (98% acid, decomposes at higher temperatures)",
    solubility: "Miscible with water in all proportions (highly exothermic)",
    crystalStructure: "Forms hydrates; pure H₂SO₄ has hydrogen-bonded network in liquid state",
  },

  chemical: {
    classification: "Mineral acid / strong diprotic acid",
    acidity: "Strong acid (pKa₁ ≈ −3, pKa₂ = 1.99)",
    polarity: "Highly polar",
    molecularGeometry: "Tetrahedral about sulfur",
    bondAngle: "~109.5° (approximate, tetrahedral S center)",
    oxidationStates: "S: +6, O: −2, H: +1",
    chemicalFamily: "Oxoacids of sulfur (highest oxidation state)",
  },

  reactions: [
    {
      equation: "H₂SO₄(aq) + 2 NaOH(aq) → Na₂SO₄(aq) + 2 H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, stoichiometric base",
      explanation: "Both protons of sulfuric acid are neutralized by strong base, forming sulfate salt and water.",
      products: "Sodium sulfate and water",
      applications: "Acid–base titrations, wastewater neutralization",
      relatedConcepts: ["Diprotic acids", "Equivalence point", "Stoichiometry"],
    },
    {
      equation: "2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)",
      type: "Catalytic oxidation (contact process step)",
      conditions: "V₂O₅ catalyst, 450 °C, 1–2 atm",
      explanation: "Sulfur dioxide is oxidized to sulfur trioxide, the key intermediate in industrial H₂SO₄ manufacture.",
      products: "Sulfur trioxide",
      applications: "Industrial sulfuric acid production",
      relatedConcepts: ["Le Chatelier's principle", "Heterogeneous catalysis", "Industrial chemistry"],
    },
    {
      equation: "Cu(s) + 2 H₂SO₄(conc) → CuSO₄(aq) + SO₂(g) + 2 H₂O(l)",
      type: "Redox (hot concentrated acid)",
      conditions: "Hot concentrated H₂SO₄",
      explanation: "Copper does not release H₂ with cold dilute acid but is oxidized by hot concentrated acid to Cu²⁺ with SO₂ as reduced sulfur product.",
      products: "Copper(II) sulfate, sulfur dioxide, water",
      applications: "Demonstrating oxidizing power of concentrated H₂SO₄",
      relatedConcepts: ["Redox", "Activity series exceptions", "Oxidation state changes"],
    },
    {
      equation: "C₁₂H₂₂O₁₁(s) → 12 C(s) + 11 H₂O(l) [catalyzed by H₂SO₄]",
      type: "Dehydration",
      conditions: "Concentrated H₂SO₄, room temperature",
      explanation: "Sucrose is dehydrated to elemental carbon and water; the reaction is dramatic and exothermic, producing a rising carbon column.",
      products: "Carbon and water",
      applications: "Classic demonstration of dehydrating power",
      relatedConcepts: ["Dehydration", "Concentration effects", "Organic chemistry demonstrations"],
    },
  ],

  relatedFormulas: ["H2SO3", "SO2", "SO3", "HCl", "HNO3"],
  comparisonNote: "H₂SO₄ (98.08 g/mol) is diprotic and a dehydrating agent; HCl (36.46 g/mol) is monoprotic and lacks significant dehydrating or oxidizing character when dilute. Unlike SO₂ (64.07 g/mol, S in the +4 state), sulfuric acid holds sulfur in its fully oxidized +6 state, making H₂SO₄ the thermodynamic 'end point' of atmospheric and industrial sulfur oxidation chemistry.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of H₂SO₄.",
      answer: "2(1.008) + 32.07 + 4(16.00) = 98.08 g/mol",
    },
    {
      question: "How many moles of NaOH are needed to neutralize 49 g of H₂SO₄ completely?",
      answer: "49 g ÷ 98.08 g/mol = 0.50 mol H₂SO₄; needs 2 × 0.50 = 1.0 mol NaOH",
      hint: "H₂SO₄ is diprotic — 2 mol NaOH per mol acid.",
    },
    {
      question: "What is the oxidation state of sulfur in H₂SO₄?",
      answer: "+6 (balance: 2(+1) + x + 4(−2) = 0 → x = +6)",
    },
    {
      question: "Why must acid be added to water, not water to acid?",
      answer: "The hydration of H₂SO₄ releases large amounts of heat; adding water to acid can cause localized boiling and violent spattering of corrosive acid.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sulfuric acid?",
      answer: "98.08 g/mol.",
    },
    {
      question: "Is sulfuric acid monoprotic or diprotic?",
      answer: "Diprotic — it can donate two protons per molecule, though the first dissociation is effectively complete in dilute solution.",
    },
    {
      question: "What is the contact process?",
      answer: "Industrial method: S → SO₂ → SO₃ → H₂SO₄ using V₂O₅ catalyst for the SO₂ oxidation step.",
    },
    {
      question: "Why is H₂SO₄ used in car batteries?",
      answer: "Dilute sulfuric acid serves as the electrolyte, enabling reversible electrochemical reactions in the lead-acid cell during charge and discharge.",
    },
    {
      question: "What happens when sulfuric acid contacts skin?",
      answer: "It causes immediate corrosive burns; flush with large amounts of water for at least 15 minutes and seek medical attention.",
    },
  ],

  references: [
    { label: "USGS Mineral Commodity Summaries", note: "Global sulfuric acid production statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic and physical properties" },
    { label: "PubChem CID 1118", note: "Structural and safety data" },
  ],
};
