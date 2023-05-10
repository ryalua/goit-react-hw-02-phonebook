import PropTypes from 'prop-types';
import { ListContacts, ItemContcact } from './AddContactStyled';

export const AddContact = ({ onBtn }) => (
  <ListContacts>
    <ItemContcact>{onBtn}</ItemContcact>
  </ListContacts>
);

AddContact.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.element,
};
