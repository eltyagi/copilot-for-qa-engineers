import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

// Mock axios
jest.mock('axios');

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
  });

  test('renders calculator and history components', () => {
    render(<App />);
    expect(screen.getByText(/Calculator App/i)).toBeInTheDocument();
    expect(screen.getByText(/History/i)).toBeInTheDocument();
  });

  // BUG 24: No test for calculation functionality
  
  // BUG 25: No test for error handling when API fails
});
