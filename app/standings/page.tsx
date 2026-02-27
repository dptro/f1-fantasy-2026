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
    <section className="rounded-2xl border border-white/10 border-t border-t-red-500/40 bg-white/[0.03] p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle ? <div className="text-xs text-white/60">{subtitle}</div> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function StandingsPage() {
  return (
    <div className="space-y-6">
      <Panel title="Season Standings" subtitle="2026 • Mode: Latest available (FINAL > SPRINT > QUALI)">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-12 gap-2 border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Team</div>
            <div className="col-span-2">Total</div>
            <div className="col-span-2">Last round</div>
            <div className="col-span-2">Δ rank</div>
          </div>

          {Array.from({ length: 12 }).map((_, i) => (
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

      <Panel title="Chip Tracker" subtitle="Used vs remaining by team (season-long)">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="grid grid-cols-12 gap-2 border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <div className="col-span-3">Team</div>
            <div className="col-span-9">
              Limitless • Extra DRS • Wild Card • Final Fix • No Negative • Autopilot
            </div>
          </div>

          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
            >
              <div className="col-span-3 font-semibold text-white">—</div>
              <div className="col-span-9 text-white/80">—  —  —  —  —  —</div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-xs text-white/50">
          We’ll render ✅ for used chips and — for remaining.
        </div>
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Consistency" subtitle="Season-level stability">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
            Avg finish • Standard deviation • Best/Worst round (placeholders)
          </div>
        </Panel>

        <Panel title="Highlights" subtitle="Fun season narratives">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
            Most improved • Most volatile • Best chip ROI • (placeholders)
          </div>
        </Panel>
      </div>
    </div>
  );
}