// Logo concept marks for hansel.ai / Huddle Science Inc.
// All marks use a single fill color so the page can theme them as a group.
// Designed on a 64x64 viewBox; safe to render at any size.

import * as React from "react";

type MarkProps = { className?: string; size?: number; color?: string };

const base = (p: MarkProps) => ({
  width: p.size ?? 56,
  height: p.size ?? 56,
  viewBox: "0 0 64 64",
  fill: p.color ?? "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  className: p.className,
  "aria-hidden": true as const,
});

// 1. HUDDLE — 4 overlapping circles in a plus arrangement (refined from previous)
// Reads as four people leaning in together; the central overlap forms a flower.
export function HuddleMark(p: MarkProps) {
  const r = 13;
  const off = 9;
  return (
    <svg {...base(p)}>
      <g opacity={0.85}>
        <circle cx={32 - off} cy={32} r={r} />
        <circle cx={32 + off} cy={32} r={r} />
        <circle cx={32} cy={32 - off} r={r} />
        <circle cx={32} cy={32 + off} r={r} />
      </g>
    </svg>
  );
}

// 2. GATHER — 5 small dots in a ring around a center dot. (original)
export function GatherMark(p: MarkProps) {
  const ringR = 18;
  const cx = 32;
  const cy = 32;
  const nodes = Array.from({ length: 5 }, (_, i) => {
    const a = (-Math.PI / 2) + (i * (2 * Math.PI)) / 5;
    return { x: cx + ringR * Math.cos(a), y: cy + ringR * Math.sin(a) };
  });
  return (
    <svg {...base(p)}>
      <circle cx={cx} cy={cy} r={6} />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={4.5} opacity={0.85} />
      ))}
    </svg>
  );
}

// ── Gather variations ──────────────────────────────────────────────

// 2A. TIGHT FOUR — four equal dots in a tight cluster. No center.
// "Huddle of four" — the simplest possible read of coming together.
export function TightFourMark(p: MarkProps) {
  const off = 8;
  const r = 7;
  return (
    <svg {...base(p)}>
      <circle cx={32 - off} cy={32 - off} r={r} />
      <circle cx={32 + off} cy={32 - off} r={r} />
      <circle cx={32 - off} cy={32 + off} r={r} />
      <circle cx={32 + off} cy={32 + off} r={r} />
    </svg>
  );
}

// 2B. COMPASS — center dot with 4 cardinal dots. Most architectural / quiet.
export function CompassMark(p: MarkProps) {
  const off = 14;
  return (
    <svg {...base(p)}>
      <circle cx={32} cy={32} r={6} />
      <circle cx={32} cy={32 - off} r={4.5} />
      <circle cx={32} cy={32 + off} r={4.5} />
      <circle cx={32 - off} cy={32} r={4.5} />
      <circle cx={32 + off} cy={32} r={4.5} />
    </svg>
  );
}

// 2C. TIGHT SIX — six dots in a tighter ring, no center. Feels like a roundtable.
export function TightSixMark(p: MarkProps) {
  const ringR = 16;
  const cx = 32;
  const cy = 32;
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const a = (-Math.PI / 2) + (i * (2 * Math.PI)) / 6;
    return { x: cx + ringR * Math.cos(a), y: cy + ringR * Math.sin(a) };
  });
  return (
    <svg {...base(p)}>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={5} />
      ))}
    </svg>
  );
}

// 2D. CONSTELLATION — 6 dots in a loose, irregular cluster. Most human/organic.
export function ConstellationMark(p: MarkProps) {
  // Hand-tuned positions: roughly a cluster, intentionally not symmetric.
  const dots = [
    { x: 22, y: 22, r: 5.5 },
    { x: 38, y: 19, r: 4 },
    { x: 46, y: 30, r: 5 },
    { x: 40, y: 44, r: 5.5 },
    { x: 24, y: 42, r: 4 },
    { x: 16, y: 32, r: 5 },
  ];
  return (
    <svg {...base(p)}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} />
      ))}
    </svg>
  );
}

