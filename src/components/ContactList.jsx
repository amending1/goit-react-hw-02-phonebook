import React from 'react';
import ContactItem from './ContactItem.jsx';
import css from './phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact  }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <div className={css['list-item']}><ContactItem key={contact.id} name={contact.name} number={contact.number} />
        <button className={css['delete-button']} onClick={ () => onDeleteContact(contact.id)}>Delete</button></div>
      ))}
    </ul>
  );
};

export default ContactList;