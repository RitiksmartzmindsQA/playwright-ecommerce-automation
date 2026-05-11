import { test, expect } from '@playwright/test';

test('Playwright locator examples', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // CSS locator
    await page.locator('#user-name').fill('standard_user');

    // XPath locator
    await page.locator('//input[@id="password"]').fill('secret_sauce');

    // Role locator
    await page.getByRole('button', { name: 'Login' }).click();

    // Text locator
    await expect(page.getByText('Products')).toBeVisible();
});

test('Advanced locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    const product = page.locator('.inventory_item').first();

    await expect(product).toBeVisible();

    const backpack = page
        .locator('.inventory_item')
        .filter({ hasText: 'Backpack' });

    await expect(backpack).toBeVisible();
});
