import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import SearchBar from '../components/ SearchBar'
import MusicCard from '../components/music-card';
import FloatingParticles from '../components/FloatingParticles';

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
      <FloatingParticles />
      <h1 className="text-6xl font-bold mb-8 text-center text-cyan-300">Coherence</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <SearchBar onSearch={fetchResults} />
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-300 pb-2">Top 20 Songs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.slice(0, 20).map((song) => (
            <div key={song.id} onClick={() => handleSongSelect(song)} className="transform hover:scale-105 transition-transform duration-200">
              <MusicCard song={song} />
            </div>
          ))}
        </div>
        {results.length > 20 && (
          <>
            <h2 className="text-3xl font-bold my-8 text-white border-b-2 border-cyan-300 pb-2">Other Songs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.slice(20).map((song) => (
                <div key={song.id} onClick={() => handleSongSelect(song)} className="transform hover:scale-105 transition-transform duration-200">
                  <MusicCard song={song} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {selectedSong && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full shadow-2xl">
            <h2 className="text-3xl font-bold mb-3 text-white">{selectedSong.title}</h2>
            <p className="text-xl mb-3 text-cyan-300">{selectedSong.artist}</p>
            <p className="mb-5 text-gray-300">Popularity: {selectedSong.popularity}</p>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <YouTube videoId={getYoutubeId(selectedSong.url)} opts={opts} />
            </div>
            <button 
              onClick={closePopup}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300"
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