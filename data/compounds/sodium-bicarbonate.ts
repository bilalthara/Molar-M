import type { CompoundProfile } from "@/lib/chemistry/types";

export const sodiumBicarbonate: CompoundProfile = {
  slug: "molar-mass-of-sodium-bicarbonate",
  formula: "NaHCO3",
  name: "Sodium Bicarbonate",
  iupacName: "Sodium hydrogen carbonate",
  commonNames: ["Baking soda", "Bicarbonate of soda", "Sodium bicarb"],
  aliases: ["NaHCO₃", "Nahcolite (mineral form)"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "144-55-8",
  pubchemCid: "516892",
  smiles: "C(=O)(O)[O-].[Na+]",
  inchi: "InChI=1S/CH2O3.Na/c2-1(3)4;/h(H2,2,3,4);/q;+1/p-1",
  exactMass: 83.9823,
  featured: true,
  popular: true,

  overview: `Sodium bicarbonate (NaHCO₃) has a molar mass of 84.01 g/mol (Na 22.99 + H 1.008 + C 12.01 + 3 × 16.00), a white crystalline salt built from Na⁺ cations and the bicarbonate (hydrogen carbonate) anion HCO₃⁻. It is amphoteric in behavior — the bicarbonate ion can act as either a weak acid or a weak base — which gives NaHCO₃ its gentle, mildly alkaline character (pH ≈ 8.3 in solution) and its versatility across cooking, cleaning, medicine, and industrial chemistry.

Best known as baking soda, NaHCO₃ is a chemical leavening agent: it reacts with an acidic ingredient (buttermilk, yogurt, lemon juice, or added cream of tartar) or decomposes on heating to release CO₂ gas, which forms bubbles that cause batters and dough to rise. As an antacid, the same bicarbonate ion neutralizes excess stomach acid (HCO₃⁻ + H⁺ → H₂O + CO₂), providing rapid but short-lived relief from heartburn. Its ability to smother flames by releasing CO₂ and forming a heat-absorbing residue also makes it effective on small grease and electrical fires, and it is the active ingredient in some dry chemical fire extinguishers (specifically for Class B/C fires).

NaHCO₃ is closely related to — but chemically distinct from — sodium carbonate (Na₂CO₃, "soda ash" or washing soda), a more strongly alkaline salt made by heating NaHCO₃ to drive off CO₂ and water: 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂. This conversion, and the reverse (Na₂CO₃ can be converted back to NaHCO₃ by adding CO₂ and water), is central to the Solvay process for industrial soda ash manufacture.`,

  formulaExplanation: `NaHCO₃ contains one Na⁺ ion paired with one HCO₃⁻ (bicarbonate) ion. The bicarbonate ion retains one ionizable proton on the carbonate framework — CO₃²⁻ with one oxygen protonated — making it an intermediate species between fully protonated carbonic acid (H₂CO₃) and fully deprotonated carbonate (CO₃²⁻). This partial protonation is the source of its amphoteric acid-base behavior.`,

  chemicalProfile: `NaHCO₃ is amphoteric: it neutralizes strong acids (releasing CO₂) and can also react with strong bases to form carbonate (HCO₃⁻ + OH⁻ → CO₃²⁻ + H₂O). It decomposes thermally above ~50–100 °C to sodium carbonate, water, and CO₂, the basis of its leavening action in baking. In fire suppression, the same thermal decomposition releasing CO₂ helps smother flames by displacing oxygen, while the endothermic decomposition also absorbs heat from the fire.`,

  uniqueTopics: [
    {
      heading: "Chemical Leavening in Baking",
      body: "NaHCO₃ releases CO₂ either by reacting with an acidic ingredient (NaHCO₃ + acid → CO₂ + H₂O + salt) or by thermal decomposition above roughly 80 °C; the trapped gas bubbles expand within batter or dough, creating the light, aerated texture of baked goods — a reaction so central that recipes are carefully balanced between acid and base to avoid a metallic or soapy off-taste from unreacted bicarbonate.",
    },
    {
      heading: "Baking Soda vs. Baking Powder",
      body: "Baking soda (pure NaHCO₃) needs an external acid to activate; baking powder is a premixed blend of NaHCO₃ with a dry acid (such as cream of tartar or sodium acid pyrophosphate) plus a starch filler, so it can leaven recipes that lack sufficient natural acidity on their own — a frequent point of confusion in cooking chemistry.",
    },
    {
      heading: "Antacid Action and Stomach Chemistry",
      body: "As an over-the-counter antacid, NaHCO₃ rapidly neutralizes excess gastric HCl (NaHCO₃ + HCl → NaCl + H₂O + CO₂), providing fast symptomatic relief; the released CO₂ can cause belching, and the sodium load makes it less suitable than other antacids for patients managing sodium intake.",
    },
    {
      heading: "Fire Suppression Chemistry",
      body: "In Class B/C dry chemical fire extinguishers, NaHCO₃ powder decomposes in the heat of a fire to release CO₂, which helps smother flames by displacing oxygen, while the endothermic decomposition absorbs heat — a dual physical and chemical firefighting mechanism distinct from water-based suppression.",
    },
    {
      heading: "NaHCO₃ vs. Na₂CO₃",
      body: "Sodium bicarbonate (mild, pH ≈ 8.3) and sodium carbonate (strongly alkaline, pH ≈ 11.6) are related by a simple thermal decomposition (2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂) but behave very differently: washing soda (Na₂CO₃) is used for heavy-duty cleaning and water softening, while baking soda's gentler basicity suits food, personal care, and mild cleaning applications.",
    },
  ],

  applications: {
    industrial: [
      "Fire suppression agent in Class B/C dry chemical extinguishers",
      "Flue gas treatment (neutralizing acidic SO₂/HCl emissions)",
      "Leather tanning and textile processing pH buffer",
      "Feed additive for livestock (rumen pH buffering in dairy cattle)",
    ],
    laboratory: [
      "Mild, safe acid-neutralizing agent for spill cleanup (e.g., small acid spills)",
      "CO₂ gas generation demonstrations with vinegar or other weak acids",
      "Buffer component in some biological and biochemical buffer systems",
    ],
    environmental: "Used in some flue-gas desulfurization and acid-gas scrubbing systems; considered environmentally benign compared to many industrial neutralizing agents due to low toxicity.",
    biological: "Endogenous bicarbonate is a critical blood buffer maintaining physiological pH (~7.4) via the carbonic acid–bicarbonate buffer system; NaHCO₃ is used clinically to treat metabolic acidosis and as an antacid.",
  },

  preparation: `Industrially, NaHCO₃ is produced via the Solvay process, in which CO₂ and ammonia are passed through concentrated brine, precipitating sodium bicarbonate: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl. It also occurs naturally as the mineral nahcolite and can be mined directly from evaporite deposits.`,

  production: `Global production combines Solvay-process synthesis with natural mineral extraction (notably from the Green River Formation in the western United States), yielding several million tonnes annually for food, industrial, and pharmaceutical use.`,

  storage: `Store in a sealed, dry container, since NaHCO₃ can absorb moisture and odors from the air (a property also exploited when it is used as a refrigerator deodorizer). Keep away from strong acids in bulk storage to prevent unintended CO₂ release and pressure buildup.`,

  handling: `Very low toxicity; generally recognized as safe for food use. Avoid inhaling fine powder in bulk industrial handling, and be aware that mixing with acids in closed containers can build CO₂ pressure.`,

  safety: {
    summary: "Very low toxicity and widely used as a food and household product; primarily a mild irritant risk from dust, with essentially no significant hazard at typical use concentrations.",
    hazards: [
      "Mild eye/respiratory irritation from concentrated dust",
      "CO₂ pressure buildup if mixed with acids in sealed containers",
      "High sodium content a concern for patients on sodium-restricted diets",
    ],
    classification: "GRAS (Generally Recognized as Safe) for food use; not classified as a hazardous substance in typical handling",
  },

  interestingFacts: [
    "NaHCO₃'s classic use as a refrigerator deodorizer relies on its ability to buffer and neutralize a wide range of acidic and basic odor compounds, not just mask them.",
    "The molar mass 84.01 g/mol makes NaHCO₃ almost exactly midway between water (18.02) and sodium carbonate (105.99) in a simple numeric sense, though the chemistry is quite different.",
    "The classic baking-soda-and-vinegar 'volcano' demonstration releases CO₂ so quickly because the reaction of a strong-ish acid (acetic acid) with bicarbonate is essentially instantaneous at typical concentrations.",
    "Nahcolite, the natural mineral form of NaHCO₃, is mined at industrial scale from ancient lakebed evaporite deposits in Colorado's Piceance Basin.",
  ],

  history: `Naturally occurring sodium bicarbonate-rich mineral deposits and soda lakes were used by ancient civilizations for cleaning and food preparation. The Solvay process, developed by Ernest Solvay in the 1860s, revolutionized industrial-scale sodium carbonate and bicarbonate production, largely displacing the earlier, more wasteful Leblanc process.`,

  discovery: "Naturally occurring soda deposits were used since antiquity; the modern industrial process for synthesizing sodium bicarbonate/carbonate was developed by Ernest Solvay in Belgium in the 1860s.",

  examNotes: [
    "Molar mass NaHCO₃ = 22.99 + 1.008 + 12.01 + 3(16.00) = 84.01 g/mol.",
    "Thermal decomposition: 2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g) on heating.",
    "Acid reaction: NaHCO₃ + HCl → NaCl + H₂O + CO₂ — a 1:1 mole ratio releasing one mole of gas per mole of bicarbonate.",
    "Bicarbonate is amphoteric: it can donate a proton (acting as a weak acid toward strong bases) or accept one (acting as a weak base toward strong acids).",
  ],

  commonMistakes: [
    "Confusing sodium bicarbonate (NaHCO₃, 84.01 g/mol) with sodium carbonate (Na₂CO₃, 105.99 g/mol) — they react differently and have different basicity.",
    "Assuming baking powder and baking soda are interchangeable in recipes without adjusting for baking powder's built-in acid and lower potency per gram.",
    "Treating NaHCO₃ decomposition as instantaneous at room temperature — meaningful CO₂ release from heat alone requires temperatures well above typical kitchen or room conditions.",
  ],

  studentTips: [
    "Remember bicarbonate's amphoteric nature: HCO₃⁻ can either donate a proton (to a strong base) or accept one (from a strong acid).",
    "Link the Solvay process equation directly to NaHCO₃'s industrial origin for exam recall.",
    "Use the vinegar-and-baking-soda reaction as a mental model for 1:1 mole ratio acid-carbonate stoichiometry.",
  ],

  misconceptions: [
    "Baking soda is not simply a 'weaker' version of baking powder — they have different compositions and are not directly substitutable without recipe adjustment.",
    "NaHCO₃ does not neutralize all types of fires — dry chemical extinguishers using it are rated for Class B (flammable liquids) and C (electrical) fires, not typically Class A (ordinary combustibles) alone.",
    "Bicarbonate ion is not the same as carbonate ion — NaHCO₃ and Na₂CO₃ have distinctly different basicity and reactivity despite both containing a carbon-oxygen anion.",
  ],

  physical: {
    appearance: "White crystalline powder",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.20 g/cm³",
    meltingPoint: "Decomposes at ~50 °C (does not have a true melting point; breaks down before melting)",
    boilingPoint: "Decomposes before boiling",
    solubility: "96 g/L water at 20 °C (moderately soluble, increases with temperature)",
    crystalStructure: "Monoclinic",
  },

  chemical: {
    classification: "Amphoteric bicarbonate salt",
    acidity: "Weakly acidic character (HCO₃⁻ can donate a proton, pKa₂ of carbonic acid = 10.3)",
    basicity: "Weakly basic in solution (pH ≈ 8.3), acting as a mild base toward strong acids",
    polarity: "Ionic",
    oxidationStates: "Na: +1, H: +1, C: +4, O: −2",
    chemicalFamily: "Alkali metal bicarbonates",
  },

  reactions: [
    {
      equation: "NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)",
      type: "Acid–bicarbonate",
      conditions: "Room temperature, aqueous",
      explanation: "Bicarbonate acts as a base, accepting a proton from the strong acid and decomposing to release CO₂ gas — the basis of antacid action and classic vinegar-baking soda demonstrations.",
      products: "Sodium chloride, water, carbon dioxide",
      applications: "Antacid neutralization, acid spill cleanup, classroom gas-evolution demonstrations",
      relatedConcepts: ["Gas evolution", "Neutralization", "Antacid chemistry"],
    },
    {
      equation: "2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)",
      type: "Thermal decomposition",
      conditions: "Heat above ~80–100 °C",
      explanation: "Two bicarbonate ions combine and lose water and CO₂ to form sodium carbonate; this reaction underlies both baking soda's leavening action in the oven and part of the Solvay process chemistry.",
      products: "Sodium carbonate, water vapor, carbon dioxide",
      applications: "Baking (leavening), soda ash production, fire extinguisher agent decomposition",
      relatedConcepts: ["Thermal decomposition", "Leavening chemistry", "Industrial chemistry"],
    },
    {
      equation: "NaHCO₃(aq) + NaOH(aq) → Na₂CO₃(aq) + H₂O(l)",
      type: "Acid–base (bicarbonate as weak acid)",
      conditions: "Aqueous, room temperature",
      explanation: "In the presence of a strong base, bicarbonate instead acts as a weak acid, donating its remaining proton to form carbonate — demonstrating its amphoteric character.",
      products: "Sodium carbonate and water",
      applications: "Illustrates amphoteric behavior, relevant to water treatment pH adjustment",
      relatedConcepts: ["Amphoteric species", "Acid–base theory", "Bicarbonate/carbonate equilibrium"],
    },
    {
      equation: "NaCl(aq) + NH₃(aq) + CO₂(g) + H₂O(l) → NaHCO₃(s) + NH₄Cl(aq)",
      type: "Industrial precipitation (Solvay process)",
      conditions: "Concentrated brine, ammonia, CO₂ gas, moderate temperature",
      explanation: "Sodium bicarbonate precipitates from ammoniated brine saturated with carbon dioxide, the central step of the industrial Solvay process for soda ash and bicarbonate manufacture.",
      products: "Sodium bicarbonate (precipitate) and ammonium chloride",
      applications: "Industrial-scale sodium bicarbonate and sodium carbonate production",
      relatedConcepts: ["Industrial chemistry", "Precipitation", "Solvay process"],
    },
  ],

  relatedFormulas: ["Na2CO3", "HCl", "CO2", "NaCl", "NH4Cl"],
  comparisonNote: "NaHCO₃ (84.01 g/mol, pH ≈ 8.3) is a mild amphoteric salt, while its relative sodium carbonate Na₂CO₃ (105.99 g/mol, pH ≈ 11.6) is a considerably stronger base, formed from NaHCO₃ by loss of water and CO₂ on heating.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of NaHCO₃.",
      answer: "22.99 + 1.008 + 12.01 + 3(16.00) = 84.01 g/mol",
    },
    {
      question: "How many moles of CO₂ are released when 168.0 g of NaHCO₃ reacts completely with excess acid?",
      answer: "168.0 g ÷ 84.01 g/mol = 2.00 mol NaHCO₃; 1:1 ratio gives 2.00 mol CO₂",
      hint: "NaHCO₃ + acid → salt + H₂O + CO₂ is a 1:1 mole ratio for a monoprotic acid.",
    },
    {
      question: "What mass of Na₂CO₃ forms from thermally decomposing 16.80 g of NaHCO₃?",
      answer: "16.80 g ÷ 84.01 g/mol = 0.200 mol NaHCO₃; ratio 2 NaHCO₃ : 1 Na₂CO₃, so 0.100 mol Na₂CO₃ × 105.99 g/mol ≈ 10.6 g",
    },
    {
      question: "Why can sodium bicarbonate act as both an acid and a base?",
      answer: "The bicarbonate ion HCO₃⁻ still has one ionizable proton (making it a weak acid toward strong bases) but can also accept a proton to form carbonic acid/CO₂ + H₂O (making it a weak base toward strong acids) — this is amphoteric behavior.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sodium bicarbonate?",
      answer: "84.01 g/mol.",
    },
    {
      question: "Is baking soda the same as baking powder?",
      answer: "No — baking soda is pure NaHCO₃ and needs an external acid to activate, while baking powder already contains both NaHCO₃ and a dry acid so it can leaven on its own with moisture and heat.",
    },
    {
      question: "How is sodium bicarbonate different from sodium carbonate?",
      answer: "NaHCO₃ (84.01 g/mol) is milder and only weakly basic, while Na₂CO₃ (105.99 g/mol, washing soda) is more strongly alkaline; heating NaHCO₃ converts it to Na₂CO₃ with loss of water and CO₂.",
    },
    {
      question: "Why does baking soda work as an antacid?",
      answer: "Its bicarbonate ion neutralizes excess stomach hydrochloric acid, forming water, carbon dioxide, and sodium chloride, quickly raising stomach pH and relieving heartburn symptoms.",
    },
    {
      question: "Can sodium bicarbonate put out a fire?",
      answer: "Yes, for small Class B (flammable liquid) and Class C (electrical) fires — heating releases CO₂ that displaces oxygen, and the endothermic decomposition absorbs heat, both helping to smother flames.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "NaHCO₃ thermodynamic data" },
    { label: "PubChem CID 516892", note: "Sodium bicarbonate identifiers and properties" },
    { label: "FDA Food Additive Status", note: "GRAS status for sodium bicarbonate in food" },
  ],
};
