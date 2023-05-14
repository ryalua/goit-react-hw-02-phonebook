// import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';
// import { Component } from 'react';

export const AddContact = ({ contacts }) => (
  <>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts.map(contact => {
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
  // contacts: PropTypes.string,
  // children: PropTypes.element,
};
