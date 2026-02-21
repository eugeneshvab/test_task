const { test, expect } = require('@playwright/test');

test.describe('Posts - Error Handling', () => {
  test('Malformed JSON returns error status 4xx or 5xx', async ({ request }) => {
    const response = await request.post('/posts', {
      data: '{invalid',
      headers: { 'Content-type': 'application/json' },
    });
    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

  test('Unsupported HTTP method returns non-2xx', async ({ request }) => {
    const response = await request.fetch('/posts', { method: 'TRACE' });
    expect(response.status()).not.toBeLessThan(400);
  });
});
