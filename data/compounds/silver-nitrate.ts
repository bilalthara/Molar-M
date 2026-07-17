import type { CompoundProfile } from "@/lib/chemistry/types";

export const silverNitrate: CompoundProfile = {
  slug: "molar-mass-of-silver-nitrate",
  formula: "AgNO3",
  name: "Silver Nitrate",
  iupacName: "Silver(I) nitrate",
  commonNames: ["Silver nitrate", "Lunar caustic", "Silver mononitrate"],
  aliases: ["AgNO₃", "Argenti nitras"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7761-88-8",
  pubchemCid: "24470",
  smiles: "[Ag+].[O-][N+](=O)[O-]",
  inchi: "InChI=1S/Ag.NO3/c;2-1(3)4/q+1;-1",
  exactMass: 168.892915,
  featured: true,
  popular: true,

  overview: `Silver nitrate (AgNO₃) is an ionic salt with a molar mass of 169.87 g/mol, composed of the monovalent Ag⁺ cation (107.87 g/mol) and the nitrate anion NO₃⁻ (62.00 g/mol). It is the most important and least expensive commercially available silver compound, serving as the practical entry point into silver chemistry from which countless other silver compounds — halides, oxide, sulfide, and complex ions — are prepared by straightforward metathesis reactions. Unlike many silver salts, AgNO₃ is highly soluble in water (unusual among silver compounds, most of which are notoriously insoluble), which is precisely what makes it so useful as a source of free Ag⁺ ion in solution.

The defining reactivity of silver nitrate is precipitation: Ag⁺ combines with halide ions to form silver halides (AgCl, AgBr, AgI) that are essentially insoluble in water, with solubility decreasing sharply down the halide group. This reaction is both a cornerstone qualitative-analysis test for identifying halide ions and the chemical foundation of traditional photographic film, since silver halide crystals are photosensitive — absorbing light triggers a redox process that reduces trace Ag⁺ to metallic silver, forming the latent image that is chemically developed and fixed into a permanent photograph.

Silver nitrate also has a long history in medicine and analytical chemistry that predates modern instrumental methods. Its old common name, "lunar caustic," reflects historical alchemical associations between silver and the moon, and it was used for centuries as a topical antiseptic and cauterizing agent because Ag⁺ ions are broadly toxic to bacteria (a property now understood in terms of disrupting microbial enzyme function and cell membranes) while remaining tolerable, if staining, to human tissue in controlled doses.`,

  formulaExplanation: `The formula AgNO₃ reflects a 1:1 ionic pairing between the +1 silver cation and the −1 nitrate polyatomic anion. Within the nitrate ion, nitrogen forms three resonance-delocalized bonds to oxygen in a trigonal planar arrangement, spreading the single negative charge symmetrically — the same nitrate structure found in all nitrate salts, including sodium and potassium nitrate.`,

  chemicalProfile: `Silver nitrate is a mild oxidizing agent and a ready source of Ag⁺ for precipitation and complexation chemistry. It reacts with halide ions to give characteristic colored or white precipitates used in qualitative analysis, with aldehydes (via Tollens' reagent, a diammine silver complex) to give a diagnostic silver mirror, and with light itself, since silver halides and, more slowly, silver nitrate solutions darken on prolonged light exposure as trace Ag⁺ is photoreduced to metallic silver.`,

  uniqueTopics: [
    {
      heading: "Precipitation reactions: the classic halide identification test",
      body: "Adding AgNO₃ solution to an unknown halide solution is one of the most widely taught qualitative tests in introductory chemistry: Ag⁺ combines with Cl⁻, Br⁻, or I⁻ to form silver halide precipitates with distinctive appearances — AgCl is white and curdles readily in light, AgBr is pale cream, and AgI is bright yellow. Solubility in aqueous ammonia further distinguishes the three: AgCl dissolves readily in dilute ammonia, AgBr dissolves only in concentrated ammonia, and AgI remains insoluble even in concentrated ammonia, a solubility gradient that mirrors the increasing covalent character and lattice stability down the halide group.",
    },
    {
      heading: "Photography: silver halides as light-sensitive recording media",
      body: "Traditional photographic film and paper rely on silver halide crystals (typically AgBr, sometimes mixed with AgCl or AgI) suspended in gelatin, all ultimately manufactured starting from silver nitrate. When light strikes a silver halide crystal, it excites an electron that reduces a trace Ag⁺ ion to metallic silver, creating a few atoms of a 'latent image' too faint to see directly. Chemical development then amplifies this latent image by reducing much larger quantities of Ag⁺ to visible metallic silver grains selectively at exposed sites, followed by a fixing step that dissolves away unexposed, unreduced silver halide, leaving a stable, permanent image.",
    },
    {
      heading: "Tollens' reagent: detecting aldehydes by silver mirror formation",
      body: "Tollens' reagent, prepared by treating AgNO₃ with ammonia to form the diammine silver(I) complex [Ag(NH₃)₂]⁺, is a classic qualitative organic chemistry test that distinguishes aldehydes from ketones. Aldehydes reduce the mild oxidizing Ag⁺ complex to metallic silver, which deposits as a bright, mirror-like coating on the inside of a clean test tube — a visually striking positive result that gives the reagent its common name, the 'silver mirror test.' Ketones, lacking an easily oxidizable hydrogen on the carbonyl carbon, generally give no reaction, making this test diagnostically useful.",
    },
    {
      heading: "Caustic and antimicrobial staining properties",
      body: "Silver nitrate's historical common name 'lunar caustic' reflects its use as a topical cauterizing agent to treat warts, granulation tissue, and minor bleeding by chemically burning superficial tissue. Its antimicrobial action arises because free Ag⁺ ions disrupt bacterial enzyme systems and cell membranes broadly, a property still exploited today in specialized medical dressings and eye-drop prophylaxis for newborns. A distinctive and sometimes alarming side effect of concentrated or prolonged silver exposure is argyria, a permanent blue-gray discoloration of skin caused by silver compounds reducing and depositing in tissue, illustrating the compound's reactive, staining nature.",
    },
    {
      heading: "Silver mirror and water purification: antimicrobial silver ion chemistry",
      body: "Beyond photography and medicine, dissolved Ag⁺ from silver nitrate (and related silver compounds) is used in water purification and antimicrobial coatings because even very low concentrations of free silver ion are lethal to a broad range of bacteria and algae, a phenomenon historically called the 'oligodynamic effect.' This same fundamental Ag⁺ toxicity to microorganisms links silver nitrate's role as a medical antiseptic, a water treatment agent, and an antimicrobial textile and coating additive under one unifying ionic mechanism.",
    },
  ],

  applications: {
    industrial: [
      "Manufacture of silver halide emulsions for traditional photographic film and paper",
      "Silver plating and electroplating solutions",
      "Production of other silver compounds via straightforward precipitation chemistry",
      "Mirror-silvering processes using controlled Ag⁺ reduction onto glass",
    ],
    laboratory: [
      "Qualitative and quantitative analysis reagent for halide ion identification (argentometric titration)",
      "Preparation of Tollens' reagent for aldehyde detection",
      "Source of Ag⁺ for coordination chemistry and precipitation demonstrations",
    ],
    environmental: "Silver ion is toxic to aquatic organisms at low concentrations, so silver-containing waste streams from photographic and industrial processes require careful treatment before discharge.",
    biological: "Historically used as a topical antiseptic and cauterizing agent; used prophylactically in newborn eye drops to prevent bacterial conjunctivitis; can cause argyria (permanent skin discoloration) with excessive or prolonged exposure.",
  },

  preparation: `Silver nitrate is produced by dissolving metallic silver in dilute or moderately concentrated nitric acid: 3 Ag + 4 HNO₃(dilute) → 3 AgNO₃ + 2 H₂O + NO, followed by evaporation and recrystallization to obtain pure crystalline AgNO₃.`,

  production: `Industrial silver nitrate is manufactured by dissolving high-purity silver metal or silver scrap in nitric acid under controlled conditions, then purifying the resulting solution by recrystallization to remove other metal nitrate impurities before use in photographic, medical, or analytical-grade products.`,

  storage: `Store in light-resistant, tightly sealed containers, since silver nitrate solutions and crystals slowly darken on prolonged exposure to light due to photoreduction of trace Ag⁺ to metallic silver. Keep away from organic materials, reducing agents, and strong bases.`,

  handling: `Wear gloves and eye protection; silver nitrate stains skin and most organic materials black or brown on contact due to silver reduction, and it is corrosive to tissue in concentrated form. Avoid contact with combustible or easily oxidized materials, as AgNO₃ is a mild oxidizer.`,

  safety: {
    summary: "Corrosive and oxidizing; causes skin and eye burns and permanently stains skin, clothing, and surfaces; toxic to aquatic life even at low concentrations.",
    hazards: [
      "Skin and eye corrosion/burns from concentrated solid or solution",
      "Permanent black/brown staining of skin and organic materials on contact",
      "Oxidizing hazard around combustible or reducing materials",
      "Toxic to aquatic organisms; requires careful waste disposal",
    ],
    classification: "GHS: Ox. Solid 2, Skin Corr. 1B, Aquatic Acute 1",
  },

  interestingFacts: [
    "Silver nitrate solutions and crystals slowly darken when exposed to light as trace Ag⁺ is photoreduced to visible metallic silver.",
    "The Tollens' silver mirror test produces one of the most visually dramatic positive results in classic qualitative organic chemistry.",
    "AgNO₃'s old name, lunar caustic, comes from the ancient alchemical association of silver with the moon (Luna).",
    "Argyria, the permanent blue-gray skin discoloration from excess silver exposure, is a rare but visually distinctive condition linked to silver compound overuse.",
  ],

  history: `Silver nitrate has been known since medieval alchemy, when silver salts were associated symbolically with the moon, giving rise to the name 'lunar caustic.' It became central to the development of photography in the 19th century, when pioneers including Louis Daguerre and William Henry Fox Talbot exploited the light sensitivity of silver halides derived from silver nitrate to capture the first practical photographic images. Its qualitative-analysis role in halide identification became a chemistry teaching staple as analytical methods were formalized in the 19th and 20th centuries.`,

  discovery: "Known in impure alchemical forms since the medieval period; its central role in photographic chemistry was established in the early-to-mid 19th century by pioneers of photography exploiting silver halide light sensitivity.",

  examNotes: [
    "Molar mass AgNO₃ = 107.87 (Ag) + 14.01 (N) + 3(16.00) (O) = 169.87 g/mol.",
    "Halide precipitation trend: AgCl (white) < AgBr (pale cream) < AgI (yellow), with decreasing solubility in ammonia down the group.",
    "Tollens' test: aldehydes give a silver mirror (positive), ketones generally do not (negative) — a key organic chemistry identification tool.",
    "AgNO₃ is one of the few common silver salts that is highly soluble in water, unlike AgCl, AgBr, AgI, Ag₂CO₃, and Ag₂S.",
  ],

  commonMistakes: [
    "Forgetting that most silver salts are insoluble except AgNO₃ (and AgF, AgClO₄) — this exception is exactly why AgNO₃ is the standard source of Ag⁺ in solution.",
    "Confusing Tollens' reagent's silver mirror test with Fehling's or Benedict's copper-based tests — they use different metal ions and different color-change signals.",
    "Handling AgNO₃ without gloves and being surprised by dark stains on skin — the staining is from silver reduction, not a hazardous burn indicator by itself, though concentrated solutions are still corrosive.",
  ],

  studentTips: [
    "Memorize the halide precipitate color sequence (white AgCl, cream AgBr, yellow AgI) as a quick qualitative-analysis reference.",
    "Link Tollens' reagent chemistry to redox concepts: the aldehyde is oxidized to a carboxylic acid while Ag⁺ is reduced to metallic silver.",
    "Remember that AgNO₃'s solubility is the exception, not the rule, among silver compounds when predicting solubility in problems.",
  ],

  misconceptions: [
    "Silver nitrate is not the same as colloidal silver or silver sulfadiazine, though all exploit the antimicrobial properties of silver ion in different chemical forms.",
    "The black stains left by AgNO₃ on skin are not simply dirt or damage — they are finely divided metallic silver formed by photoreduction or reduction by organic matter in skin.",
    "AgNO₃ is not flammable itself, but as an oxidizer it can intensify the burning of combustible materials it contacts.",
  ],

  physical: {
    appearance: "Colorless to white crystalline solid",
    color: "Colorless to white (darkens to gray/black on light or organic exposure)",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "4.35 g/cm³ (25 °C)",
    meltingPoint: "212 °C",
    boilingPoint: "444 °C (decomposes)",
    solubility: "2,565 g/L water at 25 °C (extremely soluble, unusual among silver salts)",
    crystalStructure: "Orthorhombic",
  },

  chemical: {
    classification: "Ionic salt / transition metal nitrate",
    polarity: "Ionic (no molecular dipole in the crystal lattice)",
    oxidationStates: "Ag: +1, N: +5, O: −2",
    chemicalFamily: "Silver(I) salts / nitrate salts",
  },

  reactions: [
    {
      equation: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Silver ion combines with chloride to form insoluble white silver chloride, the standard test for chloride ion in qualitative analysis.",
      products: "Silver chloride precipitate and sodium nitrate solution",
      applications: "Qualitative halide testing, gravimetric chloride determination, argentometric titration",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Qualitative analysis"],
    },
    {
      equation: "2 AgNO₃(aq) + Cu(s) → Cu(NO₃)₂(aq) + 2 Ag(s)",
      type: "Single displacement (redox)",
      conditions: "Aqueous, room temperature",
      explanation: "Copper, being more reactive than silver, displaces silver from solution, depositing metallic silver crystals — a classic activity-series demonstration.",
      products: "Copper(II) nitrate solution and metallic silver",
      applications: "Activity series demonstrations, silver recovery from photographic waste solutions",
      relatedConcepts: ["Activity series", "Single displacement", "Redox"],
    },
    {
      equation: "RCHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → RCOO⁻ + 2 Ag(s) + 4 NH₃ + 2 H₂O",
      type: "Redox (Tollens' test)",
      conditions: "Tollens' reagent (ammoniacal AgNO₃), gentle warming",
      explanation: "An aldehyde is oxidized to a carboxylate while the diammine silver(I) complex is reduced to metallic silver, depositing a characteristic mirror on the vessel walls.",
      products: "Carboxylate salt and metallic silver mirror",
      applications: "Qualitative organic chemistry test distinguishing aldehydes from ketones",
      relatedConcepts: ["Redox", "Aldehyde oxidation", "Coordination complexes"],
    },
    {
      equation: "2 AgNO₃(s) → 2 Ag(s) + 2 NO₂(g) + O₂(g)",
      type: "Thermal decomposition",
      conditions: "Heat above ~440 °C",
      explanation: "On strong heating, silver nitrate decomposes into metallic silver, nitrogen dioxide gas, and oxygen gas rather than melting cleanly to a stable liquid indefinitely.",
      products: "Metallic silver, nitrogen dioxide, and oxygen",
      applications: "Silver recovery, thermal decomposition demonstrations",
      relatedConcepts: ["Thermal decomposition", "Nitrate salt stability", "Redox"],
    },
  ],

  relatedFormulas: ["NaCl", "KCl", "KBr", "KI", "CuSO4"],
  comparisonNote: "AgNO₃ (169.87 g/mol) is unusual among silver salts for its high water solubility; most other common silver compounds, such as AgCl, are essentially insoluble, which is precisely why AgNO₃ serves as the universal laboratory source of dissolved Ag⁺ ion.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of silver nitrate, AgNO₃.",
      answer: "107.87 + 14.01 + 3(16.00) = 169.87 g/mol",
    },
    {
      question: "How many grams of AgCl precipitate form when excess AgNO₃ reacts with 0.0500 mol NaCl?",
      answer: "1:1 stoichiometry, so 0.0500 mol AgCl forms; 0.0500 × 143.32 g/mol = 7.17 g",
      hint: "AgNO3 + NaCl -> AgCl + NaNO3; find the molar mass of AgCl (107.87 + 35.45).",
    },
    {
      question: "What color precipitates form when AgNO₃ is added separately to solutions of Cl⁻, Br⁻, and I⁻?",
      answer: "AgCl is white, AgBr is pale cream, and AgI is bright yellow.",
    },
    {
      question: "What is the key visual result of a positive Tollens' test, and what functional group causes it?",
      answer: "A shiny metallic silver mirror forms on the test tube; this indicates the presence of an aldehyde, which is oxidized while Ag⁺ is reduced to Ag(s).",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of silver nitrate?",
      answer: "169.87 g/mol, calculated as 107.87 (Ag) + 14.01 (N) + 3 × 16.00 (O).",
    },
    {
      question: "Why is silver nitrate used in photography?",
      answer: "It is the starting material for light-sensitive silver halide crystals that darken upon exposure to light, forming the latent image in traditional photographic film.",
    },
    {
      question: "Why does silver nitrate stain skin black?",
      answer: "Contact with skin and organic matter reduces Ag⁺ to finely divided metallic silver, which appears as a dark stain that fades only as skin cells are shed.",
    },
    {
      question: "What is Tollens' reagent used for?",
      answer: "It is used to distinguish aldehydes from ketones; aldehydes reduce the ammoniacal silver complex to metallic silver, producing a visible silver mirror.",
    },
    {
      question: "Is silver nitrate dangerous?",
      answer: "Yes, in concentrated form it is corrosive to skin and eyes and toxic to aquatic organisms, so it requires careful handling, storage away from light, and proper waste disposal.",
    },
  ],

  references: [
    { label: "PubChem CID 24470", note: "Structural and safety identifiers for silver nitrate" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of silver nitrate" },
    { label: "IUPAC", note: "Nomenclature of silver(I) coordination and salt chemistry" },
  ],
};
