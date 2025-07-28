import React from 'react';
import { render, screen } from '@testing-library/react';
import History from '../components/History';

describe('History Component', () => {
  test('renders history items', () => {
    const mockHistory = [
      { id: 1, operation: '2 + 2', result: 4, timestamp: '2023-08-01 12:00:00' },
      { id: 2, operation: '5 - 3', result: 2, timestamp: '2023-08-01 12:01:00' }
    ];
    
    render(<History history={mockHistory} />);
    
    expect(screen.getByText('2 + 2')).toBeInTheDocument();
    expect(screen.getByText('5 - 3')).toBeInTheDocument();
  });
  
  // BUG 28: No test for empty history state
});
