import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { legalPageQuery } from "@/sanity/lib/queries";
import { PostBody } from "@/components/blog/PostBody";
import type { LegalPageDoc } from "@/lib/types";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms of service for Hansel.",
};

export default async function TermsPage() {
  const doc = await sanityFetch<LegalPageDoc>({
    query: legalPageQuery,
    params: { slug: "terms" },
    tags: ["legalPage:terms"],
  });
  return (
    <article className="container-page py-14 md:py-20 max-w-3xl">
      <h1 className="display-1 mb-8">{doc?.title ?? "Terms"}</h1>
      <div className="prose-body">
        {doc?.body ? (
          <PostBody body={doc.body} />
        ) : (
          <p className="text-muted-foreground">
            Our terms will live here. Edit them in the Studio under <em>Legal pages</em>.
          </p>
        )}
      </div>
    </article>
  );
}
