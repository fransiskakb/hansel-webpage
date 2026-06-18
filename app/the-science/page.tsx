import type { Metadata } from "next";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery } from "@/sanity/lib/queries";
import { fallbackScience } from "@/lib/fallback-content";
import type { PageDoc } from "@/lib/types";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityFetch<PageDoc>({
    query: pageBySlugQuery,
    params: { slug: "the-science" },
    tags: ["page:the-science"],
  });
  return {
    title: page?.seo?.title ?? "The Science",
    description:
      page?.seo?.description ??
      "The Social Health Score is built on validated instruments from public health, organizational psychology, and behavioral science.",
  };
}

export default async function TheSciencePage() {
  const page =
    (await sanityFetch<PageDoc>({
      query: pageBySlugQuery,
      params: { slug: "the-science" },
      tags: ["page:the-science"],
    })) ?? fallbackScience;
  return <SectionRenderer sections={page.sections} />;
}
