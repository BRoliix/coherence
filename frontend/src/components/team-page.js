import React from 'react';
import TeamMember from './team-member';
import { getAuthUrl } from '../api/spotifyAuth';

const TeamPage = ({ teamMembers }) => {
  console.log('TeamPage rendered, teamMembers:', teamMembers);

  const handleSpotifyLogin = () => {
    window.location = getAuthUrl();
  };

  if (!teamMembers || !Array.isArray(teamMembers) || teamMembers.length === 0) {
    console.error('Invalid or empty teamMembers array:', teamMembers);
    return <div>No team members to display</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-pink-400 text-center mb-2">Our Team</h1>
        <p className="text-blue-400 text-center mb-12">Makers of Coherence</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
        <div className="flex justify-center">
          <button 
            onClick={handleSpotifyLogin}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login to Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;