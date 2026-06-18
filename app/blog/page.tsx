import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { localPosts, type LocalPost } from "@/lib/posts";
import type { PostCardT } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on social health, the science of connection, and what we're learning building Hansel.ai.",
};

// Map a LocalPost into the PostCardT shape PostCard already understands.
function toCard(p: LocalPost, i: number): PostCardT {
  return {
    _id: p.slug || String(i),
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    coverImage: p.coverImage
      ? { asset: { url: p.coverImage.url }, alt: p.coverImage.alt }
      : undefined,
  };
}

export default function BlogIndexPage() {
  const posts = [...localPosts].sort(
    (a, b) => (a.publishedAt < b.publishedAt ? 1 : -1),
  );

  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-8 md:pb-10">
        <p className="eyebrow mb-3">Insights</p>
        <h1 className="display-2 max-w-2xl text-balance">
          On social health and the science of connection
        </h1>
      </section>

      <section className="container-page pb-24">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Posts are on the way.</p>
        ) : (
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={toCard(post, i)} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
