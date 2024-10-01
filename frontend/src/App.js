import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/global.css';
import TeamPage from './pages/hello';
import Music from './pages/music';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<TeamPage />} /> 
        <Route path="/" element={<TeamPage />} />
        <Route path="/music" element={<Music />} />
        
      </Routes>
    </Router>
  );
}

export default App;
