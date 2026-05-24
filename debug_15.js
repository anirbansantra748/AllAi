import fs from 'fs';
import puppeteer from 'puppeteer-core';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err.toString()));
  
  console.log("Navigating to template 15...");
  try {
    await page.goto('http://localhost:5173/15?embed=true', { waitUntil: 'networkidle2', timeout: 20000 });
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({ path: './public/screenshots/15_debug.png' });
    console.log("Screenshot taken.");
  } catch (err) {
    console.error("Navigation error:", err.message);
  }
  
  await browser.close();
}

run().catch(console.error);
