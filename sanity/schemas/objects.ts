import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: "Override page title (<=60 chars)" }),
    defineField({ name: "description", type: "text", rows: 3, description: "<=160 chars" }),
    defineField({ name: "ogImage", type: "image", title: "OG image (1200×630)" }),
    defineField({ name: "noIndex", type: "boolean", initialValue: false }),
  ],
});

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "href",
      type: "string",
      description: "Internal path (e.g. /the-science) or full URL. Ignored when 'Opens waitlist' is on.",
    }),
    defineField({ name: "opensWaitlist", type: "boolean", title: "Opens waitlist dialog", initialValue: false }),
    defineField({
      name: "audienceHint",
      type: "string",
      options: { list: ["individual", "organization"], layout: "radio" },
      description: "Pre-fill the waitlist form's audience radio.",
      hidden: ({ parent }) => !parent?.opensWaitlist,
    }),
  ],
});

export const portableText = defineType({
  name: "portableText",
  title: "Rich text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [{ name: "href", type: "url" }],
          },
        ],
      },
    },
    { type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] },
  ],
});
