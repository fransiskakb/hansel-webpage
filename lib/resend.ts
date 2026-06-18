import "server-only";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_AUDIENCE_ID;

let cached: Resend | null = null;
function client() {
  if (!apiKey) return null;
  if (!cached) cached = new Resend(apiKey);
  return cached;
}

export async function addToWaitlist({
  email,
  audience,
}: {
  email: string;
  audience: "individual" | "organization";
}) {
  const c = client();
  if (!c || !audienceId) {
    // No Resend configured — log locally so dev still works.
    console.log("[waitlist] (no Resend configured) would add:", email, audience);
    return { ok: true, dryRun: true };
  }
  const res = await c.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
    firstName: audience === "organization" ? "[org]" : undefined,
  });
  if (res.error) {
    const msg = res.error.message || "Resend error";
    // Treat duplicates as success
    if (/already exists/i.test(msg)) return { ok: true, duplicate: true };
    throw new Error(msg);
  }
  return { ok: true };
}
