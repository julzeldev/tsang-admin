import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Users from '@/pages/Users';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/users' element={<Users />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
