import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { regiserThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const initialvalues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(regiserThunk(values));
    options.resetForm();
  };

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
