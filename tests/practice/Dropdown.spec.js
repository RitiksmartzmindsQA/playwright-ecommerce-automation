import { test, expect } from '@playwright/test';

test('Handle dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // Select by value
    await page.selectOption('#dropdown', '1');

    // Select by label
    await page.selectOption('#dropdown', { label: 'Option 2' });

    await expect(page.locator('#dropdown')).toHaveValue('2');
});

test('Custom dropdown example', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#withOptGroup').click();

    await page.getByText('Group 1, option 1').click();
});
