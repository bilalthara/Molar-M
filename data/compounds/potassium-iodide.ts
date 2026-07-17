import type { CompoundProfile } from "@/lib/chemistry/types";

export const potassiumIodide: CompoundProfile = {
  slug: "molar-mass-of-potassium-iodide",
  formula: "KI",
  name: "Potassium Iodide",
  iupacName: "Potassium iodide",
  commonNames: ["Potassium iodide", "KI"],
  aliases: ["K⁺I⁻", "Iodide of potash (historical)"],
  category: "salt",
  categories: ["salt", "inorganic"],
  casNumber: "7681-11-0",
  pubchemCid: "4875",
  smiles: "[K+].[I-]",
  inchi: "InChI=1S/HI.K/h1H;/q;+1/p-1",
  exactMass: 165.868180,
  featured: true,
  popular: true,

  overview: `Potassium iodide (KI) is a simple ionic salt with molar mass 166.00 g/mol (K 39.10 + I 126.90), the highest molar mass of the common alkali metal halides due to iodine's large atomic mass. It forms colorless, cubic (rock-salt structure) crystals that are highly soluble in water and readily oxidize in air and light to release a faint trace of elemental iodine, giving old samples a characteristic slight yellow tinge — a property that requires KI to be stored away from light and air for long-term stability.

KI's most familiar public-health application is iodized table salt: because dietary iodine deficiency causes goiter and, especially in pregnancy, impairs fetal neurological development, many countries mandate or encourage adding trace potassium iodide (or iodate) to table salt, a public health intervention credited with virtually eliminating iodine-deficiency disorders across much of the world since the 1920s. In a related but distinct medical role, high-dose potassium iodide tablets are stockpiled and distributed during nuclear accidents or radiological emergencies to saturate the thyroid gland with stable, non-radioactive iodine, blocking uptake of dangerous radioactive iodine-131 released from reactor accidents or fallout.

In the chemistry laboratory, KI is indispensable as the source of iodide ion for iodometric titrations (where iodide is oxidized to iodine, then measured by titration against sodium thiosulfate), for making Lugol's iodine solution and other iodine-based antiseptics (since elemental iodine dissolves far more readily in water when complexed as I₃⁻ with excess iodide), and as a classic reagent for demonstrating precipitation and photographic silver halide chemistry.`,

  formulaExplanation: `KI consists of K⁺ and I⁻ ions in a 1:1 ratio, held together in the same face-centered cubic rock-salt lattice as NaCl and KBr. Iodine's large ionic radius and high polarizability, compared to the lighter halides, contribute to KI's distinctly high molar mass and its tendency to form colored charge-transfer complexes and triiodide (I₃⁻) species in solution.`,

  chemicalProfile: `KI is chemically stable in the absence of strong oxidizers but slowly oxidizes in air and light, liberating trace I₂ and giving old samples a faint yellow color. It readily dissolves excess elemental iodine by forming soluble triiodide ion (I⁻ + I₂ ⇌ I₃⁻), the basis of iodine tincture and Lugol's solution formulations. With oxidizing agents (Cl₂, H₂O₂, Cu²⁺, Fe³⁺) it is oxidized to iodine, a reaction exploited in iodometric titrations. With silver nitrate it precipitates yellow silver iodide, the least soluble of the common silver halides.`,

  uniqueTopics: [
    {
      heading: "Iodized salt and global iodine deficiency prevention",
      body: "Since the 1920s, adding trace amounts of potassium iodide (or the more oxidation-stable potassium iodate) to table salt has become one of public health's most cost-effective interventions, virtually eliminating goiter and preventing iodine-deficiency-related cognitive impairment in populations worldwide. The tiny amount of KI added — typically tens of parts per million — supplies enough dietary iodine for normal thyroid hormone synthesis without any noticeable taste change.",
    },
    {
      heading: "Thyroid radiation blocking in nuclear emergencies",
      body: "High-dose potassium iodide tablets are distributed near nuclear power plants and stockpiled by governments because saturating the thyroid gland with stable iodine before or shortly after exposure to radioactive fallout blocks the gland from absorbing dangerous radioactive iodine-131, a major fission product that otherwise concentrates in the thyroid and significantly raises thyroid cancer risk, particularly in children.",
    },
    {
      heading: "Iodometric titration chemistry",
      body: "Potassium iodide is the workhorse reagent of iodometric analysis: an oxidizing analyte converts iodide to iodine (2 I⁻ → I₂ + 2 e⁻), and the liberated iodine is then quantified by titrating against a standardized sodium thiosulfate solution using a starch indicator that turns deep blue-black in the presence of iodine — an indirect but highly precise method for determining oxidizer concentrations in chemistry and environmental analysis.",
    },
    {
      heading: "Triiodide formation and iodine antiseptic solutions",
      body: "Elemental iodine is only sparingly soluble in water on its own, but potassium iodide dramatically increases its effective solubility by forming the soluble triiodide complex ion, I₃⁻. This chemistry underlies Lugol's iodine solution and other iodine-based antiseptics and disinfectants, which rely on a KI/I₂ mixture to deliver antimicrobial iodine in a stable, water-soluble form.",
    },
    {
      heading: "Photographic silver iodide and cloud seeding",
      body: "Silver iodide precipitated from potassium iodide solutions was historically used in specialized photographic emulsions, and silver iodide crystals — because their hexagonal structure closely resembles ice — remain the standard nucleating agent used in cloud seeding to encourage precipitation, an application that traces back to KI's role as the most convenient laboratory source of iodide ion for making AgI.",
    },
  ],

  applications: {
    industrial: [
      "Iodized table salt fortification (public health iodine supplementation)",
      "Photographic and specialty silver iodide emulsion chemistry",
      "Cloud seeding nucleating agent precursor (silver iodide production)",
      "Iodine-based antiseptic and disinfectant formulation",
    ],
    laboratory: [
      "Iodometric titration reagent (oxidant quantification via iodide oxidation)",
      "Source of iodide ion for precipitation and qualitative halide tests",
      "Lugol's iodine solution and other iodine tincture preparation",
      "Starch-iodine indicator demonstrations",
    ],
    environmental: "Naturally occurring trace iodine cycling in soil and seawater; industrial KI use is tightly regulated given its role in radiological emergency preparedness stockpiles.",
    biological: "Essential dietary iodine source via salt iodization; high-dose thyroid-blocking agent in radiological emergencies; historically used to treat certain thyroid conditions and skin disorders.",
  },

  preparation: `Prepared by neutralizing potassium hydroxide or potassium carbonate with hydroiodic acid, or by reacting iodine with potassium hydroxide followed by reduction of the resulting iodate byproduct. Industrially, KI can also be produced from iodine recovered from natural brine deposits reacted with potassium salts.`,

  production: `Global production is modest compared to major potassium salts, driven mainly by demand for salt iodization programs, pharmaceutical-grade thyroid-blocking tablets, and photographic/specialty chemical uses; Chile and Japan are notable sources of the iodine feedstock.`,

  storage: `Store in tightly sealed, opaque or amber containers away from light, heat, and moisture to minimize slow oxidative release of elemental iodine, which can discolor and reduce potency over long storage periods.`,

  handling: `Low acute hazard; treat as a mild irritant. Repeated high-dose exposure can affect thyroid function (iodism). Standard laboratory gloves and eye protection suffice for routine handling.`,

  safety: {
    summary: "Low acute toxicity at typical laboratory and dietary supplementation levels; excessive iodide intake can disrupt thyroid function (iodism) with symptoms resembling both hyper- and hypothyroidism.",
    hazards: [
      "Mild eye and skin irritation from concentrated solutions or dust",
      "Thyroid dysfunction (iodism) with chronic excessive intake",
      "Allergic-type reactions reported in a minority of iodine-sensitive individuals",
    ],
    classification: "Not classified as an acute hazard under GHS for standard laboratory or pharmaceutical-grade material",
  },

  interestingFacts: [
    "The molar mass of KI (166.00 g/mol) is dominated by iodine, which alone contributes over 76% of the total mass.",
    "Government stockpiles of potassium iodide tablets near nuclear facilities are a direct application of basic thyroid physiology and iodine chemistry.",
    "Iodized salt programs are considered one of the most successful and inexpensive public health interventions of the 20th century.",
    "Silver iodide derived from potassium iodide is the most common substance used worldwide for artificially inducing rainfall through cloud seeding.",
  ],

  history: `Bernard Courtois discovered elemental iodine in 1811 from seaweed ash, and potassium iodide soon followed as one of its principal salts. David Marine's research in the 1910s–1920s established the link between dietary iodine deficiency and goiter, leading Michigan to launch the first large-scale iodized salt program in the United States in 1924, a model rapidly adopted worldwide.`,

  discovery: "Bernard Courtois discovered iodine in 1811; potassium iodide's role in preventing goiter was established through David Marine's early 20th-century research.",

  examNotes: [
    "Molar mass KI = 39.10 + 126.90 = 166.00 g/mol.",
    "Iodide is oxidized to iodine by many oxidizers: 2 KI + Cl₂ → 2 KCl + I₂ (halogen displacement).",
    "Triiodide equilibrium: I⁻ + I₂ ⇌ I₃⁻ (increases effective iodine solubility in water).",
    "Iodometric titration endpoint: starch-iodine complex color change from deep blue-black to colorless as thiosulfate consumes I₂.",
  ],

  commonMistakes: [
    "Confusing KI (166.00 g/mol) with KIO₃ (potassium iodate, 214.00 g/mol) — very different oxidation states and stability.",
    "Assuming iodized salt tastes noticeably different — the added KI/KIO₃ concentration is far too low to affect taste.",
    "Forgetting that AgI is distinctly yellow and the least soluble of the common silver halide precipitates (AgCl white, AgBr cream, AgI yellow).",
  ],

  studentTips: [
    "Remember the halide precipitate color trend with AgNO₃ (white → cream → yellow) to quickly identify Cl⁻, Br⁻, and I⁻ in qualitative analysis.",
    "Link KI's role in radiological emergencies directly to the thyroid's natural iodine-uptake mechanism — it's a saturation strategy, not a chemical antidote.",
    "Use the starch-iodine complex color change as your visual cue for endpoint detection in iodometric titrations.",
  ],

  misconceptions: [
    "Potassium iodide tablets do not protect against all types of radiation exposure — they specifically block thyroid uptake of radioactive iodine, not other radioactive isotopes or external radiation.",
    "KI is not the same compound as iodine tincture — tincture is a solution of elemental iodine (often using KI to help dissolve it) in alcohol or water.",
    "Iodized salt is not a recent invention — mandatory or voluntary iodization programs have been in place in many countries since the 1920s.",
  ],

  physical: {
    appearance: "White to colorless crystalline solid, may show slight yellow tint with age from iodine release",
    color: "White to colorless (fresh); pale yellow (aged, oxidized)",
    odor: "Odorless (fresh); faint iodine odor when oxidized",
    stateAtSTP: "Solid",
    density: "3.12 g/cm³",
    meltingPoint: "681 °C",
    boilingPoint: "1,330 °C",
    solubility: "1,500 g/L water at 25 °C (extremely soluble)",
    crystalStructure: "Face-centered cubic (rock-salt structure)",
  },

  chemical: {
    classification: "Ionic salt / alkali metal halide",
    polarity: "Ionic",
    oxidationStates: "K: +1, I: −1",
    chemicalFamily: "Group 1 halide (alkali metal iodide)",
  },

  reactions: [
    {
      equation: "2 KI(aq) + Cl₂(g) → 2 KCl(aq) + I₂(s)",
      type: "Halogen displacement (redox)",
      conditions: "Aqueous, room temperature",
      explanation: "More reactive chlorine oxidizes iodide ion to elemental iodine, which appears as a brown solution or dark precipitate — a classic halogen reactivity demonstration.",
      products: "Potassium chloride and elemental iodine",
      applications: "Halogen reactivity demonstrations, water treatment iodine generation",
      relatedConcepts: ["Redox reactions", "Halogen displacement", "Activity trends"],
    },
    {
      equation: "KI(aq) + AgNO₃(aq) → AgI(s) + KNO₃(aq)",
      type: "Precipitation (double displacement)",
      conditions: "Aqueous, room temperature",
      explanation: "Silver ion combines with iodide to form a distinctly yellow precipitate of silver iodide, the least soluble of the common silver halides.",
      products: "Silver iodide precipitate (yellow) and potassium nitrate",
      applications: "Qualitative halide analysis, cloud seeding silver iodide production",
      relatedConcepts: ["Solubility rules", "Precipitation reactions", "Qualitative analysis"],
    },
    {
      equation: "2 Cu²⁺(aq) + 4 I⁻(aq) → 2 CuI(s) + I₂(aq)",
      type: "Redox with copper(II) (iodometric basis)",
      conditions: "Aqueous, room temperature",
      explanation: "Copper(II) ion oxidizes iodide to iodine while itself being reduced to insoluble white copper(I) iodide, a reaction underlying iodometric determination of copper content.",
      products: "Copper(I) iodide precipitate and elemental iodine",
      applications: "Iodometric copper determination, analytical chemistry",
      relatedConcepts: ["Redox reactions", "Iodometry", "Precipitation"],
    },
    {
      equation: "I₂(aq) + I⁻(aq) ⇌ I₃⁻(aq)",
      type: "Complex ion equilibrium (triiodide formation)",
      conditions: "Aqueous, excess iodide present",
      explanation: "Iodide ion combines with elemental iodine to form the soluble triiodide complex, greatly increasing iodine's effective solubility and enabling stable iodine tincture and antiseptic formulations.",
      products: "Triiodide ion (soluble complex)",
      applications: "Iodine antiseptic solutions, starch-iodine indicator chemistry",
      relatedConcepts: ["Complex ion equilibria", "Solubility enhancement", "Coordination chemistry"],
    },
  ],

  relatedFormulas: ["KIO3", "AgI", "NaI", "I2", "KBr"],
  comparisonNote: "KI (166.00 g/mol) has a markedly higher molar mass than KCl (74.55 g/mol) or KBr (119.00 g/mol) because iodine is the heaviest stable halogen commonly used in ionic salts, and it is also the most easily oxidized of the common halide ions.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of KI.",
      answer: "39.10 + 126.90 = 166.00 g/mol",
    },
    {
      question: "How many grams of KI are needed to prepare 1.00 L of 0.0500 M solution?",
      answer: "0.0500 mol/L × 1.00 L = 0.0500 mol; 0.0500 × 166.00 = 8.30 g",
    },
    {
      question: "What mass of AgI precipitates from complete reaction of 16.6 g KI with excess AgNO₃?",
      answer: "16.6 g ÷ 166.00 g/mol = 0.100 mol KI → 0.100 mol AgI × 234.77 g/mol = 23.48 g",
    },
    {
      question: "Why does adding KI to an iodine solution increase iodine's apparent solubility?",
      answer: "Iodide ion reacts with I₂ to form the soluble triiodide ion (I₃⁻), pulling more iodine into solution than would dissolve as I₂ alone.",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of potassium iodide?",
      answer: "166.00 g/mol.",
    },
    {
      question: "Why is potassium iodide added to table salt?",
      answer: "To prevent dietary iodine deficiency, which causes goiter and can impair fetal neurological development.",
    },
    {
      question: "How does potassium iodide protect against radiation?",
      answer: "High doses saturate the thyroid gland with stable iodine, blocking uptake of radioactive iodine-131 released during nuclear accidents.",
    },
    {
      question: "What color precipitate forms when KI reacts with silver nitrate?",
      answer: "A distinctly yellow precipitate of silver iodide (AgI), the least soluble common silver halide.",
    },
    {
      question: "Is potassium iodide used in photography?",
      answer: "Historically yes, for certain silver iodide photographic emulsions and specialty processes, though it is now more associated with cloud seeding.",
    },
  ],

  references: [
    { label: "PubChem CID 4875", note: "Potassium iodide compound data" },
    { label: "World Health Organization", note: "Iodine deficiency and salt iodization guidance" },
    { label: "NIST Chemistry WebBook", note: "Thermodynamic properties" },
  ],
};
