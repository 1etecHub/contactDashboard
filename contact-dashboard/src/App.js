import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddContact from './pages/AddContacts';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/add-contact" element={<AddContact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
