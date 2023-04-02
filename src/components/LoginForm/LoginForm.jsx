import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      loginUser({
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
