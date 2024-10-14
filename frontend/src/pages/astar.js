import React, { useState, useEffect, useCallback } from 'react';
import { ForceGraph2D } from 'react-force-graph';

function Astar() {
  const [songGraphData, setSongGraphData] = useState({ nodes: [], links: [] });
  const [writerGraphData, setWriterGraphData] = useState({ nodes: [], links: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [startState, setStartState] = useState('');
  const [goalState, setGoalState] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  const fetchData = async (query) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search/?q=${query}`);
      const data = await response.json();
      processData(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const processData = (results) => {
    // Process song data
    const songNodes = results.slice(0, 20).map((song, index) => ({
      id: `song_${index}`,
      name: song.title,
      artist: song.artist,
      popularity: song.popularity,
      year: song.year,
      genre: song.genre,
      val: Math.log(song.popularity + 1) * 2,
      color: index === 0 ? '#00ff00' : (index === results.length - 1 ? '#ff0000' : '#ff8c00')
    }));

    const songLinks = [];
    for (let i = 0; i < songNodes.length - 1; i++) {
      songLinks.push({ 
        source: songNodes[i].id, 
        target: songNodes[i+1].id, 
        value: 1 / (i + 1)
      });
    }

    setSongGraphData({ nodes: songNodes, links: songLinks });
    setStartState(songNodes[songNodes.length - 1].name);
    setGoalState(songNodes[0].name);

    // Process songwriter data
    const writers = [...new Set(results.map(song => song.artist))];
    const writerNodes = writers.map((writer, index) => ({
      id: `writer_${index}`,
      name: writer,
      val: results.filter(song => song.artist === writer).length * 3,
      color: index === 0 ? '#ffff00' : '#00ff00'
    }));

    const writerLinks = [];
    for (let i = 0; i < writerNodes.length; i++) {
      for (let j = i + 1; j < writerNodes.length; j++) {
        writerLinks.push({ 
          source: writerNodes[i].id, 
          target: writerNodes[j].id, 
          value: Math.random()
        });
      }
    }

    setWriterGraphData({ nodes: writerNodes, links: writerLinks });
  };

  const handleNodeClick = useCallback(node => {
    if (node.id.startsWith('song_')) {
      alert(`${node.name} by ${node.artist}\nPopularity: ${node.popularity}\nYear: ${node.year}\nGenre: ${node.genre}`);
    } else {
      alert(`Songwriter: ${node.name}\nNumber of songs: ${Math.round(node.val / 3)}`);
    }
  }, []);

  const graphConfig = {
    nodeLabel: node => node.name,
    nodeColor: node => node.color,
    nodeRelSize: 6,
    linkWidth: link => link.value * 2,
    linkColor: () => 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#15202B',
    width: 400,
    height: 300,
    onNodeClick: handleNodeClick,
    d3AlphaDecay: 0.01,
    d3VelocityDecay: 0.1,
    d3Force: {
      link: link => Math.min(10 / link.value, 10),
      charge: -100,
      center: [200, 150]
    },
    cooldownTicks: 100
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">Music Data Visualization</h1>
      
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for songs..."
          className="w-full p-2 border rounded bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">Song Relationships</h2>
          <div className="text-sm mb-2">
            <span className="font-bold text-red-500">Start State:</span> {startState}
          </div>
          <div className="text-sm mb-4">
            <span className="font-bold text-green-500">Goal State:</span> {goalState}
          </div>
          <div style={{ height: '400px', width: '100%' }}>
            <ForceGraph2D
              {...graphConfig}
              graphData={songGraphData}
            />
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300">Songwriter Relationships</h2>
          <div style={{ height: '400px', width: '100%' }}>
            <ForceGraph2D
              {...graphConfig}
              graphData={writerGraphData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Astar;