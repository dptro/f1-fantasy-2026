import fs from "node:fs";
import path from "node:path";

export type TeamProfile = {
  team_name: string;
  logo_path?: string;
  qa?: Record<string, string>;
};

export function loadTeams(): Record<string, TeamProfile> {
  const filePath = path.join(process.cwd(), "data", "teams.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Record<string, TeamProfile>;
}