// 2E. NETWORK — 5 dots in a ring + center, with thin lines connecting each to center.
// Reads as a social graph / connection network.
export function NetworkMark(p: MarkProps) {
  const ringR = 18;
  const cx = 32;
  const cy = 32;
  const nodes = Array.from({ length: 5 }, (_, i) => {
    const a = (-Math.PI / 2) + (i * (2 * Math.PI)) / 5;
    return { x: cx + ringR * Math.cos(a), y: cy + ringR * Math.sin(a) };
  });
  return (
    <svg {...base(p)}>
      <g stroke={p.color ?? "currentColor"} strokeWidth={1.5} opacity={0.55}>
        {nodes.map((n, i) => (
          <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} />
        ))}
      </g>
      <circle cx={cx} cy={cy} r={5.5} />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={4} />
      ))}
    </svg>
  );
}

// 2F. ORBIT — 1 large center dot + 4 small orbiters very close in.
// Hierarchical: a coach + the people they support.
export function OrbitMark(p: MarkProps) {
  const off = 12;
  return (
    <svg {...base(p)}>
      <circle cx={32} cy={32} r={9} />
      <circle cx={32 - off} cy={32 - off} r={3} />
      <circle cx={32 + off} cy={32 - off} r={3} />
      <circle cx={32 - off} cy={32 + off} r={3} />
      <circle cx={32 + off} cy={32 + off} r={3} />
    </svg>
  );
}

// ── H variations (H for Hansel / Huddle) ───────────────────────────

// 3A. DOT H — H letterform built from 7 equal dots. Pure dot language.
export function DotHMark(p: MarkProps) {
  const xL = 20;
  const xR = 44;
  const ys = [18, 32, 46];
  const r = 4;
  return (
    <svg {...base(p)}>
      {ys.map((y, i) => (
        <circle key={`l${i}`} cx={xL} cy={y} r={r} />
      ))}
      {ys.map((y, i) => (
        <circle key={`r${i}`} cx={xR} cy={y} r={r} />
      ))}
      <circle cx={32} cy={32} r={r} />
    </svg>
  );
}

// 3B. PILLAR H — two rounded bars with a circular center.
// Most monogram-like. Strong at small sizes.
export function PillarHMark(p: MarkProps) {
  return (
    <svg {...base(p)}>
      <rect x={14} y={14} width={8} height={36} rx={4} />
      <rect x={42} y={14} width={8} height={36} rx={4} />
      <circle cx={32} cy={32} r={6} />
    </svg>
  );
}

// 3C. BRIDGE — two triangular clusters of 3 with a connecting center dot.
// Two groups of people brought together by Hansel.
export function BridgeMark(p: MarkProps) {
  const r = 4.5;
  return (
    <svg {...base(p)}>
      {/* left cluster */}
      <circle cx={14} cy={22} r={r} />
      <circle cx={14} cy={42} r={r} />
      <circle cx={20} cy={32} r={r} />
      {/* right cluster */}
      <circle cx={50} cy={22} r={r} />
      <circle cx={50} cy={42} r={r} />
      <circle cx={44} cy={32} r={r} />
      {/* center bridge */}
      <circle cx={32} cy={32} r={5.5} />
    </svg>
  );
}

// 3D. LOWERCASE h — a dot (head) + the arched stem of a lowercase h.
// Softest, friendliest. Very approachable.
export function LowerHMark(p: MarkProps) {
  const props = base(p);
  return (
    <svg {...props} fill="none" stroke={p.color ?? "currentColor"} strokeWidth={5} strokeLinecap="round">
      {/* vertical stem */}
      <line x1={18} y1={12} x2={18} y2={52} />
      {/* arch */}
      <path d="M18 32 Q 18 22 28 22 Q 38 22 38 32 L 38 52" />
      {/* friendly dot above */}
      <circle cx={18} cy={8} r={3.5} fill={p.color ?? "currentColor"} stroke="none" />
    </svg>
  );
}

