import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from '../theme'; // Import your theme setup
import { PaletteMode } from '@mui/material';

// Define the context shape
interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Theme provider component
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
