const { test, expect } = require('@playwright/test');

test.describe('Albums - Edge Cases', () => {
  test('Boundary - GET /albums/1 and /albums/100', async ({ request }) => {
    const r1 = await request.get('/albums/1');
    const r100 = await request.get('/albums/100');
    expect(r1.status()).toBe(200);
    expect(r100.status()).toBe(200);
    const b1 = await r1.json();
    const b100 = await r100.json();
    expect(b1.id).toBe(1);
    expect(b100.id).toBe(100);
  });
});
