"use client";

import * as React from "react";
import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useWaitlistDialog } from "@/components/WaitlistDialog";
import type { CtaT } from "@/lib/types";

export function CtaButton({
  cta,
  variant = "primary",
  size = "md",
  className,
}: {
  cta?: CtaT | null;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}) {
  const { open } = useWaitlistDialog();
  if (!cta?.label) return null;
  if (cta.opensWaitlist) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => open(cta.audienceHint)}
      >
        {cta.label}
      </Button>
    );
  }
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={cta.href || "#"}>{cta.label}</Link>
    </Button>
  );
}
