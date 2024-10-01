import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      console.log('Received Spotify auth code:', code);
      // Here you would exchange the code for an access token
      // This should be done on your backend to keep your client secret secure
      // For now, we'll just simulate a successful login
      navigate('/music');
    }
  }, [navigate]);

  return <div>Processing Spotify login...</div>;
};

export default SpotifyCallback;