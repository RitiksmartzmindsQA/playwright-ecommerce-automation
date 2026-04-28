import { test } from '@playwright/test';

test('Handle alert popup', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.click('text=Click for JS Alert');

});

test('Handle confirm popup', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        await dialog.dismiss();

    });

    await page.click('text=Click for JS Confirm');

});

test('Handle prompt popup', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        await dialog.accept('Hello Playwright');

    });

    await page.click('text=Click for JS Prompt');

});