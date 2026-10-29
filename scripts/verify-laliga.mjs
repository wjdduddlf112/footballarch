// Run from the repository root: node scripts/verify-laliga.mjs
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function read(path) { return JSON.parse(readFileSync(resolve(path), "utf8")); }
function verifyArchive(archive, reference, standalone) {
  const errors = [], notices = [];
  const years = Array.from({ length: 27 }, (_, i) => {
    const y = 1999 + i;
    return y + "-" + String((y + 1) % 100).padStart(2, "0");
  });
  const clubById = new Map(archive.clubs.map(c => [c.id, c]));
  if (archive.clubs.length !== 42) errors.push("Expected 42 unique La Liga club profiles");
  if (clubById.size !== archive.clubs.length) errors.push("Repeated club identifier in archive");
  let seasonCount = 0, rowCount = 0, euroRows = 0;
  for (const season of years) {
    const data = archive.seasons?.[season];
    if (!data) { errors.push(season + ": season missing"); continue; }
    seasonCount++;
    const rows = data.standings || [];
    rowCount += rows.length;
    if (rows.length !== 20) errors.push(season + ": expected 20 standings rows");
    const ids = new Set(), ranks = new Set();
    let wins = 0, losses = 0, goalsFor = 0, goalsAgainst = 0;
    for (const row of rows) {
      if (ids.has(row.club)) errors.push(season + ": duplicate club " + row.club);
      if (ranks.has(row.rank)) errors.push(season + ": duplicate rank " + row.rank);
      ids.add(row.club); ranks.add(row.rank);
      if (!clubById.has(row.club)) errors.push(season + ": unknown club " + row.club);
      if (row.rank < 1 || row.rank > 20) errors.push(season + ": rank out of range");
      if (row.played !== 38 || row.wins + row.draws + row.losses !== 38)
        errors.push(season + ": games mismatch " + row.club);
      if (row.gd !== row.goalsFor - row.goalsAgainst) errors.push(season + ": goal difference " + row.club);
      const calculated = 3 * row.wins + row.draws;
      const racingDeduction = season === "2003-04" && row.club === "racing" && row.points === calculated - 1;
      if (row.points !== calculated && !racingDeduction) errors.push(season + ": points " + row.club);
      if (racingDeduction) notices.push("2003-04 Racing Santander disciplinary -1 point verified as known exception");
      wins += row.wins; losses += row.losses; goalsFor += row.goalsFor; goalsAgainst += row.goalsAgainst;
    }
    if (ranks.size !== 20 || ids.size !== 20 || wins !== losses || goalsFor !== goalsAgainst)
      errors.push(season + ": invalid rank/team/result totals");
    const relegated = rows.filter(r => r.outcome === "relegated" || r.outcome === "relegated_administrative");
    if (relegated.length !== 3) errors.push(season + ": expected three relegations");
    const euro = data.europeanParticipation || {};
    const entrants = Object.entries(euro);
    euroRows += entrants.length;
    if (data.europeanParticipationStatus !== "verified_next_season_uefa_entrant_list")
      errors.push(season + ": entrant verification flag missing");
    if (entrants.length < 5 || entrants.length > 12) errors.push(season + ": unusual European entrant count");
    for (const [id,competition] of entrants) {
      if (!ids.has(id)) errors.push(season + ": European entrant missing from table " + id);
      if (!["UCL","UEFA Cup","UEL","UECL","Intertoto Cup"].includes(competition))
        errors.push(season + ": unsupported tournament " + competition);
    }
    if (standalone[season]) {
      const candidates = Object.fromEntries((standalone[season].qualifiers || []).map(q => [q.club, q.competition]));
      const sorted = obj => JSON.stringify(Object.entries(obj).sort(([a],[b]) => a.localeCompare(b)));
      if (sorted(candidates) !== sorted(euro)) errors.push(season + ": standalone versus archive entrant mismatch");
    }
  }
  let officialRows = 0;
  const keys = ["club","wins","draws","losses","goalsFor","goalsAgainst","points"];
  for (const [season, rows] of Object.entries(reference.seasons)) {
    const liveRows = archive.seasons[season]?.standings || [];
    for (const [index, values] of rows.entries()) {
      officialRows++;
      const actual = liveRows[index];
      if (!actual) { errors.push(season + ": official row " + (index + 1) + " missing"); continue; }
      for (let i = 0; i < keys.length; i++) {
        if (actual[keys[i]] !== values[i])
          errors.push(season + ": UEFA official mismatch rank=" + (index+1) + " field=" + keys[i]);
      }
      if (actual.rank !== index + 1) errors.push(season + ": UEFA official rank mismatch");
    }
  }
  const noCrestUrl = archive.clubs.filter(c => !c.crestUrl).map(c => c.id);
  if (noCrestUrl.length) errors.push("Crest URLs missing for: " + noCrestUrl.join(", "));
  notices.push("Crest URLs exist but web image loading and era-correctness are NOT established by JSON checks");
  notices.push("Independent full-table cross-check rows: " + officialRows + " (60 earlier UEFA references + 20 latest RSSSF reference), of " + rowCount + " total. Most older seasons retain earlier match-source validation.");
  notices.push("Browser UI deployment checks remain separate and are NOT established by this test");
  return { passed: errors.length === 0, seasons: seasonCount, tableRows: rowCount, europeanEntrantSlots: euroRows, independentReferenceRows: officialRows, errors, notices };
}

const archive = read("data/laliga-standings-verified-1999-2026.json");
const refs = read("audit/laliga-uefa-reference.json");
const recentRef = read("audit/laliga-rsssf-2025-26.json");
refs.seasons = {...refs.seasons,...recentRef.seasons};
const candidates = {
  "1999-00": read("data/laliga-1999-00.json"),
  "2000-01": read("data/laliga-2000-01.json")
};
const result = verifyArchive(archive, refs, candidates);
process.stdout.write(JSON.stringify(result, null, 2) + "\n");
if (!result.passed) process.exitCode = 1;
