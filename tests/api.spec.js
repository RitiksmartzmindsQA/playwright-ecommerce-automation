import { test, expect } from '@playwright/test';

test('GET request example', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.id).toBe(1);
    expect(data.userId).toBe(1);

});

test('POST request example', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'Playwright API Test',
            body: 'Learning API testing',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const data = await response.json();

    expect(data.title).toBe('Playwright API Test');

});

test('PUT request example', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Updated Title',
            body: 'Updated body',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

});

test('DELETE request example', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

});
