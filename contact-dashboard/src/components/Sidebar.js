import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserPlus } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/"><FaTachometerAlt /> Dashboard</Link></li>
      <li><Link to="/add-contact"><FaUserPlus /> Add Contact</Link></li>
    </ul>
  </div>
);

export default Sidebar;
