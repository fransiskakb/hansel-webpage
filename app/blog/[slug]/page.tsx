import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PostBody } from "@/components/blog/PostBody";
import { CtaButton } from "@/components/CtaButton";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import type { PostDoc } from "@/lib/types";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = (await sanityFetch<string[]>({ query: postSlugsQuery, tags: ["post"] })) ?? [];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<PostDoc>({ query: postBySlugQuery, params: { slug }, tags: [`post:${slug}`] });
  if (!post) return {};
  return {
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.seo?.ogImage ? [post.seo.ogImage] : post.coverImage?.asset?.url ? [post.coverImage.asset.url] : undefined,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<PostDoc>({ query: postBySlugQuery, params: { slug }, tags: [`post:${slug}`] });
  if (!post) notFound();

  const coverUrl = post.coverImage?.asset?.url;

  return (
    <article className="container-page py-14 md:py-20 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>
      <header className="mt-8">
        {post.category && (
          <span
            className="inline-block text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground/80 mb-4"
            style={post.category.color ? { background: post.category.color + "20", color: post.category.color } : {}}
          >
            {post.category.title}
          </span>
        )}
        <h1 className="display-1 text-balance">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-5 text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
        )}
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          {post.author?.photo && (
            <Image src={post.author.photo} alt={post.author.name} width={32} height={32} className="rounded-full" />
          )}
          {post.author && <span className="text-foreground font-medium">{post.author.name}</span>}
          {post.author && post.publishedAt && <span>·</span>}
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
      </header>

      {coverUrl && (
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-muted my-10">
          <Image src={coverUrl} alt={post.coverImage?.alt || post.title} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
        </div>
      )}

      {post.body && (
        <div className="prose-body mt-2">
          <PostBody body={post.body} />
        </div>
      )}

      <hr className="my-14 border-border" />

      <div className="rounded-3xl bg-card border border-border p-8 md:p-10 text-center">
        <p className="display-3 text-balance">Build healthier social habits with Hansel.</p>
        <p className="mt-3 text-muted-foreground">Join the waitlist for early access.</p>
        <div className="mt-6">
          <CtaButton cta={{ label: "Join the waitlist", opensWaitlist: true }} variant="primary" size="md" />
        </div>
      </div>
    </article>
  );
}
