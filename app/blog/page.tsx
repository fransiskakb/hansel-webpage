import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsQuery } from "@/sanity/lib/queries";
import type { PostCardT } from "@/lib/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes on social health, the science of connection, and what we're learning building Hansel.",
};

export default async function BlogIndexPage() {
  const posts = (await sanityFetch<PostCardT[]>({ query: allPostsQuery, tags: ["post"] })) ?? [];

  return (
    <>
      <section className="container-page pt-14 md:pt-24 pb-10">
        <p className="eyebrow mb-4">Field notes</p>
        <h1 className="display-1 max-w-3xl text-balance">
          On social health and the science of connection.
        </h1>
      </section>

      <section className="container-page pb-24">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Posts are on the way.</p>
        ) : (
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
