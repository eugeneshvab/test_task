const { test, expect } = require('@playwright/test');

test.describe('Todos - Edge Cases', () => {
  test('Boundary - GET /todos/1 and /todos/200', async ({ request }) => {
    const r1 = await request.get('/todos/1');
    const r200 = await request.get('/todos/200');
    expect(r1.status()).toBe(200);
    expect(r200.status()).toBe(200);
    const b1 = await r1.json();
    const b200 = await r200.json();
    expect(b1.id).toBe(1);
    expect(b200.id).toBe(200);
  });
});
