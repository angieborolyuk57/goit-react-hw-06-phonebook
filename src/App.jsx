import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from "./store/selectors/selectors"
import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter.jsx"
import ContactList from  "./components/ContactList/ContactList.jsx"
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div className={css.app}>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length === 0 ? (
          <p className={css.contactsEmptyText}>The contact list is empty</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default App;