import React, { useState } from "react";
import './AddContactForm.css';

const AddContactForm = ({ onAdd }) => {
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(contact);
        setContact({ name: "", email: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
            <input
                type="text"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContactForm;
