// // src/theme.ts
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#ff4081',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//     h1: {
//       fontFamily: 'Open Sans, serif',
//     },
//     h2: {
//       fontFamily: 'Open Sans, serif',
//     },
//     h3: {
//       fontFamily: 'Open Sans, serif',
//     },
//     h4: {
//       fontFamily: 'Open Sans, serif',
//     },
//   },
// });

// export default theme;
import { createTheme, PaletteMode } from '@mui/material/styles';
import {
  grey,
  blue,
  orange,
  green,
  red,
  lightBlue,
} from '@mui/material/colors';

const lightPalette = {
  mode: 'light' as PaletteMode, // Explicitly set as 'light'
  primary: {
    main: blue[500], // Primary color for buttons, etc.
    contrastText: '#fff',
  },
  secondary: {
    main: orange[500], // Secondary actions
    contrastText: '#fff',
  },
  background: {
    default: '#f4f6f8', // Background for the whole app
    paper: '#ffffff', // Paper elements (cards, modals)
  },
  text: {
    primary: grey[900], // Main text color
    secondary: grey[700], // Secondary text color (labels, captions)
    disabled: grey[500],
  },
  success: {
    main: green[500], // Success messages and UI
  },
  warning: {
    main: orange[600], // Warnings
  },
  error: {
    main: red[500], // Error messages
  },
  info: {
    main: lightBlue[500], // Informational messages
  },
  divider: grey[300], // Border color for dividers, buttons, inputs
};

const darkPalette = {
  mode: 'dark' as PaletteMode,
  primary: {
    main: blue[300], // Lighter primary for dark mode
    contrastText: '#fff',
  },
  secondary: {
    main: orange[300], // Secondary color adjusted for dark mode
    contrastText: '#fff',
  },
  background: {
    default: '#121212', // Dark background
    paper: '#1e1e1e', // Darker paper elements
  },
  text: {
    primary: '#ffffff', // Light text for dark background
    secondary: grey[500], // Muted light text
    disabled: grey[600],
  },
  success: {
    main: green[400], // Success in dark mode
  },
  warning: {
    main: orange[400], // Warning in dark mode
  },
  error: {
    main: red[400], // Error in dark mode
  },
  info: {
    main: lightBlue[400], // Info in dark mode
  },
  divider: grey[700], // Dark dividers, borders, etc.
};

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontFamily: 'Open Sans, serif',
        fontSize: '2rem',
        fontWeight: 700,
      },
      h2: {
        fontFamily: 'Open Sans, serif',
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h3: {
        fontFamily: 'Open Sans, serif',
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      body1: {
        fontFamily: 'Open Sans, serif',
        fontSize: '1rem',
      },
      body2: {
        fontFamily: 'Open Sans, serif',
        fontSize: '0.875rem',
      },
      caption: {
        fontSize: '0.75rem',
        color: mode === 'light' ? grey[700] : grey[500],
      },
      button: {
        textTransform: 'none', // Disable uppercase for buttons
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Button corners
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: mode === 'light' ? blue[500] : blue[300], // Input label color on focus
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: mode === 'light' ? grey[300] : grey[700], // Input border color
              },
              '&.Mui-focused fieldset': {
                borderColor: mode === 'light' ? blue[500] : blue[300], // Input border color on focus
              },
            },
          },
        },
      },
    },
  });

export default getTheme;
