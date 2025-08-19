import { test, expect } from '@playwright/test';

test.describe('Playwright Setup Verification', () => {
  test('should verify Playwright is working', async ({ page }) => {
    // Test Playwright with Google as a simple connectivity test
    await page.goto('https://www.google.com');
    
    // Verify the page loads
    await expect(page).toHaveTitle(/Google/i);
    
    // Verify search box is present
    const searchBox = page.locator('input[name="q"], textarea[name="q"]');
    await expect(searchBox.first()).toBeVisible();
  });

  test('should verify browser automation works', async ({ page }) => {
    // Test basic Playwright functionality
    await page.goto('data:text/html,<html><head><title>Test Page</title></head><body><h1>Hello World</h1><button id="test-btn">Click Me</button></body></html>');
    
    // Verify page title
    await expect(page).toHaveTitle('Test Page');
    
    // Verify elements are visible
    await expect(page.locator('h1')).toHaveText('Hello World');
    await expect(page.locator('#test-btn')).toBeVisible();
    
    // Test interaction
    await page.click('#test-btn');
  });
});
