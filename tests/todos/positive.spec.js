const { test, expect } = require('@playwright/test');

test.describe('Todos - Positive', () => {
  test('GET /todos - returns array of 200 todos', async ({ request }) => {
    const response = await request.get('/todos');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(200);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('completed');
  });
});
