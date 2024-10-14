import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold uppercase">{name}</h3>
      <p className="text-gray-400">{role}</p>
      
    </div>
  );
};

export default TeamMember;



