export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "UXO.INFO",
  description:
    "UXO.INFO is a source-led public-interest project about unexploded ordnance, explosive remnants of war, their lasting impacts, and professional mine action.",

  lastSubstantiveReview: "2026-10-05",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://uxo.info",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;
