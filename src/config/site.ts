export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "UXO.INFO",
  description:
    "UXO.INFO is a public-interest information project about unexploded ordnance, its impacts, and professional clearance.",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://uxo.info",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;
