import React from 'react';

const LoadingScreen = () => {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500 mb-4"></div>
        <h1 className="text-4xl font-bold text-cyan-500 mb-2">Coherence</h1>
        <p className="text-blue-400">Loading amazing content...</p>
      </div>
    );
  };

export default LoadingScreen;