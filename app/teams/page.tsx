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
          League directory (logos + Q&amp;A).
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
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Field label="Favorite driver" value={qa.favorite_driver} />
                <Field label="Favorite constructor" value={qa.favorite_constructor} />
                <Field label="Race want to attend" value={qa.race_to_attend} />
                <Field label="Dream car" value={qa.dream_car} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}