// Stylized iOS chat mockup for Hansel.ai.
// Dark theme, dynamic-island style. Shows a memory-style nudge with a
// suggested message and a user reply.

import * as React from "react";
import { Signal, Wifi, BatteryFull, ChevronLeft, ArrowUp } from "lucide-react";

export function IOSChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={[
        // Outer frame: titanium-style dark gray with thin bezel.
        "mx-auto w-[280px] aspect-[9/19.5]",
        "rounded-[2.75rem] bg-zinc-900 p-[6px]",
        "shadow-[0_30px_60px_-15px_rgba(15,27,46,0.35)]",
        "ring-1 ring-zinc-800",
        className ?? "",
      ].join(" ")}
    >
      <div className="relative h-full w-full rounded-[2.5rem] bg-black overflow-hidden flex flex-col">
        {/* Dynamic island */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 h-[22px] w-[88px] rounded-full bg-black z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-1.5 text-white text-[11px] font-semibold relative z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <BatteryFull className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Contact header */}
        <div className="relative flex flex-col items-center pt-4 pb-3 px-3">
          <button
            aria-label="Back"
            className="absolute left-2 top-3 text-[#0A84FF]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <div className="h-11 w-11 rounded-full bg-indigo-500 grid place-items-center text-white font-semibold text-base">
            H
          </div>
          <p className="text-white font-semibold text-[13px] mt-1.5">
            Hansel.ai
          </p>
          <p className="text-zinc-500 text-[9px] mt-0.5 tracking-wide">
            Today 9:41 AM
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col px-3 gap-1.5 pb-2 overflow-hidden">
          {/* Bot intro */}
          <div className="flex items-end gap-1.5">
            <div className="h-5 w-5 rounded-full bg-indigo-500 grid place-items-center text-white text-[8px] font-semibold shrink-0">
              H
            </div>
            <div className="rounded-2xl bg-zinc-800 text-white text-[10px] leading-snug px-2.5 py-1.5 max-w-[85%]">
              🎂 It&rsquo;s Alex&rsquo;s birthday next Thursday! Want to reach
              out and plan something? Here&rsquo;s a message to get started:
            </div>
          </div>

          {/* Suggested label */}
          <p className="text-zinc-500 text-[7px] font-bold tracking-[0.15em] mt-1 ml-7">
            SUGGESTED MESSAGE
          </p>

          {/* Suggested bubble */}
          <div className="ml-7 rounded-2xl bg-zinc-800 text-white text-[10px] italic leading-snug px-2.5 py-1.5 max-w-[85%]">
            &ldquo;Hey Alex! Your birthday&rsquo;s coming up, want to get
            together and celebrate? I&rsquo;d love to plan something 🎉&rdquo;
          </div>

          {/* User reply */}
          <div className="self-end rounded-2xl bg-[#0A84FF] text-white text-[10px] leading-snug px-2.5 py-1.5 max-w-[80%] mt-1">
            Great, thanks for the reminder! I&rsquo;ll reach out to him today.
          </div>
        </div>

        {/* Input bar */}
        <div className="px-3 pb-3 pt-1">
          <div className="rounded-full bg-zinc-800 pl-4 pr-1 py-1 flex items-center justify-between">
            <span className="text-zinc-500 text-[10px]">
              Tap a reply above…
            </span>
            <div className="h-6 w-6 rounded-full bg-[#0A84FF] grid place-items-center text-white">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
            </div>
          </div>
          {/* Home indicator */}
          <div className="mx-auto mt-2 h-[3px] w-24 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}
