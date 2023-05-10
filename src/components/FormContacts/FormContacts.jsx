import PropTypes from 'prop-types';
import {
  StyledForm,
  FormLabel,
  LabelName,
  FormBtn,
} from './FormContactsStyled';

// import React, { Component } from 'react';

// export class FormContacts extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   render() {
//     return (
//       <StyledForm>
//         <FormLabel className="form-label">
//           <LabelName className="label-name">Name</LabelName>
//           <input
//             type="text"
//             value={this.state.name}
//             name={'name'}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             // onChange={this.handleChange}
//           />
//         </FormLabel>
//         <FormBtn type="submit" className="form-btn">
//           Add contact
//         </FormBtn>
//       </StyledForm>
//     );
//   }
// }

// export default FormContacts;

export const FormContacts = ({ onValue, onInputChange, onBtn }) => (
  <StyledForm onSubmit={onBtn}>
    <FormLabel className="form-label">
      <LabelName className="label-name">Name</LabelName>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={onValue}
        onChange={onInputChange}
      />
    </FormLabel>
    <FormBtn type="submit" className="form-btn">
      Add contact
    </FormBtn>
  </StyledForm>
);

FormContacts.propTypes = {
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};
