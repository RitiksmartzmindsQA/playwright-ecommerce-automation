import { test, expect } from '@playwright/test';

test('Visual regression test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await expect(page).toHaveScreenshot('login-page.png');

});