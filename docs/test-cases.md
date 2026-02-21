# API Test Cases - JSONPlaceholder

All test cases for the JSONPlaceholder API automation framework.

## Posts Endpoint

### TC-POST-001: GET all posts (positive)
- **Description:** Retrieve the full list of posts
- **Precondition:** API is available
- **Steps:** Send GET request to /posts
- **Expected Result:** Status 200, array of 100 posts, each with id, title, body, userId; Content-Type: application/json

### TC-POST-002: GET single post by valid ID (positive)
- **Description:** Retrieve a specific post by ID
- **Precondition:** API is available
- **Steps:** Send GET request to /posts/1
- **Expected Result:** Status 200, single object with id, title, body, userId; Content-Type: application/json

### TC-POST-003: GET post comments - nested route (positive)
- **Description:** Retrieve comments for a post via nested route
- **Precondition:** API is available
- **Steps:** Send GET request to /posts/1/comments
- **Expected Result:** Status 200, array of comment objects; Content-Type: application/json

### TC-POST-004: POST create post (positive)
- **Description:** Create a new post with valid payload
- **Precondition:** API is available
- **Steps:** Send POST request to /posts with { userId, title, body }
- **Expected Result:** Status 201, response includes id and echoed body; Content-Type: application/json

### TC-POST-005: PUT update post (positive)
- **Description:** Full update of an existing post
- **Precondition:** API is available
- **Steps:** Send PUT request to /posts/1 with full payload
- **Expected Result:** Status 200, body echoed; Content-Type: application/json

### TC-POST-006: PATCH partial update (positive)
- **Description:** Partial update of an existing post
- **Precondition:** API is available
- **Steps:** Send PATCH request to /posts/1 with { title: "foo" }
- **Expected Result:** Status 200, body reflects update; Content-Type: application/json

### TC-POST-007: DELETE post (positive)
- **Description:** Delete a post
- **Precondition:** API is available
- **Steps:** Send DELETE request to /posts/1
- **Expected Result:** Status 200

### TC-POST-008: GET post with invalid ID (negative)
- **Description:** Request a non-existent post
- **Precondition:** API is available
- **Steps:** Send GET request to /posts/99999
- **Expected Result:** Status 404

### TC-POST-009: POST with wrong Content-Type (negative)
- **Description:** Send POST with incorrect Content-Type header
- **Precondition:** API is available
- **Steps:** Send POST to /posts with Content-Type: text/plain
- **Expected Result:** Status 400 or 415 (API may accept; document actual behavior)

### TC-POST-010: Data-driven POST (edge)
- **Description:** Create posts from external test data file
- **Precondition:** test-data/posts.json exists with valid payloads
- **Steps:** Iterate over posts.json; for each payload, POST to /posts
- **Expected Result:** Each request returns 201 with echoed data

### TC-POST-011: Boundary - first and last post IDs (edge)
- **Description:** Verify boundary post IDs return valid data
- **Precondition:** API is available
- **Steps:** GET /posts/1 and GET /posts/100
- **Expected Result:** Both return 200 with valid post objects

### TC-POST-012: POST with large payload (edge)
- **Description:** Send POST with very long body
- **Precondition:** API is available
- **Steps:** POST with body field ~10KB
- **Expected Result:** No 5xx; document actual behavior

### TC-POST-013: Malformed JSON body (error)
- **Description:** Send invalid JSON in POST body
- **Precondition:** API is available
- **Steps:** POST with body "{invalid"
- **Expected Result:** Status 4xx or 5xx (API may return 400, 422, or 500)

### TC-POST-014: Unsupported HTTP method (error)
- **Description:** Use unsupported HTTP method
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /posts
- **Expected Result:** Status 4xx or 5xx (non-2xx)

---

## Comments Endpoint

### TC-COMMENT-001: GET all comments (positive)
- **Description:** Retrieve the full list of comments
- **Precondition:** API is available
- **Steps:** Send GET request to /comments
- **Expected Result:** Status 200, array of 500 comments; Content-Type: application/json

### TC-COMMENT-002: GET comments by postId (positive)
- **Description:** Filter comments by postId query parameter
- **Precondition:** API is available
- **Steps:** Send GET request to /comments?postId=1
- **Expected Result:** Status 200, array of comments for post 1; Content-Type: application/json

### TC-COMMENT-003: GET comments with invalid postId (negative)
- **Description:** Query with non-existent postId
- **Precondition:** API is available
- **Steps:** Send GET request to /comments?postId=99999
- **Expected Result:** Status 200 with empty array (API behavior) or 404

