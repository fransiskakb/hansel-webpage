import { MotionReveal } from "@/components/MotionReveal";
import type { QuoteBlock } from "@/lib/types";

export function Quote({ block }: { block: QuoteBlock }) {
  return (
    <section className="container-page py-16 md:py-20">
      <MotionReveal>
        <figure className="max-w-3xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-semibold tracking-tight text-balance leading-snug">
            <span className="text-accent">&ldquo;</span>
            {block.quote}
            <span className="text-accent">&rdquo;</span>
          </blockquote>
          {(block.attribution || block.role) && (
            <figcaption className="mt-8 text-sm text-muted-foreground">
              {block.attribution && <span className="text-foreground font-medium">{block.attribution}</span>}
              {block.role && <span> · {block.role}</span>}
            </figcaption>
          )}
        </figure>
      </MotionReveal>
    </section>
  );
}
