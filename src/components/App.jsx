import React, { Component } from 'react';
import css from './phonebook.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    const { name, number } = contact;

    // Sprawdzanie, czy nazwa nowego kontaktu nie jest pusta - zabezpiecza przed dodaniem pustego pola
    if (name.trim() === '') return;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState({
      //stan aplikacji jest aktualizowany poprzez dodanie nowego kontaktu do listy kontaktów za pomocą spread operatora
      contacts: [...this.state.contacts, newContact],
      //wartość nazwy jest resetowana do pustego ciągu, aby wyczyścić pole wejściowe
      name: '',
      number: '',
    });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  };
 
 

  render() {
    return (
      <div className="App">
        <div className={css['container']}>
          <h1>Phonebook</h1>
          <ContactForm
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} contacts={this.state.contacts}  handleFilterChange={this.handleFilterChange} />
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
