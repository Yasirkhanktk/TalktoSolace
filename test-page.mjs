import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.goto('http://localhost:8443/');
  await page.waitForTimeout(2000); // wait for render
  
  const h1 = await page.$('h1');
  console.log('H1 Text:', h1 ? await h1.innerText() : 'Not found');
  
  await browser.close();
})();
