// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Users from '@/pages/Users';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/users' element={<Users />} />
      {/* Catch-all for 404 */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
