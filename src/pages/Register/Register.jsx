import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialvalues = {
    name: '',
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
