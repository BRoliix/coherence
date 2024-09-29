import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hello from './pages/Hello';
import Music from './pages/music';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Hello />} /> 
        <Route path="/" element={<Hello />} />
        <Route path="/music" element={<Music />} />
        
      </Routes>
    </Router>
  );
}

export default App;