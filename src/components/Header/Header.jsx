import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { UserBar } from 'components/UserBar/UserBar';
import { Header } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';

export const AppHeader = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Header>
      <NavBar />
      {isLoggedIn ? <UserBar /> : <AuthBar />}
    </Header>
  );
};
