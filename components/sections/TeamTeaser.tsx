import { MotionReveal } from "@/components/MotionReveal";
import { TeamCard } from "@/components/team/TeamCard";
import type { TeamTeaserBlock } from "@/lib/types";

export function TeamTeaser({ block }: { block: TeamTeaserBlock }) {
  if (!block.members?.length) return null;
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl mb-10">
        {block.eyebrow && (
          <MotionReveal>
            <p className="eyebrow mb-3">{block.eyebrow}</p>
          </MotionReveal>
        )}
        {block.headline && (
          <MotionReveal delay={0.05}>
            <h2 className="display-2 text-balance">{block.headline}</h2>
          </MotionReveal>
        )}
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {block.members.map((m, i) => (
          <MotionReveal key={m._id} delay={i * 0.05}>
            <TeamCard member={m} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
