// Visual verification for all six restored early UCL Best XI pages.
// One script checks checked-out static site and PUBLIC GitHub Pages in a real Chromium browser.
import {chromium} from "playwright";
import {spawn} from "node:child_process";
import assert from "node:assert/strict";
import {setTimeout as sleep} from "node:timers/promises";
const seasons=["1999-00","2000-01","2001-02","2002-03","2003-04","2004-05"];
const local="http://127.0.0.1:8768/",publicUrl="https://wjdduddlf112.github.io/footballarch/";
const server=spawn("python3",["-m","http.server","8768","--bind","127.0.0.1"],{stdio:"ignore"});
await sleep(1200);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const report=[];
try{
 for(const [scope,base] of [["local",local],["public",publicUrl]]){
  for(const season of seasons){
   const page=await browser.newPage({viewport:{width:1440,height:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    await page.goto(base+"?league=ucl&season="+season,{waitUntil:"networkidle",timeout:60000});
    const data=await page.evaluate(async season=>{const r=await fetch("./data/ucl-"+season+".json",{cache:"no-store"});const d=await r.json();return{http:r.status,xi:d.bestXi?.length,season:d.meta.season,formation:d.meta.formation,ids:(d.bestXi||[]).map(x=>x.playerId)}},season);
    assert.equal(data.http,200,scope+"/"+season+" JSON HTTP");
    assert.equal(data.xi,11,scope+"/"+season+" Best XI in JSON");
    assert.equal(data.season,season);
    const btn=page.locator('button[data-tab="formation"]').first();
    assert.ok(await btn.count(),scope+"/"+season+" missing Formation tab");
    assert.equal(await btn.isDisabled(),false,scope+"/"+season+" Formation tab disabled");
    await btn.click();
    const field=page.locator(".pitch .slot-label");
    await field.first().waitFor({state:"visible",timeout:30000});
    assert.equal(await field.count(),11,scope+"/"+season+" should render 11 slots");
    const names=await field.allInnerTexts();
    assert.ok(names.every(x=>x.trim()&&x.trim()!=="선정 대기"),scope+"/"+season+" empty player field slot");
    const rows=page.locator(".xi-detail-list tbody tr");
    assert.equal(await rows.count(),11,scope+"/"+season+" detail report missing 11");
    assert.deepEqual(errors,[],scope+"/"+season+" Javascript errors");
    report.push({scope,season,formation:data.formation,xi:11,visibleSlotNames:names});
   } finally {await page.close()}
  }
 }
 console.log(JSON.stringify({passed:true,pagesChecked:report.length,restoredSeasons:seasons,report},null,2));
}catch(e){console.error(JSON.stringify({passed:false,error:String(e),report},null,2));throw e}
finally{await browser.close();server.kill();}
