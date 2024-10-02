import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import MusicCard from '../components/music-card';

const SearchForm = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?q=${query}`);
      const data = await response.json();
      setResults(data.results); 
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value) }
        placeholder="Search for music..."
        className="p-2 rounded border border-gray-300 text-black "
      />
      <button type="submit" className="ml-2 p-2 bg-pink-500 text-white rounded ">Search</button>
    </form>
  );
};



function Music() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
  const [results, setResults] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const fetchResults = async (searchQuery) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?q=${searchQuery}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  useEffect(() => {
    fetchResults('*');
  }, []);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  const closePopup = () => {
    setSelectedSong(null);
  };

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-pink-500">Coherence :3 </h1>
      <SearchForm setResults={setResults} />
      <div className="mb-8 grid grid-cols-4 gap-4 p-4">
        {results.map((song) => (
          <MusicCard key={song.id} song={song} onClick={() => handleSongSelect(song)} />
        ))}
      </div>
      {selectedSong && (
        <div className="popup">
          <div className="popup-inner">
            <h1>{selectedSong.title}</h1>
            <p>{selectedSong.artist}</p>
            <p>Popularity: {selectedSong.popularity}</p>
            <YouTube videoId={getYoutubeId(selectedSong.url)} opts={opts} />
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Music;