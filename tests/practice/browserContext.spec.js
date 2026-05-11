import { test, expect } from '@playwright/test';

test('Multiple browser contexts example', async ({ browser }) => {
    // create two independent browser sessions
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // open website in both sessions
    await page1.goto('https://www.saucedemo.com/');
    await page2.goto('https://www.saucedemo.com/');

    // verify both sessions work
    await expect(page1).toHaveTitle(/Swag Labs/);
    await expect(page2).toHaveTitle(/Swag Labs/);
});
