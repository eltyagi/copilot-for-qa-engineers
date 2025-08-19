import { describe, it, expect } from 'vitest';

describe('Setup Verification', () => {
  it('should verify Vitest is working', () => {
    expect(1 + 1).toBe(2);
  });

  it('should verify basic math operations', () => {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    expect(add(2, 3)).toBe(5);
    expect(subtract(5, 3)).toBe(2);
    expect(multiply(4, 3)).toBe(12);
    expect(divide(10, 2)).toBe(5);
  });
});
