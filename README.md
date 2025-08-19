# Calculator App for QA Engineers

This project demonstrates a calculator application with a React frontend and a Node.js backend with SQLite for storing operation history. The project is intentionally designed with several gaps and bugs for QA engineers to identify and test.

## Project Structure

- `backend/` - Node.js Express server with SQLite database
- `frontend/` - React application
- `database/` - SQLite database files

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```
cd backend
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm start
```

The server will run on http://localhost:3001

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```
cd frontend
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

The React app will run on http://localhost:3000

## Features

- Basic calculator operations: addition, subtraction, multiplication, division
- History of calculations stored in SQLite database
- View recent calculation history

## Known Issues and Gaps (For QA Testing)

This application has been purposefully built with several issues for QA engineers to identify:

1. Input validation gaps
2. Error handling inconsistencies
3. Missing features
4. Security issues (like the use of eval)
5. Missing test coverage
6. UI/UX issues

## Testing

This project now includes a comprehensive testing setup with unit tests and E2E tests.

### Quick Testing Commands

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run E2E tests only
npm run test:e2e

# Verify setup
./verify-setup.sh
```

### Testing Stack

- **Backend Unit Tests**: Vitest with supertest for API testing
- **Frontend Unit Tests**: Jest with React Testing Library
- **E2E Tests**: Playwright for browser automation

For detailed testing documentation, see [TESTING.md](TESTING.md).

### Backend Tests

Run backend tests with:
```
cd backend
npm test
```

### Frontend Tests

Run frontend tests with:
```
cd frontend
npm test
```

## QA Engineer Tasks

As a QA engineer, you can use this project to:

1. Write additional test cases for uncovered functionality
2. Identify bugs and security issues
3. Create end-to-end tests
4. Practice writing bug reports
5. Leverage GitHub Copilot to assist with testing tasks

## Technologies Used

- Backend: Node.js, Express, SQLite
- Frontend: React
- Testing: 
  - **Unit Tests**: Vitest (backend), Jest + React Testing Library (frontend)
  - **E2E Tests**: Playwright
  - **API Testing**: Supertest (configured for backend)
