import { ActorDirectory } from "@/components/actors/ActorDirectory";

export const metadata = {
  title: "Threat Actors | ThreatScope",
  description: "Search and filter local mock threat actor profiles.",
};

export default function ActorsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section>
        <p className="text-xs font-semibold uppercase text-primary">Threat actor directory</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Actors
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Search local mock profiles by actor name, alias, country, sector, severity,
          technique, malware family, campaign context, or IOC note.
        </p>
      </section>

      <ActorDirectory />
    </div>
  );
}
