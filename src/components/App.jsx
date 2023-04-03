import { Route, Routes } from 'react-router';
import Layout from 'components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatcher = useDispatch();
  const { isRefreshing } = useSelector(selectAuth);
  useEffect(() => {
    dispatcher(refreshUser());
  }, [dispatcher]);

  return isRefreshing ? (
    <p>Refreshing user</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/contacts" component={<Register />} />}
        ></Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<LogIn />} />}
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
