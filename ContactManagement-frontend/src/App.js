import React, { useState, useEffect } from "react";
import { fetchContacts, addContact, deleteContact } from "./api";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";

const App = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        const data = await fetchContacts();
        setContacts(data);
    };

    const handleAddContact = async (contact) => {
        await addContact(contact);
        loadContacts();
    };

    const handleDeleteContact = async (id) => {
        await deleteContact(id);
        loadContacts();
    };

    return (
        <div>
            <h1>Contact Management System</h1>
            <AddContactForm onAdd={handleAddContact} />
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
        </div>
    );
};

export default App;