// 3E. H RING — H sitting inside an outer ring. Huddle gathered around H.
export function HRingMark(p: MarkProps) {
  const props = base(p);
  return (
    <svg {...props} fill="none" stroke={p.color ?? "currentColor"} strokeWidth={3}>
      <circle cx={32} cy={32} r={24} />
      <g fill={p.color ?? "currentColor"} stroke="none">
        <rect x={22} y={22} width={4} height={20} rx={2} />
        <rect x={38} y={22} width={4} height={20} rx={2} />
        <rect x={22} y={30} width={20} height={4} rx={2} />
      </g>
    </svg>
  );
}

// 3F. H KNOT — H letterform where the crossbar is two interlocking circles.
// A huddle nested inside the H. Most distinctive but more complex.
export function HKnotMark(p: MarkProps) {
  const props = base(p);
  return (
    <svg {...props}>
      <rect x={14} y={14} width={6} height={36} rx={3} />
      <rect x={44} y={14} width={6} height={36} rx={3} />
      <g fill="none" stroke={p.color ?? "currentColor"} strokeWidth={3}>
        <circle cx={28} cy={32} r={6} />
        <circle cx={36} cy={32} r={6} />
      </g>
    </svg>
  );
}

// 3. INTERLOCK — 3 interlocking rings (Borromean-style).
// Reads as connection that can't easily be undone — a knot.
export function InterlockMark(p: MarkProps) {
  // Use stroke for hollow rings. We override fill to none for this one.
  const props = base(p);
  return (
    <svg {...props} fill="none" stroke={p.color ?? "currentColor"} strokeWidth={4}>
      <circle cx={24} cy={26} r={11} />
      <circle cx={40} cy={26} r={11} />
      <circle cx={32} cy={40} r={11} />
    </svg>
  );
}

// 4. ARC BURST — three concentric arcs opening upward.
// Reads as radiating/amplifying connection — small signal becomes big.
export function ArcBurstMark(p: MarkProps) {
  const props = base(p);
  return (
    <svg {...props} fill="none" stroke={p.color ?? "currentColor"} strokeWidth={4} strokeLinecap="round">
      {/* small inner arc */}
      <path d="M22 38 A10 10 0 0 1 42 38" />
      {/* mid arc */}
      <path d="M16 38 A16 16 0 0 1 48 38" opacity={0.7} />
      {/* outer arc */}
      <path d="M10 38 A22 22 0 0 1 54 38" opacity={0.45} />
      {/* base dot */}
      <circle cx={32} cy={42} r={2.5} fill={p.color ?? "currentColor"} stroke="none" />
    </svg>
  );
}

// 5. PULSE — circle with a small heartbeat waveform inside.
// Reads as social signal / measurable wellbeing — leans more techy.
export function PulseMark(p: MarkProps) {
  const props = base(p);
  return (
    <svg {...props} fill="none" stroke={p.color ?? "currentColor"} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={32} cy={32} r={22} />
      <path d="M14 32 H22 L26 22 L32 42 L36 28 L40 32 H50" />
    </svg>
  );
}

// 6. WORDMARK ONLY — no separate mark; the "." in ".ai" becomes the symbol.
// Used by the wordmark renderer below; provided here for completeness as null.
export function NoMark(_: MarkProps) {
  return null;
}

// Wordmark renderer — geometric lowercase, fixed tracking.
// `accent` highlights the ".ai" suffix in coral; `accentColor` overrides if provided.
export function Wordmark({
  size = 28,
  color = "currentColor",
  accentColor,
  showAccent = true,
}: {
  size?: number;
  color?: string;
  accentColor?: string;
  showAccent?: boolean;
}) {
  return (
    <span
      style={{
        fontFamily:
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif",
        fontWeight: 600,
        fontSize: size,
        letterSpacing: "-0.02em",
        color,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      Hansel
      <span style={{ color: showAccent ? (accentColor ?? "#E8674A") : color }}>
        .ai
      </span>
    </span>
  );
}
