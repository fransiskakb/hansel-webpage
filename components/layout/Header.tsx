"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useWaitlistDialog } from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/cn";
import { MobileNav } from "@/components/layout/MobileNav";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const pathname = usePathname();
  const { open } = useWaitlistDialog();
  const isStudio = pathname?.startsWith("/studio");
  if (isStudio) return null;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Hansel.ai home">
          <BrandLogo size="sm" />
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => open()}
            className="hidden md:inline-flex"
          >
            Join the waitlist
          </Button>
          <MobileNav onOpenWaitlist={() => open()} />
        </div>
      </div>
    </header>
  );
}
