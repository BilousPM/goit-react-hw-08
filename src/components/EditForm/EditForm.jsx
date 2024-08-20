import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateContacts } from '../../redux/contacts/operations';
import s from './EditForm.module.css';
import { selectCurrentContact } from '../../redux/contacts/selectors';
import { editContact } from '../../redux/contacts/slice';

const EditForm = () => {
  const dispatch = useDispatch();
  const { name, number, id } = useSelector(selectCurrentContact);

  const formSchema = Yup.object({
    name: Yup.string()
      .required('This field is required')
      .min(3, 'Name must be more than 3 charts!')
      .max(50, ' Name must be lesa than 50 charts!'),
    number: Yup.string()
      .required('This field is required')
      .min(3, 'Number must be more than 3 numbers!')
      .max(50, 'Woow... it is to match !'),
  });

  const initialValues = {
    name: name,
    number: number,
  };

  const handleSubmit = (data, actions) => {
    dispatch(updateContacts({ data, id }));
  };

  return (
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Change Contact</button>
          <button
            onClick={() => {
              dispatch(editContact(null));
            }}
            type="button"
          >
            Exit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default EditForm;
