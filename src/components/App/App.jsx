import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import { PublicRoute } from '../../Routes/PublicRoute';
import { selectIsRefresh } from '../../redux/auth/selectors';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import Loader from '../Loader/Loader';

const Contacts = lazy(() => import('../../pages/ContactsPage/Contacts'));
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFound'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
