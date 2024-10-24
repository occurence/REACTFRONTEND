import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';

/* Controlled Form Component vs Uncontrolled Form Component
 *
 * Controlled - data is controlled by state
 * Uncontrolled - data is controlled by the DOM
 */

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();//

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        // name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    // );
  ).then(() => {
    navigate('/login');
    form.reset();
  });
    // form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {/* <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label> */}
      <label className={css.label}>
        Email
        {/* <input type="email" name="email" /> */}
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label className={css.label}>
        Password
        {/* <input type="password" name="password" /> */}
        <input type="password" name="password" autoComplete="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
