const API_URL = 'https://your-django-app.vercel.app/api';

// Example API call
fetch(`${API_URL}/endpoint`)
  .then(response => response.json())
  .then(data => console.log(data));