import React from 'react';

function MusicCard({ song }) {
  return (
    <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg hover:bg-opacity-80 transition-all cursor-pointer">
      <h2 className="text-xl font-semibold text-white truncate">{song.title}</h2>
      <p className="text-gray-300 truncate">{song.artist}</p>
      <p className="text-sm text-cyan-300 mt-2">Popularity: {song.popularity}</p>
    </div>
  );
}

export default MusicCard;