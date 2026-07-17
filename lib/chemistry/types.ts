export type CompoundCategory =
  | "acid"
  | "base"
  | "salt"
  | "oxide"
  | "gas"
  | "organic"
  | "inorganic"
  | "hydrocarbon"
  | "element";

export type PhysicalProperties = {
  appearance?: string;
  color?: string;
  odor?: string;
  stateAtSTP?: string;
  density?: string;
  meltingPoint?: string;
  boilingPoint?: string;
  flashPoint?: string;
  solubility?: string;
  crystalStructure?: string;
};

export type ChemicalProperties = {
  classification: string;
  acidity?: string;
  basicity?: string;
  polarity?: string;
  molecularGeometry?: string;
  bondAngle?: string;
  oxidationStates?: string;
  chemicalFamily: string;
};

export type ChemicalReaction = {
  equation: string;
  type: string;
  conditions: string;
  explanation: string;
  products: string;
  applications: string;
  relatedConcepts: string[];
};

export type PracticeQuestion = {
  question: string;
  answer: string;
  hint?: string;
};

export type CompoundProfile = {
  slug: string;
  formula: string;
  name: string;
  iupacName: string;
  commonNames: string[];
  aliases: string[];
  category: CompoundCategory;
  categories: CompoundCategory[];
  casNumber?: string;
  pubchemCid?: string;
  smiles?: string;
  inchi?: string;
  exactMass?: number;
  overview: string;
  formulaExplanation: string;
  chemicalProfile: string;
  /** Compound-specific educational topics that do not apply generically to every substance. */
  uniqueTopics?: { heading: string; body: string }[];
  applications: {
    industrial: string[];
    laboratory: string[];
    environmental?: string;
    biological?: string;
  };
  preparation: string;
  production?: string;
  storage: string;
  handling: string;
  safety: {
    summary: string;
    hazards: string[];
    classification?: string;
  };
  interestingFacts: string[];
  history: string;
  discovery?: string;
  examNotes: string[];
  commonMistakes: string[];
  studentTips: string[];
  misconceptions: string[];
  physical: PhysicalProperties;
  chemical: ChemicalProperties;
  reactions: ChemicalReaction[];
  relatedFormulas: string[];
  comparisonNote?: string;
  practiceQuestions: PracticeQuestion[];
  faqs: { question: string; answer: string }[];
  references: { label: string; note: string }[];
  featured?: boolean;
  popular?: boolean;
};
