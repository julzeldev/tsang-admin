import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from '@/contexts/ThemeContext.tsx';
import App from './App.tsx';

import '@fontsource/open-sans';
import '@fontsource/roboto';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
