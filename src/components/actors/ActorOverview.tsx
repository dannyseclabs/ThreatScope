import { Globe2, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ThreatActor } from "@/types/threat";

export function ActorOverview({ actor }: { actor: ThreatActor }) {
  return (
    <div className="grid min-w-0 gap-5 xl:grid-cols-2">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Motivation and analyst context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="border-l border-primary/40 pl-4 text-sm leading-6 text-muted-foreground">
            {actor.summary}
          </p>
          <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4">
            {actor.motivation.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Targets</CardTitle>
          <CardDescription>Sectors and regions in this local profile</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <div className="panel-muted p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Target className="h-4 w-4 text-primary" aria-hidden="true" />
              Target sectors
            </div>
            <div className="flex flex-wrap gap-2">
              {actor.targetSectors.map((sector) => (
                <Badge key={sector} variant="secondary">
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
          <div className="panel-muted p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
              Target regions
            </div>
            <div className="flex flex-wrap gap-2">
              {actor.targetRegions.map((region) => (
                <Badge key={region} variant="outline">
                  {region}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
