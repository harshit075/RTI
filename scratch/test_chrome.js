const puppeteer = require('puppeteer-core');

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    const title = await page.title();
    console.log('Successfully loaded page with title:', title);
    await browser.close();
  } catch (err) {
    console.error('Error running chrome:', err);
  }
})();
