import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook.jsx';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // [event.target.name] - klucz dynamiczny
  //event.target.value pobiera aktualną wartość wprowadzoną przez użytkownika w polu wejściowym

  handleNumber = event => {
    this.setState({
      [event.target.number]: event.target.value,
    });
  };

  handleSubmit = event => {
    //zatrzymuje domyślną akcję przeglądarki, czyli przesłanie formularza i przeładowanie strony
    event.preventDefault();

    //pobieram nazwę nowego kontaktu i aktualną lista kontaktów
    const { name, contacts, number } = this.state;

    // Sprawdzanie, czy nazwa nowego kontaktu nie jest pusta - zabezpiecza przed dodaniem pustego pola
    if (name.trim() === '') return;

    const newContact = {
      name,
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
        <Phonebook
          name={this.state.name}
          number={this.state.number}
          contacts={this.state.contacts}
          EnterName={this.handleName}
          EnterNumber={this.handleNumber}
          SubmitNewContact={this.handleSubmit}
        />
      </div>
    );
  }
}
