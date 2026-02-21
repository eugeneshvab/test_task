const { test, expect } = require('@playwright/test');

test.describe('Users - Edge Cases', () => {
  test('Boundary - GET /users/1 and /users/10', async ({ request }) => {
    const r1 = await request.get('/users/1');
    const r10 = await request.get('/users/10');
    expect(r1.status()).toBe(200);
    expect(r10.status()).toBe(200);
    const b1 = await r1.json();
    const b10 = await r10.json();
    expect(b1.id).toBe(1);
    expect(b10.id).toBe(10);
  });
});
