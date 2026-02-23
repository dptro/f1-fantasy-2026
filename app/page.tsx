function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/15 bg-transparent p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm text-white/80">{children}</div>
    </section>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Panel title="Dashboard">
        <div className="text-white/70">
          Season: 2026 • We’ll show latest standings, highlights, and last-updated
          snapshot here.
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Leader", "Biggest Mover", "Best Chip ROI"].map((label) => (
            <div
              key={label}
              className="rounded-xl border border-white/15 bg-transparent p-4"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
                {label}
              </div>
              <div className="mt-2 text-sm text-white">—</div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Next up">
        <div className="text-white/70">
          Current round • last updated (QUALI / SPRINT / FINAL) • deep links into
          round snapshots.
        </div>
      </Panel>
    </div>
  );
}