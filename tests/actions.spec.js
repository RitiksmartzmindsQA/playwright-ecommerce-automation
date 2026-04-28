import { test, expect } from '@playwright/test';

test('Mouse hover example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    const user = page.locator('.figure').first();

    await user.hover();

    await expect(user.getByText('View profile')).toBeVisible();

});

test('Right click example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/context_menu');

    const box = page.locator('#hot-spot');

    await box.click({ button: 'right' });

    page.on('dialog', async dialog => {
        await dialog.accept();
    });

});

test('Drag and drop example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const source = page.locator('#column-a');
    const target = page.locator('#column-b');

    await source.dragTo(target);

});

test('Keyboard typing example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.keyboard.press('Enter');

    await page.keyboard.press('ArrowDown');

    await expect(page.locator('#result')).toContainText('You entered: DOWN');

});