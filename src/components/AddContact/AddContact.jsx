import PropTypes from 'prop-types';
import { ListContacts, ItemContcact } from './AddContactStyled';

export const AddContact = ({ onContacts }) => (
  <ListContacts>
    {/* {Array.isArray(onContacts) &&
      onContacts.length > 0 &&
      onContacts.map(contact => {
        return <ItemContcact key={contact.id}>{onContacts}</ItemContcact>;
      })} */}
  </ListContacts>
);

AddContact.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.element,
};
