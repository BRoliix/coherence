import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for music..."
        className="p-2 rounded-l-lg border-none bg-gray-800 bg-opacity-60 text-white w-64 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
      <button 
        type="submit" 
        className="p-2 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;