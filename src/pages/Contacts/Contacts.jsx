// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
// import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
      <h1 className={s}>Phone book</h1>

      <ContactForm />
      {!isLoading && <SearchBox />}
      {isLoading && <h1>Loading....</h1>}
      <ContactList />
      {isError && <h2>{`Adding contact is not possible... ${isError}`}</h2>}
    </>
  );
};

export default Contacts;
