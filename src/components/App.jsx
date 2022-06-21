import { useState } from 'react';

import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import useLocalStorage from './hooks/useLocalStorage';

import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const saveContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = id => {
    const remainigContacts = contacts.filter(contact => contact.id !== id);

    setContacts(remainigContacts);
  };

  return (
    <div className={s.app}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm addContact={saveContact} />

      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} onChange={e => setFilter(e.target.value)} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={contacts}
          filter={filter}
          delContact={deleteContact}
        />
      )}
    </div>
  );
};
// }
