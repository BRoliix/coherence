import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import MusicCard from '../components/music-card';
import songs from '../components/songs';

function Music() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
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

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-pink-500">Coherence</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search songs or artists..."
          className="w-full p-2 rounded-lg bg-gray-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSongs.map((song, index) => (
          <MusicCard 
            key={index} 
            song={song}
            onSelect={handleSongSelect}
          />
        ))}
      </div>
      {selectedSong && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="p-4 bg-gray-700">
              <h2 className="text-2xl font-bold">{selectedSong.title}</h2>
              <p className="text-gray-300">{selectedSong.artist}</p>
            </div>
            <div className="relative pt-[56.25%]">
              <YouTube
                videoId={getYoutubeId(selectedSong.url)}
                opts={opts}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="text-pink-500">Popularity: {selectedSong.popularity}</p>
              <button 
                onClick={closePopup}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Music;