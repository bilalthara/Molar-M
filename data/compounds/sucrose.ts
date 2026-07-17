import type { CompoundProfile } from "@/lib/chemistry/types";

export const sucrose: CompoundProfile = {
  slug: "molar-mass-of-sucrose",
  formula: "C12H22O11",
  name: "Sucrose",
  iupacName: "(2R,3R,4S,5S,6R)-2-[(2S,3S,4S,5R)-3,4-dihydroxy-2,5-bis(hydroxymethyl)oxolan-2-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol",
  commonNames: ["Table sugar", "Cane sugar", "Beet sugar"],
  aliases: ["C₁₂H₂₂O₁₁", "Saccharose", "Sugar"],
  category: "organic",
  categories: ["organic"],
  casNumber: "57-50-1",
  pubchemCid: "5988",
  smiles: "C(C1C(C(C(C(O1)OC2(C(C(C(O2)CO)O)O)CO)O)O)O)O",
  inchi: "InChI=1S/C12H22O11/c13-1-4-6(16)8(18)9(19)11(21-4)23-12(3-15)10(20)7(17)5(2-14)22-12/h4-11,13-20H,1-3H2/t4-,5-,6-,7-,8+,9-,10+,11-,12+/m1/s1",
  exactMass: 342.116212,
  featured: true,
  popular: true,

  overview: `Sucrose (C₁₂H₂₂O₁₁) is a disaccharide with a molar mass of 342.30 g/mol, formed by joining one molecule of glucose and one molecule of fructose through a glycosidic bond between their respective anomeric carbons. This linkage — connecting the C1 carbon of glucose (in its alpha configuration) to the C2 carbon of fructose (in its beta configuration) — is chemically unusual among common disaccharides because it joins the two anomeric (hemiacetal/hemiketal) carbons directly to each other. The result is that sucrose has no free anomeric carbon left exposed, making it a non-reducing sugar, unlike most other common disaccharides such as lactose and maltose, which retain a free reducing end.

Sucrose is the primary transport sugar in most plants, synthesized in leaves during photosynthesis and translocated through phloem tissue to storage organs such as sugar cane stalks and sugar beet roots, from which it is commercially extracted and refined to the nearly pure white crystalline sucrose sold as table sugar. Its molecular stability as a non-reducing sugar makes it well suited to this transport role, since it resists the spontaneous ring-opening and reactive aldehyde exposure that would make a reducing sugar more chemically vulnerable during long-distance movement through plant tissue.

Nutritionally and industrially, sucrose is significant because digestion (or acid-catalyzed hydrolysis in food processing) cleaves its glycosidic bond to release free glucose and fructose, a reaction called inversion that produces "invert sugar" — sweeter and more soluble than sucrose itself, which is why candy makers and bakers deliberately hydrolyze sucrose to control crystallization and enhance sweetness and moisture retention in products like fondant, caramel, and certain syrups.`,

  formulaExplanation: `The formula C₁₂H₂₂O₁₁ corresponds to one glucose unit (C₆H₁₂O₆) and one fructose unit (C₆H₁₂O₆) joined by a glycosidic bond with the loss of one water molecule: C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O. This condensation accounts for why the disaccharide's formula has exactly two fewer hydrogens and one fewer oxygen than the sum of its two monosaccharide components (24 H and 12 O would be expected from simple addition, but one water molecule, H₂O, is removed).`,

  chemicalProfile: `Sucrose is a non-reducing sugar because both anomeric carbons (glucose C1 and fructose C2) are locked into the glycosidic bond, leaving no free hemiacetal or hemiketal group available for the ring-opening tautomerism that reducing sugars undergo. It is readily hydrolyzed by dilute acid or by the enzyme invertase (sucrase) to yield an equimolar mixture of glucose and fructose, and it undergoes acid-catalyzed dehydration at high temperature with strong dehydrating agents like concentrated sulfuric acid, producing dramatic carbon-column demonstrations.`,

  uniqueTopics: [
    {
      heading: "Disaccharide structure: the unique glycosidic linkage",
      body: "Sucrose's glycosidic bond joins glucose's C1 anomeric carbon (alpha configuration) directly to fructose's C2 anomeric carbon (beta configuration), forming an alpha-1,2-glycosidic bond that is structurally distinct from the more common 1,4-linkages found in lactose (glucose-galactose) or maltose (glucose-glucose). Because this bond consumes both sugars' anomeric carbons simultaneously, sucrose is locked into a single fixed structure with no mutarotation and no free reducing end — a structural feature with direct consequences for its chemical stability and its behavior in classic sugar identification tests.",
    },
    {
      heading: "Hydrolysis to glucose and fructose: inversion and invert sugar",
      body: "Sucrose hydrolyzes under acidic conditions or via the enzyme invertase (sucrase) to release free glucose and fructose in a 1:1 ratio. This reaction is called 'inversion' because it reverses the optical rotation of the solution — sucrose itself is dextrorotatory, but the glucose-fructose mixture produced is net levorotatory because fructose's strong levorotation outweighs glucose's weaker dextrorotation. The resulting 'invert sugar' is sweeter-tasting and more soluble than sucrose and resists crystallization, which is why confectioners deliberately hydrolyze a portion of sucrose in recipes for fondant, caramel, and certain syrups to control texture and prevent unwanted graininess.",
    },
    {
      heading: "Sucrose vs. glucose: reducing vs. non-reducing sugar chemistry",
      body: "Glucose, a monosaccharide with a free anomeric carbon, is a classic reducing sugar that gives positive results with Tollens', Fehling's, and Benedict's tests because its open-chain aldehyde form can be oxidized. Sucrose, by contrast, has both potential reducing groups locked into its glycosidic bond and gives negative results on these same tests unless it is first hydrolyzed into its component monosaccharides. This reducing/non-reducing distinction is a foundational concept in carbohydrate chemistry and a standard laboratory exercise for distinguishing sugar types by simple chemical tests.",
    },
    {
      heading: "Plant transport sugar and industrial extraction",
      body: "Plants synthesize sucrose in photosynthetic leaf tissue and transport it through phloem to storage organs, favoring sucrose over more reactive reducing sugars precisely because its non-reducing, chemically stable structure resists degradation during long-distance transport. Sugar cane and sugar beet accumulate exceptionally high sucrose concentrations in their stalks and roots respectively, which is why industrial sugar refining focuses on these two crops, using crushing, juice extraction, purification (liming and carbonation), evaporation, and crystallization to isolate nearly pure sucrose crystals from the complex mixture of plant juice components.",
    },
    {
      heading: "Caramelization and dehydration chemistry",
      body: "Heating sucrose above its melting point (~186 °C) without water triggers caramelization, a complex cascade of dehydration, fragmentation, and polymerization reactions that produce hundreds of flavor and color compounds responsible for caramel's characteristic taste and brown color — a distinct chemical process from the Maillard reaction, which additionally requires amino acids or proteins. In a more extreme demonstration, treating sucrose with concentrated sulfuric acid strips out water directly (dehydration rather than thermal caramelization), leaving behind a rising black column of nearly pure carbon in one of the most visually dramatic classic chemistry demonstrations.",
    },
  ],

  applications: {
    industrial: [
      "Primary sweetener in food and beverage manufacturing worldwide",
      "Fermentation substrate for bioethanol and industrial alcohol production",
      "Humectant and texturizing agent in baked goods and confectionery",
      "Feedstock for biochemical and pharmaceutical excipient production",
    ],
    laboratory: [
      "Standard substrate for studying enzyme kinetics (invertase/sucrase hydrolysis)",
      "Density gradient medium in biochemical centrifugation (sucrose gradients)",
      "Model compound for teaching glycosidic bonds and carbohydrate nomenclature",
    ],
    environmental: "Large-scale sugar cane and beet cultivation has significant land-use, water-use, and agrochemical impacts; sugar processing wastewater (high biological oxygen demand) requires treatment before discharge.",
    biological: "A major dietary carbohydrate source, hydrolyzed by intestinal sucrase into glucose and fructose for absorption; excessive dietary sucrose intake is linked to obesity, dental caries, and metabolic disease risk in nutritional science.",
  },

  preparation: `Sucrose is extracted commercially from sugar cane or sugar beet through crushing, juice extraction, purification (liming to remove impurities, carbonation, and filtration), evaporation to a supersaturated syrup, and controlled crystallization, followed by centrifugation to separate crystals from residual molasses.`,

  production: `Global sucrose production exceeds 180 million tonnes annually, led by Brazil, India, and the European Union (sugar beet), with sugar cane accounting for roughly 80% of world sugar production and sugar beet supplying the remainder, primarily in temperate climates.`,

  storage: `Store in a cool, dry, sealed container to prevent moisture absorption and clumping. Sucrose is chemically very stable at room temperature and does not require refrigeration or special atmosphere control for long-term storage.`,

  handling: `No special hazard-based handling precautions are required for food-grade sucrose beyond standard food hygiene practices. Industrial handling of bulk sugar dust requires attention to combustible dust explosion risk in enclosed processing and storage facilities.`,

  safety: {
    summary: "Non-toxic and generally recognized as safe for consumption in normal dietary amounts, though excessive intake is linked to dental caries, obesity, and metabolic health risks; bulk sugar dust poses a combustible dust hazard in industrial settings.",
    hazards: [
      "Combustible dust explosion risk in bulk industrial handling and storage",
      "Dental caries risk from fermentation by oral bacteria when consumed frequently",
      "Metabolic health concerns (obesity, insulin resistance) associated with excessive chronic intake",
    ],
    classification: "Not classified as hazardous under GHS for the pure food-grade substance",
  },

  interestingFacts: [
    "Sucrose is a non-reducing sugar, meaning it gives a negative result on Tollens' and Fehling's tests unless first hydrolyzed into glucose and fructose.",
    "The process of hydrolyzing sucrose is called 'inversion' because it reverses the solution's optical rotation from dextrorotatory to levorotatory.",
    "Sugar cane and sugar beet supply nearly all commercial sucrose, despite being botanically very different plants (a grass and a root vegetable, respectively).",
    "Caramelization of sucrose begins around 170–186 °C and involves entirely different chemistry from the Maillard browning reaction, which requires amino acids.",
  ],

  history: `Sucrose has been extracted and consumed since antiquity, with sugar cane cultivation and processing dating back thousands of years in South and Southeast Asia before spreading through trade routes to the Mediterranean and eventually the Americas. Its chemical structure as a glucose-fructose disaccharide was elucidated in the 19th century as carbohydrate chemistry matured, and the industrial development of sugar beet as an alternative source in 19th-century Europe reduced dependence on tropical sugar cane imports.`,

  discovery: "Cultivated and processed since ancient times in South Asia; its precise disaccharide structure (glucose linked to fructose) was established through 19th-century carbohydrate chemistry research.",

  examNotes: [
    "Molar mass C₁₂H₂₂O₁₁ = 12(12.01) + 22(1.008) + 11(16.00) = 342.30 g/mol.",
    "Hydrolysis equation: C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose) — memorize for disaccharide stoichiometry problems.",
    "Sucrose is non-reducing (negative Tollens'/Fehling's test); glucose and fructose alone are both reducing sugars (positive test).",
    "Sucrose's glycosidic bond links both anomeric carbons (glucose C1 and fructose C2), unlike lactose or maltose, which retain one free anomeric carbon.",
  ],

  commonMistakes: [
    "Forgetting to add the water molecule mass when converting between sucrose and its hydrolysis products in stoichiometry problems.",
    "Assuming sucrose will give a positive Fehling's or Tollens' test like glucose — it will not, unless hydrolyzed first, because it is non-reducing.",
    "Confusing sucrose (glucose + fructose) with lactose (glucose + galactose) or maltose (glucose + glucose) — all are disaccharides with the same overall formula but different monosaccharide components and linkages.",
  ],

  studentTips: [
    "Draw out the hydrolysis reaction (sucrose + water → glucose + fructose) to visually reinforce why sucrose's formula is exactly one water molecule less than the sum of its two monosaccharides.",
    "Use the non-reducing property as your go-to way to distinguish sucrose from glucose, fructose, lactose, and maltose in identification-test questions.",
    "Remember 342 g/mol (sucrose) is exactly double 171 minus a bit — but more usefully, it's the sum of two 180 g/mol hexoses minus one 18 g/mol water.",
  ],

  misconceptions: [
    "Sucrose is not simply 'glucose and fructose mixed together' — it is a single covalently bonded molecule that must be hydrolyzed to release the free monosaccharides.",
    "'Sugar' in casual speech usually means sucrose, but chemically, sugar is a broad category including glucose, fructose, lactose, and many other saccharides with very different structures and properties.",
    "High-fructose corn syrup is not chemically identical to sucrose — it is a separate mixture of free glucose and fructose in varying ratios, not a disaccharide with a glycosidic bond.",
  ],

  physical: {
    appearance: "White crystalline solid",
    color: "White (pure); brown when combined with residual molasses (brown sugar)",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "1.587 g/cm³ (25 °C)",
    meltingPoint: "186 °C (decomposes/caramelizes on further heating)",
    boilingPoint: "Decomposes before boiling at atmospheric pressure",
    solubility: "2,000 g/L water at 25 °C (highly soluble, increasing markedly with temperature)",
    crystalStructure: "Monoclinic",
  },

  chemical: {
    classification: "Disaccharide carbohydrate (non-reducing sugar)",
    polarity: "Highly polar (multiple hydroxyl groups; extensive hydrogen bonding)",
    molecularGeometry: "Two fused pyranose/furanose ring systems joined by a glycosidic bond",
    oxidationStates: "C: variable by position (typically 0 to +1 within the ring carbons)",
    chemicalFamily: "Disaccharides (glucose-fructose glycoside)",
  },

  reactions: [
    {
      equation: "C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆",
      type: "Hydrolysis (acid- or enzyme-catalyzed)",
      conditions: "Dilute acid and heat, or the enzyme invertase (sucrase) at physiological temperature",
      explanation: "The glycosidic bond joining glucose and fructose is cleaved by water, releasing the two free monosaccharides — the essential digestive reaction and the industrial basis of invert sugar production.",
      products: "Glucose and fructose (1:1 mixture, invert sugar)",
      applications: "Digestion of dietary sucrose, confectionery invert sugar production, enzyme kinetics studies",
      relatedConcepts: ["Glycosidic bond hydrolysis", "Enzyme catalysis", "Optical rotation (inversion)"],
    },
    {
      equation: "C₁₂H₂₂O₁₁ →(heat, no water) caramelization products",
      type: "Thermal decomposition (caramelization)",
      conditions: "Heating above ~170–186 °C without added water",
      explanation: "Molten sucrose undergoes complex dehydration, fragmentation, and polymerization reactions producing hundreds of flavor and color compounds responsible for caramel's taste and brown color.",
      products: "Complex mixture of caramelization flavor and color compounds",
      applications: "Caramel and confectionery production, food science and flavor chemistry",
      relatedConcepts: ["Thermal decomposition", "Flavor chemistry", "Non-enzymatic browning"],
    },
    {
      equation: "C₁₂H₂₂O₁₁(s) → 12 C(s) + 11 H₂O(l) [catalyzed by H₂SO₄]",
      type: "Dehydration",
      conditions: "Concentrated sulfuric acid, room temperature",
      explanation: "Concentrated sulfuric acid strips water directly from sucrose, leaving behind a dramatic rising column of nearly pure carbon in a classic and visually striking chemistry demonstration.",
      products: "Carbon and water",
      applications: "Classic classroom dehydration demonstration illustrating the power of concentrated sulfuric acid",
      relatedConcepts: ["Dehydration reactions", "Concentrated acid chemistry", "Carbohydrate decomposition"],
    },
    {
      equation: "C₁₂H₂₂O₁₁ + 12 O₂ → 12 CO₂ + 11 H₂O",
      type: "Combustion (complete oxidation)",
      conditions: "Ignition, excess oxygen (or biological respiration pathway)",
      explanation: "Complete oxidation of sucrose releases stored chemical energy as heat and carbon dioxide, mirroring (in overall stoichiometry) the biological respiration pathway that metabolizes dietary sugar for energy.",
      products: "Carbon dioxide and water",
      applications: "Bomb calorimetry of food energy content, biological respiration energy accounting",
      relatedConcepts: ["Combustion", "Bioenergetics", "Thermochemistry"],
    },
  ],

  relatedFormulas: ["C6H12O6", "H2O", "C2H6O", "H2SO4", "CaCO3"],
  comparisonNote: "Sucrose (C₁₂H₂₂O₁₁, 342.30 g/mol, non-reducing disaccharide) is exactly one water molecule short of the combined mass of its two component monosaccharides, glucose and fructose (each C₆H₁₂O₆, 180.16 g/mol); unlike glucose alone, sucrose gives a negative result on standard reducing-sugar identification tests.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of sucrose, C₁₂H₂₂O₁₁.",
      answer: "12(12.01) + 22(1.008) + 11(16.00) = 342.30 g/mol",
    },
    {
      question: "What mass of glucose and fructose combined is produced from the complete hydrolysis of 342 g of sucrose?",
      answer: "342 g sucrose ÷ 342.30 g/mol ≈ 1.0 mol sucrose + 1.0 mol water → 1.0 mol glucose (180.16 g) + 1.0 mol fructose (180.16 g) ≈ 360.3 g total",
      hint: "Remember hydrolysis adds one water molecule's worth of mass to the products compared to the starting sucrose.",
    },
    {
      question: "Why does sucrose give a negative result on the Tollens' test while glucose gives a positive result?",
      answer: "Sucrose's glycosidic bond locks both potential reducing (anomeric) carbons, leaving no free aldehyde/hemiacetal group to be oxidized, unlike free glucose.",
    },
    {
      question: "Why is the hydrolysis of sucrose called 'inversion'?",
      answer: "It reverses the solution's net optical rotation from dextrorotatory (sucrose) to levorotatory (the glucose-fructose mixture), because fructose's strong negative rotation outweighs glucose's weaker positive rotation.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sucrose?",
      answer: "342.30 g/mol, calculated as 12 × 12.01 (C) + 22 × 1.008 (H) + 11 × 16.00 (O).",
    },
    {
      question: "What is sucrose made of?",
      answer: "One molecule of glucose and one molecule of fructose joined by a glycosidic bond, with the loss of one water molecule during formation.",
    },
    {
      question: "Is sucrose a reducing sugar?",
      answer: "No. Sucrose is a non-reducing sugar because its glycosidic bond involves both monosaccharides' anomeric carbons, leaving no free reactive carbonyl group.",
    },
    {
      question: "How is table sugar different from glucose or fructose?",
      answer: "Table sugar (sucrose) is a disaccharide combining one glucose and one fructose unit, while glucose and fructose are simple monosaccharides that exist as sucrose's hydrolysis products.",
    },
    {
      question: "Where does commercial sugar come from?",
      answer: "Almost entirely from sugar cane and sugar beet, which accumulate high concentrations of sucrose that are extracted, purified, and crystallized industrially.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of sucrose" },
    { label: "PubChem CID 5988", note: "Structural and identifier data for sucrose" },
    { label: "USDA", note: "Global sugar cane and sugar beet production statistics" },
  ],
};
