"use client";

import { useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navItems } from "@/components/layout/nav-items";
import { useDashboardSearch } from "@/lib/search-context";
import { cn } from "@/lib/utils";

export function Topbar() {
  const { query, setQuery } = useDashboardSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const showDashboardResults = () => {
    if (pathname === "/actors") {
      document.getElementById("actor-directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
      inputRef.current?.focus();
      return;
    }

    router.push("/actors");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <div>
          <div className="text-sm font-semibold text-foreground lg:hidden">ThreatScope</div>
          <div className="text-xs text-muted-foreground">SOC analyst dashboard</div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <form
            className="relative w-full max-w-md"
            onSubmit={(event) => {
              event.preventDefault();
              showDashboardResults();
            }}
          >
            <Button
              aria-label="Show search results"
              className="absolute left-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
              type="submit"
              size="icon"
              variant="ghost"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Input
              className="pr-10 pl-10"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search actors, sectors, IOCs"
              ref={inputRef}
              value={query}
            />
            {query ? (
              <Button
                aria-label="Clear search"
                className="absolute right-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                size="icon"
                variant="ghost"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : null}
          </form>
          <Badge className="hidden shrink-0 sm:inline-flex" variant="outline">
            Local mock data
          </Badge>
        </div>
      </div>
      <nav className="grid grid-cols-4 gap-1 border-t border-border px-2 py-2 xl:hidden">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              className={cn(
                "flex items-center justify-center gap-1.5 rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                isActive && "bg-accent text-foreground",
              )}
              href={item.href}
              key={item.label}
            >
              <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
