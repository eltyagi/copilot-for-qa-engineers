const request = require('supertest');
const app = require('../server');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// BUG 7: Tests are incomplete and don't cover all API endpoints
// Should add tests for GET /api/history and other endpoints

describe('Calculator API', () => {
  describe('POST /api/calculate', () => {
    test('should calculate addition correctly', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: '2 + 2' });
      
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(4);
    });

    test('should calculate subtraction correctly', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: '5 - 3' });
      
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(2);
    });

    // BUG 8: Missing tests for multiplication and division
    
    test('should return 400 for invalid operations', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'invalid operation' });
      
      expect(response.status).toBe(400);
    });

    // BUG 9: No test for division by zero
  });

  // BUG 10: No tests for the history endpoint
});
