// Abstract brand-mark visual for the hero. Six brand-blue dots in the
// Tight Six formation (matching the logo), connected by faint hexagonal
// edges, surrounded by smaller "ambient" dots suggesting a wider network.
// One central dot gently pulses.
//
// No images, no JS animation libs — pure CSS keyframes.

import { BRAND_BLUE } from "@/lib/site";

// Six dots positioned as the Tight Six logo, scaled up for hero size.
// Computed from ringR=160 around center (200, 200), starting at -π/2.
const ringDots: Array<{ x: number; y: number; r: number }> = [
  { x: 200, y: 40, r: 26 },
  { x: 338.6, y: 120, r: 26 },
  { x: 338.6, y: 280, r: 26 },
  { x: 200, y: 360, r: 26 },
  { x: 61.4, y: 280, r: 26 },
  { x: 61.4, y: 120, r: 26 },
];

// Edges of the hexagon (adjacent ring dots).
const edges: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
];

// Ambient dots (smaller, lower opacity, scattered outside the hexagon).
const ambientDots: Array<{ x: number; y: number; r: number; opacity: number }> = [
  { x: 30, y: 70, r: 5, opacity: 0.35 },
  { x: 370, y: 50, r: 4, opacity: 0.3 },
  { x: 380, y: 350, r: 6, opacity: 0.4 },
  { x: 20, y: 360, r: 5, opacity: 0.3 },
  { x: 200, y: 210, r: 8, opacity: 0.55 }, // central anchor dot
  { x: 105, y: 80, r: 3.5, opacity: 0.25 },
  { x: 305, y: 320, r: 3.5, opacity: 0.25 },
];

export function HeroDotVisual({ className }: { className?: string }) {
  return (
    <div className={["relative w-full aspect-square max-w-[520px] mx-auto", className ?? ""].join(" ")}>
      {/* Soft radial backdrop */}
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full"
        style={{
          background: `radial-gradient(closest-side, ${BRAND_BLUE}10, transparent 70%)`,
        }}
      />

      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        aria-hidden="true"
      >
        {/* Hexagonal connectors between adjacent ring dots */}
        <g stroke={BRAND_BLUE} strokeWidth={1.25} opacity={0.18}>
          {edges.map(([a, b], i) => (
            <line
              key={`e-${i}`}
              x1={ringDots[a].x}
              y1={ringDots[a].y}
              x2={ringDots[b].x}
              y2={ringDots[b].y}
            />
          ))}
        </g>

        {/* Ambient dots */}
        <g fill={BRAND_BLUE}>
          {ambientDots.map((d, i) => (
            <circle
              key={`a-${i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              opacity={d.opacity}
            />
          ))}
        </g>

        {/* Primary ring dots (the brand mark) */}
        <g fill={BRAND_BLUE}>
          {ringDots.map((d, i) => (
            <circle
              key={`r-${i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              className={i === 0 ? "hansel-pulse" : ""}
              style={
                i === 0
                  ? { transformOrigin: `${d.x}px ${d.y}px`, transformBox: "fill-box" }
                  : undefined
              }
            />
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes hansel-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.85; }
        }
        .hansel-pulse {
          animation: hansel-pulse 3.4s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @media (prefers-reduced-motion: reduce) {
          .hansel-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
