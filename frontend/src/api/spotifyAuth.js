import axios from 'axios';
import queryString from 'query-string';
import { Buffer } from 'buffer';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SCOPE = 'user-modify-playback-state';

const getAuthUrl = () => {
  const params = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    scope: SCOPE,
  };
  return `${AUTH_ENDPOINT}?${queryString.stringify(params)}`;
};

const getAccessToken = async (code) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', process.env.REACT_APP_REDIRECT_URI);

  try {
    const response = await axios.post(TOKEN_ENDPOINT, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

export { getAuthUrl, getAccessToken };