import React from 'react';
import TeamPage from '../components/team-page';
const teamMembers = [
  {
    id: 1,
    name: "Rohil Sagar",
    role: "Full Stack Developer",
    image: "/assets/rohil.png",
    bio: "Transforms innovative ideas into reality through code and creativity."
  },
  {
    id: 2,
    name: "Sara Vartak",
    role: "Frontend Developer",
    image: "/assets/sara.jpg",
    bio: " Creates stunning designs and translates them into flawless code. "
  },
  {
    id: 3,
    name: "Tanay Matta",
    role: "Systems Architect & AI Specialist",
    image: "/assets/tanay.jpg",
    bio: "Linux expert with broad expertise in web dev, AI/ML, deep learning and many more fields."
  },
  {
      id: 4,
      name: "Khushii Wason",
      role: "Developer",
      image: "/assets/khushii.jpg",
      bio: " Excels in photography and various IT fields including cybersecurity and machine learning."
    }
];
const Team = () => {
  return (
    <div>
      <TeamPage teamMembers={teamMembers} />
    </div>
  );
};

export default Team;