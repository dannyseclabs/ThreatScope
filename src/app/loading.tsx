export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl space-y-5 sm:space-y-6" role="status" aria-live="polite">
      <div className="h-44 animate-pulse rounded-lg border border-border/80 bg-card/80" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="h-32 animate-pulse rounded-lg border border-border/80 bg-card/80"
            key={index}
          />
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,360px)]">
        <div className="h-80 animate-pulse rounded-lg border border-border/80 bg-card/80" />
        <div className="h-80 animate-pulse rounded-lg border border-border/80 bg-card/80" />
      </div>
      <span className="sr-only">Loading ThreatScope content</span>
    </div>
  );
}
