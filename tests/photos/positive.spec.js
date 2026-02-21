const { test, expect } = require('@playwright/test');

test.describe('Photos - Positive', () => {
  test('GET /photos - returns array of 5000 photos', async ({ request }) => {
    const response = await request.get('/photos');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(5000);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('albumId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('url');
  });
});
