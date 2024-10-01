import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../api/spotifyAuth';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      getAccessToken(code)
        .then((data) => {
          localStorage.setItem('spotifyAccessToken', data.access_token);
          navigate('/music');
        })
        .catch((error) => {
          console.error('Error during Spotify authentication:', error);
          navigate('/');
        });
    }
  }, [navigate]);

  return <div>Authenticating with Spotify...</div>;
};

export default SpotifyCallback;