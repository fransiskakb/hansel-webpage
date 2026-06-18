// Stylized iOS chat mockup for Hansel.ai.
// Light theme (matches original) with the new Alex's-birthday content:
// bot intro, SUGGESTED MESSAGE label, italic suggestion, user reply.

export function IOSChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={[
        "relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-muted to-secondary overflow-hidden border border-border",
        className ?? "",
      ].join(" ")}
    >
      <div className="absolute inset-0 flex items-center justify-center p-10">
        {/* Phone frame */}
        <div className="w-[220px] aspect-[9/19] rounded-[2rem] bg-foreground/95 shadow-2xl p-2.5">
          {/* Screen */}
          <div className="h-full w-full rounded-[1.75rem] bg-background flex flex-col p-4 gap-2">
            {/* Bot intro */}
            <div className="rounded-2xl bg-muted text-foreground/90 px-3 py-2 text-xs leading-snug max-w-[85%]">
              🎂 It&rsquo;s Alex&rsquo;s birthday next Thursday! Want to reach
              out and plan something? Here&rsquo;s a message to get started:
            </div>

            {/* Suggested label */}
            <p className="text-[8px] font-bold tracking-[0.18em] text-muted-foreground mt-1">
              SUGGESTED MESSAGE
            </p>

            {/* Suggested bubble (italic) */}
            <div className="rounded-2xl bg-muted text-foreground/90 px-3 py-2 text-xs italic leading-snug max-w-[85%]">
              &ldquo;Hey Alex! Your birthday&rsquo;s coming up, want to get
              together and celebrate? I&rsquo;d love to plan something 🎉&rdquo;
            </div>

            {/* User reply */}
            <div className="rounded-2xl bg-primary text-primary-foreground px-3 py-2 text-xs leading-snug max-w-[80%] self-end mt-1">
              Great, thanks for the reminder! I&rsquo;ll reach out to him today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
