import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { MotionReveal } from "@/components/MotionReveal";
import type { ScienceTeaserBlock } from "@/lib/types";

export function ScienceTeaser({ block }: { block: ScienceTeaserBlock }) {
  const imageUrl = block.image?.asset?.url;
  return (
    <section className="container-page py-20 md:py-28">
      <div className="rounded-3xl bg-card border border-border overflow-hidden grid lg:grid-cols-2 items-stretch">
        <div className="p-10 md:p-14 flex flex-col justify-center">
          {block.eyebrow && (
            <MotionReveal>
              <p className="eyebrow mb-4">{block.eyebrow}</p>
            </MotionReveal>
          )}
          {block.headline && (
            <MotionReveal delay={0.05}>
              <h2 className="display-2 mb-5 text-balance">{block.headline}</h2>
            </MotionReveal>
          )}
          {block.body && (
            <MotionReveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-prose">{block.body}</p>
            </MotionReveal>
          )}
          <MotionReveal delay={0.15}>
            <div className="mt-8">
              <CtaButton cta={block.cta} variant="primary" size="md" />
            </div>
          </MotionReveal>
        </div>
        <div className="relative bg-muted min-h-[280px] lg:min-h-0">
          {imageUrl ? (
            <Image src={imageUrl} alt={block.image?.alt || ""} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          ) : (
            <div className="absolute inset-0 grid place-items-center p-12">
              <div className="text-center">
                <div className="font-display text-7xl text-primary/30">∿</div>
                <p className="mt-3 text-sm text-muted-foreground">A composite of four validated domains</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
