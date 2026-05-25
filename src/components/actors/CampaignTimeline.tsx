import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { CampaignEvent } from "@/types/threat";
import Link from "next/link";

type CampaignWithActor = CampaignEvent & {
  actor?: string;
  slug?: string;
};

export function CampaignTimeline({
  campaigns,
  title = "Campaign Timeline",
  description = "Recent campaign activity from local mock data",
}: {
  campaigns: CampaignWithActor[];
  title?: string;
  description?: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-4 border-l border-border pl-5">
          {campaigns.map((campaign) => (
            <li
              className="relative rounded-md border border-border/60 bg-muted/15 p-3 transition-colors hover:border-border/80 hover:bg-muted/25"
              key={`${campaign.title}-${campaign.date}`}
            >
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border border-background bg-primary" />
              <div className="flex flex-wrap items-center gap-2">
                <time className="text-xs text-muted-foreground">{campaign.date}</time>
                <Badge variant="outline">{campaign.targetSector}</Badge>
                {campaign.actor ? <Badge variant="secondary">{campaign.actor}</Badge> : null}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {campaign.slug ? (
                  <Link className="transition-colors hover:text-primary" href={`/actors/${campaign.slug}`}>
                    {campaign.title}
                  </Link>
                ) : (
                  campaign.title
                )}
              </h3>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                {campaign.description}
              </p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
