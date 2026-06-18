"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";

export function MobileNav({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="primary"
          size="md"
          onClick={() => {
            setOpen(false);
            onOpenWaitlist();
          }}
          className="w-full mt-2"
        >
          Join the waitlist
        </Button>
      </DialogContent>
    </Dialog>
  );
}
