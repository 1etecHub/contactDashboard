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

  const getRandomCoordinates = () => {
    const latMin = 4.0; // Southernmost latitude of Nigeria
    const latMax = 14.0; // Northernmost latitude of Nigeria
    const lonMin = 3.0; // Westernmost longitude of Nigeria
    const lonMax = 15.0; // Easternmost longitude of Nigeria
  
    const latitude = (Math.random() * (latMax - latMin) + latMin).toFixed(4);
    const longitude = (Math.random() * (lonMax - lonMin) + lonMin).toFixed(4);
  
    return { latitude, longitude };
  };

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
      // Assign random longitude and latitude
      const { latitude, longitude } = getRandomCoordinates();
      const newContact = {
        ...contact,
        latitude,
        longitude
      };
      saveContact(newContact);
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
    <form onSubmit={handleSubmit} className="bg-blue-200 p-6 rounded-lg shadow-md max-w-lg mx-auto  space-y-4">
      <div>
        <label className="block text-blue-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-blue-400 rounded"
        />
      </div>
      <div>
        <label className="block text-blue-700 mb-2">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-blue-400 rounded"
        />
      </div>
      <div>
        <label className="block text-blue-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-blue-400 rounded"
        />
      </div>
      <div>
        <label className="block text-blue-700 mb-2">Addresses</label>
        {contact.addresses.map((address, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={address}
              onChange={(e) => handleAddressChange(index, e.target.value)}
              required
              className="w-full p-2 border border-blue-400 rounded"
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveAddress(index)} className="ml-2 text-blue-700">
                Remove
              </button>
            )}
          </div>
        ))}
        {contact.addresses.length < 5 && (
          <button type="button" onClick={handleAddAddress} className="mt-2 text-blue-700">
            Add Address
          </button>
        )}
      </div>
      <div>
        <label className="block text-blue-700 mb-2">Longitude</label>
        <input type="text" name="longitude" value={contact.longitude} disabled className="w-full p-2 border border-blue-400 rounded bg-gray-100" />
      </div>
      <div>
        <label className="block text-blue-700 mb-2">Latitude</label>
        <input type="text" name="latitude" value={contact.latitude} disabled className="w-full p-2 border border-blue-400 rounded bg-gray-100" />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};


export default AddContactForm;
