import type { CompoundProfile } from "@/lib/chemistry/types";

export const hydrofluoricAcid: CompoundProfile = {
  slug: "molar-mass-of-hydrofluoric-acid",
  formula: "HF",
  name: "Hydrofluoric Acid",
  iupacName: "Hydrogen fluoride (gas); Hydrofluoric acid (aqueous)",
  commonNames: ["Hydrofluoric acid", "Hydrogen fluoride", "Fluoric acid (archaic)"],
  aliases: ["HF"],
  category: "acid",
  categories: ["acid", "inorganic", "gas"],
  casNumber: "7664-39-3",
  pubchemCid: "14917",
  smiles: "F",
  inchi: "InChI=1S/FH/h1H",
  exactMass: 20.006228,
  featured: true,
  popular: true,

  overview: `Hydrofluoric acid (HF) has a molar mass of just 20.01 g/mol (H 1.008 + F 19.00), among the lightest common acids, yet it is chemically unlike any other hydrohalic acid. Despite fluorine's extreme electronegativity, HF is only a weak acid in dilute aqueous solution (Ka ≈ 6.6 × 10⁻⁴, pKa ≈ 3.17) — far weaker than HCl, HBr, or HI — because the very strong H–F bond and extensive hydrogen bonding in solution resist full dissociation, and the resulting bifluoride ion (HF₂⁻) chemistry further complicates its equilibrium behavior compared to simple strong-acid models.

What makes HF exceptionally dangerous is not its acid strength but its unique chemistry with calcium and magnesium: the small, highly mobile fluoride ion penetrates skin and tissue readily (unlike most acids, which cause immediate, visible surface burns) and binds tightly to Ca²⁺ and Mg²⁺, forming insoluble calcium fluoride and depleting these essential ions from cells and blood. This can cause severe, delayed-onset chemical burns, systemic hypocalcemia, cardiac arrhythmia, and death from even modest skin contact area, especially with concentrated solutions — a toxicological profile that has nothing to do with pH and everything to do with fluoride's specific ion chemistry. Burns may not be immediately painful, delaying treatment and worsening outcomes.

Industrially, HF's ability to react with silica and silicates — a reaction essentially no other acid can perform — makes it indispensable for glass etching, frosting, and cleaning; for dissolving mineral samples in analytical geochemistry; and for producing fluorocarbons, aluminum fluoride, and enriched uranium hexafluoride in the nuclear fuel cycle. This same silica-dissolving property means HF must never be stored in ordinary glass containers, unlike virtually every other common acid.`,

  formulaExplanation: `HF is a simple diatomic molecule with a highly polar covalent bond (the most polar single bond among common hydrogen halides) due to fluorine's extreme electronegativity. In the gas phase and in concentrated solution, HF molecules extensively hydrogen-bond, even forming chain and ring oligomers (HF)ₙ; in dilute aqueous solution, incomplete dissociation and formation of the bifluoride ion HF₂⁻ (via HF + F⁻ ⇌ HF₂⁻) make its acid-base behavior more complex than the simple monoprotic picture the formula suggests.`,

  chemicalProfile: `HF is the only common acid that reacts with and dissolves silicon dioxide and silicate glass: SiO₂ + 4 HF → SiF₄ + 2 H₂O (or, with excess HF, forming soluble hexafluorosilicic acid, H₂SiF₆). It reacts vigorously with many metals and metal oxides to form fluoride salts, and its fluoride ion forms extremely stable complexes with highly charged cations (Al³⁺, Fe³⁺) and with Ca²⁺/Mg²⁺, which underlies both useful analytical applications and its severe toxicology.`,

  uniqueTopics: [
    {
      heading: "Why HF Is a Weak Acid Despite Fluorine's Electronegativity",
      body: "Students often expect HF to be the strongest hydrohalic acid because fluorine is the most electronegative halogen, but the opposite is true: the H–F bond is unusually strong and short, and extensive hydrogen bonding in aqueous solution (including formation of HF₂⁻) suppresses full ionization, making HF a weak acid (Ka ≈ 6.6 × 10⁻⁴) compared to the fully dissociated strong acids HCl, HBr, and HI.",
    },
    {
      heading: "⚠️ Unique, Delayed, and Severe Toxicity via Calcium Binding",
      body: "Unlike typical corrosive acids that cause immediate, visible burns from pH alone, HF's fluoride ion penetrates skin painlessly and binds calcium and magnesium ions in underlying tissue and blood, forming insoluble CaF₂ and depleting systemic calcium. This can cause delayed, intensely painful, deep tissue damage and life-threatening cardiac arrhythmia from hypocalcemia — even from skin contact covering only a modest fraction of body surface area with concentrated HF — making immediate calcium gluconate treatment and emergency medical attention essential after any significant exposure.",
    },
    {
      heading: "The Only Acid That Etches Glass",
      body: "HF's reaction with silicon dioxide (glass, quartz, silicate minerals) — SiO₂ + 4 HF → SiF₄ + 2 H₂O — is essentially unique among common acids and is the basis of glass etching, frosting, and cleaning processes; consequently, HF must be stored in plastic (e.g., polyethylene, PTFE) or specially lined containers rather than ordinary glass bottles.",
    },
    {
      heading: "Role in the Nuclear Fuel Cycle",
      body: "HF is used to convert uranium oxide into uranium tetrafluoride and ultimately uranium hexafluoride (UF₆), the volatile compound used in gas centrifuge and diffusion enrichment of uranium-235 — linking this simple diatomic acid directly to nuclear fuel production chemistry.",
    },
    {
      heading: "Bifluoride Ion and Non-Ideal Acid Behavior",
      body: "In more concentrated HF solutions, the equilibrium HF + F⁻ ⇌ HF₂⁻ becomes significant, meaning HF's apparent acid strength and the fluoride speciation present depend on concentration in ways that simple weak-acid Ka calculations from dilute solution do not fully capture — an advanced but important nuance in fluoride chemistry.",
    },
  ],

  applications: {
    industrial: [
      "Glass etching, frosting, and cleaning (unique reaction with SiO₂)",
      "Production of fluorocarbons, refrigerants, and fluoropolymers (e.g., PTFE precursor chemistry)",
      "Aluminum fluoride and cryolite production for aluminum smelting (Hall–Héroult process)",
      "Uranium hexafluoride production for nuclear fuel enrichment",
    ],
    laboratory: [
      "Dissolution of silicate rock and mineral samples in analytical geochemistry (acid digestion)",
      "Etching of silicon wafers and micro-fabrication in semiconductor processing",
      "Cleaning quartz and glass labware in specialized applications (with strict safety controls)",
    ],
    environmental: "Industrial HF emissions are tightly regulated due to acute toxicity to humans, aquatic life, and vegetation; fluoride bioaccumulation and fluorosis in wildlife near uncontrolled emission sources are documented concerns.",
    biological: "Fluoride ion in trace amounts (e.g., from water fluoridation) supports dental health, but concentrated HF exposure is acutely and systemically toxic via calcium sequestration — the therapeutic and toxic faces of fluoride chemistry are governed by a vast concentration difference.",
  },

  preparation: `Industrially, HF is produced by reacting fluorspar (calcium fluoride, CaF₂) with concentrated sulfuric acid: CaF₂ + H₂SO₄ → CaSO₄ + 2 HF, then purifying the gaseous product. This is essentially the only significant production route and should never be attempted outside an industrial or specialized laboratory setting.`,

  production: `Nearly all commercial HF derives from the fluorspar–sulfuric acid reaction at dedicated chemical plants, producing anhydrous HF and aqueous hydrofluoric acid solutions for downstream fluorochemical, glass, metal, and nuclear fuel cycle industries.`,

  storage: `⚠️ Store only in HF-compatible containers (polyethylene, PTFE, or specially treated/lined vessels) — never in ordinary glass, which HF actively dissolves. Store away from incompatible materials, with appropriate secondary containment, in a well-ventilated, access-controlled area with calcium gluconate gel readily available nearby for emergency first aid.`,

  handling: `⚠️ Extremely hazardous despite being a "weak" acid. Handle only with specialized training, HF-resistant gloves (typically thick neoprene or butyl, not standard nitrile), face shield, and fume hood/local exhaust ventilation. Have calcium gluconate gel and an established emergency response plan immediately available before any work begins. Seek emergency medical care immediately after any skin, eye, or significant inhalation exposure, regardless of apparent severity, because pain and visible damage can be delayed.`,

  safety: {
    summary: "Extremely hazardous despite weak-acid classification: causes severe, potentially delayed-onset chemical burns and systemic toxicity via fluoride-induced calcium depletion, which can be fatal even from limited skin contact with concentrated solutions.",
    hazards: [
      "Severe, potentially delayed-onset skin and eye burns that may not be immediately painful",
      "Systemic toxicity from fluoride binding calcium/magnesium — risk of life-threatening hypocalcemia and cardiac arrhythmia",
      "Corrosive to metals and glass; reacts with silica-containing materials",
      "Toxic by inhalation, causing respiratory tract damage and potential pulmonary edema",
    ],
    classification: "GHS: Skin Corr. 1B, Acute Tox. 2 (dermal/inhalation), STOT SE 1",
  },

  interestingFacts: [
    "HF's molar mass (20.01 g/mol) is the lowest of all the common hydrohalic acids, yet its toxicological hazard profile is arguably the most severe of the group.",
    "Concentrated HF exposure covering even a modest area of skin (in some documented cases, under 10% of body surface area) has caused fatalities due to systemic calcium depletion and resulting cardiac effects.",
    "HF's reaction with silica is so specific and reliable that it is used to etch intricate patterns into glass and to strip silicon dioxide layers precisely in semiconductor manufacturing.",
    "Calcium gluconate gel is the standard first-aid and clinical treatment for HF skin exposure specifically because it supplies calcium ions to bind free fluoride before it can penetrate deeper tissue.",
  ],

  history: `Hydrofluoric acid was first isolated in relatively pure form by Carl Wilhelm Scheele in 1771 through reaction of fluorspar with sulfuric acid, though its extreme reactivity and toxicity made handling and further study hazardous for early chemists — several 19th-century researchers were seriously injured or killed while attempting to isolate elemental fluorine from HF-related chemistry before Henri Moissan finally succeeded in 1886.`,

  discovery: "Carl Wilhelm Scheele, 1771 — first prepared hydrofluoric acid by treating fluorspar (CaF₂) with sulfuric acid, though its hazards significantly complicated further 18th- and 19th-century fluorine chemistry research.",

  examNotes: [
    "Molar mass HF = 1.008 + 19.00 = 20.01 g/mol.",
    "HF is a weak acid (Ka ≈ 6.6 × 10⁻⁴) despite fluorine's high electronegativity, due to strong H–F bonding and hydrogen bonding effects in solution.",
    "Unique reaction: SiO₂ + 4 HF → SiF₄ + 2 H₂O — the only common acid that dissolves glass/silica.",
    "Toxicity mechanism is distinct from simple corrosivity: fluoride ion sequesters Ca²⁺/Mg²⁺, causing systemic effects beyond the exposure site.",
  ],

  commonMistakes: [
    "Assuming HF must be the strongest hydrohalic acid because fluorine is most electronegative — it is actually the weakest of the common hydrohalic acids in water.",
    "Underestimating HF's danger because it is a 'weak' acid — its toxicity mechanism (calcium sequestration) is unrelated to its dissociation constant.",
    "Storing or handling HF in ordinary glassware — HF actively dissolves silica-based glass, unlike essentially all other acids.",
  ],

  studentTips: [
    "Contrast HF's weak-acid Ka with HCl, HBr, HI's complete dissociation to reinforce that bond strength and solvation, not just electronegativity, govern acid strength.",
    "Always pair any mention of HF's chemistry with its unique calcium-binding toxicity mechanism — this is a frequently tested distinguishing feature.",
    "Remember the glass-etching reaction (SiO₂ + 4 HF → SiF₄ + 2 H₂O) as HF's single most distinctive chemical property among common acids.",
  ],

  misconceptions: [
    "HF is not 'safer' than strong acids like H₂SO₄ or HNO₃ just because it is chemically classified as weak — its systemic fluoride toxicity can be more dangerous than many strong acid burns.",
    "HF burns are not always immediately painful — the absence of instant pain does not mean exposure was minor, and delayed treatment worsens outcomes significantly.",
    "HF and hydrochloric acid do not have comparable hazard profiles just because both are 'acids' — HF's unique fluoride ion chemistry sets it apart from typical corrosive acid behavior.",
  ],

  physical: {
    appearance: "Colorless gas (anhydrous); colorless to slightly yellow fuming liquid (concentrated aqueous solution)",
    color: "Colorless",
    odor: "Sharp, irritating odor detectable at very low concentrations",
    stateAtSTP: "Gas (anhydrous HF, boiling point 19.5 °C is just above typical room temperature)",
    density: "0.99 g/mL (anhydrous liquid HF at boiling point); ~1.15 g/mL (48% aqueous solution)",
    meltingPoint: "−83.6 °C (anhydrous HF)",
    boilingPoint: "19.5 °C (anhydrous HF — unusually high for such a small molecule, due to hydrogen bonding)",
    solubility: "Miscible with water in all proportions",
    crystalStructure: "Orthorhombic (solid anhydrous HF, hydrogen-bonded zig-zag chains)",
  },

  chemical: {
    classification: "Hydrogen halide / weak monoprotic acid (aqueous)",
    acidity: "Weak acid (Ka ≈ 6.6 × 10⁻⁴, pKa ≈ 3.17) — weakest common hydrohalic acid",
    polarity: "Highly polar covalent bond (most polar H–X bond among hydrogen halides)",
    molecularGeometry: "Linear (diatomic)",
    bondAngle: "180° (diatomic)",
    oxidationStates: "H: +1, F: −1",
    chemicalFamily: "Hydrogen halides (lightest, weakest-acid member)",
  },

  reactions: [
    {
      equation: "SiO₂(s) + 4 HF(aq) → SiF₄(g) + 2 H₂O(l)",
      type: "Acid–oxide reaction (glass/silica etching)",
      conditions: "Room temperature or mild heating, concentrated HF",
      explanation: "HF uniquely dissolves silicon dioxide and silicate glass, forming volatile silicon tetrafluoride (or, with excess HF, soluble hexafluorosilicic acid); no other common acid performs this reaction efficiently.",
      products: "Silicon tetrafluoride and water",
      applications: "Glass etching, frosting, cleaning; semiconductor wafer processing",
      relatedConcepts: ["Acid–oxide reactions", "Etching chemistry", "Silicate chemistry"],
    },
    {
      equation: "CaF₂(s) + H₂SO₄(conc.) → CaSO₄(s) + 2 HF(g)",
      type: "Displacement (industrial synthesis)",
      conditions: "Heat, concentrated sulfuric acid, fluorspar ore",
      explanation: "The primary industrial route to hydrofluoric acid, driven by the formation of the more stable, less volatile calcium sulfate, releasing HF gas for collection and purification.",
      products: "Calcium sulfate and hydrogen fluoride gas",
      applications: "Commercial HF manufacturing",
      relatedConcepts: ["Displacement reactions", "Industrial chemistry", "Le Chatelier's principle"],
    },
    {
      equation: "HF(aq) + F⁻(aq) ⇌ HF₂⁻(aq)",
      type: "Bifluoride equilibrium",
      conditions: "Aqueous solution, particularly at higher HF/fluoride concentration",
      explanation: "Undissociated HF can associate with fluoride ion to form the hydrogen-bonded bifluoride ion, complicating simple weak-acid dissociation models and contributing to HF's unusual acid-base behavior in concentrated solution.",
      products: "Bifluoride ion",
      applications: "Explains anomalous acid strength trends and speciation in concentrated HF solutions",
      relatedConcepts: ["Hydrogen bonding", "Non-ideal acid behavior", "Equilibrium chemistry"],
    },
    {
      equation: "Ca²⁺(tissue) + 2 F⁻ → CaF₂(s) [systemic toxicity mechanism]",
      type: "Precipitation (biological toxicity mechanism)",
      conditions: "Physiological tissue/blood, following HF skin or systemic exposure",
      explanation: "Fluoride ion released from HF binds calcium in tissue and blood, forming insoluble calcium fluoride and depleting bioavailable calcium — the molecular basis of HF's severe, sometimes fatal, systemic toxicity distinct from simple acid burns.",
      products: "Insoluble calcium fluoride (tissue deposition) and depleted systemic calcium",
      applications: "Explains rationale for calcium gluconate as the specific antidote/first-aid treatment for HF exposure",
      relatedConcepts: ["Toxicology", "Ion sequestration", "Emergency medicine chemistry"],
    },
  ],

  relatedFormulas: ["HCl", "H2SO4", "CaF2", "SiO2", "NaF"],
  comparisonNote: "HF (20.01 g/mol) is a weak acid (Ka ≈ 6.6 × 10⁻⁴) with uniquely severe systemic toxicity via calcium binding, in sharp contrast to HCl (36.46 g/mol), a fully dissociated strong acid whose hazard is limited to direct, immediately apparent corrosive burns.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of HF.",
      answer: "1.008 + 19.00 = 20.01 g/mol",
    },
    {
      question: "Why is HF classified as a weak acid even though fluorine is the most electronegative element?",
      answer: "The H–F bond is unusually strong and short, and extensive hydrogen bonding (including formation of HF₂⁻) in aqueous solution suppresses complete dissociation, giving HF a much smaller Ka (≈ 6.6 × 10⁻⁴) than the fully dissociated strong acids HCl, HBr, and HI.",
    },
    {
      question: "How many grams of SiF₄ form from the complete reaction of 80.04 g of HF with excess SiO₂?",
      answer: "80.04 g ÷ 20.01 g/mol = 4.000 mol HF; from SiO₂ + 4 HF → SiF₄ + 2 H₂O, this yields 1.000 mol SiF₄ × 104.08 g/mol ≈ 104.1 g",
      hint: "Use the 4:1 mole ratio of HF to SiF₄ from the balanced equation.",
    },
    {
      question: "Why can HF cause severe injury even from limited skin contact, unlike many other corrosive acids?",
      answer: "Fluoride ion penetrates skin readily and binds calcium and magnesium in underlying tissue and blood, causing deep, sometimes delayed-onset damage and systemic hypocalcemia that can trigger cardiac arrhythmia, independent of the acid's pH-based corrosivity alone.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of hydrofluoric acid?",
      answer: "20.01 g/mol.",
    },
    {
      question: "Is hydrofluoric acid a strong acid?",
      answer: "No — despite fluorine's high electronegativity, HF is a weak acid in water (Ka ≈ 6.6 × 10⁻⁴), unlike the other hydrohalic acids (HCl, HBr, HI), which are strong acids.",
    },
    {
      question: "Why is hydrofluoric acid considered so dangerous if it's a weak acid?",
      answer: "Its danger comes from fluoride ion's ability to penetrate tissue and bind calcium and magnesium, causing deep, sometimes delayed-onset burns and systemic toxicity (hypocalcemia, cardiac arrhythmia) unrelated to its weak-acid classification.",
    },
    {
      question: "Why can't hydrofluoric acid be stored in glass bottles?",
      answer: "HF reacts with and dissolves silicon dioxide in glass, so it must be stored in HF-resistant plastic (such as polyethylene or PTFE) or specially lined containers instead.",
    },
    {
      question: "What is the first-aid treatment for hydrofluoric acid skin exposure?",
      answer: "Immediately flush with water and apply calcium gluconate gel, which supplies calcium to bind free fluoride ion before it penetrates deeper tissue, followed by urgent professional medical evaluation regardless of apparent severity.",
    },
  ],

  references: [
    { label: "NIOSH Pocket Guide to Chemical Hazards", note: "HF exposure limits and toxicological data" },
    { label: "NIST Chemistry WebBook", note: "HF thermophysical properties" },
    { label: "PubChem CID 14917", note: "Hydrogen fluoride identifiers and safety data" },
  ],
};
