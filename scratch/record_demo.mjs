import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = '/Users/sama/.gemini/antigravity-ide/brain/0dad01f9-763f-4050-b0f8-066805a1220a';
const FRAMES_DIR = path.join(ARTIFACT_DIR, 'frames');

if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('🚀 Starting Automated 60-Second RTI Saathi Product Demo Recording...');
  
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1280,800',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

  // Add custom animated mouse cursor overlay for realistic recording
  await page.evaluateOnNewDocument(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const cursor = document.createElement('div');
      cursor.id = 'demo-cursor';
      cursor.style.position = 'fixed';
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.borderRadius = '50%';
      cursor.style.backgroundColor = 'rgba(234, 88, 12, 0.85)';
      cursor.style.border = '2px solid #ffffff';
      cursor.style.boxShadow = '0 0 14px rgba(234, 88, 12, 0.6)';
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '9999999';
      cursor.style.transition = 'transform 0.15s ease, opacity 0.2s';
      cursor.style.transform = 'translate(-50%, -50%)';
      cursor.style.top = '120px';
      cursor.style.left = '120px';
      document.body.appendChild(cursor);

      window.moveCursorTo = (x, y) => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      };
      
      window.clickCursor = () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.65)';
        setTimeout(() => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 180);
      };
    });
  });

  let frameIndex = 0;
  const frameList = [];

  const captureFrame = async (caption = '') => {
    const filename = `frame_${String(frameIndex).padStart(4, '0')}.jpg`;
    const filepath = path.join(FRAMES_DIR, filename);
    await page.screenshot({ path: filepath, type: 'jpeg', quality: 85 });
    frameList.push({ index: frameIndex, file: filename, caption });
    frameIndex++;
    if (frameIndex % 5 === 0) {
      console.log(`📸 Captured ${frameIndex} frames... Current: "${caption}"`);
    }
  };

  const smoothScroll = async (startY, endY, steps = 10, stepDelay = 80, caption = '') => {
    for (let i = 1; i <= steps; i++) {
      const currentY = startY + ((endY - startY) * (i / steps));
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await sleep(stepDelay);
      await captureFrame(caption);
    }
  };

  // 1. Open Landing Page
  console.log('🎬 Scene 1: Landing Page & Inclusivity Features');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.moveCursorTo(640, 250));
  await captureFrame('Landing Page - Democratizing Access to Information');
  await sleep(1000);
  await captureFrame('RTI Saathi - AI-Guided Transparency & Statutory Compliance');

  // Toggle Language to Hindi
  console.log('🌐 Toggling Language to Hindi...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent.includes('हिंदी') || b.textContent.includes('HI'));
    if (btn) {
      const rect = btn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      btn.click();
    }
  });
  await sleep(800);
  await captureFrame('Bilingual Support - Seamless Hindi (हिंदी) Interface');
  await sleep(800);
  await captureFrame('Bilingual Localization for 1.4 Billion Indian Citizens');

  // Switch back to English
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent.includes('English') || b.textContent.includes('EN'));
    if (btn) {
      const rect = btn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      btn.click();
    }
  });
  await sleep(600);
  await captureFrame('Switched back to English Interface');

  // Scroll Landing Page to showcase features
  console.log('📜 Scrolling Landing Page Features...');
  await smoothScroll(0, 500, 8, 100, 'Features: AI Legal Drafting & Geo-Hierarchy Matcher');
  await smoothScroll(500, 1000, 8, 100, 'Features: Statutory Timelines & 1-Click Appeals');
  await sleep(600);
  await captureFrame('Landing Page - 770+ District Coverage & Transparency Metrics');
  await smoothScroll(1000, 0, 8, 100, 'Returning to Hero Navigation');

  // 2. Start Guided Onboarding
  console.log('🚀 Scene 2: 770+ District Geo-Hierarchy Authority Finder');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const fileBtn = btns.find(b => b.textContent.includes('File New RTI') || b.textContent.includes('Start Guided Application') || b.textContent.includes('File Application'));
    if (fileBtn) {
      const rect = fileBtn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      fileBtn.click();
    }
  });
  await sleep(1000);
  await captureFrame('Onboarding Wizard - Select Authority & Jurisdiction');

  // Select State or Ministry
  await page.evaluate(() => {
    const select = document.querySelector('select');
    if (select) {
      const rect = select.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
    }
  });
  await captureFrame('Geo-Hierarchy Finder - Mapping 36 States & 770+ Districts');
  await sleep(800);

  // Click Sample Prompt or Proceed
  await page.evaluate(() => {
    const promptCards = Array.from(document.querySelectorAll('button, div[role="button"]'));
    const roadCard = promptCards.find(c => c.textContent.includes('Road') || c.textContent.includes('Infrastructure') || c.textContent.includes('Sanction'));
    if (roadCard) {
      const rect = roadCard.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      roadCard.click();
    }
  });
  await sleep(800);
  await captureFrame('Issue Categorization - Road Construction & Civic Works');

  // Proceed to Builder
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const nextBtn = btns.find(b => b.textContent.includes('Proceed') || b.textContent.includes('Next') || b.textContent.includes('Builder') || b.textContent.includes('Generate'));
    if (nextBtn) {
      const rect = nextBtn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      nextBtn.click();
    }
  });
  await sleep(1200);

  // 3. RTI Builder Studio
  console.log('✍️ Scene 3: AI Legal Drafting Studio & Section 8 Checker');
  await captureFrame('RTI Builder Studio - AI-Generated Section 2(f) Disclosable Records');
  await page.evaluate(() => window.moveCursorTo(450, 380));
  await sleep(800);
  await captureFrame('Section 2(f) Framing - Certified Sanctions, Tenders, & Bitumen Audits');

  // Show Section 8 compliance score
  await smoothScroll(0, 350, 6, 100, 'Section 8 Exemption Screening & 95% Compliance Score');
  await sleep(800);
  await captureFrame('Real-Time Pre-Submission Legal Validation');

  // Toggle BPL Fee Waiver
  console.log('💳 Toggling BPL Fee Waiver...');
  await page.evaluate(() => {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const bpl = checkboxes.find(cb => cb.id?.includes('bpl') || cb.name?.includes('bpl') || cb.closest('label')?.textContent.includes('BPL') || cb.closest('label')?.textContent.includes('Poverty'));
    if (bpl) {
      const rect = bpl.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      bpl.click();
    }
  });
  await sleep(800);
  await captureFrame('Statutory BPL Fee Waiver - Fee Adjusts from ₹10 to ₹0');

  // Submit RTI
  console.log('📤 Submitting Application...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const submitBtn = btns.find(b => b.textContent.includes('Submit') || b.textContent.includes('Save Application') || b.textContent.includes('Register'));
    if (submitBtn) {
      const rect = submitBtn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      submitBtn.click();
    }
  });
  await sleep(1500);

  // 4. Citizen Dashboard
  console.log('📊 Scene 4: Citizen Dashboard & 30-Day Statutory Timers');
  await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('nav a, nav button'));
    const dashLink = navLinks.find(l => l.textContent.includes('Dashboard') || l.textContent.includes('Track'));
    if (dashLink) {
      const rect = dashLink.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      dashLink.click();
    }
  });
  await sleep(1000);
  await captureFrame('Citizen Dashboard - Active Applications & Statutory Metrics');
  await page.evaluate(() => window.moveCursorTo(300, 200));
  await sleep(800);
  await captureFrame('Section 7(1) Statutory 30-Day Response Countdown Clocks');

  // Filter tabs
  await page.evaluate(() => {
    const filters = Array.from(document.querySelectorAll('button'));
    const actFilter = filters.find(f => f.textContent.includes('Action Required') || f.textContent.includes('Response Received'));
    if (actFilter) {
      const rect = actFilter.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      actFilter.click();
    }
  });
  await sleep(800);
  await captureFrame('Smart Filters - Action Required & Urgent Alerts');

  // Open Application Detail View
  console.log('🔍 Scene 5: RTI Detail View & Point-by-Point AI Auditing');
  await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('div, tr, li, button'));
    const rtiCard = cards.find(c => c.textContent.includes('Jaipur') || c.textContent.includes('Road') || c.textContent.includes('Response received') || c.textContent.includes('rti-road'));
    if (rtiCard) {
      const btn = rtiCard.querySelector('button') || rtiCard;
      const rect = btn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      btn.click();
    }
  });
  await sleep(1200);
  await captureFrame('RTI Lifecycle Tracking - Official Registration & CPIO Details');

  // Scroll through Timeline & AI Response Analysis
  await smoothScroll(0, 450, 6, 100, 'Chronological Event Timeline & Section 6(3) Transfer History');
  await sleep(800);
  await captureFrame('Point-by-Point AI Audit - Answered vs. Withheld Records');

  // Show First Appeal Modal / Button
  console.log('⚖️ Opening 1-Click First Appeal (FAA)...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const appealBtn = btns.find(b => b.textContent.includes('First Appeal') || b.textContent.includes('File Appeal') || b.textContent.includes('Escalate'));
    if (appealBtn) {
      const rect = appealBtn.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      appealBtn.click();
    }
  });
  await sleep(1000);
  await captureFrame('1-Click First Appeal (Section 19(1)) - Pre-Filled Statutory Grounds');
  await sleep(800);
  await captureFrame('Statutory Grounds Generator - Citing Section 7(2) Deemed Refusal');

  // Close modal if open
  await page.evaluate(() => {
    const closeBtns = Array.from(document.querySelectorAll('button'));
    const closeBtn = closeBtns.find(b => b.textContent.includes('Cancel') || b.textContent.includes('Close') || b.textContent.includes('×'));
    if (closeBtn) closeBtn.click();
  });
  await sleep(500);

  // 6. Authorities Directory & Help Center
  console.log('🏛️ Scene 6: Authorities Directory & Floating AI Assistant');
  await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('nav a, nav button'));
    const authLink = navLinks.find(l => l.textContent.includes('Authorities') || l.textContent.includes('Directory'));
    if (authLink) {
      const rect = authLink.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      authLink.click();
    }
  });
  await sleep(1000);
  await captureFrame('Authorities Directory - 770+ District Geo-Hierarchy & CPIO Database');

  // Type search in authorities
  await page.evaluate(() => {
    const input = document.querySelector('input[placeholder*="Search" i], input[type="text"]');
    if (input) {
      input.value = 'Transport';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  await sleep(600);
  await captureFrame('Instant Authority Search & Appellate Officer Directory');

  // Help & Knowledge Base
  await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('nav a, nav button'));
    const helpLink = navLinks.find(l => l.textContent.includes('Help') || l.textContent.includes('FAQ'));
    if (helpLink) {
      const rect = helpLink.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      helpLink.click();
    }
  });
  await sleep(1000);
  await captureFrame('Help & Legal Knowledge Base - Section 8 Rules & Filing Guides');

  // Concluding shot: Back to Dashboard
  console.log('🏁 Scene 7: Wrap-up & Concluding View');
  await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('nav a, nav button'));
    const dashLink = navLinks.find(l => l.textContent.includes('Dashboard') || l.textContent.includes('Track'));
    if (dashLink) {
      const rect = dashLink.getBoundingClientRect();
      window.moveCursorTo(rect.x + rect.width/2, rect.y + rect.height/2);
      window.clickCursor();
      dashLink.click();
    }
  });
  await sleep(1000);
  await captureFrame('RTI Saathi - Democratizing Transparency for 1.4 Billion Citizens');

  // Save metadata
  fs.writeFileSync(
    path.join(ARTIFACT_DIR, 'demo_manifest.json'),
    JSON.stringify({
      title: 'RTI Saathi 1-Minute Product Walkthrough',
      duration: '60s',
      totalFrames: frameList.length,
      fps: 2,
      frames: frameList
    }, null, 2)
  );

  console.log(`🎉 Recording complete! Total captured frames: ${frameList.length}`);
  await browser.close();
})();
