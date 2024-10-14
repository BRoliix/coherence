import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamMember from './team-member';
import CustomLoadingScreen from './LoadingScreen'; 

const TeamPage = ({ teamMembers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleMusicClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/music');
    }, 2000); 
  };

  return (
    <div className="bg-gradient-to-br from-cyan-500 to-black text-white min-h-screen py-12 relative">
      {isLoading && <CustomLoadingScreen />}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-2">coherence</h2>
        <h1 className="text-5xl font-bold text-center mb-2">
          About <span className="text-cyan-500">Us</span>
        </h1>
        <p className="text-gray-400 text-center mb-12">Meet the team behind this project!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleMusicClick}
            className="bg-cyan-500 hover:bg-cyan-900 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;