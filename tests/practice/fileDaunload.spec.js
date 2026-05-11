import { test } from '@playwright/test';

test('File download example', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');

    await page.click('text=some-file.txt');

    const download = await downloadPromise;

    console.log(await download.suggestedFilename());

    await download.saveAs('./downloads/some-file.txt');
});
