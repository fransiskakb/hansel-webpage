import type { Metadata } from "next";
import { TeamCard } from "@/components/team/TeamCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { teamQuery } from "@/sanity/lib/queries";
import type { TeamMemberT } from "@/lib/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Team",
  description: "The people building Hansel and the advisors shaping the Social Health Score.",
};

type TeamData = { team: TeamMemberT[]; advisors: TeamMemberT[] };

export default async function TeamPage() {
  const data =
    (await sanityFetch<TeamData>({ query: teamQuery, tags: ["teamMember"] })) ?? {
      team: [],
      advisors: [],
    };

  return (
    <>
      <section className="container-page pt-14 md:pt-24 pb-12">
        <p className="eyebrow mb-4">The team</p>
        <h1 className="display-1 max-w-3xl text-balance">
          Builders, researchers, and clinicians on a shared mission.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Hansel is a small team obsessed with the science of human connection — and how
          to translate it into something a phone can actually deliver.
        </p>
      </section>

      {data.team.length > 0 ? (
        <section className="container-page py-10">
          <h2 className="display-3 mb-8">Team</h2>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.team.map((m) => (
              <TeamCard key={m._id} member={m} />
            ))}
          </div>
        </section>
      ) : (
        <section className="container-page py-10">
          <p className="text-muted-foreground">Team profiles coming soon.</p>
        </section>
      )}

      {data.advisors.length > 0 && (
        <section className="container-page py-16">
          <h2 className="display-3 mb-8">Advisors</h2>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.advisors.map((m) => (
              <TeamCard key={m._id} member={m} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
