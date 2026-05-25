"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Filter, Radar, Search, SearchX, ShieldAlert, X } from "lucide-react";

import { ThreatActorCard } from "@/components/dashboard/ThreatActorCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { threatActors } from "@/data/threat-actors";
import {
  buildFilterOptions,
  countActorsByFilter,
  filterThreatActors,
  type FilterOption,
} from "@/lib/threat-search";
import { cn } from "@/lib/utils";
import type { Severity, ThreatActorType } from "@/types/threat";

const severityFilters = buildFilterOptions(threatActors.map((actor) => actor.severity));
const typeFilters = buildFilterOptions(threatActors.map((actor) => actor.type));

export function ActorDirectory() {
  return <ActorDirectoryContent />;
}

function ActorDirectoryContent() {
  const [severity, setSeverity] = useState<FilterOption<Severity>>("All");
  const [actorType, setActorType] = useState<FilterOption<ThreatActorType>>("All");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const applyUrlQuery = () => {
      setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
    };
    const applyGlobalSearch = (event: Event) => {
      setQuery((event as CustomEvent<string>).detail ?? "");
    };

    applyUrlQuery();
    window.addEventListener("popstate", applyUrlQuery);
    window.addEventListener("threatscope:actor-search", applyGlobalSearch);

    return () => {
      window.removeEventListener("popstate", applyUrlQuery);
      window.removeEventListener("threatscope:actor-search", applyGlobalSearch);
    };
  }, []);

  const filteredActors = useMemo(
    () => filterThreatActors(threatActors, { actorType, query, severity }),
    [actorType, query, severity],
  );

  const severityCounts = useMemo(
    () => countActorsByFilter(threatActors, severityFilters, (actor) => actor.severity),
    [],
  );

  const typeCounts = useMemo(
    () => countActorsByFilter(threatActors, typeFilters, (actor) => actor.type),
    [],
  );

  const resetFilters = () => {
    setQuery("");
    setSeverity("All");
    setActorType("All");
    searchRef.current?.focus();
  };

  const hasActiveFilters = Boolean(query) || severity !== "All" || actorType !== "All";
  const criticalVisible = filteredActors.filter((actor) => actor.severity === "Critical").length;

  return (
    <section className="space-y-5" id="actor-directory">
      <Card className="overflow-hidden">
        <CardContent className="space-y-4 p-0">
          <div className="border-b border-border/70 bg-card/55 p-4 sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <ShieldAlert className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  Analyst watchlist
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline">{filteredActors.length} visible</Badge>
                  <Badge variant={criticalVisible > 0 ? "critical" : "outline"}>{criticalVisible} critical</Badge>
                  <Badge variant="outline">{threatActors.length} tracked</Badge>
                </div>
              </div>

              <div className="relative w-full xl:max-w-xl">
                <Button
                  aria-label="Focus actor search"
                  className="absolute left-0 top-0 text-muted-foreground hover:text-foreground"
                  onClick={() => searchRef.current?.focus()}
                  size="icon"
                  variant="ghost"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Input
                  aria-label="Search actor directory"
                  autoComplete="off"
                  className="pr-10 pl-10"
                  name="actor-directory-search"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search actors, aliases, IOCs, sectors…"
                  ref={searchRef}
                  spellCheck={false}
                  value={query}
                />
                {query ? (
                  <Button
                    aria-label="Clear actor search"
                    className="absolute right-0 top-0 text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setQuery("");
                      searchRef.current?.focus();
                    }}
                    size="icon"
                    variant="ghost"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid gap-3 px-4 sm:px-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="panel-muted p-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                <Filter className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Severity
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {severityFilters.map((item) => (
                  <Button
                    aria-pressed={item === severity}
                    className={cn(item === severity && "filter-active")}
                    key={item}
                    onClick={() => setSeverity(item)}
                    size="sm"
                    variant="ghost"
                  >
                    {item}
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {severityCounts[item]}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="panel-muted p-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                <Filter className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Actor type
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {typeFilters.map((item) => (
                  <Button
                    aria-pressed={item === actorType}
                    className={cn(item === actorType && "filter-active")}
                    key={item}
                    onClick={() => setActorType(item)}
                    size="sm"
                    variant="ghost"
                  >
                    {item}
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {typeCounts[item]}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border/70 px-4 py-3 text-sm font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-center gap-2">
              <Radar className="h-4 w-4 text-primary" aria-hidden="true" />
              Showing <span className="text-foreground">{filteredActors.length}</span> of{" "}
              <span className="text-foreground">{threatActors.length}</span> actors
            </div>
            <div className="flex flex-wrap gap-2">
              {query ? <span className="chip">Query: {query}</span> : null}
              {severity !== "All" ? <span className="chip">Severity: {severity}</span> : null}
              {actorType !== "All" ? <span className="chip">Type: {actorType}</span> : null}
              {hasActiveFilters ? (
                <Button onClick={resetFilters} size="sm" variant="outline">
                  Reset
                </Button>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>

      {filteredActors.length > 0 ? (
        <div className="grid min-w-0 gap-4 lg:grid-cols-2">
          {filteredActors.map((actor) => (
            <ThreatActorCard actor={actor} key={actor.slug} variant="directory" />
          ))}
        </div>
      ) : (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <SearchX className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-foreground">No actors found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Adjust the search query or reset filters to return to the full local dataset.
            </p>
            <Button className="mt-5" onClick={resetFilters} variant="outline">
              Reset filters
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
