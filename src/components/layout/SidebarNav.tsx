"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Primary navigation">
      <div className="px-3 pb-2 text-[11px] font-semibold uppercase text-muted-foreground">
        Command
      </div>
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-[background-color,border-color,color] duration-200 hover:bg-accent/80 hover:text-foreground",
              isActive && "border border-primary/25 bg-accent/85 text-foreground shadow-panel",
            )}
            href={item.href}
            key={item.label}
          >
            {isActive ? (
              <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary" />
            ) : null}
            <item.icon
              className={cn("h-4 w-4 transition-colors group-hover:text-primary", isActive && "text-primary")}
              aria-hidden="true"
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
