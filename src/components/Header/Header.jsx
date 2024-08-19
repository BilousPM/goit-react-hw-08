import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations.js';
import s from './Header.module.css';

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <NavLink className={s.link} to="/">
        HOME
      </NavLink>

      {isLoggedIn && <h1>{`Welcom ${user.name}`}</h1>}
      <ul className={s.list}>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <button
            className={s.button}
            type="button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Log out
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
