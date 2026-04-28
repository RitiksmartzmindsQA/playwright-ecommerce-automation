import { test, expect } from '@playwright/test';

test('browser navigation commands', async ({page}) => {

    await page.goto('https://www.saucedemo.com');

    await expect(page).toHaveTitle(/Swag Labs/);

    await page.goto('https://example.com') 

    await page.goBack();

    await page.goForward();

    await page.reload();
    
});