import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logOutThunk } from '../../redux/auth/operations';

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header>
      <h2>Auth</h2>
      <h3>{user.name}</h3>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
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
            type="button"
            onClick={() => {
              dispatch(logOutThunk());
            }}
          >
            Exit
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
