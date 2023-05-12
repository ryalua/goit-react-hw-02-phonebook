import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import 'react-toastify/dist/ReactToastify.css';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleContact = contact => {
    const newContact = {
      id: nanoid(),
      contact,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: contact.name,
    }));

    toast.success(`Contact of ${contact.name} successfully added!`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts onAddContact={this.handleContact} />
        </Section>
        <Section title={'Contacts'}>
          <AddContact contacts={this.state.contacts} />
        </Section>
        <ToastContainer />
      </>
    );
  }
}
