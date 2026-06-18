import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string", initialValue: "Hansel" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "logo", type: "image" }),
    defineField({
      name: "primaryNav",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "string" }], preview: { select: { title: "label", subtitle: "href" } } }],
    }),
    defineField({
      name: "footerNav",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "string" }], preview: { select: { title: "label", subtitle: "href" } } }],
    }),
    defineField({
      name: "social",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "href", type: "url" }], preview: { select: { title: "label", subtitle: "href" } } }],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "seo", type: "seo" }),
    defineField({
      name: "sections",
      title: "Page sections",
      type: "array",
      of: [
        { type: "heroBlock" },
        { type: "statBandBlock" },
        { type: "pillarsBlock" },
        { type: "howItWorksBlock" },
        { type: "quoteBlock" },
        { type: "logoCloudBlock" },
        { type: "scienceTeaserBlock" },
        { type: "waitlistBlock" },
        { type: "blogTeaserBlock" },
        { type: "teamTeaserBlock" },
        { type: "richTextBlock" },
        { type: "faqBlock" },
        { type: "ctaBandBlock" },
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "color", type: "string", description: "Optional CSS color (e.g. #2E5D3F)" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", rows: 2 }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string" }],
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "body", type: "portableText" }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "coverImage" } },
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "portableText" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "isAdvisor", type: "boolean", initialValue: false }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "body", type: "portableText" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});

export const allDocuments = [
  siteSettings,
  page,
  author,
  category,
  post,
  teamMember,
  legalPage,
];
