import { FaRegUser, FaPhone } from 'react-icons/fa';

import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { editContact } from '../../redux/contacts/slice';

const Contact = ({ contact, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        className={s.button}
      >
        Delete
      </button>
      <button
        onClick={() => dispatch(editContact({ ...contact, id }))}
        type="button"
        className={s.button}
      >
        Edit
      </button>
    </div>
  );
};

export default Contact;
