"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME, SITE_LEGAL_NAME, NAV_LINKS } from "@/lib/site";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) return null;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <BrandLogo size="md" />
          <p className="text-xs text-muted-foreground mt-2 tracking-wide">
            by {SITE_LEGAL_NAME}
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">
            The iOS coach for healthy social habits — and a measurable social
            health score for organizations.
          </p>
        </div>

        <nav aria-label="Site" className="flex flex-col gap-2">
          <p className="eyebrow mb-1">Site</p>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-2">
          <p className="eyebrow mb-1">Legal</p>
          <Link href="/privacy" className="text-sm text-foreground hover:text-primary">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-foreground hover:text-primary">
            Terms
          </Link>
        </nav>

        <nav aria-label="Connect" className="flex flex-col gap-2">
          <p className="eyebrow mb-1">Connect</p>
          <a
            href="mailto:hello@hansel.ai"
            className="text-sm text-foreground hover:text-primary"
          >
            hello@hansel.ai
          </a>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-6 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} {SITE_LEGAL_NAME}. All rights reserved.</p>
          <p>Made with care for social wellbeing.</p>
        </div>
      </div>
    </footer>
  );
}
