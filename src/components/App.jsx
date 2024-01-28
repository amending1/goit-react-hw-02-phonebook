import React, { Component } from 'react';
import css from './phonebook.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = event => {
    //zatrzymuje domyślną akcję przeglądarki, czyli przesłanie formularza i przeładowanie strony
    event.preventDefault();

    //pobieram nazwę nowego kontaktu i aktualną lista kontaktów
    const { name, contacts, number } = this.props;

    // Sprawdzanie, czy nazwa nowego kontaktu nie jest pusta - zabezpiecza przed dodaniem pustego pola
    if (name.trim() === '') return;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState({
      //stan aplikacji jest aktualizowany poprzez dodanie nowego kontaktu do listy kontaktów za pomocą spread operatora
      contacts: [...contacts, newContact],
      //wartość nazwy jest resetowana do pustego ciągu, aby wyczyścić pole wejściowe
      name: '',
      number: '',
    });
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
