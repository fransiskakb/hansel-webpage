import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import type { HowItWorksBlock } from "@/lib/types";

export function HowItWorks({ block }: { block: HowItWorksBlock }) {
  const imageUrl = block.image?.asset?.url;
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          {block.eyebrow && (
            <MotionReveal>
              <p className="eyebrow mb-4">{block.eyebrow}</p>
            </MotionReveal>
          )}
          {block.headline && (
            <MotionReveal delay={0.05}>
              <h2 className="display-2 text-balance mb-10">{block.headline}</h2>
            </MotionReveal>
          )}
          <ol className="space-y-8">
            {block.steps?.map((step, i) => (
              <MotionReveal key={i} delay={i * 0.06} as="li">
                <div className="flex gap-5">
                  <div className="shrink-0 font-display text-2xl font-bold text-accent tabular-nums tracking-tight pt-1 w-12">
                    {step.number || String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="border-l border-border pl-5">
                    <h3 className="text-xl font-display mb-2">{step.headline}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <MotionReveal delay={0.2}>
            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-muted to-secondary overflow-hidden border border-border">
              {imageUrl ? (
                <Image src={imageUrl} alt={block.image?.alt || ""} fill className="object-cover" sizes="(min-width:1024px) 40vw, 90vw" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="w-[260px] aspect-[9/19] rounded-[2.25rem] bg-foreground/95 shadow-2xl p-3">
                    <div className="h-full w-full rounded-[1.75rem] bg-background flex flex-col p-4 gap-3">
                      <div className="rounded-2xl bg-muted px-3 py-2 text-xs max-w-[80%]">How are you feeling about your week?</div>
                      <div className="rounded-2xl bg-primary text-primary-foreground px-3 py-2 text-xs max-w-[80%] self-end">Better than last week, honestly.</div>
                      <div className="rounded-2xl bg-muted px-3 py-2 text-xs max-w-[80%]">That&rsquo;s a real signal. Who did you connect with?</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
