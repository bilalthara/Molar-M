import type { CompoundProfile } from "@/lib/chemistry/types";

export const sulfurDioxide: CompoundProfile = {
  slug: "molar-mass-of-sulfur-dioxide",
  formula: "SO2",
  name: "Sulfur Dioxide",
  iupacName: "Sulfur dioxide",
  commonNames: ["Sulfur dioxide", "Sulfurous anhydride", "Sulfurous acid gas"],
  aliases: ["SO₂", "E220 (food preservative)"],
  category: "gas",
  categories: ["gas", "oxide", "inorganic"],
  casNumber: "7446-09-5",
  pubchemCid: "1119",
  smiles: "O=S=O",
  inchi: "InChI=1S/O2S/c1-3-2",
  exactMass: 63.961901,
  featured: true,
  popular: true,

  overview: `Sulfur dioxide (SO₂) is a bent triatomic molecule with a molar mass of 64.07 g/mol, formed from one sulfur atom and two oxygen atoms. It is a colorless gas with a sharp, choking odor detectable at very low concentrations (below 1 ppm), an evolutionary warning system since SO₂ is irritating to the respiratory tract even at levels well below those causing serious harm. Unlike the symmetric, non-polar CO₂, sulfur dioxide's bent geometry (bond angle ≈ 119°) gives it a permanent dipole moment, making it a polar molecule with markedly different physical behavior — it liquefies far more readily than CO₂ and is much more soluble in water.

SO₂ is both a natural and anthropogenic atmospheric constituent. Volcanic eruptions inject enormous quantities of SO₂ into the atmosphere, where it oxidizes to sulfate aerosols that can measurably cool global climate for months to years after major eruptions. On the anthropogenic side, burning sulfur-containing fossil fuels (particularly coal and some petroleum products) releases SO₂ that reacts with atmospheric water and oxidants to form sulfuric acid droplets — the principal chemical cause of acid rain, which damages forests, acidifies lakes, and corrodes stone buildings and monuments.

Despite its environmental notoriety, SO₂ has been used deliberately for millennia as a preservative and antimicrobial agent, particularly in winemaking, where sulfite additions inhibit spoilage organisms and prevent oxidative browning. Industrially, SO₂ is also the essential first intermediate in the contact process for manufacturing sulfuric acid, meaning the world's most-produced industrial chemical begins its synthesis as this same pungent, reactive gas.`,

  formulaExplanation: `The formula SO₂ shows sulfur bonded to two oxygen atoms with a bent molecular geometry, analogous in shape to ozone (O₃) because sulfur retains a lone pair of electrons in its valence shell (using resonance-delocalized S=O double-bond character across both oxygens rather than one single and one double bond). This bent shape, combined with the electronegativity difference between S and O, produces a net molecular dipole moment of about 1.63 D.`,

  chemicalProfile: `Sulfur dioxide is an acidic oxide: it dissolves in water to form the weak, unstable diprotic acid sulfurous acid (H₂SO₃), which exists mainly as a hydrated SO₂ equilibrium rather than as a fully isolable pure compound. SO₂ can act as both an oxidizing and a reducing agent depending on the reaction partner — it is oxidized to SO₃ (and ultimately sulfate) in the contact process and in atmospheric acid-rain chemistry, but it can reduce stronger oxidizers such as potassium permanganate or dichromate in redox titrations. Its antimicrobial and antioxidant bleaching action stems from its ability to react with and inactivate microbial enzymes and pigments.`,

  uniqueTopics: [
    {
      heading: "Acid rain: from SO2 to sulfuric acid droplets",
      body: "When SO₂ from fossil fuel combustion or volcanic activity enters the atmosphere, it is oxidized — by ozone, hydrogen peroxide, or hydroxyl radicals — first to SO₃ and then hydrated to sulfuric acid aerosol droplets, or it dissolves directly in cloud water to form sulfurous acid that is further oxidized in solution. These acidic droplets fall as acid rain (pH often below 4.5 in heavily polluted regions), which leaches nutrients from soil, acidifies lakes and streams to levels lethal for fish and amphibians, and chemically dissolves calcium carbonate in marble and limestone monuments and buildings over time.",
    },
    {
      heading: "Winemaking and food preservation: the role of sulfites",
      body: "Sulfur dioxide, added as SO₂ gas, potassium metabisulfite, or sodium sulfite, is a cornerstone preservative in winemaking (labeled 'contains sulfites' on bottles) and in dried fruit processing (E220–E228 additive codes). It works by inhibiting spoilage bacteria and wild yeasts, scavenging oxygen to prevent oxidative browning and off-flavors, and binding to acetaldehyde and other reactive compounds that would otherwise degrade flavor and color. A minority of people are sensitive to sulfites, experiencing asthma-like symptoms, which is why regulatory labeling of sulfite content in food and beverages is legally required in many countries.",
    },
    {
      heading: "Contact process precursor: the first step to sulfuric acid",
      body: "SO₂ is the essential starting intermediate for the industrial contact process that manufactures sulfuric acid, the world's highest-volume manufactured chemical. Sulfur or sulfide ores are burned to generate SO₂, which is then catalytically oxidized (V₂O₅ catalyst, ~450 °C) to SO₃, and finally absorbed into strong sulfuric acid to form oleum, which is diluted to the desired final acid concentration. This means enormous global chemical infrastructure exists specifically to produce, purify, and further react SO₂ under carefully controlled industrial conditions.",
    },
    {
      heading: "Volcanic SO2 and its climatic influence",
      body: "Large explosive volcanic eruptions can inject millions of tonnes of SO₂ directly into the stratosphere, where it slowly oxidizes to sulfate aerosols that reflect incoming sunlight and can measurably cool Earth's average surface temperature for one to two years afterward — the 1991 Mount Pinatubo eruption, for example, lowered global temperatures by roughly 0.5 °C for over a year. This natural analog to proposed stratospheric geoengineering schemes illustrates how SO₂-derived aerosols have both destructive (acid rain) and, at a global-climate scale, temporarily cooling atmospheric effects depending on where and how much is released.",
    },
    {
      heading: "Bleaching and antimicrobial chemistry",
      body: "Sulfur dioxide bleaches organic pigments through a reversible chemical reaction rather than the oxidative destruction used by chlorine-based bleaches; it adds to colored double-bond systems, temporarily disrupting the conjugation responsible for visible color. This reversibility means SO₂-bleached materials (such as some dried fruits or wood pulp) can slowly regain color on exposure to light or heat as the reaction reverses, distinguishing SO₂ bleaching from the permanent oxidative bleaching achieved by hypochlorite or peroxide.",
    },
  ],

  applications: {
    industrial: [
      "Precursor to sulfuric acid via the contact process",
      "Bleaching agent for wood pulp, paper, and textile fibers",
      "Refrigerant in early industrial refrigeration systems (largely phased out)",
      "Fumigant and disinfectant for storage facilities and shipping containers",
    ],
    laboratory: [
      "Reducing agent in redox titrations and analytical chemistry",
      "Preparation of sulfurous acid and sulfite salts",
      "Model compound for studying bent triatomic molecular geometry and resonance",
    ],
    environmental: "Major precursor to acid rain and secondary sulfate particulate air pollution; heavily regulated flue-gas emission from coal-fired power plants and industrial smelters, commonly controlled with limestone scrubbers.",
    biological: "Used as food preservative E220 (sulfites) in wine, dried fruit, and processed foods; can trigger asthma-like reactions in sulfite-sensitive individuals; irritating to the respiratory tract at elevated concentrations.",
  },

  preparation: `Laboratory sulfur dioxide is generated by burning elemental sulfur in air or oxygen (S + O₂ → SO₂), or by treating a sulfite or bisulfite salt with dilute acid (Na₂SO₃ + 2 HCl → 2 NaCl + H₂O + SO₂). It can also be produced by reducing concentrated sulfuric acid with copper: Cu + 2 H₂SO₄ → CuSO₄ + SO₂ + 2 H₂O.`,

  production: `Industrially, SO₂ is produced primarily by burning elemental sulfur or roasting metal sulfide ores (such as pyrite or sphalerite) in air, generating the feed gas for the contact process, and it is also recovered as a byproduct from flue-gas desulfurization at power plants and smelters.`,

  storage: `Store compressed liquefied SO₂ in corrosion-resistant steel cylinders in cool, well-ventilated areas away from moisture, since SO₂ reacts with water to form corrosive sulfurous acid. Keep away from strong oxidizers and bases.`,

  handling: `Handle only with adequate ventilation or fume hood containment; SO₂ is a severe respiratory irritant even at low concentrations. Use appropriate respiratory protection and eye protection when handling concentrated gas or liquefied SO₂.`,

  safety: {
    summary: "Toxic and corrosive respiratory irritant gas; low-level exposure causes coughing and throat irritation, while higher concentrations can cause severe airway damage and pulmonary edema.",
    hazards: [
      "Severe respiratory tract and eye irritation, even at low concentrations",
      "Corrosive to moist tissue due to formation of sulfurous acid on contact",
      "Can trigger bronchospasm in asthmatics and sulfite-sensitive individuals",
      "Contributes to acid rain and secondary particulate pollution downstream",
    ],
    classification: "GHS: Acute Tox. 3 (inhalation), Skin Corr. 1B, Eye Dam. 1",
  },

  interestingFacts: [
    "Humans can detect SO₂ by smell at concentrations as low as 0.3–1 ppm, well below immediately hazardous levels, providing a natural early warning.",
    "The 1991 Mount Pinatubo eruption released an estimated 20 million tonnes of SO₂, temporarily cooling global average temperatures.",
    "Sulfite preservatives (SO₂ derivatives) have been used in winemaking since Roman times, long before their chemistry was understood.",
    "SO₂ scrubbing technology in coal power plants has cut acid-rain-causing emissions by well over 90% in many regions since the 1970s–1990s regulatory era.",
  ],

  history: `Sulfur dioxide's preservative properties were exploited empirically by burning sulfur candles to fumigate wine barrels since Roman antiquity, though its chemical identity was not understood until the study of combustion gases in the 18th century. Its central role in the industrial sulfuric acid trade grew through the lead-chamber process (18th–19th centuries) and later the more efficient contact process (early 20th century). Recognition of SO₂'s role in acid rain during the mid-to-late 20th century drove major regulatory action, including flue-gas desulfurization mandates and emissions trading programs.`,

  discovery: "Sulfur combustion fumes were used practically since antiquity; the gas was characterized chemically during 18th-century studies of combustion, with its role in acid rain formally established through 20th-century atmospheric chemistry research.",

  examNotes: [
    "Molar mass SO₂ = 32.07 + 2(16.00) = 64.07 g/mol.",
    "SO₂ has a bent geometry (~119° bond angle) due to a lone pair on sulfur, unlike the linear, nonpolar CO₂ — contrast these two acidic oxides in geometry questions.",
    "Contact process key step: 2 SO₂ + O₂ ⇌ 2 SO₃ (V₂O₅ catalyst) — the industrial link between SO₂ and sulfuric acid production.",
    "SO₂ + H₂O ⇌ H₂SO₃ (sulfurous acid) — a weak, diprotic acid distinct from sulfuric acid (H₂SO₄).",
  ],

  commonMistakes: [
    "Confusing sulfurous acid (H₂SO₃, from SO₂) with sulfuric acid (H₂SO₄) — different oxidation states of sulfur (+4 vs +6) and very different acid strengths.",
    "Assuming SO₂ is linear like CO₂ — SO₂ is bent because sulfur retains a lone pair, giving it a permanent dipole moment.",
    "Forgetting that SO₂ is itself an intermediate, not the final industrial acid product — it must be further oxidized to SO₃ before becoming sulfuric acid.",
  ],

  studentTips: [
    "Compare SO₂ and CO₂ side by side (bent vs linear, polar vs nonpolar, weak diprotic acid vs true acidic anhydride) to lock in acidic-oxide geometry concepts.",
    "Remember the oxidation state progression S(0) in elemental sulfur → S(+4) in SO₂ → S(+6) in SO₃/H₂SO₄ for redox and industrial chemistry questions.",
    "Link sulfite food-labeling ('contains sulfites') to SO₂ chemistry as a memorable everyday application.",
  ],

  misconceptions: [
    "SO₂ is not the same compound as SO₃ (sulfur trioxide) — SO₃ is the more oxidized, more reactive precursor to sulfuric acid itself, one step past SO₂.",
    "Not all acid rain comes from SO₂ alone; nitrogen oxides (NOₓ) also contribute significantly, forming nitric acid components of acid precipitation.",
    "Sulfite sensitivity is a distinct reaction from a true food allergy and does not affect the entire population equally — most people tolerate normal dietary SO₂ levels without issue.",
  ],

  physical: {
    appearance: "Colorless gas with a sharp, pungent, choking odor",
    color: "Colorless",
    odor: "Sharp, irritating, choking odor detectable at very low concentrations",
    stateAtSTP: "Gas",
    density: "2.63 g/L at 25 °C (denser than air)",
    meltingPoint: "−72.7 °C",
    boilingPoint: "−10.0 °C",
    solubility: "94 g/L water at 25 °C (much more soluble than CO2 due to polarity)",
    crystalStructure: "Not applicable at standard conditions (gas)",
  },

  chemical: {
    classification: "Acidic oxide (non-metal oxide)",
    polarity: "Polar (dipole moment ≈ 1.63 D)",
    molecularGeometry: "Bent (angular)",
    bondAngle: "~119°",
    oxidationStates: "S: +4, O: −2",
    chemicalFamily: "Group 16 dioxide / acidic oxide of sulfur",
  },

  reactions: [
    {
      equation: "2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)",
      type: "Catalytic oxidation (contact process step)",
      conditions: "V₂O₅ catalyst, ~450 °C, 1–2 atm",
      explanation: "Sulfur dioxide is oxidized to sulfur trioxide over a vanadium pentoxide catalyst, the essential intermediate step toward industrial sulfuric acid manufacture.",
      products: "Sulfur trioxide",
      applications: "Industrial sulfuric acid production, catalysis case studies",
      relatedConcepts: ["Heterogeneous catalysis", "Le Chatelier's principle", "Industrial chemistry"],
    },
    {
      equation: "SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)",
      type: "Hydration (acid formation)",
      conditions: "Aqueous, ambient conditions",
      explanation: "SO₂ dissolves in water to form the weak, diprotic sulfurous acid, the chemical basis of acid rain formation when atmospheric SO₂ dissolves in cloud droplets.",
      products: "Sulfurous acid (equilibrium with HSO₃⁻ and SO₃²⁻)",
      applications: "Acid rain chemistry, sulfite preservative equilibria in food and wine",
      relatedConcepts: ["Weak acids", "Acidic oxides", "Equilibrium"],
    },
    {
      equation: "Cu(s) + 2 H₂SO₄(conc) → CuSO₄(aq) + SO₂(g) + 2 H₂O(l)",
      type: "Redox (reduction of concentrated acid)",
      conditions: "Hot concentrated sulfuric acid",
      explanation: "Concentrated sulfuric acid oxidizes copper metal while itself being reduced from S(+6) to S(+4), releasing SO₂ gas — a common laboratory demonstration of SO₂ generation.",
      products: "Copper(II) sulfate, sulfur dioxide, water",
      applications: "Laboratory SO₂ generation, demonstrating oxidizing acid behavior",
      relatedConcepts: ["Redox reactions", "Oxidation state changes", "Acid reactivity"],
    },
    {
      equation: "Na₂SO₃(s) + 2 HCl(aq) → 2 NaCl(aq) + H₂O(l) + SO₂(g)",
      type: "Acid–salt displacement",
      conditions: "Dilute HCl, room temperature",
      explanation: "A stronger acid displaces the weaker, volatile sulfurous acid from its salt, releasing SO₂ gas directly — the standard laboratory method for generating small quantities of SO₂.",
      products: "Sodium chloride, water, and sulfur dioxide gas",
      applications: "Laboratory gas generation, qualitative test for sulfite ion",
      relatedConcepts: ["Acid displacement", "Gas evolution", "Qualitative analysis"],
    },
  ],

  relatedFormulas: ["H2SO4", "SO3", "H2S", "CO2", "CaCO3"],
  comparisonNote: "SO₂ (64.07 g/mol, bent, polar, weak acidic oxide) contrasts with CO₂ (44.01 g/mol, linear, nonpolar) — both acidic oxides from combustion, but SO₂ is far more chemically reactive, more soluble in water, and the direct precursor to sulfuric acid rather than carbonic acid.",

  practiceQuestions: [
    {
      question: "Calculate the molar mass of sulfur dioxide, SO₂.",
      answer: "32.07 + 2(16.00) = 64.07 g/mol",
    },
    {
      question: "How many moles of SO₂ are produced from burning 64 g of sulfur completely (S + O₂ → SO₂)?",
      answer: "64 g S ÷ 32.07 g/mol ≈ 2.0 mol S → 2.0 mol SO₂ produced (1:1 stoichiometry)",
    },
    {
      question: "Why is SO₂ polar while CO₂ is nonpolar, even though both have two oxygen atoms?",
      answer: "SO₂ is bent (sulfur has a lone pair) so the bond dipoles do not cancel, giving a net dipole; CO₂ is linear and symmetric, so its bond dipoles cancel exactly.",
    },
    {
      question: "What mass of SO₃ can be produced from 128 g of SO₂ via the contact process (2 SO₂ + O₂ → 2 SO₃)?",
      answer: "128 g ÷ 64.07 g/mol = 2.0 mol SO₂ → 2.0 mol SO₃ = 2.0 × 80.07 = 160.1 g",
    },
  ],

  faqs: [
    {
      question: "What is the molar mass of sulfur dioxide?",
      answer: "64.07 g/mol, from 32.07 (S) + 2 × 16.00 (O).",
    },
    {
      question: "Is sulfur dioxide the same as sulfuric acid?",
      answer: "No. SO₂ is a gas with sulfur in the +4 oxidation state; sulfuric acid (H₂SO₄) has sulfur in the +6 state and is made from SO₂ via further oxidation and hydration.",
    },
    {
      question: "Why is sulfur dioxide used in winemaking?",
      answer: "It acts as a preservative and antioxidant, inhibiting spoilage microorganisms and preventing oxidative browning and off-flavors in wine and dried fruit.",
    },
    {
      question: "How does sulfur dioxide cause acid rain?",
      answer: "SO₂ released from combustion is oxidized in the atmosphere and dissolves in cloud droplets, forming sulfurous and sulfuric acid that falls as acid precipitation.",
    },
    {
      question: "Can sulfur dioxide affect human health?",
      answer: "Yes — it irritates the eyes and respiratory tract even at low concentrations and can trigger bronchospasm in asthmatics or sulfite-sensitive individuals.",
    },
  ],

  references: [
    { label: "EPA", note: "Sulfur dioxide air quality standards and acid rain program data" },
    { label: "NIST Chemistry WebBook", note: "Thermophysical properties of sulfur dioxide" },
    { label: "PubChem CID 1119", note: "Structural and safety identifiers" },
  ],
};
