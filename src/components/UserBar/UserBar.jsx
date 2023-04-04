import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

export const UserBar = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="d-flex align-items-center">
      <p className="me-3">
        Welcome{' '}
        <span className="text-uppercase fw-bolder text-info">{user.name}</span>
      </p>
      <Button variant="secondary" type="button" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};
