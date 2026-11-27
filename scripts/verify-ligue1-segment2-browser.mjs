#!/usr/bin/env node
import {readFileSync} from "node:fs";
import assert from "node:assert/strict";
import {chromium} from "playwright";
const base=(process.env.TARGET_BASE||"http://127.0.0.1:8877").replace(/\/$/,"");
const seasons=Array.from({length:9},(_,i)=>`${2008+i}-${String(2009+i).slice(-2)}`);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
try{
 for(const season of seasons){
  const d=JSON.parse(readFileSync(new URL(`../data/ligue1-${season}.json`,import.meta.url)));
  const dataURL=base+`/data/ligue1-${season}.json?audit=${Date.now()}`;
  let remote;
  for(let attempt=0;attempt<(process.env.LIVE==="1"?36:1);attempt++){
   try{const response=await fetch(dataURL+"&try="+attempt,{cache:"no-store"});assert.ok(response.ok);remote=await response.json();assert.deepEqual(remote,d);break;}catch(e){remote=undefined;if(process.env.LIVE!=="1")throw e;await new Promise(r=>setTimeout(r,5000));}
  }
  assert.ok(remote,season+" exact published JSON");
  assert.ok(d.meta.ligue1Segment2Audit);
  assert.equal(d.players.length,new Set(d.players.map(p=>p.id)).size);
  for(const p of d.players){
   assert.ok(p.leagueAssists===null||(Number.isInteger(p.leagueAssists)&&p.leagueAssists>=0&&["LFP","Opta","Transfermarkt"].includes(p.leagueAssistProvider)&&/^https:\/\//.test(p.leagueAssistSource)));
   if(p.position==="GK"){assert.ok(p.leagueGoals===null||p.leagueGoals>=0);assert.ok(Number.isInteger(p.leagueGoalsConceded)&&p.leagueGoalsConceded>=0);}
  }
  const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];
  page.on("pageerror",e=>errors.push(e.message));
  try{
   await page.goto(base+`/?league=ligue1&season=${season}&audit=${Date.now()}`,{waitUntil:"domcontentloaded",timeout:60000});
   await page.waitForFunction(()=>document.querySelector("#stateTag")?.textContent==="DRAFT",{timeout:45000});
   assert.ok((await page.locator("#heading").innerText()).replaceAll("–","-").includes(season));
   await page.locator('[data-tab="overview"]').click();
   if(!await page.locator("#candidate-pool").count())await page.locator('[data-action="candidates"]').click();
   assert.equal(await page.locator("#candidate-pool tbody tr").count(),d.players.length,season+" candidate rows");
   const headers=await page.locator("#candidate-pool thead th").allTextContents();
   for(const label of ["APPS","MINS","GOALS","GA (GK)","ASSISTS","ASSIST SOURCE"])assert.ok(headers.includes(label),season+" missing "+label);
   for(const p of d.players){
    const row=page.locator(`#candidate-pool tr[data-player="${p.id}"]`);
    const cells=await row.locator("td").allTextContents();
    for(const [col,val] of [["BORN",p.born],["STARTS",p.starts??p.leagueStarts],["APPS",p.leagueAppearances],["MINS",p.leagueMinutes],["GOALS",p.leagueGoals],["GA (GK)",p.position==="GK"?p.leagueGoalsConceded:null],["ASSISTS",p.leagueAssists],["ASSIST SOURCE",p.leagueAssists==null?null:p.leagueAssistProvider]]){
     assert.equal(cells[headers.indexOf(col)],String(val??"—"),season+" "+p.id+" "+col);
    }
   }
   await page.locator("#allTiersTab").click();
   await page.locator(".tier-directory-head").waitFor({timeout:20000});
   await page.locator('[data-tier-view="positions"]').click();
   assert.equal(await page.locator(".tier-directory-section tbody tr").count(),d.players.length,season+" ranking rows");
   await page.locator('[data-tab="formation"]').click();
   const marks=await page.locator(".pitch .slot-label").allTextContents();
   assert.equal(marks.length,11,season+" pitch slots");
   assert.equal(new Set(marks).size,11,season+" distinct pitch players");
   assert.ok(!marks.includes("선정 대기"),season+" empty pitch slot");
   const wanted=d.bestXi.map(x=>{const p=d.players.find(p=>p.id===x.playerId);return p.nameKo||p.name;}).sort();
   assert.deepEqual(marks.sort(),wanted,season+" pitch selection");
   assert.equal(await page.locator(".xi-detail-list tbody tr").count(),11,season+" XI details");
   assert.ok((await page.locator(".xi-detail-list thead").innerText()).includes("실제 주 포지션"));
   await page.locator('[data-tab="table"]').click();
   assert.equal(await page.locator("#content table.datagrid tbody tr").count(),20,season+" standings");
   await page.locator('[data-tab="stats"]').click();
   assert.ok((await page.locator("#content").innerText()).includes("Matching Players"));
   assert.deepEqual(errors,[]);
   console.log(JSON.stringify({season,result:"PASS",players:d.players.length,formation:d.meta.formation,distinctPitchPlayers:11,standings:20,statsAndSources:"matched",base}));
  }finally{await page.close();}
 }
}finally{await browser.close();}
