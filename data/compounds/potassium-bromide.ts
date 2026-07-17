import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumBromide: CompoundProfile = {
  slug: "molar-mass-of-potassium-bromide",
  formula: "KBr",
  name: "Potassium Bromide",
  iupacName: "Potassium bromide",
  commonNames: ["Potassium bromide", "KBr"],
  aliases: ["K⁺Br⁻", "Bromide of potash (historical)"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7758-02-3",
  pubchemCid: "253877",
  smiles: "[K+].[Br-]",
  inchi: "InChI=1S/Br.K/q-1;+1",
  exactMass: 117.882064,
  featured: true,
  popular: true,

  overview: `Potassium bromide (KBr) is a simple ionic salt with molar mass 119.00 g/mol (K 39.10 + Br 79.90), crystallizing in the same face-centered cubic rock-salt structure as NaCl. It is colorless, odorless, and highly soluble in water, dissociating completely into K⁺ and Br⁻ ions. Because KBr is transparent to a very wide range of infrared wavelengths, thin polished discs of the compound became the standard sample-holder material — the "KBr window" or "KBr pellet" — for decades of infrared spectroscopy before newer materials like ZnSe partially displaced it.

Historically, KBr occupies a peculiar niche in medical history: throughout the late 19th and early 20th centuries it was among the first effective anticonvulsant and sedative drugs, used to treat epilepsy and "hysteria" long before modern anti-epileptics existed, and bromide salts were common ingredients in over-the-counter sedatives and headache powders. Chronic bromide use produced a recognized toxic syndrome, bromism, marked by lethargy, skin eruptions, and psychiatric disturbance — a cautionary tale in pharmacology about accumulation of poorly excreted halide ions.

In modern chemistry, KBr's main uses are far more benign: it is the standard matrix for pressing solid-sample infrared spectroscopy pellets, a source of bromide ion for organic bromination and photographic chemistry (historically in black-and-white silver bromide emulsions), and a routine reagent in analytical and veterinary laboratories, including as an anticonvulsant still prescribed for canine epilepsy today.`,

  formulaExplanation: `KBr consists of K⁺ and Br⁻ ions in a strict 1:1 ratio, mirroring the ionic bonding pattern of NaCl. Potassium loses one electron to achieve a noble-gas configuration while bromine gains one, and the resulting ions pack into an octahedrally coordinated cubic lattice with no discrete "molecules" present in the solid state.`,

  chemicalProfile: `KBr is chemically stable and unreactive under normal conditions, dissolving readily in water as a strong electrolyte. It reacts with strong oxidizers (chlorine, concentrated sulfuric acid with an oxidizer) to liberate elemental bromine, and with silver nitrate it forms a pale cream-yellow precipitate of AgBr — a qualitative test distinguishing bromide from chloride (white AgCl) and iodide (yellow AgI). Concentrated sulfuric acid alone, without an oxidizer, releases HBr gas from solid KBr.`,

  uniqueTopics: [
    {
      heading: "The KBr pellet in infrared spectroscopy",
      body: "Potassium bromide is essentially transparent across the mid-infrared region (roughly 400–4000 cm⁻¹), making it the classic matrix for solid-sample IR spectroscopy: a tiny amount of analyte is ground with KBr powder and pressed under high pressure into a clear disc, allowing infrared light to pass through the sample without KBr's own absorption bands interfering with the spectrum being measured.",
    },
    {
      heading: "Bromism and the sedative history of bromide salts",
      body: "From the 1850s through the early 20th century, potassium and sodium bromide were mainstay sedatives and anticonvulsants, used to treat epilepsy before phenobarbital and modern drugs existed. Long-term use caused bromism — a toxic syndrome of drowsiness, confusion, acne-like skin eruptions, and psychosis — because bromide ion is poorly excreted by the kidneys and accumulates in the body over weeks of regular dosing.",
    },
    {
      heading: "Photographic silver bromide emulsions",
      body: "Bromide ion from KBr historically supplied the light-sensitive silver bromide (AgBr) crystals suspended in gelatin that formed the emulsion layer of black-and-white photographic film and paper; exposure to light reduces AgBr to metallic silver, forming the latent image later amplified by chemical development.",
    },
    {
      heading: "Bromide qualitative analysis and halide differentiation",
      body: "Adding silver nitrate to a bromide solution produces pale cream AgBr, visually intermediate between the white AgCl (chloride) and yellow AgI (iodide) precipitates — a classic wet-chemistry test that lets students distinguish the three common halide ions by precipitate color and solubility in ammonia.",
    },
    {
      heading: "Veterinary anticonvulsant use today",
      body: "Despite falling out of human medical use, potassium bromide remains an approved and widely used anticonvulsant for canine epilepsy, valued for its low cost and long track record, illustrating how a compound largely abandoned in human pharmacology can retain a specialized therapeutic niche in veterinary practice.",
    },
  ],

  applications: {
    industrial: [
      "Optical windows and sample cells for infrared spectrometers",
      "Source of bromide ion in bromination chemistry",
      "Photographic emulsion chemistry (historical silver bromide films)",
      "Analytical reagent in halide-based industrial processes",
    ],
    laboratory: [
      "KBr pellet preparation for solid-sample FTIR spectroscopy",
      "Qualitative halide identification (AgBr precipitate test)",
      "Source of Br⁻ for synthesis and titrimetric bromide determinations",
    ],
    environmental: "Bromide contamination of water supplies (from industrial or agricultural sources) can react with disinfectants to form brominated byproducts of health concern; naturally occurring at low levels in seawater and some groundwater.",
    biological: "Once a mainstay human sedative/anticonvulsant, now primarily used as a veterinary anticonvulsant for dogs; chronic accumulation causes bromism in humans and animals alike.",
  },

  preparation: `Neutralize potassium hydroxide or potassium carbonate with hydrobromic acid, or react bromine with potassium hydroxide (disproportionation followed by reduction). Industrially, KBr is often produced from bromine recovered from brines reacted with potassium compounds.`,

  production: `Produced on a modest industrial scale compared to major potassium salts, primarily for pharmaceutical, photographic, and spectroscopic-grade applications; global demand is relatively small and stable.`,

  storage: `Store in tightly sealed, dry containers — KBr is somewhat hygroscopic and IR-grade material must stay moisture-free to avoid clouding pressed pellets. Keep away from strong oxidizers that could liberate bromine.`,

  handling: `Low acute hazard; treat as a mild irritant. Avoid prolonged or repeated exposure given the historical precedent of bromide accumulation toxicity. Standard laboratory gloves and eye protection are sufficient for routine handling.`,

  safety: {
    summary: "Low acute toxicity; chronic overexposure or repeated medicinal dosing can cause bromism (drowsiness, skin eruptions, confusion) due to bromide accumulation.",
    hazards: [
      "Mild eye and skin irritation from concentrated solutions or dust",
      "Chronic bromide accumulation (bromism) with prolonged, high-dose exposure",
      "Liberates toxic bromine gas if mixed with strong oxidizers",
    ],
    classification: "Not classified as an acute hazard under GHS for standard laboratory-grade material",
  },

  interestingFacts: [
    "KBr's transparency to infrared light made it the default 'salt plate' material in FTIR labs for over half a century.",
    "The phrase 'take a bromide' entered early 20th-century slang for a calming dose of medicine, reflecting how common bromide sedatives once were.",
    "AgBr's light sensitivity, discovered through KBr chemistry, underpinned black-and-white photography for more than a century before digital imaging.",
    "Veterinary bromide therapy for canine epilepsy uses the same chemistry that caused bromism in over-medicated humans a century ago — dosing control makes the difference.",
  ],

  history: `Bromine was discovered in 1826 by Antoine Balard, and potassium bromide quickly followed as one of the first bromide salts studied. Sir Charles Locock's 1857 report that bromide salts controlled epileptic seizures (originally investigated for "hysterical" epilepsy) launched decades of bromide-based sedative medicine, a practice that only faded with the introduction of barbiturates in the early 20th century.`,

  discovery: "Antoine Balard isolated bromine in 1826; potassium bromide's anticonvulsant properties were reported by Charles Locock in 1857.",

  examNotes: [
    "Molar mass KBr = 39.10 + 79.90 = 119.00 g/mol.",
    "KBr dissociates completely in water: strong electrolyte, van't Hoff factor i ≈ 2.",
    "Halide precipitate colors with AgNO₃: AgCl white, AgBr pale cream/yellow, AgI yellow — used for qualitative distinction.",
    "KBr + Cl₂ → KCl + Br₂ (halogen displacement, more reactive Cl₂ displaces less reactive Br₂).",
  ],

  commonMistakes: [
    "Confusing KBr (119.00 g/mol) with KBrO₃ (potassium bromate, 167.00 g/mol) — very different oxidizing behavior.",
    "Assuming AgBr and AgCl precipitates look identical — AgBr is distinctly more cream/pale yellow.",
    "Forgetting that concentrated H₂SO₄ alone (without an oxidizer) only releases HBr gas, not Br₂, from KBr.",
  ],

  studentTips: [
    "Remember halogen displacement reactivity order (F₂ > Cl₂ > Br₂ > I₂) to predict which halogen displaces bromide from KBr.",
    "Link KBr's IR transparency to its simple ionic lattice lacking vibrational absorptions in the mid-IR range used for spectroscopy.",
    "Connect the AgX precipitate color trend (white → cream → yellow) to increasing polarizability of the halide ion down the group.",
  ],

  misconceptions: [
    "KBr is not a controlled substance today — it lost popularity due to side effects, not legal restriction, though prescription oversight still applies.",
    "Potassium bromide and potassium bromate (KBrO₃) are chemically very different — one is an inert salt, the other a reactive oxidizer.",
    "KBr pellets used in IR spectroscopy are not themselves being analyzed — they are an inert, transparent carrier for the actual sample.",
  ],

  physical: {
    appearance: "White crystalline solid or colorless cubic crystals",
    color: "White to colorless",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.75 g/cm³",
    meltingPoint: "734 °C",
    boilingPoint: "1,435 °C",
    solubility: "678 g/L water at 25 °C (highly soluble)",
    crystalStructure: "Face-centered cubic (rock-salt structure)",
  },

  chemical: {
    classification: "Ionic salt / alkali metal halide",
    polarity: "Ionic",
    oxidationStates: "K: +1, Br: −1",
    chemicalFamily: "Group 1 halide (alkali metal bromide)",
  },

  reactions: [
    {
      equation: "KBr(aq) + AgNO₃(aq) → AgBr(s) + KNO₃(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Silver ion combines with bromide to give pale cream-yellow AgBr, a qualitative test that visually distinguishes bromide from chloride and iodide.",
      products: "Silver bromide precipitate and potassium nitrate",
      applications: "Qualitative halide analysis, photographic emulsion chemistry",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Qualitative analysis"],
    },
    {
      equation: "2 KBr(aq) + Cl₂(g) → 2 KCl(aq) + Br₂(l)",
      type: "Halogen displacement (redox)",
      conditions: "Aqueous, room temperature",
      explanation: "More reactive chlorine oxidizes bromide ion to elemental bromine, displacing it from solution — demonstrates the halogen reactivity trend.",
      products: "Potassium chloride and elemental bromine",
      applications: "Halogen reactivity demonstrations, bromine recovery",
      relatedConcepts: ["Redox reactions", "Halogen displacement", "Activity trends"],
    },
    {
      equation: "KBr(s) + H₂SO₄(conc) → KHSO₄ + HBr(g)",
      type: "Acid–salt (non-oxidizing acid displacement)",
      conditions: "Concentrated H₂SO₄, room temperature, no oxidizer",
      explanation: "Non-volatile sulfuric acid displaces volatile HBr gas from solid KBr when no oxidizing conditions are present.",
      products: "Potassium bisulfate and hydrogen bromide gas",
      applications: "Laboratory HBr generation, volatility demonstrations",
      relatedConcepts: ["Acid displacement", "Gas evolution", "Volatility"],
    },
    {
      equation: "2 KBr(s) + 2 H₂SO₄(conc, hot) → K₂SO₄ + SO₂ + Br₂ + 2 H₂O",
      type: "Oxidation (hot concentrated H₂SO₄ as oxidizer)",
      conditions: "Hot concentrated sulfuric acid",
      explanation: "When sulfuric acid is hot and concentrated it acts as an oxidizer, converting bromide all the way to elemental bromine rather than simply displacing HBr gas.",
      products: "Potassium sulfate, sulfur dioxide, and elemental bromine",
      applications: "Laboratory bromine generation, illustrating oxidizing vs. non-oxidizing acid behavior",
      relatedConcepts: ["Oxidizing acids", "Redox", "Halogen chemistry"],
    },
  ],

  relatedFormulas: ["KCl", "KI", "AgBr", "NaBr", "Br2"],
  comparisonNote: "KBr (119.00 g/mol) and KCl (74.55 g/mol) share the rock-salt crystal structure and similar solubility behavior, but bromide's larger, more polarizable ion gives KBr a distinctly higher molar mass and different photographic and spectroscopic applications.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KBr.",
      answer: "39.10 + 79.90 = 119.00 g/mol",
    },
    {
      question: "How many grams of KBr are needed to prepare 250 mL of 0.500 M solution?",
      answer: "0.500 mol/L × 0.250 L = 0.125 mol; 0.125 × 119.00 = 14.88 g",
    },
    {
      question: "What mass of AgBr precipitates from complete reaction of 11.9 g KBr with excess AgNO₃?",
      answer: "11.9 g ÷ 119.00 g/mol = 0.100 mol KBr → 0.100 mol AgBr × 187.77 g/mol = 18.78 g",
    },
    {
      question: "Why does chlorine gas displace bromine from KBr solution but not the reverse?",
      answer: "Chlorine is a stronger oxidizer than bromine (higher electronegativity, more favorable reduction potential), so Cl₂ oxidizes Br⁻ to Br₂ but Br₂ cannot oxidize Cl⁻.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium bromide?",
      answer: "119.00 g/mol.",
    },
    {
      question: "Why was KBr used in old medicines?",
      answer: "It was one of the first effective anticonvulsant and sedative agents, used from the mid-19th century until safer drugs like barbiturates replaced it.",
    },
    {
      question: "Why is KBr used in infrared spectroscopy?",
      answer: "It is transparent across the mid-infrared range, so pressing a sample into a KBr pellet allows IR light through without the matrix interfering with the spectrum.",
    },
    {
      question: "Is KBr still used medically?",
      answer: "Rarely in humans today, but it remains a common veterinary anticonvulsant for canine epilepsy.",
    },
    {
      question: "What color precipitate forms when KBr reacts with silver nitrate?",
      answer: "A pale cream to yellow precipitate of AgBr, distinguishable from white AgCl and deeper yellow AgI.",
    },
  ],

  references: [
    { label: "PubChem CID 253877", note: "Potassium bromide compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic and spectroscopic properties" },
    { label: "Royal Society of Chemistry", note: "Halide salt chemistry and history" },
  ],
};
