// Production Hansel.ai logo. Constellation mark + wordmark.
// Variants: sm (header), md (footer), lg (anywhere we want a big lockup).
// Color: defaults to brand blue; pass `color` to override (e.g. white on dark sections).

import { BRAND_BLUE } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { mark: number; word: number; gap: string }> = {
  sm: { mark: 28, word: 22, gap: "0.5rem" },
  md: { mark: 36, word: 28, gap: "0.625rem" },
  lg: { mark: 48, word: 36, gap: "0.75rem" },
};

// Tight Six: six equal dots in a tight ring, no center. (matches /logo-options #04)
function TightSixMark({ size, color }: { size: number; color: string }) {
  // Hand-computed from ringR=16, 6 points starting at -π/2 (top), r=5.
  const dots = [
    { x: 32, y: 16 },
    { x: 45.86, y: 24 },
    { x: 45.86, y: 40 },
    { x: 32, y: 48 },
    { x: 18.14, y: 40 },
    { x: 18.14, y: 24 },
  ];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={5} />
      ))}
    </svg>
  );
}

export function BrandLogo({
  size = "sm",
  color,
  className,
}: {
  size?: Size;
  color?: string;
  className?: string;
}) {
  const fg = color ?? BRAND_BLUE;
  const dim = SIZES[size];
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: dim.gap,
        color: fg,
        fontFamily:
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif",
        fontWeight: 600,
        fontSize: dim.word,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
    >
      <TightSixMark size={dim.mark} color={fg} />
      <span>Hansel.ai</span>
    </span>
  );
}
