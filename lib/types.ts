import type { PortableTextBlock } from "@portabletext/types";

export type CtaT = {
  label: string;
  href?: string;
  opensWaitlist?: boolean;
  audienceHint?: "individual" | "organization";
};

export type ImageT = {
  asset?: { _id?: string; url?: string; metadata?: { dimensions?: { width: number; height: number; aspectRatio: number } } };
  alt?: string;
};

export type SeoT = {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
} | null;

export type HeroBlock = {
  _type: "heroBlock";
  _key: string;
  eyebrow?: string;
  headline: string;
  subhead?: string;
  primaryCta?: CtaT;
  secondaryCta?: CtaT;
  image?: ImageT;
};

export type StatBandBlock = {
  _type: "statBandBlock";
  _key: string;
  eyebrow?: string;
  stats: { value: string; label: string; source?: string }[];
};

export type PillarsBlock = {
  _type: "pillarsBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  pillars: { icon?: string; headline: string; body?: string }[];
  /** When true, render the iOS phone mockup beside the pillars. */
  withPhone?: boolean;
};

export type HowItWorksBlock = {
  _type: "howItWorksBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  steps: { number?: string; headline: string; body?: string }[];
  image?: ImageT;
};

export type QuoteBlock = {
  _type: "quoteBlock";
  _key: string;
  quote: string;
  attribution?: string;
  role?: string;
  logo?: { asset?: { url?: string } };
};

export type LogoCloudBlock = {
  _type: "logoCloudBlock";
  _key: string;
  eyebrow?: string;
  logos: { alt: string; image: { asset?: { url?: string } } }[];
};

export type ScienceTeaserBlock = {
  _type: "scienceTeaserBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  body?: string;
  cta?: CtaT;
  image?: ImageT;
};

export type WaitlistBlock = {
  _type: "waitlistBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  body?: string;
  audience?: "individual" | "organization";
};

export type PostCardT = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: ImageT;
  category?: { title: string; slug: string; color?: string };
};

export type BlogTeaserBlock = {
  _type: "blogTeaserBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  autoFromLatest?: boolean;
  count?: number;
  featuredPosts?: PostCardT[];
};

export type TeamMemberT = {
  _id: string;
  name: string;
  role: string;
  photo?: string;
  bio?: PortableTextBlock[];
  linkedin?: string;
};

export type TeamTeaserBlock = {
  _type: "teamTeaserBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  members?: TeamMemberT[];
};

export type RichTextBlock = {
  _type: "richTextBlock";
  _key: string;
  richBody: PortableTextBlock[];
};

export type FaqBlock = {
  _type: "faqBlock";
  _key: string;
  eyebrow?: string;
  headline?: string;
  items: { q: string; a: string }[];
};

export type CtaBandBlock = {
  _type: "ctaBandBlock";
  _key: string;
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: CtaT;
  secondaryCta?: CtaT;
};

export type Section =
  | HeroBlock
  | StatBandBlock
  | PillarsBlock
  | HowItWorksBlock
  | QuoteBlock
  | LogoCloudBlock
  | ScienceTeaserBlock
  | WaitlistBlock
  | BlogTeaserBlock
  | TeamTeaserBlock
  | RichTextBlock
  | FaqBlock
  | CtaBandBlock;

export type PageDoc = {
  title: string;
  slug: string;
  seo: SeoT;
  sections: Section[];
};

export type PostDoc = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: ImageT;
  body?: PortableTextBlock[];
  seo?: SeoT;
  category?: { title: string; slug: string; color?: string };
  author?: { name: string; role?: string; photo?: string; bio?: string };
};

export type LegalPageDoc = {
  title: string;
  slug: string;
  body: PortableTextBlock[];
};
