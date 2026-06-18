// Internal preview page for picking a logo concept. Not linked from anywhere.
// Visit /logo-options to compare candidates.

import {
  GatherMark,
  TightFourMark,
  CompassMark,
  TightSixMark,
  ConstellationMark,
  NetworkMark,
  OrbitMark,
  Wordmark,
} from "@/components/logo-options/LogoMarks";

export const metadata = { title: "Logo options · Hansel" };

const BRAND_BLUE = "#1B4B91";

type Concept = {
  id: string;
  name: string;
  blurb: string;
  Mark: React.ComponentType<{ size?: number; color?: string }>;
};

const concepts: Concept[] = [
  {
    id: "01",
    name: "Gather (original)",
    blurb:
      "Original — 5 dots ringed around a center dot. Included for reference.",
    Mark: GatherMark,
  },
  {
    id: "02",
    name: "Tight Four",
    blurb:
      "Four equal dots in a tight cluster. No center. The simplest possible 'huddle of four' — peers, no hierarchy.",
    Mark: TightFourMark,
  },
  {
    id: "03",
    name: "Compass",
    blurb:
      "Center dot with 4 cardinal dots around it. Most architectural and quiet — feels like a wayfinding mark.",
    Mark: CompassMark,
  },
  {
    id: "04",
    name: "Tight Six",
    blurb:
      "Six dots in a tight ring, no center. Reads as a roundtable — equal voices around a shared space.",
    Mark: TightSixMark,
  },
  {
    id: "05",
    name: "Constellation",
    blurb:
      "Six dots in a loose, irregular cluster. Less symmetric, more human — looks more like real people gathered than a corporate diagram.",
    Mark: ConstellationMark,
  },
  {
    id: "06",
    name: "Network",
    blurb:
      "Gather with thin connecting lines. Reads as a social graph — relationships, not just proximity.",
    Mark: NetworkMark,
  },
  {
    id: "07",
    name: "Orbit",
    blurb:
      "Large center dot with 4 small orbiters close in. Hierarchical — a coach and the people they support.",
    Mark: OrbitMark,
  },
];

function Lockup({
  Mark,
  bg,
  fg,
  size = "md",
}: {
  Mark: React.ComponentType<{ size?: number; color?: string }>;
  bg: string;
  fg: string;
  size?: "sm" | "md";
}) {
  const markSize = size === "sm" ? 28 : 56;
  const wordSize = size === "sm" ? 18 : 32;
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-border px-6 py-5"
      style={{ background: bg, color: fg }}
    >
      <Mark size={markSize} color={fg} />
      <Wordmark size={wordSize} color={fg} showAccent={false} />
    </div>
  );
}

export default function LogoOptions() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="max-w-2xl mb-12">
        <p className="eyebrow mb-3">Internal preview · v2</p>
        <h1 className="display-2 mb-4">Gather, refined.</h1>
        <p className="text-muted-foreground leading-relaxed">
          Seven variations on the cluster-of-dots direction. No orange.
          All in brand blue (
          <code className="text-foreground">{BRAND_BLUE}</code>) so you're
          judging form. Each shown four ways: light cream, dark navy, white,
          brand-blue background.
        </p>
      </header>

      <div className="space-y-16">
        {concepts.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-24">
            <div className="flex items-baseline gap-4 mb-5">
              <span
                className="font-mono text-sm tabular-nums"
                style={{ color: BRAND_BLUE }}
              >
                {c.id}
              </span>
              <h2 className="display-3">{c.name}</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              {c.blurb}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Lockup Mark={c.Mark} bg="#FAF7F2" fg={BRAND_BLUE} size="md" />
              <Lockup Mark={c.Mark} bg="#0F1B2E" fg="#FAF7F2" size="md" />
              <Lockup Mark={c.Mark} bg="#FFFFFF" fg={BRAND_BLUE} size="sm" />
              <Lockup Mark={c.Mark} bg={BRAND_BLUE} fg="#FAF7F2" size="sm" />
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-20 pt-10 border-t border-border text-sm text-muted-foreground">
        <p>
          Tell me a number plus any tweaks — more/fewer dots, tighter/looser
          spacing, dot sizes, lighter/darker blue. We can also mix (e.g.
          Constellation positions with Network's connecting lines).
        </p>
      </footer>
    </div>
  );
}
