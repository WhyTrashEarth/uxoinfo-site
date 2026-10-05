export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "UXO.ECO",
  description:
    "UXO.ECO is a source-led public-interest project about unexploded ordnance, explosive remnants of war, their lasting humanitarian and environmental impacts, and professional mine action.",

  lastSubstantiveReview: "2026-10-05",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://uxo.eco",

  contactEmail: "hello@uxo.eco",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;
