import React, { useState } from 'react';

function ContactManager() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    if (name && email) {
      const newContact = { name, email };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-manager">
      <h1>Contact Manager</h1>
      <form onSubmit={addContact} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      <div className="contacts">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <span>{contact.name} ({contact.email})</span>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactManager;
