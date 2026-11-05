/* Browser smoke test of the LIVE Football Archive GitHub Pages site.
 * Requires: npm install --no-save playwright@1.56.1 && npx playwright install chromium
 * This tests real browser rendering, not just JSON or DOM string extraction.
 */
const { chromium } = require("playwright");
const assert = require("node:assert/strict");

const ORIGIN = "https://wjdduddlf126.github.io/footballarch/";
const url = (season, view = "overview") => ORIGIN + "?league=bundesliga&season=" + season + "&view=" + view;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitForSite(page, season) {
  for (let attempt = 0; attempt < 12; attempt++) {
    await page.goto(url(season), { waitUntil: "domcontentloaded", timeout: 30000 });
    try {
      await page.waitForFunction(() => {
        const h = document.querySelector("#heading");
        const tag = document.querySelector("#stateTag");
        const tab = document.querySelector("#allTiersTab");
        return h?.textContent?.includes("Bundesliga") &&
          tag?.textContent?.trim() === "DRAFT" && !!tab && getComputedStyle(tab).display !== "none";
      }, null, { timeout: 10000 });
      return;
    } catch {
      await sleep(15000);
    }
  }
  throw new Error("Published page did not load live DRAFT and All Tiers for " + season);
}
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", err => errors.push(err.message));
  try {
    await waitForSite(page, "2011-12");
    await page.locator('button[data-tab="tiers"]').click();
    assert.match(await page.locator("#content").innerText(), /126명/, "All Tiers total count");
    const clubCount = await page.locator('.tier-directory-section').count();
    assert.equal(clubCount, 7, "All Tiers by club shows seven clubs");
    assert.equal(await page.locator('tr[data-player]').count(), 126, "126 tier player rows");
    await page.locator('button[data-tier-view="positions"]').click();
    assert.equal(await page.locator('tr[data-player]').count(), 126, "126 positional ranked player rows");
    await page.locator('button[data-tier-view="tiers"]').click();
    assert.equal(await page.locator('tr[data-player]').count(), 126, "126 tier grouped player rows");

    await page.locator('tr[data-player]').first().click();
    const dialog = page.locator('[role="dialog"]');
    await dialog.waitFor();
    const detail = await dialog.innerText();
    for (const season of ["2009-10", "2010-11", "2011-12"])
      assert(detail.includes(season), "Missing dynamic 3-season detail: " + season);
    assert(detail.includes("partially_verified"), "Verification status missing");
    await page.locator('button[data-action="close"]').click();

    await page.locator('button[data-tab="formation"]').click();
    assert.equal(await page.locator('.xi-detail-list tr[data-player]').count(), 11,
      "Best XI should show all 11 player rationales");

    await page.locator('button[data-tab="top"]').click();
    assert.match(await page.locator("#content").innerText(), /League Top Class/, "Top Class tab");

    await page.locator('button[data-tab="table"]').click();
    assert.match(await page.locator("#content").innerText(), /Bayern/, "League Table tab");

    await page.locator('button[data-tab="stats"]').click();
    assert.match(await page.locator("#content").innerText(), /Matching Players|League Top Class/, "Statistics tab");

    await waitForSite(page, "2010-11");
    await page.locator('button[data-tab="tiers"]').click();
    assert.match(await page.locator("#content").innerText(), /112명/, "2010-11 regression: 112 players still rendered");

    assert.equal(errors.length, 0, "Browser page errors: " + errors.join("; "));
    console.log("PASS: LIVE Bundesliga 2011-12 All Tiers, Top Class, Best XI, Stats, player detail and 2010-11 regression.");
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
