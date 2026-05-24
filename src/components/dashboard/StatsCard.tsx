import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
};

export function StatsCard({ title, value, description, icon: Icon }: StatsCardProps) {
  return (
    <Card className="transition-colors hover:border-primary/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-xs uppercase text-muted-foreground">{title}</CardTitle>
        <div className="rounded-md border border-primary/25 bg-primary/10 p-2 text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
