import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import NotFound from './components/NotFound';
import GraphPage from './pages/graph';
import Astar from './pages/astar';
import AlgoPage from './pages/algo';
import Music from './pages/music';
import Team from './pages/team';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} /> 
        <Route path="/" element={<Team />} />
        <Route path="/music" element={<Music />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/astar" element={<Astar />} />
        <Route path="/algo" element={<AlgoPage />} />
      </Routes>
    </Router>
  );
}

export default App;