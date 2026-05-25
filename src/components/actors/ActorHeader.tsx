import { Fingerprint, MapPin, ShieldAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getSeverityTone } from "@/lib/severity";
import type { ThreatActor } from "@/types/threat";

export function ActorHeader({ actor }: { actor: ThreatActor }) {
  return (
    <Card className="relative overflow-hidden p-5 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-primary/45" aria-hidden="true" />
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <Fingerprint className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Threat intel dossier
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="secondary">{actor.type}</Badge>
            <Badge variant={getSeverityTone(actor.severity)}>{actor.severity}</Badge>
            <Badge variant="outline">
              <MapPin className="mr-1 h-3 w-3" aria-hidden="true" />
              {actor.attributedCountry}
            </Badge>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            {actor.name}
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground">{actor.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {actor.aliases.map((alias) => (
              <span className="chip" key={alias}>
                {alias}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden rounded-lg border border-primary/25 bg-primary/10 p-3 text-primary sm:block">
          <ShieldAlert className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 border-t border-border/70 pt-5 sm:grid-cols-3">
        <div className="metadata-tile">
          <div className="text-[11px] font-semibold uppercase text-muted-foreground">Type</div>
          <div className="mt-1 text-sm font-semibold text-foreground">{actor.type}</div>
        </div>
        <div className="metadata-tile">
          <div className="text-[11px] font-semibold uppercase text-muted-foreground">Severity</div>
          <div className="mt-1 text-sm font-semibold text-foreground">{actor.severity}</div>
        </div>
        <div className="metadata-tile">
          <div className="text-[11px] font-semibold uppercase text-muted-foreground">Country</div>
          <div className="mt-1 text-sm font-semibold text-foreground">{actor.attributedCountry}</div>
        </div>
      </div>
    </Card>
  );
}
