import { test, expect } from '@playwright/test';

test('Handle multiple tabs', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.click('text=Click Here')
    ]);

    await newPage.waitForLoadState();

    await expect(newPage.getByText('New Window')).toBeVisible();

});