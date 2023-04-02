import { NavBar } from 'components/NavBar/NavBar';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { UserBar } from 'components/UserBar/UserBar';
import { Header } from './Header.styled';

export const AppHeader = () => {
  return (
    <Header>
      <NavBar />
      <UserBar />
      <AuthBar />
    </Header>
  );
};
