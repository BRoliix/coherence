import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

function GraphPage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchSongs(searchQuery);
  }, [searchQuery]);

  const fetchSongs = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?q=${query || '*'}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
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

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  if (!songs || songs.length === 0) {
    return <div className="flex justify-center items-center h-screen">No song data available</div>;
  }

  const popularityDistribution = {
    labels: ['0-20', '21-40', '41-60', '61-80', '81-100'],
    datasets: [{
      label: 'Number of Songs',
      data: [
        songs.filter(song => song.popularity >= 0 && song.popularity <= 20).length,
        songs.filter(song => song.popularity > 20 && song.popularity <= 40).length,
        songs.filter(song => song.popularity > 40 && song.popularity <= 60).length,
        songs.filter(song => song.popularity > 60 && song.popularity <= 80).length,
        songs.filter(song => song.popularity > 80 && song.popularity <= 100).length,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  const topArtists = {
    labels: Object.entries(songs.reduce((acc, song) => {
      acc[song.artist] = (acc[song.artist] || 0) + 1;
      return acc;
    }, {})).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([artist]) => artist),
    datasets: [{
      label: 'Number of Songs',
      data: Object.entries(songs.reduce((acc, song) => {
        acc[song.artist] = (acc[song.artist] || 0) + 1;
        return acc;
      }, {})).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([, count]) => count),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    }]
  };

  const popularityVsYear = {
    datasets: [{
      label: 'Popularity vs Year',
      data: songs.filter(song => song.year && song.popularity).map(song => ({ x: parseInt(song.year), y: song.popularity })),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }]
  };

  const genreDistribution = {
    labels: [...new Set(songs.flatMap(song => song.genre))].slice(0, 10),
    datasets: [{
      label: 'Number of Songs',
      data: [...new Set(songs.flatMap(song => song.genre))].slice(0, 10).map(genre => 
        songs.filter(song => song.genre.includes(genre)).length
      ),
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    }]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Music Data Visualization</h1>
      
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for songs..."
          className="w-full p-2 border rounded bg-gray-800 text-white border-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Popularity Distribution</h2>
          <Bar data={popularityDistribution} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Top 10 Artists</h2>
          <Pie data={topArtists} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: 'white' } } } }} />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Popularity vs Year</h2>
          <Scatter 
            data={popularityVsYear} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { title: { display: true, text: 'Year', color: 'white' }, ticks: { color: 'white' } },
                y: { title: { display: true, text: 'Popularity', color: 'white' }, ticks: { color: 'white' } }
              },
              plugins: { legend: { labels: { color: 'white' } } }
            }} 
          />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Top 10 Genres</h2>
          <Line data={genreDistribution} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
        </div>
      </div>
    </div>
  );
}

export default GraphPage;