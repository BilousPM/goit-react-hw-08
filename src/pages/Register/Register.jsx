import { Field, Form, Formik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialvalues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your Name" />

          <Field name="email" placeholder="Enter your Email" />
          <Field
            name="password"
            placeholder="Enter your Password"
            type="password"
          />
          <button type="submit">Register</button>

          <p>
            You already have account? <Link to="/login">Sign In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
