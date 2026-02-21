const { test, expect } = require('@playwright/test');

test.describe('Comments - Edge Cases', () => {
  test('Boundary postId - 1 and 100', async ({ request }) => {
    const r1 = await request.get('/comments?postId=1');
    const r100 = await request.get('/comments?postId=100');
    expect(r1.status()).toBe(200);
    expect(r100.status()).toBe(200);
    const b1 = await r1.json();
    const b100 = await r100.json();
    expect(Array.isArray(b1)).toBe(true);
    expect(Array.isArray(b100)).toBe(true);
  });
});
