import { Component } from 'react';
import css from './phonebook.module.css';

class Phonebook extends Component {
  render() {
    const { name, contacts, number } = this.props;
    return (
      <div className={css['container']}>
        <h1>Phonebook</h1>
        <form
          className={css['form-container']}
          onSubmit={this.props.SubmitNewContact}
        >
          <p>Name:</p>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.props.name}
              onChange={this.props.EnterName}
            />
          </label>
          <p>Number:</p>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.props.number}
              onChange={this.props.EnterNumber}
            />
          </label>
          <button className={css['submit-button']} type="submit">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        {/* Dla każdego elementu kontaktu w tablicy contacts, tworzony jest element <li>, który zawiera nazwę tego kontaktu */}
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name} {contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
