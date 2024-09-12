import { useContext } from 'react';
import { ThemeContextType, ThemeContext } from '../contexts/themeContext';

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }
  return context;
};
