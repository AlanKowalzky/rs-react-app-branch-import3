// src/components/HeaderInput.tsx
import React from 'react';

interface HeaderInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderInput: React.FC<HeaderInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header-input">
      <input
        type="text"
        placeholder="Szukaj pokemona..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default HeaderInput;
