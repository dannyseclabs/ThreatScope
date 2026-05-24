"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r border-border bg-card/80 xl:block">
      <div className="flex h-16 items-center gap-3 border-b border-border px-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Shield className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="text-sm font-semibold text-foreground">ThreatScope</div>
          <div className="text-xs text-muted-foreground">Threat intelligence</div>
        </div>
      </div>

      <nav className="space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                isActive && "border border-primary/20 bg-accent text-foreground shadow-panel",
              )}
              href={item.href}
              key={item.label}
            >
              <item.icon
                className={cn("h-4 w-4", isActive && "text-primary")}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
