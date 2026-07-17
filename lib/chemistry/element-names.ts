/** Display names for beginner-friendly calculation copy. */
export const ELEMENT_NAMES: Record<string, string> = {
  H: "Hydrogen",
  He: "Helium",
  Li: "Lithium",
  Be: "Beryllium",
  B: "Boron",
  C: "Carbon",
  N: "Nitrogen",
  O: "Oxygen",
  F: "Fluorine",
  Ne: "Neon",
  Na: "Sodium",
  Mg: "Magnesium",
  Al: "Aluminum",
  Si: "Silicon",
  P: "Phosphorus",
  S: "Sulfur",
  Cl: "Chlorine",
  Ar: "Argon",
  K: "Potassium",
  Ca: "Calcium",
  Fe: "Iron",
  Cu: "Copper",
  Zn: "Zinc",
  Br: "Bromine",
  Ag: "Silver",
  I: "Iodine",
  Ba: "Barium",
  Pb: "Lead",
};

export function elementName(symbol: string): string {
  return ELEMENT_NAMES[symbol] ?? symbol;
}
