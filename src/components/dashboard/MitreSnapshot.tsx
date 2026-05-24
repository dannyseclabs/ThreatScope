import { Crosshair } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { threatActors } from "@/data/threat-actors";

const techniquePreview = threatActors.flatMap((actor) =>
  actor.techniques.slice(0, 2).map((technique) => ({
    ...technique,
    actor: actor.name,
    slug: actor.slug,
  })),
);

export function MitreSnapshot() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>MITRE Snapshot</CardTitle>
        <CardDescription>Commonly mapped behaviors across tracked actors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {techniquePreview.map((technique) => (
            <article
              className="rounded-lg border border-border bg-muted/25 p-4 transition-colors hover:border-primary/35"
              key={`${technique.slug}-${technique.id}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{technique.id}</Badge>
                <Badge variant="outline">{technique.tactic}</Badge>
                <Badge variant="outline">{technique.actor}</Badge>
              </div>
              <h3 className="mt-3 text-[15px] font-semibold leading-5 text-foreground">
                {technique.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {technique.description}
              </p>
              <Button asChild className="mt-4" size="sm" variant="outline">
                <Link href={`/actors/${technique.slug}`}>
                  <Crosshair className="h-4 w-4" aria-hidden="true" />
                  Open profile
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
