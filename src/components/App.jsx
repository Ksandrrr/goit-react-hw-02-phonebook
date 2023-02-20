import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Phonebook/PhonebookForm/PhonebookForm';
import PhoneList from './Phonebook/PhoneList/PhoneList';
import Phonebookfilter from './Phonebook/PhonebookFilter/PhonebookFilter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContacts = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  saveFilterValue = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  filterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });

    return result;
  }

  delateContacts = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const items = this.filterContacts();
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContacts={this.onAddContacts}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Phonebookfilter saveFilterValue={this.saveFilterValue} />
        <PhoneList items={items} delateContacts={this.delateContacts} />
      </section>
    );
  }
}
export default App;
