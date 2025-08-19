import { test, expect } from '@playwright/test';

test.describe('Calculator App - E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the calculator app
    await page.goto('/');
    // Wait for the app to load
    await page.waitForLoadState('networkidle');
  });

  test('should load the calculator application', async ({ page }) => {
    // Verify the page title contains "Calculator"
    await expect(page).toHaveTitle(/Calculator/i);
    
    // Verify the main heading is visible
    await expect(page.locator('h1')).toContainText('Calculator App');
    
    // Verify calculator component is visible
    const calculator = page.locator('.calculator');
    await expect(calculator).toBeVisible();
    
    // Verify display is present
    const display = page.locator('.display');
    await expect(display).toBeVisible();
  });

  test('should perform basic arithmetic operations', async ({ page }) => {
    // Test addition: 5 + 3 = 8
    await page.click('button:has-text("5")');
    await page.click('button:has-text("+")');
    await page.click('button:has-text("3")');
    await page.click('button:has-text("=")');
    
    // Wait for calculation result
    await page.waitForTimeout(500);
    
    // Verify result is displayed
    const display = page.locator('.display');
    await expect(display).toContainText('8');
  });

  test('should clear the display', async ({ page }) => {
    // Enter some numbers
    await page.click('button:has-text("1")');
    await page.click('button:has-text("2")');
    await page.click('button:has-text("3")');
    
    // Verify numbers are displayed
    const display = page.locator('.display');
    await expect(display).toContainText('123');
    
    // Click clear button
    await page.click('button:has-text("Clear")');
    
    // Verify display is cleared
    await expect(display).toHaveText('');
  });

  test('should display calculation history', async ({ page }) => {
    // Perform a calculation
    await page.click('button:has-text("2")');
    await page.click('button:has-text("+")');
    await page.click('button:has-text("2")');
    await page.click('button:has-text("=")');
    
    // Wait for history to update
    await page.waitForTimeout(1000);
    
    // Check if history section exists
    const historySection = page.locator('text=History').first();
    await expect(historySection).toBeVisible();
  });

  test('should handle multiple operations', async ({ page }) => {
    // Test: 10 - 3 + 2 = 9
    await page.click('button:has-text("1")');
    await page.click('button:has-text("0")');
    await page.click('button:has-text("-")');
    await page.click('button:has-text("3")');
    await page.click('button:has-text("+")');
    await page.click('button:has-text("2")');
    await page.click('button:has-text("=")');
    
    // Wait for calculation
    await page.waitForTimeout(500);
    
    // Verify result
    const display = page.locator('.display');
    await expect(display).toContainText('9');
  });
});
