import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { PaletteMode } from '@mui/material';
import getTheme from '../theme'; // Import your theme setup

// Define the shape of the context context
export interface ThemeContextType {
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
  const [mode, setMode] = useState<PaletteMode>('dark');

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
