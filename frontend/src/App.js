import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Team from './pages/team';
import Music from './pages/music';
import NotFound from './components/NotFound';
import LoadingScreen from './components/LoadingScreen';

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
      </Routes>
    </Router>
  );
}

export default App;