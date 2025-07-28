const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database connection
const db = new sqlite3.Database(path.join(__dirname, '../database/calculator.db'));

// Create table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS operations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    operation TEXT NOT NULL,
    result REAL NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  
  console.log('Database initialized successfully');
  
  // Insert some sample data
  const sampleOperations = [
    { operation: '2 + 2', result: 4 },
    { operation: '10 - 5', result: 5 },
    { operation: '3 * 4', result: 12 },
    { operation: '20 / 4', result: 5 }
  ];
  
  const stmt = db.prepare('INSERT INTO operations (operation, result) VALUES (?, ?)');
  sampleOperations.forEach(op => {
    stmt.run(op.operation, op.result);
  });
  stmt.finalize();
  
  console.log('Sample data inserted');
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Database connection closed');
  }
});
