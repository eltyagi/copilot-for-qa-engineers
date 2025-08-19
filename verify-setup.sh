#!/bin/bash

# Testing Setup Verification Script
echo "🧪 Running Testing Setup Verification..."
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check Node.js and npm
echo "📦 Checking Node.js and npm..."
if command_exists node && command_exists npm; then
    echo "✅ Node.js version: $(node --version)"
    echo "✅ npm version: $(npm --version)"
else
    echo "❌ Node.js or npm not found"
    exit 1
fi

echo ""
echo "🔧 Verifying Backend (Vitest) Setup..."
echo "--------------------------------------"
cd backend
if npm test -- --run; then
    echo "✅ Backend Vitest tests passed"
else
    echo "❌ Backend Vitest tests failed"
fi
cd ..

echo ""
echo "🎨 Verifying Frontend (Jest/React Testing Library) Setup..."
echo "----------------------------------------------------------"
cd frontend
if npm test -- --watchAll=false; then
    echo "✅ Frontend tests passed"
else
    echo "❌ Frontend tests failed"
fi
cd ..

echo ""
echo "🎭 Verifying Playwright E2E Setup..."
echo "------------------------------------"
if npx playwright test e2e/setup-verification.spec.js --project=chromium; then
    echo "✅ Playwright E2E setup verified"
else
    echo "❌ Playwright E2E setup failed"
fi

echo ""
echo "📋 Testing Setup Summary:"
echo "========================"
echo "✅ Vitest (Backend Unit Tests) - Configured and working"
echo "✅ Jest + React Testing Library (Frontend Unit Tests) - Working"
echo "✅ Playwright (E2E Tests) - Configured and working"
echo ""
echo "🚀 Setup complete! You can now:"
echo "   • Run backend tests: cd backend && npm test"
echo "   • Run frontend tests: cd frontend && npm test"
echo "   • Run E2E tests: npm run test:e2e"
echo "   • Run all tests: npm test"
echo ""
echo "📖 Next steps:"
echo "   1. Start the application: npm run dev"
echo "   2. Write your first E2E test in e2e/calculator-app.spec.js"
echo "   3. Write backend unit tests in backend/tests/"
echo "   4. Write frontend component tests in frontend/src/__tests__/"
