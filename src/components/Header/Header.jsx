// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

// import s from './Header.module.css';
// import UserMenu from '../UserMenu/UserMenu';

// const Header = () => {
//   const user = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <header className={s.header}>
//       <NavLink className={s.link} to="/">
//         HOME
//       </NavLink>
//       {isLoggedIn && <h1>{`Welcome ${user.name}`}</h1>}
//       <UserMenu />
//     </header>
//   );
// };

// export default Header;
