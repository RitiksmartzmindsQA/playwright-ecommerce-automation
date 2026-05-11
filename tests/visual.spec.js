import { test, expect } from '@playwright/test';

test('Visual regression test', async ({ page }) => {

    test.skip(process.platform === 'linux', 'Skipping on Linux CI');

    await page.goto('https://www.saucedemo.com');

    await expect(page).toHaveScreenshot('login-page.png');

});