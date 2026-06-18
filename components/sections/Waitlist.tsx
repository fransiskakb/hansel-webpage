"use client";

import { MotionReveal } from "@/components/MotionReveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import type { WaitlistBlock } from "@/lib/types";

export function Waitlist({ block }: { block: WaitlistBlock }) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="rounded-3xl bg-foreground text-background px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          {block.eyebrow && (
            <MotionReveal>
              <p className="eyebrow mb-3 !text-background/60">{block.eyebrow}</p>
            </MotionReveal>
          )}
          {block.headline && (
            <MotionReveal delay={0.05}>
              <h2 className="display-2 text-balance text-background">{block.headline}</h2>
            </MotionReveal>
          )}
          {block.body && (
            <MotionReveal delay={0.1}>
              <p className="mt-4 text-background/80 max-w-prose">{block.body}</p>
            </MotionReveal>
          )}
        </div>
        <div className="md:col-span-2">
          <MotionReveal delay={0.15}>
            <div className="rounded-2xl bg-card text-card-foreground p-6">
              <WaitlistForm defaultAudience={block.audience} />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
