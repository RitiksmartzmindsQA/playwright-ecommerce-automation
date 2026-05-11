import { test, expect } from '@playwright/test';

// test('Handle iframe using frameLocator', async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/iframe');

//     const frame = page.frameLocator('#mce_0_ifr');

//     await frame.locator('#tinymce').clear();
//     await frame.locator('#tinymce').fill('Hello from Playwright');

//     await expect(frame.locator('#tinymce')).toHaveText('Hello from Playwright');

// });

// test('Handle iframe using page.frame()', async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/iframe');

//     const frame = page.frame({ name: 'mce_0_ifr' });

//     await frame.fill('#tinymce', 'Frame example');

// });

test('Handle iframe using frameLocator', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame = page.frameLocator('#mce_0_ifr');

    await expect(frame.locator('#tinymce')).toBeVisible();
});
