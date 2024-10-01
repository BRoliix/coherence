import React from 'react';
import TeamMember from './team-member';

const TeamPage = ({ teamMembers }) => {
 
  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-pink-500 text-center mb-2">Our Team</h1>
        <p className="text-blue-400 text-center mb-12">Makers of Coherence</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
        </div>
      </div>
    </div>
  );
};

export default TeamPage;