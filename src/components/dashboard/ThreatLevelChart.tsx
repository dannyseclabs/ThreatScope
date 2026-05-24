"use client";

import { useSyncExternalStore } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { actorTypeDistribution } from "@/data/threat-actors";

const colors = ["#2dd4bf", "#fb7185", "#38bdf8", "#a78bfa", "#f59e0b"];
const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThreatLevelChart() {
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actor Types</CardTitle>
        <CardDescription>Current local dataset by actor category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-56 min-w-0 justify-center overflow-hidden">
          {isClient ? (
            <PieChart height={224} width={280}>
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--popover-foreground))",
                }}
              />
              <Pie
                cx={140}
                cy={108}
                data={actorTypeDistribution}
                dataKey="value"
                innerRadius={52}
                outerRadius={78}
                paddingAngle={4}
              >
                {actorTypeDistribution.map((entry, index) => (
                  <Cell fill={colors[index % colors.length]} key={entry.name} />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg border border-border bg-muted/20 text-xs text-muted-foreground">
              Preparing chart
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-muted-foreground">
          {actorTypeDistribution.map((item, index) => (
            <div className="flex items-center gap-2" key={item.name}>
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {item.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
