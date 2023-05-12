import PropTypes from 'prop-types';
import { ListContacts, ItemContact } from './AddContactStyled';
import { Component } from 'react';

export const AddContact = ({ contacts, number }) => (
  <>
    {Array.isArray(contacts) &&
      contacts.length > 0 &&
      contacts.map(contact => {
        return (
          <ListContacts>
            <ItemContact key={contact.id}>
              <p>{contact.contact.name}</p>
              <p>{contact.contact.number}</p>
            </ItemContact>
            {/* <ItemContact key={contact.id}>{contact.contact.number}</ItemContact> */}
          </ListContacts>
        );
      })}
  </>
);

AddContact.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
