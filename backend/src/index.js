const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const axeCore = require('axe-core');
const { execSync } = require('child_process');

const app = express();
const PORT = 3001; // Force port 3001

app.use(cors());
app.use(express.json());

// Helper to get Chrome path on Mac
function getChromePath() {
  try {
    // Try system Chrome, fallback to default Puppeteer Chromium
    return execSync('which google-chrome || which chromium || echo "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"', { encoding: 'utf-8' }).trim();
  } catch {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  }
}

// Validate URL function
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Main scan endpoint
app.post('/api/scan', async (req, res) => {
  let browser = null;
  let page = null;
  try {
    const { url } = req.body;
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({
        status: 'failed',
        error: 'INVALID_URL',
        message: 'Please provide a valid URL including http:// or https://',
      });
    }

    // Launch Puppeteer with Mac-friendly flags and system Chrome
    browser = await puppeteer.launch({
      headless: true,
      executablePath: getChromePath(),
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-accelerated-2d-canvas',
        '--disable-renderer-backgrounding',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-ipc-flooding-protection',
        '--disable-popup-blocking',
        '--no-first-run',
        '--no-default-browser-check',
        '--no-zygote',
        '--deterministic-fetch',
        '--disable-extensions',
        '--window-size=1920,1080',
        '--single-process'
      ]
    });

    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(30000);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Inject axe-core
    await page.evaluate(axeCore.source);

    // Run accessibility scan
    const results = await page.evaluate(async () => {
      return await axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
        }
      });
    });

    // Capture screenshot
    const screenshot = await page.screenshot({ encoding: "base64" });

    // Clean up
    await page.close();
    await browser.close();

    // Transform results
    const transformedResults = {
      url,
      screenshot,
      issues: results.violations.map(violation => ({
        type: 'violation',
        description: violation.help,
        severity: violation.impact === 'critical' ? 'high' :
                 violation.impact === 'serious' ? 'high' :
                 violation.impact === 'moderate' ? 'medium' : 'low',
        location: violation.nodes[0]?.target?.join(', ') || 'Unknown location'
      })),
      summary: {
        totalIssues: results.violations.length,
        highSeverity: results.violations.filter(v => ['critical', 'serious'].includes(v.impact)).length,
        mediumSeverity: results.violations.filter(v => v.impact === 'moderate').length,
        lowSeverity: results.violations.filter(v => v.impact === 'minor').length
      }
    };

    res.json({
      status: 'completed',
      result: transformedResults
    });

  } catch (error) {
    console.error('Scan error:', error);

    if (page) {
      try { await page.close(); } catch {}
    }
    if (browser) {
      try { await browser.close(); } catch {}
    }

    res.status(500).json({
      status: 'failed',
      error: 'SCAN_ERROR',
      message: 'Failed to scan website. Please try again. ' + (error.message || '')
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Compliance scanner running on port ${PORT}`);
});
