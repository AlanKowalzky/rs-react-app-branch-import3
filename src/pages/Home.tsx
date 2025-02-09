import React from 'react';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Wyszukiwarka Pokemon</h1>
      <SearchBar onSearch={() => {}} />
      <PokemonList pokemons={[]} onSelect={() => {}} />
    </div>
  );
};

export default Home;
