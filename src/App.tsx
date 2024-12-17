import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import QueryPage from './Pages/QueryPage';
import ResultPage from './Pages/ResultPage';
import DrawPage from './Pages/DrawPage';
import LoginPage from './Pages/LoginPage';
import { RecoilRoot } from 'recoil';
import AuthProvider from './utils/AuthProvider';

function App() {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/draw" element={<DrawPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/login/:platform" element={<LoginPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
