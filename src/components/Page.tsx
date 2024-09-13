import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({ title, children }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const headerRef = React.useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Header
        title={title}
        headerRef={headerRef}
        isLargeScreen={isLargeScreen}
      />
      <Box
        component='section'
        sx={{
          maxWidth: isLargeScreen ? '1460px' : '100vw',
          margin: '0 auto',
          mt: `${headerHeight}px`,
          height: `calc(100dvh - ${headerHeight}px - 56px)`,
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
            p: isLargeScreen ? 4 : 2,
            bgcolor: isLargeScreen ? 'background.paper' : 'background.default',
            minHeight: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
