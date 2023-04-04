import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { Link } from 'components/Common.styled';

export const NavBar = () => {
  const {isLoggedIn} = useSelector(selectAuth);
  return (
    <nav>
      <Link to="/" className='me-3'>Home</Link>
       {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
