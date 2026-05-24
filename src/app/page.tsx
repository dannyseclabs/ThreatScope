"use client";

import { useMemo, useRef, useState } from "react";
import { Activity, Database, Search, ShieldAlert, Siren, X } from "lucide-react";

import { MitreSnapshot } from "@/components/dashboard/MitreSnapshot";
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ThreatActorCard } from "@/components/dashboard/ThreatActorCard";
import { ThreatLevelChart } from "@/components/dashboard/ThreatLevelChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dashboardStats, threatActors } from "@/data/threat-actors";
import { useDashboardSearch } from "@/lib/search-context";
import { cn } from "@/lib/utils";
import type { Severity, ThreatActorType } from "@/types/threat";

const severityFilters: Array<"All" | Severity> = [
  "All",
  ...Array.from(new Set(threatActors.map((actor) => actor.severity))),
];
const typeFilters: Array<"All" | ThreatActorType> = [
  "All",
  ...Array.from(new Set(threatActors.map((actor) => actor.type))),
];

export default function Home() {
  const [severity, setSeverity] = useState<"All" | Severity>("All");
  const [actorType, setActorType] = useState<"All" | ThreatActorType>("All");
  const { query, setQuery } = useDashboardSearch();
  const heroSearchRef = useRef<HTMLInputElement>(null);

  const filteredActors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return threatActors.filter((actor) => {
      const matchesSeverity = severity === "All" || actor.severity === severity;
      const matchesType = actorType === "All" || actor.type === actorType;
      const searchable = [
        actor.name,
        actor.attributedCountry,
        actor.type,
        actor.severity,
        ...actor.aliases,
        ...actor.targetSectors,
        ...actor.targetRegions,
        ...actor.motivation,
        ...actor.techniques.flatMap((technique) => [
          technique.id,
          technique.name,
          technique.tactic,
          technique.description,
        ]),
        ...actor.malware.flatMap((family) => [family.name, family.type, family.description]),
        ...actor.campaigns.flatMap((campaign) => [
          campaign.title,
          campaign.description,
          campaign.targetSector,
        ]),
        ...actor.iocs.flatMap((ioc) => [ioc.type, ioc.value, ioc.confidence, ioc.note]),
      ]
        .join(" ")
        .toLowerCase();

      return matchesSeverity && matchesType && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [actorType, query, severity]);

  const severityCounts = useMemo(
    () =>
      severityFilters.reduce<Record<string, number>>((counts, item) => {
        counts[item] =
          item === "All"
            ? threatActors.length
            : threatActors.filter((actor) => actor.severity === item).length;
        return counts;
      }, {}),
    [],
  );

  const typeCounts = useMemo(
    () =>
      typeFilters.reduce<Record<string, number>>((counts, item) => {
        counts[item] =
          item === "All" ? threatActors.length : threatActors.filter((actor) => actor.type === item).length;
        return counts;
      }, {}),
    [],
  );

  const resetFilters = () => {
    setQuery("");
    setSeverity("All");
    setActorType("All");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section
        className="scroll-mt-24 rounded-lg border border-border/85 bg-card/95 p-5 shadow-panel ring-1 ring-white/[0.025]"
        id="dashboard"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">Threat intelligence overview</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Frontend-only SOC dashboard using safe local mock intelligence for actor tracking,
              campaign context, MITRE mappings, malware notes, IOCs, and detection guidance.
            </p>
          </div>
          <div className="relative w-full lg:max-w-md">
            <Button
              aria-label="Focus dashboard search"
              className="absolute left-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => heroSearchRef.current?.focus()}
              size="icon"
              variant="ghost"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Input
              className="pr-10 pl-10"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, alias, country, type, sector, severity"
              ref={heroSearchRef}
              value={query}
            />
            {query ? (
              <Button
                aria-label="Clear dashboard search"
                className="absolute right-1 top-1 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setQuery("");
                  heroSearchRef.current?.focus();
                }}
                size="icon"
                variant="ghost"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" id="stats">
        <StatsCard
          description="Local mock profiles"
          icon={ShieldAlert}
          title="Tracked Actors"
          value={dashboardStats.trackedActors}
        />
        <StatsCard
          description="Highest analyst priority"
          icon={Siren}
          title="Critical Threats"
          value={dashboardStats.criticalThreats}
        />
        <StatsCard
          description="Recent activity notes"
          icon={Activity}
          title="Active Campaigns"
          value={dashboardStats.activeCampaigns}
        />
        <StatsCard
          description="Safe sample indicators"
          icon={Database}
          title="Known IOCs"
          value={dashboardStats.knownIocs}
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div
            className="scroll-mt-24 rounded-lg border border-border/80 bg-card/80 p-3 shadow-panel ring-1 ring-white/[0.02]"
            id="actors"
          >
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase text-foreground">Severity</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {severityFilters.map((item) => (
                    <Button
                      aria-pressed={item === severity}
                      className={cn(item === severity && "bg-accent text-accent-foreground")}
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
              <div>
                <div className="text-xs font-semibold uppercase text-foreground">Actor type</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {typeFilters.map((item) => (
                    <Button
                      aria-pressed={item === actorType}
                      className={cn(item === actorType && "bg-accent text-accent-foreground")}
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
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3 text-sm text-muted-foreground">
              <span className="font-medium">
                Showing <span className="text-foreground">{filteredActors.length}</span> of{" "}
                <span className="text-foreground">{threatActors.length}</span> actors
              </span>
              {(query || severity !== "All" || actorType !== "All") && (
                <Button onClick={resetFilters} size="sm" variant="outline">
                  Reset filters
                </Button>
              )}
            </div>
          </div>

          {filteredActors.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-3">
              {filteredActors.map((actor) => (
                <ThreatActorCard actor={actor} key={actor.slug} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-10 text-center text-sm text-muted-foreground">
                No actors match the current search and filters.
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-5">
          <div className="scroll-mt-24" id="actor-types">
            <ThreatLevelChart />
          </div>
          <div className="scroll-mt-24" id="campaigns">
            <RecentCampaigns />
          </div>
        </div>
      </section>

      <section className="scroll-mt-24" id="mitre">
        <MitreSnapshot />
      </section>
    </div>
  );
}
