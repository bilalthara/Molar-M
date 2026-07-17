import type { CompoundProfile } from "@/lib/chemistry/types";

export const salicylicAcid: CompoundProfile = {
  slug: "molar-mass-of-salicylic-acid",
  formula: "C7H6O3",
  name: "Salicylic Acid",
  iupacName: "2-Hydroxybenzoic acid",
  commonNames: ["Salicylic acid", "2-Hydroxybenzoic acid"],
  aliases: ["C₇H₆O₃", "o-Hydroxybenzoic acid"],
  category: "organic",
  categories: ["organic", "acid"],
  casNumber: "69-72-7",
  pubchemCid: "338",
  smiles: "C1=CC=C(C(=C1)C(=O)O)O",
  inchi: "InChI=1S/C7H6O3/c8-6-4-2-1-3-5(6)7(9)10/h1-4,8H,(H,9,10)",
  exactMass: 138.031694,
  featured: true,
  popular: true,

  overview: `Salicylic acid (C₇H₆O₃) is an aromatic hydroxy acid with molar mass 138.12 g/mol (C 7 × 12.01 + H 6 × 1.008 + O 3 × 16.00), consisting of a benzene ring bearing both a carboxylic acid group and an adjacent (ortho) hydroxyl group. This ortho arrangement allows an internal hydrogen bond between the two functional groups, which strengthens the acid (pKa 2.97, notably more acidic than benzoic acid's 4.20) and lowers its melting point and volatility relative to the meta and para hydroxybenzoic acid isomers.

Salicylic acid is best known as the direct chemical precursor to aspirin: reacting it with acetic anhydride acetylates the phenolic hydroxyl group to produce acetylsalicylic acid, converting a locally irritating compound into the far gentler, widely tolerated analgesic that transformed medicine in the late 19th century. Salicylic acid itself remains in wide topical use — its keratolytic action (breaking down the protein bonds that hold dead skin cells together) makes it a mainstay ingredient in acne treatments, wart removers, dandruff shampoos, and corn/callus plasters, working by gently dissolving the outer layer of hardened or excess skin.

Beyond pharmacology, salicylic acid connects to plant biology as a close chemical relative of the plant hormone system: plants synthesize salicylic acid and its derivatives as signaling molecules that trigger systemic acquired resistance, priming the plant's defenses against pathogens — a role echoing willow bark's ancient use as a folk remedy, since salicylic acid derivatives (salicin) occur naturally in willow (Salix) bark and were the original source from which the compound takes its name.`,

  formulaExplanation: `C₇H₆O₃ contains a benzene ring with two substituents in the ortho (1,2) relationship: a carboxylic acid (–COOH) and a hydroxyl (–OH) group. This close spatial arrangement permits an intramolecular hydrogen bond between the hydroxyl oxygen and the carbonyl oxygen of the carboxyl group, a structural feature that distinguishes salicylic acid's chemistry and physical properties from its meta- and para-hydroxybenzoic acid isomers, which share the same molecular formula but cannot form this internal bond.`,

  chemicalProfile: `Salicylic acid is a weak monoprotic acid at its carboxyl group (pKa 2.97) with a separately, much more weakly acidic phenolic hydroxyl (pKa ~13.4). It undergoes esterification at the carboxyl group (methyl salicylate, oil of wintergreen) and acetylation at the hydroxyl group (aspirin synthesis) — two different reactive sites giving two very different classes of derivatives. It gives a characteristic purple-violet color with ferric chloride solution, a classic qualitative test for phenolic compounds.`,

  uniqueTopics: [
    {
      heading: "Direct precursor to aspirin",
      body: "Treating salicylic acid with acetic anhydride (or acetyl chloride) acetylates its phenolic hydroxyl group, converting it into acetylsalicylic acid — aspirin. This single-step transformation, industrialized by Bayer chemist Felix Hoffmann in 1897, converts a compound that is quite irritating to the stomach lining into a far better-tolerated analgesic, illustrating how a small structural change can dramatically alter a drug's side-effect profile while preserving its core therapeutic action.",
    },
    {
      heading: "Keratolytic action in dermatology",
      body: "Salicylic acid's keratolytic effect — its ability to loosen and dissolve the protein bonds (desmosomes) holding together the outermost layer of dead skin cells — underlies its widespread use in acne treatments, wart and corn removers, and anti-dandruff shampoos. Unlike many acids that simply burn tissue, salicylic acid's lipophilicity lets it penetrate the oily, keratin-rich outer skin layer effectively at relatively low, well-tolerated concentrations.",
    },
    {
      heading: "Salicylic acid as a plant defense hormone",
      body: "Plants naturally biosynthesize salicylic acid as a signaling hormone that activates systemic acquired resistance, a plant-wide defense response triggered after localized pathogen attack that primes distant tissues to resist subsequent infection. This endogenous plant role predates and is chemically connected to willow bark's traditional use as a pain-relief remedy, since willow trees are rich in salicin, a natural glycoside that metabolizes to salicylic acid in the body.",
    },
    {
      heading: "Ortho-substitution and intramolecular hydrogen bonding",
      body: "Because the hydroxyl and carboxyl groups sit adjacent to each other on the ring, salicylic acid forms an internal hydrogen bond that is absent in its meta- and para-isomers (3- and 4-hydroxybenzoic acid). This intramolecular bonding increases the compound's acidity, reduces its melting point relative to what would otherwise be expected, and reduces its tendency to form strong intermolecular hydrogen bonds with water, affecting solubility.",
    },
    {
      heading: "Ferric chloride test for phenols",
      body: "Adding a few drops of ferric chloride solution to salicylic acid produces an intense purple-to-violet color, a classic qualitative organic chemistry test that identifies phenolic –OH groups; the color arises from formation of a colored iron-phenolate coordination complex and is used to distinguish phenols from simple alcohols and carboxylic acids lacking a phenol group.",
    },
  ],

  applications: {
    industrial: [
      "Aspirin (acetylsalicylic acid) synthesis feedstock",
      "Acne, wart, and callus treatment formulations (keratolytic agent)",
      "Dandruff shampoo and dermatological product active ingredient",
      "Preservative and precursor in dye and resin manufacturing",
    ],
    laboratory: [
      "Classic organic chemistry esterification and acetylation teaching reaction (aspirin synthesis)",
      "Ferric chloride qualitative test for phenolic functional groups",
      "Chromatography and melting point standard reference compound",
    ],
    biological: "Naturally occurring plant defense hormone triggering systemic acquired resistance; topically active keratolytic agent in human dermatology.",
  },

  preparation: `Industrially produced by carboxylation of phenol via the Kolbe–Schmitt reaction: sodium phenoxide reacts with carbon dioxide under heat and pressure, followed by acidification to yield salicylic acid. It can also be obtained by hydrolysis of methyl salicylate (oil of wintergreen) or oxidation of salicylaldehyde.`,

  production: `Global production supplies both the pharmaceutical sector (as aspirin precursor) and the larger dermatological and cosmetic ingredient market; production is dominated by the Kolbe–Schmitt carboxylation route from phenol and CO₂.`,

  storage: `Store in a cool, dry place away from light in tightly closed containers. Stable under normal conditions; avoid strong oxidizers and bases that could hydrolyze or otherwise alter the compound over long storage.`,

  handling: `Mild irritant to skin, eyes, and respiratory tract at high concentrations or as dust. Use gloves and eye protection when handling concentrated solutions or bulk powder; avoid excessive topical application given systemic absorption risk (salicylate toxicity) at high doses.`,

  safety: {
    summary: "Generally safe at approved topical dermatological concentrations; excessive or widespread topical use, or oral ingestion, can cause salicylate toxicity.",
    hazards: [
      "Skin, eye, and respiratory irritation from concentrated powder or solution",
      "Salicylate toxicity (nausea, tinnitus, hyperventilation) if ingested in quantity or over-applied topically",
      "Reye's syndrome risk in children when related salicylates are taken during viral illness",
    ],
    classification: "GHS: Skin Irrit. 2, Eye Irrit. 2 (concentrated material); topical formulations regulated as OTC drug products",
  },

  interestingFacts: [
    "Salicylic acid takes its name from Salix, the botanical genus of willow trees, whose bark contains the natural precursor salicin.",
    "Aspirin was developed specifically to reduce the gastric irritation caused by salicylic acid itself, while retaining its pain-relief action.",
    "Plants use salicylic acid as an internal chemical signal to warn distant tissues of an ongoing pathogen attack.",
    "The ferric chloride test turns salicylic acid solutions a striking violet-purple, a reaction still used to identify phenolic compounds in teaching labs.",
  ],

  history: `Willow bark extracts containing salicin were used medicinally in ancient Egypt, Greece (Hippocrates recommended willow leaf tea for pain and fever), and other traditional medicine systems for millennia. Johann Andreas Buchner isolated salicin in 1828, and Raffaele Piria converted it to salicylic acid in 1838. Hermann Kolbe achieved the first synthetic route in 1859, enabling industrial-scale production that eventually fed Felix Hoffmann's 1897 synthesis of acetylsalicylic acid (aspirin) at Bayer.`,

  discovery: "Salicin isolated by Johann Andreas Buchner in 1828; salicylic acid derived from it by Raffaele Piria in 1838; first synthesized industrially by Hermann Kolbe in 1859.",

  examNotes: [
    "Molar mass C₇H₆O₃ = 7(12.01) + 6(1.008) + 3(16.00) = 138.12 g/mol.",
    "Carboxyl group pKa ≈ 2.97 (stronger than benzoic acid's 4.20 due to intramolecular hydrogen bonding effects).",
    "Two distinct reactive sites: carboxyl (esterification) and phenolic hydroxyl (acetylation, ether formation).",
    "Aspirin synthesis: C₇H₆O₃ + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH.",
  ],

  commonMistakes: [
    "Confusing salicylic acid (C₇H₆O₃, 138.12 g/mol) with acetylsalicylic acid/aspirin (C₉H₈O₄, 180.16 g/mol) — related but distinct compounds.",
    "Assuming all hydroxybenzoic acid isomers behave identically — only the ortho (salicylic) isomer forms the stabilizing intramolecular hydrogen bond.",
    "Overestimating topical safety — large-area or prolonged use can lead to systemic salicylate absorption and toxicity.",
  ],

  studentTips: [
    "Identify the ortho relationship between –OH and –COOH to explain salicylic acid's distinctive acidity and hydrogen bonding.",
    "Remember: acetylation happens at the hydroxyl group to make aspirin, not at the carboxyl group.",
    "Use the ferric chloride color test as your mental shortcut for recognizing phenolic character in an unknown organic compound.",
  ],

  misconceptions: [
    "Salicylic acid and aspirin are not the same compound — aspirin is a synthetic acetylated derivative with different pharmacological tolerability.",
    "Willow bark remedies are not 'natural aspirin' in a literal sense — they contain salicin, which the body converts toward salicylic acid, not acetylsalicylic acid directly.",
    "Topical salicylic acid products are not risk-free simply because they are applied externally — systemic absorption is possible with heavy or prolonged use.",
  ],

  physical: {
    appearance: "White to off-white crystalline powder or needle-like crystals",
    color: "White",
    odor: "Odorless (pure); faint characteristic odor in technical grade",
    stateAtSTP: "Solid",
    density: "1.44 g/cm³",
    meltingPoint: "159 °C",
    boilingPoint: "211 °C (sublimes/decomposes before true boiling at standard pressure)",
    solubility: "2.0 g/L water at 20 °C; freely soluble in ethanol and ether",
    crystalStructure: "Monoclinic",
  },

  chemical: {
    classification: "Aromatic hydroxy acid / phenolic carboxylic acid",
    acidity: "Weak monoprotic acid at carboxyl (pKa 2.97); very weak phenolic acidity (pKa ~13.4)",
    polarity: "Polar (hydrogen-bonding hydroxyl and carboxyl groups)",
    molecularGeometry: "Planar aromatic ring with coplanar substituents (intramolecular H-bonding)",
    oxidationStates: "Not typically described by oxidation states (organic covalent compound)",
    chemicalFamily: "Hydroxybenzoic acids / phenolic acids",
  },

  reactions: [
    {
      equation: "C₇H₆O₃ + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH",
      type: "Acetylation (esterification of phenolic OH)",
      conditions: "Acetic anhydride, acid catalyst (H₂SO₄ or H₃PO₄), heat",
      explanation: "Acetic anhydride acetylates the phenolic hydroxyl group of salicylic acid to produce acetylsalicylic acid (aspirin) and acetic acid byproduct.",
      products: "Acetylsalicylic acid (aspirin) and acetic acid",
      applications: "Industrial and laboratory aspirin synthesis",
      relatedConcepts: ["Acetylation", "Esterification", "Pharmaceutical synthesis"],
    },
    {
      equation: "C₇H₆O₃ + CH₃OH ⇌ C₈H₈O₃ (methyl salicylate) + H₂O",
      type: "Fischer esterification (carboxyl group)",
      conditions: "Acid catalyst, methanol, heat",
      explanation: "The carboxylic acid group condenses with methanol to form methyl salicylate, the compound responsible for the characteristic wintergreen scent used in liniments and flavorings.",
      products: "Methyl salicylate (oil of wintergreen) and water",
      applications: "Flavoring and topical liniment production",
      relatedConcepts: ["Esterification", "Equilibrium", "Organic synthesis"],
    },
    {
      equation: "C₇H₆O₃ + NaOH → C₇H₅O₃Na + H₂O",
      type: "Acid–base neutralization",
      conditions: "Aqueous, equimolar",
      explanation: "The carboxylic acid group is neutralized by strong base to form soluble sodium salicylate, more water-soluble than the parent acid.",
      products: "Sodium salicylate and water",
      applications: "Solubility enhancement, historical antipyretic formulations",
      relatedConcepts: ["Neutralization", "Salt formation", "Solubility"],
    },
    {
      equation: "C₇H₆O₃ + FeCl₃ → Violet-colored iron-phenolate complex",
      type: "Complex ion formation (qualitative test)",
      conditions: "Dilute aqueous ferric chloride, room temperature",
      explanation: "The phenolic hydroxyl group coordinates with Fe³⁺ to form an intensely colored complex, a diagnostic test for phenolic functionality.",
      products: "Colored iron(III)-phenolate complex",
      applications: "Qualitative organic analysis, phenol identification",
      relatedConcepts: ["Coordination chemistry", "Qualitative analysis", "Phenol chemistry"],
    },
  ],

  relatedFormulas: ["C9H8O4", "C8H8O3", "C6H5COOH", "C7H6O2", "C6H8O6"],
  comparisonNote: "Salicylic acid (C₇H₆O₃, 138.12 g/mol, pKa 2.97) is more acidic than benzoic acid (C₆H₅COOH, 122.12 g/mol, pKa 4.20) because the ortho hydroxyl group's intramolecular hydrogen bonding and inductive effect stabilize the carboxylate conjugate base.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of salicylic acid (C₇H₆O₃).",
      answer: "7(12.01) + 6(1.008) + 3(16.00) = 138.12 g/mol",
    },
    {
      question: "How many grams of aspirin can theoretically form from 13.81 g of salicylic acid with excess acetic anhydride?",
      answer: "13.81 g ÷ 138.12 g/mol = 0.100 mol salicylic acid → 0.100 mol aspirin × 180.16 g/mol = 18.02 g (theoretical yield)",
    },
    {
      question: "Why is salicylic acid a stronger acid than benzoic acid?",
      answer: "The ortho hydroxyl group forms an intramolecular hydrogen bond and exerts an inductive effect that stabilizes the negative charge on the conjugate base, increasing acidity (lower pKa).",
    },
    {
      question: "What color does salicylic acid give with ferric chloride, and what does this indicate?",
      answer: "A violet-purple color, indicating the presence of a phenolic hydroxyl group.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of salicylic acid?",
      answer: "138.12 g/mol.",
    },
    {
      question: "Is salicylic acid the same as aspirin?",
      answer: "No — salicylic acid is the precursor compound; acetylating its hydroxyl group produces aspirin (acetylsalicylic acid), a distinct compound.",
    },
    {
      question: "Why is salicylic acid used in acne treatments?",
      answer: "Its keratolytic action loosens the bonds between dead skin cells, helping unclog pores and shed excess skin buildup.",
    },
    {
      question: "Does willow bark contain salicylic acid directly?",
      answer: "Willow bark contains salicin, a glycoside that the body metabolizes toward salicylic acid, rather than the free acid itself.",
    },
    {
      question: "Is salicylic acid found naturally in plants?",
      answer: "Yes — plants produce it as a signaling hormone that activates systemic disease resistance.",
    },
  ],

  references: [
    { label: "PubChem CID 338", note: "Salicylic acid compound data" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
    { label: "Royal Pharmaceutical Society", note: "Salicylate pharmacology and history" },
  ],
};
