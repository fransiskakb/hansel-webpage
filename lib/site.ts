export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.hansel.ai";

export const SITE_NAME = "Hansel";

export const SITE_TAGLINE =
  "Build a workforce that's socially well, measurably.";

export const SITE_DESCRIPTION =
  "Hansel is the iOS coach for healthy social habits. We help people build social wellbeing and give organizations a measurable social health score.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/the-science", label: "The Science" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
] as const;
