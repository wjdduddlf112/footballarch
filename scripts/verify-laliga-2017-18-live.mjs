import {chromium} from "playwright";
import {setTimeout as sleep} from "node:timers/promises";
import {strict as assert} from "node:assert";
const url="https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2017-18&view=overview";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1280,height:860}});
const errors=[];
let observed=null;
page.on("pageerror",e=>errors.push(String(e)));
try{
 for(let n=0;n<14;n++){
   try{
     await page.goto(url,{waitUntil:"domcontentloaded",timeout:30000});
     observed=await page.evaluate(async()=>{
       try{const r=await fetch("./data/laliga-2017-18.json?live-check="+Date.now(),{cache:"no-store"});
         if(!r.ok)return {http:r.status};
         const j=await r.json();return{http:r.status,players:j.players?.length,season:j.meta?.season,status:j.meta?.status};
       }catch(e){return{error:String(e)}}
     });
     console.log("Live GitHub Pages probe "+(n+1)+": "+JSON.stringify(observed));
     if(observed?.players===135&&observed?.season==="2017-18"&&observed?.status==="draft")break;
   }catch(e){console.log("Site attempt "+n+" error: "+String(e));}
   await sleep(10000);
 }
 assert.equal(observed?.players,135,"GitHub Pages JSON not deployed for 2017-18");
 assert.equal(observed?.status,"draft");
 const tabs=["overview","formation","top","table","stats"],tabAudit=[];
 for(const t of tabs){
   await page.locator('button[data-tab="'+t+'"]').click();
   await page.waitForTimeout(400);
   const body=await page.locator("#content").innerText();
   assert.ok(body.length>120,"Missing "+t+" content");
   await page.screenshot({path:"/tmp/laliga-2017-18-live-"+t+".png",fullPage:true});
   tabAudit.push({tab:t,chars:body.length,preview:body.slice(0,95)});
 }
 await page.locator('button[data-tab="top"]').click();
 const tr=page.locator('[data-player]').first();
 assert.ok(await tr.count(),"Expected actual clickable player");
 await tr.click();
 const detail=await page.locator(".dialog").innerText();
 assert.ok(detail.includes("원어명")&&detail.includes("Date of birth"),"Player detail missing identity");
 assert.ok(detail.includes("잠정 티어"),"Unapproved draft status not visible in player details");
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({result:"PASS",scope:"PRODUCTION GitHub Pages, 2017-18 La Liga",observed,tabs:tabAudit,detailPreview:detail.slice(0,240),jsErrors:errors},null,2));
}catch(e){console.log(JSON.stringify({result:"FAIL",observed,error:String(e),jsErrors:errors},null,2));throw e;}
finally{await browser.close();}
