import "server-only";
import type { QueryParams } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { isSanityConfigured, readToken } from "@/sanity/env";

type FetchOpts = {
  query: string;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number | false;
};

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: FetchOpts): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: tags.length ? false : revalidate,
        tags,
      },
      ...(readToken ? { token: readToken } : {}),
    });
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[sanityFetch] error:", err);
    }
    return null;
  }
}
