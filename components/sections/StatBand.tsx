import { MotionReveal } from "@/components/MotionReveal";
import type { StatBandBlock } from "@/lib/types";

export function StatBand({ block }: { block: StatBandBlock }) {
  return (
    <section className="container-page py-16 md:py-20">
      {block.eyebrow && (
        <MotionReveal>
          <p className="eyebrow mb-8 text-center">{block.eyebrow}</p>
        </MotionReveal>
      )}
      <div className="grid gap-10 md:gap-6 md:grid-cols-3 border-y border-border py-10 md:py-12">
        {block.stats?.map((s, i) => (
          <MotionReveal key={i} delay={i * 0.06} className="text-center md:border-r md:border-border last:border-r-0 md:px-6">
            <p className="display-2 text-accent">{s.value}</p>
            <p className="mt-3 text-foreground/90 text-balance leading-snug">{s.label}</p>
            {s.source && (
              <p className="mt-2 text-xs text-muted-foreground">{s.source}</p>
            )}
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
