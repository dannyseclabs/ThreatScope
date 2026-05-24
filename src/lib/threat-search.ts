import type { MitreTechnique, Severity, ThreatActor, ThreatActorType } from "@/types/threat";

export type FilterOption<T extends string> = "All" | T;

export type TechniqueSearchItem = MitreTechnique & {
  actor: string;
};

export function buildFilterOptions<T extends string>(values: T[]): Array<FilterOption<T>> {
  return ["All", ...Array.from(new Set(values))];
}

export function countActorsByFilter<T extends string>(
  actors: ThreatActor[],
  filters: Array<FilterOption<T>>,
  getValue: (actor: ThreatActor) => T,
) {
  return filters.reduce<Record<string, number>>((counts, filter) => {
    counts[filter] =
      filter === "All" ? actors.length : actors.filter((actor) => getValue(actor) === filter).length;
    return counts;
  }, {});
}

export function buildThreatActorSearchText(actor: ThreatActor) {
  return [
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
}

export function filterThreatActors(
  actors: ThreatActor[],
  {
    actorType,
    query,
    severity,
  }: {
    actorType: FilterOption<ThreatActorType>;
    query: string;
    severity: FilterOption<Severity>;
  },
) {
  const normalizedQuery = query.trim().toLowerCase();

  return actors.filter((actor) => {
    const matchesSeverity = severity === "All" || actor.severity === severity;
    const matchesType = actorType === "All" || actor.type === actorType;
    const matchesSearch =
      !normalizedQuery || buildThreatActorSearchText(actor).includes(normalizedQuery);

    return matchesSeverity && matchesType && matchesSearch;
  });
}

export function buildTechniqueSearchText(technique: TechniqueSearchItem) {
  return [
    technique.id,
    technique.name,
    technique.tactic,
    technique.description,
    technique.actor,
  ]
    .join(" ")
    .toLowerCase();
}

export function filterTechniques<T extends TechniqueSearchItem>(
  techniques: T[],
  { query, tactic }: { query: string; tactic: FilterOption<string> },
) {
  const normalizedQuery = query.trim().toLowerCase();

  return techniques.filter((technique) => {
    const matchesTactic = tactic === "All" || technique.tactic === tactic;
    const matchesSearch =
      !normalizedQuery || buildTechniqueSearchText(technique).includes(normalizedQuery);

    return matchesTactic && matchesSearch;
  });
}
