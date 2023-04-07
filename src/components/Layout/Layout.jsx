import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { AppHeader } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div className='container  bg-light mt-3'>
      <AppHeader/>
      <Suspense fallback={<div>Loading</div>}>
        <main className='container pb-3  vh-100 w-75'>
        <Outlet />
        </main>
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Layout;
