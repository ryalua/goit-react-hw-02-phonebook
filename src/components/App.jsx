import React from 'react';
import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '123',
  };

  handleInput = event => {
    // this.setState(prevState => ({ name: prevState.event.currentTarget.value }));
    this.setState({ name: event.currentTarget.value });
  };

  handleBtn = event => {
    event.preventDefault();
    // const finalBookData = {
    //   id: nanoid(),
    //   ...contact,
    // };
    this.setState({ contacts: event.currentTarget.value });
    // this.setState(prevState => {
    //   return { contacts: [...prevState.books, finalBookData] };
    // });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts
            onValue={this.state.name}
            onInputChange={this.handleInput}
            onBtn={this.handleBtn}
          />
        </Section>
        <Section title={'Contacts'}>
          {/* {(this.state.good || this.state.neutral || this.state.bad) !== 0 ? ( */}
          <AddContact
            onContacts={this.state.contacts}
            onBtn={this.handleBtn}
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
