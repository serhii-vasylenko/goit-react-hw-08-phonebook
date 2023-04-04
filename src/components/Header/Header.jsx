import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { UserBar } from 'components/UserBar/UserBar';
import { Header } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { Container } from 'react-bootstrap';

export const AppHeader = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Header  className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
      <NavBar />
      {isLoggedIn ? <UserBar /> : <AuthBar />}
      </Container>
    </Header>
  );
};
