import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { AppHeader } from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <AppHeader/>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
