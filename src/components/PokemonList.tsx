import React from 'react';
import PokemonCard from './PokemonCard';

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
  onSelect: (id: number) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onSelect }) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default PokemonList;
