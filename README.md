# API QA Automation Framework

A lightweight, maintainable API automation framework for the [JSONPlaceholder](https://jsonplaceholder.typicode.com) public API. Built with Node.js and Playwright Test.

## Coverage

- **6 resources:** posts, comments, albums, photos, todos, users
- **8 routes:** GET /posts, GET /posts/:id, GET /posts/:id/comments, GET /comments?postId=, POST /posts, PUT /posts/:id, PATCH /posts/:id, DELETE /posts/:id

## Prerequisites

- Node.js 18+
- npm

## Install Dependencies

```bash
npm install
```

## Run Tests

```bash
npm test
```

## View HTML Report

After running tests:

```bash
npm run report
```

Opens the Playwright HTML report in your browser.

## Test Structure

Tests are organized by endpoint:

```
tests/
├── posts/      # positive, negative, edge-cases, error-handling
├── comments/
├── albums/
├── photos/
├── todos/
└── users/
```

Each endpoint has four spec files: `positive.spec.js`, `negative.spec.js`, `edge-cases.spec.js`, `error-handling.spec.js`.

## Test Data

External test data is stored in `test-data/posts.json` for data-driven POST tests. Format:

```json
[
  { "userId": 1, "title": "Test Post A", "body": "Body A" },
  { "userId": 2, "title": "Test Post B", "body": "Body B" }
]
```

## Assumptions

- JSONPlaceholder is a fake REST API; data is not persisted
- POST/PUT/PATCH return echoed data but do not validate required fields
- Some negative scenarios (e.g. wrong Content-Type) may return 201; tests assert actual API behavior

## Limitations & Known Issues

- POST always returns 201 for valid JSON, even with missing fields
- Malformed JSON behavior may vary; tests accept 400 or 422
- Unsupported methods (e.g. CONNECT) may return 404 or 501 depending on infrastructure

## Documentation

- Test cases: [docs/test-cases.md](docs/test-cases.md)
- Sample report (console): [docs/sample-report.md](docs/sample-report.md)
