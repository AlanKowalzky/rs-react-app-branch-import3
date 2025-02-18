// src/types/index.ts

export interface Pokemon {
  id: number;  
  name: string;
    sprites: { front_default: string };
    types: { type: { name: string } }[];
    
  }
  
  export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface SearchResultProps {
    pokemons: Pokemon[];
    searchTerm: string;
  }
  
  export interface HeaderInputProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export interface PokemonTypesProps {
    types: PokemonType[];
  }

  export interface PokemonDetailsProps {
    pokemon: {
      name: string;
      sprites: { front_default: string };
      types: { type: { name: string } }[];
      stats: { base_stat: number; stat: { name: string } }[];
    };
  }