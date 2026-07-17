import type { CompoundProfile } from "@/lib/chemistry/types";

export const aspirin: CompoundProfile = {
  slug: "molar-mass-of-aspirin",
  formula: "C9H8O4",
  name: "Aspirin",
  iupacName: "2-Acetoxybenzoic acid",
  commonNames: ["Aspirin", "Acetylsalicylic acid", "ASA"],
  aliases: ["C₉H₈O₄", "2-(Acetyloxy)benzoic acid"],
  category: "organic",
  categories: ["organic", "acid"],
  casNumber: "50-78-2",
  pubchemCid: "2244",
  smiles: "CC(=O)OC1=CC=CC=C1C(=O)O",
  inchi: "InChI=1S/C9H8O4/c1-6(10)11-8-5-3-2-4-7(8)9(12)13/h2-5H,1H3,(H,12,13)",
  exactMass: 180.042259,
  featured: true,
  popular: true,

  overview: `Aspirin, chemically acetylsalicylic acid (C₉H₈O₄), has molar mass 180.16 g/mol (C 9 × 12.01 + H 8 × 1.008 + O 4 × 16.00) and is produced by acetylating the phenolic hydroxyl group of salicylic acid with acetic anhydride. This single acetyl substitution transforms a compound that is notably irritating to the stomach lining into one of the most widely used and best-tolerated medicines in history, while retaining and even extending its pharmacological versatility as an analgesic, antipyretic, anti-inflammatory, and antiplatelet agent.

Aspirin's therapeutic effects trace to a single, precisely understood molecular mechanism: it irreversibly acetylates a serine residue in the active site of cyclooxygenase (COX) enzymes, permanently blocking their ability to convert arachidonic acid into prostaglandins and thromboxanes. Because COX-1 in platelets cannot synthesize new enzyme (platelets lack a nucleus), a single aspirin dose suppresses platelet aggregation for the platelet's entire ~10-day lifespan — the pharmacological basis for aspirin's use in low-dose regimens to prevent heart attacks and strokes, a role entirely distinct from its higher-dose use as a pain and fever reliever.

First marketed by Bayer in 1899 following Felix Hoffmann's synthesis, aspirin remains chemically simple yet mechanistically rich enough to have earned John Vane a share of the 1982 Nobel Prize in Physiology or Medicine for elucidating its prostaglandin-based mode of action decades after its introduction. In aqueous or humid storage conditions, aspirin slowly hydrolyzes back into salicylic acid and acetic acid — the source of the faint vinegar-like smell sometimes detected in old, degraded tablets — a reminder that its ester linkage, while pharmacologically crucial, is also its chemical vulnerability.`,

  formulaExplanation: `C₉H₈O₄ represents salicylic acid's benzene ring with an acetyl ester (–OCOCH₃) replacing the original phenolic hydroxyl, alongside the unmodified carboxylic acid group. The formula reflects two distinct oxygen-containing functional groups: an ester linkage (from acetylation) and a carboxylic acid, both attached to the aromatic ring in an ortho relationship inherited from the salicylic acid precursor.`,

  chemicalProfile: `Aspirin is a weak monoprotic acid at its carboxyl group (pKa 3.5) and is chemically an ester at its acetyl-oxygen linkage, making it susceptible to hydrolysis in moist conditions or basic solution, reverting to salicylic acid and acetic acid. It reacts with bases to form soluble acetylsalicylate salts, and its irreversible acetylation of the COX enzyme's active-site serine residue (via nucleophilic attack transferring the acetyl group) is the molecular basis of its pharmacological action — chemically identical in principle to esterase-mediated acetyl transfer reactions elsewhere in organic chemistry.`,

  uniqueTopics: [
    {
      heading: "Irreversible COX acetylation: aspirin's unique mechanism",
      body: "Unlike most other NSAIDs, which reversibly inhibit cyclooxygenase enzymes, aspirin permanently acetylates a specific serine residue (Ser530 in COX-1) in the enzyme's active site, covalently and irreversibly blocking arachidonic acid access. This irreversible chemistry is why aspirin's antiplatelet effect lasts for the entire lifespan of an affected platelet (about 7–10 days) rather than wearing off within hours like reversible COX inhibitors.",
    },
    {
      heading: "From salicylic acid: a one-step acetylation success story",
      body: "Felix Hoffmann's 1897 synthesis at Bayer simply acetylated the phenolic hydroxyl of salicylic acid using acetic anhydride, masking the structural feature responsible for salicylic acid's gastric irritation while preserving the core aromatic-acid pharmacophore responsible for its anti-inflammatory action — a landmark early example of rational prodrug-style structural modification improving a known active compound's tolerability.",
    },
    {
      heading: "Low-dose cardioprotection vs. high-dose analgesia",
      body: "Aspirin's clinical use spans a striking dose-dependent range: low daily doses (75–100 mg) selectively and durably suppress platelet thromboxane production for cardiovascular protection, while much higher doses (300–1000 mg) are needed for meaningful pain relief and fever reduction by more broadly inhibiting prostaglandin synthesis throughout the body — illustrating how the same molecule and mechanism can be tuned by dose to very different therapeutic ends.",
    },
    {
      heading: "Hydrolytic instability and the vinegar smell of old tablets",
      body: "Aspirin's ester linkage slowly hydrolyzes in the presence of moisture, especially at elevated temperature or humidity, breaking down into salicylic acid and acetic acid. This is why expired or improperly stored aspirin tablets sometimes develop a faint vinegar-like odor, and why pharmaceutical aspirin formulations require careful moisture control and defined shelf-life testing.",
    },
    {
      heading: "Reye's syndrome and pediatric use restrictions",
      body: "Aspirin use in children and teenagers recovering from viral illnesses such as influenza or chickenpox is linked to Reye's syndrome, a rare but potentially fatal condition involving acute liver and brain swelling. This association, established through epidemiological studies in the late 1970s and 1980s, led to widespread public health warnings and the near-universal substitution of acetaminophen or ibuprofen for fever and pain relief in pediatric populations.",
    },
  ],

  applications: {
    industrial: [
      "Pharmaceutical manufacturing (analgesic, antipyretic, anti-inflammatory tablets)",
      "Low-dose antiplatelet formulations for cardiovascular disease prevention",
      "Precursor and reference compound in medicinal chemistry research",
      "Combination formulations with caffeine or other analgesics",
    ],
    laboratory: [
      "Classic undergraduate organic chemistry synthesis and recrystallization exercise",
      "Model compound for ester hydrolysis kinetics studies",
      "Reference standard for pharmaceutical quality control and dissolution testing",
    ],
    biological: "Irreversibly inhibits cyclooxygenase (COX-1 and COX-2) enzymes, reducing prostaglandin and thromboxane synthesis; used for pain relief, fever reduction, inflammation control, and long-term cardiovascular event prevention.",
  },

  preparation: `Synthesized by reacting salicylic acid with acetic anhydride in the presence of a small amount of acid catalyst (sulfuric or phosphoric acid), which acetylates the phenolic hydroxyl group. The crude product is purified by recrystallization, typically from ethanol-water mixtures, to yield pharmaceutical-grade acetylsalicylic acid crystals.`,

  production: `Global aspirin production is estimated in the tens of thousands of tonnes annually, supplying both over-the-counter analgesic markets and the large and growing low-dose cardiovascular prophylaxis market.`,

  storage: `Store in a cool, dry place in tightly sealed, moisture-resistant packaging to minimize hydrolytic degradation. Discard tablets that develop a strong vinegar-like odor, indicating significant breakdown to salicylic and acetic acid.`,

  handling: `Generally safe at recommended pharmaceutical doses; handle bulk powder with standard gloves and avoid inhaling dust. Overdose or hypersensitivity reactions require medical attention; avoid use in children with viral illness due to Reye's syndrome risk.`,

  safety: {
    summary: "Safe and effective at recommended therapeutic doses; overdose can cause salicylate toxicity, and use is contraindicated or restricted in certain populations (children with viral illness, some bleeding disorders).",
    hazards: [
      "Gastrointestinal irritation and bleeding risk, especially with prolonged or high-dose use",
      "Salicylate toxicity (tinnitus, hyperventilation, metabolic acidosis) with overdose",
      "Reye's syndrome risk in children and teenagers with viral illness",
      "Increased bleeding risk due to antiplatelet effect",
    ],
    classification: "Regulated as an over-the-counter and prescription drug product; not classified as an industrial hazardous chemical at pharmaceutical-grade use levels",
  },

  interestingFacts: [
    "Aspirin's antiplatelet effect from a single dose can last the entire 7–10 day lifespan of an affected platelet because it acetylates the enzyme irreversibly.",
    "John Vane won a share of the 1982 Nobel Prize in Physiology or Medicine for discovering how aspirin inhibits prostaglandin synthesis, nearly a century after the drug's introduction.",
    "Willow bark, aspirin's distant natural ancestor, was used for pain relief as far back as ancient Egyptian and Greek medicine.",
    "Bayer's trademark 'Aspirin' name became so widely used that it was declared a generic term in several countries following World War I reparations agreements.",
  ],

  history: `Felix Hoffmann, working at Bayer, first synthesized a stable, pure form of acetylsalicylic acid in 1897, building on decades of prior salicylic acid chemistry dating to Charles Frédéric Gerhardt's 1853 synthesis. Bayer marketed the compound as Aspirin starting in 1899, and it quickly became one of the most widely used drugs in the world. Its mechanism of action remained a mystery until John Vane's landmark 1971 discovery that aspirin inhibits prostaglandin synthesis via cyclooxygenase, work that earned him a share of the 1982 Nobel Prize.`,

  discovery: "Felix Hoffmann, Bayer, 1897 — synthesized a stable, purified form of acetylsalicylic acid; mechanism of action elucidated by John Vane in 1971.",

  examNotes: [
    "Molar mass C₉H₈O₄ = 9(12.01) + 8(1.008) + 4(16.00) = 180.16 g/mol.",
    "Synthesis: C₇H₆O₃ (salicylic acid) + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH.",
    "Aspirin irreversibly acetylates a serine residue in cyclooxygenase, distinguishing it from reversible NSAIDs.",
    "Hydrolysis: C₉H₈O₄ + H₂O → C₇H₆O₃ + CH₃COOH (reverts to salicylic and acetic acid).",
  ],

  commonMistakes: [
    "Confusing aspirin (C₉H₈O₄, 180.16 g/mol) with its precursor salicylic acid (C₇H₆O₃, 138.12 g/mol) — related but chemically distinct compounds.",
    "Assuming aspirin reversibly inhibits COX like ibuprofen or naproxen — its acetylation mechanism is irreversible.",
    "Overlooking that low-dose and high-dose aspirin serve very different therapeutic purposes (cardioprotection vs. analgesia).",
  ],

  studentTips: [
    "Draw the acetyl ester group replacing the phenolic OH to visualize exactly how aspirin differs from salicylic acid.",
    "Remember 'irreversible acetylation' as aspirin's key differentiator from other NSAIDs on any pharmacology exam.",
    "Link the vinegar smell of old aspirin directly to ester hydrolysis producing acetic acid — a great real-world example of hydrolysis kinetics.",
  ],

  misconceptions: [
    "Aspirin is not simply 'concentrated willow bark extract' — it is a distinct synthetic acetylated compound, chemically different from the natural salicin precursor.",
    "Aspirin's blood-thinning effect is not identical to prescription anticoagulants like warfarin — it works by inhibiting platelet aggregation, not by blocking the clotting factor cascade.",
    "Not all forms of aspirin are dosed the same way — low-dose 'baby aspirin' regimens and standard analgesic doses serve very different medical purposes.",
  ],

  physical: {
    appearance: "White crystalline powder or needle-like crystals",
    color: "White",
    odor: "Odorless when pure; faint vinegar odor when degraded",
    stateAtSTP: "Solid",
    density: "1.40 g/cm³",
    meltingPoint: "135 °C",
    boilingPoint: "140 °C (decomposes)",
    solubility: "3 g/L water at 25 °C; more soluble in ethanol and ether",
    crystalStructure: "Monoclinic",
  },

  chemical: {
    classification: "Aromatic ester / carboxylic acid (NSAID)",
    acidity: "Weak monoprotic acid (pKa ≈ 3.5, carboxyl group)",
    polarity: "Polar (ester and carboxyl functional groups)",
    molecularGeometry: "Planar aromatic ring with attached ester and carboxyl substituents",
    oxidationStates: "Not typically described by oxidation states (organic covalent compound)",
    chemicalFamily: "Salicylate esters / nonsteroidal anti-inflammatory drugs (NSAIDs)",
  },

  reactions: [
    {
      equation: "C₇H₆O₃ + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH",
      type: "Acetylation (synthesis reaction)",
      conditions: "Acid catalyst (H₂SO₄ or H₃PO₄), mild heat",
      explanation: "Acetic anhydride acetylates the phenolic hydroxyl group of salicylic acid to produce acetylsalicylic acid (aspirin) and acetic acid byproduct.",
      products: "Acetylsalicylic acid (aspirin) and acetic acid",
      applications: "Industrial and classroom aspirin synthesis",
      relatedConcepts: ["Acetylation", "Esterification", "Pharmaceutical synthesis"],
    },
    {
      equation: "C₉H₈O₄ + H₂O → C₇H₆O₃ + CH₃COOH",
      type: "Ester hydrolysis (degradation)",
      conditions: "Moisture, heat, or basic conditions accelerate the reaction",
      explanation: "Aspirin's ester linkage hydrolyzes over time, especially in humid storage, reverting to salicylic acid and acetic acid and reducing potency.",
      products: "Salicylic acid and acetic acid",
      applications: "Shelf-life and stability testing, pharmaceutical quality control",
      relatedConcepts: ["Ester hydrolysis", "Degradation kinetics", "Pharmaceutical stability"],
    },
    {
      equation: "C₉H₈O₄ + NaOH → C₉H₇O₄Na + H₂O",
      type: "Acid–base neutralization",
      conditions: "Aqueous, equimolar",
      explanation: "The carboxylic acid group of aspirin is neutralized by strong base to form the more water-soluble sodium acetylsalicylate salt.",
      products: "Sodium acetylsalicylate and water",
      applications: "Solubility enhancement in some formulations",
      relatedConcepts: ["Neutralization", "Salt formation", "Pharmaceutical formulation"],
    },
    {
      equation: "COX-Ser(OH) + C₉H₈O₄ → COX-Ser(OCOCH₃) + Salicylate",
      type: "Enzymatic acetylation (biochemical mechanism)",
      conditions: "Physiological conditions, active-site nucleophilic attack",
      explanation: "Aspirin transfers its acetyl group to a serine residue in the cyclooxygenase active site, irreversibly inactivating the enzyme and blocking prostaglandin/thromboxane synthesis.",
      products: "Acetylated (inactivated) cyclooxygenase enzyme and free salicylate",
      applications: "Basis of aspirin's analgesic, anti-inflammatory, and antiplatelet effects",
      relatedConcepts: ["Enzyme inhibition", "Covalent modification", "Pharmacology"],
    },
  ],

  relatedFormulas: ["C7H6O3", "CH3COOH", "C8H8O3", "C13H18O2", "C6H8O6"],
  comparisonNote: "Aspirin (C₉H₈O₄, 180.16 g/mol) shares its aromatic-acid core with salicylic acid (C₇H₆O₃, 138.12 g/mol) but differs pharmacologically by irreversibly inhibiting cyclooxygenase, unlike reversible NSAIDs such as ibuprofen (C₁₃H₁₈O₂, 206.28 g/mol).",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of aspirin (C₉H₈O₄).",
      answer: "9(12.01) + 8(1.008) + 4(16.00) = 180.16 g/mol",
    },
    {
      question: "What is the theoretical yield of aspirin from 2.00 g of salicylic acid with excess acetic anhydride?",
      answer: "2.00 g ÷ 138.12 g/mol = 0.01448 mol salicylic acid → 0.01448 mol aspirin × 180.16 g/mol ≈ 2.61 g",
    },
    {
      question: "How many moles of aspirin are in a standard 325 mg tablet (assuming pure active ingredient)?",
      answer: "0.325 g ÷ 180.16 g/mol ≈ 1.80 × 10⁻³ mol",
    },
    {
      question: "Why does aspirin's antiplatelet effect last longer than its analgesic effect after a single dose clears the bloodstream?",
      answer: "Aspirin irreversibly acetylates COX-1 in platelets, which cannot synthesize new enzyme (lacking a nucleus), so the effect persists for the platelet's full ~10-day lifespan even after the drug itself is metabolized.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of aspirin?",
      answer: "180.16 g/mol for C₉H₈O₄ (acetylsalicylic acid).",
    },
    {
      question: "What is the chemical name for aspirin?",
      answer: "Acetylsalicylic acid, formed by acetylating the phenolic hydroxyl group of salicylic acid.",
    },
    {
      question: "How does aspirin relieve pain and reduce fever?",
      answer: "It irreversibly inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis that would otherwise promote pain, inflammation, and fever.",
    },
    {
      question: "Why is low-dose aspirin used for heart health?",
      answer: "It permanently blocks thromboxane production in platelets, reducing their ability to aggregate and form clots, lowering heart attack and stroke risk.",
    },
    {
      question: "Why shouldn't children take aspirin during viral illness?",
      answer: "It is linked to Reye's syndrome, a rare but serious condition causing liver and brain swelling in children recovering from viral infections.",
    },
  ],

  references: [
    { label: "PubChem CID 2244", note: "Aspirin (acetylsalicylic acid) compound data" },
    { label: "Nobel Prize Foundation", note: "John Vane's 1982 prize for prostaglandin research" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
