import { Stack, Switch } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '@/hooks/useThemeContext.tsx';

const Toggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <>
      {/* Ensures proper material background, typography, etc. */}
      <div style={{ padding: '20px' }}>
        {/* Theme Toggle */}
        <Stack direction='row' alignItems='center' spacing={1}>
          <LightMode />
          <Switch checked={mode === 'dark'} onChange={toggleTheme} />
          <DarkMode />
        </Stack>
      </div>
    </>
  );
};

export default Toggle;
