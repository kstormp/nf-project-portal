# NF Project Portal

## Project Overview
A project management portal with dashboard for tracking projects and team members. Runs fully locally — no external dependencies, all data in-memory.

## Tech Stack
- **Runtime:** Node.js 20+
- **Framework:** Express.js
- **Testing:** Node.js built-in test runner (`node --test`)
- **Frontend:** Vanilla HTML/CSS/JS served from Express (no build step, no frameworks)

## Architecture
- `src/index.js` — Express app entry point, mounts routes and static files
- `src/routes/` — Route handlers (one file per domain: projects, members)
- `src/middleware/` — Express middleware (auth, error handling)
- `src/services/` — In-memory data stores and business logic
- `src/public/` — Frontend (index.html, style.css, app.js)
- `tests/` — Test files matching `*.test.js`

## Conventions
- Use Node.js built-in test runner, not Jest
- Keep route handlers thin — business logic goes in services/
- All API routes under `/api/` prefix
- Frontend served as static files from `src/public/`
- Return consistent JSON: `{ data: ... }` for success, `{ error: ... }` for errors
- Use environment variables for configuration (PORT, API_TOKEN)
- In-memory storage using plain JS (Maps or arrays) — no databases, no ORMs

## Important for parallel development
- Each feature has its own route file and service file — no shared mutable state between features
- `src/index.js` is the only shared file — mount new routes by adding `app.use()` lines
- If your feature adds a route, add it to index.js and document the mount point

## Commands
- `npm start` — Start the server
- `npm run dev` — Start with file watching
- `npm test` — Run all tests
