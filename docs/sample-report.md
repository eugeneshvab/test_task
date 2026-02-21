# Sample Test Report

## Console Output (from `npm test`)

```
Running 36 tests using 1 worker

  ✓   tests/albums/edge-cases.spec.js - Boundary - GET /albums/1 and /albums/100
  ✓   tests/albums/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/albums/negative.spec.js - GET /albums/99999 - invalid ID returns 404
  ✓   tests/albums/positive.spec.js - GET /albums - returns array of 100 albums
  ✓   tests/comments/edge-cases.spec.js - Boundary postId - 1 and 100
  ✓   tests/comments/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/comments/negative.spec.js - GET /comments?postId=99999 - invalid postId
  ✓   tests/comments/positive.spec.js - GET /comments - returns array of 500 comments
  ✓   tests/comments/positive.spec.js - GET /comments?postId=1 - returns comments for post
  ✓   tests/photos/edge-cases.spec.js - Boundary - GET /photos/1 and /photos/5000
  ✓   tests/photos/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/photos/negative.spec.js - GET /photos/99999 - invalid ID returns 404
  ✓   tests/photos/positive.spec.js - GET /photos - returns array of 5000 photos
  ✓   tests/posts/edge-cases.spec.js - Data-driven POST from test-data/posts.json
  ✓   tests/posts/edge-cases.spec.js - Boundary - GET /posts/1 and /posts/100
  ✓   tests/posts/edge-cases.spec.js - POST with large payload - no 5xx
  ✓   tests/posts/error-handling.spec.js - Malformed JSON returns error status 4xx or 5xx
  ✓   tests/posts/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/posts/negative.spec.js - GET /posts/99999 - invalid ID returns 404
  ✓   tests/posts/negative.spec.js - POST with wrong Content-Type
  ✓   tests/posts/positive.spec.js - GET /posts - returns array of 100 posts
  ✓   tests/posts/positive.spec.js - GET /posts/1 - returns single post with valid schema
  ✓   tests/posts/positive.spec.js - GET /posts/1/comments - returns array of comments
  ✓   tests/posts/positive.spec.js - POST /posts - creates post and returns 201
  ✓   tests/posts/positive.spec.js - PUT /posts/1 - updates post
  ✓   tests/posts/positive.spec.js - PATCH /posts/1 - partial update
  ✓   tests/posts/positive.spec.js - DELETE /posts/1 - returns 200
  ✓   tests/todos/edge-cases.spec.js - Boundary - GET /todos/1 and /todos/200
  ✓   tests/todos/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/todos/negative.spec.js - GET /todos/99999 - invalid ID returns 404
  ✓   tests/todos/positive.spec.js - GET /todos - returns array of 200 todos
  ✓   tests/users/edge-cases.spec.js - Boundary - GET /users/1 and /users/10
  ✓   tests/users/error-handling.spec.js - Unsupported HTTP method returns non-2xx
  ✓   tests/users/negative.spec.js - GET /users/99999 - invalid ID returns 404
  ✓   tests/users/positive.spec.js - GET /users - returns array of 10 users
  ✓   tests/users/positive.spec.js - GET /users/1 - returns single user

  36 passed (3.1s)
```

## HTML Report

After running `npm test`, the HTML report is generated in `playwright-report/`. View it with:

```bash
npm run report
```

This opens an interactive HTML report with test results, duration, and failure details (when applicable).
