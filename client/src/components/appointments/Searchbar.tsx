// src/components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-3 text-[grey] border rounded-lg shadow-sm"
        placeholder="Search by doctor name or specialty..."
      />
    </div>
  );
};

export default SearchBar;
