// Live deployed GitHub Pages smoke test. Node 22: npm install --no-save playwright-core@1.56.1
import { chromium } from 'playwright-core';
import {existsSync,writeFileSync,mkdirSync} from 'node:fs';
const candidates=[process.env.CHROME_PATH,'/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser','/opt/google/chrome/chrome'].filter(Boolean);
const chrome=candidates.find(existsSync);
if(!chrome){console.error('No Chrome binary preinstalled. Browser verification NOT performed. Paths: '+candidates.join(', '));process.exit(2)}
const site='https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2015-16';
const b=await chromium.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--disable-dev-shm-usage']});
const page=await b.newPage({viewport:{width:1440,height:1000}});
const result={url:site,chrome,tests:[],errors:[]};
function record(name,actual,expected){const pass=typeof expected==='function'?expected(actual):actual===expected;result.tests.push({name,actual,pass});if(!pass)result.errors.push(name+': '+JSON.stringify(actual));}
try{
 await page.goto(site,{waitUntil:'domcontentloaded',timeout:60000});
 await page.waitForFunction(()=>document.querySelector('#stateTag')?.textContent==='DRAFT',{timeout:55000});
 record('DRAFT badge',await page.locator('#stateTag').textContent(),'DRAFT');
 record('2015-16 season selected',await page.locator('#season').inputValue(),'2015-16');
 record('All Tiers visible',await page.locator('#allTiersTab').isVisible(),true);
 await page.locator('#allTiersTab').click();
 await page.waitForTimeout(500);
 const rows=await page.locator('#content table.datagrid tbody tr').count();
 record('All Tiers 116 table rows',rows,v=>v===116);
 const allText=await page.locator('#content').innerText();
 record('Higuain shown in All Tiers',allText.includes('곤살로 이과인'),true);
 record('Sassuolo shown in All Tiers',allText.includes('Sassuolo'),true);
 await page.locator('tr[data-player="seriea-2015-16-napoli-gonzalohiguain"]').first().click();
 await page.locator('#modalLayer [role="dialog"]').waitFor();
 const detail=await page.locator('#modalLayer').innerText();
 record('Player detail birthdate / tier / team',detail.includes('곤살로 이과인')&&detail.includes('1987-12-10')&&detail.includes('Napoli')&&detail.includes('DRAFT'),true);
 await page.locator('#modalLayer [data-action="close"]').click();
 await page.locator('[data-tier-view="positions"]').click();
 record('Position-group view 116 rows',await page.locator('#content table.datagrid tbody tr').count(),116);
 await page.locator('[data-tier-view="tiers"]').click();
 record('Tier-group view 116 rows',await page.locator('#content table.datagrid tbody tr').count(),116);
 await page.locator('[data-tier-view="clubs"]').click();
 await page.locator('[data-tab="formation"]').click();
 await page.waitForTimeout(300);
 record('Best XI 11 slots',await page.locator('#content .slot').count(),11);
 const spots=await page.locator('#content .slot .spot').allTextContents();
 record('Best XI two central midfielders',spots.filter(x=>x.trim()==='CM').length,2);
 record('Best XI retains no forced CAM',spots.some(x=>x.trim()==='CAM'),false);
 const xiText=await page.locator('#content').innerText();
 record('Best XI stars displayed',xiText.includes('이과인')&&xiText.includes('포그바')&&xiText.includes('피아니치'),true);
 await page.locator('[data-tab="table"]').click();
 await page.waitForTimeout(200);
 const t=await page.locator('#content').innerText();
 record('League Table labels Sassuolo',t.includes('Sassuolo'),true);
 await page.locator('[data-tab="top"]').click();
 await page.waitForTimeout(200);
 const top=await page.locator('#content').innerText();
 record('Top Class World and League sections',top.includes('World')&&top.includes('League'),true);
 await page.locator('[data-tab="stats"]').click();
 await page.waitForTimeout(200);
 record('Statistics panel has content',(await page.locator('#content').innerText()).length>100,true);
 mkdirSync('audit-artifacts/seriea-2015-16-live',{recursive:true});
 await page.screenshot({path:'audit-artifacts/seriea-2015-16-live/stats.png',fullPage:true});
 await page.goto('https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2014-15',{waitUntil:'domcontentloaded',timeout:60000});
 await page.waitForFunction(()=>document.querySelector('#stateTag')?.textContent==='DRAFT',{timeout:55000});
 await page.locator('[data-tab="formation"]').click();
 const olderSlots=await page.locator('#content .slot .spot').allTextContents();
 record('Prior 2014-15 4-3-3 still has CAM',olderSlots.filter(x=>x.trim()==='CAM').length,1);
 record('Prior 2014-15 CM preserved',olderSlots.filter(x=>x.trim()==='CM').length,1);
}catch(e){result.errors.push(e?.stack||String(e))}
finally{mkdirSync('audit-artifacts/seriea-2015-16-live',{recursive:true});writeFileSync('audit-artifacts/seriea-2015-16-live/result.json',JSON.stringify(result,null,2));await b.close();}
console.log(JSON.stringify(result,null,2));if(result.errors.length)process.exit(1);
