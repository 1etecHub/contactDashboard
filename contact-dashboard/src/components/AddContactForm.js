import React, { useState } from 'react';
import { saveContact } from '../utils/localStorage';

const AddContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    addresses: [''],
    longitude: '',
    latitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleAddressChange = (index, value) => {
    const updatedAddresses = contact.addresses.map((addr, i) =>
      i === index ? value : addr
    );
    setContact(prevContact => ({
      ...prevContact,
      addresses: updatedAddresses
    }));
  };

  const handleAddAddress = () => {
    if (contact.addresses.length < 5) {
      setContact(prevContact => ({
        ...prevContact,
        addresses: [...prevContact.addresses, '']
      }));
    }
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = contact.addresses.filter((_, i) => i !== index);
    setContact(prevContact => ({
      ...prevContact,
      addresses: updatedAddresses
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (
      contact.name &&
      /^[0-9]+$/.test(contact.phoneNumber) &&
      /\S+@\S+\.\S+/.test(contact.email) &&
      contact.addresses.every(addr => addr !== '')
    ) {
      saveContact(contact);
      setContact({
        name: '',
        phoneNumber: '',
        email: '',
        addresses: [''],
        longitude: '',
        latitude: '',
      });
    } else {
      alert('Please fill in all required fields with valid data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Addresses</label>
        {contact.addresses.map((address, index) => (
          <div key={index}>
            <input
              type="text"
              value={address}
              onChange={(e) => handleAddressChange(index, e.target.value)}
              required
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveAddress(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        {contact.addresses.length < 5 && (
          <button type="button" onClick={handleAddAddress}>
            Add Address
          </button>
        )}
      </div>
      <div>
        <label>Longitude</label>
        <input type="text" name="longitude" value={contact.longitude} disabled />
      </div>
      <div>
        <label>Latitude</label>
        <input type="text" name="latitude" value={contact.latitude} disabled />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddContactForm;
