import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectNameFilter } from '../../redux/filters/selectors';

import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      {filterName.length ? (
        filterName.map(contact => (
          <Contact key={contact.id} contact={contact} id={contact.id} />
        ))
      ) : (
        <h1>No Contacts in your phone book</h1>
      )}
    </div>
  );
};

export default ContactList;
