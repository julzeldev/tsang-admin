import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';

const Layout: React.FC = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>

      <footer>
        <MobileNavigation userRole='admin' />
      </footer>
    </div>
  );
};

export default Layout;
