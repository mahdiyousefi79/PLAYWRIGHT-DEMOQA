// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // Directory where your tests are stored
  timeout: 30000,              // Max time one test can run
  retries: 0,                  // Number of retries on failure
  use: {
    headless: true,           // Show browser UI
    slowMo: 500,               // Slow down actions for visibility (ms)
    baseURL: 'https://demoqa.com', // Optional: base URL for easier navigation
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // Take screenshots only if tests fail
    video: 'retain-on-failure',    // Record video only on test failures
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});
