function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/15 bg-transparent p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle ? (
          <div className="text-xs text-white/60">{subtitle}</div>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-transparent px-2 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function RaceWeekendPage() {
  return (
    <div className="space-y-6">
      <Panel
        title="Race Weekend"
        subtitle="Round: — • Sprint weekend: — • Last updated: —"
      >
        <div className="flex flex-wrap gap-2">
          <Pill>Snapshot: LATEST</Pill>
          <Pill>QUALI</Pill>
          <Pill>SPRINT</Pill>
          <Pill>FINAL</Pill>
        </div>
        <div className="mt-3 text-xs text-white/60">
          Later this becomes a real selector: Latest (FINAL &gt; SPRINT &gt; QUALI),
          plus per-snapshot views.
        </div>
      </Panel>

      <Panel title="Round Standings" subtitle="Ranked by team points (this snapshot)">
        <div className="overflow-hidden rounded-xl border border-white/15">
          <div className="grid grid-cols-12 gap-2 border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Team</div>
            <div className="col-span-2">Points</div>
            <div className="col-span-2">2X</div>
            <div className="col-span-2">Chip</div>
          </div>

          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
            >
              <div className="col-span-1 text-white/70">{i + 1}</div>
              <div className="col-span-5 font-semibold text-white">—</div>
              <div className="col-span-2 text-white">—</div>
              <div className="col-span-2 text-white/80">—</div>
              <div className="col-span-2 text-white/80">—</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Biggest Gainers" subtitle="QUALI → FINAL delta (points)">
          <div className="rounded-xl border border-white/15 p-4 text-sm text-white/80">
            <div>1) — (+—)</div>
            <div className="mt-2">2) — (+—)</div>
            <div className="mt-2">3) — (+—)</div>
            <div className="mt-2 text-white/60">… top 10</div>
          </div>
        </Panel>

        <Panel title="Biggest Drops" subtitle="QUALI → FINAL delta (points)">
          <div className="rounded-xl border border-white/15 p-4 text-sm text-white/80">
            <div>1) — (—)</div>
            <div className="mt-2">2) — (—)</div>
            <div className="mt-2">3) — (—)</div>
            <div className="mt-2 text-white/60">… top 10</div>
          </div>
        </Panel>
      </div>

      <Panel title="Chip Usage (This Round)" subtitle="Who used what, and the points benefit">
        <div className="overflow-hidden rounded-xl border border-white/15">
          <div className="grid grid-cols-12 gap-2 border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <div className="col-span-5">Team</div>
            <div className="col-span-4">Chip</div>
            <div className="col-span-3">Points gained</div>
          </div>

          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
            >
              <div className="col-span-5 font-semibold text-white">—</div>
              <div className="col-span-4 text-white/80">—</div>
              <div className="col-span-3 text-white">—</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Pick Breakdown" subtitle="Ownership for drivers & constructors (this round)">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-transparent p-4">
            <div className="text-xs font-semibold text-white">Drivers ownership</div>
            <div className="mt-3 space-y-2 text-sm text-white/80">
              <div>1) — (—%)</div>
              <div>2) — (—%)</div>
              <div>3) — (—%)</div>
              <div className="text-white/60">… top 10</div>
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-transparent p-4">
            <div className="text-xs font-semibold text-white">
              Constructors ownership
            </div>
            <div className="mt-3 space-y-2 text-sm text-white/80">
              <div>1) — (—%)</div>
              <div>2) — (—%)</div>
              <div>3) — (—%)</div>
              <div className="text-white/60">… top 5</div>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}