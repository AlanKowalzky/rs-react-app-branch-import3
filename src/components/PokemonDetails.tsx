// PokemonDetails.tsx
import { PokemonDetailsProps } from '../types';
import React from 'react';
import './PokemonDetails.css';



const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="types">
        <strong>Types:</strong>
        {pokemon.types.map((type, index) => (
          <span key={index}>{type.type.name}</span>
        ))}
      </div>
      <div className="stats">
        <strong>Stats:</strong>
        {pokemon.stats.map((stat, index) => (
          <div key={index}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;