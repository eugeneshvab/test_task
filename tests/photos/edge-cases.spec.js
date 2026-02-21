const { test, expect } = require('@playwright/test');

test.describe('Photos - Edge Cases', () => {
  test('Boundary - GET /photos/1 and /photos/5000', async ({ request }) => {
    const r1 = await request.get('/photos/1');
    const r5000 = await request.get('/photos/5000');
    expect(r1.status()).toBe(200);
    expect(r5000.status()).toBe(200);
    const b1 = await r1.json();
    const b5000 = await r5000.json();
    expect(b1.id).toBe(1);
    expect(b5000.id).toBe(5000);
  });
});
