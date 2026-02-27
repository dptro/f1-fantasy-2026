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

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-white/50">Placeholder</div>
    </div>
  );
}

function LineItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/10 py-3 first:border-t-0 first:pt-0 last:pb-0">
      <div className="text-sm text-white/80">{label}</div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Panel title="Dashboard" subtitle="Season 2026 • Current Round: — • Snapshot: LATEST • Updated: —">
        <div className="grid gap-3 sm:grid-cols-3">
          <MiniStat label="Current leader" value="—" />
          <MiniStat label="Biggest mover (wk)" value="—" />
          <MiniStat label="High score (wk)" value="—" />
        </div>
      </Panel>

      <Panel title="Lock Insights" subtitle="Post-lock overview for the current round">
        <div className="rounded-xl border border-white/10 bg-black/20 px-4">
          <LineItem label="Most transferred IN (Driver)" value="—" />
          <LineItem label="Most transferred OUT (Driver)" value="—" />
          <LineItem label="Most transferred IN (Constructor)" value="—" />
          <LineItem label="Most transferred OUT (Constructor)" value="—" />
          <LineItem label="Most selected 2X driver" value="—" />
        </div>
        <div className="mt-3 text-xs text-white/50">
          We’ll compute this from locked selections (counts + %).
        </div>
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Ownership" subtitle="Top drivers & constructors (current round)">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold text-white">Drivers</div>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <div>1) — (—%)</div>
                <div>2) — (—%)</div>
                <div>3) — (—%)</div>
                <div className="text-white/50">… top 10</div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold text-white">Constructors</div>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <div>1) — (—%)</div>
                <div>2) — (—%)</div>
                <div>3) — (—%)</div>
                <div className="text-white/50">… top 5</div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel title="Chip Status" subtitle="Season-wide availability">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Limitless",
              "Extra DRS",
              "Wild Card",
              "Final Fix",
              "No Negative",
              "Autopilot",
            ].map((chip) => (
              <div key={chip} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white">{chip}</div>
                <div className="mt-2 text-sm text-white/80">Used by: — / —</div>
                <div className="mt-1 text-xs text-white/50">Remaining: —</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-white/50">
            We’ll also highlight “best chip ROI” using chip_points_delta.
          </div>
        </Panel>
      </div>
    </div>
  );
}