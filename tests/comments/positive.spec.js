const { test, expect } = require('@playwright/test');

test.describe('Comments - Positive', () => {
  test('GET /comments - returns array of 500 comments', async ({ request }) => {
    const response = await request.get('/comments');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(500);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('postId');
    expect(body[0]).toHaveProperty('email');
    expect(body[0]).toHaveProperty('body');
  });

  test('GET /comments?postId=1 - returns comments for post', async ({ request }) => {
    const response = await request.get('/comments?postId=1');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    if (body.length > 0) {
      expect(body[0].postId).toBe(1);
    }
  });
});
