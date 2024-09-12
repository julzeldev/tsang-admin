import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  title?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Page: React.FC<Props> = ({ title, children, noPadding = false }) => {
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
      <Box
        ref={headerRef}
        component='header'
        sx={{
          bgcolor: 'background.default',
          borderBottom: '1px solid',
          borderColor: 'primary.main',
          py: 2,
          px: isLargeScreen ? 8 : 4,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
        }}
      >
        {title && (
          <Typography
            variant='h2'
            component='h1'
            textTransform='uppercase'
            sx={{ color: 'primary.main' }}
          >
            {title}
          </Typography>
        )}
      </Box>
      <Box
        component='section'
        sx={{
          maxWidth: isLargeScreen ? '1200px' : '100vw',
          margin: '0 auto',
          mt: `${headerHeight}px`,
          py: noPadding ? 0 : isLargeScreen ? 8 : 4,
          px: noPadding ? 0 : isLargeScreen ? 0 : 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Page;
