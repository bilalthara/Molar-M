import type { CompoundProfile } from "@/lib/chemistry/types";

export const aluminumSulfate: CompoundProfile = {
  slug: "molar-mass-of-aluminum-sulfate",
  formula: "Al2(SO4)3",
  name: "Aluminum Sulfate",
  iupacName: "Aluminum sulfate",
  commonNames: ["Aluminum sulfate", "Alum (technical, distinct from potassium alum)", "Papermaker's alum"],
  aliases: ["Al₂(SO₄)₃", "Aluminium sulfate (British spelling)", "Filter alum"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "10043-01-3",
  pubchemCid: "24850",
  smiles: "[Al+3].[Al+3].[O-]S(=O)(=O)[O-].[O-]S(=O)(=O)[O-].[O-]S(=O)(=O)[O-]",
  inchi: "InChI=1S/2Al.3H2O4S/c;;3*1-5(2,3)4/h;;3*(H2,1,2,3,4)/q2*+3;;;/p-6",
  exactMass: 341.818264,
  featured: true,
  popular: true,

  overview: `Aluminum sulfate (Al₂(SO₄)₃) is an ionic compound with molar mass 342.15 g/mol (Al 2 × 26.98 + S 3 × 32.06 + O 12 × 16.00), formed from two Al³⁺ ions balancing three SO₄²⁻ ions. Commercial "alum" used in water treatment is most commonly the hydrate Al₂(SO₄)₃·14H₂O or Al₂(SO₄)₃·18H₂O, a white crystalline solid that dissolves readily in water to give mildly acidic solutions due to hydrolysis of the small, highly charged Al³⁺ ion.

By far the largest use of aluminum sulfate is as a coagulant in municipal and industrial water treatment: when added to raw water, Al³⁺ hydrolyzes to form positively charged aluminum hydroxide polymers that neutralize the negative surface charge on suspended clay, silt, and organic particles, allowing them to aggregate into larger flocs (flocculation) that settle out or are filtered away — a process that has purified drinking water and treated wastewater at massive scale since the 19th century and remains one of the most widely used coagulants worldwide because of its low cost and reliable performance across a range of water chemistries.

In the paper industry, aluminum sulfate serves a related but distinct purpose called sizing: added during paper manufacture, it helps precipitate and fix rosin-based sizing agents onto cellulose fibers, controlling how readily the finished paper absorbs ink and moisture. This once-dominant "acid papermaking" process, still used for many grades of paper, exploits the same aluminum hydrolysis chemistry that drives water treatment coagulation, illustrating how a single compound's ion chemistry underlies two seemingly unrelated industrial processes.`,

  formulaExplanation: `Al₂(SO₄)₃ balances two Al³⁺ ions (total charge +6) against three SO₄²⁻ ions (total charge −6). Each sulfate ion is a tetrahedral anion with sulfur in the +6 oxidation state. The formula's 2:3 ratio directly reflects the need to equalize the +3 charge of aluminum with the −2 charge of sulfate through their lowest common multiple.`,

  chemicalProfile: `Al₂(SO₄)₃ dissolves in water to give an acidic solution (pH typically 3–4 for concentrated solutions) because the small, highly charged Al³⁺ ion strongly polarizes coordinated water molecules, promoting their deprotonation (hydrolysis) to release H⁺. This hydrolysis generates positively charged aluminum hydroxide species that are the active coagulating agents in water treatment. Al₂(SO₄)₃ reacts with bases to precipitate aluminum hydroxide, which is itself amphoteric and redissolves in excess strong base to form aluminate ion.`,

  uniqueTopics: [
    {
      heading: "Coagulation chemistry: from Al³⁺ hydrolysis to floc formation",
      body: "When aluminum sulfate dissolves in water, the Al³⁺ ion hydrolyzes stepwise, forming a series of positively charged aluminum hydroxide polymeric species (such as Al₁₃O₄(OH)₂₄⁷⁺) that adsorb onto negatively charged suspended particles like clay and organic colloids, neutralizing their surface charge and allowing them to aggregate into larger, settleable flocs. This coagulation-flocculation mechanism is the chemical basis of most municipal drinking water and wastewater clarification processes worldwide.",
    },
    {
      heading: "Acid papermaking and rosin sizing",
      body: "In traditional 'acid' papermaking, aluminum sulfate is added to precipitate rosin-based sizing agents onto cellulose fibers, controlling the paper's resistance to ink penetration and moisture absorption. The same aluminum hydrolysis chemistry that drives water coagulation fixes the sizing compound onto the fiber surface, though many modern mills have shifted to 'alkaline' papermaking with different sizing chemistry for improved paper permanence.",
    },
    {
      heading: "pH depression and buffering considerations in water treatment",
      body: "Because Al₂(SO₄)₃ hydrolysis releases hydrogen ions, adding large doses to water lowers pH, which is why water treatment operators often co-dose lime or soda ash to maintain the pH range (roughly 6–8) where aluminum hydroxide coagulation is most effective and where the treated water remains suitable for distribution without corroding pipes.",
    },
    {
      heading: "Distinguishing aluminum sulfate from potassium alum",
      body: "Although 'alum' colloquially refers to several related aluminum salts, technical or 'papermaker's' alum is aluminum sulfate itself, while true potassium alum (KAl(SO₄)₂·12H₂O) is a distinct double salt containing potassium as well as aluminum and sulfate. Both share overlapping coagulant and mordant chemistry, but they are chemically and formulaically different compounds sometimes conflated in casual usage.",
    },
    {
      heading: "Hydrate forms and variable water content in commercial alum",
      body: "Commercial aluminum sulfate is sold predominantly as a hydrate, most commonly the 14-hydrate or 18-hydrate, because the anhydrous salt is difficult to produce and handle; the exact water content affects the effective aluminum concentration delivered per unit mass, which water treatment plants must account for when calculating coagulant dosing.",
    },
  ],

  applications: {
    industrial: [
      "Municipal and industrial water treatment coagulant (turbidity and organic matter removal)",
      "Paper sizing agent in acid papermaking (rosin fixation)",
      "Textile dyeing mordant",
      "Wastewater phosphate removal via aluminum phosphate precipitation",
    ],
    laboratory: [
      "Coagulation and flocculation demonstration experiments",
      "Preparation of aluminum hydroxide and related aluminum compounds",
      "Source of Al³⁺ ion for synthesis and qualitative analysis",
    ],
    environmental: "Widely used in drinking water and wastewater treatment to remove turbidity, pathogens, and phosphorus; residual aluminum in treated water and sludge disposal are managed under water quality regulations.",
    biological: "Not used biologically as a nutrient; aluminum hydroxide gels derived from it have limited medicinal use as antacids and vaccine adjuvants in some formulations.",
  },

  preparation: `Industrially produced by reacting bauxite or purified aluminum hydroxide with sulfuric acid: 2 Al(OH)₃ + 3 H₂SO₄ → Al₂(SO₄)₃ + 6 H₂O, followed by crystallization to the desired hydrate form. Laboratory-grade material can be prepared similarly from aluminum oxide or hydroxide with sulfuric acid.`,

  production: `Global production is substantial given its role as the dominant low-cost water treatment coagulant; major producers supply both liquid alum solutions and solid hydrate forms to municipal utilities and industrial customers worldwide.`,

  storage: `Store the solid hydrate in a dry, corrosion-resistant container, as it can cake or partially dissolve in humid conditions. Liquid alum solutions should be stored in acid-resistant tanks, as the mildly acidic solution can corrode standard metals over time.`,

  handling: `Mild to moderate irritant; concentrated solutions are acidic and can irritate skin, eyes, and respiratory tract. Use gloves and eye protection when handling bulk solid or concentrated solution.`,

  safety: {
    summary: "Generally low acute toxicity; concentrated solutions are mildly acidic and can cause skin and eye irritation. Widely and safely used in drinking water treatment at regulated dosing levels.",
    hazards: [
      "Eye and skin irritation from concentrated solution or dust",
      "Respiratory irritation from inhaled powder",
      "Mildly corrosive to some metals in solution form due to acidity",
    ],
    classification: "GHS: Eye Irrit. 2, Skin Irrit. 2 (concentrated material)",
  },

  interestingFacts: [
    "Aluminum sulfate's coagulation chemistry has been used to purify drinking water since at least the 19th century, long before the detailed aluminum hydrolysis chemistry was understood.",
    "A single water treatment plant can use many tonnes of aluminum sulfate per day to clarify municipal drinking water supplies.",
    "The mild acidity of dissolved aluminum sulfate is strong enough that gardeners use it to acidify soil for acid-loving plants like hydrangeas, shifting their flower color toward blue.",
    "Papermaker's alum was historically so closely tied to the paper industry that the terms became almost synonymous in some trade contexts.",
  ],

  history: `Aluminum sulfate and related alum compounds have been used since antiquity as mordants in dyeing and in early water clarification practices. Its systematic use as a municipal water treatment coagulant expanded dramatically in the late 19th and early 20th centuries as public health authorities recognized the link between water clarity, pathogen removal, and disease prevention, cementing its role as a cornerstone of modern water treatment engineering.`,

  discovery: "Alum compounds used since antiquity in dyeing and water clarification; aluminum sulfate's chemical identity clarified alongside broader 18th–19th century advances in inorganic chemistry.",

  examNotes: [
    "Molar mass Al₂(SO₄)₃ = 2(26.98) + 3[32.06 + 4(16.00)] = 53.96 + 3(96.06) = 342.14 g/mol (commonly rounded to 342.15).",
    "Charge balance: 2 Al³⁺ (+6 total) balances 3 SO₄²⁻ (−6 total).",
    "Al³⁺ hydrolysis: Al³⁺ + 3 H₂O ⇌ Al(OH)₃ + 3 H⁺, explaining the acidic pH of aluminum sulfate solutions.",
    "Amphoteric behavior: Al(OH)₃ dissolves in excess strong base to form [Al(OH)₄]⁻ (aluminate).",
  ],

  commonMistakes: [
    "Writing the formula as AlSO₄ or Al₃(SO₄)₂ instead of the correctly charge-balanced Al₂(SO₄)₃.",
    "Confusing aluminum sulfate with potassium alum (KAl(SO₄)₂·12H₂O) — related but distinct double salts.",
    "Forgetting the substantial mass contribution of water in commercial hydrate forms when calculating effective aluminum dosing.",
  ],

  studentTips: [
    "Balance the +3 and −2 ionic charges to derive the 2:3 subscript pattern rather than memorizing the formula.",
    "Link Al³⁺ hydrolysis directly to both the acidity of alum solutions and the coagulation mechanism in water treatment — they share the same root chemistry.",
    "Remember aluminum hydroxide's amphoteric nature (dissolves in both acid and excess base) as a recurring exam theme.",
  ],

  misconceptions: [
    "Aluminum sulfate coagulant use in drinking water treatment is not linked to significant aluminum toxicity at regulated treatment doses — extensive water quality monitoring keeps residual aluminum within safe limits.",
    "'Alum' is not a single unambiguous chemical name — it can refer to aluminum sulfate, potassium alum, or other related double sulfates depending on context.",
    "Aluminum sulfate solutions are not neutral — they are noticeably acidic due to Al³⁺ hydrolysis, a property essential to both its coagulant action and its soil-acidifying garden use.",
  ],

  physical: {
    appearance: "White crystalline solid or powder (hydrate forms most common commercially)",
    color: "White to slightly yellowish/grayish depending on purity",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.67 g/cm³ (anhydrous, calculated); hydrate density varies by water content",
    meltingPoint: "770 °C (decomposes, anhydrous)",
    boilingPoint: "Decomposes before boiling",
    solubility: "870 g/L water at 20 °C (hydrate forms, highly soluble)",
    crystalStructure: "Monoclinic (hydrate forms)",
  },

  chemical: {
    classification: "Ionic sulfate salt / trivalent metal sulfate",
    acidity: "Mildly acidic in solution (Al³⁺ hydrolysis, effective pH 3–4 for concentrated solutions)",
    polarity: "Ionic",
    oxidationStates: "Al: +3, S: +6, O: −2",
    chemicalFamily: "Group 13 sulfate (trivalent metal sulfate)",
  },

  reactions: [
    {
      equation: "Al₂(SO₄)₃(aq) + 6 NaOH(aq) → 2 Al(OH)₃(s) + 3 Na₂SO₄(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, controlled base addition",
      explanation: "Hydroxide ion precipitates gelatinous aluminum hydroxide, the active coagulant species responsible for particle removal in water treatment.",
      products: "Aluminum hydroxide precipitate and sodium sulfate",
      applications: "Water treatment coagulation, aluminum hydroxide production",
      relatedConcepts: ["Precipitation reactions", "Coagulation chemistry", "Solubility rules"],
    },
    {
      equation: "Al(OH)₃(s) + NaOH(aq, excess) → Na[Al(OH)₄](aq)",
      type: "Amphoteric dissolution",
      conditions: "Excess strong base",
      explanation: "Aluminum hydroxide, being amphoteric, redissolves in excess strong base to form soluble aluminate ion rather than remaining precipitated.",
      products: "Sodium aluminate (soluble)",
      applications: "Demonstrating amphoteric behavior, Bayer process aluminum ore refining chemistry",
      relatedConcepts: ["Amphoterism", "Acid–base chemistry", "Coordination chemistry"],
    },
    {
      equation: "Al³⁺(aq) + 3 H₂O(l) ⇌ Al(OH)₃(s) + 3 H⁺(aq)",
      type: "Hydrolysis equilibrium",
      conditions: "Aqueous solution, ambient temperature",
      explanation: "The small, highly charged aluminum ion polarizes coordinated water molecules, promoting proton release and giving aluminum sulfate solutions their characteristic acidity.",
      products: "Aluminum hydroxide and hydrogen ions",
      applications: "Explains solution acidity, underlies coagulation mechanism",
      relatedConcepts: ["Hydrolysis", "Equilibrium", "Lewis acid behavior of metal cations"],
    },
    {
      equation: "2 Al(OH)₃(s) + 3 H₂SO₄(aq) → Al₂(SO₄)₃(aq) + 6 H₂O(l)",
      type: "Acid–base neutralization (industrial synthesis)",
      conditions: "Aqueous sulfuric acid, heated",
      explanation: "Sulfuric acid dissolves aluminum hydroxide to produce aluminum sulfate, the standard industrial synthesis route from purified alumina feedstock.",
      products: "Aluminum sulfate solution and water",
      applications: "Industrial aluminum sulfate manufacture",
      relatedConcepts: ["Acid–base reactions", "Industrial synthesis", "Salt formation"],
    },
  ],

  relatedFormulas: ["KAl(SO4)2·12H2O", "Al(OH)3", "Al2O3", "H2SO4", "NaAlO2"],
  comparisonNote: "Aluminum sulfate (Al₂(SO₄)₃, 342.15 g/mol) is the primary coagulant salt used in water treatment, distinct from potassium alum (KAl(SO₄)₂·12H₂O, 474.39 g/mol), a related double sulfate more commonly associated with historical dyeing, pickling, and styptic pencil applications.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of Al₂(SO₄)₃.",
      answer: "2(26.98) + 3[32.06 + 4(16.00)] = 53.96 + 288.18 = 342.14 g/mol",
    },
    {
      question: "How many moles of Al³⁺ are released when 34.21 g of Al₂(SO₄)₃ fully dissolves?",
      answer: "34.21 g ÷ 342.14 g/mol ≈ 0.100 mol Al₂(SO₄)₃ → 0.100 × 2 = 0.200 mol Al³⁺",
    },
    {
      question: "How many moles of NaOH are needed to fully precipitate the aluminum in 0.0500 mol Al₂(SO₄)₃ as Al(OH)₃?",
      answer: "0.0500 mol Al₂(SO₄)₃ contains 0.100 mol Al³⁺; each requires 3 mol OH⁻, so 0.100 × 3 = 0.300 mol NaOH",
    },
    {
      question: "Why does adding aluminum sulfate to water lower its pH?",
      answer: "The Al³⁺ ion hydrolyzes water molecules, releasing H⁺ ions as it forms aluminum hydroxide species, making the solution more acidic.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of aluminum sulfate?",
      answer: "342.15 g/mol for anhydrous Al₂(SO₄)₃ (commercial hydrate forms have higher molar mass due to water of crystallization).",
    },
    {
      question: "Why is aluminum sulfate used in water treatment?",
      answer: "It hydrolyzes to form positively charged aluminum hydroxide species that neutralize suspended particles' charge, allowing them to clump together and settle out (coagulation).",
    },
    {
      question: "Is aluminum sulfate the same as alum used in cooking or pickling?",
      answer: "Not exactly — food and pickling 'alum' typically refers to potassium alum, a related but chemically distinct double sulfate salt.",
    },
    {
      question: "Why does aluminum sulfate make water treatment solutions acidic?",
      answer: "The highly charged Al³⁺ ion hydrolyzes water, releasing hydrogen ions as it forms aluminum hydroxide.",
    },
    {
      question: "How is aluminum sulfate used in papermaking?",
      answer: "It helps fix rosin-based sizing agents onto cellulose fibers, controlling how paper absorbs ink and moisture.",
    },
  ],

  references: [
    { label: "PubChem CID 24850", note: "Aluminum sulfate compound data" },
    { label: "American Water Works Association", note: "Coagulation and flocculation treatment guidance" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
