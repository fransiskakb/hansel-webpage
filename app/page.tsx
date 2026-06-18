import type { Metadata } from "next";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homePageQuery } from "@/sanity/lib/queries";
import { fallbackHome } from "@/lib/fallback-content";
import type { PageDoc } from "@/lib/types";
import { SITE_DESCRIPTION } from "@/lib/site";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityFetch<PageDoc>({ query: homePageQuery, tags: ["page:home"] });
  const t = page?.seo?.title ?? "Build a workforce that's socially well, measurably.";
  const d = page?.seo?.description ?? SITE_DESCRIPTION;
  return {
    title: t,
    description: d,
    openGraph: { title: t, description: d, images: page?.seo?.ogImage ? [page.seo.ogImage] : undefined },
  };
}

export default async function HomePage() {
  const page = (await sanityFetch<PageDoc>({ query: homePageQuery, tags: ["page:home", "post"] })) ?? fallbackHome;
  return <SectionRenderer sections={page.sections} />;
}
