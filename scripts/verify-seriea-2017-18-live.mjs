// Real deployed 2017-18 Serie A GitHub Pages Chromium smoke test; not a full player-history audit.
import {chromium} from 'playwright-core';
import {existsSync,mkdirSync,writeFileSync} from 'node:fs';
const chrome=[process.env.CHROME_PATH,'/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/usr/bin/chromium-browser'].filter(Boolean).find(existsSync);
if(!chrome){console.error('No available Chrome binary; real-browser check NOT performed');process.exit(2)}
const site='https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2017-18';
const browser=await chromium.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const result={url:site,engine:chrome,tests:[],errors:[]};
function check(name,actual,expected){
 const pass=typeof expected==='function'?expected(actual):actual===expected;
 result.tests.push({name,actual,pass});
 if(!pass)result.errors.push(name+': '+JSON.stringify(actual));
}
async function open(year){
 await page.goto('https://wjdduddlf112.github.io/footballarch/?league=seriea&season='+year,{waitUntil:'domcontentloaded',timeout:60000});
 await page.waitForFunction(()=>document.querySelector('#stateTag')?.textContent==='DRAFT',{timeout:55000});
}
try{
 await open('2017-18');
 check('2017-18 DRAFT state',await page.locator('#stateTag').textContent(),'DRAFT');
 check('2017-18 correct season',await page.locator('#season').inputValue(),'2017-18');
 check('All Tiers available',await page.locator('#allTiersTab').isVisible(),true);
 await page.locator('#allTiersTab').click();
 check('Seven clubs 7 section headings',await page.locator('#content .tier-directory-section').count(),7);
 check('All 123 club-grouped rows',await page.locator('#content table.datagrid tbody tr').count(),123);
 const list=await page.locator('#content').innerText();
 check('Atalanta and Inter displayed',list.includes('Atalanta')&&list.includes('Internazionale'),true);
 check('2017-18 Roma Alisson included',list.includes('알리송 베케르'),true);
 check('2017-18 Milan Bonucci not mistakenly on Juventus',await page.locator('tr[data-player="seriea-2017-18-milan-leonardobonucci"]').count(),1);
 check('Lazio Ciro and Inter Mauro 29 goals in season JSON',await page.evaluate(async()=>{const d=await (await fetch('./data/seriea-2017-18.json')).json();return d.players.filter(x=>['Ciro Immobile','Mauro Icardi'].includes(x.nameOriginal)).map(x=>x.leagueGoals).sort().join(',')}),'29,29');
 await page.locator('tr[data-player="seriea-2017-18-inter-mauroicardi"]').first().click();
 await page.locator('#modalLayer [role="dialog"]').waitFor();
 const detail=await page.locator('#modalLayer').innerText();
 check('Icardi player details Korean/DOB/Inter/DRAFT',detail.includes('마우로 이카르디')&&detail.includes('1993-02-19')&&detail.includes('Internazionale')&&detail.includes('DRAFT'),true);
 await page.locator('#modalLayer [data-action="close"]').click();
 await page.locator('[data-tier-view="positions"]').click();
 check('Position-group 123 rows',await page.locator('#content table.datagrid tbody tr').count(),123);
 check('All 10 positional group sections',await page.locator('#content .tier-directory-section').count(),10);
 await page.locator('[data-tier-view="tiers"]').click();
 check('Tier-group all 123 rows',await page.locator('#content table.datagrid tbody tr').count(),123);
 await page.locator('[data-tab="top"]').click();
 const tops=await page.locator('#content').innerText();
 check('World and League Top class panels visible',tops.includes('World')&&tops.includes('League'),true);
 await page.locator('[data-tab="formation"]').click();
 check('Best XI contains eleven pitch positions',await page.locator('#content .slot').count(),11);
 const pitch=await page.locator('#content .slot .spot').allTextContents();
 check('Best XI two actual CM slots',pitch.filter(x=>x==='CM').length,2);
 check('Best XI excludes artificial CAM',pitch.filter(x=>x==='CAM').length,0);
 const xiText=await page.locator('#content').innerText();
 check('Best XI Alisson Ciro Insigne shown',xiText.includes('알리송')&&xiText.includes('임모빌레')&&xiText.includes('인시녜'),true);
 await page.locator('[data-tab="table"]').click();
 check('2017-18 league table includes Inter and Atalanta',(await page.locator('#content').innerText()).includes('Inter')&&(await page.locator('#content').innerText()).includes('Atalanta'),true);
 await page.locator('[data-tab="stats"]').click();
 check('Statistics content rendered',(await page.locator('#content').innerText()).length>100,true);
 mkdirSync('audit-artifacts/seriea-2017-18-live',{recursive:true});
 await page.screenshot({path:'audit-artifacts/seriea-2017-18-live/stats.png',fullPage:true});
 await open('2016-17');
 await page.locator('[data-tab="formation"]').click();
 let older=await page.locator('#content .slot .spot').allTextContents();
 check('2016-17 11 XI positions preserved',older.length,11);
 check('2016-17 two CM labels preserved',older.filter(x=>x==='CM').length,2);
 await open('2015-16');
 await page.locator('[data-tab="formation"]').click();
 older=await page.locator('#content .slot .spot').allTextContents();
 check('2015-16 two CM labels preserved',older.filter(x=>x==='CM').length,2);
 await open('2014-15');
 await page.locator('[data-tab="formation"]').click();
 older=await page.locator('#content .slot .spot').allTextContents();
 check('2014-15 classic CAM label preserved',older.filter(x=>x==='CAM').length,1);
}catch(e){result.errors.push(e?.stack||String(e))}
finally{
 mkdirSync('audit-artifacts/seriea-2017-18-live',{recursive:true});
 writeFileSync('audit-artifacts/seriea-2017-18-live/result.json',JSON.stringify(result,null,2));
 await browser.close();
}
console.log(JSON.stringify(result,null,2));if(result.errors.length)process.exit(1);
