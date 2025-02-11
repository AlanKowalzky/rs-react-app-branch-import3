import React, { useState, useEffect } from "react";  
import HeaderInput from "./components/HeaderInput";  
import SearchResult from "./components/SearchResult";
import Pagination from "./components/Pagination"; // Importujemy Pagination
import "./App.css";

interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1); // Bieżąca strona
  const [totalPages, setTotalPages] = useState<number>(0); // Łączna liczba stron

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Pobieranie danych dla bieżącej strony
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=40&offset=${(page - 1) * 20}`);
        const data = await response.json();

        // Pobieranie szczegółów dla każdego Pokémona
        const pokemonsData = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonsData);
        // Ustawiamy liczbę stron (zakładając, że w sumie jest 1000 Pokémonów)
        setTotalPages(Math.ceil(1000 / 20));  // Możesz dostosować tę wartość, jeśli liczba Pokémonów jest inna
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchPokemons();
  }, [page]); // Fetching danych tylko przy zmianie strony

  return (
    <div className="App">
      <div className="content">
        <h1>Pokémon List</h1>
        <HeaderInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SearchResult pokemons={pokemons} searchTerm={searchTerm} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage} // Ustawiamy stronę za pomocą funkcji onPageChange
        />
      </div>
    </div>
  );
};

export default App;
