// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Open Sans, serif',
    },
    h2: {
      fontFamily: 'Open Sans, serif',
    },
    h3: {
      fontFamily: 'Open Sans, serif',
    },
  },
});

export default theme;
