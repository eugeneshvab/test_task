const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.describe('Posts - Edge Cases', () => {
  test('Data-driven POST from test-data/posts.json', async ({ request }) => {
    const postsPath = path.join(__dirname, '../../test-data/posts.json');
    const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    expect(Array.isArray(posts)).toBe(true);

    for (const payload of posts) {
      const response = await request.post('/posts', {
        data: payload,
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      expect(response.status()).toBe(201);
      const body = await response.json();
      expect(body).toHaveProperty('id');
      expect(body.title).toBe(payload.title);
      expect(body.body).toBe(payload.body);
      expect(body.userId).toBe(payload.userId);
    }
  });

  test('Boundary - GET /posts/1 and /posts/100', async ({ request }) => {
    const r1 = await request.get('/posts/1');
    const r100 = await request.get('/posts/100');
    expect(r1.status()).toBe(200);
    expect(r100.status()).toBe(200);
    const b1 = await r1.json();
    const b100 = await r100.json();
    expect(b1.id).toBe(1);
    expect(b100.id).toBe(100);
    expect(b1).toHaveProperty('title');
    expect(b100).toHaveProperty('title');
  });

  test('POST with large payload - no 5xx', async ({ request }) => {
    const largeBody = 'x'.repeat(10000);
    const payload = { userId: 1, title: 'Large', body: largeBody };
    const response = await request.post('/posts', {
      data: payload,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).not.toBeGreaterThanOrEqual(500);
  });
});
