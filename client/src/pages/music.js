import React from 'react';
import MusicCard from '../components/MusicCard';

function Music() {
  const musicList = [
    { title: "Sakura", artist: "Rohil" },
    { title: "Summer Breeze", artist: "Cool Band" },
    { title: "Midnight Jazz", artist: "Smooth Trio" }
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Music Streaming</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {musicList.map((music, index) => (
          <MusicCard key={index} title={music.title} artist={music.artist} />
        ))}
      </div>
    </div>
  );
}

export default Music;