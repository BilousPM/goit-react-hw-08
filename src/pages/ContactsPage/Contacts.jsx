import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
  selectCurrentContact,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import EditForm from '../../components/EditForm/EditForm';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);
  return (
    <>
      <h1 className={s}>Phone book</h1>
      {currentContact ? <EditForm /> : <ContactForm />}
      {isError && (
        <h2>{`Something went wrong... Adding contact is not possible... ${isError}`}</h2>
      )}

      {!isLoading && <SearchBox />}
      {isLoading && <h1>Loading....</h1>}
      <ContactList />
    </>
  );
};

export default Contacts;
