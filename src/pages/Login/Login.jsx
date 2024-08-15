import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialvalues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

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
