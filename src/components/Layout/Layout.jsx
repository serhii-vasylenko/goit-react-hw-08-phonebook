import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { AppHeader } from 'components/Header/Header';

const Layout = () => {
  return (
    <div className='container  bg-light mt-3'>
      <AppHeader/>
      <Suspense fallback={<div>Loading</div>}>
        <main className='container pb-3  vh-100 w-75'>
        <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
