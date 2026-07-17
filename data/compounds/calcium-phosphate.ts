import type { CompoundProfile } from "@/lib/chemistry/types";

export const calciumPhosphate: CompoundProfile = {
  slug: "molar-mass-of-calcium-phosphate",
  formula: "Ca3(PO4)2",
  name: "Calcium Phosphate",
  iupacName: "Tricalcium bis(phosphate)",
  commonNames: ["Tricalcium phosphate", "Calcium phosphate", "Bone ash (impure form)"],
  aliases: ["Ca₃(PO₄)₂", "Tribasic calcium phosphate", "TCP"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7758-87-4",
  pubchemCid: "24456",
  smiles: "[Ca+2].[Ca+2].[Ca+2].[O-]P(=O)([O-])[O-].[O-]P(=O)([O-])[O-]",
  inchi: "InChI=1S/3Ca.2H3O4P/c;;;2*1-4(2,3)5/h;;;2*(H3,1,2,3,5)/q3*+2;;/p-6",
  exactMass: 309.794613,
  featured: true,
  popular: true,

  overview: `Calcium phosphate (Ca₃(PO₄)₂) is an ionic compound with molar mass 310.18 g/mol (Ca 3 × 40.08 + P 2 × 30.97 + O 8 × 16.00), composed of three Ca²⁺ ions balancing two PO₄³⁻ ions. As the simplified "tricalcium phosphate" formula, it represents the basic calcium-to-phosphate stoichiometry found throughout biological mineralization, even though the actual mineral phase in bone and teeth is the more complex, hydroxide-containing compound hydroxyapatite, Ca₅(PO₄)₃OH (or more precisely Ca₁₀(PO₄)₆(OH)₂).

Roughly 99% of the body's calcium and 85% of its phosphorus reside in the skeleton and teeth as this calcium phosphate mineral phase, deposited onto a collagen protein scaffold to give bone its combination of rigidity and slight flexibility — a natural composite material that chemists and materials scientists have long tried to replicate synthetically for bone grafts and dental implant coatings. The same fundamental Ca:P chemistry that builds skeletons also governs the global fertilizer industry, since rock phosphate (largely calcium phosphate minerals like fluorapatite) is the essential raw material converted into superphosphate and other soluble phosphate fertilizers that sustain modern agriculture.

Beyond biology and agriculture, calcium phosphate serves as a food additive (anticaking agent, calcium fortification, leavening acid component), a component of bone china and specialty ceramics, and — significant in molecular biology — as the classic calcium phosphate co-precipitation method used for decades to transfect DNA into cultured mammalian cells, exploiting the tendency of calcium and phosphate ions to co-precipitate around nucleic acid molecules under controlled conditions.`,

  formulaExplanation: `Ca₃(PO₄)₂ balances three Ca²⁺ ions (total charge +6) against two PO₄³⁻ ions (total charge −6). Each phosphate ion is a tetrahedral anion with phosphorus in the +5 oxidation state at the center of four oxygen atoms. This simplified formula represents the idealized calcium orthophosphate stoichiometry, distinct from the hydroxide-containing hydroxyapatite that actually mineralizes bone and tooth enamel.`,

  chemicalProfile: `Ca₃(PO₄)₂ is insoluble in neutral or basic water but dissolves readily in acids, since phosphate is the conjugate base of the weak triprotic phosphoric acid and readily accepts protons. It reacts with sulfuric acid industrially to release soluble monocalcium phosphate and phosphoric acid (the basis of superphosphate fertilizer manufacture), and it can be converted to the biologically relevant hydroxyapatite phase by reaction with hydroxide-containing solutions under physiological-like conditions.`,

  uniqueTopics: [
    {
      heading: "From tricalcium phosphate to hydroxyapatite in bone",
      body: "The simplified formula Ca₃(PO₄)₂ captures the basic 3:2 calcium-to-phosphate ratio, but the actual mineral in bone and tooth enamel is hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂ — a related but more complex calcium phosphate phase that incorporates hydroxide ions into its crystal lattice. Bone forms as nanocrystals of hydroxyapatite deposited onto a collagen protein matrix, combining mineral hardness with the collagen's tensile flexibility.",
    },
    {
      heading: "Rock phosphate and the global fertilizer supply chain",
      body: "Calcium phosphate minerals, primarily fluorapatite (Ca₅(PO₄)₃F), are mined as 'rock phosphate' and treated with sulfuric or phosphoric acid to produce soluble superphosphate and triple superphosphate fertilizers. Because phosphorus has no atmospheric cycle analogous to nitrogen fixation, mined calcium phosphate deposits are essentially the sole practical source of phosphate fertilizer feeding global agriculture.",
    },
    {
      heading: "Calcium phosphate co-precipitation in molecular biology",
      body: "A classic technique for introducing foreign DNA into cultured mammalian cells relies on mixing calcium chloride and phosphate buffer to form a fine calcium phosphate precipitate that co-precipitates plasmid DNA; cells take up these DNA-containing particles by endocytosis, making this simple inorganic chemistry a foundational tool in genetic engineering and cell biology research.",
    },
    {
      heading: "Solubility switch: insoluble in water, soluble in acid",
      body: "Calcium phosphate's near-total insolubility in neutral water — essential for keeping bone mineral stable at physiological pH — contrasts sharply with its ready dissolution in acidic environments, since protonation of phosphate to HPO₄²⁻, H₂PO₄⁻, or H₃PO₄ removes the ion pairing that holds the solid lattice together. This is why acidic soil conditions or acidic beverages can leach calcium phosphate, and why stomach acid readily dissolves dietary calcium phosphate supplements.",
    },
    {
      heading: "Food, ceramic, and biomedical material applications",
      body: "Beyond biology, calcium phosphate serves as an anticaking and calcium-fortifying food additive, a raw material for bone china and specialty ceramics, and a biocompatible coating on orthopedic and dental implants — exploiting the fact that synthetic calcium phosphate phases closely resemble natural bone mineral and encourage bone cells to integrate with implant surfaces.",
    },
  ],

  applications: {
    industrial: [
      "Superphosphate and triple superphosphate fertilizer feedstock",
      "Food additive: anticaking agent, calcium fortification, leavening acid (E341)",
      "Bone china and specialty ceramic manufacture",
      "Biomedical implant coatings and bone graft substitute materials",
    ],
    laboratory: [
      "Calcium phosphate co-precipitation method for mammalian cell transfection",
      "Model compound for phosphate solubility and acid–base chemistry",
      "Synthesis precursor for hydroxyapatite and other calcium phosphate phases",
    ],
    environmental: "Rock phosphate mining and processing generate phosphogypsum byproducts and can contribute to phosphate runoff and eutrophication if not managed carefully.",
    biological: "The principal mineral component (as hydroxyapatite) of bone and tooth enamel in vertebrates; essential dietary source of calcium and phosphorus for skeletal mineralization.",
  },

  preparation: `Precipitated in the laboratory by combining soluble calcium salts (CaCl₂) with soluble phosphate salts (Na₃PO₄ or (NH₄)₂HPO₄) under controlled pH. Industrially derived from mined phosphate rock, or produced as a purified food/pharmaceutical-grade precipitate from milk processing byproducts and controlled precipitation reactions.`,

  production: `Global phosphate rock mining (predominantly calcium phosphate minerals) exceeds 220 million tonnes annually, the overwhelming majority destined for fertilizer production; food- and pharmaceutical-grade tricalcium phosphate represents a much smaller specialty market.`,

  storage: `Stable indefinitely as a dry solid under normal storage conditions. Keep away from strong acids, which will dissolve it, and from prolonged moisture exposure in food-grade applications to prevent caking.`,

  handling: `Low toxicity; treat as a nuisance dust. Use standard dust masks and eye protection when handling large quantities of fine powder to avoid respiratory or eye irritation.`,

  safety: {
    summary: "Generally recognized as safe for food and pharmaceutical use; fine powder may cause mild respiratory or eye irritation.",
    hazards: [
      "Mild respiratory irritation from inhaled fine powder",
      "Eye irritation from dust contact",
      "No significant acute toxicity at typical exposure levels",
    ],
    classification: "Not classified as hazardous under GHS for food/pharmaceutical-grade material",
  },

  interestingFacts: [
    "About 99% of the calcium in the human body is stored as calcium phosphate mineral in bones and teeth.",
    "Phosphate rock reserves are geographically concentrated, with Morocco holding the majority of the world's known deposits — a geopolitical factor in global food security.",
    "The calcium phosphate transfection method, developed in the 1970s, remains a widely used and inexpensive way to introduce DNA into cells in research labs today.",
    "Bone china gets its name and translucent quality from the calcium phosphate derived from bone ash mixed into the ceramic formula.",
  ],

  history: `Bone ash, an impure form of calcium phosphate, was used in ceramics and as a fertilizer amendment long before its chemical composition was understood. Justus von Liebig's mid-19th-century studies of mineral nutrition helped establish phosphate's essential role in plant growth, spurring the development of superphosphate fertilizer from phosphate rock treated with sulfuric acid — a technology patented by John Bennet Lawes in 1842 that launched the modern chemical fertilizer industry.`,

  discovery: "Known through bone ash use since antiquity; chemical characterization as calcium phosphate advanced through 18th–19th century mineral and agricultural chemistry, notably by Liebig and Lawes.",

  examNotes: [
    "Molar mass Ca₃(PO₄)₂ = 3(40.08) + 2[30.97 + 4(16.00)] = 3(40.08) + 2(94.97) = 310.18 g/mol.",
    "Charge balance: 3 Ca²⁺ (+6 total) balances 2 PO₄³⁻ (−6 total).",
    "Ca₃(PO₄)₂ is insoluble in water (Ksp very small) but dissolves readily in dilute strong acids.",
    "Distinguish from hydroxyapatite Ca₁₀(PO₄)₆(OH)₂ — the actual bone mineral, not simple tricalcium phosphate.",
  ],

  commonMistakes: [
    "Writing the formula as CaPO₄ or Ca₂(PO₄)₃ instead of the charge-balanced Ca₃(PO₄)₂.",
    "Confusing tricalcium phosphate with hydroxyapatite — related but chemically distinct calcium phosphate phases.",
    "Assuming calcium phosphate is soluble like calcium chloride — it is one of the least soluble common calcium salts.",
  ],

  studentTips: [
    "Balance ionic charges first (Ca²⁺ and PO₄³⁻) to derive the 3:2 subscript pattern without memorizing it.",
    "Link rock phosphate and superphosphate fertilizer production to acid–base reactions converting insoluble phosphate to soluble forms.",
    "Remember bone mineral is hydroxyapatite, not pure Ca₃(PO₄)₂, for biochemistry and physiology questions.",
  ],

  misconceptions: [
    "Calcium phosphate supplements are not identical to bone mineral — bone is hydroxyapatite, a more complex phosphate phase.",
    "Phosphate fertilizers are not directly mined and spread — rock phosphate must be chemically converted to soluble forms first.",
    "Ca₃(PO₄)₂ is not soluble in the digestive tract without stomach acid — its dissolution depends on the acidic environment.",
  ],

  physical: {
    appearance: "White amorphous powder or crystalline solid",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "3.14 g/cm³",
    meltingPoint: "1,670 °C",
    boilingPoint: "Decomposes before boiling",
    solubility: "~0.0025 g/L water at 25 °C (very slightly soluble); dissolves readily in dilute acids",
    crystalStructure: "Rhombohedral (whitlockite-related structure)",
  },

  chemical: {
    classification: "Ionic phosphate salt / alkaline earth phosphate",
    basicity: "Weakly basic (phosphate anion hydrolyzes water slightly)",
    polarity: "Ionic",
    oxidationStates: "Ca: +2, P: +5, O: −2",
    chemicalFamily: "Group 2 orthophosphate (alkaline earth phosphate)",
  },

  reactions: [
    {
      equation: "Ca₃(PO₄)₂(s) + 4 H₃PO₄ → 3 Ca(H₂PO₄)₂",
      type: "Acid–salt (superphosphate formation)",
      conditions: "Concentrated phosphoric acid, industrial",
      explanation: "Phosphoric acid converts insoluble tricalcium phosphate into soluble monocalcium phosphate, the basis of triple superphosphate fertilizer manufacture.",
      products: "Monocalcium phosphate (soluble fertilizer form)",
      applications: "Triple superphosphate fertilizer production",
      relatedConcepts: ["Acid–base reactions", "Fertilizer chemistry", "Solubility conversion"],
    },
    {
      equation: "Ca₃(PO₄)₂(s) + 2 H₂SO₄ → Ca(H₂PO₄)₂ + 2 CaSO₄",
      type: "Acid–salt (superphosphate formation)",
      conditions: "Concentrated sulfuric acid, industrial",
      explanation: "Sulfuric acid treatment of phosphate rock produces soluble superphosphate fertilizer alongside gypsum byproduct.",
      products: "Superphosphate (monocalcium phosphate/gypsum mixture)",
      applications: "Superphosphate fertilizer manufacture",
      relatedConcepts: ["Acid–base reactions", "Industrial chemistry", "Fertilizer production"],
    },
    {
      equation: "Ca₃(PO₄)₂(s) + 6 HCl(aq) → 3 CaCl₂(aq) + 2 H₃PO₄(aq)",
      type: "Acid–salt dissolution",
      conditions: "Aqueous, dilute strong acid",
      explanation: "Strong acid protonates phosphate stepwise, dissolving the otherwise insoluble calcium phosphate lattice into soluble ions.",
      products: "Calcium chloride and phosphoric acid",
      applications: "Demonstrating acid-driven dissolution, digestive dissolution analog",
      relatedConcepts: ["Solubility", "Acid–base equilibria", "Dissolution reactions"],
    },
    {
      equation: "3 CaCl₂(aq) + 2 Na₃PO₄(aq) → Ca₃(PO₄)₂(s) + 6 NaCl(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Mixing soluble calcium and phosphate salts precipitates insoluble calcium phosphate — the basis of the calcium phosphate DNA co-precipitation transfection method.",
      products: "Calcium phosphate precipitate and sodium chloride",
      applications: "Molecular biology transfection technique, water treatment phosphate removal",
      relatedConcepts: ["Precipitation reactions", "Solubility rules", "Molecular biology techniques"],
    },
  ],

  relatedFormulas: ["Ca5(PO4)3OH", "H3PO4", "CaHPO4", "Ca(H2PO4)2", "CaSO4"],
  comparisonNote: "Ca₃(PO₄)₂ (310.18 g/mol) represents idealized tricalcium phosphate stoichiometry, while the actual bone and tooth mineral hydroxyapatite, Ca₅(PO₄)₃OH (502.31 g/mol per formula unit), incorporates hydroxide ions into a more complex crystal lattice.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of Ca₃(PO₄)₂.",
      answer: "3(40.08) + 2[30.97 + 4(16.00)] = 120.24 + 189.94 = 310.18 g/mol",
    },
    {
      question: "How many moles of Ca²⁺ are in 62.04 g of Ca₃(PO₄)₂?",
      answer: "62.04 g ÷ 310.18 g/mol = 0.200 mol Ca₃(PO₄)₂ → 0.200 × 3 = 0.600 mol Ca²⁺",
    },
    {
      question: "What mass of H₃PO₄ is needed to fully dissolve 31.0 g of Ca₃(PO₄)₂ via HCl reaction stoichiometry (producing H₃PO₄)?",
      answer: "31.0 g ÷ 310.18 g/mol = 0.100 mol Ca₃(PO₄)₂ → 0.200 mol H₃PO₄ produced × 98.00 g/mol = 19.6 g",
      hint: "Each mole of Ca₃(PO₄)₂ yields 2 mol H₃PO₄ upon complete acid dissolution.",
    },
    {
      question: "Why is calcium phosphate insoluble in water but soluble in acid?",
      answer: "Acid protonates the phosphate anion, disrupting the ionic lattice and forming soluble phosphoric acid species and free calcium ions.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of calcium phosphate?",
      answer: "310.18 g/mol for Ca₃(PO₄)₂.",
    },
    {
      question: "Is calcium phosphate the same as bone mineral?",
      answer: "Not exactly — bone and tooth mineral is hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂, a related but more complex calcium phosphate phase.",
    },
    {
      question: "Why is calcium phosphate used in fertilizers?",
      answer: "Phosphate rock, largely calcium phosphate minerals, is treated with acid to produce soluble phosphate fertilizers essential for plant growth.",
    },
    {
      question: "Is calcium phosphate soluble in water?",
      answer: "No — it is very slightly soluble in neutral water but dissolves readily in acidic solutions.",
    },
    {
      question: "How is calcium phosphate used in molecular biology?",
      answer: "Mixing calcium and phosphate ions forms a fine precipitate that co-precipitates DNA, a classic method for transfecting mammalian cells.",
    },
  ],

  references: [
    { label: "PubChem CID 24456", note: "Tricalcium phosphate compound data" },
    { label: "USGS", note: "Phosphate rock mining and reserve statistics" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
