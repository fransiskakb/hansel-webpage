import { MotionReveal } from "@/components/MotionReveal";
import { CtaButton } from "@/components/CtaButton";
import type { CtaBandBlock } from "@/lib/types";

export function CtaBand({ block }: { block: CtaBandBlock }) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center">
        {block.eyebrow && (
          <MotionReveal>
            <p className="eyebrow mb-4">{block.eyebrow}</p>
          </MotionReveal>
        )}
        <MotionReveal delay={0.05}>
          <h2 className="display-2 text-balance max-w-3xl mx-auto">{block.title}</h2>
        </MotionReveal>
        {block.description && (
          <MotionReveal delay={0.1}>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">{block.description}</p>
          </MotionReveal>
        )}
        <MotionReveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CtaButton cta={block.primaryCta} variant="primary" size="lg" />
            <CtaButton cta={block.secondaryCta} variant="outline" size="lg" />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
