import Image from "next/image";
import { loadTeams } from "../../lib/teams";

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-transparent p-3">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
        {label}
      </div>
      <div className="mt-1 text-sm text-white">
        {value && value.trim().length > 0 ? value : "—"}
      </div>
    </div>
  );
}

function ChipPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/20 bg-transparent px-2 py-1 text-xs text-white/80">
      {label}
    </span>
  );
}

export default function TeamsPage() {
  const teams = loadTeams();
  const entries = Object.entries(teams).sort((a, b) =>
    a[1].team_name.localeCompare(b[1].team_name)
  );

  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-lg font-semibold text-white">Teams</h2>
        <p className="mt-1 text-sm text-white/70">
          League directory (personality + chips + weekly trend placeholders).
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {entries.map(([playerId, team]) => {
          const qa = team.qa ?? {};
          return (
            <div
              key={playerId}
              className="rounded-2xl border border-white/15 bg-transparent p-5"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-black">
                  {team.logo_path ? (
                    <Image
                      src={team.logo_path}
                      alt={`${team.team_name} logo`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-white/60">
                      LOGO
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-base font-semibold text-white">
                    {team.team_name}
                  </div>
                  <div className="text-xs text-white/70">Player ID: {playerId}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <ChipPill label="Season pts: —" />
                    <ChipPill label="Rank: —" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Field label="Favorite driver" value={qa.favorite_driver} />
                <Field label="Favorite constructor" value={qa.favorite_constructor} />
                <Field label="Race to attend" value={qa.race_to_attend} />
                <Field label="Dream car" value={qa.dream_car} />
              </div>

              <div className="mt-4 rounded-xl border border-white/15 bg-transparent p-4">
                <div className="text-xs font-semibold text-white">Chips</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
                  <ChipPill label="Limitless: —" />
                  <ChipPill label="Extra DRS: —" />
                  <ChipPill label="Wild Card: —" />
                  <ChipPill label="Final Fix: —" />
                  <ChipPill label="No Negative: —" />
                  <ChipPill label="Autopilot: —" />
                </div>
                <div className="mt-2 text-xs text-white/60">
                  Later: ✅ used / — remaining.
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/15 bg-transparent p-4">
                <div className="text-xs font-semibold text-white">
                  Weekly performance
                </div>
                <div className="mt-2 text-sm text-white/80">
                  — | — | — | — | — <span className="text-white/60">(placeholder)</span>
                </div>
                <div className="mt-2 text-xs text-white/60">
                  Later: sparkline + round-by-round detail (expandable).
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}