import type { CompoundProfile } from "@/lib/chemistry/types";

export const carbonDioxide: CompoundProfile = {
  slug: "molar-mass-of-carbon-dioxide",
  formula: "CO2",
  name: "Carbon Dioxide",
  iupacName: "Carbon dioxide",
  commonNames: ["Carbon dioxide", "Carbonic anhydride", "Dry ice (solid form)"],
  aliases: ["CO₂", "R-744 (refrigerant designation)"],
  category: "gas",
  categories: ["gas", "oxide", "inorganic"],
  casNumber: "124-38-9",
  pubchemCid: "280",
  smiles: "O=C=O",
  inchi: "InChI=1S/CO2/c2-1-3",
  exactMass: 43.989829244,
  featured: true,
  popular: true,

  overview: `Carbon dioxide (CO₂) is a linear triatomic molecule with molar mass 44.01 g/mol, formed from one carbon atom (12.01 g/mol) and two oxygen atoms. At standard temperature and pressure it is an invisible, odorless gas denser than air (ρ ≈ 1.98 g/L vs. air ~1.29 g/L), which is why it accumulates in low-lying areas and can displace breathable air in confined spaces.

CO₂ plays a central role in Earth's carbon cycle. Plants fix atmospheric CO₂ into carbohydrates via photosynthesis, while respiration, combustion, and volcanic outgassing return it to the atmosphere. Since the Industrial Revolution, fossil fuel burning has raised atmospheric CO₂ from roughly 280 ppm to over 420 ppm, driving radiative forcing through the greenhouse effect: CO₂ absorbs infrared radiation emitted by Earth's surface, trapping thermal energy in the troposphere.

Because CO₂ is both a natural biogeochemical participant and the dominant anthropogenic greenhouse gas, it occupies a unique dual role in chemistry education: it is simultaneously the harmless-seeming product of respiration and combustion that students first encounter in balanced equations, and the central molecule of one of the most consequential scientific and policy debates of the modern era. Understanding its simple linear structure and acidic-oxide chemistry is inseparable, in a full chemistry education, from understanding its outsized role in climate science, carbon capture engineering, and the global carbon budget.`,

  formulaExplanation: `The formula CO₂ shows a 1:2 carbon-to-oxygen ratio. Carbon forms two double bonds to oxygen (O=C=O), leaving no lone pairs on carbon and satisfying the octet rule for all atoms. The empirical formula equals the molecular formula because the molecule is already the simplest whole-number ratio.`,

  chemicalProfile: `CO₂ is a non-polar molecule despite polar C=O bonds because the dipoles cancel in the linear geometry. It is an acidic oxide: dissolving in water forms weak carbonic acid (H₂CO₃). CO₂ is not combustible and does not support combustion; instead, it extinguishes fires by displacing oxygen. At −78.5 °C and 1 atm it sublimes directly from solid (dry ice) to gas.`,

  uniqueTopics: [
    {
      heading: "The greenhouse effect: how CO2 traps heat",
      body: "CO₂ absorbs infrared radiation because its bending and stretching vibrational modes are excited by photons in the thermal infrared range emitted by Earth's warm surface; symmetric linear CO₂ has no permanent dipole, but its asymmetric stretch and bend vibrations create transient dipole changes that let it interact with infrared light despite being a nonpolar molecule overall. This absorbed energy is partly re-radiated back toward the surface rather than escaping directly to space, which is the mechanistic core of the greenhouse effect. Since pre-industrial times, atmospheric CO₂ has risen from about 280 ppm to over 420 ppm, and this single number is one of the most closely tracked metrics in climate science, measured continuously since 1958 at Mauna Loa Observatory (the Keeling Curve).",
    },
    {
      heading: "Photosynthesis: CO2 as the carbon source for all plant biomass",
      body: "Virtually all carbon in plant biomass, and by extension in the food chains and fossil fuels derived from ancient plants, originates from atmospheric CO₂ fixed during photosynthesis: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, powered by light energy captured in chlorophyll. This reaction is the biological reverse of respiration and combustion, closing a cycle in which carbon moves between the atmosphere and living matter on timescales ranging from days (leaf-level gas exchange) to millions of years (fossil fuel formation and eventual combustion).",
    },
    {
      heading: "Dry ice: sublimation chemistry without a liquid phase",
      body: "Solid CO₂ (dry ice) does not melt into a liquid at ordinary atmospheric pressure; instead it sublimes directly from solid to gas at −78.5 °C because the triple point of CO₂ (−56.6 °C at 5.11 atm) lies above 1 atm, meaning liquid CO₂ can only exist at pressures higher than normal atmospheric pressure. This unusual phase behavior makes dry ice a uniquely 'dry' refrigerant that leaves no liquid residue as it warms, valuable for shipping temperature-sensitive goods, creating fog effects in theatrical productions, and even blasting/cleaning applications that exploit the rapid volume expansion during sublimation.",
    },
    {
      heading: "The global carbon cycle: reservoirs and residence times",
      body: "Carbon cycles between the atmosphere, oceans, terrestrial biosphere, and geological reservoirs (carbonate rocks, fossil fuels) on vastly different timescales — atmospheric CO₂ exchanges with surface ocean water and plant biomass over years to decades, but the deep ocean and sedimentary rock reservoirs turn over on timescales of centuries to millions of years. Human fossil fuel combustion releases carbon that has been sequestered in geological reservoirs for tens to hundreds of millions of years, injecting it into the fast atmospheric-biological cycle far more rapidly than natural processes can re-sequester it, which is the fundamental reason atmospheric CO₂ concentration is currently rising rather than remaining in steady-state balance.",
    },
    {
      heading: "Carbon capture and storage (CCS) technologies",
      body: "Carbon capture and storage technologies aim to intercept CO₂ from power plant flue gas or directly from ambient air (direct air capture) and sequester it underground in geological formations or convert it into stable mineral carbonates, preventing its release to the atmosphere. Common capture chemistries include amine scrubbing (where CO₂ reversibly binds to amine solutions and is later released by heating for concentrated storage) and emerging solid sorbent and mineralization approaches; despite significant engineering progress, CCS remains energy-intensive and costly to deploy at the gigaton scale needed to meaningfully offset global emissions.",
    },
  ],

  applications: {
    industrial: [
      "Supercritical CO₂ extraction of caffeine from coffee and hops from beer",
      "Enhanced oil recovery by injecting CO₂ into depleted wells",
      "Welding shield gas (CO₂/argon mixtures for MIG welding)",
      "Refrigerant R-744 in commercial heat pumps and transcritical cycles",
    ],
    laboratory: [
      "Inert atmosphere for air-sensitive syntheses",
      "Preparation of metal carbonates by bubbling through hydroxide solutions",
      "Calibration gas for infrared gas analyzers",
    ],
    environmental: "Primary anthropogenic greenhouse gas; monitored via Mauna Loa Keeling Curve; target of carbon capture and storage (CCS) technologies.",
    biological: "Essential substrate for C3 and C4 photosynthesis; regulated in blood as part of the bicarbonate buffer system (Henderson–Hasselbalch); elevated levels trigger the medullary respiratory center to increase breathing rate.",
  },

  preparation: `Laboratory CO₂ is generated by reacting calcium carbonate with dilute hydrochloric acid: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑. It is also produced by fermenting sugar with yeast or by subliming dry ice.`,

  production: `Industrial CO₂ is captured from ammonia synthesis, hydrogen production, natural gas processing, and fermentation. It is purified, compressed, and liquefied or solidified for commercial distribution.`,

  storage: `Store compressed gas cylinders upright, secured, away from heat. Solid CO₂ (dry ice) requires vented insulated containers; never seal in airtight vessels as sublimation pressure can rupture containers.`,

  handling: `Ensure adequate ventilation. CO₂ is an asphyxiant at high concentrations (>5% can cause dizziness; >10% can be fatal). Use CO₂ monitors in basements, breweries, and dry-ice storage areas. Handle dry ice with insulated gloves to prevent frostbite.`,

  safety: {
    summary: "Low toxicity at ambient atmospheric levels but dangerous as an asphyxiant in enclosed spaces; dry ice causes cold burns.",
    hazards: [
      "Asphyxiation in poorly ventilated areas",
      "Frostbite from contact with dry ice or liquid CO₂",
      "Rupture hazard if solid CO₂ is stored in sealed containers",
    ],
    classification: "GHS: Compressed gas; may displace oxygen",
  },

  interestingFacts: [
    "Solid CO₂ is called dry ice because it sublimes without leaving liquid at 1 atm.",
    "CO₂ makes soda fizzy; approximately 3–4 volumes of CO₂ dissolve under pressure in soft drinks.",
    "Venus's atmosphere is ~96.5% CO₂, creating a runaway greenhouse effect with surface temperatures near 465 °C.",
    "The critical point of CO₂ is 31.1 °C and 73.8 bar, enabling supercritical fluid applications.",
  ],

  history: `Joseph Black identified "fixed air" (CO₂) in the 1750s by showing that it was distinct from atmospheric air and could extinguish flames. Lavoisier later recognized it as an oxide of carbon. The role of CO₂ in the greenhouse effect was proposed by Fourier (1824), experimentally demonstrated by Tyndall (1859), and linked to fossil fuel emissions by Arrhenius (1896).`,

  discovery: "Joseph Black, 1754 — discovered carbon dioxide as a gas released from heating limestone and fermenting solutions.",

  examNotes: [
    "Molar mass CO₂ = 12.01 + 2(16.00) = 44.01 g/mol.",
    "1 mole of CO₂ at STP occupies 22.4 L and contains 1 mole of C and 2 moles of O atoms.",
    "In photosynthesis: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (memorize for biology crossover questions).",
    "Linear geometry with 180° bond angle → non-polar molecule.",
  ],

  commonMistakes: [
    "Writing CO² instead of CO₂ (subscript vs superscript confusion).",
    "Assuming CO₂ supports combustion because it contains oxygen.",
    "Forgetting that CO₂ is heavier than air when discussing gas collection methods (downward displacement).",
  ],

  studentTips: [
    "Link 44 g/mol to the ideal gas law: 44 g at STP ≈ 22.4 L.",
    "Use the lime water test (CO₂ + Ca(OH)₂ → CaCO₃ white precipitate) as a identification reaction.",
    "Draw the two double bonds and note why dipoles cancel for polarity questions.",
  ],

  misconceptions: [
    "CO₂ is not poisonous like CO; it harms by oxygen displacement, not by binding hemoglobin.",
    "Plants do not \" breathe out\" only oxygen; respiration releases CO₂ continuously.",
    "Carbon dioxide is not the same as carbon monoxide (CO, molar mass 28.01 g/mol).",
  ],

  physical: {
    appearance: "Colorless gas; solid (dry ice) is white opaque material",
    color: "Colorless (gas and liquid)",
    odor: "Odorless at normal concentrations (high concentrations smell sharp/acidic due to carbonic acid in mucous membranes)",
    stateAtSTP: "Gas",
    density: "1.977 g/L at 0 °C, 1 atm (gas); 1.101 g/mL (liquid at −37 °C); 1.562 g/mL (solid dry ice)",
    meltingPoint: "−56.6 °C (triple point); solid sublimes at −78.5 °C at 1 atm",
    boilingPoint: "Sublimes at −78.5 °C at 1 atm (no liquid phase at 1 atm below triple point pressure)",
    solubility: "0.145 g/100 mL water at 25 °C (decreases with temperature, unlike most gases — relevant to ocean CO₂ uptake)",
    crystalStructure: "Cubic (solid CO₂, Pa-3)",
  },

  chemical: {
    classification: "Acidic oxide (non-metal oxide)",
    polarity: "Non-polar (dipoles cancel)",
    molecularGeometry: "Linear",
    bondAngle: "180°",
    oxidationStates: "C: +4, O: −2",
    chemicalFamily: "Group 14 dioxide / acidic oxide",
  },

  reactions: [
    {
      equation: "CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq)",
      type: "Hydration",
      conditions: "Aqueous solution, ambient conditions",
      explanation: "CO₂ hydrates reversibly to form carbonic acid, the basis of the bicarbonate buffer in natural waters and blood.",
      products: "Carbonic acid (equilibrium mixture with HCO₃⁻ and CO₃²⁻)",
      applications: "Ocean acidification studies, blood gas analysis, carbonated beverages",
      relatedConcepts: ["Weak acids", "Buffer systems", "Henry's law"],
    },
    {
      equation: "CO₂(g) + 2 NaOH(aq) → Na₂CO₃(aq) + H₂O(l)",
      type: "Acid–base (with base)",
      conditions: "Excess NaOH, aqueous",
      explanation: "CO₂ reacts with strong base to form carbonate; with limited base, bicarbonate forms first.",
      products: "Sodium carbonate and water",
      applications: "CO₂ scrubbing, air purification in submarines and spacecraft",
      relatedConcepts: ["Acidic oxides", "Gas absorption", "Stoichiometry"],
    },
    {
      equation: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
      type: "Photosynthesis (light-driven)",
      conditions: "Chlorophyll, sunlight, chloroplasts",
      explanation: "Plants convert CO₂ and water into glucose, storing solar energy in chemical bonds and releasing O₂.",
      products: "Glucose and oxygen",
      applications: "Agriculture, carbon sequestration, global carbon cycle",
      relatedConcepts: ["Redox", "Bioenergetics", "Carbon fixation"],
    },
    {
      equation: "CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–carbonate (reverse direction for CO₂ production)",
      conditions: "Room temperature, dilute acid",
      explanation: "Carbonates and acids produce CO₂; this is the standard lab preparation and the test for carbonate ions.",
      products: "Calcium chloride, water, and carbon dioxide gas",
      applications: "Laboratory CO₂ generation, carbonate identification",
      relatedConcepts: ["Gas evolution", "Limiting reagent", "Qualitative analysis"],
    },
    {
      equation: "CO₂(g) + RNH₂(aq) ⇌ RNHCOO⁻(aq) + RNH₃⁺(aq)",
      type: "Reversible amine capture (carbon capture chemistry)",
      conditions: "Aqueous amine solution (e.g., monoethanolamine), moderate temperature; reversed by heating",
      explanation: "CO₂ reversibly reacts with amine solvents to form a carbamate salt at low temperature, then releases concentrated CO₂ gas again on heating, the core chemistry of industrial post-combustion carbon capture.",
      products: "Ammonium carbamate salt (captured form); releases concentrated CO₂ on regeneration",
      applications: "Power plant flue-gas carbon capture, direct air capture technology",
      relatedConcepts: ["Carbon capture and storage", "Reversible reactions", "Industrial gas separation"],
    },
  ],

  relatedFormulas: ["CO", "H2CO3", "CaCO3", "H2O", "CH4"],
  comparisonNote: "CO (carbon monoxide, 28.01 g/mol) is toxic and binds hemoglobin; CO₂ (44.01 g/mol) is non-toxic at low levels but acts as an asphyxiant and is a greenhouse gas. The two carbon oxides differ fundamentally in bonding (CO has a triple bond, CO₂ has two double bonds) and in the oxidation state of carbon (+2 in CO versus +4 in CO₂), reflecting CO's origin in incomplete combustion versus CO₂'s origin in complete combustion.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of CO₂.",
      answer: "12.01 + 2(16.00) = 44.01 g/mol",
    },
    {
      question: "What mass of CO₂ contains the same number of oxygen atoms as 36 g of water?",
      answer: "36 g H₂O = 2 mol H₂O = 4 mol O atoms. CO₂ has 2 O per molecule, so need 2 mol CO₂ = 2 × 44.01 = 88.02 g",
      hint: "Compare moles of O atoms, not molecules.",
    },
    {
      question: "Why is CO₂ collected by downward displacement of air?",
      answer: "CO₂ (M = 44 g/mol) is denser than air (~29 g/mol average), so it sinks and displaces air upward.",
    },
    {
      question: "How many liters does 88 g of CO₂ occupy at STP?",
      answer: "88 g ÷ 44.01 g/mol = 2.0 mol; 2.0 × 22.4 L/mol = 44.8 L",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of carbon dioxide?",
      answer: "44.01 g/mol, from 12.01 (C) + 2 × 16.00 (O).",
    },
    {
      question: "Is CO₂ polar or non-polar?",
      answer: "Non-polar. The C=O bonds are polar, but the linear geometry causes the dipoles to cancel.",
    },
    {
      question: "What is dry ice?",
      answer: "Solid CO₂ that sublimes at −78.5 °C at atmospheric pressure, used as a refrigerant and fog effect.",
    },
    {
      question: "How does CO₂ contribute to climate change?",
      answer: "It absorbs infrared radiation, reducing Earth's heat loss to space and warming the lower atmosphere.",
    },
    {
      question: "Can CO₂ burn?",
      answer: "No. CO₂ is the product of complete combustion and does not support burning; it extinguishes flames.",
    },
  ],

  references: [
    { label: "IPCC AR6", note: "Radiative forcing of CO₂ and climate projections" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical data for CO₂" },
    { label: "PubChem CID 280", note: "Compound identifiers and properties" },
  ],
};
