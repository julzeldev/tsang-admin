import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Clients from './pages/Clients';
import Users from './pages/Users';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/users' element={<Users />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
