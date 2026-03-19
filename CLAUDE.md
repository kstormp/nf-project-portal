# NF Project Portal

## Project Overview
A project management portal that provides a unified dashboard for tracking projects, viewing metrics, and managing team workflows. Runs fully locally with no external dependencies.

## Tech Stack
- **Runtime:** Node.js 20+
- **Framework:** Express.js
- **Testing:** Node.js built-in test runner (`node --test`)
- **Frontend:** (planned) Simple HTML/JS served from Express, or Next.js in phase 2

## Architecture
- `src/index.js` — Express app entry point
- `src/routes/` — Route handlers (one file per domain: projects, metrics, auth)
- `src/middleware/` — Express middleware (auth, error handling, logging)
- `src/services/` — Business logic (activity tracking, data aggregation)
- `tests/` — Test files matching `*.test.js`

## Conventions
- Use Node.js built-in test runner, not Jest
- Keep route handlers thin — business logic goes in services/
- All API routes under `/api/` prefix
- Return consistent JSON: `{ data: ... }` for success, `{ error: ... }` for errors
- Use environment variables for configuration (PORT, API_TOKEN)
- No ORMs — use plain SQL or simple data structures for now

## Commands
- `npm start` — Start the server
- `npm run dev` — Start with file watching
- `npm test` — Run all tests
