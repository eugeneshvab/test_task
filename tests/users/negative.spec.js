const { test, expect } = require('@playwright/test');

test.describe('Users - Negative', () => {
  test('GET /users/99999 - invalid ID returns 404', async ({ request }) => {
    const response = await request.get('/users/99999');
    expect(response.status()).toBe(404);
  });
});
