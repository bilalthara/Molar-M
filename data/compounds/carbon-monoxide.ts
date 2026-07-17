import type { CompoundProfile } from "@/lib/chemistry/types";

export const carbonMonoxide: CompoundProfile = {
  slug: "molar-mass-of-carbon-monoxide",
  formula: "CO",
  name: "Carbon Monoxide",
  iupacName: "Carbon monoxide",
  commonNames: ["Carbon monoxide", "Carbonous oxide", "Flue gas (component)"],
  aliases: ["CO", "The silent killer"],
  category: "gas",
  categories: ["gas", "oxide", "inorganic"],
  casNumber: "630-08-0",
  pubchemCid: "281",
  smiles: "[C-]#[O+]",
  inchi: "InChI=1S/CO/c1-2",
  exactMass: 27.994915,
  featured: true,
  popular: true,

  overview: `Carbon monoxide (CO) is a diatomic molecule with a molar mass of 28.01 g/mol, formed from one carbon and one oxygen atom joined by a strong triple bond. Despite its simple two-atom structure, CO carries a formal negative charge on carbon and positive charge on oxygen in its best Lewis structure — an unusual polarity reversal explained by molecular orbital theory, where the highest-occupied orbital is concentrated on carbon rather than the more electronegative oxygen. This electronic arrangement is directly responsible for carbon monoxide's most notorious property: an extraordinarily strong affinity for binding transition-metal centers, including the iron atom at the heart of hemoglobin.

CO forms whenever carbon-containing fuel burns without enough oxygen for complete combustion. Complete combustion of a hydrocarbon yields CO₂ and H₂O, but oxygen-starved (incomplete) combustion — in poorly ventilated furnaces, idling car engines, charcoal grills used indoors, or faulty gas heaters — instead produces the more dangerous CO. Because carbon monoxide is colorless, odorless, and non-irritating, it gives victims no sensory warning before dangerous concentrations accumulate, making it responsible for the majority of accidental poisoning deaths from gas inhalation worldwide and earning its reputation as "the silent killer."

Despite its toxicity, CO plays an essential and controlled role in industrial chemistry. It is the key building block of syngas (synthesis gas, a CO/H₂ mixture) used in Fischer–Tropsch synthesis to make liquid hydrocarbons and in the industrial production of methanol. In blast furnaces, CO generated from coke serves as the reducing agent that strips oxygen from iron ore, making it indispensable to global steel production despite the careful containment its toxicity demands.`,

  formulaExplanation: `The formula CO represents a 1:1 ratio of carbon to oxygen joined by a formal triple bond (one sigma and two pi bonds), giving a bond order of 3 — among the strongest bonds known for a diatomic molecule (bond dissociation energy ≈ 1072 kJ/mol, even greater than N₂). The molecule carries a small dipole moment (0.11 D) with an unusual polarity: carbon bears a slight negative charge despite oxygen's higher electronegativity, a consequence of the molecular orbital structure rather than simple electronegativity-based reasoning.`,

  chemicalProfile: `Carbon monoxide is a reducing agent, readily donating its lone pair on carbon to metal centers (forming metal carbonyl complexes) and reducing metal oxides to free metals at high temperature. It burns in air to form CO₂ (2 CO + O₂ → 2 CO₂), releasing significant heat, and this combustibility is itself a secondary hazard in enclosed spaces where CO accumulates. CO is also a ligand in organometallic chemistry, forming stable complexes such as Ni(CO)₄ and Fe(CO)₅ through back-donation from metal d-orbitals into CO's empty pi-antibonding orbitals.`,

  uniqueTopics: [
    {
      heading: "Toxicity mechanism: why CO is so much more dangerous than CO2",
      body: "Carbon monoxide poisons the body by binding to the iron atom in hemoglobin roughly 200–250 times more tightly than oxygen does, forming carboxyhemoglobin (COHb) that cannot carry oxygen and also shifts the oxygen-hemoglobin dissociation curve, impairing oxygen release to tissues even from unaffected hemoglobin. This is fundamentally different from CO₂, which is not directly toxic at moderate levels and instead causes harm mainly through simple oxygen displacement (asphyxiation) at very high concentrations. Because CO binds so tightly and reversibly, treatment for poisoning involves administering high-flow or hyperbaric oxygen to competitively displace CO from hemoglobin.",
    },
    {
      heading: "Hemoglobin binding and the carboxyhemoglobin curve",
      body: "The affinity constant of hemoglobin for CO relative to O₂ is described by the Haldane relationship, showing why even low ambient CO concentrations (as little as 0.1% by volume) can produce dangerous carboxyhemoglobin saturation over time. Chronic low-level exposure — from a poorly vented furnace or an idling car in an attached garage — can raise COHb to symptomatic levels (headache, confusion) well before life-threatening acute poisoning, which is why CO detectors are calibrated to alarm at low sustained concentrations rather than only at acutely lethal levels.",
    },
    {
      heading: "Industrial synthesis: water-gas shift, syngas, and blast furnaces",
      body: "Carbon monoxide is produced industrially through the water–gas reaction (C + H₂O → CO + H₂, at high temperature over coke) and the partial oxidation of hydrocarbons or coal to make syngas, a CO/H₂ mixture central to Fischer–Tropsch synthesis of liquid fuels and to methanol manufacture (CO + 2 H₂ → CH₃OH). In blast furnaces, CO generated in situ from coke and air reduces iron ore (Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂), making CO chemistry fundamental to virtually all primary steel production.",
    },
    {
      heading: "CO vs. CO2: contrasting the two carbon oxides",
      body: "CO and CO₂ are both products of carbon combustion but differ dramatically in bonding, toxicity, and environmental role. CO has a triple bond, a small dipole, and forms from incomplete combustion; CO₂ has two double bonds, is nonpolar due to its linear symmetric geometry, and forms from complete combustion. CO is acutely toxic through hemoglobin binding but is not a significant greenhouse gas at typical atmospheric concentrations, whereas CO₂ is essentially non-toxic at ambient levels but is the dominant anthropogenic driver of the greenhouse effect. In the atmosphere, CO is eventually oxidized to CO₂ by hydroxyl radicals, linking the two compounds in atmospheric chemistry.",
    },
    {
      heading: "Sources, detectors, and everyday exposure risks",
      body: "Common sources of hazardous CO exposure include idling vehicles in enclosed garages, malfunctioning or unvented gas water heaters and furnaces, charcoal or propane grills used indoors, blocked chimneys, and tobacco smoke. Because CO is undetectable by human senses, electrochemical or biomimetic CO detectors are essential safety devices in homes, functioning by sensing CO's reducing chemistry (electrochemical sensors) or its effect on a hemoglobin-like pigment (biomimetic sensors) rather than relying on smell or visible smoke.",
    },
  ],

  applications: {
    industrial: [
      "Reducing agent in blast furnace iron and steel production",
      "Key component of syngas for Fischer–Tropsch synthesis of liquid fuels",
      "Feedstock for methanol and acetic acid manufacture (carbonylation processes)",
      "Metal carbonyl formation for purification (Mond process for nickel refining)",
    ],
    laboratory: [
      "Ligand in organometallic and coordination chemistry research",
      "Reducing atmosphere for certain high-temperature metallurgical experiments",
      "Model system for studying molecular orbital theory and bond order",
    ],
    environmental: "A regulated air pollutant from vehicle exhaust and combustion sources; though not a major direct greenhouse gas, atmospheric CO indirectly affects climate by consuming hydroxyl radicals that would otherwise break down methane.",
    biological: "Endogenously produced in trace amounts during heme breakdown and studied as a signaling molecule in vascular biology, but at higher concentrations acts as a potent respiratory toxin by displacing oxygen from hemoglobin.",
  },

  preparation: `Laboratory CO can be generated by dehydrating formic acid with concentrated sulfuric acid: HCOOH → CO + H₂O (H₂SO₄ catalyst, heat). Industrially, it is produced via the water-gas reaction over hot coke, partial combustion of carbon-based fuels, or steam reforming of natural gas as part of syngas production.`,

  production: `Global CO production is largely captured in situ within syngas and blast-furnace gas streams rather than isolated as a standalone commodity, though purified CO is sold for specialty carbonylation chemistry and metal refining applications.`,

  storage: `Store compressed CO gas cylinders in well-ventilated areas equipped with CO detectors, secured upright and away from heat sources. Because CO is both toxic and flammable, storage areas require both gas-leak monitoring and fire-safety precautions.`,

  handling: `Handle only in well-ventilated areas or fume hoods with continuous CO monitoring. Never operate combustion engines, generators, or unvented fuel-burning appliances in enclosed spaces. Install and regularly test carbon monoxide detectors in any residence with gas appliances, fireplaces, or attached garages.`,

  safety: {
    summary: "Highly toxic by inhalation due to strong, competitive binding to hemoglobin; colorless and odorless, giving no warning of dangerous exposure; also flammable and forms explosive mixtures with air.",
    hazards: [
      "Acute poisoning from hemoglobin binding, causing hypoxia even at low blood oxygen displacement",
      "No sensory warning (colorless, odorless) prior to dangerous exposure",
      "Flammable gas; can form explosive mixtures with air (12.5–74% by volume)",
      "Chronic low-level exposure causing headache, fatigue, and cognitive impairment",
    ],
    classification: "GHS: Flam. Gas 1, Acute Tox. 3 (inhalation), Repr. 1A",
  },

  interestingFacts: [
    "CO binds hemoglobin roughly 200–250 times more strongly than oxygen, which is why even small amounts can be dangerous.",
    "The triple bond in CO (bond order 3) is one of the strongest chemical bonds known between two atoms, even stronger than the N≡N bond in nitrogen gas.",
    "The body produces small amounts of CO naturally during heme catabolism, and it functions as a minor signaling molecule in blood vessel regulation.",
    "Home carbon monoxide detectors became mandatory in many jurisdictions only in recent decades, despite CO poisoning being recognized as a hazard for over a century.",
  ],

  history: `Carbon monoxide's toxic properties were documented as early as antiquity through observations of charcoal-burning fumes causing death, but its chemical identity as a distinct gas was established in the late 18th century. French chemist Claude Louis Berthollet showed it was composed of carbon and oxygen in the 1780s, and its formula and bonding were clarified through 19th- and 20th-century advances in molecular orbital theory that explained its unusual electronic structure.`,

  discovery: "Recognized as a distinct toxic gas in the late 18th century; its molecular composition was established by Berthollet and later chemists studying combustion gases.",

  examNotes: [
    "Molar mass CO = 12.01 + 16.00 = 28.01 g/mol.",
    "CO has a triple bond and bond order 3 — contrast with CO₂'s two double bonds and O₂'s double bond when discussing bond strength trends.",
    "Complete combustion of hydrocarbons produces CO₂; incomplete combustion (limited O₂) produces CO — a key exam distinction in combustion stoichiometry.",
    "CO is a reducing agent in blast furnace reactions: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂ — memorize for extraction of metals topics.",
  ],

  commonMistakes: [
    "Confusing carbon monoxide (CO, 28.01 g/mol, toxic) with carbon dioxide (CO₂, 44.01 g/mol, non-toxic at ambient levels) — different formula, bonding, and hazard profile.",
    "Assuming CO is detectable by smell — it is completely odorless, unlike gases such as ammonia or hydrogen sulfide.",
    "Writing the Lewis structure of CO with formal charges reversed from what molecular orbital theory predicts; the correct structure places a negative formal charge on carbon.",
  ],

  studentTips: [
    "Remember CO's molar mass (28.01) is very close to N₂ (28.02) — a useful memory link since both are strong triple-bonded diatomics of similar mass.",
    "Use the blast furnace equation as your go-to example when asked for a reaction where CO acts as a reducing agent.",
    "Link CO's toxicity mechanism (hemoglobin binding) to real-world safety advice about detectors and ventilation for a memorable exam answer.",
  ],

  misconceptions: [
    "CO poisoning is not the same mechanism as CO₂ asphyxiation — CO actively displaces oxygen from hemoglobin rather than simply diluting available oxygen in the air.",
    "CO is not a significant direct contributor to the greenhouse effect at typical concentrations, unlike CO₂; its main environmental role is as an air pollutant and indirect atmospheric chemistry participant.",
    "A working smoke detector does not detect carbon monoxide — dedicated CO detectors use different sensing technology and must be installed separately.",
  ],

  physical: {
    appearance: "Colorless gas",
    color: "Colorless",
    odor: "Odorless",
    stateAtSTP: "Gas",
    density: "1.145 g/L at 25 °C (slightly less dense than air)",
    meltingPoint: "−205.0 °C",
    boilingPoint: "−191.5 °C",
    solubility: "0.0026 g/100 mL water at 20 °C (poorly soluble)",
    crystalStructure: "Not applicable at standard conditions (gas)",
  },

  chemical: {
    classification: "Inorganic oxide (non-metal oxide) / reducing gas",
    polarity: "Weakly polar (dipole moment 0.11 D)",
    molecularGeometry: "Linear (diatomic)",
    bondAngle: "180° (diatomic, trivially linear)",
    oxidationStates: "C: +2, O: −2",
    chemicalFamily: "Carbon oxides (lower oxidation state oxide of carbon)",
  },

  reactions: [
    {
      equation: "2 CO(g) + O₂(g) → 2 CO₂(g)",
      type: "Combustion (oxidation)",
      conditions: "Ignition source, presence of oxygen",
      explanation: "Carbon monoxide burns with a characteristic blue flame, releasing substantial heat as it is fully oxidized to carbon dioxide.",
      products: "Carbon dioxide",
      applications: "Complete combustion in engines and furnaces, catalytic converter chemistry",
      relatedConcepts: ["Combustion", "Oxidation states", "Thermochemistry"],
    },
    {
      equation: "Fe₂O₃(s) + 3 CO(g) → 2 Fe(l) + 3 CO₂(g)",
      type: "Redox (reduction of metal oxide)",
      conditions: "Blast furnace, ~1,200–2,000 °C",
      explanation: "Carbon monoxide reduces iron(III) oxide to molten iron metal while itself being oxidized to CO₂, the central reaction of primary steel production.",
      products: "Molten iron and carbon dioxide gas",
      applications: "Blast furnace ironmaking, extractive metallurgy",
      relatedConcepts: ["Reducing agents", "Extractive metallurgy", "Redox"],
    },
    {
      equation: "CO(g) + 2 H₂(g) → CH₃OH(g)",
      type: "Catalytic synthesis (carbonylation/hydrogenation)",
      conditions: "Cu/ZnO/Al₂O₃ catalyst, ~250 °C, 50–100 atm",
      explanation: "Syngas (CO and H₂) is catalytically combined to form methanol, a major industrial route to this key feedstock chemical.",
      products: "Methanol",
      applications: "Industrial methanol production, syngas chemistry",
      relatedConcepts: ["Catalysis", "Syngas", "Industrial synthesis"],
    },
    {
      equation: "HCOOH(l) → CO(g) + H₂O(l)",
      type: "Dehydration (acid-catalyzed decomposition)",
      conditions: "Concentrated H₂SO₄, heat",
      explanation: "Formic acid is dehydrated to produce carbon monoxide gas, a common laboratory method for generating small quantities of CO.",
      products: "Carbon monoxide and water",
      applications: "Laboratory CO generation for controlled experiments",
      relatedConcepts: ["Dehydration reactions", "Gas generation", "Organic decomposition"],
    },
  ],

  relatedFormulas: ["CO2", "CH4", "CH3OH", "NO", "H2"],
  comparisonNote: "CO (28.01 g/mol, triple-bonded, acutely toxic via hemoglobin binding) contrasts sharply with CO₂ (44.01 g/mol, double-bonded, non-toxic at ambient levels but a major greenhouse gas) — both carbon oxides but with almost opposite hazard profiles.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of carbon monoxide, CO.",
      answer: "12.01 + 16.00 = 28.01 g/mol",
    },
    {
      question: "How many grams of CO are produced from the incomplete combustion of 24 g of carbon with limited oxygen (2 C + O₂ → 2 CO)?",
      answer: "24 g C ÷ 12.01 g/mol = 2.0 mol C → 2.0 mol CO produced = 2.0 × 28.01 = 56.0 g",
    },
    {
      question: "What bond order does carbon monoxide have, and how does it compare to N₂?",
      answer: "CO has a bond order of 3 (triple bond), comparable to and even slightly stronger than the triple bond in N₂, explaining CO's high bond dissociation energy.",
    },
    {
      question: "Why is a carbon monoxide detector necessary even if a smoke detector is present?",
      answer: "CO is colorless and odorless and does not produce smoke particles, so smoke detectors cannot sense it; a dedicated CO detector uses a different sensing mechanism.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of carbon monoxide?",
      answer: "28.01 g/mol, from 12.01 (C) + 16.00 (O).",
    },
    {
      question: "Why is carbon monoxide so dangerous?",
      answer: "It binds hemoglobin 200–250 times more strongly than oxygen, blocking oxygen transport in the blood, and it is undetectable by smell or sight.",
    },
    {
      question: "What produces carbon monoxide?",
      answer: "Incomplete combustion of carbon-based fuels — from vehicle engines, gas heaters, charcoal grills, and fireplaces — when insufficient oxygen is available for complete combustion to CO₂.",
    },
    {
      question: "Is carbon monoxide the same as carbon dioxide?",
      answer: "No. CO (28.01 g/mol) has one oxygen atom and is acutely toxic; CO₂ (44.01 g/mol) has two oxygen atoms and is non-toxic at ambient levels but is a greenhouse gas.",
    },
    {
      question: "What should I do if a CO detector alarms?",
      answer: "Evacuate immediately, get to fresh air, and call emergency services; do not re-enter until the source is identified and the space is ventilated and confirmed safe.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical and spectroscopic data for carbon monoxide" },
    { label: "PubChem CID 281", note: "Structural and toxicological identifiers" },
    { label: "CDC/NIOSH", note: "Carbon monoxide poisoning health and safety guidance" },
  ],
};
