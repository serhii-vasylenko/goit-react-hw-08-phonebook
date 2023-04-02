import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      registerUser({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
