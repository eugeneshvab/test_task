const { test, expect } = require('@playwright/test');

test.describe('Albums - Positive', () => {
  test('GET /albums - returns array of 100 albums', async ({ request }) => {
    const response = await request.get('/albums');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(100);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
  });
});
