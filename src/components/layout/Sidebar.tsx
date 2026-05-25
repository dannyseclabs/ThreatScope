import { Activity, Database, Shield } from "lucide-react";

import { SidebarNav } from "@/components/layout/SidebarNav";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen max-h-screen w-72 shrink-0 self-start overflow-y-auto border-r border-border/70 bg-background/80 backdrop-blur-xl xl:flex xl:flex-col">
      <div className="flex h-20 items-center gap-3 border-b border-border/70 px-5">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary shadow-panel">
          <span className="absolute inset-1 rounded-md border border-primary/15" aria-hidden="true" />
          <Shield className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-base font-semibold leading-5 text-foreground">ThreatScope</div>
          <div className="truncate text-xs font-medium text-muted-foreground">Intelligence operations</div>
        </div>
      </div>

      <SidebarNav />

      <div className="p-4">
        <div className="rounded-lg border border-border/70 bg-card/70 p-3 ring-1 ring-white/[0.025]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Sensor Mode
            </div>
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.45)]" />
          </div>
          <div className="mt-2 text-sm font-semibold text-foreground">Local Intel Lab</div>
          <div className="mt-3 flex items-center gap-2 rounded-md border border-border/60 bg-background/35 px-2 py-1.5 text-xs text-muted-foreground">
            <Database className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Static dataset, no live feeds
          </div>
        </div>
      </div>
    </aside>
  );
}
