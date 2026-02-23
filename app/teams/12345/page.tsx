import Image from "next/image";
import { loadTeams } from "../../../lib/teams";

export default function TeamProfilePage({
  params,
}: {
  params: { playerId: string };
}) {
  const teams = loadTeams();
  const team = teams[params.playerId];

  if (!team) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
        <h2 className="text-lg font-semibold">Team not found</h2>
        <p className="mt-1 text-sm text-zinc-400">
          No team found for player_id: {params.playerId}
        </p>
      </div>
    );
  }

  const qa = team.qa ?? {};

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
            {team.logo_path ? (
              <Image
                src={team.logo_path}
                alt={`${team.team_name} logo`}
                fill
                sizes="64px"
                className="object-cover"
              />
            ) : null}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-semibold">{team.team_name}</h2>
            <div className="text-sm text-zinc-400">Player ID: {params.playerId}</div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
        <h3 className="text-base font-semibold">Team Q&amp;A</h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["Favorite driver", qa.favorite_driver],
            ["Favorite constructor", qa.favorite_constructor],
            ["Race you want to attend", qa.race_to_attend],
            ["Dream car", qa.dream_car],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
            >
              <div className="text-xs font-semibold text-zinc-300">{label}</div>
              <div className="mt-2 text-sm text-zinc-200">
                {value && value.trim().length > 0 ? value : "—"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}