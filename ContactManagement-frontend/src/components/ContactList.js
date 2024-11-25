import React from "react";
import './ContactList.css';


const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    <button onClick={() => onDelete(contact.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ContactList;
