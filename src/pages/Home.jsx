import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from 'redux/auth/selectors';

const Home = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <main>
      <h2>This is your own PHONEBOOK.</h2>
      {!isLoggedIn && (
        <h3>
          <Link to="/register" className="text-info">
            Sign Up
          </Link>{' '}
          or <Link to="/login" className='text-info'>Sign In</Link> to starting using it!
        </h3>
      )}
    </main>
  );
};

export default Home;
