import React from 'react';
import AuthenticationPage from './pages/AuthenticationPage';
import { ThemeProvider } from './context/ThemeContext';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <AuthenticationPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
