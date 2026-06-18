export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.hansel.ai";

export const SITE_NAME = "Hansel.ai";
export const SITE_LEGAL_NAME = "Huddle Science Inc.";
export const BRAND_BLUE = "#1B4B91";

export const SITE_TAGLINE =
  "Build a workforce that's socially well, measurably.";

export const SITE_DESCRIPTION =
  "Hansel.ai is the iOS tool for healthy social habits. We help people build social wellbeing and give organizations a measurable social health score.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/the-science", label: "The Science" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
] as const;
