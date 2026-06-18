import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { MotionReveal } from "@/components/MotionReveal";
import type { HeroBlock } from "@/lib/types";

export function Hero({ block }: { block: HeroBlock }) {
  const imageUrl = block.image?.asset?.url;
  const hasVisual = !!imageUrl;

  return (
    <section className="container-page pt-14 md:pt-24 pb-20 md:pb-28">
      <div
        className={
          hasVisual
            ? "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            : "max-w-4xl"
        }
      >
        <div className={hasVisual ? "lg:col-span-7" : ""}>
          {block.eyebrow && (
            <MotionReveal>
              <p className="eyebrow mb-5">{block.eyebrow}</p>
            </MotionReveal>
          )}
          <MotionReveal delay={0.05}>
            <h1 className="display-1 text-balance">{block.headline}</h1>
          </MotionReveal>
          {block.subhead && (
            <MotionReveal delay={0.15}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {block.subhead}
              </p>
            </MotionReveal>
          )}
          <MotionReveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton cta={block.primaryCta} variant="primary" size="lg" />
              <CtaButton cta={block.secondaryCta} variant="outline" size="lg" />
            </div>
          </MotionReveal>
        </div>
        {hasVisual && imageUrl && (
          <div className="lg:col-span-5">
            <MotionReveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src={imageUrl}
                  alt={block.image?.alt || ""}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </MotionReveal>
          </div>
        )}
      </div>
    </section>
  );
}
