import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContextMenu from './ContextMenu';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

interface Props {
  title?: string;
  headerRef: React.RefObject<HTMLDivElement>;
  isLargeScreen: boolean;
}

const Header: React.FC<Props> = ({ title, headerRef, isLargeScreen }) => {
  const { mode, toggleTheme } = useTheme();

  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const items = [
    {
      label: mode === 'dark' ? 'Light Mode' : 'Dark Mode',
      onClick: toggleTheme,
    },
    { label: 'Logout', onClick: logout },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      ref={headerRef}
      component='header'
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        py: 2,
        px: isLargeScreen ? 8 : 2,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {title && (
        <Typography
          variant='h3'
          component='h1'
          textTransform='uppercase'
          sx={{ color: 'primary.main' }}
        >
          {title}
        </Typography>
      )}
      <IconButton
        aria-label='more options'
        onClick={handleClick}
        sx={{ color: 'primary.main' }}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <ContextMenu
        items={items}
        handleClose={handleClose}
        anchorEl={anchorEl}
        open={open}
      />
    </Box>
  );
};

export default Header;
