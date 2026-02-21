const { test, expect } = require('@playwright/test');

test.describe('Posts - Negative', () => {
  test('GET /posts/99999 - invalid ID returns 404', async ({ request }) => {
    const response = await request.get('/posts/99999');
    expect(response.status()).toBe(404);
  });

  test('POST with wrong Content-Type', async ({ request }) => {
    const response = await request.post('/posts', {
      data: 'plain text body',
      headers: { 'Content-type': 'text/plain' },
    });
    expect([400, 415, 201]).toContain(response.status());
  });
});
