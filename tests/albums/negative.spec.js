const { test, expect } = require('@playwright/test');

test.describe('Albums - Negative', () => {
  test('GET /albums/99999 - invalid ID returns 404', async ({ request }) => {
    const response = await request.get('/albums/99999');
    expect(response.status()).toBe(404);
  });
});
