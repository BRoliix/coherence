import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Algo() {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetchSongs(searchQuery);
    }
  }, [searchQuery]);

  const fetchSongs = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?q=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      if (data && data.results && Array.isArray(data.results)) {
        setSongs(data.results);
      } else {
        console.error('Invalid data structure received from API');
        setSongs([]);
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
      setError(error.message);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  const searchResults = {
    labels: songs.map(song => song.title),
    datasets: [{
      label: 'Song Popularity',
      data: songs.map(song => song.popularity),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Music Data Visualization</h1>
      
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for songs..."
          className="w-full p-2 border rounded"
        />
      </div>

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">Error: {error}</div>}
      
      {!loading && !error && songs.length > 0 && (
        <div className="item center"> 
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            <Line data={searchResults} options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Popularity'
                  }
                }
              }
            }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Algo;