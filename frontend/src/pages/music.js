import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import SearchBar from '../components/ SearchBar';
import MusicCard from '../components/music-card'

function Music() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults('*');
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
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div 
      className="min-h-screen p-4 md:p-8 bg-cover bg-no-repeat bg-center w-full"
      style={{
        background: `
          linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.7) 50%, 
            rgba(0, 0, 0, 0.9) 75%, 
            rgba(0, 0, 0, 1) 100%
          ),
          url('/assets/background.jpg') no-repeat center center fixed
        `,
        backgroundSize: 'cover'
      }}
    >
      <h1 className="text-5xl font-bold mb-6 text-center text-cyan-300">Coherence :3</h1>
      <SearchBar onSearch={fetchResults} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((song) => (
          <div key={song.id} onClick={() => handleSongSelect(song)}>
            <MusicCard song={song} />
          </div>
        ))}
      </div>
      {selectedSong && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-2 text-white">{selectedSong.title}</h2>
            <p className="text-lg mb-2 text-white">{selectedSong.artist}</p>
            <p className="mb-4 text-white">Popularity: {selectedSong.popularity}</p>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <YouTube videoId={getYoutubeId(selectedSong.url)} opts={opts} />
            </div>
            <button 
              onClick={closePopup}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Music;