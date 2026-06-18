import { defineField, defineType } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "subhead", type: "text", rows: 3 }),
    defineField({ name: "primaryCta", type: "cta" }),
    defineField({ name: "secondaryCta", type: "cta" }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string" }],
    }),
  ],
  preview: { select: { title: "headline" }, prepare: ({ title }) => ({ title: title || "Hero", subtitle: "Hero block" }) },
});

export const statBandBlock = defineType({
  name: "statBandBlock",
  title: "Stat band",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "stats",
      type: "array",
      validation: (r) => r.min(2).max(4),
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", validation: (r) => r.required() },
            { name: "label", type: "string", validation: (r) => r.required() },
            { name: "source", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Stat band" }) },
});

export const pillarsBlock = defineType({
  name: "pillarsBlock",
  title: "Pillars",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({
      name: "pillars",
      type: "array",
      validation: (r) => r.min(2).max(4),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              description: "Lucide icon name (e.g. activity, heart-handshake, line-chart)",
            },
            { name: "headline", type: "string", validation: (r) => r.required() },
            { name: "body", type: "text", rows: 3 },
          ],
          preview: { select: { title: "headline" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pillars" }) },
});

export const howItWorksBlock = defineType({
  name: "howItWorksBlock",
  title: "How it works",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({
      name: "steps",
      type: "array",
      validation: (r) => r.min(2).max(5),
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", description: "01, 02…" },
            { name: "headline", type: "string", validation: (r) => r.required() },
            { name: "body", type: "text", rows: 3 },
          ],
          preview: { select: { title: "headline", subtitle: "number" } },
        },
      ],
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "How it works" }) },
});

export const quoteBlock = defineType({
  name: "quoteBlock",
  title: "Quote",
  type: "object",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "attribution", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "logo", type: "image" }),
  ],
  preview: { select: { title: "attribution", subtitle: "quote" } },
});

export const logoCloudBlock = defineType({
  name: "logoCloudBlock",
  title: "Logo cloud",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({
      name: "logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "alt", type: "string", validation: (r) => r.required() },
            { name: "image", type: "image", validation: (r) => r.required() },
          ],
          preview: { select: { title: "alt", media: "image" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Logo cloud" }) },
});

export const scienceTeaserBlock = defineType({
  name: "scienceTeaserBlock",
  title: "Science teaser",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "body", type: "text", rows: 4 }),
    defineField({ name: "cta", type: "cta" }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Science teaser" }) },
});

export const waitlistBlock = defineType({
  name: "waitlistBlock",
  title: "Waitlist",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "body", type: "text", rows: 3 }),
    defineField({
      name: "audience",
      type: "string",
      options: { list: ["individual", "organization"], layout: "radio" },
      initialValue: "individual",
    }),
  ],
  preview: { select: { title: "headline" }, prepare: ({ title }) => ({ title: title || "Waitlist" }) },
});

export const blogTeaserBlock = defineType({
  name: "blogTeaserBlock",
  title: "Blog teaser",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "autoFromLatest", type: "boolean", title: "Auto-pull latest posts", initialValue: true }),
    defineField({ name: "count", type: "number", initialValue: 3, hidden: ({ parent }) => !parent?.autoFromLatest }),
    defineField({
      name: "featuredPosts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      hidden: ({ parent }) => !!parent?.autoFromLatest,
    }),
  ],
  preview: { prepare: () => ({ title: "Blog teaser" }) },
});

export const teamTeaserBlock = defineType({
  name: "teamTeaserBlock",
  title: "Team teaser",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Team teaser" }) },
});

export const richTextBlock = defineType({
  name: "richTextBlock",
  title: "Rich text",
  type: "object",
  fields: [
    defineField({ name: "body", type: "portableText" }),
  ],
  preview: { prepare: () => ({ title: "Rich text" }) },
});

export const faqBlock = defineType({
  name: "faqBlock",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "headline", type: "string" }),
    defineField({
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Question", validation: (r) => r.required() },
            { name: "a", type: "text", title: "Answer", rows: 4, validation: (r) => r.required() },
          ],
          preview: { select: { title: "q" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "FAQ" }) },
});

export const ctaBandBlock = defineType({
  name: "ctaBandBlock",
  title: "CTA band",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "primaryCta", type: "cta" }),
    defineField({ name: "secondaryCta", type: "cta" }),
  ],
  preview: { select: { title: "title" } },
});

export const allBlocks = [
  heroBlock,
  statBandBlock,
  pillarsBlock,
  howItWorksBlock,
  quoteBlock,
  logoCloudBlock,
  scienceTeaserBlock,
  waitlistBlock,
  blogTeaserBlock,
  teamTeaserBlock,
  richTextBlock,
  faqBlock,
  ctaBandBlock,
];
