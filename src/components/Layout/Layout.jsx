import { Link, NavLink } from 'react-router-dom';

const { Suspense } = require('react');
const { Outlet } = require('react-router');

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <div>
          <p>Welcome</p>
          <button type="button">Logout</button>
        </div>
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
