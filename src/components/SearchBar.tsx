import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialTerm?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialTerm);

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Wyszukaj Pokemon..."
      />
      <button onClick={handleSearch}>Szukaj</button>
    </div>
  );
};

export default SearchBar;
