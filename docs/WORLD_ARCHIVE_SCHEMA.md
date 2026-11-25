# World archive schema (v1)

Source: `data/world-index.json`. No league, UEFA, or World Cup records are changed by this module.
- `players`: dictionary keyed by stable cross-competition player ID. Each value contains `nameKo`, `nameOriginal`, `born` (YYYY-MM-DD). Reconcile identities before evaluation.
- `seasons[season].worldClass`: `status` (not_started / evidence_pending / draft_unapproved / approved), `rankings` array of objects with `playerId`, `position`, `rank`, `club` (original name), `evidence` and `rationale` as needed. Unique player per season, contiguous ranks within each position, no new tier, no quota. Existing S through A- form the candidate pool, not automatic inclusion. Current and previous two seasons weighted 50/30/20 as qualitative guidance.
- `seasons[season].bestXi`: same status values, `formation` (e.g. 4-4-2), `slots` array of exactly 11 distinct player IDs when evaluated; each slot has `playerId`, `position`, `club`, `x`, `y` (pitch percentages, attacking goal at top), and optional evidence/rationale. Current-season performance only; World Class selection is not required.
- Hall of Fame: automatically computed, cumulative 5 distinct World Class seasons, no consecutive requirement. Includes draft selections as provisional; unassessed seasons do not count. Best XI counts are independent. No manual induction record.
- Never label a draft as approved without user approval. Empty arrays with not_started are not actual negative selection results.
- Scope: 1999-00 to 2025-26. No future-season data or placeholder players.

World page: `world.html?season=1999-00&view=class` or `view=xi`. Hall of Fame: `hall-of-fame.html`.
