const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database(path.join(__dirname, '../database/calculator.db'));

// Create table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS operations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    operation TEXT NOT NULL,
    result REAL NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Routes
app.post('/api/calculate', (req, res) => {
  try {
    const { operation } = req.body;
    
    // BUG 1: No input validation
    // Should check if operation is defined and is a string
    
    // BUG 2: Unsafe eval
    // In a production app, you would want to use a math parser library instead
    let result;
    try {
      result = eval(operation);
      
      // BUG 3: No handling for division by zero
      // This will return Infinity, which might cause issues in the frontend
      
    } catch (error) {
      return res.status(400).json({ error: 'Invalid operation' });
    }
    
    // Save to database
    const insertStmt = db.prepare('INSERT INTO operations (operation, result) VALUES (?, ?)');
    insertStmt.run(operation, result);
    insertStmt.finalize();
    
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/history', (req, res) => {
  try {
    // BUG 4: No pagination for large datasets
    db.all('SELECT * FROM operations ORDER BY timestamp DESC LIMIT 10', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.json(rows);
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// BUG 5: Missing route to delete history
// Should implement a DELETE /api/history endpoint

// BUG 6: Missing route to get a specific operation by ID
// Should implement a GET /api/history/:id endpoint

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing
