import type { Metadata } from "next";
import Image from "next/image";
import { team, advisors, type TeamPerson } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The team and advisors building Hansel.ai and the Social Health Score.",
};

function PersonCard({ p }: { p: TeamPerson }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-7">
      <div className="flex items-start gap-4">
        {p.photo && (
          <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden bg-muted ring-1 ring-border">
            <Image
              src={p.photo}
              alt={p.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground leading-relaxed">{p.role}</p>
      {p.affiliations && p.affiliations.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.affiliations.map((a) => (
            <li
              key={a}
              className="text-xs font-medium tracking-wide px-2.5 py-1 rounded-full bg-muted text-foreground/80"
            >
              {a}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="container-page pt-14 md:pt-24 pb-12">
        <p className="eyebrow mb-4">The team</p>
        <h1 className="display-1 max-w-3xl text-balance">
          Researchers, builders, and operators building Hansel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A small team obsessed with the science of human connection, and with
          translating it into something a phone can actually deliver.
        </p>
      </section>

      <section className="container-page py-10">
        <h2 className="display-3 mb-8">Team</h2>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {team.map((p) => (
            <PersonCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="display-3 mb-8">Advisors</h2>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((p) => (
            <PersonCard key={p.name} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}
