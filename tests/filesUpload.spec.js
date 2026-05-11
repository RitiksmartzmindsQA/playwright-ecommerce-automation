import { test, expect } from '@playwright/test';

test('Upload file from PC', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.setInputFiles('#file-upload', 'test-data/uploads/example.png');

    await page.click('#file-submit');

    await expect(page.getByText('File Uploaded!')).toBeVisible();

});