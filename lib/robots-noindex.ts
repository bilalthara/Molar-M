/** Shared robots directive for legal/utility pages that should not compete for rankings. */
export const robotsNoIndex = {
  index: false,
  follow: true,
} as const;
