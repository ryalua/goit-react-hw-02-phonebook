import React from 'react';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    console.log(newContact);
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
    // this.setState({ contacts: [...this.state.contacts, newContact] });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts onAddContact={this.handleContact} />
        </Section>
        <Section title={'Contacts'}>
          {/* {(this.state.good || this.state.neutral || this.state.bad) !== 0 ? ( */}
          <AddContact
            // title={'Contacts'}
            onContacts={this.state.contacts}
            // onBtn={this.handleBtn}
            // neutral={this.state.neutral}
            // bad={this.state.bad}
            // total={this.countTotalFeedback()}
            // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          {/* ) : (
            <Notification message={'There is no feedback'} />
          )} */}
        </Section>
      </>
    );
  }
}
