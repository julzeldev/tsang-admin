import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileNavigationProps {
  userRole?: string; // Prop to manage user role for conditional rendering of Users tab
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ userRole }) => {
  const [value, setValue] = React.useState<string>('/');
  const location = useLocation();
  const navigate = useNavigate();

  // Update selected value based on current location
  React.useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: '0px -1px 10px rgba(0, 0, 0, 0.1)',
        px: 4,
      }}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label='Home'
          value='/'
          icon={<DashboardIcon />}
          sx={{ color: value === '/' ? 'primary.main' : 'text.secondary' }}
        />
        <BottomNavigationAction
          label='Properties'
          value='/properties'
          icon={<HomeWorkIcon />}
          sx={{
            color: value === '/properties' ? 'primary.main' : 'text.secondary',
          }}
        />
        <BottomNavigationAction
          label='Clients'
          value='/clients'
          icon={<PeopleIcon />}
          sx={{
            color: value === '/clients' ? 'primary.main' : 'text.secondary',
          }}
        />
        {userRole === 'admin' && (
          <BottomNavigationAction
            label='Users'
            value='/users'
            icon={<PersonIcon />}
            sx={{
              color: value === '/users' ? 'primary.main' : 'text.secondary',
            }}
          />
        )}
        <BottomNavigationAction
          label='More'
          value='/more'
          icon={<MoreHorizIcon />}
          sx={{ color: value === '/more' ? 'primary.main' : 'text.secondary' }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNavigation;
