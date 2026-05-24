import { MapPin, ShieldAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getSeverityTone } from "@/lib/severity";
import type { ThreatActor } from "@/types/threat";

export function ActorHeader({ actor }: { actor: ThreatActor }) {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
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
          <div className="mt-3 flex flex-wrap gap-2">
            {actor.aliases.map((alias) => (
              <span
                className="rounded-md border border-border/80 bg-muted/40 px-2 py-1 text-xs text-muted-foreground"
                key={alias}
              >
                {alias}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-primary/25 bg-primary/10 p-3 text-primary">
          <ShieldAlert className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-5 max-w-4xl text-sm leading-6 text-muted-foreground">{actor.summary}</p>
    </Card>
  );
}
