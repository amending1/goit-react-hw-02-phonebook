import { Component } from 'react';
import css from './phonebook.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value, //name w tym przypadku to atrybut, a nie wartość
    });
  };
  // [event.target.name] - klucz dynamiczny
  //event.target.value pobiera aktualną wartość wprowadzoną przez użytkownika w polu wejściowym

  render() {
    const { name, number } = this.props;

    return (
      <div>
        <form
          className={css['form-container']}
          onSubmit={this.props.handleSubmit}
        >
          <p>Name:</p>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.props.handleChange}
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
              value={number}
              onChange={this.props.handleChange}
            />
          </label>
          <button className={css['submit-button']} type="submit" method='POST'>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
