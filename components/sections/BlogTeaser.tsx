import { MotionReveal } from "@/components/MotionReveal";
import { PostCard } from "@/components/blog/PostCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { latestPostsQuery } from "@/sanity/lib/queries";
import type { BlogTeaserBlock, PostCardT } from "@/lib/types";

export async function BlogTeaser({ block }: { block: BlogTeaserBlock }) {
  let posts: PostCardT[] = block.featuredPosts ?? [];
  if (block.autoFromLatest) {
    const fetched = await sanityFetch<PostCardT[]>({
      query: latestPostsQuery,
      params: { count: block.count ?? 3 },
      tags: ["post"],
    });
    posts = fetched ?? [];
  }
  if (!posts.length) return null;

  return (
    <section className="container-page py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          {block.eyebrow && (
            <MotionReveal>
              <p className="eyebrow mb-3">{block.eyebrow}</p>
            </MotionReveal>
          )}
          {block.headline && (
            <MotionReveal delay={0.05}>
              <h2 className="display-2 text-balance">{block.headline}</h2>
            </MotionReveal>
          )}
        </div>
      </div>
      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        {posts.map((post, i) => (
          <MotionReveal key={post._id} delay={i * 0.06}>
            <PostCard post={post} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
