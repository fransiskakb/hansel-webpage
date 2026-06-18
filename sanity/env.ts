// Sanity environment variables.
// Missing values fall back to a placeholder so the app still compiles before
// Sanity is wired up. At runtime, sanityFetch will swallow errors and the
// pages will use their fallback content. Set these in .env.local before
// deploying to production.

const FALLBACK_PROJECT_ID = "missing-project-id";
const FALLBACK_DATASET = "production";

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const rawDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!rawProjectId && process.env.NODE_ENV !== "test") {
  if (typeof window === "undefined") {
    console.warn(
      "[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set — using fallback content.",
    );
  }
}

export const projectId = rawProjectId || FALLBACK_PROJECT_ID;
export const dataset = rawDataset || FALLBACK_DATASET;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const readToken = process.env.SANITY_API_READ_TOKEN;
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

export const isSanityConfigured = !!rawProjectId;
