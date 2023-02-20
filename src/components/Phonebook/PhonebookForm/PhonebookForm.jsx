import Style from '../../Phonebook.module.css';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: ``,
    number: ``,
  };
  handleNameChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (this.isDublicate({ name, number })) {
      const { name } = this.state;
      alert(`${name} is already in contacts`);
      return;
    }

    const { onAddContacts } = this.props;
    onAddContacts({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  isDublicate({ name, number }) {
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();
    const normalizedPhone = number.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedPhone
      );
    });
    return Boolean(dublicate);
  }

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={Style.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
            value={name}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNameChange}
            value={number}
          />
        </label>
        <button type="submit" className={Style.btn}>
          Add Contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
