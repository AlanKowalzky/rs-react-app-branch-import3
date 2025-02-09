import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorButton from '../components/ErrorButton'; // Dodaj ten import

// In your test file (e.g., Tests.test.tsx)
describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('catches errors in child components', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it('handles errors on button click', () => {
    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    );

    const button = screen.getByText(/Generate Error/i);
    fireEvent.click(button);

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
