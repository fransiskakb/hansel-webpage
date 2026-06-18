import { NextResponse } from "next/server";
import { z } from "zod";
import { addToWaitlist } from "@/lib/resend";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  audience: z.enum(["individual", "organization"]),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    const result = await addToWaitlist(parsed.data);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
