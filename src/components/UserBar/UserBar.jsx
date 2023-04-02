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
    <div>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
