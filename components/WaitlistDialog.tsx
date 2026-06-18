"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/WaitlistForm";

type AudienceHint = "individual" | "organization" | undefined;

type Ctx = {
  open: (hint?: AudienceHint) => void;
  close: () => void;
};

const WaitlistDialogContext = React.createContext<Ctx | null>(null);

export function useWaitlistDialog() {
  const ctx = React.useContext(WaitlistDialogContext);
  if (!ctx) throw new Error("useWaitlistDialog must be used within WaitlistDialogProvider");
  return ctx;
}

export function WaitlistDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hint, setHint] = React.useState<AudienceHint>(undefined);

  const value = React.useMemo<Ctx>(
    () => ({
      open: (h) => {
        setHint(h);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <WaitlistDialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the waitlist</DialogTitle>
            <DialogDescription>
              We&rsquo;ll let you know the moment Hansel.ai is available.
            </DialogDescription>
          </DialogHeader>
          <WaitlistForm
            defaultAudience={hint}
            onSuccess={() => setTimeout(() => setIsOpen(false), 1800)}
          />
        </DialogContent>
      </Dialog>
    </WaitlistDialogContext.Provider>
  );
}
