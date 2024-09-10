import React, { useState, useMemo } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
} from '@mui/material';
import getTheme from '@/theme'; // Assuming your theme file is named 'theme.ts'

const DarkMode = () => {
  // State to manage theme mode, default to 'light'
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Toggle the mode between light and dark
  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme object so it's only recreated when 'mode' changes
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{' '}
      {/* Ensures proper material background, typography, etc. */}
      <div style={{ padding: '20px' }}>
        {/* Theme Toggle */}
        <FormControlLabel
          control={
            <Switch checked={mode === 'dark'} onChange={handleModeChange} />
          }
          label='Toggle Dark Mode'
        />
      </div>
    </ThemeProvider>
  );
};

export default DarkMode;
