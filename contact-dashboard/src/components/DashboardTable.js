import React from 'react';

const DashboardTable = ({ contacts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>{contact.addresses[Math.floor(Math.random() * contact.addresses.length)]}</td>
            <td>{contact.longitude}</td>
            <td>{contact.latitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;
