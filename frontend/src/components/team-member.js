import React from 'react';

const TeamMember = ({ name, role, image, bio }) => {
    return (
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1 text-white">{name}</h2>
          <p className="text-pink-400 text-sm mb-2">{role}</p>
          <p className="text-gray-300 text-sm mb-4">{bio}</p>
        </div>
      </div>
    );
  };

export default TeamMember;