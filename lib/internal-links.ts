export type InternalLinkType = "home" | "calculator" | "periodic" | "list";

export function getInternalLink(type: InternalLinkType) {
  return {
    home: "/",
    calculator: "/calculator",
    periodic: "/periodic-table-with-molar-mass",
    list: "/molar-mass-list-top-500",
  }[type];
}
