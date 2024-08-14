import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserPlus } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar bg-cloud-blue text-blue w-full md:w-64 h-auto md:h-screen flex-shrink-0">
    <ul className="flex flex-col space-y-4 p-4">
      <li>
        <Link
          to="/"
          className="flex items-center space-x-2 hover:bg-cloud-blue-dark rounded px-2 py-1"
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="/add-contact"
          className="flex items-center space-x-2 hover:bg-cloud-blue-dark rounded px-2 py-1"
        >
          <FaUserPlus /> <span>Add Contact</span>
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
