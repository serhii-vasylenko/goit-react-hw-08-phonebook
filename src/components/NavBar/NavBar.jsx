import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuth } from 'redux/auth/selectors';

export const NavBar = () => {
  const {isLoggedIn} = useSelector(selectAuth);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
       {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
