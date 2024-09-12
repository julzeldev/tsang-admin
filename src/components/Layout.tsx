import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import MobileNavigation from './MobileNavigation';

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <Box component='main' sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box
        component='footer'
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          boxShadow: '0px -1px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <MobileNavigation userRole='admin' />
      </Box>
    </Box>
  );
};

export default Layout;
