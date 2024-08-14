import React from 'react';

const DashboardTable = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-blue-300 table-fixed">
        <thead className="bg-blue-200">
          <tr>
            <th className="py-2 px-4 border-b border-blue-300">Name</th>
            <th className="py-2 px-4 border-b border-blue-300">Phone Number</th>
            <th className="py-2 px-4 border-b border-blue-300">Email</th>
            <th className="py-2 px-4 border-b border-blue-300">Address</th>
            <th className="py-2 px-4 border-b border-blue-300">Longitude</th>
            <th className="py-2 px-4 border-b border-blue-300">Latitude</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="hover:bg-blue-100">
              <td className="py-2 px-4 border-b border-blue-300">{contact.name}</td>
              <td className="py-2 px-4 border-b border-blue-300">{contact.phoneNumber}</td>
              <td className="py-2 px-4 border-b border-blue-300">{contact.email}</td>
              <td className="py-2 px-4 border-b border-blue-300">{contact.addresses[Math.floor(Math.random() * contact.addresses.length)]}</td>
              <td className="py-2 px-4 border-b border-blue-300">{contact.longitude}</td>
              <td className="py-2 px-4 border-b border-blue-300">{contact.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
