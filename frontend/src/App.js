import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/global.css';
import Team from './pages/team';
import Music from './pages/music';
import SpotifyCallback from './components/SpotifyCallback';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Team />} /> 
        <Route path="/" element={<Team />} />
        <Route path="/music" element={<Music />} />
        <Route path="/callback" element={<SpotifyCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
