import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  const mockCalculate = jest.fn();
  
  beforeEach(() => {
    mockCalculate.mockReset();
  });
  
  test('renders calculator buttons', () => {
    render(<Calculator onCalculate={mockCalculate} />);
    
    // Check if numbers are rendered
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
    
    // Check if operators are rendered
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('×')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });
  
  test('clicking number buttons updates display', () => {
    render(<Calculator onCalculate={mockCalculate} />);
    
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    
    const display = screen.getByClassName('display');
    expect(display).toHaveTextContent('123');
  });
  
  test('clear button resets display', () => {
    render(<Calculator onCalculate={mockCalculate} />);
    
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Clear'));
    
    const display = screen.getByClassName('display');
    expect(display).toHaveTextContent('');
  });
  
  // BUG 26: No test for calculation with operators
  
  // BUG 27: No test for handling decimal points
});
