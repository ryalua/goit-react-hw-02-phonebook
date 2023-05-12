import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';
import { Component } from 'react';

export const AddContact = ({ contacts }) => (
  <ListContacts>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts.map(contact => {
        return (
          <ItemContact key={contact.id}>{contact.contact.name}</ItemContact>
        );
      })}
    {/* <ItemContact>{onContacts}</ItemContact>; */}
  </ListContacts>
);
console.log('Hello');
AddContact.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
