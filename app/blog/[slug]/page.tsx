import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MarkdownBody } from "@/components/blog/MarkdownBody";
import { CtaButton } from "@/components/CtaButton";
import { localPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return localPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage.url] : undefined,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="container-page py-14 md:py-20 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>

      <header className="mt-8">
        <h1 className="display-1 text-balance">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-5 text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{post.author.name}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
      </header>

      {post.coverImage && (
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-muted my-10">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.alt || post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-2">
        <MarkdownBody markdown={post.body} />
      </div>

      <hr className="my-14 border-border" />

      <div className="rounded-3xl bg-card border border-border p-8 md:p-10 text-center">
        <p className="display-3 text-balance">
          Build healthier social habits with Hansel.ai.
        </p>
        <p className="mt-3 text-muted-foreground">
          Join the waitlist for early access.
        </p>
        <div className="mt-6">
          <CtaButton
            cta={{ label: "Join the waitlist", opensWaitlist: true }}
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </article>
  );
}
