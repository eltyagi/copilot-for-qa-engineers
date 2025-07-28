import React from 'react';

const History = ({ history }) => {
  // BUG 20: No handling for empty history
  return (
    <div className="history">
      <h2>History</h2>
      {/* BUG 21: No loading indicator while fetching history */}
      {history.map((item) => (
        <div key={item.id} className="history-item">
          <span>{item.operation}</span>
          <span>=</span>
          <span>{item.result}</span>
          {/* BUG 22: No timestamp displayed */}
          {/* BUG 23: No way to re-use a calculation from history */}
        </div>
      ))}
    </div>
  );
};

export default History;
