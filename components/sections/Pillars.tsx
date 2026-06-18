import * as Lucide from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { IOSChatMockup } from "@/components/IOSChatMockup";
import type { PillarsBlock } from "@/lib/types";

function toPascal(s: string) {
  return s
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function Icon({ name }: { name?: string }) {
  if (!name) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cmp = (Lucide as any)[toPascal(name)] as React.ComponentType<{ className?: string }> | undefined;
  if (!Cmp) return null;
  return <Cmp className="h-6 w-6 text-accent" />;
}

export function Pillars({ block }: { block: PillarsBlock }) {
  const withPhone = !!block.withPhone;

  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl mb-12 md:mb-16">
        {block.eyebrow && (
          <MotionReveal>
            <p className="eyebrow mb-4">{block.eyebrow}</p>
          </MotionReveal>
        )}
        {block.headline && (
          <MotionReveal delay={0.05}>
            <h2 className="display-2 text-balance">{block.headline}</h2>
          </MotionReveal>
        )}
      </div>

      {withPhone ? (
        // Stacked pillars on the left, sticky phone mockup on the right.
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            {block.pillars?.map((p, i) => (
              <MotionReveal key={i} delay={i * 0.08}>
                <div className="rounded-3xl bg-card border border-border p-7 md:p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 mb-5">
                    <Icon name={p.icon} />
                  </div>
                  <h3 className="display-3 mb-3">{p.headline}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <MotionReveal delay={0.2}>
              <IOSChatMockup />
            </MotionReveal>
          </div>
        </div>
      ) : (
        // Original 3-column grid (unchanged).
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {block.pillars?.map((p, i) => (
            <MotionReveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-card border border-border p-7 md:p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 mb-5">
                  <Icon name={p.icon} />
                </div>
                <h3 className="display-3 mb-3">{p.headline}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      )}
    </section>
  );
}
