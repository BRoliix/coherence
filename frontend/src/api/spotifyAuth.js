// import axios from 'axios';

// const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
// const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
// const SCOPE = 'user-modify-playback-state';

// const getAccessToken = async (code) => {
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('code', code);
//     params.append('redirect_uri', process.env.REACT_APP_REDIRECT_URI);
  
//     try {
//       const response = await axios.post(TOKEN_ENDPOINT, params, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'Authorization': 'Basic ' + btoa(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error getting access token:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };

// export { getAuthUrl, getAccessToken };