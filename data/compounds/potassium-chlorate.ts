import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumChlorate: CompoundProfile = {
  slug: "molar-mass-of-potassium-chlorate",
  formula: "KClO3",
  name: "Potassium Chlorate",
  iupacName: "Potassium chlorate",
  commonNames: ["Potassium chlorate", "Chlorate of potash"],
  aliases: ["KClO₃"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "3811-04-9",
  pubchemCid: "6426889",
  smiles: "[O-]Cl(=O)=O.[K+]",
  inchi: "InChI=1S/ClHO3.K/c2-1(3)4;/h(H,2,3,4);/q;+1/p-1",
  exactMass: 121.9173,
  featured: true,
  popular: true,

  overview: `Potassium chlorate (KClO₃) has a molar mass of 122.55 g/mol (K 39.10 + Cl 35.45 + 3 × 16.00), an ionic salt of K⁺ and the pyramidal chlorate anion (ClO₃⁻), in which chlorine sits in the +5 oxidation state. It is a powerful oxidizer — one of the strongest commonly encountered in introductory chemistry — capable of releasing oxygen gas on decomposition and dramatically accelerating the combustion of virtually any fuel it contacts.

⚠️ Safety is the defining feature of working with KClO₃: mixtures of potassium chlorate with sulfur, phosphorus, sugars, or many organic and metal-powder fuels can ignite or detonate from friction, static discharge, or even light impact, historically causing serious laboratory and industrial accidents. For this reason, KClO₃ demonstrations (such as the classic "gummy bear" or sugar-chlorate reactions) must only be performed by trained personnel with appropriate shielding, and many school laboratories now avoid handling bulk KClO₃ altogether in favor of safer oxygen-generation alternatives.

Historically, KClO₃'s ready decomposition to release oxygen (2 KClO₃ → 2 KCl + 3 O₂, catalyzed by MnO₂) made it the standard laboratory method for generating pure oxygen gas, and its oxidizing power made it the original active ingredient in safety matches, though it has been largely superseded in that role for safety and stability reasons by other oxidizers. It remains used, under strict engineering and handling controls, in some fireworks/pyrotechnic colorant formulations, oxygen-candle systems, and specialty explosives manufacture.`,

  formulaExplanation: `KClO₃ contains one K⁺ ion paired with one trigonal pyramidal ClO₃⁻ anion, in which chlorine is bonded to three oxygen atoms with a lone pair completing its coordination sphere. Chlorine's +5 oxidation state in chlorate is intermediate between hypochlorite (+1), chlorite (+3), and perchlorate (+7), reflecting a family of chlorine oxoanions with increasing oxygen content and generally increasing thermal stability (though not necessarily decreasing reactivity as an oxidizer).`,

  chemicalProfile: `KClO₃ is a strong oxidizer that decomposes on heating, with the pathway depending strongly on conditions: with a MnO₂ catalyst at moderate temperature it cleanly releases O₂ (2 KClO₃ → 2 KCl + 3 O₂); without catalyst and at higher temperature it can instead disproportionate (4 KClO₃ → 3 KClO₄ + KCl) before further decomposing. In contact with concentrated sulfuric acid or strong reducing agents, it can react violently, and solid mixtures with fuels (sugar, sulfur, red phosphorus, many metals) are shock- and friction-sensitive.`,

  uniqueTopics: [
    {
      heading: "⚠️ Extreme Care Required: Mixture Hazards",
      body: "Solid KClO₃ mixed intimately with combustible or reducing materials (sugar, sulfur, red phosphorus, powdered metals, many organic compounds) becomes a friction- and impact-sensitive composition that can ignite or detonate unpredictably. Numerous historical laboratory and industrial accidents trace directly to underestimating this sensitivity — KClO₃ should never be ground, mixed, or stored with fuels outside of properly engineered, professionally supervised pyrotechnic or explosives contexts.",
    },
    {
      heading: "Catalytic Oxygen Generation",
      body: "Heating KClO₃ with a small amount of manganese dioxide catalyst cleanly and controllably decomposes it to potassium chloride and oxygen gas at a lower temperature than uncatalyzed decomposition requires — the classic 19th- and 20th-century laboratory method for generating pure O₂, now often replaced in teaching labs by safer alternatives such as electrolysis or hydrogen peroxide decomposition.",
    },
    {
      heading: "Historical Role in Safety Matches",
      body: "Early friction matches used KClO₃ as the oxidizer in the match head, paired with a fuel and a friction-sensitive compound; because of stability and safety concerns, most modern matches instead rely on other oxidizer systems, though chlorate-based formulations remain historically and educationally significant.",
    },
    {
      heading: "Chlorine Oxoanion Family Context",
      body: "Chlorate (ClO₃⁻, Cl at +5) sits between chlorite (ClO₂⁻, +3) and perchlorate (ClO₄⁻, +7) in the series of chlorine oxoanions; understanding chlorate's reactivity requires comparing it to hypochlorite (ClO⁻, +1, used in bleach) and recognizing that oxidizing power and thermal stability do not follow a single simple trend across the series.",
    },
    {
      heading: "Modern Restrictions and Alternatives",
      body: "Due to well-documented accident history, many educational institutions have restricted or eliminated bulk KClO₃ demonstrations, particularly reactions with sugar or gummy candy that were once common lecture demonstrations; safer oxidizers or smaller, professionally vetted quantities are now recommended when the underlying chemistry concept (oxidizer-fuel reactions) still needs to be taught.",
    },
  ],

  applications: {
    industrial: [
      "Oxidizer component in some pyrotechnic and fireworks colorant formulations (professionally engineered only)",
      "Oxygen-candle chemical oxygen generator systems (e.g., specialized emergency breathing apparatus)",
      "Historical component of safety match heads (largely phased out)",
      "Bleaching agent precursor and specialty chemical oxidizer in controlled industrial processes",
    ],
    laboratory: [
      "Catalytic oxygen gas generation demonstrations (2 KClO₃ →(MnO₂) 2 KCl + 3 O₂), performed only under strict safety protocols",
      "Illustrating oxidizer decomposition pathways and catalysis in advanced chemistry courses",
    ],
    environmental: "Chlorate contamination of soil or water from historical herbicide/defoliant use and improper industrial disposal has raised concern due to chlorate's toxicity to aquatic organisms and thyroid-related health effects at high exposure.",
  },

  preparation: `Industrially, KClO₃ is produced by passing chlorine gas into hot, concentrated potassium hydroxide solution or, more commonly today, by metathesis (double decomposition) between sodium chlorate (made by electrolysis of brine) and potassium chloride, exploiting KClO₃'s lower solubility to crystallize it out. It should not be prepared in an unsupervised teaching lab due to handling hazards.`,

  production: `Modern production predominantly starts from electrolytically generated sodium chlorate, converted to potassium chlorate by reaction with potassium chloride and fractional crystallization, since KClO₃ is considerably less soluble in cold water than NaClO₃.`,

  storage: `⚠️ Store strictly separated from all combustible materials, organic substances, sulfur, phosphorus, powdered metals, acids, and other reducing agents, in a cool, dry, well-ventilated area free of friction or impact risk. Only qualified personnel with appropriate training and facilities should store or handle bulk quantities.`,

  handling: `⚠️ Handle only with proper training and safety controls. Never grind, mix, or apply mechanical force to KClO₃ in combination with any fuel, reducing agent, sulfur, or organic material — such mixtures are shock- and friction-sensitive and have caused serious injuries and fatalities historically. Use non-sparking tools, avoid static buildup, and keep quantities minimal for any educational demonstration, following institutional safety review.`,

  safety: {
    summary: "A strong oxidizer that is dangerously sensitive to friction, shock, and heat when mixed with fuels, sulfur, or reducing agents; historically responsible for serious laboratory and industrial accidents, requiring strict handling protocols and professional oversight.",
    hazards: [
      "Strong oxidizer — dramatically intensifies fires and can cause explosions with reducing agents/fuels",
      "Friction- and impact-sensitive when mixed with combustible or reducing materials",
      "Toxic by ingestion; can cause methemoglobinemia and kidney damage at high doses",
      "Historically linked to serious laboratory and industrial explosion incidents",
    ],
    classification: "GHS: Ox. Solid 1, Acute Tox. 4 (oral) — among the more hazardous common oxidizing salts",
  },

  interestingFacts: [
    "KClO₃'s decomposition with MnO₂ catalyst was the standard oxygen-generation method in chemistry classrooms for much of the 19th and 20th centuries, before safer alternatives became preferred.",
    "The infamous 'gummy bear in molten KClO₃' demonstration — dramatic and popular in some lecture settings — is now widely discouraged or banned in many institutions due to unpredictable violence of the reaction.",
    "Chlorate's chlorine atom sits at +5 oxidation state, exactly midway between the +1 of hypochlorite bleach and the +7 of perchlorate, part of a systematic family of chlorine oxoanions.",
    "Early 20th-century match factories using chlorate-based formulations faced significant fire and explosion risks, driving innovation toward safer modern match chemistry.",
  ],

  history: `Potassium chlorate was first prepared by French chemist Claude Louis Berthollet in 1786 by passing chlorine through a hot potassium hydroxide solution, and briefly bore the name "Berthollet's salt." Its early adoption in matches and explosives, alongside repeated serious accidents from its sensitivity, shaped much of the safety culture and regulation later applied to oxidizing salts more broadly.`,

  discovery: "Claude Louis Berthollet, 1786 — first prepared potassium chlorate by chlorinating hot potassium hydroxide solution, initially known as Berthollet's salt.",

  examNotes: [
    "Molar mass KClO₃ = 39.10 + 35.45 + 3(16.00) = 122.55 g/mol.",
    "Catalyzed decomposition: 2 KClO₃(s) →(MnO₂ catalyst, heat) 2 KCl(s) + 3 O₂(g).",
    "Chlorine oxidation state in KClO₃ is +5; contrast with −1 in KCl (product) and +7 in KClO₄.",
    "⚠️ Never write or attempt exam 'demonstration' answers implying safe unsupervised mixing of KClO₃ with fuels — always note required safety precautions.",
  ],

  commonMistakes: [
    "Underestimating the sensitivity of KClO₃-fuel mixtures — even small frictional or static energy inputs can trigger violent reactions.",
    "Assuming all chlorine oxoanions (ClO⁻, ClO₂⁻, ClO₃⁻, ClO₄⁻) have similar reactivity — oxidizing strength and stability vary significantly across the series.",
    "Confusing potassium chlorate (KClO₃, 122.55 g/mol) with potassium chloride (KCl, 74.55 g/mol) or potassium perchlorate (KClO₄, 138.55 g/mol).",
  ],

  studentTips: [
    "Always pair any mention of KClO₃ oxidizing chemistry with an explicit safety caveat about fuel-mixture hazards — this is both good practice and often expected in written answers.",
    "Remember the MnO₂-catalyzed decomposition equation as the standard 'oxidizer decomposition' example distinct from KNO₃'s milder version.",
    "Track chlorine's oxidation state across ClO⁻/ClO₂⁻/ClO₃⁻/ClO₄⁻ (+1/+3/+5/+7) as a recurring exam theme.",
  ],

  misconceptions: [
    "KClO₃ is not safe to handle casually just because it is a common 'textbook' compound — it carries genuine explosion and toxicity hazards requiring trained handling.",
    "MnO₂ is a catalyst for KClO₃ decomposition, not a reactant consumed in the reaction — it lowers the required decomposition temperature without being used up.",
    "Higher oxygen content in a chlorine oxoanion does not automatically mean higher reactivity — perchlorate (ClO₄⁻) is generally more thermally stable than chlorate despite having more oxygen.",
  ],

  physical: {
    appearance: "White or colorless crystalline solid",
    color: "White",
    odor: "Odorless",
    stateAtSTP: "Solid",
    density: "2.32 g/cm³",
    meltingPoint: "356 °C",
    boilingPoint: "400 °C (decomposes, releasing O₂)",
    solubility: "73 g/L water at 20 °C (moderately soluble, increases sharply with temperature)",
    crystalStructure: "Monoclinic",
  },

  chemical: {
    classification: "Ionic chlorate salt / strong oxidizing agent",
    polarity: "Ionic",
    molecularGeometry: "Trigonal pyramidal chlorate anion",
    oxidationStates: "K: +1, Cl: +5, O: −2",
    chemicalFamily: "Alkali metal chlorates (chlorine oxoanion salts)",
  },

  reactions: [
    {
      equation: "2 KClO₃(s) → 2 KCl(s) + 3 O₂(g)",
      type: "Catalytic thermal decomposition",
      conditions: "Heat with MnO₂ catalyst, ~400 °C (lower with catalyst)",
      explanation: "Manganese dioxide catalyzes clean decomposition to potassium chloride and oxygen gas at a more moderate temperature than the uncatalyzed pathway requires — historically the standard method for generating laboratory oxygen.",
      products: "Potassium chloride and oxygen gas",
      applications: "Laboratory oxygen generation (historical), oxygen-candle emergency breathing systems",
      relatedConcepts: ["Catalysis", "Thermal decomposition", "Oxidizing agents"],
    },
    {
      equation: "4 KClO₃(s) → 3 KClO₄(s) + KCl(s)",
      type: "Disproportionation (uncatalyzed heating)",
      conditions: "Heat without catalyst, moderate temperature before full decomposition",
      explanation: "Without a catalyst, chlorate can disproportionate into perchlorate (higher oxidation state, +7) and chloride (lower oxidation state, −1) before ultimately breaking down further at higher temperatures.",
      products: "Potassium perchlorate and potassium chloride",
      applications: "Illustrates disproportionation reactions and pathway-dependent thermal decomposition",
      relatedConcepts: ["Disproportionation", "Redox", "Reaction pathway dependence"],
    },
    {
      equation: "Cl₂(g) + 2 KOH(hot, conc.) → KCl(aq) + KClO(aq) + H₂O(l) [with further oxidation to KClO₃ under controlled conditions]",
      type: "Halogen disproportionation (industrial synthesis route)",
      conditions: "Hot concentrated KOH, controlled chlorine addition",
      explanation: "Historical Berthollet synthesis passes chlorine into hot potassium hydroxide, ultimately yielding chlorate through disproportionation chemistry of chlorine in basic solution — the original discovery route for KClO₃.",
      products: "Potassium chlorate (with byproduct potassium chloride)",
      applications: "Historical/industrial chlorate synthesis context",
      relatedConcepts: ["Halogen disproportionation", "Industrial chemistry", "Historical synthesis"],
    },
    {
      equation: "KClO₃(s) + fuel/reducing agent → violent oxidation (⚠️ hazardous, not for unsupervised demonstration)",
      type: "Oxidizer–fuel reaction",
      conditions: "Friction, static discharge, flame, or heat trigger",
      explanation: "KClO₃ mixed with sugars, sulfur, red phosphorus, or metal powders can ignite or detonate with minimal energy input, illustrating why chlorate-fuel mixtures require strict professional handling and are unsuitable for casual demonstration.",
      products: "Combustion/oxidation products (variable, often rapid gas release and heat)",
      applications: "Understanding oxidizer hazard classification and safe pyrotechnic engineering practices",
      relatedConcepts: ["Oxidizer hazards", "Friction sensitivity", "Laboratory safety"],
    },
  ],

  relatedFormulas: ["KCl", "KClO4", "KNO3", "MnO2", "O2"],
  comparisonNote: "KClO₃ (122.55 g/mol) decomposes and reacts far more readily and hazardously with fuels than KNO₃ (101.10 g/mol), even though both are common oxidizing salts — a key reason KNO₃-based demonstrations are generally considered safer for classroom use.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KClO₃.",
      answer: "39.10 + 35.45 + 3(16.00) = 122.55 g/mol",
    },
    {
      question: "How many liters of O₂ at STP form from the complete catalyzed decomposition of 245.1 g of KClO₃?",
      answer: "245.1 g ÷ 122.55 g/mol = 2.000 mol KClO₃; ratio 2 KClO₃ : 3 O₂, so 3.000 mol O₂ × 22.4 L/mol = 67.2 L",
      hint: "Use 2 KClO₃ → 2 KCl + 3 O₂ and standard molar volume at STP.",
    },
    {
      question: "What is the oxidation state of chlorine in KClO₃, and how does it compare to KClO₄?",
      answer: "Chlorine is +5 in KClO₃ (chlorate) and +7 in KClO₄ (perchlorate) — a two-unit increase in oxidation state reflecting one additional oxygen atom.",
    },
    {
      question: "Why should potassium chlorate never be ground together with sugar or sulfur outside a properly controlled setting?",
      answer: "Such mixtures become highly friction- and impact-sensitive oxidizer-fuel compositions that can ignite or detonate unpredictably from minor mechanical or static energy input, posing serious injury risk without professional engineering controls.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium chlorate?",
      answer: "122.55 g/mol.",
    },
    {
      question: "Is potassium chlorate dangerous?",
      answer: "Yes — it is a strong oxidizer that can form friction- and shock-sensitive, potentially explosive mixtures with fuels, sulfur, or reducing agents, and requires trained, careful handling.",
    },
    {
      question: "What was potassium chlorate historically used for?",
      answer: "As the oxidizer in early friction matches and as the standard laboratory source of oxygen gas via MnO₂-catalyzed decomposition, though safer alternatives are now generally preferred.",
    },
    {
      question: "Why is manganese dioxide added when decomposing KClO₃?",
      answer: "MnO₂ acts as a catalyst, lowering the temperature required for clean decomposition to KCl and O₂ without being consumed in the reaction.",
    },
    {
      question: "How does potassium chlorate differ from potassium nitrate as an oxidizer?",
      answer: "Both are ionic oxidizing salts, but KClO₃ (122.55 g/mol) is generally more reactive and sensitive in fuel mixtures than KNO₃ (101.10 g/mol), making KNO₃-based demonstrations comparatively safer for educational use.",
    },
  ],

  references: [
    { label: "NIST Chemistry WebBook", note: "KClO₃ thermodynamic data" },
    { label: "PubChem CID 6426889", note: "Potassium chlorate identifiers and safety data" },
    { label: "CSB (U.S. Chemical Safety Board) incident reports", note: "Historical oxidizer-mixture accident analyses" },
  ],
};
