<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions for Calculator App

This is a sample Calculator application with a Node.js backend, React frontend, and SQLite database for storing operation history. The project is intentionally designed with gaps and issues for QA engineers to practice testing.

# General Instructions
- Use Vitest for unit tests
- User playwright for integration tests

## Project Structure

- `backend/` - Node.js Express server (port 3001)
- `frontend/` - React application (port 3000)
- `database/` - SQLite database files

## Intentional Issues

This project contains intentional issues for testing purposes:

1. Security issues (e.g., use of `eval` in the backend)
2. Missing input validation
3. Incomplete error handling
4. Missing features (like parentheses in calculator, timestamp display in history)
5. UI/UX issues
6. Incomplete test coverage

## Testing Focus Areas

When helping QA engineers, focus on:

1. Writing unit tests, integration tests, and E2E tests
2. Creating test plans and test cases
3. Identifying security vulnerabilities
4. Automating test scripts
5. Mocking API responses for testing
6. Setting up test environments
7. Generating test data
8. Debugging test failures

## Important APIs

- `POST /api/calculate` - Endpoint for calculating expressions
  - Input: `{ "operation": "2 + 2" }`
  - Output: `{ "result": 4 }`

- `GET /api/history` - Endpoint for retrieving calculation history
  - Output: Array of operations with id, operation, result, and timestamp
