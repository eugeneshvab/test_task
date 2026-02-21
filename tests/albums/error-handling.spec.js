const { test, expect } = require('@playwright/test');

test.describe('Albums - Error Handling', () => {
  test('Unsupported HTTP method returns non-2xx', async ({ request }) => {
    const response = await request.fetch('/albums', { method: 'TRACE' });
    expect(response.status()).not.toBeLessThan(400);
  });
});
