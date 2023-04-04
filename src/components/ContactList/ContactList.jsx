import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length === 0 && isLoading === false && error === null ? (
        <p>Phonebook is empty</p>
      ) : filteredContacts.length === 0 &&
        isLoading === false &&
        error === null ? (
        <p className='text-danger'>Contact with name '{filter}' not found</p>
      ) : (
        isLoading === false &&
        error === null && (
          <>
          <h4>Contacts count: <span>{contacts.length}</span></h4>
          <ul className='list-group'>
            {filteredContacts.map(contact => {
              return <ContactListItem key={contact.id} contact={contact} />;
            })}
          </ul>
          </>
        )
      )}
    </>
  );
};

export default ContactList;
