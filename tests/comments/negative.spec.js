const { test, expect } = require('@playwright/test');

test.describe('Comments - Negative', () => {
  test('GET /comments?postId=99999 - invalid postId', async ({ request }) => {
    const response = await request.get('/comments?postId=99999');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(0);
  });
});
