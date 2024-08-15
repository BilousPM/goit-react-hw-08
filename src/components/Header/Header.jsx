import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>Auth</h2>
      <h3>Name</h3>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
