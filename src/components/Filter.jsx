import React from 'react';

const Filter = ({ filter, handleFilterChange, contacts }) => {

  //.includes(filter) sprawdza, czy nazwa kontaktu zawiera podany ciąg znaków, który jest przechowywany w stanie jako filter. Jeśli tak, zwraca true, co oznacza, że kontakt zostanie zachowany
 const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      ></input>
      <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Filter;
