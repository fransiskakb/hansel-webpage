import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { revalidateSecret } from "@/sanity/env";

type SanityWebhookBody = {
  _type?: string;
  slug?: { current?: string } | string;
};

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = req.headers.get("x-sanity-secret") || new URL(req.url).searchParams.get("secret");
  if (!revalidateSecret || secret !== revalidateSecret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: SanityWebhookBody = {};
  try {
    body = (await req.json()) as SanityWebhookBody;
  } catch {
    // ignore — fall through to type-only revalidation
  }

  const tags: string[] = [];
  const type = body?._type;
  const slug = typeof body?.slug === "string" ? body.slug : body?.slug?.current;

  if (type) tags.push(type);
  if (type === "page" && slug) tags.push(`page:${slug}`);
  if (type === "post" && slug) tags.push(`post:${slug}`, "post");
  if (type === "legalPage" && slug) tags.push(`legalPage:${slug}`);

  for (const t of tags) revalidateTag(t, "max");
  return NextResponse.json({ ok: true, revalidated: tags });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const tag = url.searchParams.get("tag");
  const secret = url.searchParams.get("secret");
  if (!revalidateSecret || secret !== revalidateSecret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!tag) return NextResponse.json({ ok: false, error: "Missing tag" }, { status: 400 });
  revalidateTag(tag, "max");
  return NextResponse.json({ ok: true, revalidated: [tag] });
}
