import { createTheme, PaletteMode } from '@mui/material/styles';
import {
  grey,
  blue,
  orange,
  green,
  red,
  lightBlue,
  teal,
} from '@mui/material/colors';

const lightPalette = {
  mode: 'light' as PaletteMode, // Explicitly set as 'light'
  primary: {
    main: blue[500], // Primary color for buttons, etc.
    contrastText: '#fff',
  },
  secondary: {
    main: teal[500], // Secondary actions
    contrastText: '#fff',
  },
  background: {
    default: '#efefef', // Background for the whole app
    paper: '#fafafa', // Paper elements (cards, modals)
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
    main: blue[400], // Lighter primary for dark mode
    contrastText: '#fff',
  },
  secondary: {
    main: teal[400], // Secondary color adjusted for dark mode
    contrastText: '#fff',
  },
  background: {
    default: '#1e1e1e', // Dark background
    paper: '#232323', // Lighter paper elements
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
      h4: {
        fontFamily: 'Open Sans, serif',
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h5: {
        fontFamily: 'Open Sans, serif',
        fontSize: '1.125rem',
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
            borderRadius: 4, // Button corners
            boxShadow: 'none', // Remove button shadow
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
                borderColor: mode === 'light' ? grey[300] : grey[800], // Input border color
              },
              '&.Mui-focused fieldset': {
                borderColor: mode === 'light' ? blue[600] : blue[700], // Input border color on focus
              },
            },
          },
        },
      },
    },
  });

export default getTheme;
