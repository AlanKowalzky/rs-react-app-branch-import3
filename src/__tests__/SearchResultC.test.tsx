import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResult from '../components/SearchResult';

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

const mockPokemons: Pokemon[] = [
  { id: 1, name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { id: 2, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

describe('SearchResult', () => {
  test('renders correctly', () => {
    render(<SearchResult pokemons={mockPokemons} searchTerm="" />);
    
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});