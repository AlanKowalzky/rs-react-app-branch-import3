// src/components/SearchResult.tsx
import React from 'react';

interface Pokemon {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

interface SearchResultProps {
  pokemons: Pokemon[];
  searchTerm: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ pokemons, searchTerm }) => {
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="character-list">
      {filteredPokemons.length === 0 ? (
        <p>No Pokémon found</p>
      ) : (
        filteredPokemons.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <h3>{pokemon.name}</h3>
            <div className="pokemon-types">
              {pokemon.types.map((type) => (
                <span key={type.type.name} className="pokemon-type">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
