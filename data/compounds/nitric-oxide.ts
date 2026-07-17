import type { CompoundProfile } from "@/lib/chemistry/types";

export const nitricOxide: CompoundProfile = {
  slug: "molar-mass-of-nitric-oxide",
  formula: "NO",
  name: "Nitric Oxide",
  iupacName: "Nitric oxide",
  commonNames: ["Nitric oxide", "Nitrogen monoxide", "NO"],
  aliases: ["NO", "Mononitrogen monoxide"],
  category: "gas",
  categories: ["gas", "inorganic"],
  casNumber: "10102-43-9",
  pubchemCid: "145068",
  smiles: "[N]=O",
  inchi: "InChI=1S/NO/c1-2",
  exactMass: 29.99799,
  featured: true,
  popular: true,

  overview: `Nitric oxide (NO) is a small diatomic molecule with molar mass 30.01 g/mol (N 14.01 + O 16.00), unusual among simple inorganic gases for being a stable free radical: it has an odd number of electrons (11 valence electrons), leaving one unpaired in an antibonding π* orbital. This radical character makes NO highly reactive toward oxygen, other radicals, and metal centers, yet it is stable enough to exist as a discrete, colorless gas under normal conditions and to diffuse freely across cell membranes.

NO occupies a striking dual role in chemistry and biology. Industrially and environmentally, it is a key intermediate in nitric acid manufacture (Ostwald process) and a major combustion-derived air pollutant, formed when atmospheric N₂ and O₂ react at the high temperatures inside engines and furnaces; once released, NO oxidizes further to NO₂, contributing to smog and acid rain. Biologically, however, minute quantities of NO produced enzymatically by nitric oxide synthase act as a crucial signaling molecule that relaxes blood vessels, regulates blood pressure, and mediates neurotransmission and immune defense — a discovery that earned the 1998 Nobel Prize in Physiology or Medicine.

NO is easily confused with its close relatives nitrogen dioxide (NO₂, brown, acidic, a stronger pollutant) and nitrous oxide (N₂O, "laughing gas," a linear triatomic anesthetic and potent greenhouse gas) — the three nitrogen oxides have distinct structures, oxidation states, and chemistry despite sharing similar names and formulas.`,

  formulaExplanation: `NO consists of one nitrogen and one oxygen atom joined by a bond with partial double-bond character (bond order ≈ 2.5 in molecular orbital theory), shorter than a typical N=O double bond. The molecule has 11 valence electrons total, one more than needed to fill all bonding orbitals, so the extra electron occupies an antibonding π* orbital, making NO a stable radical (•NO) rather than a closed-shell molecule like CO₂ or N₂.`,

  chemicalProfile: `NO reacts rapidly with molecular oxygen even at room temperature: 2 NO + O₂ → 2 NO₂, a reaction whose rate paradoxically decreases with increasing temperature. It binds strongly to transition metal centers (e.g., hemoglobin's iron, forming nitrosylhemoglobin) and readily combines with other radicals, including superoxide (O₂•⁻) to form the highly reactive peroxynitrite (ONOO⁻). NO is produced industrially by catalytic oxidation of ammonia (Ostwald process first step) and can be prepared in the laboratory by reducing dilute nitric acid with copper.`,

  uniqueTopics: [
    {
      heading: "NO as a Biological Signaling Molecule",
      body: "Endothelial cells produce NO from L-arginine via nitric oxide synthase; it diffuses into smooth muscle cells and activates guanylate cyclase, triggering vasodilation that lowers blood pressure. This discovery — that a simple gas acts as an intercellular messenger — reshaped cardiovascular pharmacology and underlies drugs like nitroglycerin and sildenafil (Viagra), which work through the NO signaling pathway.",
    },
    {
      heading: "NO, NO₂, and N₂O — Distinguishing the Nitrogen Oxides",
      body: "Nitric oxide (NO, colorless linear diatomic radical), nitrogen dioxide (NO₂, brown, bent, acidic gas, dimerizes to N₂O₄), and nitrous oxide (N₂O, colorless, linear, anesthetic 'laughing gas') are chemically distinct despite similar names — NO oxidizes readily to NO₂ in air, while N₂O is comparatively inert and long-lived in the atmosphere.",
    },
    {
      heading: "Combustion-Derived Air Pollution (NOx)",
      body: "High-temperature combustion in vehicle engines and power plants drives the otherwise unfavorable reaction N₂ + O₂ → 2 NO, since the reaction becomes thermodynamically more favorable at flame temperatures; catalytic converters and selective catalytic reduction systems specifically target NOx emissions to curb smog and acid rain formation.",
    },
    {
      heading: "The Ostwald Process Link to Nitric Acid",
      body: "NO is the crucial first intermediate in industrial nitric acid synthesis: ammonia is catalytically oxidized to NO, which is further oxidized to NO₂ and absorbed in water to form HNO₃ — connecting nitric oxide directly to fertilizer and explosives manufacturing chains.",
    },
    {
      heading: "Discovery of a Radical Gas Neurotransmitter",
      body: "Before the 1980s, NO was regarded purely as a toxic pollutant; the identification of 'endothelium-derived relaxing factor' as nitric oxide by Furchgott, Ignarro, and Murad revealed an entirely new class of gaseous signaling molecules, a paradigm shift recognized by the 1998 Nobel Prize.",
    },
  ],

  applications: {
    industrial: [
      "Intermediate in the Ostwald process for nitric acid manufacture",
      "Combustion byproduct monitored and controlled in engines, boilers, and power plants (NOx emissions)",
      "Precursor in some specialty nitrogen chemical syntheses",
    ],
    laboratory: [
      "Demonstration of radical gas chemistry and rapid oxidation kinetics (2 NO + O₂ → 2 NO₂)",
      "Used in controlled research settings to study vasodilation and cell signaling pathways",
      "Reference compound for molecular orbital theory teaching (odd-electron stable molecule)",
    ],
    environmental: "Major precursor to photochemical smog and acid rain when oxidized to NO₂ and further to nitric acid in the atmosphere; regulated as a criteria air pollutant (NOx) from vehicles and power generation.",
    biological: "Endogenous signaling molecule regulating vasodilation, blood pressure, platelet aggregation, neurotransmission, and immune-mediated pathogen killing (macrophage-derived NO).",
  },

  preparation: `Laboratory preparation: reduce dilute nitric acid with copper, 3 Cu + 8 HNO₃(dilute) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O, collecting the colorless NO gas over water (it must be handled to avoid air contact, which turns it brown as NO₂ forms). Industrially, NO is generated by catalytic oxidation of ammonia over a platinum-rhodium gauze catalyst.`,

  production: `Industrial NO is produced continuously as an intermediate within nitric acid plants via ammonia oxidation; it is not typically stored or shipped as a standalone commercial product due to its reactivity, aside from specialized medical-grade NO used in inhaled therapy for pulmonary hypertension in newborns.`,

  storage: `Medical and research-grade NO is stored as a dilute, stabilized mixture in specialized gas cylinders (often blended with nitrogen) to prevent uncontrolled oxidation to NO₂. Laboratory-generated NO should be used promptly and kept isolated from oxygen and moisture.`,

  handling: `Toxic by inhalation; reacts with atmospheric oxygen to form the more toxic and corrosive NO₂. Handle only in a fume hood or closed gas-delivery system, avoiding air ingress. Medical inhaled NO requires precise dosing equipment to prevent methemoglobinemia from overexposure.`,

  safety: {
    summary: "Toxic gas that rapidly oxidizes in air to the more hazardous nitrogen dioxide; inhalation can cause respiratory irritation and, at high doses, methemoglobinemia by interfering with hemoglobin's oxygen-carrying function.",
    hazards: [
      "Toxic by inhalation; converts to corrosive NO₂ in air",
      "Reacts with hemoglobin, risking methemoglobinemia at high exposure",
      "Supports combustion as an oxidizer in some conditions",
      "Contributes to smog and acid rain when released to the atmosphere",
    ],
    classification: "GHS: Acute Tox. 3 (inhalation), Ox. Gas 1",
  },

  interestingFacts: [
    "NO was the American Chemical Society's 'Molecule of the Year' in 1992 after its role as a biological signaling molecule was firmly established.",
    "The molar mass of NO (30.01 g/mol) is nearly identical to that of ethane (C₂H₆, 30.07 g/mol) and formaldehyde (CH₂O, 30.03 g/mol) — a useful comparison for isobaric mass spectrometry teaching.",
    "Nitroglycerin tablets used for angina work because the body metabolizes them to release NO, which dilates coronary blood vessels.",
    "Unlike most radicals, NO is stable enough to be bottled and studied as a pure gas because its unpaired electron is delocalized over the whole molecule rather than concentrated on a reactive atom.",
  ],

  history: `Joseph Priestley first prepared nitric oxide in 1772, calling it "nitrous air." Its central role in industrial nitric acid production was established with the Ostwald process (patented 1902). The recognition of endogenous NO as "endothelium-derived relaxing factor" by Robert Furchgott, Louis Ignarro, and Ferid Murad in the 1980s led to their joint 1998 Nobel Prize in Physiology or Medicine.`,

  discovery: "Joseph Priestley, 1772 — first isolated and characterized nitrogen monoxide gas ('nitrous air') during his systematic studies of airs and gases.",

  examNotes: [
    "Molar mass NO = 14.01 + 16.00 = 30.01 g/mol.",
    "NO is a stable free radical with 11 valence electrons and bond order ~2.5 by molecular orbital theory.",
    "2 NO + O₂ → 2 NO₂ occurs readily at room temperature; do not confuse with the Ostwald process's later steps.",
    "Distinguish nitrogen's oxidation state: +2 in NO, +4 in NO₂, +1 in N₂O, +5 in HNO₃/NO₃⁻.",
  ],

  commonMistakes: [
    "Confusing NO (nitric oxide, colorless) with NO₂ (nitrogen dioxide, brown) — they have different colors, structures, and reactivity.",
    "Assuming NO is a simple closed-shell molecule like CO — its odd electron count makes it a radical.",
    "Mixing up nitric oxide (NO) with nitrous oxide (N₂O, 'laughing gas') — different formulas, structures, and uses entirely.",
  ],

  studentTips: [
    "Use molecular orbital diagrams to explain why NO is paramagnetic (unpaired electron) unlike most simple diatomics.",
    "Link NO's biological role (vasodilation) to nitroglycerin's medical use for quick recall in biochemistry contexts.",
    "Memorize the nitrogen oxidation state ladder: NH₃ (−3) → N₂ (0) → NO (+2) → NO₂ (+4) → HNO₃ (+5) for redox problems.",
  ],

  misconceptions: [
    "NO is not the same as 'laughing gas' (N₂O) — the names are easily confused but the molecules and effects are entirely different.",
    "NO is not always harmful — at the tiny concentrations produced physiologically, it is an essential and beneficial signaling molecule.",
    "NO does not stay colorless indefinitely in air — it oxidizes to brown NO₂ within seconds to minutes of air exposure.",
  ],

  physical: {
    appearance: "Colorless gas (rapidly turns brown/reddish on air exposure as it oxidizes to NO₂)",
    color: "Colorless (pure); appears brown when contaminated with NO₂",
    odor: "Sharp, slightly sweet odor",
    stateAtSTP: "Gas",
    density: "1.34 g/L at STP",
    meltingPoint: "−163.6 °C",
    boilingPoint: "−151.7 °C",
    solubility: "56 mg/L water at 25 °C (slightly soluble; slowly reacts rather than simply dissolving)",
    crystalStructure: "Not applicable at STP (gas)",
  },

  chemical: {
    classification: "Diatomic nitrogen oxide / stable free radical",
    polarity: "Slightly polar (small dipole moment, 0.16 D)",
    molecularGeometry: "Linear (diatomic)",
    bondAngle: "180° (diatomic)",
    oxidationStates: "N: +2, O: −2",
    chemicalFamily: "Nitrogen oxides (NOx family)",
  },

  reactions: [
    {
      equation: "2 NO(g) + O₂(g) → 2 NO₂(g)",
      type: "Radical oxidation",
      conditions: "Room temperature, spontaneous",
      explanation: "NO reacts rapidly with atmospheric oxygen to form brown nitrogen dioxide; unusually, the reaction rate decreases as temperature rises due to a negative apparent activation energy from a termolecular mechanism.",
      products: "Nitrogen dioxide",
      applications: "Explains rapid browning of NO gas in air, key step in smog and acid rain formation",
      relatedConcepts: ["Reaction kinetics", "Radical chemistry", "Atmospheric chemistry"],
    },
    {
      equation: "4 NH₃(g) + 5 O₂(g) → 4 NO(g) + 6 H₂O(g)",
      type: "Catalytic oxidation (Ostwald process step 1)",
      conditions: "Pt–Rh gauze catalyst, 800–900 °C",
      explanation: "Ammonia is selectively oxidized to nitric oxide rather than N₂, the essential first step converting ammonia into nitric acid industrially.",
      products: "Nitric oxide and water",
      applications: "Industrial nitric acid production",
      relatedConcepts: ["Catalysis", "Selective oxidation", "Industrial chemistry"],
    },
    {
      equation: "3 Cu(s) + 8 HNO₃(dilute) → 3 Cu(NO₃)₂(aq) + 2 NO(g) + 4 H₂O(l)",
      type: "Redox (laboratory preparation)",
      conditions: "Dilute nitric acid, room temperature",
      explanation: "Copper reduces dilute nitric acid to colorless NO gas, which turns brown on contact with air as it oxidizes to NO₂ — a standard laboratory preparation and demonstration.",
      products: "Copper(II) nitrate, nitric oxide, water",
      applications: "Laboratory generation of NO, illustrating dilute vs. concentrated HNO₃ reduction products",
      relatedConcepts: ["Redox", "Oxidizing acids", "Gas preparation"],
    },
    {
      equation: "NO(g) + O₂•⁻ → ONOO⁻",
      type: "Radical–radical combination",
      conditions: "Physiological aqueous environment",
      explanation: "Nitric oxide combines with superoxide radical to form peroxynitrite, a highly reactive oxidant implicated in oxidative stress and immune-mediated pathogen killing.",
      products: "Peroxynitrite anion",
      applications: "Immune response signaling, oxidative stress biochemistry research",
      relatedConcepts: ["Free radical biology", "Reactive nitrogen species", "Oxidative stress"],
    },
  ],

  relatedFormulas: ["N2O", "HNO3", "NH3", "N2", "O2"],
  comparisonNote: "NO (30.01 g/mol) is a stable radical that oxidizes readily to NO₂ (46.01 g/mol, brown, acidic); N₂O (44.01 g/mol, 'laughing gas') is a separate, comparatively inert nitrogen oxide with a different structure and role as a long-lived greenhouse gas.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of nitric oxide (NO).",
      answer: "14.01 + 16.00 = 30.01 g/mol",
    },
    {
      question: "What is the oxidation state of nitrogen in NO?",
      answer: "+2 (O is −2, so N + (−2) = 0 → N = +2)",
    },
    {
      question: "How many moles of NO₂ form when 60.0 g of NO reacts completely with excess O₂?",
      answer: "60.0 g ÷ 30.01 g/mol ≈ 2.0 mol NO; from 2 NO + O₂ → 2 NO₂, this gives 2.0 mol NO₂",
      hint: "The mole ratio of NO to NO₂ is 1:1 in the balanced equation.",
    },
    {
      question: "Why is NO classified as a free radical while CO₂ is not?",
      answer: "NO has an odd number of valence electrons (11), leaving one unpaired electron in an antibonding orbital, whereas CO₂ has an even number of electrons, all paired in bonding/lone-pair orbitals.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of nitric oxide?",
      answer: "30.01 g/mol.",
    },
    {
      question: "Is nitric oxide the same as nitrous oxide?",
      answer: "No — nitric oxide (NO, 30.01 g/mol) is a diatomic radical, while nitrous oxide (N₂O, 44.01 g/mol, 'laughing gas') is a distinct linear triatomic molecule with different chemistry.",
    },
    {
      question: "Why does nitric oxide gas turn brown when exposed to air?",
      answer: "NO reacts rapidly with atmospheric O₂ to form brown nitrogen dioxide (NO₂): 2 NO + O₂ → 2 NO₂.",
    },
    {
      question: "How does nitric oxide affect blood pressure?",
      answer: "NO produced by blood vessel endothelial cells diffuses into surrounding smooth muscle and triggers relaxation (vasodilation), which lowers blood pressure and increases blood flow.",
    },
    {
      question: "Is nitric oxide a pollutant?",
      answer: "Yes — combustion-generated NO is a primary component of NOx air pollution, contributing to smog and acid rain after oxidizing further to NO₂ and nitric acid in the atmosphere.",
    },
  ],

  references: [
    { label: "Nobel Prize in Physiology or Medicine 1998", note: "Discovery of nitric oxide as a signaling molecule" },
    { label: "NIST Chemistry WebBook", note: "NO thermophysical data" },
    { label: "PubChem CID 145068", note: "Nitric oxide identifiers and properties" },
  ],
};
