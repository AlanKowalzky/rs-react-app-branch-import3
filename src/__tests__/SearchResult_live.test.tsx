import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchResult from '../components/SearchResult';
import { Pokemon } from '../types';

describe('SearchResult', () => {
  const mockPokemons: Pokemon[] = [
    // { id: 1, name: 'pikachu', type: 'electric' },
    // { id: 2, name: 'bulbasaur', type: 'grass' },
    { id: 1, name: 'pikachu', sprites: { front_default: '' }, types: [{ type: { name: 'electric' } }] },
    { id: 2, name: 'bulbasaur', sprites: { front_default: '' }, types: [{ type: { name: 'grass' } }] },
  
  ];

  test('renders correctly', () => {
    render(<SearchResult pokemons={mockPokemons} searchTerm="" />);
    expect(screen.getByTestId('searchresult')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<SearchResult pokemons={mockPokemons} searchTerm="" />);
    const input = screen.getByPlaceholderText('Szukaj pokemona...');
    fireEvent.change(input, { target: { value: 'pikachu' } });
    expect(input).toHaveValue('pikachu');
  });
});