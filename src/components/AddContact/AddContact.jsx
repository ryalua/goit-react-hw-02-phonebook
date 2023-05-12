import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';
import { Component } from 'react';

export const AddContact = ({ contacts, number }) => (
  <ListContacts>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts.map(contact => {
        return (
          <ItemContact key={contact.id}>{contact.contact.name}</ItemContact>
          // <ItemContact>{contact.contact.number}</ItemContact>
        );
      })}
  </ListContacts>
);

AddContact.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
