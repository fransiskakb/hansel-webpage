import Link from "next/link";
import Image from "next/image";
import type { PostCardT } from "@/lib/types";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function PostCard({ post }: { post: PostCardT }) {
  const url = post.coverImage?.asset?.url;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-foreground/30 transition-colors"
    >
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {url ? (
          <Image
            src={url}
            alt={post.coverImage?.alt || post.title}
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-primary/30 font-display text-6xl">∿</div>
        )}
      </div>
      <div className="p-6">
        {post.category && (
          <span
            className="inline-block text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground/80 mb-3"
            style={post.category.color ? { background: post.category.color + "20", color: post.category.color } : {}}
          >
            {post.category.title}
          </span>
        )}
        <h3 className="text-xl font-display leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
        )}
        <p className="mt-4 text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
      </div>
    </Link>
  );
}
