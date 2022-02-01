import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import PrijavljivanjeDomaci from './components/PrijavljivanjeDomaci'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prijavljivanje" element={<PrijavljivanjeDomaci />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
