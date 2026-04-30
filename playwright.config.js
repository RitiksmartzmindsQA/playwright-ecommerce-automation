const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  workers: 2,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    channel: 'chrome',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    storageState: 'storageState.json',
  }
});