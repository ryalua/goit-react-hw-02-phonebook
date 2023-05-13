import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';
import { Component } from 'react';

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
            </ItemContact>
          </ListContacts>
        );
      })}
  </>
);

AddContact.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.element,
};
