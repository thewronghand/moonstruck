import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import QueryPage from './Pages/QueryPage';
import ResultPage from './Pages/ResultPage';
import DrawPage from './Pages/DrawPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/draw" element={<DrawPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
