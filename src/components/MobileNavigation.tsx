import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
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
    console.log(event);
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{ bgcolor: 'background.paper' }}
    >
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
    </BottomNavigation>
  );
};

export default MobileNavigation;
