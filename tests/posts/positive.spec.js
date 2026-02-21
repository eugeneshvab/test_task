const { test, expect } = require('@playwright/test');

test.describe('Posts - Positive', () => {
  test('GET /posts - returns array of 100 posts', async ({ request }) => {
    const response = await request.get('/posts');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBe(100);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('body');
    expect(body[0]).toHaveProperty('userId');
  });

  test('GET /posts/1 - returns single post with valid schema', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
    expect(body).toHaveProperty('userId');
  });

  test('GET /posts/1/comments - returns array of comments', async ({ request }) => {
    const response = await request.get('/posts/1/comments');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('POST /posts - creates post and returns 201', async ({ request }) => {
    const payload = { userId: 1, title: 'foo', body: 'bar' };
    const response = await request.post('/posts', {
      data: payload,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);
  });

  test('PUT /posts/1 - updates post', async ({ request }) => {
    const payload = { id: 1, title: 'foo', body: 'bar', userId: 1 };
    const response = await request.put('/posts/1', {
      data: payload,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
  });

  test('PATCH /posts/1 - partial update', async ({ request }) => {
    const response = await request.patch('/posts/1', {
      data: { title: 'foo' },
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body.title).toBe('foo');
  });

  test('DELETE /posts/1 - returns 200', async ({ request }) => {
    const response = await request.delete('/posts/1');
    expect(response.status()).toBe(200);
  });
});