### TC-COMMENT-004: Boundary postId values (edge)
- **Description:** Test boundary postId values
- **Precondition:** API is available
- **Steps:** GET /comments?postId=1 and /comments?postId=100
- **Expected Result:** Both return 200

### TC-COMMENT-005: Unsupported method (error)
- **Description:** Use unsupported HTTP method on comments
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /comments
- **Expected Result:** Status 4xx or 5xx

---

## Albums Endpoint

### TC-ALBUM-001: GET all albums (positive)
- **Description:** Retrieve the full list of albums
- **Precondition:** API is available
- **Steps:** Send GET request to /albums
- **Expected Result:** Status 200, array of 100 albums; Content-Type: application/json

### TC-ALBUM-002: GET album with invalid ID (negative)
- **Description:** Request non-existent album
- **Precondition:** API is available
- **Steps:** Send GET request to /albums/99999
- **Expected Result:** Status 404

### TC-ALBUM-003: Boundary album IDs (edge)
- **Description:** Test first and last valid album IDs
- **Precondition:** API is available
- **Steps:** GET /albums/1 and GET /albums/100
- **Expected Result:** Both return 200

### TC-ALBUM-004: Unsupported method (error)
- **Description:** Use unsupported HTTP method
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /albums
- **Expected Result:** Status 4xx or 5xx

---

## Photos Endpoint

### TC-PHOTO-001: GET all photos (positive)
- **Description:** Retrieve the full list of photos
- **Precondition:** API is available
- **Steps:** Send GET request to /photos
- **Expected Result:** Status 200, array of 5000 photos; Content-Type: application/json

### TC-PHOTO-002: GET photo with invalid ID (negative)
- **Description:** Request non-existent photo
- **Precondition:** API is available
- **Steps:** Send GET request to /photos/99999
- **Expected Result:** Status 404

### TC-PHOTO-003: Boundary photo IDs (edge)
- **Description:** Test first and last valid photo IDs
- **Precondition:** API is available
- **Steps:** GET /photos/1 and GET /photos/5000
- **Expected Result:** Both return 200

### TC-PHOTO-004: Unsupported method (error)
- **Description:** Use unsupported HTTP method
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /photos
- **Expected Result:** Status 4xx or 5xx

---

## Todos Endpoint

### TC-TODO-001: GET all todos (positive)
- **Description:** Retrieve the full list of todos
- **Precondition:** API is available
- **Steps:** Send GET request to /todos
- **Expected Result:** Status 200, array of 200 todos; Content-Type: application/json

### TC-TODO-002: GET todo with invalid ID (negative)
- **Description:** Request non-existent todo
- **Precondition:** API is available
- **Steps:** Send GET request to /todos/99999
- **Expected Result:** Status 404

### TC-TODO-003: Boundary todo IDs (edge)
- **Description:** Test first and last valid todo IDs
- **Precondition:** API is available
- **Steps:** GET /todos/1 and GET /todos/200
- **Expected Result:** Both return 200

### TC-TODO-004: Unsupported method (error)
- **Description:** Use unsupported HTTP method
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /todos
- **Expected Result:** Status 4xx or 5xx

---

## Users Endpoint

### TC-USER-001: GET all users (positive)
- **Description:** Retrieve the full list of users
- **Precondition:** API is available
- **Steps:** Send GET request to /users
- **Expected Result:** Status 200, array of 10 users; Content-Type: application/json

### TC-USER-002: GET single user by ID (positive)
- **Description:** Retrieve a specific user by ID
- **Precondition:** API is available
- **Steps:** Send GET request to /users/1
- **Expected Result:** Status 200, single user object; Content-Type: application/json

### TC-USER-003: GET user with invalid ID (negative)
- **Description:** Request non-existent user
- **Precondition:** API is available
- **Steps:** Send GET request to /users/99999
- **Expected Result:** Status 404

### TC-USER-004: Boundary user IDs (edge)
- **Description:** Test first and last valid user IDs
- **Precondition:** API is available
- **Steps:** GET /users/1 and GET /users/10
- **Expected Result:** Both return 200

### TC-USER-005: Unsupported method (error)
- **Description:** Use unsupported HTTP method
- **Precondition:** API is available
- **Steps:** Send CONNECT request to /users
- **Expected Result:** Status 4xx or 5xx
