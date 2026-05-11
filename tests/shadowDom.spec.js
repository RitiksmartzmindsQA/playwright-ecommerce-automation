import { test, expect } from '@playwright/test';

test('Shadow DOM example', async ({ page }) => {

    await page.goto('https://shop.polymer-project.org/');

    await page.locator('shop-app').locator('shop-home').locator('a').nth(1).click();

});