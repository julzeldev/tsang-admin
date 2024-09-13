import { Stack, Switch } from '@mui/material';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { useTheme } from '../hooks/useTheme';

const Toggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <>
      {/* Ensures proper material background, typography, etc. */}
      <div style={{ padding: '20px' }}>
        {/* Theme Toggle */}
        <Stack direction='row' alignItems='center' spacing={1}>
          <SettingsBrightnessOutlinedIcon />
          <Switch checked={mode === 'dark'} onChange={toggleTheme} />
        </Stack>
      </div>
    </>
  );
};

export default Toggle;
