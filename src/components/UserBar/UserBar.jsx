import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  }
  return (
    <div>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={handleClick}>Logout</button>
    </div>
  );
};
