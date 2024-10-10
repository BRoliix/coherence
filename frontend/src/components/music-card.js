import React from 'react';

function MusicCard({ song }) {
  return (
    <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg hover:bg-opacity-80 transition-all cursor-pointer shadow-lg">
      <h2 className="text-xl font-semibold text-white truncate mb-2">{song.title}</h2>
      <p className="text-gray-300 truncate mb-3">{song.artist}</p>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-cyan-300 h-2.5 rounded-full" style={{ width: `${song.popularity}%` }}></div>
        </div>
        <p className="text-sm text-cyan-300 ml-2">{song.popularity}</p>
      </div>
    </div>
  );
}

export default MusicCard;