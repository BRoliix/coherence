import React from 'react';

const MusicCard = ({ title, artist, popularity }) => {
    return (
        <div className="bg-gray-900 border border-pink-500 rounded-lg p-4 hover:bg-gray-800 transition duration-300">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="text-pink-300">{artist}</p>
            <p className="text-blue-400 mt-2">Popularity: {popularity}</p>
        </div>
    );
};

export default MusicCard;