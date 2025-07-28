import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import History from './components/History';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

function App() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  
  // BUG 11: This function doesn't handle network errors well
  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/history`);
      setHistory(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch history');
      // BUG 12: Not clearing the history state on error
    }
  };
  
  useEffect(() => {
    fetchHistory();
    // BUG 13: No cleanup function in useEffect
    // BUG 14: No polling or websocket to update history in real-time
  }, []);
  
  const handleCalculation = async (operation) => {
    try {
      const response = await axios.post(`${API_URL}/calculate`, { operation });
      fetchHistory(); // Refresh history after calculation
      return response.data.result;
    } catch (error) {
      setError('Calculation failed');
      // BUG 15: Not handling different types of errors differently
      return 'Error';
    }
  };
  
  return (
    <div className="container">
      <h1>Calculator App</h1>
      <Calculator onCalculate={handleCalculation} />
      {error && <div className="error">{error}</div>}
      <History history={history} />
      {/* BUG 16: No way to clear history from UI */}
    </div>
  );
}

export default App;
