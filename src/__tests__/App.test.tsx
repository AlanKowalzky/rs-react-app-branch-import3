import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock danych Pokémona
const mockPokemon = {
  name: "pikachu",
  sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  types: [{ type: { name: "electric" } }],
  stats: [
    { base_stat: 35, stat: { name: "hp" } },
    { base_stat: 55, stat: { name: "attack" } },
  ],
};

test('wyświetla szczegóły Pokémona po kliknięciu', () => {
  // Renderuj komponent App
  render(<App />);

  // Symuluj kliknięcie na Pokémona (np. Pikachu)
  const pokemonCard = screen.getByText(/pikachu/i); // Znajdź kartę Pokémona po nazwie
  fireEvent.click(pokemonCard);

  // Sprawdź, czy komponent PokemonDetails został wyrenderowany
  const pokemonName = screen.getByText(/pikachu/i); // Nazwa Pokémona
  const pokemonType = screen.getByText(/electric/i); // Typ Pokémona
  const pokemonStat = screen.getByText(/hp: 35/i); // Statystyka Pokémona

  expect(pokemonName).toBeInTheDocument();
  expect(pokemonType).toBeInTheDocument();
  expect(pokemonStat).toBeInTheDocument();
});