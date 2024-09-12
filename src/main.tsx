import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { ThemeContextProvider } from './contexts/themeContext';
import App from './App.tsx';

import '@fontsource/open-sans';
import '@fontsource/roboto';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthProvider>
  </StrictMode>
);
