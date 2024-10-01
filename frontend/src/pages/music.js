import React, { useState } from 'react';
import MusicCard from '../components/music-card';
import songs from '../lib/songs'

function Music() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song =>
    song.title ||
    song.artist
  );

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-6xl font-bold mb-4 text-center text-pink-500">Coherence</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search songs or artists..."
          className="w-full p-2 rounded-lg bg-gray-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSongs.map((song, index) => (
          <MusicCard key={index} title={song.title} artist={song.artist} popularity={song.popularity} />
        ))}
      </div>
    </div>
  );
}

export default Music;