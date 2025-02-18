// SearchResult.tsx
import React from "react";
import { Pokemon } from "../types";

interface SearchResultProps {
  pokemons: Pokemon[];
  searchTerm: string;
  onSelect: (pokemon: Pokemon) => void; // Dodano prop onSelect
}

const SearchResult: React.FC<SearchResultProps> = ({ pokemons, searchTerm, onSelect }) => {
  return (
    <div className="character-list">
      {pokemons.length === 0 ? (
        <div className="error">
          Nie znaleziono Pokémonów pasujących do "{searchTerm}"
        </div>
      ) : (
        pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="pokemon-card"
            onClick={() => onSelect(pokemon)} // Dodano onClick
          >
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