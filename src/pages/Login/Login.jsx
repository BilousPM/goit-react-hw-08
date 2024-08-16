import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialvalues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(loginThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your Email" />
          <Field
            name="password"
            placeholder="Enter your Password"
            type="password"
          />
          <button type="submit">Login</button>

          <p>
            Don't you have an account yet? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
