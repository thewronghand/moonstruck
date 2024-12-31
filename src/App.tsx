import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './Pages/LandingPage';
import QueryPage from './Pages/QueryPage';
import ResultPage from './Pages/ResultPage';
import DrawPage from './Pages/DrawPage';
import LoginPage from './Pages/LoginPage';
import { RecoilRoot } from 'recoil';
import AuthProvider from './utils/AuthProvider';
import { createGlobalStyle } from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import SpreadTestPage from './Pages/SpreadTestPage';
import DrawTestPage from './Pages/DrawTestPage';

const AppContainer = styled.div`
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 16px;
  overflow: visible;
`;

export const AppContainerContext = React.createContext<HTMLDivElement | null>(null);

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #f5f5f5;
  }
`;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setAppContainer(containerRef.current);
    }
  }, []);

  const [appContainer, setAppContainer] = useState<HTMLDivElement | null>(null);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <AuthProvider>
        <AppContainerContext.Provider value={appContainer}>
          <AppContainer ref={containerRef}>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/query" element={<QueryPage />} />
                <Route path="/draw" element={<DrawPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/login/:platform" element={<LoginPage />} />
                <Route path="/spread-test" element={<SpreadTestPage />} />
                <Route path="/draw-test" element={<DrawTestPage />} />
              </Routes>
            </Router>
          </AppContainer>
        </AppContainerContext.Provider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
