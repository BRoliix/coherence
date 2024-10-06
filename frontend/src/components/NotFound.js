import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <p className="mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;