import React from 'react';

function MusicCard({ song, onSelect }) {
    return (
      <div 
        className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={() => onSelect(song)}
      >
        <h2 className="text-xl font-semibold truncate">{song.title}</h2>
        <p className="text-gray-400 truncate">{song.artist}</p>
        <p className="text-sm text-pink-500 mt-2">Popularity: {song.popularity}</p>
      </div>
    );
  }
  
  export default MusicCard;