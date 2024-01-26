import React, { Component } from 'react';
import css from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className="App">
        <div className={css['container']}>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={this.state.contacts}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <h2>Contacts</h2>
          <Filter
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange}
            contacts={this.state.contacts}
          />
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
