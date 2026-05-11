import { test, expect } from '@playwright/test';

test('Table handling example', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    const table = page.locator('#table1');

    await expect(table).toBeVisible();

    const rowCount = await table.locator('tbody tr').count();
    console.log('Rows:', rowCount);

    const lastName = await table
        .locator('tbody tr')
        .nth(0)
        .locator('td')
        .nth(0)
        .textContent();
    console.log('First row last name:', lastName);

    const email = await table
        .locator('tbody tr')
        .nth(1)
        .locator('td')
        .nth(2)
        .textContent();
    console.log('Second row email:', email);
});
