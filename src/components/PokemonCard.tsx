import React from 'react';

interface Pokemon {
  id: number;
  name: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
  onSelect: (id: number) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onSelect }) => {
  return (
    <li onClick={() => onSelect(pokemon.id)}>
      <strong>{pokemon.name}</strong>
    </li>
  );
};

export default PokemonCard;
