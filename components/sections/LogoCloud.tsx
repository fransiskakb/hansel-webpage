import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import type { LogoCloudBlock } from "@/lib/types";

export function LogoCloud({ block }: { block: LogoCloudBlock }) {
  return (
    <section className="container-page py-12 md:py-16">
      {block.eyebrow && (
        <MotionReveal>
          <p className="eyebrow mb-8 text-center !text-muted-foreground">{block.eyebrow}</p>
        </MotionReveal>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
        {block.logos?.map((l, i) => {
          const url = l.image?.asset?.url;
          return (
            <MotionReveal key={i} delay={i * 0.05}>
              {url ? (
                <Image src={url} alt={l.alt} width={120} height={32} className="h-7 w-auto opacity-70" />
              ) : (
                <span className="text-base md:text-lg font-semibold tracking-tight text-foreground/40">
                  {l.alt}
                </span>
              )}
            </MotionReveal>
          );
        })}
      </div>
    </section>
  );
}
