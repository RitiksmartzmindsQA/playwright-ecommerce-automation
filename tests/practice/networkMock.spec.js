import { test, expect } from '@playwright/test';

test('Mock API response', async ({ page }) => {
    await page.route('**/posts/1', async (route) => {
        const mockResponse = {
            userId: 1,
            id: 1,
            title: 'Mocked Title',
            body: 'This response is mocked by Playwright',
        };

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockResponse),
        });
    });

    await page.goto('https://jsonplaceholder.typicode.com/posts/1');

    const bodyText = await page.locator('body').textContent();
    const data = JSON.parse(bodyText);

    expect(data.title).toBe('Mocked Title');
});
