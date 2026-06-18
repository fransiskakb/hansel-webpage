"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "@/sanity/schemas";
import { apiVersion, dataset, projectId } from "@/sanity/env";

const singletons = ["siteSettings"];

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (prev) => prev.filter((t) => !singletons.includes(t.id)),
  },
  document: {
    actions: (prev, ctx) =>
      singletons.includes(ctx.schemaType)
        ? prev.filter(({ action }) => action !== "duplicate" && action !== "delete")
        : prev,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(S.editor().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("page").title("Pages"),
            S.documentTypeListItem("post").title("Posts"),
            S.documentTypeListItem("category").title("Categories"),
            S.documentTypeListItem("author").title("Authors"),
            S.documentTypeListItem("teamMember").title("Team"),
            S.documentTypeListItem("legalPage").title("Legal"),
          ]),
    }),
    presentationTool({
      previewUrl: { origin: typeof window === "undefined" ? "" : window.location.origin, draftMode: { enable: "/api/draft" } },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
