import React, { useState, useEffect } from "react";
import HeaderInput from "./components/HeaderInput";
import SearchResult from "./components/SearchResult";
import Pagination from "./components/Pagination";
import PokemonDetails from "./components/PokemonDetails"; // Import PokemonDetails
import { Pokemon } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Bieżąca strona Pokémonów
  const [page, setPage] = useState<number>(1); // Bieżąca strona
  const [totalPages, setTotalPages] = useState<number>(0); // Liczba stron
  const [searchTerm, setSearchTerm] = useState<string>(""); // Wyszukiwana fraza
  const [isLoading, setIsLoading] = useState<boolean>(false); // Stan ładowania
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null); // Dodano stan dla wybranego Pokémona
  
  // Efekt 1: Pobierz 10 Pokémonów na starcie
  useEffect(() => {
    const fetchInitialPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
        const data = await response.json();

        const pokemonsData = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonsData); // Ustaw bieżącą stronę
        setTotalPages(Math.ceil(data.count / 10)); // Oblicz liczbę stron
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPokemons();
  }, []);

  // Efekt 2: Paginacja bez wyszukiwania
  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
        );
        const data = await response.json();

        const pokemonsData = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonsData); // Ustaw nową stronę Pokémonów
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!searchTerm) {
      fetchPokemons(); // Pobierz dane tylko jeśli nie ma wyszukiwania
    }
  }, [page, searchTerm]);

  // Efekt 3: Wyszukiwanie
  useEffect(() => {
    if (searchTerm) {
      const fetchAllPokemons = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
          const data = await response.json();

          const filtered = data.results.filter((pokemon: { name: string }) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          localStorage.setItem("searchResults", JSON.stringify(filtered)); // Zapisz wyniki w localStorage
          setTotalPages(Math.ceil(filtered.length / 10)); // Oblicz liczbę stron

          // Dociągnij obrazki dla pierwszej strony
          const startIndex = (page - 1) * 10;
          const endIndex = startIndex + 10;
          const currentPageResults = filtered.slice(startIndex, endIndex);

          const pokemonsWithImages = await Promise.all(
            currentPageResults.map(async (pokemon: { url: string }) => {
              const res = await fetch(pokemon.url);
              return res.json();
            })
          );

          setPokemons(pokemonsWithImages); // Ustaw bieżącą stronę
        } catch (error) {
          console.error("Błąd pobierania danych:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchAllPokemons();
    }
  }, [searchTerm, page]);

  // Funkcja do obsługi wyboru Pokémona
  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };
 
  
  return (
    <div className="App">
      <div className="content">
        <h1>Pokémon List</h1>
        <HeaderInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {isLoading ? (
          <div>Ładowanie...</div>
        ) : (
          <>
                        {/* <SearchResult pokemons={pokemons} searchTerm={searchTerm} onSelect={handlePokemonSelect} />
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />} Renderuj PokemonDetails, jeśli wybrano Pokémona */}
                <SearchResult
              pokemons={pokemons}
              searchTerm={searchTerm}
              onSelect={handlePokemonSelect} // Przekazuj funkcję do SearchResult
            />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;