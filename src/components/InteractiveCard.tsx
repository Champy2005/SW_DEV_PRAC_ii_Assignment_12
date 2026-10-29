"use client";

import type { ReactNode } from "react";

export default function InteractiveCard({ children }: { children: ReactNode }) {
  return (
    <div className="group grid h-full w-full max-w-[28rem] grid-rows-[1fr_auto] justify-self-center rounded-lg border border-amber-900/10 bg-white p-[clamp(0.9rem,2vw,1.25rem)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-200 hover:shadow-2xl">
      {children}
    </div>
  );
}
