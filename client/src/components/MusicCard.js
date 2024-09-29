import React from 'react';

const MusicCard = ({ title, artist }) => {
    return (
        <div className="bg-black border border-pink-500 rounded-lg p-4 m-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-pink-300">{artist}</p>
        </div>
    );
};

export default MusicCard;