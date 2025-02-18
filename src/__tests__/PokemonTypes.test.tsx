import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PokemonTypes from '../components/PokemonTypes';

describe('PokemonTypes', () => {
  test('renders correctly', () => {
    render(<PokemonTypes />);
    expect(screen.getByTestId('pokemontypes')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<PokemonTypes />);
    const input = screen.getByPlaceholderText('Szukaj pokemona...');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    expect(input).toHaveValue('pikachu');
  });
});
