require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  workers: 2,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,

    browserName: 'chromium',
    channel: 'chrome',
    headless: true,

    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  }

});