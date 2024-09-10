import DarkModeToggle from '@/components/DarkMode';
import { DarkMode } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DarkMode />
      <DarkModeToggle />
    </div>
  );
};

export default Dashboard;
