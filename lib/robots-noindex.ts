import type { Metadata } from "next";

/** Use on legal, policy, and company pages that should not appear in search indexes. */
export const robotsNoIndex: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
  },
};
