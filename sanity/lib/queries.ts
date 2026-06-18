import { groq } from "next-sanity";

const sectionsProjection = groq`
  sections[]{
    _type, _key,
    // hero
    eyebrow, headline, subhead,
    primaryCta{ label, href, opensWaitlist, audienceHint },
    secondaryCta{ label, href, opensWaitlist, audienceHint },
    image{ asset->{ _id, url, metadata{ dimensions } }, alt },
    // statBand
    stats[]{ value, label, source },
    // pillars
    pillars[]{ icon, headline, body },
    // howItWorks
    steps[]{ number, headline, body },
    // quote
    quote, attribution, role, logo{ asset->{ url } },
    // logoCloud
    logos[]{ alt, image{ asset->{ url } } },
    // scienceTeaser
    body, cta{ label, href, opensWaitlist, audienceHint },
    // waitlist block
    audience,
    // blogTeaser
    autoFromLatest, count,
    featuredPosts[]->{ _id, title, "slug": slug.current, excerpt, publishedAt,
      coverImage{ asset->{ url }, alt },
      "category": categories[0]->{ title, "slug": slug.current, color }
    },
    // teamTeaser
    "members": *[_type == "teamMember" && !isAdvisor] | order(order asc, name asc){
      _id, name, role, "photo": photo.asset->url, "bio": bio
    },
    // richText
    "richBody": body,
    // faq
    items[]{ q, a },
    // ctaBand
    title, description,
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName, tagline,
    "logo": logo.asset->url,
    primaryNav[]{ label, href },
    footerNav[]{ label, href },
    social[]{ label, href },
    seo{ title, description, "ogImage": ogImage.asset->url }
  }
`;

export const homePageQuery = groq`
  *[_type == "page" && slug.current == "home"][0]{
    title,
    "slug": slug.current,
    seo{ title, description, noIndex, "ogImage": ogImage.asset->url },
    ${sectionsProjection}
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    seo{ title, description, noIndex, "ogImage": ogImage.asset->url },
    ${sectionsProjection}
  }
`;

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, publishedAt,
    coverImage{ asset->{ url, metadata{ dimensions } }, alt },
    "category": categories[0]->{ title, "slug": slug.current, color },
    "author": author->{ name, "photo": photo.asset->url }
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$count]{
    _id, title, "slug": slug.current, excerpt, publishedAt,
    coverImage{ asset->{ url }, alt },
    "category": categories[0]->{ title, "slug": slug.current, color }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, excerpt, publishedAt,
    coverImage{ asset->{ url, metadata{ dimensions } }, alt },
    body,
    seo{ title, description, "ogImage": ogImage.asset->url, noIndex },
    "category": categories[0]->{ title, "slug": slug.current, color },
    "author": author->{ name, role, "photo": photo.asset->url, bio }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const teamQuery = groq`
  {
    "team": *[_type == "teamMember" && !isAdvisor] | order(order asc, name asc){
      _id, name, role, linkedin,
      "photo": photo.asset->url, bio
    },
    "advisors": *[_type == "teamMember" && isAdvisor] | order(order asc, name asc){
      _id, name, role, linkedin,
      "photo": photo.asset->url, bio
    }
  }
`;

export const legalPageQuery = groq`
  *[_type == "legalPage" && slug.current == $slug][0]{
    title, "slug": slug.current, body
  }
`;

export const sitemapQuery = groq`
  {
    "pages": *[_type == "page" && defined(slug.current)]{ "slug": slug.current, _updatedAt },
    "posts": *[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }
  }
`;
