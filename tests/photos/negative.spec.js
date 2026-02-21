const { test, expect } = require('@playwright/test');

test.describe('Photos - Negative', () => {
  test('GET /photos/99999 - invalid ID returns 404', async ({ request }) => {
    const response = await request.get('/photos/99999');
    expect(response.status()).toBe(404);
  });
});
