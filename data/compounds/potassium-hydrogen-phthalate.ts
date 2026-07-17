import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumHydrogenPhthalate: CompoundProfile = {
  slug: "molar-mass-of-potassium-hydrogen-phthalate",
  formula: "KHC8H4O4",
  name: "Potassium Hydrogen Phthalate",
  iupacName: "Potassium 2-carboxybenzoate",
  commonNames: ["KHP", "Potassium biphthalate", "Potassium acid phthalate"],
  aliases: ["KHC₈H₄O₄", "KHP (primary standard)"],
  category: "organic",
  categories: ["organic", "salt"],
  casNumber: "877-24-7",
  pubchemCid: "23676735",
  smiles: "C1=CC=C(C(=C1)C(=O)O)C(=O)[O-].[K+]",
  inchi: "InChI=1S/C8H6O4.K/c9-7(10)5-3-1-2-4-6(5)8(11)12;/h1-4H,(H,9,10)(H,11,12);/q;+1/p-1",
  exactMass: 203.98249,
  featured: true,
  popular: true,

  overview: `Potassium hydrogen phthalate (KHC₈H₄O₄, universally abbreviated KHP) has a molar mass of 204.22 g/mol, making it the gold-standard primary standard for acid-base titrations in analytical chemistry. It is the monopotassium salt of phthalic acid (benzene-1,2-dicarboxylic acid), retaining one free carboxylic acid group (–COOH) while the other has been neutralized to a carboxylate salt (–COO⁻K⁺), giving KHP the acidic behavior of a weak monoprotic organic acid.

What makes KHP indispensable in the analytical laboratory is not any exotic chemistry but a combination of mundane, highly desirable physical properties: it is available in very high purity (often >99.95%), is not hygroscopic (does not absorb atmospheric moisture, unlike NaOH pellets or many hydrates), has a large, precisely known molar mass that minimizes relative weighing error, is stable and non-volatile at room temperature, and dissolves readily and completely in water. These properties let a chemist weigh out KHP on an ordinary analytical balance, dissolve it in water, and know the exact number of moles of acid present without further purification or drying — the essential requirement for a "primary standard."

KHP is used specifically to standardize solutions of strong bases, most commonly sodium hydroxide, whose concentration cannot be determined accurately by mass alone because solid NaOH pellets absorb atmospheric moisture and CO₂ almost immediately upon exposure to air. By titrating a precisely weighed mass of KHP against an NaOH solution to a phenolphthalein endpoint, the exact molarity of the base can be determined and then used with confidence in subsequent titrations of unknown acids or bases.`,

  formulaExplanation: `KHC₈H₄O₄ (or more explicitly, KOOC–C₆H₄–COOH) shows a benzene ring bearing two carboxyl-derived groups in the ortho (1,2) position: one has lost its proton and formed an ionic bond to K⁺ (–COO⁻K⁺), while the other retains its acidic hydrogen (–COOH). Because only one acidic proton remains available for titration, KHP behaves as a monoprotic acid in standardization reactions, even though it derives from diprotic phthalic acid.`,

  chemicalProfile: `KHP reacts stoichiometrically and completely with strong bases in a simple 1:1 acid-base neutralization: KHC₈H₄O₄ + NaOH → KNaC₈H₄O₄ + H₂O. It is weakly acidic (pKa ≈ 5.4 for the remaining carboxyl group) and gives a sharp, easily detected endpoint with phenolphthalein indicator near pH 8–9. Unlike many organic acids, it does not sublime, decompose, or absorb water under normal laboratory conditions, preserving titration accuracy.`,

  uniqueTopics: [
    {
      heading: "Why KHP Is the Ideal Primary Standard",
      body: "A primary standard must combine high purity, a large molar mass (204.22 g/mol reduces relative weighing error compared to small-molar-mass acids), non-hygroscopicity, and stability. KHP satisfies all four criteria simultaneously, which is precisely why analytical chemistry textbooks and certified reference material suppliers (like NIST) treat it as the benchmark acid standard rather than simpler acids such as HCl, which cannot be weighed directly as a pure solid.",
    },
    {
      heading: "Standardizing Sodium Hydroxide Solutions",
      body: "Solid NaOH is notoriously unsuitable for directly preparing a solution of known concentration because it rapidly absorbs atmospheric water and carbon dioxide. Instead, an approximate NaOH solution is prepared and then 'standardized' by titrating it against precisely weighed KHP, using the reaction's known 1:1 stoichiometry to back-calculate the exact NaOH molarity.",
    },
    {
      heading: "Monoprotic Behavior from a Diprotic Parent Acid",
      body: "Although KHP derives from phthalic acid, a diprotic dicarboxylic acid, one of its two acidic protons has already been neutralized in the salt itself. Only the single remaining carboxyl proton participates in titration, so KHP is treated as a monoprotic acid standard — a subtlety that helps students understand the difference between a compound's parent acid and its actual titratable acidity.",
    },
    {
      heading: "The Role of Large Molar Mass in Weighing Precision",
      body: "Because analytical balances have a fixed absolute uncertainty (e.g., ±0.0001 g), using a standard with a larger molar mass allows a chemist to weigh out a larger, more precisely measurable mass for the same number of moles, directly reducing the relative uncertainty of the standardization compared to using a smaller-molar-mass acid.",
    },
    {
      heading: "Certified Reference Material Status",
      body: "NIST and other standards bodies certify KHP as Standard Reference Material for acidimetry, with assigned purity values traceable to gravimetric and coulometric methods — underscoring its role as a foundational reference point for chemical measurement traceability worldwide.",
    },
  ],

  applications: {
    industrial: [
      "Quality control standardization of base solutions in chemical manufacturing labs",
      "Reference material for pH meter and titrator calibration verification",
      "Buffer component in some specialized pH buffer formulations",
    ],
    laboratory: [
      "Primary standard for standardizing NaOH and other strong base solutions",
      "Introductory analytical chemistry titration teaching (acid-base standardization labs)",
      "Reference acid for verifying titration technique and indicator endpoint accuracy",
    ],
  },

  preparation: `KHP is not typically prepared in a teaching laboratory; it is purchased as a certified, high-purity crystalline solid (often NIST-traceable) and used directly after gentle drying (heating at ~110 °C) to remove any adsorbed surface moisture before precise weighing.`,

  production: `Commercially manufactured by partial neutralization of phthalic acid or phthalic anhydride with potassium hydroxide or potassium carbonate, followed by recrystallization and rigorous purification to achieve the high purity required for analytical-grade primary standard material.`,

  storage: `Store in a tightly sealed container in a cool, dry location. Although non-hygroscopic, KHP should still be protected from contamination and, before use as a primary standard, is typically dried in an oven (~110 °C) and cooled in a desiccator to ensure an accurately known, moisture-free mass.`,

  handling: `Low toxicity; treat as a standard laboratory organic solid with routine precautions (gloves, avoid dust inhalation). No special hazard controls beyond standard laboratory practice are required for typical titration use.`,

  safety: {
    summary: "Low-hazard solid used routinely in teaching and analytical laboratories; primary safety considerations are standard good laboratory practice rather than specific chemical danger.",
    hazards: [
      "Mild eye and skin irritation from dust in bulk handling",
      "No significant reactivity or flammability hazard under normal conditions",
    ],
    classification: "Not classified as hazardous under GHS for typical laboratory quantities",
  },

  interestingFacts: [
    "KHP's molar mass of 204.22 g/mol is deliberately large among common laboratory acids, which is exactly why it minimizes relative weighing error on an analytical balance.",
    "Despite being an organic aromatic compound, KHP is treated in most general chemistry courses purely as 'the acid standard,' with its benzene ring structure often glossed over in introductory titration exercises.",
    "NIST issues KHP as Standard Reference Material 84k/84l, certified to extremely tight purity tolerances for use in high-precision acidimetric and coulometric titrations.",
    "Because KHP does not absorb atmospheric moisture, a bottle can sit open briefly during weighing without meaningfully changing its mass — a rare and valued property among solid laboratory reagents.",
  ],

  history: `Phthalic acid derivatives were characterized in the 19th century alongside broader advances in aromatic organic chemistry following Kekulé's benzene structure proposal. Potassium hydrogen phthalate's adoption as the standard primary acidimetric reference emerged in the 20th century as analytical chemistry formalized rigorous, traceable standardization protocols for volumetric analysis.`,

  discovery: "Phthalic acid and its salts were characterized during 19th-century advances in aromatic chemistry; KHP's specific role as an analytical primary standard was established through 20th-century standardization of titrimetric methods.",

  examNotes: [
    "Molar mass KHC₈H₄O₄ = 39.10 + 5(1.008) + 8(12.01) + 4(16.00) = 204.22 g/mol.",
    "KHP reacts 1:1 with monoprotic strong bases: KHC₈H₄O₄ + NaOH → KNaC₈H₄O₄ + H₂O.",
    "Standardization calculation: molarity of base = (mass of KHP ÷ 204.22 g/mol) ÷ volume of base solution used (L).",
    "KHP is treated as monoprotic in titration even though it derives from diprotic phthalic acid, since only one acidic proton remains.",
  ],

  commonMistakes: [
    "Forgetting to dry KHP before weighing, which can introduce small but avoidable mass errors from adsorbed moisture.",
    "Treating KHP as diprotic in titration calculations — only one proton is titratable in the standardization reaction.",
    "Using the wrong molar mass (204.22 g/mol) versus phthalic acid itself (166.13 g/mol) when setting up standardization calculations.",
  ],

  studentTips: [
    "Remember the standardization formula: moles KHP = mass (g) ÷ 204.22 g/mol = moles of base delivered at the endpoint.",
    "Use phenolphthalein as the indicator — KHP titrations have a sharp, easily visible pale pink endpoint near pH 8–9.",
    "Think of KHP's large molar mass as a built-in precision advantage: more mass to weigh accurately for the same number of moles.",
  ],

  misconceptions: [
    "KHP is not simply 'phthalic acid' — it is the monopotassium salt with only one remaining acidic proton, distinct from the fully protonated diprotic parent acid.",
    "KHP being used as a standard does not mean it is unusually pure by luck — its value comes specifically from being manufacturable and certifiable to very high, traceable purity.",
    "Large molar mass is not just a curiosity — it is specifically why KHP outperforms smaller acids as a mass-based primary standard for precision titration.",
  ],

  physical: {
    appearance: "White crystalline powder or granules",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.636 g/cm³",
    meltingPoint: "295–300 °C (decomposes)",
    boilingPoint: "Decomposes before boiling",
    solubility: "180 g/L water at 25 °C (readily soluble)",
    crystalStructure: "Orthorhombic",
  },

  chemical: {
    classification: "Aromatic dicarboxylic acid monopotassium salt / primary acidimetric standard",
    acidity: "Weak monoprotic acid in titration (pKa ≈ 5.4 for remaining carboxyl group)",
    polarity: "Polar (ionic carboxylate plus polar carboxylic acid group)",
    molecularGeometry: "Planar aromatic ring with two carboxyl-derived substituents in ortho positions",
    oxidationStates: "K: +1; carboxyl carbons formally +3; ring carbons ~ −1 to 0",
    chemicalFamily: "Phthalate salts / aromatic carboxylic acid salts",
  },

  reactions: [
    {
      equation: "KHC₈H₄O₄(aq) + NaOH(aq) → KNaC₈H₄O₄(aq) + H₂O(l)",
      type: "Acid–base neutralization (standardization)",
      conditions: "Aqueous, room temperature, phenolphthalein indicator",
      explanation: "The single remaining acidic proton of KHP is neutralized by hydroxide in a precise 1:1 mole ratio, allowing exact determination of an unknown NaOH solution's concentration from the titration volume.",
      products: "Potassium sodium phthalate and water",
      applications: "Standardizing NaOH solutions for use in subsequent quantitative titrations",
      relatedConcepts: ["Primary standards", "Titration stoichiometry", "Analytical chemistry"],
    },
    {
      equation: "KHC₈H₄O₄(aq) + KOH(aq) → K₂C₈H₄O₄(aq) + H₂O(l)",
      type: "Acid–base neutralization",
      conditions: "Aqueous, room temperature",
      explanation: "KHP can also be titrated against potassium hydroxide, converting the remaining acidic proton to give the fully deprotonated dipotassium phthalate salt.",
      products: "Dipotassium phthalate and water",
      applications: "Alternative base standardization, illustrating general applicability of KHP as an acid standard",
      relatedConcepts: ["Neutralization", "Stoichiometry", "Analytical standards"],
    },
    {
      equation: "C₈H₆O₄(s) + KOH(aq) → KHC₈H₄O₄(aq) + H₂O(l)",
      type: "Partial neutralization (industrial synthesis)",
      conditions: "Controlled stoichiometric addition of base to phthalic acid",
      explanation: "Careful, single-equivalent neutralization of diprotic phthalic acid with potassium hydroxide produces the monopotassium salt KHP, leaving one acidic proton intact by design.",
      products: "Potassium hydrogen phthalate and water",
      applications: "Commercial manufacture of analytical-grade KHP",
      relatedConcepts: ["Partial neutralization", "Diprotic acids", "Industrial synthesis"],
    },
    {
      equation: "KHC₈H₄O₄(s) + heat → decomposition products (>295 °C)",
      type: "Thermal decomposition",
      conditions: "Heating above ~295–300 °C",
      explanation: "KHP is thermally stable at drying temperatures used to remove surface moisture (~110 °C) but decomposes well above this before any true melting, confirming its suitability for oven-drying prior to precise weighing.",
      products: "Decomposition products (not typically characterized for standardization purposes)",
      applications: "Justifies standard drying protocol (110 °C) used before analytical weighing",
      relatedConcepts: ["Thermal stability", "Standard drying procedures", "Analytical technique"],
    },
  ],

  relatedFormulas: ["NaOH", "KOH", "C2H4O2", "HCl", "H2SO4"],
  comparisonNote: "KHP (204.22 g/mol) is preferred over simpler acids like HCl or acetic acid as a primary standard precisely because it is a stable, non-hygroscopic solid with a large molar mass, whereas HCl cannot be weighed directly as a pure solid at all.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KHC₈H₄O₄ (KHP).",
      answer: "39.10 + 5(1.008) + 8(12.01) + 4(16.00) = 204.22 g/mol",
    },
    {
      question: "A 0.6127 g sample of KHP requires 28.45 mL of NaOH solution to reach the phenolphthalein endpoint. What is the molarity of the NaOH solution?",
      answer: "0.6127 g ÷ 204.22 g/mol = 0.003001 mol KHP = 0.003001 mol NaOH (1:1 ratio); 0.003001 mol ÷ 0.02845 L = 0.1055 M",
      hint: "Use moles KHP = moles NaOH at the equivalence point, then divide by volume in liters.",
    },
    {
      question: "Why is KHP preferred over solid NaOH pellets for preparing a solution of precisely known concentration?",
      answer: "NaOH pellets rapidly absorb atmospheric moisture and CO₂, making their true mass of pure NaOH uncertain, whereas KHP is non-hygroscopic, stable, and highly pure, so a weighed mass accurately reflects the moles of acid present.",
    },
    {
      question: "Why does a larger molar mass make KHP a better primary standard than a hypothetical acid with molar mass 40 g/mol, all else equal?",
      answer: "For the same number of moles, a larger molar mass requires weighing a larger mass of solid, which reduces the relative uncertainty introduced by the balance's fixed absolute weighing error.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium hydrogen phthalate (KHP)?",
      answer: "204.22 g/mol.",
    },
    {
      question: "What is KHP used for?",
      answer: "It is the standard primary reference acid used to determine the exact concentration (standardize) of strong base solutions like sodium hydroxide in analytical titrations.",
    },
    {
      question: "Is KHP a strong or weak acid?",
      answer: "Weak — its remaining carboxylic acid group has a pKa of about 5.4, but its value as a standard comes from its purity and stability, not its acid strength.",
    },
    {
      question: "Why can't you just weigh out solid NaOH to make a precise solution?",
      answer: "Solid NaOH is highly hygroscopic and absorbs both water and carbon dioxide from air almost immediately, so its true NaOH content is uncertain; titrating against KHP corrects for this by directly determining the actual concentration.",
    },
    {
      question: "Is KHP derived from a diprotic or monoprotic acid?",
      answer: "It derives from phthalic acid, a diprotic acid, but one proton has already been replaced by potassium in the salt, so only one acidic proton remains available for titration.",
    },
  ],

  references: [
    { label: "NIST Standard Reference Material 84k/84l", note: "Certified KHP primary standard specifications" },
    { label: "PubChem CID 23676735", note: "Potassium hydrogen phthalate identifiers and properties" },
    { label: "IUPAC", note: "Nomenclature of phthalate salts and primary standards in titrimetry" },
  ],
};
