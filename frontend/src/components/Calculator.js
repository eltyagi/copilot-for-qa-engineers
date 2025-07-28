import React, { useState } from 'react';

const Calculator = ({ onCalculate }) => {
  const [display, setDisplay] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  
  const handleButtonClick = (value) => {
    if (waitingForOperand) {
      setDisplay(value);
      setWaitingForOperand(false);
    } else {
      setDisplay(display + value);
    }
  };
  
  const handleOperatorClick = (operator) => {
    // BUG 17: Doesn't handle consecutive operators well
    setDisplay(display + ' ' + operator + ' ');
    setWaitingForOperand(false);
  };
  
  const handleClear = () => {
    setDisplay('');
    setWaitingForOperand(false);
  };
  
  const handleEquals = async () => {
    try {
      // BUG 18: No validation before sending to backend
      const result = await onCalculate(display);
      setDisplay(String(result));
      setWaitingForOperand(true);
    } catch (error) {
      setDisplay('Error');
      setWaitingForOperand(true);
    }
  };
  
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
        
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
        
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleOperatorClick('*')}>×</button>
        
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="equals" onClick={handleEquals}>=</button>
        <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
        
        <button className="clear" onClick={handleClear} style={{ gridColumn: 'span 4' }}>Clear</button>
        
        {/* BUG 19: Missing parentheses buttons for complex calculations */}
      </div>
    </div>
  );
};

export default Calculator;
