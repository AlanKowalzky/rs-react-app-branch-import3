import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import HeaderInput from '../components/HeaderInput';

describe('HeaderInput', () => {
  test('renders correctly', () => {
    render(<HeaderInput />);
    expect(screen.getByTestId('headerinput')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<HeaderInput />);
    const input = screen.getByPlaceholderText('Szukaj pokemona...');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    expect(input).toHaveValue('pikachu');
  });
});
