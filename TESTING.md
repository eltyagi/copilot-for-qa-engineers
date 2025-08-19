# Testing Setup Documentation

This project is now configured with a comprehensive testing setup including unit tests and E2E tests.

## 🧪 Testing Stack

### Backend Unit Tests - Vitest
- **Location**: `backend/tests/`
- **Framework**: Vitest
- **Configuration**: `backend/vitest.config.js`
- **Run Tests**: `cd backend && npm test`

### Frontend Unit Tests - Jest + React Testing Library
- **Location**: `frontend/src/__tests__/`
- **Framework**: Jest with React Testing Library
- **Setup**: `frontend/src/setupTests.js`
- **Run Tests**: `cd frontend && npm test`

### E2E Tests - Playwright
- **Location**: `e2e/`
- **Framework**: Playwright
- **Configuration**: `playwright.config.js`
- **Run Tests**: `npm run test:e2e`

## 🚀 Available Commands

### Root Level Commands
```bash
npm run test:unit        # Run both backend and frontend unit tests
npm run test:e2e         # Run E2E tests
npm run test:e2e:ui      # Run E2E tests with UI mode
npm run test:e2e:headed  # Run E2E tests in headed mode
npm test                 # Run all tests (unit + E2E)
```

### Backend Commands
```bash
cd backend
npm test                 # Run Vitest tests
npm test -- --coverage  # Run tests with coverage
npm test -- --ui        # Run tests with Vitest UI
```

### Frontend Commands
```bash
cd frontend
npm test                 # Run Jest tests
npm test -- --coverage  # Run tests with coverage
npm test -- --watchAll=false  # Run tests once (no watch mode)
```

## 📁 Directory Structure

```
copilot-for-qa-engineers/
├── backend/
│   ├── tests/                    # Backend unit tests
│   │   └── setup-verification.test.js
│   └── vitest.config.js          # Vitest configuration
├── frontend/
│   ├── src/
│   │   ├── __tests__/            # Frontend unit tests
│   │   │   ├── App.test.js
│   │   │   ├── Calculator.test.js
│   │   │   └── History.test.js
│   │   └── setupTests.js         # Jest setup
│   └── package.json              # Jest configuration included
├── e2e/                          # E2E tests
│   ├── setup-verification.spec.js
│   └── calculator-app.spec.js
├── playwright.config.js          # Playwright configuration
└── verify-setup.sh              # Setup verification script
```

## 🔧 Configuration Details

### Vitest Configuration (`backend/vitest.config.js`)
- Node.js environment
- Global test functions
- Coverage reporting with v8 provider
- 10-second timeout for tests

### Jest Configuration (`frontend/package.json`)
- Configured to handle ES modules (axios)
- React Testing Library setup
- Transform ignore patterns for node_modules

### Playwright Configuration (`playwright.config.js`)
- Chromium, Firefox, and WebKit browsers
- Mobile device testing
- Automatic server startup
- HTML, JSON, and JUnit reporters
- Screenshot and video recording on failure

## 🎯 Test Examples

### Backend Unit Test Example
```javascript
import { describe, it, expect } from 'vitest';

describe('Calculator Logic', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
```

### Frontend Unit Test Example
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders calculator buttons', () => {
  render(<Calculator onCalculate={mockCalculate} />);
  expect(screen.getByText('=')).toBeInTheDocument();
});
```

### E2E Test Example
```javascript
import { test, expect } from '@playwright/test';

test('should perform calculation', async ({ page }) => {
  await page.goto('/');
  await page.click('button:has-text("2")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("3")');
  await page.click('button:has-text("=")');
  
  const display = page.locator('.display');
  await expect(display).toContainText('5');
});
```

## 🚦 Running the Verification

To verify that everything is set up correctly:

```bash
./verify-setup.sh
```

This script will:
1. Check Node.js and npm installation
2. Run backend Vitest tests
3. Run frontend Jest tests
4. Run Playwright setup verification
5. Provide a summary of the testing setup

## 🎨 Best Practices

### Unit Tests
- Test individual functions and components in isolation
- Mock external dependencies (APIs, modules)
- Aim for high code coverage
- Write descriptive test names

### E2E Tests
- Test complete user workflows
- Test critical business paths
- Keep tests independent of each other
- Use page object patterns for complex scenarios

### Testing Strategy
1. **Unit Tests**: Fast, isolated, comprehensive coverage
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user journeys
4. **API Tests**: Test backend endpoints (can be added with Vitest + supertest)

## 🔍 Debugging Tests

### Vitest
- Use `--ui` flag for interactive debugging
- Use `console.log` or `debugger` statements
- Check coverage reports in `coverage/` directory

### Jest
- Use `--verbose` flag for detailed output
- Use React Developer Tools for component debugging
- Check test results in the terminal

### Playwright
- Use `--headed` to see tests in browser
- Use `--debug` for step-by-step debugging
- Check screenshots and videos in `test-results/`
- Use Playwright Inspector: `npx playwright test --debug`

## 📊 CI/CD Integration

The testing setup is ready for CI/CD integration:
- All tests can run in headless mode
- JUnit XML reports for test result integration
- Coverage reports for code quality metrics
- Parallel test execution support

Example GitHub Actions workflow:
```yaml
- name: Run Unit Tests
  run: npm run test:unit

- name: Run E2E Tests
  run: npm run test:e2e
```
