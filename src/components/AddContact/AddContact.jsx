import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';

export const AddContact = ({ onContacts, contacts, name }) => (
  <ListContacts>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts.map(contact => {
        console.log(contact);
        console.log(contact.contact.name);
        return (
          <ItemContact key={contact.id}>{contact.contact.name}</ItemContact>
        );
      })}
    {/* <ItemContact>{onContacts}</ItemContact>; */}
  </ListContacts>
);

AddContact.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
