import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';

export const AddContact = ({ contacts, filter }) => (
  <>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return (
            <ListContacts key={contact.id}>
              <ItemContact>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button
                  // className={css.button}
                  type="button"
                  // onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </ItemContact>
            </ListContacts>
          );
        })}
  </>
);

AddContact.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
