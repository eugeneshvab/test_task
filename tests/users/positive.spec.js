const { test, expect } = require('@playwright/test');

test.describe('Users - Positive', () => {
  test('GET /users - returns array of 10 users', async ({ request }) => {
    const response = await request.get('/users');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(10);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
  });

  test('GET /users/1 - returns single user', async ({ request }) => {
    const response = await request.get('/users/1');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');
  });
});
