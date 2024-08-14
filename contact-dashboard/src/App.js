import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AddContact from './pages/AddContacts';

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-cloud-blue-light">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/add-contact" element={<AddContact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
