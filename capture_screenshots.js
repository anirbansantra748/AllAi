import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Users\\anirb\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
];

let executablePath = null;
for (const p of chromePaths) {
  if (fs.existsSync(p)) {
    executablePath = p;
    break;
  }
}

if (!executablePath) {
  console.error("Google Chrome executable not found!");
  process.exit(1);
}

const outputDir = path.resolve('./public/screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureTemplate(id, browser, waitTime = 2500) {
  const outputPath = path.join(outputDir, `${id}.png`);
  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size >= 10000) {
    console.log(`[Skip] Template ${id} screenshot already exists and is valid.`);
    return true;
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  const url = `http://localhost:5173/${id}?embed=true`;
  
  try {
    // Delete any incomplete or invalid existing screenshot
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
    
    // Wait extra time for React/HTML dynamic content to compile and render
    await new Promise(resolve => setTimeout(resolve, waitTime));
    
    await page.screenshot({ path: outputPath });
    const newStats = fs.statSync(outputPath);
    if (newStats.size > 10000) {
      console.log(`[✓] Screenshot captured for template ${id} (Size: ${newStats.size} bytes)`);
      await page.close();
      return true;
    } else {
      console.log(`[!] Captured template ${id} but size is too small (${newStats.size} bytes). Will retry.`);
      await page.close();
      return false;
    }
  } catch (err) {
    console.error(`[✗] Failed to capture template ${id}:`, err.message);
    await page.close();
    return false;
  }
}

async function run() {
  console.log(`Launching Google Chrome: ${executablePath}`);
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Load template IDs dynamically
  const metadataPath = path.resolve('./templates_metadata.json');
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  const templateIds = metadata.map(item => item.id);
  const totalTemplates = templateIds.length;
  
  const concurrency = 4; // Batch size
  
  console.log(`--- PASS 1: Capturing missing/invalid screenshots (Total: ${totalTemplates}) ---`);
  for (let i = 0; i < templateIds.length; i += concurrency) {
    const batch = templateIds.slice(i, i + concurrency);
    await Promise.all(batch.map(id => captureTemplate(id, browser, 3000)));
  }

  console.log("--- PASS 2 (Retrying failed/incomplete captures) ---");
  // Check for any missing or small files (<10KB)
  const failedIds = [];
  for (const id of templateIds) {
    const filePath = path.join(outputDir, `${id}.png`);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size < 10000) {
      failedIds.push(id);
    }
  }

  if (failedIds.length > 0) {
    console.log(`Retrying failed templates: ${failedIds.join(', ')} with longer wait time...`);
    // Run them with a longer wait time (6000ms) to ensure they are fully parsed
    for (let i = 0; i < failedIds.length; i += concurrency) {
      const batch = failedIds.slice(i, i + concurrency);
      await Promise.all(batch.map(id => captureTemplate(id, browser, 6000)));
    }
  }

  // Final check
  const missingIds = [];
  for (const id of templateIds) {
    const filePath = path.join(outputDir, `${id}.png`);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size < 10000) {
      missingIds.push(id);
    }
  }

  await browser.close();
  
  if (missingIds.length === 0) {
    console.log(`All ${totalTemplates} screenshots captured successfully and validated!`);
  } else {
    console.warn(`Warning: Templates failed to capture fully: ${missingIds.join(', ')}`);
  }
}

run().catch(console.error);
