import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleContact = ({ id, name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      // name: contact.name,
    }));

    toast.success(`Contact of ${name} successfully added!`, {
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

  handleQuery = filter => {
    this.setState({ filter: filter });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts onAddContact={this.handleContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={this.handleQuery} />
          <AddContact
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </Section>
        <ToastContainer />
      </>
    );
  }
}
