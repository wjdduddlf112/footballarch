import fs from "node:fs";
import assert from "node:assert/strict";
import {pathToFileURL} from "node:url";
const {chromium}=await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base=process.env.UECL_SITE||"http://127.0.0.1:8765/";
const seasons=["2021-22","2022-23","2023-24","2024-25","2025-26"];
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage();const errors=[];page.on("pageerror",e=>errors.push(e.message));
 await page.route("**/*",route=>new URL(route.request().url()).origin===new URL(base).origin?route.continue():route.abort());
 for(const s of seasons){
  const d=JSON.parse(fs.readFileSync("data/uecl-"+s+".json","utf8")),active=d.players.filter(p=>!/^not_eligible/.test(p.eligibilityStatus||""));
  await page.goto(base+"?league=uecl&season="+s+"&view=overview",{waitUntil:"domcontentloaded"});
  await page.locator("#content").getByText("8강 진출 평가 구단:",{exact:false}).waitFor();
  assert.equal(await page.locator("[data-club-go]").count(),8);
  await page.locator('[data-tab="table"]').click();
  await page.locator("[data-match-id]").first().waitFor({state:"attached"});
  assert.equal(await page.locator("[data-match-id]").count(),d.matches.length);
  assert.equal(await page.locator("#content h2").filter({hasText:/^Matchday \d+$/}).count(),s<"2024-25"?0:6);
  if(s<"2024-25")assert.equal(await page.locator("#content h3").filter({hasText:/^Group [A-H]$/}).count(),8);
  const text=await page.locator("#content").textContent();assert(text.includes("중립")&&text.includes("녹아웃 플레이오프"));
  if(s==="2021-22")assert(text.includes("실제 경기 140경기")&&text.includes("(몰수)"));
  if(s==="2022-23")assert(text.includes("2022-10-27 시작 · 2022-10-28 속개"));
  await page.locator('[data-tab="formation"]').click();
  assert.equal(await page.locator(".pitch .slot-label").count(),11);assert.equal(await page.locator(".pitch .slot-label").filter({hasText:"선정 대기"}).count(),0);
  assert.equal(await page.locator(".xi-detail-list tbody tr").count(),11);
  await page.locator('[data-tab="overview"]').click();
  await page.locator('[data-action="candidates"]').click();
  const pool=page.locator("#candidate-pool");
  await pool.waitFor();assert.equal(await pool.locator("tbody tr[data-player]").count(),active.length);
  for(const id of d.evaluatedClubs){
   await pool.locator('[data-filter="club"]').selectOption(id);
   const rows=pool.locator("tbody tr[data-player]"),people=active.filter(p=>p.club===id);
   assert.equal(await rows.count(),people.length);
   const p=people.find(p=>p.position==="GK")||people[0];await pool.locator('tr[data-player="'+p.id+'"]').click();
   const modal=page.locator("#modalLayer");await modal.waitFor();
   const mt=await modal.textContent();assert(mt.includes(d.meta.competition+" 본선 출전")&&mt.includes("Assist source")&&mt.includes("DRAFT"));if(p.position==="GK")assert(mt.includes("실점"));
   await modal.locator('[data-action="close"]').click();
  }
  assert.deepEqual(errors,[]);
  console.log("Browser passed:",s,active.length,"active players,",d.matches.length,"results, 8 club tables and popups, 11 XI slots");
 }
}finally{await browser.close()}
